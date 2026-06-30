<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { knowledgeMap, getChapterSemester } from '../data/knowledgeMap'

const route = useRoute()
const router = useRouter()
const grade = route.params.grade
const subject = route.params.subject

const completedPoints = ref(new Set())
const storyData = ref(null)

onMounted(async () => {
  try {
    const allStories = (await import('../data/allStories.js')).default
    const gradeData = allStories[grade]
    if (gradeData?.martial) {
      const firstKey = Object.keys(gradeData.martial)[0]
      storyData.value = gradeData.martial[firstKey]
    }
  } catch (e) { console.error(e) }
})

const gradeInfo = computed(() => knowledgeMap.grades.find(g => g.id === grade))
const subjectInfo = computed(() => knowledgeMap.subjects.find(s => s.id === subject))
const totalPoints = computed(() => {
  const subjectData = knowledgeMap[subject]
  if (!subjectData?.[grade]) return 0
  return subjectData[grade].chapters.reduce((sum, ch) => sum + ch.points.length, 0)
})
const completedCount = computed(() => completedPoints.value.size)
const progress = computed(() => totalPoints.value > 0 ? (completedCount.value / totalPoints.value) * 100 : 0)
</script>

<template>
  <div class="map-page">
    <!-- Floating Decorations -->
    <span class="deco deco-1">🗺️</span>
    <span class="deco deco-2">✨</span>
    <span class="deco deco-3">📖</span>

    <!-- Header -->
    <div class="map-header">
      <div class="wrap map-header-inner">
        <button class="btn btn-outline" @click="router.push('/')">← 返回</button>
        <h1 class="map-title">🗺️ 知识地图</h1>
      </div>
    </div>

    <div class="wrap">
      <!-- Progress Overview -->
      <div class="progress-overview card">
        <div class="progress-visual">
          <svg class="progress-ring" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#E8E0F0" stroke-width="8"/>
            <circle cx="50" cy="50" r="42" fill="none" stroke="url(#progressGradient)" stroke-width="8"
              :stroke-dasharray="264" :stroke-dashoffset="264 - (264 * progress / 100)"
              stroke-linecap="round" transform="rotate(-90 50 50)"/>
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:var(--coral)"/>
                <stop offset="100%" style="stop-color:var(--pink)"/>
              </linearGradient>
            </defs>
          </svg>
          <div class="progress-center">
            <span class="progress-pct">{{ Math.round(progress) }}%</span>
          </div>
        </div>
        <div class="progress-detail">
          <h3>{{ gradeInfo?.name }} · {{ subjectInfo?.name }}</h3>
          <p>已学习 {{ completedCount }} / {{ totalPoints }} 个知识点</p>
          <div class="progress-bar-wrap">
            <div class="progress-bar"><div class="progress-fill" :style="{ width: progress + '%' }"></div></div>
          </div>
        </div>
      </div>

      <!-- Chapter Map -->
      <div class="chapter-map" v-if="knowledgeMap[subject]?.[grade]">
        <div v-for="(chapter, chIdx) in knowledgeMap[subject][grade].chapters" :key="chapter.id" class="chapter-node">
          <div class="node-connector" v-if="chIdx > 0">
            <div class="connector-line" :class="{ done: completedPoints.size > 0 }"></div>
          </div>
          <div class="chapter-card card" :style="{ borderColor: ['#FFE8E8','#E8F4FF','#F3E8FF','#E8FFF4','#FFF3E0','#FFE8F0'][chIdx % 6] }">
            <div class="chapter-top">
              <span class="chapter-emoji">{{ chapter.icon }}</span>
              <div>
                <h3>第{{ chIdx + 1 }}章 · {{ chapter.title }} <span class="semester-badge">{{ getChapterSemester(subject, chapter.id, grade) }}</span></h3>
                <p class="chapter-sub">{{ chapter.points.length }} 个知识点</p>
              </div>
            </div>
            <div class="point-list">
              <div v-for="point in chapter.points" :key="point.id" class="point-item"
                :class="{ completed: completedPoints.has(point.id) }"
                @click="completedPoints.add(point.id)">
                <span class="point-check">{{ completedPoints.has(point.id) ? '✅' : '⬜' }}</span>
                <span class="point-name">{{ point.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <p>知识剧场 · 知识地图</p>
    </footer>
  </div>
</template>

<style scoped>
.map-page { min-height: 100vh; padding-bottom: 60px; position: relative; }

.map-header {
  position: sticky; top: 0; z-index: 10;
  background: rgba(255,248,240,0.9); backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(45,27,78,0.06);
  padding: 12px 0;
}
.map-header-inner { display: flex; align-items: center; gap: 16px; }
.map-title { font-size: 18px; font-weight: 700; color: var(--text); }

.progress-overview {
  display: flex; align-items: center; gap: 32px; padding: 32px; margin: 32px 0;
}
.progress-visual { position: relative; flex-shrink: 0; }
.progress-ring { display: block; }
.progress-center {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
}
.progress-pct { font-size: 22px; font-weight: 900; color: var(--text); }
.progress-detail { flex: 1; }
.progress-detail h3 { font-size: 20px; font-weight: 700; margin-bottom: 4px; color: var(--text); }
.progress-detail p { font-size: 14px; color: var(--text3); margin-bottom: 12px; }
.progress-bar-wrap { width: 100%; }
.progress-bar { height: 8px; background: #E8E0F0; border-radius: 4px; overflow: hidden; }
.progress-fill { height: 100%; background: linear-gradient(90deg, var(--coral), var(--pink)); border-radius: 4px; transition: width 0.5s; }

.chapter-map { padding: 0 0 32px; }
.node-connector { display: flex; justify-content: center; padding: 8px 0; }
.connector-line { width: 3px; height: 24px; background: #E8E0F0; border-radius: 2px; }
.connector-line.done { background: linear-gradient(180deg, var(--coral), var(--pink)); }

.chapter-card { padding: 24px; margin-bottom: 0; }
.chapter-top { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
.chapter-emoji { font-size: 32px; }
.chapter-top h3 { font-size: 17px; font-weight: 700; color: var(--text); }
.chapter-sub { font-size: 12px; color: var(--text3); }
.semester-badge {
  font-size: 10px; font-weight: 500;
  color: white; background: var(--coral);
  padding: 1px 6px; border-radius: 6px;
  margin-left: 6px; vertical-align: middle;
}

.point-list { display: flex; flex-direction: column; gap: 8px; }
.point-item {
  display: flex; align-items: center; gap: 10px; padding: 10px 14px;
  border-radius: 12px; background: #FFF8F0; cursor: pointer;
  transition: all 0.2s; border: 1px solid transparent;
}
.point-item:hover { background: #FFF1E6; border-color: #E8E0F0; }
.point-item.completed { background: #E8FFF4; }
.point-check { font-size: 16px; flex-shrink: 0; }
.point-name { font-size: 14px; color: var(--text); font-weight: 500; }

.footer { text-align: center; padding: 40px 24px 20px; color: var(--text3); font-size: 13px; }

@media (max-width: 640px) {
  .progress-overview { flex-direction: column; text-align: center; gap: 20px; padding: 24px; }
}
</style>
