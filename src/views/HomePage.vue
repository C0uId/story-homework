<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { knowledgeMap } from '../data/knowledgeMap'
import { getAllChapterProgress, getChaptersForReview } from '../utils/learningProgress'
import { hasCharacter, getCharacter, getCultivationInfo, getCharacterTalents, getPersonality } from '../utils/characterSystem'

const router = useRouter()

// Character info
const character = computed(() => getCharacter())
const cultivation = computed(() => getCultivationInfo())
const characterTalents = computed(() => getCharacterTalents())
const personality = computed(() => getPersonality())
const hasChar = computed(() => hasCharacter())

const step = ref('grade')
const selectedGrade = ref(null)
const selectedSubject = ref(null)

const currentGrade = computed(() => knowledgeMap.grades.find(g => g.id === selectedGrade.value))

function selectGrade(grade) { selectedGrade.value = grade.id; step.value = 'subject' }
function selectSubject(id) {
  selectedSubject.value = id
  const subjectData = knowledgeMap[id]
  if (!subjectData) return
  const gradeData = subjectData[selectedGrade.value]
  if (!gradeData || !gradeData.chapters?.length) return
  const firstChapter = gradeData.chapters[0]
  router.push(`/play/${selectedGrade.value}/${id}/martial/persistent?chapter=${firstChapter.id}`)
}
function goBack() {
  step.value = 'grade'
  selectedGrade.value = null
}

// Continue Adventure — read last progress from localStorage
const lastProgress = computed(() => {
  const all = getAllChapterProgress()
  if (!all || all.length === 0) return null
  const sorted = [...all].sort((a, b) => (b.lastCompleted || b.firstCompleted || 0) - (a.lastCompleted || a.firstCompleted || 0))
  return sorted[0] || null
})

function continueAdventure() {
  if (!lastProgress.value) return
  const { grade: g, subject: s, theme: t, chapterId: ch } = lastProgress.value
  router.push(`/play/${g}/${s}/${t || 'martial'}/persistent?chapter=${ch}`)
}

// Daily Recommendation
const dailyRecommendation = computed(() => {
  if (!selectedGrade.value) return null
  const dueChapters = getChaptersForReview()
  if (dueChapters.length > 0) {
    const due = dueChapters[0]
    return { label: '待复习', ...due }
  }
  for (const subject of knowledgeMap.subjects) {
    const subjectData = knowledgeMap[subject.id]
    if (!subjectData) continue
    const gradeData = subjectData[selectedGrade.value]
    if (!gradeData?.chapters?.length) continue
    for (const ch of gradeData.chapters) {
      const progress = getAllChapterProgress().find(p => p.chapterId === ch.id)
      if (!progress) {
        return { label: '推荐学习', grade: selectedGrade.value, subject: subject.id, theme: 'martial', chapterId: ch.id, chapterName: ch.title, subjectName: subject.name, subjectIcon: subject.icon }
      }
    }
  }
  return null
})

function goToRecommendation() {
  const rec = dailyRecommendation.value
  if (!rec) return
  router.push(`/play/${rec.grade}/${rec.subject}/${rec.theme}/persistent?chapter=${rec.chapterId}`)
}
</script>

<template>
  <div class="home">
    <!-- Floating Decorations -->
    <span class="deco deco-1">📖</span>
    <span class="deco deco-2">✨</span>
    <span class="deco deco-3">🎓</span>
    <span class="deco deco-4">🌟</span>
    <span class="deco deco-5">💡</span>
    <span class="deco deco-6">📚</span>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-badge">🎬 TRAE AI 创造力大赛参赛作品</div>
      <h1 class="hero-title">
        让学习像追剧一样<br>
        <span class="hero-highlight">上瘾</span>
      </h1>
      <p class="hero-sub">每个知识点都是一个故事，每次答题都推动剧情。<br>告别枯燥习题，开启你的知识冒险之旅。</p>
      <div class="hero-cards">
        <div class="hero-stat"><span class="stat-emoji">⚔️</span><span class="stat-num">5</span><span class="stat-label">冒险风格</span></div>
        <div class="hero-stat"><span class="stat-emoji">📚</span><span class="stat-num">6</span><span class="stat-label">年级覆盖</span></div>
        <div class="hero-stat"><span class="stat-emoji">🎬</span><span class="stat-num">600+</span><span class="stat-label">互动短剧</span></div>
      </div>
      <div class="scroll-arrow">↓</div>
    </section>

    <!-- Character Status Card (if character exists) -->
    <div class="wrap" v-if="hasChar">
      <div class="char-status-card">
        <div class="char-status-left">
          <span class="char-status-icon">{{ cultivation?.current?.icon || '🌱' }}</span>
          <div class="char-status-info">
            <div class="char-status-name">{{ character?.name }}</div>
            <div class="char-status-level">{{ cultivation?.current?.name || '凡人' }}</div>
          </div>
        </div>
        <div class="char-status-right">
          <div class="char-exp-bar">
            <div class="char-exp-fill" :style="{ width: (cultivation?.progress || 0) + '%' }"></div>
          </div>
          <div class="char-exp-text">{{ cultivation?.exp || 0 }} / {{ cultivation?.expRequired || 0 }} EXP</div>
        </div>
        <div class="char-status-talents" v-if="characterTalents.length > 0">
          <span v-for="t in characterTalents" :key="t.id" class="char-talent-tag">{{ t.icon }} {{ t.name }}</span>
        </div>
      </div>
      <!-- No character prompt -->
      <div class="no-char-prompt" v-if="!personality?.isComplete">
        <span>🔍</span>
        <span>学习过程中会通过选择发现你的性格特点</span>
      </div>
    </div>
    <!-- Create Character Prompt -->
    <div class="wrap" v-else>
      <div class="create-char-prompt" @click="$router.push('/create')">
        <span class="create-char-icon">🗡️</span>
        <div class="create-char-text">
          <h3>创建你的冒险角色</h3>
          <p>起个名字，开启属于你的知识冒险之旅</p>
        </div>
        <span class="create-char-arrow">→</span>
      </div>
    </div>

    <!-- Continue Adventure & Daily Recommendation -->
    <div class="wrap" v-if="hasChar">
      <div class="quick-actions">
        <div v-if="lastProgress" class="quick-card quick-continue" @click="continueAdventure">
          <div class="quick-card-icon">🚀</div>
          <div class="quick-card-info">
            <div class="quick-card-title">继续冒险</div>
            <div class="quick-card-desc">{{ lastProgress.title || '上次的冒险' }}</div>
          </div>
          <span class="quick-card-arrow">→</span>
        </div>
        <div v-if="dailyRecommendation" class="quick-card quick-recommend" @click="goToRecommendation">
          <div class="quick-card-badge">{{ dailyRecommendation.label }}</div>
          <div class="quick-card-icon">{{ dailyRecommendation.subjectIcon || '📖' }}</div>
          <div class="quick-card-info">
            <div class="quick-card-title">{{ dailyRecommendation.chapterName || dailyRecommendation.title || '每日推荐' }}</div>
            <div class="quick-card-desc">{{ dailyRecommendation.subjectName || dailyRecommendation.subject }}</div>
          </div>
          <span class="quick-card-arrow">→</span>
        </div>
      </div>
    </div>

    <!-- Step Navigator -->
    <div class="wrap">
      <div class="step-bar">
        <div class="step-item" :class="{ active: step === 'grade', done: step !== 'grade' }">
          <span class="step-dot">1</span><span>选年级</span>
        </div>
        <div class="step-line" :class="{ done: step !== 'grade' }"></div>
        <div class="step-item" :class="{ active: step === 'subject' }">
          <span class="step-dot">2</span><span>选学科</span>
        </div>
      </div>
    </div>

    <!-- Grade Selection -->
    <section v-if="step === 'grade'" class="section">
      <div class="wrap">
        <div class="section-badge badge-coral">📚 第一步</div>
        <h2>选择你的年级</h2>
        <div class="grade-grid">
          <div v-for="grade in knowledgeMap.grades" :key="grade.id" class="grade-card" @click="selectGrade(grade)">
            <span class="grade-num">{{ grade.id }}</span>
            <span class="grade-name">{{ grade.name }}</span>
            <span class="grade-age">{{ grade.age }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Subject Selection -->
    <section v-if="step === 'subject'" class="section">
      <div class="wrap">
        <button class="btn btn-outline" @click="goBack">← 返回</button>
        <div style="height: 16px"></div>
        <div class="section-badge badge-blue">📖 第二步</div>
        <h2>{{ currentGrade?.name }} - 选择学科</h2>
        <div class="subject-grid">
          <div v-for="subject in knowledgeMap.subjects" :key="subject.id" class="subject-card" :style="{ borderColor: subject.color + '40' }" @click="selectSubject(subject.id)">
            <span class="subject-icon">{{ subject.icon }}</span>
            <span class="subject-name">{{ subject.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <span class="footer-character">📚</span>
      <h3>知识剧场</h3>
      <p>TRAE AI 创造力大赛作品 · 让每个孩子都能爱上学习</p>
    </footer>
  </div>
</template>

<style scoped>
.home { min-height: 100vh; padding-bottom: 60px; position: relative; }

/* Hero */
.hero {
  min-height: 100dvh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; padding: 80px 24px 60px; position: relative; overflow: hidden;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 20px; border-radius: 50px;
  background: linear-gradient(135deg, #FFF3E0, #FFE0B2);
  border: 2px solid var(--orange); color: var(--orange);
  font-size: 14px; font-weight: 700; margin-bottom: 32px;
  animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
.hero-title {
  font-size: clamp(36px, 7vw, 64px); font-weight: 900; line-height: 1.15; margin-bottom: 20px;
  animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
}
.hero-highlight {
  background: linear-gradient(135deg, var(--coral), var(--pink), var(--purple));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  font-size: clamp(42px, 9vw, 80px);
}
.hero-sub {
  font-size: 17px; color: var(--text2); max-width: 480px; margin: 0 auto 48px;
  animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
}
.hero-cards {
  display: flex; gap: 20px; flex-wrap: wrap; justify-content: center;
  animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
}
.hero-stat {
  background: var(--bg-card); border-radius: var(--radius); padding: 20px 28px;
  box-shadow: var(--shadow); text-align: center; min-width: 120px;
  border: 2px solid transparent; transition: all 0.3s;
}
.hero-stat:hover { transform: translateY(-4px) rotate(-1deg); box-shadow: var(--shadow-hover); }
.hero-stat:nth-child(1) { border-color: var(--coral); }
.hero-stat:nth-child(2) { border-color: var(--blue); }
.hero-stat:nth-child(3) { border-color: var(--mint); }
.stat-emoji { font-size: 28px; margin-bottom: 6px; display: block; }
.stat-num { font-size: 28px; font-weight: 900; color: var(--text); display: block; }
.stat-label { font-size: 12px; color: var(--text3); font-weight: 500; }
.scroll-arrow { margin-top: 48px; font-size: 24px; animation: bounce 2s infinite; color: var(--text3); }

/* Step Bar */
.step-bar {
  display: flex; align-items: center; justify-content: center; padding: 24px 0 48px;
}
.step-item {
  display: flex; align-items: center; gap: 8px; padding: 8px 16px;
  border-radius: 20px; background: var(--bg-card); box-shadow: var(--shadow);
  font-size: 13px; font-weight: 500; transition: all 0.3s;
}
.step-item.active { background: linear-gradient(135deg, var(--coral), var(--pink)); color: #fff; }
.step-item.done { opacity: 0.5; }
.step-dot {
  width: 24px; height: 24px; border-radius: 50%;
  background: rgba(0,0,0,0.06); display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700;
}
.step-item.active .step-dot { background: rgba(255,255,255,0.3); }
.step-line { width: 24px; height: 3px; background: #E8E0F0; border-radius: 2px; margin: 0 4px; transition: background 0.3s; }
.step-line.done { background: var(--coral); }

/* Sections */
.section { padding: 48px 0; text-align: center; }
.section h2 { margin-bottom: 28px; }
.section .btn-outline { text-align: left; }

/* Grade Grid */
.grade-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 500px; margin: 0 auto; }
.grade-card {
  background: var(--bg-card); border-radius: var(--radius); padding: 24px 16px;
  text-align: center; cursor: pointer; box-shadow: var(--shadow);
  border: 2px solid transparent; transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex; flex-direction: column; align-items: center; gap: 4px;
}
.grade-card:hover { transform: translateY(-6px) rotate(-1deg); box-shadow: var(--shadow-hover); border-color: var(--coral); }
.grade-num { font-size: 36px; font-weight: 900; background: linear-gradient(135deg, var(--coral), var(--pink)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.grade-name { font-size: 15px; font-weight: 600; color: var(--text); }
.grade-age { font-size: 12px; color: var(--text3); }

/* Subject Grid */
.subject-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 16px; max-width: 560px; margin: 0 auto; }
.subject-card {
  background: var(--bg-card); border-radius: var(--radius); padding: 28px 16px;
  text-align: center; cursor: pointer; box-shadow: var(--shadow);
  border: 2px solid transparent; transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex; flex-direction: column; align-items: center; gap: 12px;
}
.subject-card:hover { transform: translateY(-6px) rotate(-1deg); box-shadow: var(--shadow-hover); }
.subject-icon { font-size: 42px; }
.subject-name { font-size: 16px; font-weight: 600; }

/* Quick Actions (Continue Adventure & Daily Recommendation) */
.quick-actions {
  display: flex; gap: 16px; max-width: 600px; margin: 0 auto 24px;
}
.quick-card {
  flex: 1; display: flex; align-items: center; gap: 14px;
  padding: 20px 24px; border-radius: 20px;
  cursor: pointer; transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.quick-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
.quick-continue {
  background: linear-gradient(135deg, #1E3A5F, #2D1B4E); color: #fff;
}
.quick-recommend {
  background: linear-gradient(135deg, #FFF0F0, #F8F0FF);
  border: 2px dashed var(--coral); color: var(--text);
}
.quick-card-badge {
  position: absolute; top: -8px; right: -8px;
  padding: 2px 8px; border-radius: 8px; font-size: 11px; font-weight: 700;
  background: var(--coral); color: #fff;
}
.quick-recommend { position: relative; }
.quick-card-icon { font-size: 32px; flex-shrink: 0; }
.quick-card-info { flex: 1; min-width: 0; }
.quick-card-title { font-size: 15px; font-weight: 700; margin-bottom: 2px; }
.quick-card-desc {
  font-size: 12px; opacity: 0.7; overflow: hidden;
  text-overflow: ellipsis; white-space: nowrap;
}
.quick-card-arrow { font-size: 18px; opacity: 0.5; flex-shrink: 0; }
.quick-continue .quick-card-arrow { color: rgba(255,255,255,0.6); }

/* Character Status Card */
.char-status-card {
  display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
  padding: 16px 24px; margin: -30px auto 24px;
  background: linear-gradient(135deg, #1E3A5F 0%, #2D1B4E 100%);
  border-radius: 20px; color: #fff; max-width: 600px;
  box-shadow: 0 8px 32px rgba(30,58,95,0.3);
}
.char-status-left { display: flex; align-items: center; gap: 10px; }
.char-status-icon { font-size: 32px; }
.char-status-name { font-size: 16px; font-weight: 700; }
.char-status-level { font-size: 12px; color: #FFD700; font-weight: 600; }
.char-status-right { flex: 1; min-width: 120px; }
.char-exp-bar {
  height: 6px; background: rgba(255,255,255,0.15);
  border-radius: 3px; overflow: hidden; margin-bottom: 4px;
}
.char-exp-fill {
  height: 100%; background: linear-gradient(90deg, #FFD700, #FFA500);
  border-radius: 3px; transition: width 0.5s;
}
.char-exp-text { font-size: 11px; color: rgba(255,255,255,0.6); }
.char-status-talents { display: flex; gap: 6px; width: 100%; }
.char-talent-tag {
  font-size: 11px; font-weight: 600; padding: 3px 10px;
  border-radius: 10px; background: rgba(255,215,0,0.15);
  color: #FFD700; border: 1px solid rgba(255,215,0,0.3);
}
.no-char-prompt {
  display: flex; align-items: center; gap: 8px; justify-content: center;
  padding: 10px; font-size: 13px; color: var(--text3);
}
.create-char-prompt {
  display: flex; align-items: center; gap: 16px;
  padding: 20px 24px; margin: -20px auto 24px;
  max-width: 500px; background: linear-gradient(135deg, #FFF0F0, #F8F0FF);
  border: 2px dashed var(--coral); border-radius: 20px;
  cursor: pointer; transition: all 0.3s;
}
.create-char-prompt:hover {
  transform: translateY(-3px); box-shadow: 0 8px 24px rgba(255,107,107,0.2);
}
.create-char-icon { font-size: 36px; }
.create-char-text { flex: 1; }
.create-char-text h3 { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 2px; }
.create-char-text p { font-size: 13px; color: var(--text3); }
.create-char-arrow { font-size: 20px; color: var(--coral); font-weight: 700; }

/* Footer */
.footer { text-align: center; padding: 60px 24px 20px; }
.footer-character { font-size: 64px; margin-bottom: 16px; animation: wave 2s ease-in-out infinite; display: inline-block; }
.footer h3 { font-size: 20px; margin-bottom: 8px; color: var(--text); }
.footer p { color: var(--text3); font-size: 14px; }

@media (max-width: 640px) {
  .hero-title { font-size: 32px; }
  .hero-highlight { font-size: 42px; }
  .grade-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-cards { gap: 12px; }
  .hero-stat { padding: 16px 20px; min-width: 100px; }
  .stat-num { font-size: 22px; }
  .step-bar { flex-wrap: wrap; gap: 4px; }
  .quick-actions { flex-direction: column; }
}
</style>
