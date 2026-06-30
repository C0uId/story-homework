// AI故事生成器 - 分批渐进式生成，减少用户等待时间
import { chatCompletion, chatCompletionStream } from './aiService'
import { knowledgeMap } from '../data/knowledgeMap'
import { THEMES as THEMES_ARRAY, getThemeById } from '../data/themes'
import { getStoryContext, saveStoryContext, formatContextForAI } from './storyContext'

const CACHE_PREFIX = 'knowledgeTheater_aiStory_'
const CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000 // 7天缓存
const EPISODES_PER_BATCH = 5 // 每批生成的片段数

// 主题配置（从共享数据源生成，兼容原有key索引方式）
const THEMES = Object.fromEntries(THEMES_ARRAY.map(t => [t.id, { name: t.name, style: t.style, desc: `${t.style}风格`, color: t.color }]))
// 补充更详细的描述
THEMES.martial.desc = '用武侠风格讲述，有师父、弟子、武功秘籍、江湖恩怨等元素'
THEMES.phantom.desc = '用怪盗与侦探对决的悬疑风格，有密码、机关、智斗等元素'
THEMES.detective.desc = '用侦探破案风格，有线索搜集、逻辑推理、真相大白等元素'
THEMES.scifi.desc = '用太空科幻风格，有星际旅行、外星文明、未来科技等元素'
THEMES.school.desc = '用校园生活风格，有同学、老师、课堂、课外活动等元素'

const SUBJECT_NAMES = {
  math: '数学',
  chinese: '语文',
  english: '英语',
  science: '科学',
  history: '历史',
}

// ========== 缓存 ==========

function getCachedStory(cacheKey) {
  try {
    const raw = localStorage.getItem(CACHE_PREFIX + cacheKey)
    if (!raw) return null
    const { data, timestamp } = JSON.parse(raw)
    if (Date.now() - timestamp > CACHE_EXPIRY) {
      localStorage.removeItem(CACHE_PREFIX + cacheKey)
      return null
    }
    return data
  } catch { return null }
}

function cacheStory(cacheKey, data) {
  try {
    localStorage.setItem(CACHE_PREFIX + cacheKey, JSON.stringify({ data, timestamp: Date.now() }))
  } catch { /* 存储满则忽略 */ }
}

// ========== 知识点查找 ==========

function findKnowledgePoint(pointId, subject, grade) {
  const subjectData = knowledgeMap[subject]
  if (!subjectData?.[grade]) return null
  for (const chapter of subjectData[grade].chapters) {
    for (const point of chapter.points) {
      if (point.id === pointId) return { point, chapter }
    }
  }
  return null
}

function getChapterKnowledgePoints(chapterId, subject, grade) {
  const subjectData = knowledgeMap[subject]
  if (!subjectData?.[grade]) return null
  for (const chapter of subjectData[grade].chapters) {
    if (chapter.id === chapterId) return { chapter, points: chapter.points }
  }
  return null
}

// ========== Prompt构建 ==========

/**
 * 构建系统提示词（所有批次共用）
 */
function buildSystemPrompt(theme, subject, grade, characterName = '', storyKey = '') {
  const themeConfig = THEMES[theme] || THEMES.martial
  const subjectName = SUBJECT_NAMES[subject] || subject
  const gradeName = `${grade}年级`

  // 获取故事上下文（跨章节连贯性）
  const context = storyKey ? getStoryContext(storyKey) : null
  const contextText = formatContextForAI(context)
  const hasContext = contextText.length > 0

  // 获取叙事风格 Prompt
  const stylePrompt = themeConfig.stylePrompts?.humor || themeConfig.stylePrompts?.[themeConfig.narrativeStyle] || ''

  let prompt = `你是"故事大王"，一个专门给小学生讲故事的超级搞笑的故事作家！你的故事让孩子笑到停不下来！

## 你必须遵守的规则

### 规则一：角色就是主角
故事的主人公必须叫"${characterName || '小明'}"。所有故事围绕"${characterName || '小明'}"展开。
"${characterName || '小明'}"是一个${gradeName}学生，性格好奇心强、爱吐槽、偶尔犯傻但很勇敢。
不要用"小红""小刚""小灵"等其他名字，主角只有一个：${characterName || '小明'}。

### 角色个性
${characterName || '小明'}的特点：
- 遇到奇怪的事会吐槽："这什么鬼？！""你认真的？"
- 喜欢自言自语："好吧，又是这种情况……"
- 虽然害怕但总是硬着头皮上
- 说话很搞笑，经常用夸张的语气

### 规则二：说小朋友的话
- 句子要短！每句话最多15个字
- 多用对话！用引号""包裹
- 多用拟声词！砰！哗啦！叮！咕噜咕噜！轰隆！
- 多用感叹号和问号！
- 不要用成语！不要用书面语！用小朋友平时说的话！
- 读起来要像在听搞笑广播剧，不像在看课本

### 规则三：叙事风格
${stylePrompt}

### 规则四：故事和题目必须融为一体（最最最重要！）
⚠️ 绝对不要"先写一大段故事，然后再单独出题"！

正确做法：
- 故事有两种幕：**故事幕**和**关卡幕**
- 故事幕：只讲故事，推进剧情，150-250字，不放题目
- 关卡幕：场景铺垫（80-120字）+ 知识关卡（题目），知识是通关的唯一手段
- 两种幕交替排列：故事幕 → 关卡幕 → 故事幕 → 关卡幕

### 规则五：知识即钥匙
${subjectName}知识是冒险中的"钥匙"、"武器"、"密码"。
不是"${characterName || '小明'}学了${subjectName}知识"，而是：
- 不掌握这个知识，门就打不开
- 不掌握这个知识，怪兽就打不败
- 不掌握这个知识，谜题就解不了

### 规则六：章节悬念
每章最后一幕必须有一个大悬念（cliffhanger），让孩子迫不及待想看下一章！
比如："突然，一个巨大的黑影出现在${characterName || '小明'}身后……"

### 规则七：答错也有故事
答错题目时，角色会走一条"秘密小路"，遇到新朋友或发现新线索。
答错不等于失败，而是另一种冒险！

### 规则八：性格时刻（融入故事的自然抉择）
在每个关卡幕（type: "challenge"）中，**可以**加入一个与当前剧情相关的性格抉择 moment。

这不是知识题，而是故事情节中的**自然选择**。例如：
- 武侠场景中："少侠走到岔路口，一条路平坦安全，一条路充满未知……"
- 太空场景中："飞船收到两个信号，一个来自熟悉的星系，一个来自未知星域……"

性格抉择的格式：
"personalityMoment": {
  "narrative": "结合当前剧情的抉择描述（20-40字，简短自然）",
  "options": [
    { "text": "选项A（简短2-6个字）", "trait": "对应的性格特质ID" },
    { "text": "选项B（简短2-6个字）", "trait": "对应的性格特质ID" }
  ]
}

性格特质配对（每次随机选一对，二选一）：
1. cautious(谨慎) ↔ adventurous(冒险)：安稳 vs 冒险
2. empathetic(共情) ↔ independent(独立)：关心他人 vs 独立完成
3. persistent(坚持) ↔ strategic(策略)：硬碰硬 vs 巧办法
4. structured(有序) ↔ exploratory(探索)：按部就班 vs 自由探索
5. ambitious(上进) ↔ thorough(扎实)：挑战高难度 vs 打好基础

⚠️ 注意：personalityMoment 是可选字段，不需要每个关卡幕都有。
性格时刻必须在剧情中**自然呈现**，不能生硬插入。
让选择看起来是故事的一部分，而不是突然出现的单选题。

## 输出格式（必须严格遵循JSON格式）`

  if (hasContext) {
    prompt += `

## 连贯性（必须遵守！）
前面已经讲了这个故事的开头。你必须：
- 保持角色和场景不变
- 从上一段的悬念自然继续
- 不要重复已经讲过的内容`
  }

  prompt += `

## 输出格式要求`
  return prompt
}

/**
 * 构建第一批的用户提示词（5个片段）
 */
function buildFirstBatchPrompt(chapter, points, theme, hasContext, characterName = '') {
  const themeConfig = THEMES[theme] || THEMES.martial
  const pointList = points.slice(0, EPISODES_PER_BATCH).map((p, i) =>
    `${i + 1}. ${p.name}`
  ).join('\n')

  let prompt = `请为"${chapter.title}"创作故事的前5幕。

## 本幕要学的知识点
${pointList}

## 故事风格
${themeConfig.style}风格

## ⚠️ 最重要的要求：故事幕和关卡幕交替！

有两种幕，必须交替排列：故事幕 → 关卡幕 → 故事幕 → 关卡幕

**故事幕（type: "story"）**：
- 只讲故事，推进剧情，150-250字
- 没有题目（questions为空数组）
- 要搞笑、有对话、有吐槽、有拟声词
- 每幕至少一个笑点

**关卡幕（type: "challenge"）**：
- 场景铺垫（80-120字）+ 知识关卡（题目）
- questions中包含故事中的关卡问题
- **⚠️ 每个关卡幕必须在questions中至少包含2道题目！** 从不同角度考查同一个知识点
- 知识是通关的唯一手段
- explanation写答对后故事怎么继续

## 示例

✅ 故事幕：
type: "story", narrative: "${characterName || '小明'}推开门，一股冷风扑面而来！'我的天！这什么地方？'眼前是一条长长的走廊，两边挂满了画像。突然，${characterName || '小明'}发现画像的眼睛好像在动……", questions: []

✅ 关卡幕：
type: "challenge", narrative: "走廊尽头出现一扇密码门。门上的屏幕闪着数字：3×7=? '这不是考我吗？' ${characterName || '小明'}挠挠头。", questions: [{ type: "choice", text: "密码门上显示：3×7=？", options: ["18", "21", "24", "27"], correct: 1, explanation: "叮！密码正确！门缓缓打开了！", hint: "想想三七多少" }, { type: "truefalse", text: "3×7的结果大于20，对吗？", options: ["正确", "错误"], correct: 1, explanation: "3×7=21，确实大于20，选正确！", hint: "先算算3×7等于多少" }], personalityMoment: { narrative: "面前出现两条通道，一条灯火通明，一条漆黑幽深……", options: [{ text: "走明亮的路", trait: "cautious" }, { text: "探索黑暗", trait: "adventurous" }] }

## 输出JSON格式（必须严格遵循）：
{
  "title": "${chapter.title}",
  "theme": "${themeConfig.name}",
  "episodes": [
    {
      "id": "ep1",
      "type": "story",
      "title": "第一幕：标题",
      "narrative": "150-250字的纯故事，搞笑、有对话、有吐槽",
      "knowledge": "",
      "scene": "场景描述",
      "questions": []
    },
    {
      "id": "ep2",
      "type": "challenge",
      "title": "第二幕：标题",
      "narrative": "80-120字的关卡铺垫",
      "knowledge": "对应知识点名称",
      "scene": "场景描述",
      "personalityMoment": {
        "narrative": "自然融入剧情的抉择（20-40字）, 可选",
        "options": [
          { "text": "选项A", "trait": "cautious" },
          { "text": "选项B", "trait": "adventurous" }
        ]
      },
      "questions": [
        {
          "type": "choice",
          "text": "故事中的关卡问题1",
          "options": ["选项A", "选项B", "选项C"],
          "correct": 0,
          "explanation": "答对后故事怎么继续",
          "hint": "30字以内的提示"
        },
        {
          "type": "choice",
          "text": "故事中的关卡问题2（从不同角度考查同一知识点）",
          "options": ["选项A", "选项B", "选项C"],
          "correct": 0,
          "explanation": "答对后故事怎么继续",
          "hint": "30字以内的提示"
        }
      ]
    }
  ],
  "_storyContext": {
    "summary": "本批故事一句话摘要",
    "setting": "故事场景设定",${!hasContext ? '\n    "world": "世界观设定", ' : ''}
    "characters": { "角色名": "角色简介" },
    "plotThreads": [{ "id": "t1", "description": "剧情线", "status": "进行中", "ended": false }],
    "cliffhanger": "本批结尾悬念"
  }
}

注意：
- 故事幕和关卡幕必须交替排列
- 故事幕150-250字，没有题目
- 关卡幕80-120字，**必须有至少2道题目（questions数组至少2个元素）**
- 每个question必须有hint字段（30字以内提示）
- 必须生成5个episodes
- 最后一幕必须是大悬念（cliffhanger），让孩子迫不及待想看下一章`

  if (!hasContext) {
    prompt += `\n- 这是故事的开头，要设计好世界观和角色，为后面埋伏笔`
  }

  return prompt
}

/**
 * 构建后续批次的用户提示词
 */
function buildNextBatchPrompt(chapter, points, theme, batchIndex, prevEpisodesSummary, prevContext) {
  const themeConfig = THEMES[theme] || THEMES.martial
  const startIdx = batchIndex * EPISODES_PER_BATCH
  const batchPoints = points.slice(startIdx, startIdx + EPISODES_PER_BATCH)
  const pointList = batchPoints.map((p, i) =>
    `${i + 1}. ${p.name}：${p.concept || '理解基本概念'}`
  ).join('\n')

  const epNum = startIdx + 1

  let prompt = `请继续创作故事的第${epNum}到第${epNum + batchPoints.length - 1}幕。

## 接下来要学的知识点
${pointList}

## 前面已经发生的故事
${prevEpisodesSummary}

## 上一幕结尾的悬念
${prevContext?.cliffhanger || '故事正在进行中...'}

## 故事风格
${themeConfig.style}风格

## ⚠️ 故事幕和关卡幕必须交替！

有两种幕，必须交替排列：故事幕 → 关卡幕 → 故事幕 → 关卡幕

**故事幕（type: "story"）**：
- 只讲故事，推进剧情，150-250字
- 没有题目（questions为空数组）
- 要搞笑、有对话、有吐槽、有拟声词
- 每幕至少一个笑点

**关卡幕（type: "challenge"）**：
- 场景铺垫（80-120字）+ 知识关卡（题目）
- questions中包含故事中的关卡问题
- **⚠️ 每个关卡幕必须在questions中至少包含2道题目！** 从不同角度考查同一个知识点
- 知识是通关的唯一手段
- explanation写答对后故事怎么继续
- 每个question必须有hint字段（30字以内提示）

## 输出JSON格式（必须严格遵循）：
{
  "title": "${chapter.title}",
  "episodes": [
    {
      "id": "ep${epNum}",
      "type": "story",
      "title": "第${epNum}幕：标题",
      "narrative": "150-250字的纯故事，搞笑、有对话、有吐槽",
      "knowledge": "",
      "scene": "场景描述",
      "questions": []
    },
    {
      "id": "ep${epNum + 1}",
      "type": "challenge",
      "title": "第${epNum + 1}幕：标题",
      "narrative": "80-120字的关卡铺垫",
      "knowledge": "知识点名称",
      "scene": "场景描述",
      "personalityMoment": {
        "narrative": "自然融入剧情的抉择（20-40字）, 可选",
        "options": [
          { "text": "选项A", "trait": "cautious" },
          { "text": "选项B", "trait": "adventurous" }
        ]
      },
      "questions": [
        {
          "type": "choice",
          "text": "知识点名称-问题1",
          "options": ["选项A", "选项B", "选项C"],
          "correct": 0,
          "explanation": "答对后故事怎么继续",
          "hint": "30字以内的提示"
        },
        {
          "type": "choice",
          "text": "知识点名称-问题2（从不同角度考查同一知识点）",
          "options": ["选项A", "选项B", "选项C"],
          "correct": 0,
          "explanation": "答对后故事怎么继续",
          "hint": "30字以内的提示"
        }
      ]
    }
  ],
  "_storyContext": {
    "summary": "本批摘要",
    "characters": {},
    "plotThreads": [],
    "cliffhanger": "本批结尾悬念（必须有大悬念！）"
  }
}

注意：
- 故事幕和关卡幕必须交替排列
- 故事幕150-250字，没有题目
- 关卡幕80-120字，**必须有至少2道题目（questions数组至少2个元素）**
- 每个question必须有hint字段（30字以内提示）
- 最后一幕必须是大悬念（cliffhanger），让孩子迫不及待想看下一章
- 从上一批的悬念自然继续，不要重复已讲内容`

  return prompt
}

// ========== JSON解析 ==========

function parseStoryResponse(response) {
  let jsonStr = response

  const jsonMatch = response.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/)
  if (jsonMatch) jsonStr = jsonMatch[1]

  const objMatch = jsonStr.match(/\{[\s\S]*\}/)
  if (objMatch) jsonStr = objMatch[0]

  try {
    const data = JSON.parse(jsonStr)
    if (!data.episodes || !Array.isArray(data.episodes)) {
      throw new Error('missing episodes array')
    }
    data.episodes = data.episodes.map((ep, i) => {
      let questions = ep.questions || []
      if (!questions.length && ep.question) {
        questions = [ep.question]
      }
      questions = questions.map(q => ({
        type: q.type || 'choice',
        text: q.text || '',
        options: q.options || [],
        correct: q.correct ?? 0,
        answer: q.answer || '',
        explanation: q.explanation || '',
      }))

      return {
        id: ep.id || `ep${i + 1}`,
        title: ep.title || `episode ${i + 1}`,
        narrative: ep.narrative || '',
        knowledge: ep.knowledge || '',
        scene: ep.scene || '',
        type: ep.type || 'story',
        personalityMoment: ep.personalityMoment || null,
        questions,
      }
    })
    return data
  } catch (e) {
    console.error('parse story response failed:', e, '\nraw:', response.substring(0, 500))
    throw new Error('AI response format error, please retry')
  }
}

// ========== 工具函数 ==========

function makeStoryKey(subject, grade, theme) {
  return `${grade}_${subject}_${theme}`
}

/** 生成前面episodes的摘要，给后续批次用 */
function summarizeEpisodes(episodes) {
  return episodes.map(ep =>
    `- ${ep.title}：${ep.narrative?.substring(0, 80) || '无叙述'}...（知识点：${ep.knowledge}）`
  ).join('\n')
}

// ========== 生成入口 ==========

/**
 * 为单个知识点生成故事（片段式）
 */
export async function generateStoryForPoint(pointId, subject, grade, theme, options = {}) {
  const cacheKey = `${grade}_${subject}_${theme}_${pointId}`

  if (!options.forceRefresh) {
    const cached = getCachedStory(cacheKey)
    if (cached) return cached
  }

  const found = findKnowledgePoint(pointId, subject, grade)
  if (!found) throw new Error(`knowledge point not found: ${pointId}`)

  const { point, chapter } = found
  const characterName = options.characterName || ''
  const storyKey = makeStoryKey(subject, grade, theme)

  const systemPrompt = buildSystemPrompt(theme, subject, grade, characterName, storyKey)
  const userPrompt = buildFirstBatchPrompt(chapter, [point], theme, false, characterName)

  if (options.stream) {
    let fullResponse = ''
    await chatCompletionStream(
      [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }],
      {
        onChunk: (chunk) => { fullResponse += chunk; options.onChunk?.(chunk) },
        onDone: () => {
          try {
            const storyData = parseStoryResponse(fullResponse)
            storyData._generated = true
            storyData._pointId = pointId
            cacheStory(cacheKey, storyData)
            if (storyData._storyContext) {
              saveStoryContext(storyKey, { ...storyData, _chapterId: pointId })
            }
            options.onDone?.(storyData)
          } catch (e) {
            console.error('parse point story failed:', e)
            options.onError?.(e)
          }
        },
        onError: (err) => options.onError?.(err),
        maxTokens: 16000,
      }
    )
  } else {
    const response = await chatCompletion(
      [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }],
      { maxTokens: 16000 }
    )
    const storyData = parseStoryResponse(response)
    storyData._generated = true
    storyData._pointId = pointId
    cacheStory(cacheKey, storyData)
    if (storyData._storyContext) {
      saveStoryContext(storyKey, { ...storyData, _chapterId: pointId })
    }
    return storyData
  }
}

/**
 * 为整个章节生成故事（第一批，5个片段）
 * 返回 { storyData, hasMore, totalPoints }
 */
export async function generateStoryForChapter(chapterId, subject, grade, theme, options = {}) {
  const cacheKey = `ch_${grade}_${subject}_${theme}_${chapterId}`

  if (!options.forceRefresh) {
    const cached = getCachedStory(cacheKey)
    if (cached) {
      // 缓存命中，直接返回（包含所有批次）
      options.onDone?.(cached)
      return cached
    }
  }

  const found = getChapterKnowledgePoints(chapterId, subject, grade)
  if (!found) throw new Error(`chapter not found: ${chapterId}`)

  const { chapter, points } = found
  const characterName = options.characterName || ''
  const storyKey = makeStoryKey(subject, grade, theme)
  const context = getStoryContext(storyKey)
  const hasContext = formatContextForAI(context).length > 0

  const systemPrompt = buildSystemPrompt(theme, subject, grade, characterName, storyKey)
  const userPrompt = buildFirstBatchPrompt(chapter, points, theme, hasContext, characterName)

  const totalBatches = Math.ceil(points.length / EPISODES_PER_BATCH)

  if (options.stream) {
    let fullResponse = ''
    await chatCompletionStream(
      [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }],
      {
        onChunk: (chunk) => { fullResponse += chunk; options.onChunk?.(chunk) },
        onDone: () => {
          try {
            const storyData = parseStoryResponse(fullResponse)
            storyData._generated = true
            storyData._chapterId = chapterId
            storyData._batchesLoaded = 1
            storyData._totalBatches = totalBatches
            storyData._allPointsLoaded = points.length <= EPISODES_PER_BATCH
            cacheStory(cacheKey, storyData)
            if (storyData._storyContext) {
              saveStoryContext(storyKey, storyData)
            }
            options.onDone?.(storyData)
          } catch (e) {
            console.error('parse chapter story failed:', e)
            options.onError?.(e)
          }
        },
        onError: (err) => options.onError?.(err),
        maxTokens: 16000,
      }
    )
  } else {
    const response = await chatCompletion(
      [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }],
      { maxTokens: 16000 }
    )
    const storyData = parseStoryResponse(response)
    storyData._generated = true
    storyData._chapterId = chapterId
    storyData._batchesLoaded = 1
    storyData._totalBatches = totalBatches
    storyData._allPointsLoaded = points.length <= EPISODES_PER_BATCH
    cacheStory(cacheKey, storyData)
    if (storyData._storyContext) {
      saveStoryContext(storyKey, storyData)
    }
    return storyData
  }
}

/**
 * 生成下一批片段（后台预加载）
 * @param {string} chapterId
 * @param {string} subject
 * @param {string} grade
 * @param {string} theme
 * @param {Array} existingEpisodes - 已有的episodes数组
 * @param {object} options
 * @returns {Array} 新增的episodes
 */
export async function generateNextBatch(chapterId, subject, grade, theme, existingEpisodes, options = {}) {
  const found = getChapterKnowledgePoints(chapterId, subject, grade)
  if (!found) return []

  const { chapter, points } = found
  const storyKey = makeStoryKey(subject, grade, theme)
  const context = getStoryContext(storyKey)
  const batchIndex = Math.floor(existingEpisodes.length / EPISODES_PER_BATCH)
  const startIdx = batchIndex * EPISODES_PER_BATCH

  // 没有更多知识点可生成了
  if (startIdx >= points.length) return []

  const systemPrompt = buildSystemPrompt(theme, subject, grade, options.characterName || '', storyKey)
  const userPrompt = buildNextBatchPrompt(
    chapter, points, theme, batchIndex,
    summarizeEpisodes(existingEpisodes),
    context
  )

  const totalBatches = Math.ceil(points.length / EPISODES_PER_BATCH)

  if (options.stream) {
    let fullResponse = ''
    await chatCompletionStream(
      [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }],
      {
        onChunk: (chunk) => { fullResponse += chunk; options.onChunk?.(chunk) },
        onDone: () => {
          try {
            const batchData = parseStoryResponse(fullResponse)
            const newEpisodes = batchData.episodes || []
            // 更新缓存
            const cacheKey = `ch_${grade}_${subject}_${theme}_${chapterId}`
            const cached = getCachedStory(cacheKey)
            if (cached) {
              cached.episodes = [...cached.episodes, ...newEpisodes]
              cached._batchesLoaded = (cached._batchesLoaded || batchIndex) + 1
              cached._allPointsLoaded = startIdx + newEpisodes.length >= points.length
              cacheStory(cacheKey, cached)
            }
            // 更新故事上下文
            if (batchData._storyContext) {
              saveStoryContext(storyKey, {
                episodes: existingEpisodes.concat(newEpisodes),
                _storyContext: batchData._storyContext,
                _chapterId: chapterId,
              })
            }
            options.onDone?.(newEpisodes)
          } catch (e) {
            console.error('parse next batch failed:', e)
            options.onError?.(e)
          }
        },
        onError: (err) => options.onError?.(err),
        maxTokens: 16000,
      }
    )
  } else {
    const response = await chatCompletion(
      [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt }],
      { maxTokens: 16000 }
    )
    const batchData = parseStoryResponse(response)
    const newEpisodes = batchData.episodes || []
    // 更新缓存
    const cacheKey = `ch_${grade}_${subject}_${theme}_${chapterId}`
    const cached = getCachedStory(cacheKey)
    if (cached) {
      cached.episodes = [...cached.episodes, ...newEpisodes]
      cached._batchesLoaded = (cached._batchesLoaded || batchIndex) + 1
      cached._allPointsLoaded = startIdx + newEpisodes.length >= points.length
      cacheStory(cacheKey, cached)
    }
    if (batchData._storyContext) {
      saveStoryContext(storyKey, {
        episodes: existingEpisodes.concat(newEpisodes),
        _storyContext: batchData._storyContext,
        _chapterId: chapterId,
      })
    }
    return newEpisodes
  }
}

/**
 * 检查AI是否可用
 */
export async function checkAIAvailability() {
  try {
    const response = await chatCompletion(
      [{ role: 'user', content: 'say ok' }],
      { maxTokens: 10, temperature: 0 }
    )
    return !!response
  } catch { return false }
}

/**
 * 清除所有AI生成的故事缓存
 */
export function clearStoryCache() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith(CACHE_PREFIX)) keys.push(key)
  }
  keys.forEach(k => localStorage.removeItem(k))
}
