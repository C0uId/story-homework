import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { knowledgeMap } from '../data/knowledgeMap'
import branchingData, { recaps } from '../data/branchingData'
import { recordEpisodeComplete, recordChapterComplete, getChapterProgress, recordChapterReview, getReviewStageName } from '../utils/learningProgress'
import { getCharacter, addExp, unlockSkill, tryUnlockTalent, increaseSubjectMastery, hasCharacter, EXP_VALUES, submitStoryPersonalityChoice, addExplorationPoints } from '../utils/characterSystem'
import { generateStoryForPoint, generateStoryForChapter, generateNextBatch } from '../utils/storyGenerator'
import { speak, stop as ttsStop, togglePause, getIsPaused, getSettings as getTTSSettings, updateSetting as updateTTSSetting, toggleEnabled as ttsToggleEnabled, isTTSAvailable } from '../utils/tts'
import { THEME_STYLES } from '../data/themes'

export default function useStoryPlayer({ grade, subject, theme, mode, pointId, chapterId, isReviewMode }) {
  const router = useRouter()

  const ts = computed(() => THEME_STYLES[theme] || THEME_STYLES.martial)

  // ===== State =====
  const storyData = ref(null)
  const currentEpisodeIndex = ref(0)
  const showQuestion = ref(false)
  const selectedAnswer = ref(null)
  const answerResult = ref(null)
  const completedEpisodes = ref(new Set())
  const typingText = ref('')
  const isTyping = ref(false)
  const typingTimer = ref(null)
  const currentQuestionIndex = ref(0)
  const episodeScore = ref({ correct: 0, total: 0 })

  // 性格探测
  const personalityResult = ref(null)
  const showPersonalityInsight = ref(false)

  // Recap
  const showRecap = ref(false)
  const recapText = ref('')
  const showChapterComplete = ref(false)

  // Review
  const showReviewRecap = ref(false)
  const reviewRecapText = ref('')

  // 角色解锁
  const characterUnlocks = ref({ skill: null, talent: null })

  // Wrong Path
  const showWrongPath = ref(false)
  const wrongPathText = ref('')
  const isWrongTyping = ref(false)
  const wrongTypingTimer = ref(null)

  // AI 状态
  const isAIGenerating = ref(false)
  const aiGenerateProgress = ref('')
  const streamingText = ref('')
  const nextBatchLoading = ref(false)
  const nextBatchProgress = ref('')
  const characterName = ref('')

  // TTS
  const ttsEnabled = ref(getTTSSettings().enabled)
  const ttsSpeaking = ref(false)
  const ttsPaused = ref(false)
  const showTTSSettings = ref(false)
  const ttsRate = ref(getTTSSettings().rate)

  // 勇气机制 & 连击
  const comboCount = ref(0)        // 连续答对计数
  const wrongAttempts = ref(0)     // 当前题答错次数（0/1/2）
  const showHint = ref(false)      // 是否显示提示
  const currentHint = ref('')      // 当前提示文字
  const explorationGained = ref(0) // 本题获得的探索值（用于动画显示）
  const showExplorationAnim = ref(false) // 探索值获取动画
  const showComboAnim = ref(false) // 连击动画
  const correctAnimKey = ref(0)    // 答对动画触发key
  const wrongAnimKey = ref(0)      // 答错动画触发key

  // Review scoring
  const sessionCorrectAnswers = ref(0)

  // Progress tracking flag
  let progressTrackingHandled = false

  // ===== Computed =====
  const currentEpisode = computed(() => storyData.value?.episodes?.[currentEpisodeIndex.value])
  const totalEpisodes = computed(() => storyData.value?.episodes?.length || 0)
  const progress = computed(() => totalEpisodes.value > 0 ? ((currentEpisodeIndex.value + 1) / totalEpisodes.value) * 100 : 0)
  const currentQuestions = computed(() => currentEpisode.value?.questions || (currentEpisode.value?.question ? [currentEpisode.value.question] : []))
  const currentQuestion = computed(() => currentQuestions.value[currentQuestionIndex.value] || null)
  const isLastQuestion = computed(() => currentQuestionIndex.value >= currentQuestions.value.length - 1)
  const isReviewEpisode = computed(() => currentEpisode.value?.type === 'review')
  const isPersonalityQuestion = computed(() => currentQuestion.value?.type === 'personality')
  const gradeInfo = computed(() => knowledgeMap.grades.find(g => g.id === grade))
  const subjectInfo = computed(() => knowledgeMap.subjects.find(s => s.id === subject))

  const chapterRecapSummary = computed(() => {
    if (!storyData.value?.episodes) return ''
    const titles = storyData.value.episodes.map(ep => ep.title).join('、')
    const knowledgePoints = storyData.value.episodes.map(ep => ep.knowledge).filter(Boolean).join('、')
    return `本章共 ${totalEpisodes.value} 集故事，涵盖了${knowledgePoints || titles}。`
  })

  const chapterProgressInfo = computed(() => {
    if (!chapterId) return null
    return getChapterProgress(chapterId)
  })

  const nextReviewDisplay = computed(() => {
    if (!chapterProgressInfo.value?.nextReview) return ''
    const diff = chapterProgressInfo.value.nextReview - Date.now()
    if (diff <= 0) return '现在就可以复习了！'
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)
    if (days > 0) return `${days} 天后复习`
    return `${hours} 小时后复习`
  })

  const hasNextChapter = computed(() => {
    if (mode !== 'persistent' || !chapterId) return false
    const subjectData = knowledgeMap[subject]
    if (!subjectData) return false
    const gradeData = subjectData[grade]
    if (!gradeData) return false
    const chapters = gradeData.chapters
    const currentIdx = chapters.findIndex(ch => ch.id === chapterId)
    return currentIdx < chapters.length - 1
  })

  // ===== Watchers =====
  watch(currentQuestionIndex, () => {
    personalityResult.value = null
    showPersonalityInsight.value = false
  })

  // ===== Typing =====
  function startTyping(text) {
    if (!text) return
    if (typingTimer.value) { clearInterval(typingTimer.value); typingTimer.value = null }
    isTyping.value = true; typingText.value = ''
    let i = 0
    typingTimer.value = setInterval(() => {
      if (i < text.length) { typingText.value += text[i]; i++ }
      else {
        clearInterval(typingTimer.value); typingTimer.value = null; isTyping.value = false
        if (ttsEnabled.value && isTTSAvailable()) {
          ttsSpeaking.value = true
          speak(text, {
            onEnd: () => { ttsSpeaking.value = false; ttsPaused.value = false },
          })
        }
      }
    }, 25)
  }

  function startWrongTyping(text) {
    if (!text) return
    if (wrongTypingTimer.value) { clearInterval(wrongTypingTimer.value); wrongTypingTimer.value = null }
    isWrongTyping.value = true; wrongPathText.value = ''
    let i = 0
    wrongTypingTimer.value = setInterval(() => {
      if (i < text.length) { wrongPathText.value += text[i]; i++ }
      else { clearInterval(wrongTypingTimer.value); wrongTypingTimer.value = null; isWrongTyping.value = false }
    }, 25)
  }

  // ===== Recap =====
  function generateRecap(prevEpisode, nextEpisodeId) {
    if (nextEpisodeId && recaps[nextEpisodeId]) return recaps[nextEpisodeId]
    if (!prevEpisode) return '上一集的故事精彩纷呈，让我们继续冒险吧！'
    const narrative = prevEpisode.narrative || ''
    const scene = prevEpisode.scene || ''
    if (narrative.length <= 120) return `${scene}——${narrative}`
    const sentences = narrative.split(/[。！？.!?]/).filter(s => s.trim())
    const recap = sentences.slice(0, 3).join('。') + '。'
    if (recap.length > 150) return recap.substring(0, 147) + '...'
    return recap
  }

  // ===== Progress =====
  function trackEpisodeProgress(wentThroughWrongPath = false) {
    const score = wentThroughWrongPath ? 40 : (answerResult.value === true ? 100 : (answerResult.value === false ? 40 : 70))
    recordEpisodeComplete(pointId, subject, grade, chapterId, score, wentThroughWrongPath)
  }

  // ===== Preload =====
  function preloadNextBatch(currentData) {
    if (!chapterId || !currentData?._allPointsLoaded || nextBatchLoading.value) return
    nextBatchLoading.value = true
    nextBatchProgress.value = '正在预加载下一部分...'

    generateNextBatch(chapterId, subject, grade, theme, currentData.episodes || [], {
      characterName: characterName.value,
      stream: false,
    }).then((newEpisodes) => {
      if (newEpisodes && newEpisodes.length > 0 && storyData.value) {
        storyData.value = {
          ...storyData.value,
          episodes: [...(storyData.value.episodes || []), ...newEpisodes],
          _batchesLoaded: (storyData.value._batchesLoaded || 1) + 1,
          _allPointsLoaded: newEpisodes.length < 5,
        }
      }
      nextBatchLoading.value = false
      nextBatchProgress.value = ''
    }).catch((err) => {
      console.warn('preload next batch failed:', err)
      nextBatchLoading.value = false
      nextBatchProgress.value = ''
    })
  }

  // ===== Story start =====
  function startStoryIfNeeded() {
    if (storyData.value?.episodes?.length > 0) {
      if (isReviewMode && chapterId) {
        const progress = getChapterProgress(chapterId)
        const stageName = progress ? getReviewStageName(progress.reviewStage) : '复习'
        const epTitles = storyData.value.episodes.map(ep => `EP${storyData.value.episodes.indexOf(ep) + 1}: ${ep.title}（${ep.knowledge}）`).join('\n')
        reviewRecapText.value = `This is review. Stage: ${stageName}.\n\n${epTitles}`
        showReviewRecap.value = true
      } else {
        startTyping(storyData.value.episodes[0].narrative)
      }
    }
  }

  // ===== Actions =====
  function handleShowQuestion() {
    currentQuestionIndex.value = 0
    episodeScore.value = { correct: 0, total: currentQuestions.value.length }
    showQuestion.value = true
  }

  function selectAnswer(idx) {
    if (answerResult.value !== null) return
    const q = currentQuestion.value
    if (!q) return

    selectedAnswer.value = idx

    let isCorrect = false
    if (q.type === 'fillblank') {
      isCorrect = (q.answer || '').trim() === (q.text.match(/____/g) ? String.fromCharCode(65 + idx) : String(idx))
    } else {
      isCorrect = idx === q.correct
    }

    // 第一次答对
    if (isCorrect) {
      answerResult.value = true
      sessionCorrectAnswers.value++
      episodeScore.value.correct++
      comboCount.value++
      wrongAttempts.value = 0
      showHint.value = false

      // 探索值奖励
      let expAmount = 10
      if (comboCount.value >= 3) {
        expAmount = 20 // 连击翻倍
        showComboAnim.value = true
        setTimeout(() => { showComboAnim.value = false }, 1500)
      }
      explorationGained.value = expAmount
      showExplorationAnim.value = true
      setTimeout(() => { showExplorationAnim.value = false }, 1200)

      // 触发答对动画
      correctAnimKey.value++

      completedEpisodes.value.add(currentEpisodeIndex.value)

      if (hasCharacter()) {
        addExplorationPoints(expAmount, isCorrect ? '答对题目' : '参与答题')
        addExp(isCorrect ? EXP_VALUES.episodeCorrect : 5, isCorrect ? '答对题目' : '参与答题')
        if (isCorrect) {
          increaseSubjectMastery(subject, 5)
        }
      }
      return
    }

    // 答错处理
    wrongAttempts.value++
    comboCount.value = 0 // 连击中断

    // 触发答错动画
    wrongAnimKey.value++

    if (wrongAttempts.value === 1) {
      // 第一次答错 → 勇气机制：显示提示，允许重试
      answerResult.value = false // 先显示答错
      explorationGained.value = 5
      showExplorationAnim.value = true
      setTimeout(() => { showExplorationAnim.value = false }, 1200)

      if (hasCharacter()) {
        addExplorationPoints(5, '参与答题')
        addExp(5, '参与答题')
      }

      // 显示提示
      const hint = currentQuestion.value?.hint || '仔细想想，答案就在故事里哦～'
      currentHint.value = hint
      setTimeout(() => { showHint.value = true }, 600)

      completedEpisodes.value.add(currentEpisodeIndex.value)
      return
    }

    // 第二次答错 → 分支叙事
    answerResult.value = false
    completedEpisodes.value.add(currentEpisodeIndex.value)

    if (hasCharacter()) {
      addExplorationPoints(5, '参与答题')
      addExp(5, '参与答题')
    }

    const epId = currentEpisode.value.id
    const branch = branchingData[epId]
    const wrongNarrative = currentEpisode.value.wrongNarrative || branch?.wrongNarrative
    if (wrongNarrative) {
      setTimeout(() => {
        showWrongPath.value = true
        startWrongTyping(wrongNarrative)
      }, 800)
    }
  }

  function useHintRetry() {
    // 隐藏提示，重置答案状态允许重试
    showHint.value = false
    selectedAnswer.value = null
    answerResult.value = null
    wrongAttempts.value = 1 // 标记为已答错1次，下次答错直接进分支
  }

  function selectPersonalityChoice(option) {
    if (showPersonalityInsight.value) return
    const result = submitStoryPersonalityChoice(option.trait)
    personalityResult.value = result
    showPersonalityInsight.value = true
    if (hasCharacter()) {
      addExp(8, '性格探索')
    }
  }

  function handleNextQuestion() {
    if (!isLastQuestion.value) {
      currentQuestionIndex.value++
      selectedAnswer.value = null
      answerResult.value = null
      personalityResult.value = null
      showPersonalityInsight.value = false
      // 重置勇气机制状态
      wrongAttempts.value = 0
      showHint.value = false
      currentHint.value = ''
      explorationGained.value = 0
    } else {
      nextEpisode()
    }
  }

  function nextEpisode() {
    ttsStop(); ttsSpeaking.value = false
    if (currentEpisodeIndex.value < totalEpisodes.value - 1) {
      // 重置勇气机制状态
      wrongAttempts.value = 0
      showHint.value = false
      currentHint.value = ''
      comboCount.value = 0
      if (!progressTrackingHandled && pointId) {
        trackEpisodeProgress(false)
      }
      progressTrackingHandled = false
      currentEpisodeIndex.value++
      showQuestion.value = false; selectedAnswer.value = null; answerResult.value = null
      currentQuestionIndex.value = 0; episodeScore.value = { correct: 0, total: 0 }
      personalityResult.value = null; showPersonalityInsight.value = false
      startTyping(storyData.value.episodes[currentEpisodeIndex.value].narrative)

      if (mode === 'persistent' && chapterId && currentEpisodeIndex.value >= 3 && storyData.value && !storyData.value._allPointsLoaded && !nextBatchLoading.value) {
        preloadNextBatch(storyData.value)
      }
    } else if (mode === 'persistent' && chapterId && storyData.value && !storyData.value._allPointsLoaded && !nextBatchLoading.value) {
      preloadNextBatch(storyData.value)
    }
  }

  function dismissRecap(skipAhead) {
    ttsStop(); ttsSpeaking.value = false
    showRecap.value = false
    if (!progressTrackingHandled && pointId) {
      trackEpisodeProgress(false)
    }
    progressTrackingHandled = false
    currentEpisodeIndex.value++
    showQuestion.value = false; selectedAnswer.value = null; answerResult.value = null
    showWrongPath.value = false; wrongPathText.value = ''; isWrongTyping.value = false
    startTyping(storyData.value.episodes[currentEpisodeIndex.value].narrative)
  }

  function dismissReviewRecap() {
    showReviewRecap.value = false
    startTyping(storyData.value.episodes[0].narrative)
  }

  function continueFromWrongPath() {
    showWrongPath.value = false; wrongPathText.value = ''; isWrongTyping.value = false
    if (pointId) {
      trackEpisodeProgress(true)
      progressTrackingHandled = true
    }
    nextEpisode()
  }

  function jumpToEpisode(idx) {
    currentEpisodeIndex.value = idx
    showQuestion.value = false; selectedAnswer.value = null; answerResult.value = null
    showRecap.value = false; showWrongPath.value = false
    wrongPathText.value = ''; isWrongTyping.value = false
    startTyping(storyData.value.episodes[idx].narrative)
  }

  function finishStory() {
    if (pointId) {
      trackEpisodeProgress(false)
    }
    if (isReviewMode && chapterId) {
      const reviewScore = completedEpisodes.value.size > 0 ? Math.round((sessionCorrectAnswers.value / Math.max(completedEpisodes.value.size, 1)) * 100) : 60
      recordChapterReview(chapterId, reviewScore)
      if (hasCharacter()) {
        addExp(EXP_VALUES.reviewComplete, '完成复习')
      }
      showChapterComplete.value = true
    } else {
      if (chapterId) {
        recordChapterComplete(chapterId, subject, grade, theme, storyData.value?.title || '未知章节')
      }
      if (hasCharacter()) {
        addExp(EXP_VALUES.episodeComplete, '完成剧集')
        addExp(EXP_VALUES.chapterComplete, '完成章节')
        increaseSubjectMastery(subject, 15)
        const newSkill = unlockSkill(subject, chapterId)
        const newTalent = tryUnlockTalent()
        characterUnlocks.value = { skill: newSkill, talent: newTalent }
      }
      showChapterComplete.value = true
    }
  }

  function goHome() { router.push('/') }

  function retryAIGeneration() {
    aiGenerateProgress.value = ''
    const cacheKey = `ch_${grade}_${subject}_${theme}_${chapterId}`
    const pointCacheKey = `${grade}_${subject}_${theme}_${pointId}`
    try {
      localStorage.removeItem('story_cache_' + cacheKey)
      localStorage.removeItem('story_cache_' + pointCacheKey)
    } catch {}
    window.location.reload()
  }

  function goNextChapter() {
    if (!hasNextChapter.value) { router.push('/'); return }
    const subjectData = knowledgeMap[subject]
    const gradeData = subjectData[grade]
    const chapters = gradeData.chapters
    const currentIdx = chapters.findIndex(ch => ch.id === chapterId)
    const nextCh = chapters[currentIdx + 1]
    router.push(`/play/${grade}/${subject}/${theme}/persistent?chapter=${nextCh.id}`)
  }

  // ===== TTS =====
  function toggleTTS() {
    const enabled = ttsToggleEnabled()
    ttsEnabled.value = enabled
    if (!enabled) { ttsStop(); ttsSpeaking.value = false }
  }

  function toggleTTSPause() {
    togglePause()
    ttsPaused.value = getIsPaused()
  }

  function stopTTS() {
    ttsStop()
    ttsSpeaking.value = false
    ttsPaused.value = false
  }

  function changeTTSRate(rate) {
    ttsRate.value = rate
    updateTTSSetting('rate', rate)
    if (ttsSpeaking.value) {
      ttsStop()
      ttsSpeaking.value = false
    }
  }

  // ===== Lifecycle =====
  onMounted(async () => {
    const char = getCharacter()
    const charName = char?.name || ''
    characterName.value = charName

    // 持久式模式
    if (mode === 'persistent' && chapterId) {
      isAIGenerating.value = true
      aiGenerateProgress.value = 'AI正在构思章节剧情...'
      streamingText.value = ''

      try {
        await generateStoryForChapter(chapterId, subject, grade, theme, {
          characterName: charName,
          stream: true,
          onChunk: (chunk) => {
            streamingText.value += chunk
            aiGenerateProgress.value = 'AI正在书写故事...'
          },
          onDone: (data) => {
            storyData.value = data
            isAIGenerating.value = false
            streamingText.value = ''
            preloadNextBatch(data)
          },
          onError: (err) => {
            console.error('AI generation failed:', err)
            isAIGenerating.value = false
            aiGenerateProgress.value = 'AI生成失败，请点击重试'
            streamingText.value = ''
          },
        })
      } catch (e) {
        console.error('AI generation error:', e)
        isAIGenerating.value = false
        aiGenerateProgress.value = 'AI生成失败，请点击重试'
        streamingText.value = ''
      }

      const safetyTimer = setTimeout(() => {
        if (isAIGenerating.value) {
          console.warn('AI generation safety timeout')
          isAIGenerating.value = false
          aiGenerateProgress.value = 'AI生成超时，请点击重试'
          streamingText.value = ''
        }
      }, 120000)
      watch(isAIGenerating, (val) => { if (!val) clearTimeout(safetyTimer) }, { once: true })

    // 片段式模式
    } else if (mode === 'snippet' && pointId) {
      isAIGenerating.value = true
      aiGenerateProgress.value = 'AI is crafting your story...'

      try {
        await generateStoryForPoint(pointId, subject, grade, theme, {
          characterName: charName,
          stream: true,
          onChunk: () => {
            aiGenerateProgress.value = 'AI is writing...'
          },
          onDone: (data) => {
            storyData.value = data
            isAIGenerating.value = false
          },
          onError: (err) => {
            console.error('AI generation failed, falling back to local:', err)
            isAIGenerating.value = false
            loadLocalData()
          },
        })
      } catch (e) {
        console.error('AI generation error, falling back to local:', e)
        isAIGenerating.value = false
        loadLocalData()
      }

    // 默认本地数据
    } else {
      loadLocalData()
    }

    function loadLocalData() {
      import('../data/allStories.js').then(m => m.default).catch(() => ({}))
        .then(allStoriesModule => {
          const snippetGradeData = allStoriesModule[grade]
          if (snippetGradeData?.[theme]) {
            for (const [chId, chData] of Object.entries(snippetGradeData[theme])) {
              if (pointId && pointId.startsWith(chId.split('-').slice(0, 2).join('-'))) {
                storyData.value = chData
                break
              }
            }
            if (!storyData.value) {
              const k = Object.keys(snippetGradeData[theme])[0]
              storyData.value = snippetGradeData[theme][k]
            }
          }
          startStoryIfNeeded()
        })
        .catch(() => {})
    }

    if (mode === 'persistent' || (mode === 'snippet' && pointId)) {
      const unwatch = watch(storyData, (newVal) => {
        if (newVal?.episodes?.length > 0 && !isAIGenerating.value) {
          startStoryIfNeeded()
          unwatch()
        }
      })
      if (storyData.value?.episodes?.length > 0 && !isAIGenerating.value) {
        startStoryIfNeeded()
      }
    }
  })

  onUnmounted(() => {
    ttsStop()
    if (typingTimer.value) { clearInterval(typingTimer.value); typingTimer.value = null }
    if (wrongTypingTimer.value) { clearInterval(wrongTypingTimer.value); wrongTypingTimer.value = null }
  })

  return {
    // State
    storyData, currentEpisodeIndex, showQuestion, selectedAnswer, answerResult,
    completedEpisodes, typingText, isTyping, currentQuestionIndex, episodeScore,
    personalityResult, showPersonalityInsight,
    showRecap, recapText, showChapterComplete,
    showReviewRecap, reviewRecapText,
    characterUnlocks,
    showWrongPath, wrongPathText, isWrongTyping,
    isAIGenerating, aiGenerateProgress, streamingText, nextBatchLoading, nextBatchProgress, characterName,
    ttsEnabled, ttsSpeaking, ttsPaused, showTTSSettings, ttsRate,
    comboCount, wrongAttempts, showHint, currentHint,
    explorationGained, showExplorationAnim, showComboAnim,
    correctAnimKey, wrongAnimKey,
    // Computed
    ts, currentEpisode, totalEpisodes, progress,
    currentQuestions, currentQuestion, isLastQuestion, isReviewEpisode, isPersonalityQuestion,
    gradeInfo, subjectInfo, chapterRecapSummary, chapterProgressInfo, nextReviewDisplay, hasNextChapter,
    // Actions
    handleShowQuestion, selectAnswer, selectPersonalityChoice, handleNextQuestion,
    useHintRetry,
    nextEpisode, dismissRecap, dismissReviewRecap, continueFromWrongPath,
    jumpToEpisode, finishStory, goHome, retryAIGeneration, goNextChapter,
    toggleTTS, toggleTTSPause, stopTTS, changeTTSRate,
  }
}
