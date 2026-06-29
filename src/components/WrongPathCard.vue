<template>
  <div v-if="show && (currentEpisode?.wrongNarrative || branchingData[currentEpisode?.id]?.wrongNarrative)" class="wrong-path-card card">
    <div class="wrong-path-header">
      <div class="wrong-path-avatar">🌀</div>
      <div class="wrong-path-label">
        <span class="wrong-path-tag">答错了？没关系！</span>
        <span class="wrong-path-subtitle">让我们换个角度重新理解——</span>
      </div>
    </div>
    <div class="wrong-path-divider"></div>
    <div class="wrong-path-text">
      {{ wrongPathText }}<span v-if="isWrongTyping" class="cursor" style="color: #C084FC;">|</span>
    </div>
    <div class="wrong-path-actions" v-if="!isWrongTyping">
      <button class="btn btn-coral" style="width: 100%; justify-content: center;" @click="$emit('continue')">
        {{ currentEpisodeIndex < totalEpisodes - 1 ? '回到主线 →' : '查看结局 🎬' }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: { type: Boolean, default: false },
  wrongPathText: { type: String, default: '' },
  isWrongTyping: { type: Boolean, default: false },
  currentEpisode: { type: Object, default: null },
  branchingData: { type: Object, required: true },
  currentEpisodeIndex: { type: Number, required: true },
  totalEpisodes: { type: Number, required: true }
})

defineEmits(['continue'])
</script>

<style scoped>
.wrong-path-card {
  margin-top: 16px;
  margin-bottom: 32px;
  padding: 28px;
  border: 2px solid rgba(192, 132, 252, 0.25);
  background: linear-gradient(160deg, #FDF8FF 0%, #FFF0F8 100%);
  animation: wrongPathFadeIn 0.5s ease;
  border-radius: 20px;
}
.wrong-path-card:hover { transform: none; }
@keyframes wrongPathFadeIn {
  0% { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
}
.wrong-path-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}
.wrong-path-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #E8D5FF, #FFE0F0);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
  border: 2px solid rgba(192, 132, 252, 0.2);
}
.wrong-path-label {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.wrong-path-tag {
  font-size: 16px;
  font-weight: 700;
  color: #9333EA;
}
.wrong-path-subtitle {
  font-size: 13px;
  color: var(--text3);
}
.wrong-path-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #D8C0F0, transparent);
  margin-bottom: 18px;
}
.wrong-path-text {
  font-size: 16px;
  line-height: 1.85;
  color: var(--text);
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 14px;
  border-left: 4px solid #C084FC;
  min-height: 60px;
}
.wrong-path-actions {
  margin-top: 20px;
  text-align: center;
}
</style>
