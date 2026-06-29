// 学习进度追踪 + 间隔重复复习系统
const STORAGE_KEY = 'knowledgeTheater_progress'
const DAILY_ACTIVITY_KEY = 'knowledgeTheater_dailyActivity'
const CHAPTER_STORAGE_KEY = 'knowledgeTheater_chapters'

// 间隔重复间隔（毫秒）
const REVIEW_INTERVALS = [
  1 * 24 * 60 * 60 * 1000,    // 1 day
  2 * 24 * 60 * 60 * 1000,    // 2 days
  4 * 24 * 60 * 60 * 1000,    // 4 days
  7 * 24 * 60 * 60 * 1000,    // 7 days (1 week)
  15 * 24 * 60 * 60 * 1000,   // 15 days
  30 * 24 * 60 * 60 * 1000,   // 1 month
  90 * 24 * 60 * 60 * 1000,   // 3 months
  180 * 24 * 60 * 60 * 1000,  // 6 months
]

// ========== Internal helpers ==========

function loadProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveProgress(records) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

function loadDailyActivity() {
  try {
    const data = localStorage.getItem(DAILY_ACTIVITY_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveDailyActivity(days) {
  localStorage.setItem(DAILY_ACTIVITY_KEY, JSON.stringify(days))
}

function todayString() {
  return new Date().toISOString().slice(0, 10)
}

function startOfDay(timestamp) {
  const d = new Date(timestamp)
  d.setHours(0, 0, 0, 0)
  return d.getTime()
}

// ========== Exported Functions ==========

/**
 * 获取所有学习进度记录
 */
export function getAllProgress() {
  return loadProgress()
}

/**
 * 获取某个知识点的学习进度
 */
export function getPointProgress(pointId) {
  const records = loadProgress()
  return records.find(r => r.pointId === pointId) || null
}

/**
 * 记录故事剧集完成
 */
export function recordEpisodeComplete(pointId, subject, grade, chapterId, score, wentThroughWrongPath, episodeType = 'story') {
  const now = Date.now()
  const records = loadProgress()
  const existingIndex = records.findIndex(r => r.pointId === pointId)

  if (existingIndex >= 0) {
    // Update existing record
    const rec = records[existingIndex]
    rec.lastReviewed = now
    rec.reviewCount += 1
    rec.storyCompleted = true
    rec.wrongPathTaken = rec.wrongPathTaken || wentThroughWrongPath
    rec.episodeType = episodeType
    rec.bestScore = Math.max(rec.bestScore, score)
    rec.totalAttempts += 1
    if (score >= 60) rec.correctAttempts += 1

    // Calculate mastery: +20 for story completion, +10 per correct, -5 per wrong, +5 per successful review
    const masteryDelta = 20 + (score >= 60 ? 10 : -5)
    rec.masteryLevel = Math.min(100, Math.max(0, rec.masteryLevel + masteryDelta))

    // Calculate next review based on score
    if (score >= 60) {
      rec.reviewStage = Math.min(rec.reviewStage + 1, REVIEW_INTERVALS.length - 1)
    } else {
      rec.reviewStage = Math.max(rec.reviewStage - 1, 0)
    }
    rec.nextReview = now + REVIEW_INTERVALS[rec.reviewStage]

    records[existingIndex] = rec
  } else {
    // Create new record
    const mastery = 20 + (score >= 60 ? 10 : -5)
    records.push({
      pointId,
      subject,
      grade,
      chapterId,
      firstLearned: now,
      lastReviewed: now,
      reviewCount: 0,
      masteryLevel: Math.min(100, Math.max(0, mastery)),
      nextReview: now + REVIEW_INTERVALS[0],
      reviewStage: 0,
      bestScore: score,
      totalAttempts: 1,
      correctAttempts: score >= 60 ? 1 : 0,
      storyCompleted: true,
      wrongPathTaken: wentThroughWrongPath || false,
      episodeType: episodeType,
    })
  }

  saveProgress(records)
  recordDailyActivity()
}

/**
 * 计算下次复习时间
 */
export function calculateNextReview(currentStage, wasCorrect) {
  const now = Date.now()
  if (wasCorrect) {
    const nextStage = Math.min(currentStage + 1, REVIEW_INTERVALS.length - 1)
    return {
      nextReview: now + REVIEW_INTERVALS[nextStage],
      nextStage,
    }
  } else {
    const prevStage = Math.max(currentStage - 1, 0)
    return {
      nextReview: now + REVIEW_INTERVALS[prevStage],
      nextStage: prevStage,
    }
  }
}

/**
 * 获取所有需要复习的知识点
 */
export function getDueReviews() {
  const now = Date.now()
  const records = loadProgress()
  return records
    .filter(r => r.nextReview && r.nextReview <= now)
    .sort((a, b) => a.nextReview - b.nextReview)
}

/**
 * 获取未来N天的复习安排
 */
export function getUpcomingReviews(daysAhead = 7) {
  const now = Date.now()
  const future = now + daysAhead * 24 * 60 * 60 * 1000
  const records = loadProgress()
  return records
    .filter(r => r.nextReview && r.nextReview > now && r.nextReview <= future)
    .sort((a, b) => a.nextReview - b.nextReview)
}

/**
 * 获取总体学习统计
 */
export function getOverallStats() {
  const records = loadProgress()
  const totalLearned = records.length
  const avgMastery = totalLearned > 0
    ? Math.round(records.reduce((sum, r) => sum + r.masteryLevel, 0) / totalLearned)
    : 0
  const streak = getLearningStreak()
  const totalAttempts = records.reduce((sum, r) => sum + r.totalAttempts, 0)
  const totalCorrect = records.reduce((sum, r) => sum + r.correctAttempts, 0)
  const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0

  return {
    totalLearned,
    avgMastery,
    streak,
    totalAttempts,
    totalCorrect,
    accuracy,
    // Estimate study time: ~5 min per episode attempt
    estimatedMinutes: totalAttempts * 5,
  }
}

/**
 * 获取某个知识点的掌握等级 (0-100)
 */
export function getMasteryLevel(pointId) {
  const rec = getPointProgress(pointId)
  return rec ? rec.masteryLevel : 0
}

/**
 * 重置所有进度
 */
export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY)
  localStorage.removeItem(DAILY_ACTIVITY_KEY)
}

/**
 * 获取连续学习天数
 */
export function getLearningStreak() {
  const days = loadDailyActivity()
  if (days.length === 0) return 0

  const sorted = [...new Set(days)].sort().reverse()
  const today = todayString()

  let streak = 0
  let expected = today

  // Allow today to not have activity yet (start from yesterday)
  if (sorted[0] !== expected) {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    expected = yesterday.toISOString().slice(0, 10)
  }

  for (const day of sorted) {
    if (day === expected) {
      streak++
      // Move expected to previous day
      const d = new Date(expected + 'T00:00:00')
      d.setDate(d.getDate() - 1)
      expected = d.toISOString().slice(0, 10)
    } else if (day < expected) {
      break
    }
  }

  return streak
}

/**
 * 记录当天活跃
 */
export function recordDailyActivity() {
  const days = loadDailyActivity()
  const today = todayString()
  if (!days.includes(today)) {
    days.push(today)
    saveDailyActivity(days)
  }
}

// ========== Chapter-level Progress (Spaced Repetition) ==========

function loadChapterProgress() {
  try {
    const data = localStorage.getItem(CHAPTER_STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveChapterProgress(records) {
  localStorage.setItem(CHAPTER_STORAGE_KEY, JSON.stringify(records))
}

/**
 * 记录章节完成，设置间隔重复复习计划
 */
export function recordChapterComplete(chapterId, subject, grade, theme, title) {
  const now = Date.now()
  const records = loadChapterProgress()
  const existingIndex = records.findIndex(r => r.chapterId === chapterId)

  if (existingIndex >= 0) {
    const rec = records[existingIndex]
    rec.lastCompleted = now
    rec.completionCount += 1
    rec.title = title || rec.title
    // Reset review stage if re-completing
    if (rec.reviewStage === 0) {
      rec.nextReview = now + REVIEW_INTERVALS[0]
    }
    records[existingIndex] = rec
  } else {
    records.push({
      chapterId,
      subject,
      grade,
      theme,
      title: title || '未知章节',
      firstCompleted: now,
      lastCompleted: now,
      completionCount: 1,
      reviewStage: 0,
      nextReview: now + REVIEW_INTERVALS[0],
      lastReviewScore: null,
      reviewHistory: [],
    })
  }

  saveChapterProgress(records)
  recordDailyActivity()
}

/**
 * 获取某个章节的进度
 */
export function getChapterProgress(chapterId) {
  const records = loadChapterProgress()
  return records.find(r => r.chapterId === chapterId) || null
}

/**
 * 获取所有章节进度
 */
export function getAllChapterProgress() {
  return loadChapterProgress()
}

/**
 * 获取需要复习的章节（到期或逾期）
 */
export function getChaptersForReview() {
  const now = Date.now()
  const records = loadChapterProgress()
  return records
    .filter(r => r.nextReview && r.nextReview <= now)
    .sort((a, b) => a.nextReview - b.nextReview)
}

/**
 * 获取即将复习的章节（未来N天内）
 */
export function getUpcomingChapterReviews(daysAhead = 7) {
  const now = Date.now()
  const future = now + daysAhead * 24 * 60 * 60 * 1000
  const records = loadChapterProgress()
  return records
    .filter(r => r.nextReview && r.nextReview > now && r.nextReview <= future)
    .sort((a, b) => a.nextReview - b.nextReview)
}

/**
 * 记录章节复习，更新复习进度
 */
export function recordChapterReview(chapterId, score) {
  const now = Date.now()
  const records = loadChapterProgress()
  const idx = records.findIndex(r => r.chapterId === chapterId)
  if (idx < 0) return

  const rec = records[idx]
  rec.lastReviewScore = score
  rec.reviewHistory.push({ time: now, score })

  // Advance review stage if score >= 60, otherwise stay
  if (score >= 60) {
    rec.reviewStage = Math.min(rec.reviewStage + 1, REVIEW_INTERVALS.length - 1)
  } else {
    // Wrong answers: repeat current stage
    rec.reviewStage = Math.max(rec.reviewStage - 1, 0)
  }
  rec.nextReview = now + REVIEW_INTERVALS[rec.reviewStage]

  records[idx] = rec
  saveChapterProgress(records)
  recordDailyActivity()
}

/**
 * 获取章节复习阶段名称
 */
export function getReviewStageName(stage) {
  const names = ['第1天', '第2天', '第4天', '第7天', '第15天', '1个月后', '3个月后', '6个月后']
  return names[stage] || '已掌握'
}

/**
 * 重置章节进度
 */
export function resetChapterProgress() {
  localStorage.removeItem(CHAPTER_STORAGE_KEY)
}
