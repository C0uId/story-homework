<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { knowledgeMap, getChapterSemester } from '../data/knowledgeMap'
import {
  getAllProgress,
  getOverallStats,
  getDueReviews,
  getUpcomingReviews,
  resetProgress,
  getAllChapterProgress,
  getChaptersForReview,
  getReviewStageName,
  getEnhancedOverallStats,
  getTodayStats,
  getSubjectDistribution,
  getCalendarHeatmapData,
  getWeeklyStats,
  exportAllData,
  importAllData,
  resetAllData,
} from '../utils/learningProgress'

const router = useRouter()

// Reactive data
const stats = ref({ totalLearned: 0, avgMastery: 0, streak: 0, totalAttempts: 0, totalCorrect: 0, accuracy: 0, estimatedMinutes: 0 })
const enhancedStats = ref(null)
const todayStats = ref({ duration: 0, answers: 0, correct: 0, episodes: 0, accuracy: 0, minutes: 0 })
const weeklyStats = ref({ totalDuration: 0, totalAnswers: 0, totalCorrect: 0, totalEpisodes: 0, activeDays: 0, accuracy: 0 })
const subjectDistribution = ref([])
const calendarData = ref({})
const dueReviews = ref([])
const upcomingReviews = ref([])
const allProgress = ref([])
const showResetConfirm = ref(false)
const chapterProgressRecords = ref([])
const chapterDueReviews = ref([])
const showExportSuccess = ref(false)
const importFileInput = ref(null)
const showImportConfirm = ref(false)
const importFile = ref(null)
const loading = ref(true)

// 日历热力图配置
const calendarDays = computed(() => {
  const days = []
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const totalDays = 91 // 13 weeks * 7 days

  for (let i = totalDays - 1; i >= 0; i--) {
    const dayDate = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
    const dayStr = dayDate.toISOString().slice(0, 10)
    const dayData = calendarData.value[dayStr]

    let level = 0
    if (dayData) {
      const mins = dayData.duration / 60000
      if (mins > 30) level = 4
      else if (mins > 20) level = 3
      else if (mins > 10) level = 2
      else if (mins > 0) level = 1
    }

    days.push({
      date: dayStr,
      day: dayDate.getDate(),
      month: dayDate.getMonth(),
      level,
      isToday: i === 0,
      minutes: dayData ? Math.round(dayData.duration / 60000) : 0,
    })
  }
  return days
})

// 按周分组的日历数据
const calendarWeeks = computed(() => {
  const weeks = []
  let currentWeek = []

  for (const day of calendarDays.value) {
    const dow = new Date(day.date + 'T00:00:00').getDay()
    currentWeek.push(day)
    if (dow === 6) { // Saturday is end of week
      weeks.push(currentWeek)
      currentWeek = []
    }
  }
  if (currentWeek.length > 0) weeks.push(currentWeek)
  return weeks
})

// 月份标签
const monthLabels = computed(() => {
  const labels = []
  let lastMonth = -1
  for (const day of calendarDays.value) {
    if (day.month !== lastMonth && day.day <= 7) {
      const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      labels.push({ index: calendarDays.value.indexOf(day), label: monthNames[day.month] })
      lastMonth = day.month
    }
  }
  return labels
})

onMounted(async () => {
  loading.value = true
  await refreshData()
  loading.value = false
})

async function refreshData() {
  stats.value = getOverallStats()
  dueReviews.value = getDueReviews()
  upcomingReviews.value = getUpcomingReviews(7)
  allProgress.value = getAllProgress()
  chapterProgressRecords.value = getAllChapterProgress()
  chapterDueReviews.value = getChaptersForReview()

  // 加载增强数据
  try {
    enhancedStats.value = await getEnhancedOverallStats()
    todayStats.value = await getTodayStats()
    weeklyStats.value = await getWeeklyStats()
    subjectDistribution.value = await getSubjectDistribution()
    calendarData.value = await getCalendarHeatmapData(91)
  } catch (e) {
    console.warn('Failed to load enhanced stats:', e)
  }
}

// Build chapter progress data from knowledgeMap
const chapterProgressData = computed(() => {
  const result = []
  const progressMap = {}
  for (const rec of allProgress.value) {
    progressMap[rec.pointId] = rec
  }

  const subjects = knowledgeMap.subjects || []
  for (const subject of subjects) {
    const subjectData = knowledgeMap[subject.id]
    if (!subjectData) continue
    const grades = knowledgeMap.grades || []

    for (const grade of grades) {
      const chapters = subjectData[grade.id]
      if (!chapters) continue

      const chapterArray = Array.isArray(chapters) ? chapters : chapters.chapters || []
      for (const chapter of chapterArray) {
        const points = chapter.points || []
        let learnedCount = 0
        let totalMastery = 0
        for (const pt of points) {
          const rec = progressMap[pt.id]
          if (rec) {
            learnedCount++
            totalMastery += rec.masteryLevel
          }
        }
        if (learnedCount > 0) {
          result.push({
            chapterId: chapter.id,
            title: chapter.title,
            icon: chapter.icon,
            subject: subject.id,
            subjectName: subject.name,
            grade: grade.id,
            gradeName: grade.name,
            totalPoints: points.length,
            learnedPoints: learnedCount,
            avgMastery: Math.round(totalMastery / learnedCount),
          })
        }
      }
    }
  }
  return result
})

// Get point name from knowledgeMap by pointId
function getPointName(pointId) {
  const subjects = knowledgeMap.subjects || []
  for (const subject of subjects) {
    const subjectData = knowledgeMap[subject.id]
    if (!subjectData) continue
    const grades = knowledgeMap.grades || []
    for (const grade of grades) {
      const chapters = subjectData[grade.id]
      if (!chapters) continue
      const chapterArray = Array.isArray(chapters) ? chapters : chapters.chapters || []
      for (const chapter of chapterArray) {
        for (const pt of (chapter.points || [])) {
          if (pt.id === pointId) return pt.name
        }
      }
    }
  }
  return pointId
}

function getSubjectIcon(subject) {
  const s = (knowledgeMap.subjects || []).find(s => s.id === subject)
  return s ? s.icon : '📖'
}

function getSubjectName(subject) {
  const s = (knowledgeMap.subjects || []).find(s => s.id === subject)
  return s ? s.name : subject
}

function getSubjectColor(subject) {
  const s = (knowledgeMap.subjects || []).find(s => s.id === subject)
  return s ? s.color : '#888'
}

// Due review urgency
function getUrgencyClass(record) {
  const now = Date.now()
  const overdue = now - record.nextReview
  if (overdue > 24 * 60 * 60 * 1000) return 'urgency-overdue'
  if (overdue > 0) return 'urgency-today'
  return 'urgency-upcoming'
}

function getUrgencyLabel(record) {
  const now = Date.now()
  const overdue = now - record.nextReview
  if (overdue > 24 * 60 * 60 * 1000) {
    const days = Math.floor(overdue / (24 * 60 * 60 * 1000))
    return `逾期 ${days} 天`
  }
  if (overdue > 0) return '今天'
  return '即将到期'
}

// Timeline helpers
const timelineDays = computed(() => {
  const days = []
  const now = new Date()
  now.setHours(0, 0, 0, 0)

  for (let i = 0; i < 7; i++) {
    const dayDate = new Date(now.getTime() + i * 24 * 60 * 60 * 1000)
    const dayStr = dayDate.toISOString().slice(0, 10)
    const dayLabel = i === 0 ? '今天' : i === 1 ? '明天' : `${dayDate.getMonth() + 1}/${dayDate.getDate()}`

    const dayRecords = upcomingReviews.value.filter(r => {
      const reviewDate = new Date(r.nextReview).toISOString().slice(0, 10)
      return reviewDate === dayStr
    })

    let dueTodayRecords = []
    if (i === 0) {
      dueTodayRecords = dueReviews.value
    }

    days.push({
      date: dayStr,
      label: dayLabel,
      isToday: i === 0,
      records: [...dueTodayRecords, ...dayRecords],
      count: dueTodayRecords.length + dayRecords.length,
    })
  }
  return days
})

function formatTime(timestamp) {
  if (!timestamp) return '未知'
  const d = new Date(timestamp)
  return `${d.getMonth() + 1}/${d.getDate()}`
}

function formatMinutes(mins) {
  if (mins < 60) return `${mins}分钟`
  const h = Math.floor(mins / 60)
  const m = mins % 60
  return m > 0 ? `${h}小时${m}分钟` : `${h}小时`
}

function formatDuration(ms) {
  const mins = Math.round(ms / 60000)
  return formatMinutes(mins)
}

function handleReset() {
  resetAllData()
  refreshData()
  showResetConfirm.value = false
}

// 导出/导入
async function handleExport() {
  try {
    await exportAllData()
    showExportSuccess.value = true
    setTimeout(() => { showExportSuccess.value = false }, 3000)
  } catch (e) {
    console.error('Export failed:', e)
  }
}

function handleImportClick() {
  importFileInput.value?.click()
}

function onFileSelected(event) {
  const file = event.target.files?.[0]
  if (file) {
    importFile.value = file
    showImportConfirm.value = true
  }
}

async function confirmImport() {
  if (!importFile.value) return
  try {
    const result = await importAllData(importFile.value)
    showImportConfirm.value = false
    importFile.value = null
    await refreshData()
    alert(`导入成功！\n知识点数: ${result.stats.points}\n会话数: ${result.stats.sessions}\n答题记录: ${result.stats.answers}`)
  } catch (e) {
    alert('导入失败: ' + e.message)
    showImportConfirm.value = false
    importFile.value = null
  }
}

// Chapter review helpers
function getChapterSubjectName(chapter) {
  const s = (knowledgeMap.subjects || []).find(s => s.id === chapter.subject)
  return s ? s.name : chapter.subject
}
function getChapterSubjectIcon(chapter) {
  const s = (knowledgeMap.subjects || []).find(s => s.id === chapter.subject)
  return s ? s.icon : '📖'
}
function formatReviewTime(timestamp) {
  if (!timestamp) return '未知'
  const d = new Date(timestamp)
  return `${d.getMonth() + 1}/${d.getDate()}`
}
function getChapterUrgencyClass(chapter) {
  const now = Date.now()
  const overdue = now - (chapter.nextReview || 0)
  if (overdue > 24 * 60 * 60 * 1000) return 'urgency-overdue'
  if (overdue > 0) return 'urgency-today'
  return 'urgency-upcoming'
}
</script>

<template>
  <div class="progress-page">
    <!-- Floating Decorations -->
    <span class="deco deco-1">📊</span>
    <span class="deco deco-2">⭐</span>
    <span class="deco deco-3">📈</span>
    <span class="deco deco-4">🏆</span>

    <!-- Page Header -->
    <div class="wrap progress-header">
      <button class="btn btn-outline" @click="router.push('/')">← 返回首页</button>
      <h1 class="page-title">📊 学习进度</h1>
      <p class="page-subtitle">真实记录你的每一次学习，科学追踪成长轨迹</p>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="wrap" style="text-align:center;padding:80px 0;">
      <div class="loading-spinner"></div>
      <p style="color:var(--text3);margin-top:16px;">正在加载学习数据...</p>
    </div>

    <template v-if="!loading">
      <!-- ===== 今日学习概况 ===== -->
      <div class="wrap">
        <span class="section-badge badge-coral">⚡ 今日学习</span>
        <div class="today-grid">
          <div class="today-stat card">
            <div class="today-stat-icon" style="background:linear-gradient(135deg,#667eea20,#667eea40);color:#667eea;">⏱️</div>
            <div class="today-stat-value">{{ formatMinutes(todayStats.minutes) }}</div>
            <div class="today-stat-label">学习时长</div>
          </div>
          <div class="today-stat card">
            <div class="today-stat-icon" style="background:linear-gradient(135deg,#34D39920,#34D39940);color:#34D399;">📖</div>
            <div class="today-stat-value">{{ todayStats.episodes }}</div>
            <div class="today-stat-label">故事剧集</div>
          </div>
          <div class="today-stat card">
            <div class="today-stat-icon" style="background:linear-gradient(135deg,#FF8C4220,#FF8C4240);color:#FF8C42;">❓</div>
            <div class="today-stat-value">{{ todayStats.answers }}</div>
            <div class="today-stat-label">答题数量</div>
          </div>
          <div class="today-stat card">
            <div class="today-stat-icon" style="background:linear-gradient(135deg,#C084FC20,#C084FC40);color:#C084FC;">🎯</div>
            <div class="today-stat-value">{{ todayStats.accuracy }}%</div>
            <div class="today-stat-label">答题准确率</div>
          </div>
        </div>
      </div>

      <!-- ===== Dashboard Stats ===== -->
      <div class="wrap" style="margin-top:32px;">
        <span class="section-badge badge-coral">📊 数据总览</span>
        <div class="stats-grid">
          <!-- Total Learned -->
          <div class="stat-card card">
            <div class="stat-icon" style="background: linear-gradient(135deg, #FF6B6B20, #FF6B6B40); color: #FF6B6B;">📚</div>
            <div class="stat-info">
              <div class="stat-value">{{ enhancedStats?.totalLearned || stats.totalLearned }}</div>
              <div class="stat-label">已学知识点</div>
            </div>
          </div>

          <!-- Average Mastery - Circular -->
          <div class="stat-card card">
            <div class="mastery-ring-container">
              <svg class="mastery-ring" viewBox="0 0 100 100">
                <circle class="mastery-ring-bg" cx="50" cy="50" r="42" />
                <circle class="mastery-ring-fill" cx="50" cy="50" r="42"
                  :stroke-dasharray="2 * Math.PI * 42"
                  :stroke-dashoffset="2 * Math.PI * 42 * (1 - (enhancedStats?.avgMastery || stats.avgMastery) / 100)" />
              </svg>
              <div class="mastery-ring-text">{{ enhancedStats?.avgMastery || stats.avgMastery }}%</div>
            </div>
            <div class="stat-info">
              <div class="stat-label">平均掌握度</div>
            </div>
          </div>

          <!-- Learning Streak -->
          <div class="stat-card card">
            <div class="stat-icon" style="background: linear-gradient(135deg, #FF8C4220, #FF8C4240); color: #FF8C42;">🔥</div>
            <div class="stat-info">
              <div class="stat-value">{{ enhancedStats?.streak || stats.streak }}<span class="stat-unit">天</span></div>
              <div class="stat-label">连续学习</div>
            </div>
          </div>

          <!-- 本周活跃 -->
          <div class="stat-card card">
            <div class="stat-icon" style="background: linear-gradient(135deg, #34D39920, #34D39940); color: #34D399;">📅</div>
            <div class="stat-info">
              <div class="stat-value">{{ weeklyStats.activeDays }}<span class="stat-unit">/7天</span></div>
              <div class="stat-label">本周活跃</div>
            </div>
          </div>

          <!-- 真实学习时间 -->
          <div class="stat-card card">
            <div class="stat-icon" style="background: linear-gradient(135deg, #60A5FA20, #60A5FA40); color: #60A5FA;">⏱️</div>
            <div class="stat-info">
              <div class="stat-value">{{ formatMinutes(enhancedStats?.realMinutes || stats.estimatedMinutes) }}</div>
              <div class="stat-label">累计学习时长</div>
            </div>
          </div>

          <!-- 本周答题 -->
          <div class="stat-card card">
            <div class="stat-icon" style="background: linear-gradient(135deg, #F59E0B20, #F59E0B40); color: #F59E0B;">🎯</div>
            <div class="stat-info">
              <div class="stat-value">{{ enhancedStats?.realAccuracy || stats.accuracy }}%</div>
              <div class="stat-label">综合准确率</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== 学习日历热力图 ===== -->
      <div class="wrap" style="margin-top:32px;">
        <span class="section-badge badge-green">📅 学习日历</span>
        <p style="font-size:13px;color:var(--text3);margin:8px 0 12px;">近3个月每日学习时长分布</p>
        <div class="calendar-heatmap card">
          <div class="heatmap-header">
            <div class="heatmap-months">
              <span v-for="ml in monthLabels" :key="ml.label" class="heatmap-month-label"
                :style="{ marginLeft: ml.index * 14 + 'px' }">{{ ml.label }}</span>
            </div>
          </div>
          <div class="heatmap-body">
            <div class="heatmap-weekdays">
              <span>一</span><span>三</span><span>五</span>
            </div>
            <div class="heatmap-grid">
              <template v-for="week in calendarWeeks" :key="week[0]?.date">
                <div v-for="day in week" :key="day.date" class="heatmap-cell"
                  :class="'level-' + day.level + (day.isToday ? ' is-today' : '')"
                  :title="day.date + ': ' + (day.minutes > 0 ? day.minutes + '分钟' : '无学习记录')">
                </div>
              </template>
            </div>
          </div>
          <div class="heatmap-legend">
            <span class="legend-label">少</span>
            <span class="legend-cell level-0"></span>
            <span class="legend-cell level-1"></span>
            <span class="legend-cell level-2"></span>
            <span class="legend-cell level-3"></span>
            <span class="legend-cell level-4"></span>
            <span class="legend-label">多</span>
          </div>
        </div>
      </div>

      <!-- ===== 学科分布 ===== -->
      <div class="wrap" style="margin-top:32px;" v-if="subjectDistribution.length > 0">
        <span class="section-badge badge-blue">📚 学科分布</span>
        <p style="font-size:13px;color:var(--text3);margin:8px 0 12px;">各学科学习时长与答题表现</p>
        <div class="subject-grid">
          <div v-for="subj in subjectDistribution" :key="subj.subject" class="subject-card card">
            <div class="subject-card-header">
              <span class="subject-icon">{{ getSubjectIcon(subj.subject) }}</span>
              <span class="subject-name">{{ getSubjectName(subj.subject) }}</span>
            </div>
            <div class="subject-stats">
              <div class="subject-stat">
                <span class="subject-stat-value">{{ formatMinutes(subj.minutes) }}</span>
                <span class="subject-stat-label">学习时长</span>
              </div>
              <div class="subject-stat">
                <span class="subject-stat-value">{{ subj.answers }}</span>
                <span class="subject-stat-label">答题</span>
              </div>
              <div class="subject-stat">
                <span class="subject-stat-value" :class="{ 'stat-good': subj.accuracy >= 70, 'stat-ok': subj.accuracy >= 40 && subj.accuracy < 70, 'stat-poor': subj.accuracy < 40 }">{{ subj.accuracy }}%</span>
                <span class="subject-stat-label">准确率</span>
              </div>
            </div>
            <div class="subject-bar">
              <div class="subject-bar-fill" :style="{
                width: Math.min(100, subj.minutes / Math.max(...subjectDistribution.map(s => s.minutes)) * 100) + '%',
                background: getSubjectColor(subj.subject)
              }"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== Due Reviews Section ===== -->
      <div class="wrap" style="margin-top:32px;">
        <span class="section-badge badge-orange">🔄 待复习</span>
        <div v-if="dueReviews.length === 0" class="empty-state card">
          <div class="empty-icon">🎉</div>
          <div class="empty-text">暂无待复习的知识点</div>
          <div class="empty-sub">继续学习新故事，复习任务会自动安排</div>
        </div>
        <div v-else class="due-list">
          <div v-for="record in dueReviews" :key="record.pointId" class="due-card card" :class="getUrgencyClass(record)">
            <div class="due-card-header">
              <span class="due-point-icon">{{ getSubjectIcon(record.subject) }}</span>
              <div class="due-point-info">
                <div class="due-point-name">{{ getPointName(record.pointId) }}</div>
                <div class="due-point-meta">
                  {{ getSubjectName(record.subject) }} · 上次复习: {{ formatTime(record.lastReviewed) }}
                </div>
              </div>
              <span class="due-urgency-tag" :class="getUrgencyClass(record)">{{ getUrgencyLabel(record) }}</span>
            </div>
            <div class="due-card-footer">
              <div class="mastery-bar-container">
                <div class="mastery-bar">
                  <div class="mastery-bar-fill" :style="{ width: record.masteryLevel + '%', background: record.masteryLevel >= 70 ? '#34D399' : record.masteryLevel >= 40 ? '#FF8C42' : '#FF6B6B' }"></div>
                </div>
                <span class="mastery-bar-label">{{ record.masteryLevel }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== Chapter Review Schedule ===== -->
      <div class="wrap" style="margin-top:32px;" v-if="chapterProgressRecords.length > 0">
        <span class="section-badge badge-mint">🧠 章节复习计划</span>
        <p style="font-size:13px;color:var(--text3);margin:8px 0 12px;">基于艾宾浩斯遗忘曲线：1天 → 2天 → 4天 → 7天 → 15天 → 1月 → 3月 → 6月</p>
        <div class="chapter-review-list">
          <div v-for="ch in chapterProgressRecords" :key="ch.chapterId" class="chapter-review-card card"
            :class="{ 'chapter-due': ch.nextReview && ch.nextReview <= Date.now() }">
            <div class="chapter-review-header">
              <span class="chapter-review-icon">{{ getChapterSubjectIcon(ch) }}</span>
              <div class="chapter-review-info">
                <div class="chapter-review-title">{{ ch.title }} <span class="semester-badge-review">{{ getChapterSemester(ch.subject, ch.chapterId, ch.grade) }}</span></div>
                <div class="chapter-review-meta">
                  {{ getChapterSubjectName(ch) }} · 已完成 {{ ch.completionCount }} 次
                </div>
              </div>
              <div class="chapter-review-stage">
                <span class="stage-badge" :class="{ 'stage-due': ch.nextReview && ch.nextReview <= Date.now() }">
                  {{ getReviewStageName(ch.reviewStage) }}
                </span>
              </div>
            </div>
            <div class="chapter-review-timeline">
              <div v-for="(interval, idx) in [1,2,4,7,15,30,90,180]" :key="idx"
                class="timeline-dot-item"
                :class="{
                  'dot-completed': idx < ch.reviewStage,
                  'dot-current': idx === ch.reviewStage,
                  'dot-future': idx > ch.reviewStage
                }">
                <span class="dot-label">{{ idx < 5 ? interval + '天' : idx === 5 ? '1月' : idx === 6 ? '3月' : '6月' }}</span>
              </div>
            </div>
            <div class="chapter-review-footer" v-if="ch.nextReview">
              <span v-if="ch.nextReview <= Date.now()" style="color: var(--coral); font-weight: 600; font-size: 13px;">
                ⏰ 现在可以复习！
              </span>
              <span v-else style="color: var(--text3); font-size: 13px;">
                下次复习：{{ formatReviewTime(ch.nextReview) }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== Review Timeline ===== -->
      <div class="wrap" style="margin-top:32px;">
        <span class="section-badge badge-purple">📅 复习时间线</span>
        <div class="timeline">
          <div v-for="day in timelineDays" :key="day.date" class="timeline-day" :class="{ 'timeline-today': day.isToday, 'timeline-empty': day.count === 0 }">
            <div class="timeline-marker">
              <div class="timeline-dot" :class="{ 'dot-active': day.count > 0, 'dot-today': day.isToday }"></div>
              <div v-if="day.isToday" class="timeline-today-badge">Today</div>
            </div>
            <div class="timeline-content">
              <div class="timeline-date">{{ day.label }}</div>
              <div v-if="day.count === 0" class="timeline-empty-text">暂无安排</div>
              <div v-else class="timeline-points">
                <span v-for="rec in day.records" :key="rec.pointId" class="timeline-point-tag">
                  {{ getSubjectIcon(rec.subject) }} {{ getPointName(rec.pointId) }}
                </span>
                <span class="timeline-count-badge">{{ day.count }}个</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== Chapter Progress ===== -->
      <div class="wrap" style="margin-top:32px;">
        <span class="section-badge badge-blue">📖 章节进度</span>
        <div v-if="chapterProgressData.length === 0" class="empty-state card">
          <div class="empty-icon">📖</div>
          <div class="empty-text">开始学习后，章节进度将在此显示</div>
        </div>
        <div v-else class="chapter-grid">
          <div v-for="ch in chapterProgressData" :key="ch.chapterId" class="chapter-card card">
            <div class="chapter-header">
              <span class="chapter-icon">{{ ch.icon }}</span>
              <div class="chapter-title-group">
                <div class="chapter-title">{{ ch.title }}</div>
                <div class="chapter-meta">{{ ch.subjectName }} · {{ ch.gradeName }}</div>
              </div>
              <div class="chapter-mastery-badge" :class="{ masteryHigh: ch.avgMastery >= 70, masteryMid: ch.avgMastery >= 40 && ch.avgMastery < 70, masteryLow: ch.avgMastery < 40 }">
                {{ ch.avgMastery }}%
              </div>
            </div>
            <div class="chapter-progress-bar">
              <div class="chapter-progress-fill" :style="{ width: (ch.learnedPoints / ch.totalPoints * 100) + '%' }"></div>
            </div>
            <div class="chapter-footer">
              <span class="chapter-count">已学 {{ ch.learnedPoints }}/{{ ch.totalPoints }} 个知识点</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== 数据管理与导出 ===== -->
      <div class="wrap" style="margin-top:32px;padding-bottom:40px;">
        <span class="section-badge badge-gray">💾 数据管理</span>
        <div class="data-actions card">
          <p style="font-size:13px;color:var(--text3);margin-bottom:16px;line-height:1.6;">
            你的所有学习数据均存储在浏览器本地。建议定期导出备份，以防数据丢失。
          </p>
          <div class="data-button-group">
            <button class="btn btn-primary" @click="handleExport" style="background:linear-gradient(135deg,#667eea,#764ba2);">
              📤 导出数据
            </button>
            <button class="btn btn-outline" @click="handleImportClick">
              📥 导入数据
            </button>
            <button class="btn btn-outline reset-btn" @click="showResetConfirm = true">
              🗑️ 重置所有数据
            </button>
          </div>
          <input ref="importFileInput" type="file" accept=".json" style="display:none" @change="onFileSelected" />
          <div v-if="showExportSuccess" class="export-success">
            ✅ 数据导出成功！
          </div>
        </div>
      </div>
    </template>

    <!-- Reset Confirm Dialog -->
    <div v-if="showResetConfirm" class="dialog-overlay" @click.self="showResetConfirm = false">
      <div class="dialog card">
        <div class="dialog-icon">⚠️</div>
        <h3 class="dialog-title">确认重置？</h3>
        <p class="dialog-text">这将清除所有学习进度记录（包括浏览器数据库），此操作不可撤销。</p>
        <div class="dialog-actions">
          <button class="btn btn-outline" @click="showResetConfirm = false">取消</button>
          <button class="btn btn-coral" @click="handleReset" style="background: linear-gradient(135deg, #FF6B6B, #FF4757);">确认重置</button>
        </div>
      </div>
    </div>

    <!-- Import Confirm Dialog -->
    <div v-if="showImportConfirm" class="dialog-overlay" @click.self="showImportConfirm = false">
      <div class="dialog card">
        <div class="dialog-icon">📥</div>
        <h3 class="dialog-title">确认导入数据？</h3>
        <p class="dialog-text">导入将替换当前所有学习进度数据，请谨慎操作。</p>
        <div class="dialog-actions">
          <button class="btn btn-outline" @click="showImportConfirm = false; importFile = null">取消</button>
          <button class="btn btn-primary" @click="confirmImport" style="background:linear-gradient(135deg,#667eea,#764ba2);">确认导入</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-page {
  min-height: 100vh;
  padding-top: 40px;
  position: relative;
}

/* Header */
.progress-header {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}
.progress-header .btn {
  position: absolute;
  left: 0;
  top: 0;
}
.page-title {
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 900;
  background: linear-gradient(135deg, #FF6B6B, #C084FC, #60A5FA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}
.page-subtitle {
  font-size: 15px;
  color: var(--text3);
  font-weight: 400;
}

/* Loading */
.loading-spinner {
  width: 40px; height: 40px;
  border: 4px solid #F0E8F8;
  border-top-color: var(--purple);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Today Stats */
.today-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin-top: 12px;
}
.today-stat {
  text-align: center;
  padding: 20px 16px;
  cursor: default;
}
.today-stat:hover {
  transform: translateY(-3px);
}
.today-stat-icon {
  width: 44px; height: 44px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
  margin: 0 auto 10px;
}
.today-stat-value {
  font-size: 22px;
  font-weight: 900;
  color: var(--text);
}
.today-stat-label {
  font-size: 12px;
  color: var(--text3);
  margin-top: 4px;
  font-weight: 500;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 12px;
}
.stat-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  cursor: default;
}
.stat-card:hover {
  transform: translateY(-4px);
}
.stat-icon {
  width: 52px;
  height: 52px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}
.stat-info {
  flex: 1;
}
.stat-value {
  font-size: 26px;
  font-weight: 900;
  color: var(--text);
  line-height: 1.2;
}
.stat-unit {
  font-size: 14px;
  font-weight: 500;
  color: var(--text3);
  margin-left: 2px;
}
.stat-label {
  font-size: 13px;
  color: var(--text3);
  font-weight: 500;
  margin-top: 2px;
}

/* Mastery Ring */
.mastery-ring-container {
  position: relative;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
}
.mastery-ring {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}
.mastery-ring-bg {
  fill: none;
  stroke: #E8E0F0;
  stroke-width: 8;
}
.mastery-ring-fill {
  fill: none;
  stroke: url(#masteryGrad);
  stroke: var(--purple);
  stroke-width: 8;
  stroke-linecap: round;
  transition: stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1);
}
.mastery-ring-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 900;
  color: var(--text);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 48px 24px;
  cursor: default;
}
.empty-state:hover { transform: none; }
.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
}
.empty-text {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
}
.empty-sub {
  font-size: 13px;
  color: var(--text3);
}

/* Due Reviews */
.due-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
}
.due-card {
  padding: 16px 20px;
  cursor: default;
  border-left: 4px solid transparent;
}
.due-card:hover { transform: translateY(-3px); }
.due-card.urgency-overdue { border-left-color: var(--coral); }
.due-card.urgency-today { border-left-color: var(--orange); }
.due-card.urgency-upcoming { border-left-color: var(--mint); }

.due-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
}
.due-point-icon {
  font-size: 28px;
  flex-shrink: 0;
}
.due-point-info {
  flex: 1;
  min-width: 0;
}
.due-point-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.due-point-meta {
  font-size: 12px;
  color: var(--text3);
  margin-top: 2px;
}
.due-urgency-tag {
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  flex-shrink: 0;
}
.due-urgency-tag.urgency-overdue {
  background: #FFE8E8;
  color: var(--coral);
}
.due-urgency-tag.urgency-today {
  background: #FFF3E0;
  color: var(--orange);
}
.due-urgency-tag.urgency-upcoming {
  background: #E8FFF4;
  color: var(--mint);
}

.due-card-footer {
  margin-top: 12px;
  padding-left: 40px;
}
.mastery-bar-container {
  display: flex;
  align-items: center;
  gap: 10px;
}
.mastery-bar {
  flex: 1;
  height: 6px;
  background: #F0E8F8;
  border-radius: 3px;
  overflow: hidden;
}
.mastery-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.mastery-bar-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--text2);
  min-width: 32px;
  text-align: right;
}

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 12px;
  padding-left: 12px;
}
.timeline-day {
  display: flex;
  gap: 16px;
  min-height: 56px;
  position: relative;
}
.timeline-day:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 9px;
  top: 24px;
  bottom: 0;
  width: 2px;
  background: #E8E0F0;
}
.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20px;
  flex-shrink: 0;
  padding-top: 4px;
}
.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #E8E0F0;
  border: 2px solid #F0E8F8;
  flex-shrink: 0;
  z-index: 1;
  transition: all 0.3s;
}
.timeline-dot.dot-active {
  background: var(--purple);
  border-color: var(--purple);
}
.timeline-dot.dot-today {
  background: var(--coral);
  border-color: var(--coral);
  box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.2);
}
.timeline-today-badge {
  font-size: 9px;
  font-weight: 700;
  color: var(--coral);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 4px;
}
.timeline-content {
  flex: 1;
  padding-bottom: 16px;
  min-width: 0;
}
.timeline-date {
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 6px;
}
.timeline-empty-text {
  font-size: 13px;
  color: var(--text3);
  font-style: italic;
}
.timeline-points {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}
.timeline-point-tag {
  font-size: 12px;
  font-weight: 500;
  background: #F8F0FF;
  color: var(--text2);
  padding: 4px 10px;
  border-radius: 8px;
  white-space: nowrap;
}
.timeline-count-badge {
  font-size: 11px;
  font-weight: 700;
  background: var(--purple);
  color: #fff;
  padding: 3px 8px;
  border-radius: 10px;
}

/* Chapter Review Schedule */
.chapter-review-list {
  display: flex; flex-direction: column; gap: 14px; margin-top: 12px;
}
.chapter-review-card {
  padding: 20px; cursor: default;
  border: 2px solid transparent; transition: all 0.3s;
}
.chapter-review-card.chapter-due {
  border-color: #FDE68A; background: linear-gradient(135deg, #FFFBEB, #FFF8F0);
}
.chapter-review-header {
  display: flex; align-items: center; gap: 12px; margin-bottom: 14px;
}
.chapter-review-icon { font-size: 28px; flex-shrink: 0; }
.chapter-review-info { flex: 1; min-width: 0; }
.chapter-review-title { font-size: 14px; font-weight: 600; color: var(--text1); }
.semester-badge-review {
  font-size: 10px; font-weight: 500;
  color: white; background: var(--coral);
  padding: 1px 6px; border-radius: 6px;
  margin-left: 6px; vertical-align: middle;
}
.chapter-review-meta { font-size: 12px; color: var(--text3); margin-top: 2px; }
.chapter-review-stage { flex-shrink: 0; }
.stage-badge {
  font-size: 11px; font-weight: 700; padding: 4px 10px;
  border-radius: 12px; background: #ECFDF5; color: #059669;
}
.stage-badge.stage-due {
  background: #FEF3C7; color: #92400E;
  animation: reviewPulse 1.5s infinite;
}
.chapter-review-timeline {
  display: flex; gap: 4px; margin-bottom: 12px; flex-wrap: wrap;
}
.timeline-dot-item {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  padding: 6px 8px; border-radius: 8px; transition: all 0.2s;
}
.dot-label { font-size: 10px; font-weight: 600; color: var(--text3); }
.timeline-dot-item.dot-completed .dot-label { color: #059669; }
.timeline-dot-item.dot-current .dot-label { color: #F59E0B; font-weight: 700; }
.timeline-dot-item.dot-future .dot-label { color: #D1D5DB; }
.timeline-dot-item.dot-completed { background: #ECFDF5; }
.timeline-dot-item.dot-current { background: #FEF3C7; }
.chapter-review-footer { padding-top: 8px; border-top: 1px solid #F0E8F8; }

/* Chapter Progress */
.chapter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 12px;
}
.chapter-card {
  padding: 20px;
  cursor: default;
}
.chapter-card:hover { transform: translateY(-4px); }
.chapter-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.chapter-icon {
  font-size: 28px;
  flex-shrink: 0;
}
.chapter-title-group {
  flex: 1;
  min-width: 0;
}
.chapter-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.chapter-meta {
  font-size: 12px;
  color: var(--text3);
  margin-top: 2px;
}
.chapter-mastery-badge {
  font-size: 13px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 10px;
  flex-shrink: 0;
}
.chapter-mastery-badge.masteryHigh {
  background: #E8FFF4;
  color: #059669;
}
.chapter-mastery-badge.masteryMid {
  background: #FFF3E0;
  color: #D97706;
}
.chapter-mastery-badge.masteryLow {
  background: #FFE8E8;
  color: #DC2626;
}
.chapter-progress-bar {
  height: 8px;
  background: #F0E8F8;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}
.chapter-progress-fill {
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(90deg, var(--purple), var(--blue));
  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
}
.chapter-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chapter-count {
  font-size: 12px;
  color: var(--text3);
}

/* ===== Calendar Heatmap ===== */
.calendar-heatmap {
  padding: 24px;
  cursor: default;
}
.calendar-heatmap:hover { transform: none; }
.heatmap-header {
  margin-bottom: 12px;
}
.heatmap-months {
  display: flex;
  gap: 0;
  padding-left: 32px;
}
.heatmap-month-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text3);
}
.heatmap-body {
  display: flex;
  gap: 8px;
}
.heatmap-weekdays {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-top: 0;
}
.heatmap-weekdays span {
  font-size: 10px;
  color: var(--text3);
  height: 14px;
  line-height: 14px;
  text-align: center;
}
.heatmap-grid {
  display: flex;
  gap: 3px;
  flex-wrap: wrap;
}
.heatmap-cell {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  background: #F5F0FA;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}
.heatmap-cell:hover {
  transform: scale(1.3);
  z-index: 2;
}
.heatmap-cell.level-0 { background: #F5F0FA; }
.heatmap-cell.level-1 { background: #D8C8F0; }
.heatmap-cell.level-2 { background: #B894E8; }
.heatmap-cell.level-3 { background: #9C6ADE; }
.heatmap-cell.level-4 { background: #7C3AED; }
.heatmap-cell.is-today {
  border: 2px solid var(--coral);
  box-shadow: 0 0 0 1px var(--coral);
}
.heatmap-legend {
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;
  margin-top: 12px;
}
.legend-label {
  font-size: 10px;
  color: var(--text3);
}
.legend-cell {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}
.legend-cell.level-0 { background: #F5F0FA; }
.legend-cell.level-1 { background: #D8C8F0; }
.legend-cell.level-2 { background: #B894E8; }
.legend-cell.level-3 { background: #9C6ADE; }
.legend-cell.level-4 { background: #7C3AED; }

/* ===== Subject Distribution ===== */
.subject-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin-top: 12px;
}
.subject-card {
  padding: 20px;
  cursor: default;
}
.subject-card:hover { transform: translateY(-3px); }
.subject-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
}
.subject-icon { font-size: 24px; }
.subject-name { font-size: 15px; font-weight: 700; color: var(--text); }
.subject-stats {
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
}
.subject-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.subject-stat-value {
  font-size: 18px;
  font-weight: 900;
  color: var(--text);
}
.subject-stat-value.stat-good { color: #059669; }
.subject-stat-value.stat-ok { color: #D97706; }
.subject-stat-value.stat-poor { color: #DC2626; }
.subject-stat-label {
  font-size: 11px;
  color: var(--text3);
  font-weight: 500;
}
.subject-bar {
  height: 6px;
  background: #F0E8F8;
  border-radius: 3px;
  overflow: hidden;
}
.subject-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Data Management */
.data-actions {
  padding: 24px;
  margin-top: 12px;
}
.data-actions:hover { transform: none; }
.data-button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.data-button-group .btn {
  font-size: 13px;
  padding: 10px 20px;
}
.reset-btn {
  color: var(--coral);
  border-color: rgba(255, 107, 107, 0.3);
}
.reset-btn:hover {
  background: rgba(255, 107, 107, 0.1);
}
.export-success {
  margin-top: 12px;
  font-size: 13px;
  font-weight: 600;
  color: #059669;
  animation: fadeIn 0.3s ease;
}

/* Dialog */
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.dialog {
  width: 90%;
  max-width: 380px;
  text-align: center;
  padding: 32px 28px;
  animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.dialog-icon {
  font-size: 40px;
  margin-bottom: 12px;
}
.dialog-title {
  font-size: 20px;
  font-weight: 900;
  color: var(--text);
  margin-bottom: 8px;
}
.dialog-text {
  font-size: 14px;
  color: var(--text3);
  margin-bottom: 24px;
  line-height: 1.6;
}
.dialog-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

/* Responsive */
@media (max-width: 640px) {
  .progress-page { padding-top: 24px; }
  .progress-header .btn { position: static; margin-bottom: 16px; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .stat-card { padding: 16px; flex-direction: column; text-align: center; gap: 8px; }
  .stat-value { font-size: 22px; }
  .chapter-grid { grid-template-columns: 1fr; }
  .chapter-review-timeline { gap: 2px; }
  .timeline-dot-item { padding: 4px 6px; }
  .timeline { padding-left: 8px; }
  .today-grid { grid-template-columns: repeat(2, 1fr); }
  .subject-grid { grid-template-columns: 1fr; }
  .heatmap-cell { width: 12px; height: 12px; }
  .data-button-group { flex-direction: column; }
}

@keyframes reviewPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
</style>