// 故事上下文系统 - 跨章节连贯叙事
// 存储每个学科+年级+主题的"故事护照"，让AI知道之前发生了什么

const CONTEXT_KEY = 'knowledgeTheater_storyContext'

/**
 * 获取所有故事上下文
 */
function loadAllContexts() {
  try {
    return JSON.parse(localStorage.getItem(CONTEXT_KEY) || '{}')
  } catch {
    return {}
  }
}

/**
 * 保存所有故事上下文
 */
function saveAllContexts(data) {
  try {
    localStorage.setItem(CONTEXT_KEY, JSON.stringify(data))
  } catch { /* 存储满则忽略 */ }
}

/**
 * 获取某个故事线的上下文
 * @param {string} storyKey - 格式: {grade}_{subject}_{theme}
 */
export function getStoryContext(storyKey) {
  const all = loadAllContexts()
  return all[storyKey] || null
}

/**
 * 保存章节完成后的故事上下文
 * AI会从每个章节的响应中提取故事状态
 */
export function saveStoryContext(storyKey, chapterData) {
  const all = loadAllContexts()
  const existing = all[storyKey] || {
    chapters: [],
    characters: {},     // 角色名→描述
    setting: '',        // 故事背景设定
    plotThreads: [],    // 正在发展的剧情线
    world: '',          // 世界观
    lastUpdated: 0,
  }

  // 提取本章的故事信息
  const chapterSummary = {
    chapterId: chapterData._chapterId || chapterData._pointId || `ch_${Date.now()}`,
    title: chapterData.title || '',
    episodeCount: chapterData.episodes?.length || 0,
    knowledgeCovered: chapterData.episodes?.map(ep => ep.knowledge).filter(Boolean) || [],
    // AI生成的故事元数据（由AI在生成时附带）
    storySummary: chapterData._storyContext?.summary || '',
    newCharacters: chapterData._storyContext?.newCharacters || [],
    plotProgress: chapterData._storyContext?.plotProgress || '',
    cliffhanger: chapterData._storyContext?.cliffhanger || '',
  }

  // 更新上下文
  existing.chapters.push(chapterSummary)
  existing.lastUpdated = Date.now()

  // 合并角色信息
  if (chapterData._storyContext?.characters) {
    Object.assign(existing.characters, chapterData._storyContext.characters)
  }
  if (chapterData._storyContext?.setting) {
    existing.setting = chapterData._storyContext.setting
  }
  if (chapterData._storyContext?.world) {
    existing.world = chapterData._storyContext.world
  }
  if (chapterData._storyContext?.plotThreads) {
    // 合并剧情线，去除已完结的
    const newThreads = chapterData._storyContext.plotThreads.filter(t => !t.ended)
    const existingIds = new Set(existing.plotThreads.map(t => t.id))
    newThreads.forEach(t => {
      if (!existingIds.has(t.id)) existing.plotThreads.push(t)
    })
    // 移除已标记ended的
    existing.plotThreads = existing.plotThreads.filter(t => !t.ended)
  }

  // 只保留最近10章的上下文（避免数据过大）
  if (existing.chapters.length > 10) {
    existing.chapters = existing.chapters.slice(-10)
  }

  all[storyKey] = existing
  saveAllContexts(all)
  return existing
}

/**
 * 清除某个故事线的上下文（重新开始故事）
 */
export function clearStoryContext(storyKey) {
  const all = loadAllContexts()
  delete all[storyKey]
  saveAllContexts(all)
}

/**
 * 将故事上下文格式化为AI可读的文本
 */
export function formatContextForAI(context) {
  if (!context || context.chapters.length === 0) return ''

  const lines = []

  // 世界观和设定
  if (context.world) {
    lines.push(`## 世界观设定\n${context.world}`)
  }
  if (context.setting) {
    lines.push(`## 故事背景\n${context.setting}`)
  }

  // 角色表
  const charEntries = Object.entries(context.characters)
  if (charEntries.length > 0) {
    lines.push('## 主要角色')
    charEntries.forEach(([name, desc]) => {
      lines.push(`- **${name}**：${desc}`)
    })
  }

  // 已完成章节摘要
  lines.push('## 已完成的剧情')
  context.chapters.forEach((ch, i) => {
    lines.push(`### 第${i + 1}章：${ch.title}`)
    if (ch.storySummary) {
      lines.push(ch.storySummary)
    }
    if (ch.knowledgeCovered.length > 0) {
      lines.push(`已学习知识点：${ch.knowledgeCovered.join('、')}`)
    }
    if (ch.cliffhanger) {
      lines.push(`**上集悬念：**${ch.cliffhanger}`)
    }
  })

  // 当前剧情线
  if (context.plotThreads.length > 0) {
    lines.push('## 正在发展的剧情')
    context.plotThreads.forEach(t => {
      lines.push(`- ${t.description}（${t.status || '进行中'}）`)
    })
  }

  return lines.join('\n')
}

/**
 * 为AI生成的故事响应添加上下文提取的指令
 */
export function getContextExtractionPrompt() {
  return `

## 额外要求：故事上下文提取
在JSON输出中，除了title和episodes外，还需要添加以下字段用于维持故事连贯性：

"_storyContext": {
  "summary": "本章故事的一句话摘要（50字以内）",
  "setting": "本章的故事场景设定",
  "world": "故事的世界观设定（如果是第一章）",
  "characters": {
    "角色名": "角色简介（一句话）"
  },
  "plotThreads": [
    { "id": "thread1", "description": "剧情线描述", "status": "进行中或已解决", "ended": false }
  ],
  "cliffhanger": "本章结尾的悬念（如果有），用于下一章开头衔接"
}

注意：
- _storyContext中的characters要包含本章出现的所有重要角色
- plotThreads是正在发展的剧情线，如果某条线在本章完结则设ended:true
- cliffhanger是吸引读者继续看下一章的悬念点，很重要`
}

/**
 * 从章节列表中获取第一个章节的ID（用于确定故事线起点）
 */
export function getFirstChapterId(subject, grade) {
  // 动态导入避免循环依赖
  return import('../data/knowledgeMap').then(({ knowledgeMap }) => {
    const subjectData = knowledgeMap[subject]
    if (!subjectData?.[grade]?.chapters?.length) return null
    return subjectData[grade].chapters[0].id
  }).catch(() => null)
}
