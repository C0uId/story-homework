<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { createCharacter, getInitialTalents } from '../utils/characterSystem'

const router = useRouter()

const characterName = ref('')
const selectedTalent = ref(null)
const showTalentDetail = ref(false)
const talents = getInitialTalents()

function selectTalent(id) {
  selectedTalent.value = selectedTalent.value === id ? null : id
}

function create() {
  if (!characterName.value.trim()) return
  const char = createCharacter(characterName.value.trim(), selectedTalent.value)
  if (char) {
    router.push('/')
  }
}

const canCreate = computed(() => characterName.value.trim().length > 0)
</script>

<template>
  <div class="creation-page">
    <!-- Floating Decorations -->
    <span class="deco deco-1">⚔️</span>
    <span class="deco deco-2">✨</span>
    <span class="deco deco-3">📖</span>
    <span class="deco deco-4">🌟</span>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-icon">🗡️</div>
      <h1 class="hero-title">创建你的冒险角色</h1>
      <p class="hero-sub">每个知识都是一次冒险，每次答题都是一场战斗。<br>从此刻起，你就是自己故事的主角。</p>
    </section>

    <!-- Character Form -->
    <div class="wrap">
      <div class="form-section">
        <!-- Step 1: Name -->
        <div class="form-step">
          <div class="step-header">
            <span class="step-num">1</span>
            <div class="step-info">
              <h2>起个名字</h2>
              <p>这将是你的冒险者名号</p>
            </div>
          </div>
          <div class="name-input-wrap">
            <input
              v-model="characterName"
              class="name-input"
              placeholder="输入你的名字..."
              maxlength="12"
              @keyup.enter="canCreate && create()"
            />
            <span class="name-count">{{ characterName.length }}/12</span>
          </div>
        </div>

        <!-- Step 2: Talent (Optional) -->
        <div class="form-step">
          <div class="step-header">
            <span class="step-num">2</span>
            <div class="step-info">
              <h2>选择天赋 <span class="optional-tag">可选</span></h2>
              <p>天赋会降低对应学科的初始难度，也可以不选</p>
            </div>
          </div>
          <div class="talent-grid">
            <div
              v-for="talent in talents"
              :key="talent.id"
              class="talent-card"
              :class="{ selected: selectedTalent === talent.id }"
              @click="selectTalent(talent.id)"
            >
              <span class="talent-icon">{{ talent.icon }}</span>
              <span class="talent-name">{{ talent.name }}</span>
              <span class="talent-desc">{{ talent.desc }}</span>
              <span v-if="selectedTalent === talent.id" class="talent-check">✓</span>
            </div>
          </div>
          <div v-if="selectedTalent" class="talent-selected-hint">
            已选择天赋，该学科题目难度将降低
          </div>
          <div v-else class="talent-selected-hint" style="color: var(--text3);">
            不选天赋也可以，挑战更高难度！
          </div>
        </div>

        <!-- Preview -->
        <div class="preview-section">
          <div class="preview-card">
            <div class="preview-avatar">🗡️</div>
            <h3 class="preview-name">{{ characterName || '冒险者' }}</h3>
            <div class="preview-level">
              <span class="level-icon">🌱</span>
              <span>凡人</span>
            </div>
            <div v-if="selectedTalent" class="preview-talent">
              <span>{{ talents.find(t => t.id === selectedTalent)?.icon }}</span>
              <span>{{ talents.find(t => t.id === selectedTalent)?.name }}</span>
            </div>
          </div>
        </div>

        <!-- Create Button -->
        <div class="create-section">
          <button
            class="btn btn-coral create-btn"
            :disabled="!canCreate"
            @click="create"
          >
            <span>开始冒险 →</span>
          </button>
          <p class="create-hint">性格和技能将在学习过程中逐渐获得</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.creation-page {
  min-height: 100vh;
  padding-bottom: 60px;
  position: relative;
  overflow: hidden;
}

/* Hero */
.hero {
  min-height: 50vh;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; padding: 60px 24px 40px; position: relative;
}
.hero-icon {
  font-size: 64px; margin-bottom: 20px;
  animation: heroFloat 3s ease-in-out infinite;
}
@keyframes heroFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.hero-title {
  font-size: clamp(28px, 6vw, 48px); font-weight: 900; margin-bottom: 16px;
  background: linear-gradient(135deg, var(--coral), var(--purple));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.hero-sub {
  font-size: 16px; color: var(--text2); max-width: 480px; line-height: 1.7;
}

/* Form */
.form-section { max-width: 560px; margin: 0 auto; }
.form-step {
  background: var(--bg-card); border-radius: 20px;
  padding: 28px; margin-bottom: 20px;
  box-shadow: var(--shadow);
}
.step-header {
  display: flex; align-items: center; gap: 14px; margin-bottom: 20px;
}
.step-num {
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, var(--coral), var(--pink));
  color: #fff; font-size: 16px; font-weight: 800;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.step-info h2 { font-size: 18px; font-weight: 700; color: var(--text); margin-bottom: 2px; }
.step-info p { font-size: 13px; color: var(--text3); }
.optional-tag {
  font-size: 11px; font-weight: 600; padding: 2px 8px;
  border-radius: 8px; background: #F0E8F8; color: var(--purple);
  vertical-align: middle;
}

/* Name Input */
.name-input-wrap { position: relative; }
.name-input {
  width: 100%; padding: 16px 60px 16px 20px;
  font-size: 18px; font-weight: 600; color: var(--text);
  background: #FFF8F0; border: 2px solid #E8E0F0;
  border-radius: 16px; outline: none; transition: all 0.2s;
  box-sizing: border-box;
}
.name-input:focus { border-color: var(--coral); box-shadow: 0 0 0 4px rgba(255,107,107,0.1); }
.name-input::placeholder { color: #C8B8D8; font-weight: 400; }
.name-count {
  position: absolute; right: 16px; top: 50%; transform: translateY(-50%);
  font-size: 12px; color: var(--text3);
}

/* Talent Grid */
.talent-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px; margin-bottom: 12px;
}
.talent-card {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  padding: 16px 12px; background: #FFF8F0;
  border: 2px solid #E8E0F0; border-radius: 16px;
  cursor: pointer; transition: all 0.3s; position: relative;
}
.talent-card:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
.talent-card.selected {
  border-color: var(--coral); background: #FFF0F0;
  box-shadow: 0 0 0 3px rgba(255,107,107,0.15);
}
.talent-icon { font-size: 28px; }
.talent-name { font-size: 13px; font-weight: 700; color: var(--text); }
.talent-desc { font-size: 11px; color: var(--text3); text-align: center; line-height: 1.4; }
.talent-check {
  position: absolute; top: 8px; right: 8px;
  width: 20px; height: 20px; border-radius: 50%;
  background: var(--coral); color: #fff;
  font-size: 12px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}
.talent-selected-hint {
  font-size: 13px; color: var(--coral); text-align: center;
  font-weight: 500; padding: 8px 0;
}

/* Preview */
.preview-section { margin-bottom: 24px; }
.preview-card {
  text-align: center; padding: 32px 24px;
  background: linear-gradient(135deg, #1E3A5F 0%, #2D1B4E 50%, #1E3A5F 100%);
  border-radius: 20px; color: #fff;
  box-shadow: 0 8px 32px rgba(30,58,95,0.3);
}
.preview-avatar {
  width: 72px; height: 72px; border-radius: 50%;
  background: rgba(255,255,255,0.15); border: 3px solid rgba(255,255,255,0.3);
  display: flex; align-items: center; justify-content: center;
  font-size: 36px; margin: 0 auto 12px;
}
.preview-name { font-size: 22px; font-weight: 800; margin-bottom: 8px; }
.preview-level {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 14px; border-radius: 20px;
  background: rgba(255,255,255,0.15);
  font-size: 13px; font-weight: 600; margin-bottom: 8px;
}
.level-icon { font-size: 16px; }
.preview-talent {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 12px; border-radius: 12px;
  background: rgba(255,200,100,0.2); border: 1px solid rgba(255,200,100,0.4);
  font-size: 12px; font-weight: 600; color: #FFD700;
}

/* Create Button */
.create-section { text-align: center; margin-bottom: 40px; }
.create-btn {
  width: 100%; max-width: 320px; padding: 18px 32px;
  font-size: 18px; font-weight: 800; border-radius: 20px;
  background: linear-gradient(135deg, var(--coral), var(--pink));
  color: #fff; border: none; cursor: pointer;
  transition: all 0.3s; box-shadow: 0 6px 20px rgba(255,107,107,0.3);
}
.create-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255,107,107,0.4);
}
.create-btn:disabled {
  opacity: 0.5; cursor: not-allowed;
  background: #E8E0F0; box-shadow: none;
}
.create-hint {
  font-size: 12px; color: var(--text3); margin-top: 12px;
}

/* Responsive */
@media (max-width: 640px) {
  .hero { min-height: 40vh; padding: 40px 20px 30px; }
  .hero-title { font-size: 28px; }
  .form-step { padding: 20px; }
  .talent-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
