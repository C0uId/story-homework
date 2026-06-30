// 学习进度追踪 + 间隔重复复习系统 (增强版)
// 支持 localStorage 兼容 + IndexedDB 详细记录
const STORAGE_KEY = 'knowledgeTheater_progress'
const DAILY_ACTIVITY_KEY = 'knowledgeTheater_dailyActivity'
const CHAPTER_STORAGE_KEY = 'knowledgeTheater_chapters'
const SESSION_LOG_KEY = 'knowledgeTheater_sessions'
const DETAILED_LOG_KEY = 'knowledgeTheater_detailed'

// ==================== IndexedDB Layer ====================
const DB_NAME = 'KnowledgeTheaterDB'
const DB_VERSION = 1

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onupgradeneeded = (event) => {
      const db = event.target.result
      // 学习会话记录
      if (!db.objectStoreNames.contains('sessions')) {
        const store = db.createObjectStore('sessions', { keyPath: 'id', autoIncrement: true })
        store.createIndex('date', 'date', { unique: false })
        store.createIndex('subject', 'subject', { unique: false })
        store.createIndex('timestamp', 'startTime', { unique: false })
      }
      // 答题详细记录
      if (!db.objectStoreNames.contains('answers')) {
        const store = db.createObjectStore('answers', { keyPath: 'id', autoIncrement: true })
        store.createIndex('date', 'date', { unique: false })
        store.createIndex('pointId', 'pointId', { unique: false })
        store.createIndex('chapterId', 'chapterId', { unique: false })
        store.createIndex('timestamp', 'timestamp', { unique: false })
      }
      // 每日学习汇总
      if (!db.objectStoreNames.contains('dailySummary')) {
        const store = db.createObjectStore('dailySummary', { keyPath: 'date' })
        store.createIndex('date', 'date', { unique: true })
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => {
      console.warn('IndexedDB not available, falling back to localStorage only')
      resolve(null)
    }
  })
}

// ==================== Answer Detail Records ====================

/**
 * 记录答题详情
 */
export async function recordAnswerDetail({ pointId, chapterId, subject, grade, questionId, questionText, selectedAnswer, correctAnswer, isCorrect, episodeIndex, episodeTitle, timeSpent, hintUsed, wrongAttempts }) {
  const record = {
    pointId,
    chapterId,
    subject,
    grade,
    questionId,
    questionText,
    selectedAnswer,
    correctAnswer,
    isCorrect,
    episodeIndex,
    episodeTitle,
    timeSpent: timeSpent || 0,
    hintUsed: hintUsed || false,
    wrongAttempts: wrongAttempts || 0,
    timestamp: Date.now(),
    date: todayString(),
  }
  const db = await openDB()
  if (db) {
    try {
      const tx = db.transaction('answers', 'readwrite')
      tx.objectStore('answers').add(record)
      await new Promise((resolve, reject) => {
        tx.oncomplete = resolve
        tx.onerror = reject
      })
    } catch (e) {
      console.warn('Failed to save answer detail:', e)
    }
  }
  // Also store in localStorage as backup
  try {
    const stored = JSON.parse(localStorage.getItem(DETAILED_LOG_KEY) || '[]')
    stored.push({ ...record, id: stored.length + 1 })
    if (stored.length > 5000) stored.splice(0, stored.length - 5000) // keep latest 5000
    localStorage.setItem(DETAILED_LOG_KEY, JSON.stringify(stored))
  } catch (e) {
    // localStorage might be full
  }
}

/**
 * 获取答题历史
 */
export async function getAnswerHistory({ days = 30, subject, pointId, chapterId } = {}) {
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000
  const db = await openDB()
  if (db) {
    try {
      const tx = db.transaction('answers', 'readonly')
      const store = tx.objectStore('answers')
      const all = await new Promise((resolve, reject) => {
        const request = store.getAll()
        request.onsuccess = () => resolve(request.result)
        request.onerror = reject
      })
      let results = all.filter(r => r.timestamp >= cutoff)
      if (subject) results = results.filter(r => r.subject === subject)
      if (pointId) results = results.filter(r => r.pointId === pointId)
      if (chapterId) results = results.filter(r => r.chapterId === chapterId)
      return results.sort((a, b) => b.timestamp - a.timestamp)
    } catch (e) {
      console.warn('Failed to get answer history from DB:', e)
    }
  }
  // Fallback to localStorage
  try {
    const stored = JSON.parse(localStorage.getItem(DETAILED_LOG_KEY) || '[]')
    let results = stored.filter(r => r.timestamp >= cutoff)
    if (subject) results = results.filter(r => r.subject === subject)
    if (pointId) results = results.filter(r => r.pointId === pointId)
    if (chapterId) results = results.filter(r => r.chapterId === chapterId)
    return results.sort((a, b) => b.timestamp - a.timestamp)
  } catch {
    return []
  }
}

// ==================== Session Tracking ====================

let currentSession = null

/**
 * 开始一个学习会话
 */
export async function startSession({ subject, grade, chapterId, pointId, mode }) {
  currentSession = {
    startTime: Date.now(),
    date: todayString(),
    subject,
    grade,
    chapterId,
    pointId,
    mode,
    episodeCount: 0,
    answerCount: 0,
    correctCount: 0,
    duration: 0,
    completed: false,
  }
  return currentSession
}

/**
 * 结束当前学习会话
 */
export async function endSession() {
  if (!currentSession) return null
  currentSession.endTime = Date.now()
  currentSession.duration = currentSession.endTime - currentSession.startTime
  currentSession.completed = true

  const db = await openDB()
  if (db) {
    try {
      const tx = db.transaction('sessions', 'readwrite')
      tx.objectStore('sessions').add(currentSession)
      await new Promise((resolve, reject) => {
        tx.oncomplete = resolve
        tx.onerror = reject
      })
    } catch (e) {
      console.warn('Failed to save session:', e)
    }
  }
  // Backup to localStorage
  try {
    const stored = JSON.parse(localStorage.getItem(SESSION_LOG_KEY) || '[]')
    stored.push({ ...currentSession, id: stored.length + 1 })
    if (stored.length > 1000) stored.splice(0, stored.length - 1000)
    localStorage.setItem(SESSION_LOG_KEY, JSON.stringify(stored))
  } catch (e) {}

  const session = { ...currentSession }
  currentSession = null
  return session
}

/**
 * 在当前会话中记录一次答题
 */
export async function recordSessionAnswer(isCorrect) {
  if (!currentSession) return
  currentSession.answerCount++
  if (isCorrect) currentSession.correctCount++
}

/**
 * 在当前会话中记录一集完成
 */
export async function recordSessionEpisode() {
  if (!currentSession) return
  currentSession.episodeCount++
}

/**
 * 获取会话历史
 */
export async function getSessionHistory({ days = 30, subject } = {}) {
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000
  const db = await openDB()
  if (db) {
    try {
      const tx = db.transaction('sessions', 'readonly')
      const store = tx.objectStore('sessions')
      const all = await new Promise((resolve, reject) => {
        const request = store.getAll()
        request.onsuccess = () => resolve(request.result)
        request.onerror = reject
      })
      let results = all.filter(r => r.startTime >= cutoff && r.completed)
      if (subject) results = results.filter(r => r.subject === subject)
      return results.sort((a, b) => b.startTime - a.startTime)
    } catch (e) {
      console.warn('Failed to get sessions from DB:', e)
    }
  }
  try {
    const stored = JSON.parse(localStorage.getItem(SESSION_LOG_KEY) || '[]')
    let results = stored.filter(r => r.startTime >= cutoff && r.completed)
    if (subject) results = results.filter(r => r.subject === subject)
    return results.sort((a, b) => b.startTime - a.startTime)
  } catch {
    return []
  }
}

// ==================== Daily Summary ====================

/**
 * 计算并保存每日学习汇总
 */
export async function computeDailySummary(date = todayString()) {
  const sessions = await getSessionHistory({ days: 1 })
  const todaySessions = sessions.filter(s => s.date === date)

  let totalDuration = 0
  let totalAnswers = 0
  let totalCorrect = 0
  let totalEpisodes = 0
  const subjects = new Set()

  for (const s of todaySessions) {
    totalDuration += s.duration || 0
    totalAnswers += s.answerCount || 0
    totalCorrect += s.correctCount || 0
    totalEpisodes += s.episodeCount || 0
    if (s.subject) subjects.add(s.subject)
  }

  const summary = {
    date,
    totalDuration,
    totalAnswers,
    totalCorrect,
    totalEpisodes,
    subjects: Array.from(subjects),
    lastUpdated: Date.now(),
  }

  const db = await openDB()
  if (db) {
    try {
      const tx = db.transaction('dailySummary', 'readwrite')
      tx.objectStore('dailySummary').put(summary)
      await new Promise((resolve, reject) => {
        tx.oncomplete = resolve
        tx.onerror = reject
      })
    } catch (e) {
      console.warn('Failed to save daily summary:', e)
    }
  }
  return summary
}

/**
 * 获取某段时间内的每日汇总
 */
export async function getDailySummaries(days = 30) {
  const db = await openDB()
  if (db) {
    try {
      const tx = db.transaction('dailySummary', 'readonly')
      const store = tx.objectStore('dailySummary')
      const all = await new Promise((resolve, reject) => {
        const request = store.getAll()
        request.onsuccess = () => resolve(request.result)
        request.onerror = reject
      })
      const cutoff = new Date()
      cutoff.setDate(cutoff.getDate() - days)
      const cutoffStr = cutoff.toISOString().slice(0, 10)
      return all.filter(s => s.date >= cutoffStr).sort((a, b) => a.date.localeCompare(b.date))
    } catch (e) {
      console.warn('Failed to get daily summaries:', e)
    }
  }
  return []
}

// ==================== Calendar Heatmap Data ====================

/**
 * 获取学习日历热力图数据（用于在进度页显示）
 */
export async function getCalendarHeatmapData(days = 90) {
  const summaries = await getDailySummaries(days)
  const map = {}
  for (const s of summaries) {
    map[s.date] = {
      duration: s.totalDuration || 0,
      answers: s.totalAnswers || 0,
      correct: s.totalCorrect || 0,
      episodes: s.totalEpisodes || 0,
    }
  }
  return map
}

/**
 * 获取当前周的学习统计
 */
export async function getWeeklyStats() {
  const now = new Date()
  const dayOfWeek = now.getDay()
  const monday = new Date(now)
  monday.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))
  const mondayStr = monday.toISOString().slice(0, 10)

  const summaries = await getDailySummaries(7)
  const weekSummaries = summaries.filter(s => s.date >= mondayStr)

  let totalDuration = 0
  let totalAnswers = 0
  let totalCorrect = 0
  let totalEpisodes = 0
  let activeDays = 0

  for (const s of weekSummaries) {
    totalDuration += s.totalDuration || 0
    totalAnswers += s.totalAnswers || 0
    totalCorrect += s.totalCorrect || 0
    totalEpisodes += s.totalEpisodes || 0
    if (s.totalDuration > 0 || s.totalAnswers > 0) activeDays++
  }

  return {
    totalDuration,
    totalAnswers,
    totalCorrect,
    totalEpisodes,
    activeDays,
    accuracy: totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0,
  }
}

// ==================== Enhanced Stats ====================

/**
 * 获取增强版总体学习统计
 */
export async function getEnhancedOverallStats() {
  const basicStats = getOverallStats()

  // 从会话记录获取真实学习时间
  const sessions = await getSessionHistory({ days: 365 })
  const realMinutes = Math.round(sessions.reduce((sum, s) => sum + (s.duration || 0), 0) / 60000)

  // 获取答题准确率
  const answers = await getAnswerHistory({ days: 365 })
  const totalAnswers = answers.length
  const correctAnswers = answers.filter(a => a.isCorrect).length

  // 今日学习时间
  const todaySessions = sessions.filter(s => s.date === todayString())
  const todayMinutes = Math.round(todaySessions.reduce((sum, s) => sum + (s.duration || 0), 0) / 60000)

  // 本周统计
  const weeklyStats = await getWeeklyStats()

  return {
    ...basicStats,
    realMinutes,
    totalAnswers,
    correctAnswers,
    realAccuracy: totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0,
    todayMinutes,
    weeklyActiveDays: weeklyStats.activeDays,
    weeklyDuration: weeklyStats.totalDuration,
    weeklyAnswers: weeklyStats.totalAnswers,
  }
}

// ==================== Data Export / Import ====================

/**
 * 导出所有学习数据
 */
export async function exportAllData() {
  const sessions = await getSessionHistory({ days: 3650 })
  const answers = await getAnswerHistory({ days: 3650 })
  const summaries = await getDailySummaries(365)

  const data = {
    exportDate: new Date().toISOString(),
    version: 2,
    progress: loadProgress(),
    chapterProgress: loadChapterProgress(),
    dailyActivity: loadDailyActivity(),
    sessions,
    answers,
    dailySummaries: summaries,
  }

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `知识剧场学习数据_${todayString()}.json`
  a.click()
  URL.revokeObjectURL(url)
  return data
}

/**
 * 导入学习数据
 */
export async function importAllData(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = async (e) => {
      try {
        const data = JSON.parse(e.target.result)
        if (!data.version) throw new Error('Invalid data format')

        // Restore localStorage data
        if (data.progress) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data.progress))
        }
        if (data.chapterProgress) {
          localStorage.setItem(CHAPTER_STORAGE_KEY, JSON.stringify(data.chapterProgress))
        }
        if (data.dailyActivity) {
          localStorage.setItem(DAILY_ACTIVITY_KEY, JSON.stringify(data.dailyActivity))
        }

        // Restore IndexedDB data
        const db = await openDB()
        if (db && data.sessions?.length) {
          const tx = db.transaction('sessions', 'readwrite')
          for (const s of data.sessions) {
            tx.objectStore('sessions').add(s)
          }
          await new Promise((resolve, reject) => {
            tx.oncomplete = resolve
            tx.onerror = reject
          })
        }
        if (db && data.answers?.length) {
          const tx = db.transaction('answers', 'readwrite')
          for (const a of data.answers) {
            tx.objectStore('answers').add(a)
          }
          await new Promise((resolve, reject) => {
            tx.oncomplete = resolve
            tx.onerror = reject
          })
        }

        resolve({ success: true, stats: {
          points: data.progress?.length || 0,
          sessions: data.sessions?.length || 0,
          answers: data.answers?.length || 0,
        }})
      } catch (err) {
        reject(new Error('数据格式无效: ' + err.message))
      }
    }
    reader.onerror = () => reject(new Error('读取文件失败'))
    reader.readAsText(file)
  })
}

/**
 * 清除全部学习数据（含 IndexedDB）
 */
export async function resetAllData() {
  resetProgress()
  resetChapterProgress()

  const db = await openDB()
  if (db) {
    try {
      // Clear all object stores
      const stores = ['sessions', 'answers', 'dailySummary']
      for (const storeName of stores) {
        const tx = db.transaction(storeName, 'readwrite')
        tx.objectStore(storeName).clear()
        await new Promise((resolve, reject) => {
          tx.oncomplete = resolve
          tx.onerror = reject
        })
      }
    } catch (e) {
      console.warn('Failed to clear IndexedDB:', e)
    }
  }

  localStorage.removeItem(SESSION_LOG_KEY)
  localStorage.removeItem(DETAILED_LOG_KEY)
}

// ==================== Existing API (kept for backward compatibility) ====================

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

export function getAllProgress() {
  return loadProgress()
}

export function getPointProgress(pointId) {
  const records = loadProgress()
  return records.find(r => r.pointId === pointId) || null
}

export function recordEpisodeComplete(pointId, subject, grade, chapterId, score, wentThroughWrongPath, episodeType = 'story') {
  const now = Date.now()
  const records = loadProgress()
  const existingIndex = records.findIndex(r => r.pointId === pointId)

  if (existingIndex >= 0) {
    const rec = records[existingIndex]
    rec.lastReviewed = now
    rec.reviewCount += 1
    rec.storyCompleted = true
    rec.wrongPathTaken = rec.wrongPathTaken || wentThroughWrongPath
    rec.episodeType = episodeType
    rec.bestScore = Math.max(rec.bestScore, score)
    rec.totalAttempts += 1
    if (score >= 60) rec.correctAttempts += 1

    const masteryDelta = 20 + (score >= 60 ? 10 : -5)
    rec.masteryLevel = Math.min(100, Math.max(0, rec.masteryLevel + masteryDelta))

    if (score >= 60) {
      rec.reviewStage = Math.min(rec.reviewStage + 1, REVIEW_INTERVALS.length - 1)
    } else {
      rec.reviewStage = Math.max(rec.reviewStage - 1, 0)
    }
    rec.nextReview = now + REVIEW_INTERVALS[rec.reviewStage]

    records[existingIndex] = rec
  } else {
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

export function getDueReviews() {
  const now = Date.now()
  const records = loadProgress()
  return records
    .filter(r => r.nextReview && r.nextReview <= now)
    .sort((a, b) => a.nextReview - b.nextReview)
}

export function getUpcomingReviews(daysAhead = 7) {
  const now = Date.now()
  const future = now + daysAhead * 24 * 60 * 60 * 1000
  const records = loadProgress()
  return records
    .filter(r => r.nextReview && r.nextReview > now && r.nextReview <= future)
    .sort((a, b) => a.nextReview - b.nextReview)
}

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
    estimatedMinutes: totalAttempts * 5,
  }
}

export function getMasteryLevel(pointId) {
  const rec = getPointProgress(pointId)
  return rec ? rec.masteryLevel : 0
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY)
  localStorage.removeItem(DAILY_ACTIVITY_KEY)
}

export function getLearningStreak() {
  const days = loadDailyActivity()
  if (days.length === 0) return 0

  const sorted = [...new Set(days)].sort().reverse()
  const today = todayString()

  let streak = 0
  let expected = today

  if (sorted[0] !== expected) {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    expected = yesterday.toISOString().slice(0, 10)
  }

  for (const day of sorted) {
    if (day === expected) {
      streak++
      const d = new Date(expected + 'T00:00:00')
      d.setDate(d.getDate() - 1)
      expected = d.toISOString().slice(0, 10)
    } else if (day < expected) {
      break
    }
  }

  return streak
}

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

export function recordChapterComplete(chapterId, subject, grade, theme, title) {
  const now = Date.now()
  const records = loadChapterProgress()
  const existingIndex = records.findIndex(r => r.chapterId === chapterId)

  if (existingIndex >= 0) {
    const rec = records[existingIndex]
    rec.lastCompleted = now
    rec.completionCount += 1
    rec.title = title || rec.title
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

export function getChapterProgress(chapterId) {
  const records = loadChapterProgress()
  return records.find(r => r.chapterId === chapterId) || null
}

export function getAllChapterProgress() {
  return loadChapterProgress()
}

export function getChaptersForReview() {
  const now = Date.now()
  const records = loadChapterProgress()
  return records
    .filter(r => r.nextReview && r.nextReview <= now)
    .sort((a, b) => a.nextReview - b.nextReview)
}

export function getUpcomingChapterReviews(daysAhead = 7) {
  const now = Date.now()
  const future = now + daysAhead * 24 * 60 * 60 * 1000
  const records = loadChapterProgress()
  return records
    .filter(r => r.nextReview && r.nextReview > now && r.nextReview <= future)
    .sort((a, b) => a.nextReview - b.nextReview)
}

export function recordChapterReview(chapterId, score) {
  const now = Date.now()
  const records = loadChapterProgress()
  const idx = records.findIndex(r => r.chapterId === chapterId)
  if (idx < 0) return

  const rec = records[idx]
  rec.lastReviewScore = score
  rec.reviewHistory.push({ time: now, score })

  if (score >= 60) {
    rec.reviewStage = Math.min(rec.reviewStage + 1, REVIEW_INTERVALS.length - 1)
  } else {
    rec.reviewStage = Math.max(rec.reviewStage - 1, 0)
  }
  rec.nextReview = now + REVIEW_INTERVALS[rec.reviewStage]

  records[idx] = rec
  saveChapterProgress(records)
  recordDailyActivity()
}

export function getReviewStageName(stage) {
  const names = ['第1天', '第2天', '第4天', '第7天', '第15天', '1个月后', '3个月后', '6个月后']
  return names[stage] || '已掌握'
}

export function resetChapterProgress() {
  localStorage.removeItem(CHAPTER_STORAGE_KEY)
}

// ==================== 实时学习数据查询 ====================

/**
 * 获取今日学习统计（实时计算）
 */
export async function getTodayStats() {
  const sessions = await getSessionHistory({ days: 1 })
  const todaySessions = sessions.filter(s => s.date === todayString())

  let duration = 0
  let answers = 0
  let correct = 0
  let episodes = 0

  for (const s of todaySessions) {
    duration += s.duration || 0
    answers += s.answerCount || 0
    correct += s.correctCount || 0
    episodes += s.episodeCount || 0
  }

  return {
    duration,
    answers,
    correct,
    episodes,
    accuracy: answers > 0 ? Math.round((correct / answers) * 100) : 0,
    minutes: Math.round(duration / 60000),
  }
}

/**
 * 获取学科分布统计
 */
export async function getSubjectDistribution() {
  const sessions = await getSessionHistory({ days: 90 })
  const subjectMap = {}

  for (const s of sessions) {
    const subj = s.subject || 'unknown'
    if (!subjectMap[subj]) {
      subjectMap[subj] = { duration: 0, answers: 0, correct: 0, episodes: 0, sessions: 0 }
    }
    subjectMap[subj].duration += s.duration || 0
    subjectMap[subj].answers += s.answerCount || 0
    subjectMap[subj].correct += s.correctCount || 0
    subjectMap[subj].episodes += s.episodeCount || 0
    subjectMap[subj].sessions++
  }

  return Object.entries(subjectMap)
    .map(([subject, stats]) => ({
      subject,
      ...stats,
      minutes: Math.round(stats.duration / 60000),
      accuracy: stats.answers > 0 ? Math.round((stats.correct / stats.answers) * 100) : 0,
    }))
    .sort((a, b) => b.duration - a.duration)
}