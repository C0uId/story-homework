<template>
  <div class="tts-float">
    <button class="tts-btn-main" @click="$emit('toggleTTS')" :class="{ active: ttsEnabled }" title="语音朗读开关">
      {{ ttsEnabled ? '🔊' : '🔇' }}
    </button>
    <template v-if="ttsEnabled">
      <button class="tts-btn-sm" @click="$emit('togglePause')" :disabled="!ttsSpeaking" title="暂停/继续">
        {{ ttsPaused ? '▶️' : '⏸️' }}
      </button>
      <button class="tts-btn-sm" @click="$emit('stopTTS')" :disabled="!ttsSpeaking" title="停止朗读">⏹️</button>
      <button class="tts-btn-sm" @click="toggleSettingsPanel" title="语速设置">⚙️</button>
    </template>
    <!-- TTS设置面板 -->
    <div class="tts-settings-panel" v-if="showPanel && ttsEnabled">
      <div class="tts-setting-row">
        <span class="tts-label">语速</span>
        <input type="range" min="0.5" max="1.5" step="0.1" :value="ttsRate" @input="$emit('changeRate', parseFloat($event.target.value))" class="tts-slider" />
        <span class="tts-value">{{ ttsRate }}x</span>
      </div>
      <div class="tts-setting-row" v-if="voices.length > 0">
        <span class="tts-label">声音</span>
        <select class="tts-select" :value="ttsVoiceName" @change="$emit('changeVoice', $event.target.value)">
          <option value="">默认</option>
          <option v-for="v in voices" :key="v.name" :value="v.name">{{ v.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getChineseVoices } from '../utils/tts'

defineProps({
  ttsEnabled: { type: Boolean, default: false },
  ttsSpeaking: { type: Boolean, default: false },
  ttsPaused: { type: Boolean, default: false },
  ttsRate: { type: Number, default: 1.0 },
  ttsVoiceName: { type: String, default: '' }
})

defineEmits([
  'toggleTTS',
  'togglePause',
  'stopTTS',
  'changeRate',
  'changeVoice'
])

const showPanel = ref(false)
const voices = ref([])

function toggleSettingsPanel() {
  showPanel.value = !showPanel.value
  if (showPanel.value) {
    loadVoices()
  }
  // 点击其他地方关闭面板
  if (showPanel.value) {
    setTimeout(() => {
      document.addEventListener('click', closePanelOutside, { once: true })
    }, 0)
  }
}

function closePanelOutside(e) {
  if (!e.target.closest('.tts-float')) {
    showPanel.value = false
  }
}

function loadVoices() {
  voices.value = getChineseVoices()
  if (voices.value.length === 0 && window.speechSynthesis) {
    window.speechSynthesis.getVoices()
    setTimeout(() => { voices.value = getChineseVoices() }, 500)
  }
}

onMounted(() => {
  loadVoices()
  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => { voices.value = getChineseVoices() }
  }
})
</script>

<style scoped>
/* ===== TTS Floating Controls ===== */
.tts-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 100;
}
.tts-btn-main {
  width: 52px; height: 52px;
  border-radius: 50%;
  border: none;
  background: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex; align-items: center; justify-content: center;
}
.tts-btn-main:hover { transform: scale(1.1); }
.tts-btn-main.active { background: #7c3aed; box-shadow: 0 4px 20px rgba(124,58,237,0.4); }
.tts-btn-sm {
  width: 38px; height: 38px;
  border-radius: 50%;
  border: none;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex; align-items: center; justify-content: center;
}
.tts-btn-sm:hover:not(:disabled) { transform: scale(1.1); background: #f3f0ff; }
.tts-btn-sm:disabled { opacity: 0.4; cursor: not-allowed; }
.tts-settings-panel {
  position: absolute;
  bottom: 60px;
  right: 0;
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  min-width: 220px;
  animation: popIn 0.2s ease;
}
.tts-setting-row { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
.tts-label { font-size: 13px; color: var(--text2); min-width: 30px; white-space: nowrap; }
.tts-slider { flex: 1; accent-color: #7c3aed; }
.tts-select {
  flex: 1; padding: 4px 8px; font-size: 12px;
  border: 1px solid #E8E0F0; border-radius: 8px;
  background: #fff; color: var(--text2); cursor: pointer;
  outline: none; max-width: 150px;
}
.tts-select:focus { border-color: #7c3aed; }
.tts-value { font-size: 12px; color: var(--text3); min-width: 30px; text-align: right; }

@keyframes popIn {
  0% { opacity: 0; transform: translateY(-8px); }
  100% { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .tts-float { bottom: 80px; right: 12px; }
  .tts-btn-main { width: 44px; height: 44px; font-size: 18px; }
  .tts-btn-sm { width: 34px; height: 34px; font-size: 14px; }
}
</style>