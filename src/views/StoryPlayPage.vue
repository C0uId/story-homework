<script setup>
import { useRoute } from 'vue-router'
import useStoryPlayer from '../composables/useStoryPlayer'
import branchingData from '../data/branchingData'
import QuizPanel from '../components/QuizPanel.vue'
import WrongPathCard from '../components/WrongPathCard.vue'
import TTSControls from '../components/TTSControls.vue'

const route = useRoute()
const isReviewMode = route.query.review === '1'

const {
  storyData, currentEpisodeIndex, showQuestion, selectedAnswer, answerResult,
  completedEpisodes, typingText, isTyping, currentQuestionIndex,
  personalityResult, showPersonalityInsight,
  showRecap, recapText, showChapterComplete,
  showReviewRecap, reviewRecapText,
  characterUnlocks,
  showWrongPath, wrongPathText, isWrongTyping,
  isAIGenerating, aiGenerateProgress, streamingText, nextBatchLoading, nextBatchProgress, characterName,
  ttsEnabled, ttsSpeaking, ttsPaused, showTTSSettings, ttsRate,
  ts, currentEpisode, totalEpisodes, progress,
  currentQuestions, currentQuestion, isLastQuestion, isReviewEpisode, isPersonalityQuestion,
  gradeInfo, subjectInfo, chapterRecapSummary, nextReviewDisplay, hasNextChapter,
  handleShowQuestion, selectAnswer, selectPersonalityChoice, handleNextQuestion,
  nextEpisode, dismissRecap, dismissReviewRecap, continueFromWrongPath,
  jumpToEpisode, finishStory, goHome, retryAIGeneration, goNextChapter,
  toggleTTS, toggleTTSPause, stopTTS, changeTTSRate,
  comboCount, wrongAttempts, showHint, currentHint,
  explorationGained, showExplorationAnim, showComboAnim,
  correctAnimKey, wrongAnimKey, useHintRetry,
} = useStoryPlayer({
  grade: route.params.grade,
  subject: route.params.subject,
  theme: route.params.theme,
  mode: route.params.mode,
  pointId: route.query.point,
  chapterId: route.query.chapter,
  isReviewMode: route.query.review === '1',
})
</script>

<template>
  <div class="play-page">
    <!-- Floating Decorations -->
    <span class="deco deco-1">{{ ts.avatar }}</span>
    <span class="deco deco-2">✨</span>
    <span class="deco deco-3">📖</span>

    <!-- Header -->
    <div class="play-header">
      <div class="wrap play-header-inner">
        <button class="btn btn-outline" @click="goHome">← 返回</button>
        <div class="play-title-bar">
          <span class="section-badge" :class="ts.badgeClass">{{ ts.name }}</span>
          <h1 class="play-story-title">{{ storyData?.title || '加载中...' }}</h1>
        </div>
      </div>
    </div>

    <!-- Progress -->
    <div class="wrap">
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progress + '%', background: `linear-gradient(90deg, ${ts.color}, var(--pink))` }"></div>
        </div>
        <div class="progress-info">
          <span>{{ gradeInfo?.name }} · {{ subjectInfo?.name }}</span>
          <span v-if="totalEpisodes > 0">EP {{ currentEpisodeIndex + 1 }} / {{ totalEpisodes }}</span>
        </div>
      </div>
    </div>

    <!-- AI生成中提示 -->
    <div class="wrap" v-if="isAIGenerating">
      <div class="ai-generating-card">
        <div class="ai-gen-spinner"></div>
        <div class="ai-gen-icon">🤖</div>
        <div class="ai-gen-text">{{ aiGenerateProgress || 'AI正在创作故事...' }}</div>
        <div v-if="streamingText" class="ai-streaming-preview">{{ streamingText.substring(streamingText.length - 200) }}<span class="cursor">|</span></div>
        <div v-else class="ai-gen-hint">DeepSeek AI 正在根据知识点为你量身编写故事</div>
      </div>
    </div>

    <!-- AI生成失败/超时重试 -->
    <div class="wrap" v-if="!isAIGenerating && (aiGenerateProgress?.includes('失败') || aiGenerateProgress?.includes('超时'))">
      <div class="ai-generating-card" style="cursor: pointer;" @click="retryAIGeneration">
        <div class="ai-gen-icon">😵</div>
        <div class="ai-gen-text" style="color: #EF4444;">{{ aiGenerateProgress }}</div>
        <div class="ai-gen-hint">点击此处重新生成</div>
      </div>
    </div>

    <!-- 后台加载下一批提示 -->
    <div class="wrap" v-if="nextBatchLoading && !isAIGenerating">
      <div class="next-batch-toast">
        <span class="next-batch-icon">⏳</span>
        <span>{{ nextBatchProgress || '正在加载下一部分...' }}</span>
      </div>
    </div>

    <!-- Recap Section -->
    <div class="wrap" v-if="showRecap">
      <div class="recap-section">
        <div class="recap-banner">
          <span class="recap-icon">📺</span>
          <span class="recap-title-text">前情回顾</span>
        </div>
        <div class="recap-body">
          <div class="recap-ep-info">
            <span class="recap-ep-label">上一集</span>
            <span class="recap-ep-name" v-if="storyData?.episodes?.[currentEpisodeIndex]">
              {{ storyData.episodes[currentEpisodeIndex].title }}
            </span>
          </div>
          <div class="recap-text">{{ recapText }}</div>
          <div class="recap-divider"></div>
          <div class="recap-next-hint">
            <span class="recap-next-badge" :style="{ background: ts.color + '18', color: ts.color }">
              即将开始
            </span>
            <span class="recap-next-title" v-if="storyData?.episodes?.[currentEpisodeIndex + 1]">
              EP{{ currentEpisodeIndex + 2 }}: {{ storyData.episodes[currentEpisodeIndex + 1].title }}
            </span>
          </div>
          <div class="recap-actions">
            <button class="btn btn-outline recap-skip-btn" @click="dismissRecap(true)">
              跳过回顾
            </button>
            <button class="btn btn-coral recap-continue-btn" @click="dismissRecap(false)" :style="{ background: `linear-gradient(135deg, ${ts.color}, ${ts.color}CC)` }">
              继续故事 →
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Review Recap -->
    <div class="wrap" v-if="showReviewRecap">
      <div class="review-recap-section">
        <div class="review-recap-banner">
          <span class="review-recap-icon">🔄</span>
          <span class="review-recap-title-text">复习回顾</span>
        </div>
        <div class="review-recap-body">
          <div class="review-recap-text" style="white-space: pre-line;">{{ reviewRecapText }}</div>
          <div class="review-recap-actions">
            <button class="btn btn-coral" @click="dismissReviewRecap" :style="{ background: `linear-gradient(135deg, #059669, #34D399)` }">
              开始复习 →
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Episode Stage -->
    <div class="wrap" v-if="currentEpisode && !showRecap && !showReviewRecap && !showChapterComplete">
      <div class="episode-stage">
        <!-- Scene -->
        <div class="scene-banner card" :style="{ borderColor: ts.color + '40' }">
          <span class="scene-icon">{{ ts.avatar }}</span>
          <span class="scene-text">{{ currentEpisode.scene }}</span>
        </div>

        <!-- Title -->
        <div class="episode-header">
          <h2 class="episode-title">{{ currentEpisode.title }}</h2>
          <span class="section-badge" :class="ts.badgeClass">📚 {{ currentEpisode.knowledge }}</span>
        </div>

        <!-- Narrative -->
        <div class="narrative-card card">
          <div class="narrative-avatar" :style="{ background: ts.color + '20' }">{{ ts.avatar }}</div>
          <div class="narrative-content">
            <div class="narrative-text" :class="{ typing: isTyping }">
              {{ typingText }}<span v-if="isTyping" class="cursor" :style="{ color: ts.color }">|</span>
            </div>
          </div>
        </div>

        <!-- 探索值获取动画 -->
        <div v-if="showExplorationAnim" class="exploration-anim">
          <span class="exploration-emoji">🔭</span>
          <span class="exploration-text">+{{ explorationGained }} 探索值</span>
        </div>

        <!-- 连击动画 -->
        <div v-if="showComboAnim" class="combo-anim">
          <span class="combo-text">{{ comboCount }} 连击！</span>
          <span class="combo-bonus">经验翻倍 ✨</span>
        </div>

        <!-- Actions -->
        <div class="episode-actions" v-if="!isTyping && !showWrongPath">
          <!-- 关卡幕：显示挑战按钮 -->
          <button v-if="currentQuestions.length > 0 && !showQuestion" class="btn btn-coral" @click="handleShowQuestion">
            {{ isReviewEpisode ? '知识回顾 📝' : '接受挑战 ⚡' }}
          </button>
          <!-- 故事幕或无题：继续探索 -->
          <button v-if="currentEpisodeIndex < totalEpisodes - 1 && currentQuestions.length === 0" class="btn btn-coral" @click="nextEpisode">
            继续探索 →
          </button>
          <button v-if="currentEpisodeIndex === totalEpisodes - 1 && currentQuestions.length === 0" class="btn btn-coral" @click="finishStory">
            🎉 完成故事！
          </button>
        </div>

        <!-- Wrong Path -->
        <WrongPathCard
          :show="showWrongPath"
          :wrong-path-text="wrongPathText"
          :is-wrong-typing="isWrongTyping"
          :current-episode="currentEpisode"
          :branching-data="branchingData"
          :current-episode-index="currentEpisodeIndex"
          :total-episodes="totalEpisodes"
          @continue="continueFromWrongPath"
        />

        <!-- Quiz -->
        <QuizPanel
          v-if="showQuestion && currentQuestion"
          :current-question="currentQuestion"
          :current-questions="currentQuestions"
          :current-question-index="currentQuestionIndex"
          :selected-answer="selectedAnswer"
          :answer-result="answerResult"
          :is-personality-question="isPersonalityQuestion"
          :personality-result="personalityResult"
          :show-personality-insight="showPersonalityInsight"
          :is-last-question="isLastQuestion"
          :is-review-episode="isReviewEpisode"
          :character-name="characterName"
          :current-episode-index="currentEpisodeIndex"
          :total-episodes="totalEpisodes"
          :current-episode="currentEpisode"
          :branching-data="branchingData"
          :wrong-attempts="wrongAttempts"
          :show-hint="showHint"
          :correct-anim-key="correctAnimKey"
          :wrong-anim-key="wrongAnimKey"
          @select-answer="selectAnswer"
          @select-personality-choice="selectPersonalityChoice"
          @handle-next-question="handleNextQuestion"
          @use-hint-retry="useHintRetry"
        />

        <!-- 勇气机制：提示 + 重试 -->
        <div v-if="showHint && !showWrongPath" class="hint-box">
          <div class="hint-header">
            <span class="hint-icon">💡</span>
            <span class="hint-label">探索提示</span>
          </div>
          <div class="hint-text">{{ currentHint }}</div>
          <button class="hint-retry-btn" @click="useHintRetry">再试一次 💪</button>
        </div>
      </div>
    </div>

    <!-- Chapter Complete -->
    <div class="wrap" v-if="showChapterComplete">
      <div class="chapter-complete-section">
        <div class="chapter-complete-banner" :style="{ background: isReviewMode ? 'linear-gradient(135deg, #065F46 0%, #059669 50%, #065F46 100%)' : 'linear-gradient(135deg, #1E3A5F 0%, #3B82F6 50%, #1E3A5F 100%)' }">
          <span class="complete-icon">{{ isReviewMode ? '🔄' : '🎉' }}</span>
          <span class="complete-title-text">{{ isReviewMode ? '复习完成' : '章节回顾' }}</span>
        </div>
        <div class="chapter-complete-body">
          <div class="complete-congrats">
            <span class="congrats-emoji">{{ isReviewMode ? '📖' : '🏆' }}</span>
            <h3>{{ isReviewMode ? '复习完成！' : '恭喜完成 ' + (storyData?.title || '本章') + '！' }}</h3>
            <p class="complete-summary">{{ chapterRecapSummary }}</p>
          </div>

          <div class="complete-divider"></div>

          <!-- Knowledge points recap -->
          <div class="recap-knowledge-section">
            <div class="recap-knowledge-label">
              <span class="section-badge badge-blue" style="font-size: 11px;">📖 知识回顾</span>
            </div>
            <div class="recap-episodes-list">
              <div v-for="(ep, idx) in storyData?.episodes" :key="idx" class="recap-ep-item">
                <span class="recap-ep-num">EP{{ idx + 1 }}</span>
                <div class="recap-ep-detail">
                  <span class="recap-ep-title">{{ ep.title }}</span>
                  <span class="recap-ep-knowledge">{{ ep.knowledge }}</span>
                </div>
                <span class="recap-ep-status" :class="completedEpisodes.has(idx) ? 'done' : 'pending'">
                  {{ completedEpisodes.has(idx) ? '✓' : '…' }}
                </span>
              </div>
            </div>
          </div>

          <div class="complete-divider"></div>

          <!-- Review schedule -->
          <div class="review-schedule" v-if="nextReviewDisplay">
            <div class="schedule-icon">📅</div>
            <div class="schedule-info">
              <span class="schedule-label">下次复习</span>
              <span class="schedule-time">{{ nextReviewDisplay }}</span>
              <span class="schedule-desc">基于艾宾浩斯遗忘曲线，系统会在最佳时间提醒你复习</span>
            </div>
          </div>

          <!-- Character Growth -->
          <div v-if="characterUnlocks.skill || characterUnlocks.talent" class="character-unlocks">
            <div v-if="characterUnlocks.skill" class="unlock-item">
              <span class="unlock-icon">{{ characterUnlocks.skill.icon }}</span>
              <span class="unlock-text">习得新技能：{{ characterUnlocks.skill.name }}</span>
            </div>
            <div v-if="characterUnlocks.talent" class="unlock-item unlock-talent">
              <span class="unlock-icon">{{ characterUnlocks.talent.icon }}</span>
              <span class="unlock-text">觉醒新天赋：{{ characterUnlocks.talent.name }}</span>
            </div>
          </div>

          <div class="complete-actions">
            <button class="btn btn-outline" @click="goHome">返回首页</button>
            <button v-if="hasNextChapter" class="btn btn-coral" @click="goNextChapter" :style="{ background: `linear-gradient(135deg, ${ts.color}, ${ts.color}CC)` }">
              下一章 →
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Episode Nav -->
    <div class="episode-nav" v-if="totalEpisodes > 0 && !showChapterComplete">
      <div v-for="(ep, idx) in storyData?.episodes" :key="idx" class="ep-dot"
        :class="{ active: idx === currentEpisodeIndex, completed: completedEpisodes.has(idx) }"
        :style="idx === currentEpisodeIndex ? { background: ts.color } : {}"
        @click="jumpToEpisode(idx)">
        {{ idx + 1 }}
      </div>
    </div>

    <!-- TTS Controls -->
    <TTSControls
      v-if="storyData?.episodes"
      :tts-enabled="ttsEnabled"
      :tts-speaking="ttsSpeaking"
      :tts-paused="ttsPaused"
      :show-tts-settings="showTTSSettings"
      :tts-rate="ttsRate"
      @toggle-t-t-s="toggleTTS"
      @toggle-pause="toggleTTSPause"
      @stop-t-t-s="stopTTS"
      @update:show-t-t-s-settings="showTTSSettings = $event"
      @change-rate="changeTTSRate"
    />
  </div>
</template>

<style scoped>
.play-page { min-height: 100vh; position: relative; }

.play-header {
  position: sticky; top: 0; z-index: 10;
  background: rgba(255,248,240,0.9); backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(45,27,78,0.06);
  padding: 12px 0;
}
.play-header-inner { display: flex; align-items: center; gap: 16px; }
.play-title-bar { flex: 1; display: flex; align-items: center; gap: 10px; }
.play-story-title { font-size: 15px; font-weight: 600; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.progress-container { padding: 16px 0; }
.progress-bar { height: 6px; background: #E8E0F0; border-radius: 3px; overflow: hidden; margin-bottom: 8px; }
.progress-fill { height: 100%; border-radius: 3px; transition: width 0.5s cubic-bezier(0.16,1,0.3,1); }
.progress-info { display: flex; justify-content: space-between; font-size: 12px; color: var(--text3); }

.episode-stage { max-width: 700px; margin: 0 auto; padding-bottom: 120px; animation: popIn 0.5s ease; }

.scene-banner { display: flex; align-items: center; gap: 10px; padding: 12px 16px; margin-bottom: 24px; }
.scene-banner:hover { transform: none; }
.scene-icon { font-size: 20px; }
.scene-text { font-size: 13px; color: var(--text2); font-style: italic; }

.episode-header { margin-bottom: 24px; }
.episode-title { font-size: 28px; font-weight: 900; margin-bottom: 8px; color: var(--text); line-height: 1.3; }

.narrative-card { display: flex; gap: 16px; margin-bottom: 32px; padding: 24px; }
.narrative-card:hover { transform: none; }
.narrative-avatar {
  width: 48px; height: 48px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0;
}
.narrative-content { flex: 1; }
.narrative-text { font-size: 16px; line-height: 1.8; color: var(--text); }
.cursor { animation: blink 0.8s infinite; font-weight: 300; }
@keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }

.episode-actions { text-align: center; margin-bottom: 32px; }

.episode-nav {
  position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
  display: flex; gap: 8px; padding: 10px 20px;
  background: rgba(255,255,255,0.95); backdrop-filter: blur(20px);
  border-radius: 28px; box-shadow: var(--shadow-hover);
  border: 2px solid #E8E0F0; z-index: 10;
}
.ep-dot {
  width: 32px; height: 32px; border-radius: 50%;
  background: #F0E8F8; display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s; color: var(--text2);
}
.ep-dot.active { transform: scale(1.1); color: #fff; }
.ep-dot.completed { background: #E8FFF4; color: #34D399; }
.ep-dot:hover:not(.active) { background: #E8E0F0; }

/* ===== AI Generating Card ===== */
.ai-generating-card {
  max-width: 500px; margin: 40px auto; text-align: center;
  padding: 48px 32px; background: linear-gradient(135deg, #f8f6ff 0%, #ede9fe 100%);
  border-radius: 24px; border: 2px solid #e0d6f6; position: relative; overflow: hidden;
}
.ai-gen-spinner {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(139,92,246,0.06), transparent);
  animation: aiShimmer 2s infinite;
}
@keyframes aiShimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
.ai-gen-icon { font-size: 48px; margin-bottom: 16px; animation: aiPulse 1.5s ease-in-out infinite; }
@keyframes aiPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
.ai-gen-text { font-size: 18px; font-weight: 600; color: #7c3aed; margin-bottom: 8px; }
.ai-gen-hint { font-size: 13px; color: #9ca3af; }
.ai-streaming-preview {
  font-size: 13px; color: #6b7280; line-height: 1.7; text-align: left;
  max-height: 120px; overflow-y: auto; padding: 12px 16px;
  background: rgba(255,255,255,0.6); border-radius: 12px;
  border: 1px solid #e5e7eb; font-family: 'Courier New', monospace; word-break: break-all;
}
.next-batch-toast {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  padding: 10px 20px; margin: 16px auto; max-width: 300px;
  background: rgba(124,58,237,0.08); border: 1px solid rgba(124,58,237,0.15);
  border-radius: 20px; font-size: 13px; color: #7c3aed; font-weight: 500;
  animation: fadeIn 0.3s ease;
}
.next-batch-icon { font-size: 16px; animation: aiPulse 1.5s ease-in-out infinite; }
@keyframes fadeIn { 0% { opacity: 0; transform: translateY(-8px); } 100% { opacity: 1; transform: translateY(0); } }

/* ===== Recap Section ===== */
.recap-section {
  max-width: 700px; margin: 0 auto 32px; border-radius: 20px; overflow: hidden;
  animation: recapSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  border: 2px solid rgba(100, 80, 160, 0.12); box-shadow: 0 8px 32px rgba(100, 80, 160, 0.12);
}
@keyframes recapSlideIn { 0% { opacity: 0; transform: translateY(24px) scale(0.97); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
.recap-banner {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  padding: 18px 24px; background: linear-gradient(135deg, #2D1B4E 0%, #4A2D7A 50%, #2D1B4E 100%); color: #fff;
}
.recap-icon { font-size: 28px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); }
.recap-title-text { font-size: 22px; font-weight: 900; letter-spacing: 4px; text-shadow: 0 2px 8px rgba(0,0,0,0.3); }
.recap-body { padding: 28px; background: linear-gradient(180deg, #F8F4FF 0%, #FFF8F0 100%); }
.recap-ep-info { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.recap-ep-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #9B8DC0; background: rgba(155, 141, 192, 0.12); padding: 3px 10px; border-radius: 6px; }
.recap-ep-name { font-size: 14px; font-weight: 600; color: var(--text2); }
.recap-text { font-size: 16px; line-height: 1.85; color: var(--text); padding: 16px 20px; background: rgba(255, 255, 255, 0.7); border-radius: 14px; border-left: 4px solid #9B8DC0; }
.recap-divider { height: 1px; background: linear-gradient(90deg, transparent, #E0D6F0, transparent); margin: 20px 0; }
.recap-next-hint { display: flex; align-items: center; gap: 10px; margin-bottom: 24px; }
.recap-next-badge { font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 8px; }
.recap-next-title { font-size: 14px; font-weight: 600; color: var(--text2); }
.recap-actions { display: flex; gap: 12px; justify-content: center; }
.recap-skip-btn { flex: 0 0 auto; padding: 12px 24px; font-size: 14px; }
.recap-continue-btn { flex: 0 0 auto; padding: 12px 28px; font-size: 14px; color: #fff; border: none; }

/* ===== Review Recap ===== */
.review-recap-section { max-width: 700px; margin: 0 auto 32px; border-radius: 20px; overflow: hidden; animation: recapSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1); border: 2px solid rgba(5, 150, 105, 0.2); box-shadow: 0 8px 32px rgba(5, 150, 105, 0.12); }
.review-recap-banner { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 18px 24px; background: linear-gradient(135deg, #065F46 0%, #059669 50%, #065F46 100%); color: #fff; }
.review-recap-icon { font-size: 28px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); }
.review-recap-title-text { font-size: 22px; font-weight: 900; letter-spacing: 4px; text-shadow: 0 2px 8px rgba(0,0,0,0.3); }
.review-recap-body { padding: 28px; background: linear-gradient(180deg, #ECFDF5 0%, #FFF8F0 100%); }
.review-recap-text { font-size: 15px; line-height: 1.85; color: var(--text); padding: 16px 20px; background: rgba(255,255,255,0.7); border-radius: 14px; border-left: 4px solid #059669; margin-bottom: 24px; }
.review-recap-actions { text-align: center; }

/* ===== Chapter Complete ===== */
.chapter-complete-section { max-width: 700px; margin: 0 auto 32px; border-radius: 20px; overflow: hidden; animation: recapSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1); border: 2px solid rgba(52, 211, 153, 0.2); box-shadow: 0 8px 32px rgba(52, 211, 153, 0.12); }
.chapter-complete-banner { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 18px 24px; color: #fff; }
.complete-icon { font-size: 28px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); }
.complete-title-text { font-size: 22px; font-weight: 900; letter-spacing: 4px; text-shadow: 0 2px 8px rgba(0,0,0,0.3); }
.chapter-complete-body { padding: 28px; background: linear-gradient(180deg, #ECFDF5 0%, #FFF8F0 100%); }
.complete-congrats { text-align: center; margin-bottom: 8px; }
.congrats-emoji { font-size: 48px; display: block; margin-bottom: 12px; }
.complete-congrats h3 { font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 8px; }
.complete-summary { font-size: 14px; color: var(--text2); line-height: 1.6; }
.complete-divider { height: 1px; background: linear-gradient(90deg, transparent, #D1FAE5, transparent); margin: 20px 0; }
.recap-knowledge-section { margin-bottom: 8px; }
.recap-knowledge-label { margin-bottom: 14px; }
.recap-episodes-list { display: flex; flex-direction: column; gap: 8px; }
.recap-ep-item { display: flex; align-items: center; gap: 12px; padding: 10px 14px; background: rgba(255,255,255,0.7); border-radius: 12px; border: 1px solid #E8E0F0; }
.recap-ep-num { font-size: 11px; font-weight: 700; color: var(--purple); background: rgba(192,132,252,0.1); padding: 2px 8px; border-radius: 6px; flex-shrink: 0; }
.recap-ep-detail { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.recap-ep-title { font-size: 13px; font-weight: 600; color: var(--text); }
.recap-ep-knowledge { font-size: 11px; color: var(--text3); }
.recap-ep-status { font-size: 14px; font-weight: 700; flex-shrink: 0; }
.recap-ep-status.done { color: #34D399; }
.recap-ep-status.pending { color: #D1D5DB; }
.review-schedule { display: flex; align-items: center; gap: 14px; padding: 16px 20px; background: rgba(255,255,255,0.6); border-radius: 14px; border: 1px solid #D1FAE5; margin-bottom: 24px; }
.schedule-icon { font-size: 28px; flex-shrink: 0; }
.schedule-info { display: flex; flex-direction: column; gap: 2px; }
.schedule-label { font-size: 11px; font-weight: 700; color: #059669; text-transform: uppercase; letter-spacing: 1px; }
.schedule-time { font-size: 16px; font-weight: 700; color: var(--text); }
.schedule-desc { font-size: 12px; color: var(--text3); }
.complete-actions { display: flex; gap: 12px; justify-content: center; }
.character-unlocks { margin-bottom: 20px; }
.unlock-item { display: flex; align-items: center; gap: 10px; padding: 12px 16px; margin-bottom: 8px; background: linear-gradient(135deg, #ECFDF5, #F0FDF4); border: 1.5px solid #A7F3D0; border-radius: 14px; animation: popIn 0.5s ease; }
.unlock-item.unlock-talent { background: linear-gradient(135deg, #FEF3C7, #FFFBEB); border-color: #FDE68A; }
.unlock-icon { font-size: 24px; }
.unlock-text { font-size: 14px; font-weight: 600; color: var(--text); }

/* ===== 勇气机制动效 ===== */
.exploration-anim {
  text-align: center; margin-bottom: 20px;
  animation: explorationFloat 1.2s ease forwards;
}
@keyframes explorationFloat {
  0% { opacity: 0; transform: translateY(20px) scale(0.8); }
  30% { opacity: 1; transform: translateY(0) scale(1.1); }
  70% { opacity: 1; transform: translateY(-10px) scale(1); }
  100% { opacity: 0; transform: translateY(-30px) scale(0.9); }
}
.exploration-emoji { font-size: 24px; margin-right: 6px; }
.exploration-text {
  font-size: 18px; font-weight: 800;
  background: linear-gradient(135deg, #34D399, #059669);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}

/* 连击动画 */
.combo-anim {
  text-align: center; margin-bottom: 20px;
  animation: comboPopIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes comboPopIn {
  0% { opacity: 0; transform: scale(0.5); }
  100% { opacity: 1; transform: scale(1); }
}
.combo-text {
  display: block; font-size: 28px; font-weight: 900;
  background: linear-gradient(135deg, #F59E0B, #EF4444);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.combo-bonus { font-size: 14px; color: #F59E0B; font-weight: 600; }

/* 答对粒子特效 */
@keyframes particleBurst {
  0% { opacity: 1; transform: translate(0, 0) scale(1); }
  100% { opacity: 0; transform: translate(var(--tx), var(--ty)) scale(0); }
}
.particle {
  position: absolute; width: 8px; height: 8px; border-radius: 50%;
  background: var(--color, #34D399); pointer-events: none;
  animation: particleBurst 0.8s ease forwards;
}

/* 答错抖动 */
.quiz-shake {
  animation: wrongShake 0.5s ease;
}
@keyframes wrongShake {
  0%, 100% { transform: translateX(0); }
  15% { transform: translateX(-8px); }
  30% { transform: translateX(6px); }
  45% { transform: translateX(-4px); }
  60% { transform: translateX(2px); }
}

/* 提示框 */
.hint-box {
  margin-top: 12px; padding: 14px 18px;
  background: linear-gradient(135deg, #FEF3C7, #FFFBEB);
  border: 1.5px solid #F59E0B; border-radius: 14px;
  animation: popIn 0.3s ease;
}
.hint-header { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.hint-icon { font-size: 18px; }
.hint-label { font-size: 13px; font-weight: 700; color: #92400E; }
.hint-text { font-size: 14px; color: #78350F; line-height: 1.6; margin-bottom: 12px; }
.hint-retry-btn {
  width: 100%; padding: 10px; font-size: 14px; font-weight: 600;
  background: linear-gradient(135deg, #F59E0B, #D97706);
  color: #fff; border: none; border-radius: 12px; cursor: pointer;
}

/* ===== Responsive ===== */
@media (max-width: 640px) {
  .episode-title { font-size: 22px; }
  .narrative-text { font-size: 15px; }
  .play-story-title { font-size: 13px; }
  .recap-title-text { font-size: 18px; letter-spacing: 2px; }
  .recap-body { padding: 20px; }
  .recap-text { font-size: 15px; padding: 14px 16px; }
  .recap-actions { flex-direction: column; }
  .recap-skip-btn, .recap-continue-btn { width: 100%; justify-content: center; }
  .episode-nav { bottom: 12px; padding: 8px 14px; gap: 6px; }
  .ep-dot { width: 28px; height: 28px; font-size: 11px; }
}
</style>
