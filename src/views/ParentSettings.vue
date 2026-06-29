<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { THEMES } from '../data/themes'

const router = useRouter()

// 从 localStorage 读取保存的设置
const savedSettings = ref({})
onMounted(() => {
  const saved = localStorage.getItem('knowledgeTheater_parentSettings')
  if (saved) savedSettings.value = JSON.parse(saved)
})

// 家长设置数据
const childName = ref(savedSettings.value.childName || '')
const selectedThemes = ref(savedSettings.value.selectedThemes || ['martial'])
const selectedNarrative = ref(savedSettings.value.selectedNarrative || 'firstPerson')
const difficultyLevel = ref(savedSettings.value.difficultyLevel || 'normal')
const dailyGoal = ref(savedSettings.value.dailyGoal || 2)
const enableSound = ref(savedSettings.value.enableSound ?? true)
const showHints = ref(savedSettings.value.showHints ?? true)

const themes = THEMES

const narrativeStyles = [
  { id: 'firstPerson', name: '第一人称', desc: '以"我"的视角冒险，代入感最强', icon: '🙋' },
  { id: 'thirdPerson', name: '第三人称', desc: '以旁观者视角讲述，故事感更强', icon: '📖' },
  { id: 'dialogue', name: '对话式', desc: '角色对话推动剧情，轻松有趣', icon: '💬' }
]

const difficultyLevels = [
  { id: 'easy', name: '轻松模式', desc: '题目简单，重在体验故事', icon: '😊' },
  { id: 'normal', name: '标准模式', desc: '难度适中，故事与练习平衡', icon: '💪' },
  { id: 'hard', name: '挑战模式', desc: '题目较难，适合学有余力的孩子', icon: '🔥' }
]

function toggleTheme(themeId) {
  const idx = selectedThemes.value.indexOf(themeId)
  if (idx > -1) {
    if (selectedThemes.value.length > 1) {
      selectedThemes.value.splice(idx, 1)
    }
  } else {
    selectedThemes.value.push(themeId)
  }
}

function saveSettings() {
  const settings = {
    childName: childName.value,
    selectedThemes: selectedThemes.value,
    selectedNarrative: selectedNarrative.value,
    difficultyLevel: difficultyLevel.value,
    dailyGoal: dailyGoal.value,
    enableSound: enableSound.value,
    showHints: showHints.value
  }
  localStorage.setItem('knowledgeTheater_parentSettings', JSON.stringify(settings))
  savedSettings.value = settings
}

function goHome() {
  saveSettings()
  router.push('/')
}
</script>

<template>
  <div class="parent-settings">
    <div class="wrap">
      <!-- Header -->
      <div class="settings-header">
        <button class="btn btn-outline" @click="goHome">← 返回首页</button>
        <div style="height: 16px"></div>
        <div class="section-badge badge-purple">👨‍👩‍👧 家长中心</div>
        <h1>个性化学习设置</h1>
        <p class="settings-subtitle">根据孩子的喜好和水平，定制专属的学习体验</p>
      </div>

      <!-- 孩子昵称 -->
      <div class="setting-group card">
        <h3 class="group-title">
          <span class="group-icon">👶</span>
          孩子昵称
        </h3>
        <p class="group-desc">用于个性化称呼，让孩子更有代入感</p>
        <input
          v-model="childName"
          type="text"
          class="name-input"
          placeholder="输入孩子的昵称..."
          maxlength="10"
        />
      </div>

      <!-- 题材风格选择 -->
      <div class="setting-group card">
        <h3 class="group-title">
          <span class="group-icon">🎭</span>
          喜欢的冒险风格
        </h3>
        <p class="group-desc">可多选，系统会优先推荐孩子喜欢的风格</p>
        <div class="theme-select-grid">
          <div
            v-for="t in themes"
            :key="t.id"
            class="theme-select-card"
            :class="{ selected: selectedThemes.includes(t.id) }"
            :style="{ borderColor: selectedThemes.includes(t.id) ? t.color : 'transparent' }"
            @click="toggleTheme(t.id)"
          >
            <span class="ts-icon">{{ t.icon }}</span>
            <span class="ts-name">{{ t.name }}</span>
            <span class="ts-check" v-if="selectedThemes.includes(t.id)">✓</span>
          </div>
        </div>
      </div>

      <!-- 叙事方式 -->
      <div class="setting-group card">
        <h3 class="group-title">
          <span class="group-icon">📖</span>
          叙事方式
        </h3>
        <p class="group-desc">不同叙述方式带来不同的阅读体验</p>
        <div class="narrative-options">
          <div
            v-for="n in narrativeStyles"
            :key="n.id"
            class="narrative-option"
            :class="{ selected: selectedNarrative === n.id }"
            @click="selectedNarrative = n.id"
          >
            <span class="no-icon">{{ n.icon }}</span>
            <div class="no-info">
              <h4>{{ n.name }}</h4>
              <p>{{ n.desc }}</p>
            </div>
            <span class="no-radio" :class="{ checked: selectedNarrative === n.id }"></span>
          </div>
        </div>
      </div>

      <!-- 难度等级 -->
      <div class="setting-group card">
        <h3 class="group-title">
          <span class="group-icon">📊</span>
          难度等级
        </h3>
        <p class="group-desc">根据孩子的学习水平调整题目难度</p>
        <div class="difficulty-options">
          <div
            v-for="d in difficultyLevels"
            :key="d.id"
            class="difficulty-option"
            :class="{ selected: difficultyLevel === d.id }"
            @click="difficultyLevel = d.id"
          >
            <span class="do-icon">{{ d.icon }}</span>
            <div class="do-info">
              <h4>{{ d.name }}</h4>
              <p>{{ d.desc }}</p>
            </div>
            <span class="no-radio" :class="{ checked: difficultyLevel === d.id }"></span>
          </div>
        </div>
      </div>

      <!-- 每日目标 -->
      <div class="setting-group card">
        <h3 class="group-title">
          <span class="group-icon">🎯</span>
          每日学习目标
        </h3>
        <p class="group-desc">建议每天完成的剧集数</p>
        <div class="goal-selector">
          <button class="goal-btn" :class="{ active: dailyGoal === 1 }" @click="dailyGoal = 1">1 集</button>
          <button class="goal-btn" :class="{ active: dailyGoal === 2 }" @click="dailyGoal = 2">2 集</button>
          <button class="goal-btn" :class="{ active: dailyGoal === 3 }" @click="dailyGoal = 3">3 集</button>
          <button class="goal-btn" :class="{ active: dailyGoal === 5 }" @click="dailyGoal = 5">5 集</button>
        </div>
      </div>

      <!-- 其他设置 -->
      <div class="setting-group card">
        <h3 class="group-title">
          <span class="group-icon">⚙️</span>
          其他设置
        </h3>
        <div class="toggle-list">
          <div class="toggle-item">
            <div class="toggle-info">
              <h4>音效</h4>
              <p>答题正确/错误时播放音效</p>
            </div>
            <button class="toggle-btn" :class="{ on: enableSound }" @click="enableSound = !enableSound">
              <span class="toggle-dot"></span>
            </button>
          </div>
          <div class="toggle-item">
            <div class="toggle-info">
              <h4>答题提示</h4>
              <p>答错后显示详细解析</p>
            </div>
            <button class="toggle-btn" :class="{ on: showHints }" @click="showHints = !showHints">
              <span class="toggle-dot"></span>
            </button>
          </div>
        </div>
      </div>

      <!-- 保存按钮 -->
      <div class="save-section">
        <button class="btn btn-coral save-btn" @click="goHome">
          💾 保存设置并返回
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent-settings {
  min-height: 100vh;
  padding: 24px 0 80px;
}

.settings-header {
  text-align: center;
  padding-top: 80px;
  margin-bottom: 40px;
}
.settings-header .btn-outline { text-align: left; }
.settings-subtitle {
  font-size: 16px;
  color: var(--text2);
  max-width: 400px;
  margin: 0 auto;
}

.setting-group {
  max-width: 640px;
  margin: 0 auto 20px;
  text-align: left;
}
.setting-group:hover { transform: none; }

.group-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
}
.group-icon { font-size: 22px; }
.group-desc {
  font-size: 13px;
  color: var(--text3);
  margin-bottom: 16px;
}

/* Name Input */
.name-input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #E8E0F0;
  border-radius: 16px;
  font-size: 16px;
  font-family: inherit;
  background: #FFF8F0;
  color: var(--text);
  transition: border-color 0.2s;
  outline: none;
}
.name-input:focus {
  border-color: var(--purple);
}
.name-input::placeholder {
  color: var(--text3);
}

/* Theme Select Grid */
.theme-select-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 10px;
}
.theme-select-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px 8px;
  border: 2px solid #E8E0F0;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s;
  background: #FFF8F0;
  position: relative;
}
.theme-select-card:hover {
  border-color: #C0C0C0;
  transform: translateY(-2px);
}
.theme-select-card.selected {
  background: #FFF1F1;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.ts-icon { font-size: 28px; }
.ts-name { font-size: 13px; font-weight: 600; color: var(--text); }
.ts-check {
  position: absolute;
  top: 6px;
  right: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--mint);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
}

/* Narrative Options */
.narrative-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.narrative-option {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border: 2px solid #E8E0F0;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s;
  background: #FFF8F0;
}
.narrative-option:hover {
  border-color: #C0C0C0;
}
.narrative-option.selected {
  border-color: var(--purple);
  background: #F3E8FF;
}
.no-icon { font-size: 24px; }
.no-info { flex: 1; }
.no-info h4 { font-size: 15px; font-weight: 600; color: var(--text); margin-bottom: 2px; }
.no-info p { font-size: 12px; color: var(--text3); }

/* Radio Button */
.no-radio {
  width: 20px;
  height: 20px;
  border: 2px solid #D0D0D0;
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
  transition: all 0.2s;
}
.no-radio.checked {
  border-color: var(--purple);
}
.no-radio.checked::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--purple);
}

/* Difficulty Options */
.difficulty-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.difficulty-option {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border: 2px solid #E8E0F0;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s;
  background: #FFF8F0;
}
.difficulty-option:hover {
  border-color: #C0C0C0;
}
.difficulty-option.selected {
  border-color: var(--coral);
  background: #FFE8E8;
}
.do-icon { font-size: 24px; }
.do-info { flex: 1; }
.do-info h4 { font-size: 15px; font-weight: 600; color: var(--text); margin-bottom: 2px; }
.do-info p { font-size: 12px; color: var(--text3); }

/* Goal Selector */
.goal-selector {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.goal-btn {
  padding: 10px 24px;
  border: 2px solid #E8E0F0;
  border-radius: 12px;
  background: #FFF8F0;
  font-size: 14px;
  font-weight: 600;
  color: var(--text2);
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.goal-btn:hover {
  border-color: var(--coral);
}
.goal-btn.active {
  background: linear-gradient(135deg, var(--coral), var(--pink));
  color: #fff;
  border-color: transparent;
}

/* Toggle */
.toggle-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.toggle-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.toggle-info h4 { font-size: 15px; font-weight: 600; color: var(--text); margin-bottom: 2px; }
.toggle-info p { font-size: 12px; color: var(--text3); }

.toggle-btn {
  width: 48px;
  height: 28px;
  border-radius: 14px;
  background: #E0D8E8;
  border: none;
  cursor: pointer;
  position: relative;
  transition: background 0.3s;
  flex-shrink: 0;
}
.toggle-btn.on {
  background: var(--mint);
}
.toggle-dot {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  transition: transform 0.3s;
}
.toggle-btn.on .toggle-dot {
  transform: translateX(20px);
}

/* Save */
.save-section {
  text-align: center;
  padding: 32px 0;
  max-width: 640px;
  margin: 0 auto;
}
.save-btn {
  width: 100%;
  max-width: 300px;
  justify-content: center;
  font-size: 16px;
  padding: 16px 32px;
}

@media (max-width: 640px) {
  .theme-select-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
