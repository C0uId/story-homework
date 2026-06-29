// 角色系统：境界 + 天赋 + 技能 + 性格探测
const CHARACTER_KEY = 'knowledgeTheater_character'

// ========== 境界系统 ==========
// 小说式境界体系，每级所需经验递增
const CULTIVATION_LEVELS = [
  { level: 1, name: 'Lv.1', title: '凡人',     icon: '🌱', expRequired: 0,     desc: '初入江湖的少年' },
  { level: 2, name: 'Lv.2', title: '练气',     icon: '💨', expRequired: 100,   desc: '感知到知识的气息' },
  { level: 3, name: 'Lv.3', title: '筑基',     icon: '🏗️', expRequired: 250,   desc: '打下坚实的知识基础' },
  { level: 4, name: 'Lv.4', title: '灵动',     icon: '🌊', expRequired: 500,   desc: '知识开始在脑海中流动' },
  { level: 5, name: 'Lv.5', title: '金丹',     icon: '🔮', expRequired: 850,   desc: '将知识凝聚成金丹' },
  { level: 6, name: 'Lv.6', title: '元婴',     icon: '👶', expRequired: 1300,  desc: '知识化为元婴，可独立运用' },
  { level: 7, name: 'Lv.7', title: '化神',     icon: '⚡', expRequired: 2000,  desc: '知识与自身融为一体' },
  { level: 8, name: 'Lv.8', title: '合体',     icon: '🌌', expRequired: 3000,  desc: '天人合一，知识无界' },
  { level: 9, name: 'Lv.9', title: '问道',     icon: '❓', expRequired: 4500,  desc: '开始追寻知识的终极真理' },
  { level: 10, name: 'Lv.10', title: '大乘',    icon: '✨', expRequired: 6500,  desc: '学识渊博，融会贯通' },
  { level: 11, name: 'Lv.11', title: '渡劫',    icon: '🌩️', expRequired: 9000,  desc: '经历考验，即将飞升' },
  { level: 12, name: 'Lv.12', title: '飞升',    icon: '🚀', expRequired: 12000, desc: '知识之巅，传说中的存在' },
]

// ========== 天赋系统 ==========
// 创始时可选一个天赋（影响初始难度），学习中可获得新天赋
const TALENTS = {
  // 初始可选天赋（有天赋的学科题目更难）
  mathTalent:    { id: 'mathTalent',    name: '算术天赋',   icon: '🔢', desc: '数学类题目难度+1', effect: { subject: 'math', difficultyMod: 1 } },
  chineseTalent: { id: 'chineseTalent', name: '语言天赋',   icon: '📖', desc: '语文类题目难度+1', effect: { subject: 'chinese', difficultyMod: 1 } },
  englishTalent: { id: 'englishTalent', name: '英语天赋',   icon: '🌍', desc: '英语类题目难度+1', effect: { subject: 'english', difficultyMod: 1 } },
  scienceTalent: { id: 'scienceTalent', name: '科学直觉',   icon: '🔬', desc: '科学类题目难度+1', effect: { subject: 'science', difficultyMod: 1 } },
  historyTalent: { id: 'historyTalent', name: '历史记忆',   icon: '📜', desc: '历史类题目难度+1', effect: { subject: 'history', difficultyMod: 1 } },

  // 学习中获得的天赋（每完成一个章节有概率获得）
  quickLearner:  { id: 'quickLearner',  name: '悟性超群',   icon: '🧠', desc: '经验获取+20%', effect: { expMod: 1.2 } },
  persistent:    { id: 'persistent',    name: '持之以恒',   icon: '💪', desc: '连续学习奖励翻倍', effect: { streakBonus: 2 } },
  curious:       { id: 'curious',       name: '好奇心强',   icon: '❓', desc: '探索类题目更容易', effect: { explorationBonus: true } },
  logical:       { id: 'logical',       name: '逻辑思维',   icon: '🔗', desc: '推理类题目难度-1', effect: { logicMod: -1 } },
  creative:      { id: 'creative',      name: '创造力',     icon: '🎨', desc: '开放性题目得分+20%', effect: { creativeBonus: 1.2 } },
  photographic:  { id: 'photographic',  name: '过目不忘',   icon: '📸', desc: '复习间隔延长，记忆更牢', effect: { memoryMod: 1.5 } },
  competitive:   { id: 'competitive',   name: '争强好胜',   icon: '🏆', desc: '答对时额外经验+10', effect: { bonusExp: 10 } },
  brave:         { id: 'brave',         name: '勇往直前',   icon: '⚔️', desc: '答错不影响信心', effect: { wrongPenaltyReduce: true } },
}

// ========== 技能系统 ==========
// 根据学科学习自动获得
const SKILLS_BY_SUBJECT = {
  math: [
    { id: 'addSword',    name: '加法剑法',   icon: '⚔️', desc: '掌握基础加法运算' },
    { id: 'subStep',     name: '减法轻功',   icon: '🏃', desc: '掌握基础减法运算' },
    { id: 'mulShield',   name: '乘法护盾',   icon: '🛡️', desc: '掌握基础乘法运算' },
    { id: 'divArrow',    name: '除法暗箭',   icon: '🏹', desc: '掌握基础除法运算' },
    { id: 'fractionArt', name: '分数变化术', icon: '✨', desc: '掌握分数运算' },
    { id: 'decimalEye',  name: '小数火眼',   icon: '👁️', desc: '掌握小数运算' },
  ],
  chinese: [
    { id: 'pinyinSpell',  name: '拼音咒语',   icon: '🔮', desc: '掌握拼音拼读' },
    { id: 'charPower',    name: '汉字之力',   icon: '📝', desc: '掌握汉字书写' },
    { id: 'poemChant',    name: '诗词吟唱',   icon: '🎵', desc: '掌握古诗背诵' },
    { id: 'readStream',   name: '阅读心流',   icon: '📚', desc: '掌握阅读理解' },
    { id: 'writeBlade',   name: '作文之笔',   icon: '🖊️', desc: '掌握写作技巧' },
  ],
  english: [
    { id: 'letterSense',  name: '字母感知',   icon: '🔤', desc: '掌握26个字母' },
    { id: 'wordEcho',     name: '单词回响',   icon: '💬', desc: '掌握基础单词' },
    { id: 'grammarNet',   name: '语法之网',   icon: '🕸️', desc: '掌握基础语法' },
    { id: 'speakBreeze',  name: '口语清风',   icon: '🌬️', desc: '掌握口语表达' },
    { id: 'listenSong',   name: '听力之歌',   icon: '🎶', desc: '掌握听力理解' },
  ],
  science: [
    { id: 'observeEye',   name: '观察之眼',   icon: '👁️', desc: '掌握观察方法' },
    { id: 'experimentHand', name: '实验之手', icon: '🤲', desc: '掌握实验操作' },
    { id: 'reasonChain',  name: '推理锁链',   icon: '🔗', desc: '掌握逻辑推理' },
    { id: 'natureTalk',   name: '自然对话',   icon: '🌿', desc: '认识自然现象' },
  ],
  history: [
    { id: 'timeTravel',   name: '时空穿梭',   icon: '⏰', desc: '掌握时间线索' },
    { id: 'eventSee',     name: '事件洞察',   icon: '🔍', desc: '理解历史事件' },
    { id: 'figureKnow',   name: '人物识别',   icon: '👤', desc: '认识历史人物' },
    { id: 'cultureFeel',  name: '文化感知',   icon: '🏛️', desc: '了解文化遗产' },
  ],
}

// ========== 性格探测系统 ==========
// 通过故事中的选择来判断用户性格（15题题库，故事关键点随机抽取3题）
export const PERSONALITY_QUESTIONS = [
  {
    scene: '你面前有两条路：左边是已知的安全小路，右边是未知的神秘山路',
    options: [
      { text: '走安全的小路', trait: 'cautious', icon: '🛡️' },
      { text: '走神秘的山路', trait: 'adventurous', icon: '⚔️' },
    ]
  },
  {
    scene: '队友答错了题，你会怎么做？',
    options: [
      { text: '安慰队友，一起分析错因', trait: 'empathetic', icon: '💛' },
      { text: '自己先做完，再回来帮他', trait: 'independent', icon: '🦅' },
    ]
  },
  {
    scene: '遇到一道特别难的题目，你会？',
    options: [
      { text: '反复尝试，不放弃', trait: 'persistent', icon: '💪' },
      { text: '先跳过，做别的再回来', trait: 'strategic', icon: '♟️' },
    ]
  },
  {
    scene: '学习新知识时，你更喜欢？',
    options: [
      { text: '先听老师讲解', trait: 'structured', icon: '📖' },
      { text: '自己动手尝试', trait: 'exploratory', icon: '🔬' },
    ]
  },
  {
    scene: '完成一个章节后，你会？',
    options: [
      { text: '立即挑战下一章', trait: 'ambitious', icon: '🚀' },
      { text: '先复习巩固已学内容', trait: 'thorough', icon: '📚' },
    ]
  },
  {
    scene: '你在图书馆发现一本奇怪的书，封面写着"禁止翻阅"，你会？',
    options: [
      { text: '尊重规则，不去碰它', trait: 'cautious', icon: '🛡️' },
      { text: '忍不住打开看看', trait: 'adventurous', icon: '⚔️' },
    ]
  },
  {
    scene: '小组合作时，有人提出了和你不同的想法，你会？',
    options: [
      { text: '认真倾听，尝试理解对方的思路', trait: 'empathetic', icon: '💛' },
      { text: '坚持自己的方案，用事实说服他', trait: 'independent', icon: '🦅' },
    ]
  },
  {
    scene: '考试前还有一道题不会做，你会？',
    options: [
      { text: '死磕到底，直到弄明白', trait: 'persistent', icon: '💪' },
      { text: '先复习已经会的，确保不丢分', trait: 'strategic', icon: '♟️' },
    ]
  },
  {
    scene: '老师讲了一个有趣的课外知识，你会？',
    options: [
      { text: '记在笔记本上，课后继续查资料', trait: 'structured', icon: '📖' },
      { text: '立刻动手做一个小实验验证', trait: 'exploratory', icon: '🔬' },
    ]
  },
  {
    scene: '你考了全班第二名，你会？',
    options: [
      { text: '分析和第一名的差距，下次要超过他', trait: 'ambitious', icon: '🚀' },
      { text: '总结这次的经验，把薄弱点补好', trait: 'thorough', icon: '📚' },
    ]
  },
  {
    scene: '突然下起暴雨，你没带伞，你会？',
    options: [
      { text: '等雨停了再走', trait: 'cautious', icon: '🛡️' },
      { text: '直接冲进雨里跑回去', trait: 'adventurous', icon: '⚔️' },
    ]
  },
  {
    scene: '朋友因为考试失利很沮丧，你会？',
    options: [
      { text: '陪他聊天，告诉他一次失败不代表什么', trait: 'empathetic', icon: '💛' },
      { text: '帮他分析试卷，找出可以提高的地方', trait: 'independent', icon: '🦅' },
    ]
  },
  {
    scene: '面对一道开放性思考题，没有标准答案，你会？',
    options: [
      { text: '从不同角度思考，列出所有可能性', trait: 'persistent', icon: '💪' },
      { text: '选择最有把握的一个方向深入', trait: 'strategic', icon: '♟️' },
    ]
  },
  {
    scene: '假期来临，你更想做什么？',
    options: [
      { text: '制定学习计划，系统预习下学期内容', trait: 'structured', icon: '📖' },
      { text: '参加夏令营或户外探索活动', trait: 'exploratory', icon: '🔬' },
    ]
  },
  {
    scene: '你发现了一个可以提升自己某项技能的方法，你会？',
    options: [
      { text: '每天坚持练习，不断精进', trait: 'ambitious', icon: '🚀' },
      { text: '先把基础打好，循序渐进', trait: 'thorough', icon: '📚' },
    ]
  },
]

// 性格特征描述
const TRAIT_DESCRIPTIONS = {
  cautious:      { name: '谨慎', icon: '🛡️', desc: '做事稳重，善于规避风险', positive: '考虑周全' },
  adventurous:   { name: '冒险', icon: '⚔️', desc: '敢于探索未知，勇于挑战', positive: '勇气可嘉' },
  empathetic:    { name: '共情', icon: '💛', desc: '善于理解他人，富有同理心', positive: '心地善良' },
  independent:   { name: '独立', icon: '🦅', desc: '喜欢独立思考，自主解决问题', positive: '独立自主' },
  persistent:    { name: '坚持', icon: '💪', desc: '面对困难不轻易放弃', positive: '意志坚定' },
  strategic:     { name: '策略', icon: '♟️', desc: '善于规划，懂得取舍', positive: '思维敏捷' },
  structured:    { name: '有序', icon: '📖', desc: '喜欢系统化学习，循序渐进', positive: '有条不紊' },
  exploratory:   { name: '探索', icon: '🔬', desc: '喜欢动手实践，在探索中学习', positive: '求知欲强' },
  ambitious:     { name: '上进', icon: '🚀', desc: '追求进步，渴望突破自我', positive: '积极进取' },
  thorough:      { name: '扎实', icon: '📚', desc: '注重基础，稳扎稳打', positive: '基础牢固' },
}

// ========== 经验值计算 ==========
export const EXP_VALUES = {
  episodeComplete:   15,  // 完成一集故事
  episodeCorrect:    10,  // 答对题目额外经验
  chapterComplete:   50,  // 完成一个章节
  dailyFirstLearn:   20,  // 每天首次学习
  reviewComplete:    8,   // 完成一次复习
  streak3Days:       30,  // 连续学习3天
  streak7Days:       100, // 连续学习7天
  streak30Days:      500, // 连续学习30天
  explorationCorrect: 10,  // 答对获得探索值
  explorationWrong: 5,     // 答错获得探索值
}

// ========== 内存缓存 ==========
// 避免每次 getCharacter() 都 JSON.parse(localStorage)
let _cachedCharacter = null
let _cacheValid = false

function invalidateCache() { _cacheValid = false }

function loadCharacter() {
  if (_cacheValid && _cachedCharacter) return _cachedCharacter
  try {
    const data = localStorage.getItem(CHARACTER_KEY)
    _cachedCharacter = data ? JSON.parse(data) : null
    _cacheValid = true
    return _cachedCharacter
  } catch {
    _cachedCharacter = null
    _cacheValid = true
    return null
  }
}

function saveCharacter(char) {
  _cachedCharacter = char
  _cacheValid = true
  localStorage.setItem(CHARACTER_KEY, JSON.stringify(char))
}

// ========== Exported Functions ==========

/**
 * 创建新角色（只需要名字 + 可选天赋）
 */
export function createCharacter(name, initialTalentId = null) {
  const character = {
    // 基础信息
    name: name.trim(),
    createdAt: Date.now(),

    // 境界系统
    cultivation: {
      level: 1,
      exp: 0,
      totalExp: 0,
    },

    // 天赋系统（初始最多选1个，后续学习获得）
    talents: initialTalentId ? [initialTalentId] : [],

    // 技能系统（根据学科学习自动获得）
    skills: [],

    // 性格系统（通过选择探测）
    personality: {
      traits: {},          // { trait: count }
      detected: [],        // 已确认的性格标签
      questionsAnswered: 0,
      totalQuestions: PERSONALITY_QUESTIONS.length,
      isComplete: false,
    },

    // 学科熟练度（用于难度调整）
    subjectMastery: {
      math: 0,
      chinese: 0,
      english: 0,
      science: 0,
      history: 0,
    },

    // 探索值
    explorationPoints: 0,  // 探索值（答错也有奖励）

    // 冒险统计
    stats: {
      chaptersCompleted: 0,
      episodesCompleted: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      totalExpEarned: 0,
      talentsUnlocked: initialTalentId ? 1 : 0,
      skillsUnlocked: 0,
      streakDays: 0,
      lastLearnDate: null,
    },

    // 冒险日志
    adventureLog: [],
  }

  saveCharacter(character)
  return character
}

/**
 * 获取当前角色
 */
export function getCharacter() {
  return loadCharacter()
}

/**
 * 检查是否已创建角色
 */
export function hasCharacter() {
  return loadCharacter() !== null
}

/**
 * 删除角色
 */
export function deleteCharacter() {
  localStorage.removeItem(CHARACTER_KEY)
  invalidateCache()
}

// ========== 境界系统 ==========

/**
 * 获取当前境界信息
 */
export function getCultivationInfo() {
  const char = loadCharacter()
  if (!char) return null

  const currentLevel = CULTIVATION_LEVELS.find(l => l.level === char.cultivation.level)
  const nextLevel = CULTIVATION_LEVELS.find(l => l.level === char.cultivation.level + 1)

  return {
    current: currentLevel,
    next: nextLevel,
    exp: char.cultivation.exp,
    expRequired: nextLevel ? nextLevel.expRequired - currentLevel.expRequired : 0,
    progress: nextLevel
      ? Math.min(100, Math.round((char.cultivation.exp / (nextLevel.expRequired - currentLevel.expRequired)) * 100))
      : 100,
    isMaxLevel: !nextLevel,
  }
}

/**
 * 增加经验值，自动处理升级
 */
export function addExp(amount, reason = '') {
  const char = loadCharacter()
  if (!char) return { leveled: false }

  // 应用天赋加成
  let finalAmount = amount
  if (char.talents.includes('quickLearner')) finalAmount = Math.round(amount * 1.2)

  char.cultivation.exp += finalAmount
  char.cultivation.totalExp += finalAmount
  char.stats.totalExpEarned += finalAmount

  // 检查升级
  let leveled = false
  let newLevel = null
  const currentLevelData = CULTIVATION_LEVELS.find(l => l.level === char.cultivation.level)
  const nextLevelData = CULTIVATION_LEVELS.find(l => l.level === char.cultivation.level + 1)

  if (nextLevelData && char.cultivation.exp >= (nextLevelData.expRequired - currentLevelData.expRequired)) {
    char.cultivation.level++
    char.cultivation.exp = char.cultivation.exp - (nextLevelData.expRequired - currentLevelData.expRequired)
    leveled = true
    newLevel = nextLevelData

    // 记录升级日志
    char.adventureLog.push({
      time: Date.now(),
      type: 'levelup',
      message: `突破至【${nextLevelData.name}】境界！`,
      icon: nextLevelData.icon,
    })
  }

  // 记录经验日志
  if (reason) {
    char.adventureLog.push({
      time: Date.now(),
      type: 'exp',
      message: `${reason} +${finalAmount}经验`,
      icon: '⭐',
    })
  }

  saveCharacter(char)
  return { leveled, newLevel, exp: finalAmount }
}

/**
 * 增加探索值
 */
export function addExplorationPoints(amount, reason = '') {
  const char = loadCharacter()
  if (!char) return 0

  char.explorationPoints = (char.explorationPoints || 0) + amount

  if (reason) {
    char.adventureLog.push({
      time: Date.now(),
      type: 'exploration',
      message: `${reason} +${amount}探索值`,
      icon: '🔍',
    })
  }

  saveCharacter(char)
  return char.explorationPoints
}

/**
 * 获取探索值
 */
export function getExplorationPoints() {
  const char = loadCharacter()
  return char?.explorationPoints || 0
}

// ========== 天赋系统 ==========

/**
 * 获取所有可选初始天赋
 */
export function getInitialTalents() {
  return Object.values(TALENTS).filter(t =>
    ['mathTalent', 'chineseTalent', 'englishTalent', 'scienceTalent', 'historyTalent'].includes(t.id)
  )
}

/**
 * 获取所有可获得的学习天赋
 */
export function getLearnableTalents() {
  return Object.values(TALENTS).filter(t =>
    !['mathTalent', 'chineseTalent', 'englishTalent', 'scienceTalent', 'historyTalent'].includes(t.id)
  )
}

/**
 * 获取角色当前所有天赋
 */
export function getCharacterTalents() {
  const char = loadCharacter()
  if (!char) return []
  return char.talents.map(id => TALENTS[id]).filter(Boolean)
}

/**
 * 学习中获得新天赋（完成章节时调用）
 */
export function tryUnlockTalent() {
  const char = loadCharacter()
  if (!char) return null

  const learnable = getLearnableTalents().filter(t => !char.talents.includes(t.id))
  if (learnable.length === 0) return null

  // 30%概率获得新天赋
  if (Math.random() > 0.3) return null

  const newTalent = learnable[Math.floor(Math.random() * learnable.length)]
  char.talents.push(newTalent.id)
  char.stats.talentsUnlocked++

  char.adventureLog.push({
    time: Date.now(),
    type: 'talent',
    message: `觉醒天赋【${newTalent.name}】！${newTalent.desc}`,
    icon: newTalent.icon,
  })

  saveCharacter(char)
  return newTalent
}

/**
 * 获取难度调整系数（根据天赋和学科熟练度）
 */
export function getDifficultyModifier(subject) {
  const char = loadCharacter()
  if (!char) return 0

  let modifier = 0

  // 天赋加成
  char.talents.forEach(talentId => {
    const talent = TALENTS[talentId]
    if (talent?.effect?.subject === subject && talent.effect.difficultyMod) {
      modifier += talent.effect.difficultyMod
    }
  })

  // 学科熟练度加成（熟练度越高，难度适当提升）
  const mastery = char.subjectMastery[subject] || 0
  if (mastery >= 80) modifier += 1  // 高熟练度：难度+1
  else if (mastery >= 50) modifier += 0  // 中等：不变
  else if (mastery < 20) modifier -= 1  // 低熟练度：难度-1

  return modifier
}

// ========== 技能系统 ==========

/**
 * 解锁技能（学完知识点时调用）
 */
export function unlockSkill(subject, knowledgeId) {
  const char = loadCharacter()
  if (!char) return null

  const subjectSkills = SKILLS_BY_SUBJECT[subject]
  if (!subjectSkills) return null

  // 找到下一个未解锁的技能
  const unlockedIds = char.skills.map(s => s.id)
  const nextSkill = subjectSkills.find(s => !unlockedIds.includes(s.id))

  if (!nextSkill) return null

  char.skills.push({ ...nextSkill, unlockedAt: Date.now(), subject })
  char.stats.skillsUnlocked++

  // 提升对应学科熟练度
  char.subjectMastery[subject] = Math.min(100, (char.subjectMastery[subject] || 0) + 15)

  char.adventureLog.push({
    time: Date.now(),
    type: 'skill',
    message: `习得技能【${nextSkill.name}】！${nextSkill.desc}`,
    icon: nextSkill.icon,
  })

  saveCharacter(char)
  return nextSkill
}

/**
 * 获取角色所有技能
 */
export function getCharacterSkills() {
  const char = loadCharacter()
  if (!char) return []
  return char.skills
}

// ========== 性格探测系统 ==========

/**
 * 获取性格探测题目
 */
export function getPersonalityQuestion(index) {
  if (index < 0 || index >= PERSONALITY_QUESTIONS.length) return null
  return PERSONALITY_QUESTIONS[index]
}

/**
 * 获取性格探测总题数
 */
export function getPersonalityTotalQuestions() {
  return PERSONALITY_QUESTIONS.length
}

/**
 * 提交性格选择
 */
export function submitPersonalityChoice(questionIndex, optionIndex) {
  const char = loadCharacter()
  if (!char) return null

  const question = PERSONALITY_QUESTIONS[questionIndex]
  if (!question) return null

  const option = question.options[optionIndex]
  if (!option) return null

  // 记录选择
  char.personality.traits[option.trait] = (char.personality.traits[option.trait] || 0) + 1
  char.personality.questionsAnswered++

  // 检查是否完成探测
  if (char.personality.questionsAnswered >= PERSONALITY_QUESTIONS.length) {
    char.personality.isComplete = true
    // 找出最多的性格特征
    const sorted = Object.entries(char.personality.traits).sort((a, b) => b[1] - a[1])
    char.personality.detected = sorted.slice(0, 3).map(([trait]) => trait)
  }

  saveCharacter(char)
  return { trait: option.trait, isComplete: char.personality.isComplete }
}

/**
 * 获取已探测的性格
 */
export function getPersonality() {
  const char = loadCharacter()
  if (!char) return null

  return {
    traits: char.personality.traits,
    detected: char.personality.detected.map(t => TRAIT_DESCRIPTIONS[t]).filter(Boolean),
    isComplete: char.personality.isComplete,
    progress: char.personality.questionsAnswered,
    total: PERSONALITY_QUESTIONS.length,
  }
}

/**
 * 获取性格描述
 */
export function getTraitDescription(trait) {
  return TRAIT_DESCRIPTIONS[trait] || null
}

/**
 * 获取性格特征描述（全部）
 */
export function getAllTraitDescriptions() {
  return TRAIT_DESCRIPTIONS
}

/**
 * 从题库中随机抽取N道题用于故事嵌入
 */
export function getRandomPersonalityQuestions(count = 3) {
  const shuffled = [...PERSONALITY_QUESTIONS].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

/**
 * 在故事中提交性格选择（用于故事关键点的性格探测）
 */
export function submitStoryPersonalityChoice(trait) {
  const char = loadCharacter()
  if (!char) return null

  // 记录选择
  char.personality.traits[trait] = (char.personality.traits[trait] || 0) + 1
  char.personality.questionsAnswered++

  // 检查是否完成探测（累计答够题数即可完成）
  const totalNeeded = 5 // 故事中累计答对5道性格题即可完成性格探测
  if (char.personality.questionsAnswered >= totalNeeded && !char.personality.isComplete) {
    char.personality.isComplete = true
    const sorted = Object.entries(char.personality.traits).sort((a, b) => b[1] - a[1])
    char.personality.detected = sorted.slice(0, 3).map(([trait]) => trait)
  }

  saveCharacter(char)
  return {
    trait,
    traitInfo: TRAIT_DESCRIPTIONS[trait],
    isComplete: char.personality.isComplete,
    detected: char.personality.detected.map(t => TRAIT_DESCRIPTIONS[t]).filter(Boolean),
  }
}

// ========== 学科熟练度 ==========

/**
 * 提升学科熟练度
 */
export function increaseSubjectMastery(subject, amount = 10) {
  const char = loadCharacter()
  if (!char) return

  char.subjectMastery[subject] = Math.min(100, (char.subjectMastery[subject] || 0) + amount)
  saveCharacter(char)
}

/**
 * 获取学科熟练度
 */
export function getSubjectMastery(subject) {
  const char = loadCharacter()
  if (!char) return 0
  return char.subjectMastery[subject] || 0
}

// ========== 冒险日志 ==========

/**
 * 获取冒险日志
 */
export function getAdventureLog(limit = 20) {
  const char = loadCharacter()
  if (!char) return []
  return char.adventureLog.slice(-limit).reverse()
}

/**
 * 添加冒险日志
 */
export function addAdventureLog(type, message, icon = '📖') {
  const char = loadCharacter()
  if (!char) return

  char.adventureLog.push({
    time: Date.now(),
    type,
    message,
    icon,
  })

  // 只保留最近100条
  if (char.adventureLog.length > 100) {
    char.adventureLog = char.adventureLog.slice(-100)
  }

  saveCharacter(char)
}

// ========== 统计 ==========

/**
 * 获取角色统计
 */
export function getCharacterStats() {
  const char = loadCharacter()
  if (!char) return null
  return char.stats
}

/**
 * 获取境界列表（用于展示）
 */
export function getAllCultivationLevels() {
  return CULTIVATION_LEVELS
}

/**
 * 获取所有天赋列表
 */
export function getAllTalents() {
  return Object.values(TALENTS)
}
