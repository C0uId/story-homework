<template>
  <div class="quiz-panel card" :class="{ 'quiz-shake': wrongAnimKey > 0 }" :key="'q-' + currentQuestionIndex + '-' + correctAnimKey + '-' + wrongAnimKey">

    <!-- 性格选择题 -->
    <div v-if="isPersonalityQuestion">
      <div class="quiz-header">
        <span class="section-badge badge-purple">🔮 性格探索</span>
        <span v-if="currentQuestions.length > 1" class="quiz-counter">
          第 {{ currentQuestionIndex + 1 }}/{{ currentQuestions.length }} 题
        </span>
      </div>
      <p class="quiz-text">{{ currentQuestion.text }}</p>
      <div class="quiz-options">
        <div v-for="(option, idx) in currentQuestion.options" :key="idx"
          class="quiz-option personality-option"
          :class="{ selected: personalityResult && personalityResult.trait === option.trait }"
          @click="emit('selectPersonalityChoice', option)">
          <span class="option-letter" :style="personalityResult && personalityResult.trait === option.trait ? { background: '#8B5CF6', color: '#fff' } : {}">{{ option.icon || ['🔮','✨'][idx] }}</span>
          <span class="option-text">{{ option.text }}</span>
        </div>
      </div>
      <!-- 性格洞察 -->
      <div v-if="showPersonalityInsight && personalityResult" class="personality-insight">
        <div class="personality-insight-header">
          <span class="personality-insight-icon">{{ personalityResult.traitInfo?.icon }}</span>
          <span class="personality-insight-label">你的选择揭示了你的性格倾向</span>
        </div>
        <div class="personality-insight-body">
          <span class="personality-trait-name">{{ personalityResult.traitInfo?.name }}</span>
          <span class="personality-trait-desc">{{ personalityResult.traitInfo?.positive }} — {{ personalityResult.traitInfo?.desc }}</span>
        </div>
        <div v-if="personalityResult.isComplete" class="personality-complete">
          <span>🎉 性格探测完成！你的主要性格特征：</span>
          <div class="personality-tags">
            <span v-for="t in personalityResult.detected" :key="t.name" class="personality-tag">
              {{ t.icon }} {{ t.name }}
            </span>
          </div>
        </div>
        <button class="btn btn-coral" style="width: 100%; justify-content: center; margin-top: 16px;" @click="emit('handleNextQuestion')">
          {{ isLastQuestion ? (currentEpisodeIndex < totalEpisodes - 1 ? '下一幕 →' : '查看结局 🎬') : '下一题 →' }}
        </button>
      </div>
    </div>

    <!-- 知识题（选择/判断/填空） -->
    <div v-else>
      <div class="quiz-header">
        <span class="section-badge" :class="isReviewEpisode ? 'badge-purple' : 'badge-orange'">
          {{ isReviewEpisode ? '📝 知识回顾' : (characterName ? '⚔️ 帮助' + characterName : '❓ 冒险挑战') }}
        </span>
        <span v-if="currentQuestions.length > 1" class="quiz-counter">
          第 {{ currentQuestionIndex + 1 }}/{{ currentQuestions.length }} 关
        </span>
      </div>
      <!-- Review episode narrative -->
      <div v-if="isReviewEpisode && currentQuestionIndex === 0" class="review-intro">
        <p>让我们回顾一下这一幕学到的知识吧！</p>
      </div>
      <!-- Choice / TrueFalse question -->
      <div v-if="currentQuestion.type !== 'fillblank'">
        <p class="quiz-text">{{ currentQuestion.text }}</p>
        <div class="quiz-options">
          <div v-for="(option, idx) in currentQuestion.options" :key="idx"
            class="quiz-option"
            :class="{ selected: selectedAnswer === idx, correct: answerResult !== null && idx === currentQuestion.correct, wrong: answerResult !== null && selectedAnswer === idx && idx !== currentQuestion.correct }"
            @click="emit('selectAnswer', idx)">
            <span class="option-letter" :style="(answerResult !== null && idx === currentQuestion.correct) ? { background: '#34D399', color: '#fff' } : {}">{{ currentQuestion.type === 'truefalse' ? ['正确 ✓','错误 ✗'][idx] : ['A','B','C','D'][idx] }}</span>
            <span class="option-text">{{ option }}</span>
            <span v-if="answerResult !== null && idx === currentQuestion.correct" class="option-icon">✓</span>
            <span v-if="answerResult !== null && selectedAnswer === idx && idx !== currentQuestion.correct" class="option-icon wrong-icon">✗</span>
          </div>
        </div>
      </div>
      <!-- Fill blank question -->
      <div v-else>
        <p class="quiz-text">{{ currentQuestion.text }}</p>
        <div class="quiz-options">
          <div v-for="(option, idx) in (currentQuestion.options.length ? currentQuestion.options : ['A', 'B', 'C', 'D'])" :key="idx"
            class="quiz-option"
            :class="{ selected: selectedAnswer === idx, correct: answerResult !== null && option === currentQuestion.answer, wrong: answerResult !== null && selectedAnswer === idx && option !== currentQuestion.answer }"
            @click="emit('selectAnswer', idx)">
            <span class="option-letter" :style="(answerResult !== null && option === currentQuestion.answer) ? { background: '#34D399', color: '#fff' } : {}">{{ ['A','B','C','D'][idx] }}</span>
            <span class="option-text">{{ option }}</span>
          </div>
        </div>
      </div>
      <div v-if="answerResult !== null" class="quiz-result" :class="answerResult ? 'correct' : 'wrong'">
        <div class="result-header">
          <span class="result-icon">{{ answerResult ? '🎉' : '💪' }}</span>
          <span class="result-text">{{ answerResult ? '太棒了！答对了！' : '别灰心，看看解析吧！' }}</span>
        </div>
        <p class="result-explanation">{{ currentQuestion.explanation }}</p>
        <!-- 答对：直接下一题 -->
        <div v-if="answerResult === true">
          <button class="btn btn-coral" style="width: 100%; justify-content: center;" @click="emit('handleNextQuestion')">
            {{ isLastQuestion ? (currentEpisodeIndex < totalEpisodes - 1 ? '下一幕 →' : '查看结局 🎬') : '下一题 →' }}
          </button>
        </div>
        <!-- 第一次答错（wrongAttempts===1）：显示提示引导（实际提示框在 StoryPlayPage 中） -->
        <div v-else-if="wrongAttempts === 1" class="quiz-wrong-hint">
          <span>💡 看看下方的提示，再试一次吧！</span>
        </div>
        <!-- 第二次答错：分支叙事即将展开 -->
        <div v-else class="quiz-wrong-hint">
          <span>👇 下方将为你展开另一条故事线，帮你理解这个知识点</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  currentQuestion: {
    type: Object,
    required: true
  },
  currentQuestions: {
    type: Array,
    required: true
  },
  currentQuestionIndex: {
    type: Number,
    required: true
  },
  selectedAnswer: {
    type: Number,
    default: null
  },
  answerResult: {
    type: Boolean,
    default: null
  },
  isPersonalityQuestion: {
    type: Boolean,
    default: false
  },
  personalityResult: {
    type: Object,
    default: null
  },
  showPersonalityInsight: {
    type: Boolean,
    default: false
  },
  isLastQuestion: {
    type: Boolean,
    default: false
  },
  isReviewEpisode: {
    type: Boolean,
    default: false
  },
  characterName: {
    type: String,
    default: ''
  },
  currentEpisodeIndex: {
    type: Number,
    required: true
  },
  totalEpisodes: {
    type: Number,
    required: true
  },
  currentEpisode: {
    type: Object,
    required: true
  },
  branchingData: {
    type: Object,
    required: true
  },
  wrongAttempts: {
    type: Number,
    default: 0
  },
  showHint: {
    type: Boolean,
    default: false
  },
  correctAnimKey: {
    type: Number,
    default: 0
  },
  wrongAnimKey: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['selectAnswer', 'selectPersonalityChoice', 'handleNextQuestion', 'useHintRetry'])
</script>

<style scoped>
.quiz-panel { padding: 28px; }
.quiz-panel:hover { transform: none; }
.quiz-header { margin-bottom: 16px; }
.quiz-text { font-size: 16px; line-height: 1.7; color: var(--text); margin-bottom: 20px; }
.quiz-options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
.quiz-option {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 18px; background: #FFF8F0; border: 2px solid #E8E0F0;
  border-radius: 16px; cursor: pointer; transition: all 0.2s;
}
.quiz-option:hover:not(.correct):not(.wrong) { background: #FFF1E6; border-color: var(--orange); }
.quiz-option.correct { border-color: #34D399; background: #E8FFF4; }
.quiz-option.wrong { border-color: var(--coral); background: #FFE8E8; }
.option-letter {
  width: 28px; height: 28px; border-radius: 50%;
  background: #E8E0F0; display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700; flex-shrink: 0; color: var(--text2);
}
.option-text { flex: 1; font-size: 14px; color: var(--text); }
.option-icon { font-size: 16px; color: #34D399; font-weight: 700; }
.wrong-icon { color: var(--coral); }

/* Quiz Counter */
.quiz-counter {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: rgba(192,132,252,0.08);
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--purple);
  margin-bottom: 8px;
}

/* True/False Options */
.tf-options {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}
.tf-option {
  flex: 1;
  padding: 16px;
  text-align: center;
  background: #FFF8F0;
  border: 2px solid #E8E0F0;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
}
.tf-option:hover:not(.correct):not(.wrong) { background: #FFF1E6; border-color: var(--orange); }
.tf-option.correct { border-color: #34D399; background: #E8FFF4; }
.tf-option.wrong { border-color: var(--coral); background: #FFE8E8; }

/* Fill Blank */
.fillblank-area {
  margin-bottom: 20px;
}
.fillblank-input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #E8E0F0;
  border-radius: 14px;
  font-size: 16px;
  background: #FFF8F0;
  color: var(--text);
  outline: none;
  transition: border-color 0.2s;
}
.fillblank-input:focus { border-color: var(--purple); }
.fillblank-input.correct { border-color: #34D399; background: #E8FFF4; }
.fillblank-input.wrong { border-color: var(--coral); background: #FFE8E8; }
.fillblank-btn {
  margin-top: 12px;
  padding: 12px 32px;
  font-size: 15px;
}

/* Review Episode Intro */
.review-intro {
  text-align: center;
  padding: 24px;
}
.review-intro h4 {
  font-size: 18px;
  font-weight: 700;
  color: var(--purple);
  margin-bottom: 8px;
}
.review-intro p {
  font-size: 14px;
  color: var(--text2);
  margin-bottom: 20px;
  line-height: 1.6;
}

/* Personality Choice */
.personality-option { border-color: rgba(139,92,246,0.2); background: linear-gradient(135deg, #F5F3FF, #FFF8F0); }
.personality-option:hover:not(.selected) { border-color: #8B5CF6; background: linear-gradient(135deg, #EDE9FE, #FFF1E6); }
.personality-option.selected { border-color: #8B5CF6; background: linear-gradient(135deg, #EDE9FE, #F3E8FF); }

.personality-insight {
  margin-top: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #F5F3FF 0%, #FFF8F0 100%);
  border-radius: 16px;
  border: 2px solid rgba(139,92,246,0.2);
  animation: popIn 0.4s ease;
}
.personality-insight-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.personality-insight-icon { font-size: 32px; }
.personality-insight-label { font-size: 13px; color: var(--text3); }
.personality-insight-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
}
.personality-trait-name {
  font-size: 20px;
  font-weight: 800;
  color: #7C3AED;
}
.personality-trait-desc {
  font-size: 14px;
  color: var(--text2);
  line-height: 1.6;
}
.personality-complete {
  margin-top: 12px;
  padding: 12px;
  background: rgba(139,92,246,0.08);
  border-radius: 12px;
  font-size: 13px;
  color: var(--text2);
  text-align: center;
}
.personality-tags {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 8px;
  flex-wrap: wrap;
}
.personality-tag {
  padding: 4px 12px;
  background: linear-gradient(135deg, #8B5CF6, #A78BFA);
  color: #fff;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.quiz-result { padding: 20px; border-radius: 16px; animation: popIn 0.3s ease; }
.quiz-result.correct { background: #E8FFF4; border: 2px solid #BBF7D0; }
.quiz-result.wrong { background: #FFE8E8; border: 2px solid #FFD4D4; }
.quiz-result:hover { transform: none; }
.result-header { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
.result-icon { font-size: 24px; }
.result-text { font-size: 16px; font-weight: 700; color: var(--text); }
.result-explanation { font-size: 14px; color: var(--text2); line-height: 1.7; margin-bottom: 16px; }

.quiz-wrong-hint {
  text-align: center; padding: 12px 0 4px;
  font-size: 13px; color: var(--text3); font-style: italic;
}

/* 答错抖动 */
.quiz-shake {
  animation: wrongShake 0.5s ease;
}
@keyframes wrongShake {
  0%, 100% { transform: translateX(0); }
  15% { transform: translateX(-8px); }
  30% { transform: translateX(6px); }
  45% { transform: translateX(-4px); }
  60% { transform: translateX(2px); }
}
</style>
