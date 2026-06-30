// TTS语音朗读模块 - 基于Web Speech API
// 支持中文朗读，适合1-6年级学生"听故事"

const TTS_SETTINGS_KEY = 'knowledgeTheater_tts'

let currentUtterance = null
let isSpeaking = false
let onEndCallback = null

/**
 * 获取TTS设置
 */
function getSettings() {
  try {
    const raw = localStorage.getItem(TTS_SETTINGS_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { enabled: true, rate: 0.9, pitch: 1.0, volume: 1.0, voiceName: 'Microsoft Xiaoyi Online (Natural) - Chinese (Mainland)' }
}

/**
 * 保存TTS设置
 */
function saveSettings(settings) {
  localStorage.setItem(TTS_SETTINGS_KEY, JSON.stringify(settings))
}

/**
 * 获取可用的中文语音列表
 */
export function getChineseVoices() {
  if (!window.speechSynthesis) return []
  const voices = window.speechSynthesis.getVoices()
  return voices.filter(v => v.lang.startsWith('zh'))
}

/**
 * 检查TTS是否可用
 */
export function isTTSAvailable() {
  return !!window.speechSynthesis
}

/**
 * 朗读文本
 * @param {string} text - 要朗读的文本
 * @param {Object} options - 选项
 * @param {Function} options.onStart - 开始朗读回调
 * @param {Function} options.onEnd - 朗读结束回调
 * @param {Function} options.onBoundary - 朗读到每个句子时的回调
 * @param {boolean} options.force - 强制朗读（忽略设置中的enabled）
 */
export function speak(text, options = {}) {
  if (!window.speechSynthesis) return

  // 停止之前的朗读
  stop()

  const settings = getSettings()
  if (!settings.enabled && !options.force) return

  // 清理文本：去除markdown符号、多余空白
  const cleanText = text
    .replace(/[*_#`]/g, '')
    .replace(/\n+/g, '。')
    .replace(/\s+/g, ' ')
    .trim()

  if (!cleanText) return

  const utterance = new SpeechSynthesisUtterance(cleanText)
  utterance.lang = 'zh-CN'
  utterance.rate = settings.rate || 0.9
  utterance.pitch = settings.pitch || 1.0
  utterance.volume = settings.volume || 1.0

  // 选择指定的语音或默认中文语音
  if (settings.voiceName) {
    const voices = getChineseVoices()
    const voice = voices.find(v => v.name === settings.voiceName)
    if (voice) utterance.voice = voice
  } else {
    const voices = getChineseVoices()
    if (voices.length > 0) utterance.voice = voices[0]
  }

  utterance.onstart = () => {
    isSpeaking = true
    options.onStart?.()
  }

  utterance.onend = () => {
    isSpeaking = false
    currentUtterance = null
    options.onEnd?.()
    onEndCallback?.()
    onEndCallback = null
  }

  utterance.onerror = (e) => {
    if (e.error !== 'canceled') {
      console.warn('TTS朗读错误:', e.error)
    }
    isSpeaking = false
    currentUtterance = null
    options.onEnd?.()
  }

  utterance.onboundary = (e) => {
    options.onBoundary?.(e)
  }

  currentUtterance = utterance
  window.speechSynthesis.speak(utterance)
}

/**
 * 朗读文本，返回Promise（朗读完成后resolve）
 */
export function speakAsync(text, options = {}) {
  return new Promise((resolve) => {
    speak(text, {
      ...options,
      onEnd: () => {
        options.onEnd?.()
        resolve()
      },
    })
  })
}

/**
 * 逐句朗读（将长文本拆成句子依次朗读）
 * @param {string} text - 要朗读的文本
 * @param {Object} options - 选项
 * @param {Function} options.onSentenceStart - 每句开始时回调 (sentence, index)
 * @param {Function} options.onEnd - 全部读完回调
 */
export async function speakBySentence(text, options = {}) {
  // 按句号、问号、感叹号分句
  const sentences = text
    .split(/([。！？!?])/)
    .reduce((acc, part, i, arr) => {
      if (i % 2 === 0) {
        const sentence = part + (arr[i + 1] || '')
        if (sentence.trim()) acc.push(sentence.trim())
      }
      return acc
    }, [])

  for (let i = 0; i < sentences.length; i++) {
    options.onSentenceStart?.(sentences[i], i)
    await speakAsync(sentences[i], { force: options.force })
  }

  options.onEnd?.()
}

/**
 * 停止朗读
 */
export function stop() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel()
  }
  isSpeaking = false
  currentUtterance = null
}

/**
 * 暂停朗读
 */
export function pause() {
  if (window.speechSynthesis && isSpeaking) {
    window.speechSynthesis.pause()
  }
}

/**
 * 恢复朗读
 */
export function resume() {
  if (window.speechSynthesis) {
    window.speechSynthesis.resume()
  }
}

/**
 * 切换暂停/恢复
 */
export function togglePause() {
  if (!window.speechSynthesis) return
  if (window.speechSynthesis.paused) {
    resume()
  } else if (isSpeaking) {
    pause()
  }
}

/**
 * 当前是否正在朗读
 */
export function getIsSpeaking() {
  return isSpeaking
}

/**
 * 当前是否暂停
 */
export function getIsPaused() {
  return window.speechSynthesis?.paused || false
}

/**
 * 获取设置
 */
export { getSettings, saveSettings }

/**
 * 更新单个设置
 */
export function updateSetting(key, value) {
  const settings = getSettings()
  settings[key] = value
  saveSettings(settings)
}

/**
 * 切换朗读开关
 */
export function toggleEnabled() {
  const settings = getSettings()
  settings.enabled = !settings.enabled
  saveSettings(settings)
  if (!settings.enabled) stop()
  return settings.enabled
}
