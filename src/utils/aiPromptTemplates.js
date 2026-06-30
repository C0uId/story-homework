// AI Prompt 模板 - 知识剧场
// 模板骨架 + AI 填充的核心 Prompt 设计

/**
 * 风格描述映射
 * 每种题材风格的场景设定、角色定位和叙事氛围
 */
export const themeDescriptions = {
  martial: {
    name: '武林秘籍',
    avatar: '⚔️',
    setting: '古代武侠江湖，门派林立，武功招式暗含数学/语文/英语规律',
    tone: '热血、正气、师徒传承',
    sampleElements: '演武场、藏经阁、武功秘籍、江湖门派、师父与少侠、兵器招式',
    color: '#FF6B6B',
    narrativeTips: '用武侠对话风格：少侠、前辈、失敬了、看招！武功招式暗含知识。热血但不缺幽默。',
  },
  phantom: {
    name: '怪盗对决',
    avatar: '🎭',
    setting: '都市夜空下的怪盗与侦探之间的智力较量，谜题隐藏在知识点中',
    tone: '悬疑、机智、斗智斗勇',
    sampleElements: '月光下的屋顶、预告函、密室机关、华丽的魔术手法、红宝石胸针',
    color: '#C084FC',
    narrativeTips: '用怪盗与侦探的对话风格：预告函、密室、你中计了！斗智斗勇中暗含知识。',
  },
  detective: {
    name: '名探事件簿',
    avatar: '🔍',
    setting: '校园/社区中的日常谜题，小侦探用学科知识破解案件',
    tone: '冷静、细致、逻辑推理',
    sampleElements: '案发现场、线索板、放大镜、嫌疑人审讯、证据链、推理过程',
    color: '#60A5FA',
    narrativeTips: '用侦探推理风格：线索、证据、真相只有一个！推理过程暗含知识。',
  },
  scifi: {
    name: '星际探险',
    avatar: '🚀',
    setting: '未来太空探险，星际飞船上的科学实验和异星挑战',
    tone: '惊奇、探索、科技感',
    sampleElements: '星际飞船、外星文明、太空站、能量水晶、全息投影、AI助手',
    color: '#34D399',
    narrativeTips: '用科幻对话风格：舰长、报告、能量不足！科技场景暗含知识。',
  },
  school: {
    name: '校园奇遇',
    avatar: '🏫',
    setting: '日常校园生活中发生的奇妙事件，用知识解决身边难题',
    tone: '温馨、幽默、贴近生活',
    sampleElements: '教室、操场、图书馆、社团活动、同桌搭档、校园传说',
    color: '#FF8C42',
    narrativeTips: '用校园日常对话风格：同桌、老师、下课了！生活场景暗含知识。最搞笑的风格。',
  },
}

/**
 * 叙事方式映射
 */
export const narrativeStyles = {
  firstPerson: {
    name: '第一人称',
    description: '以主角"我"的视角讲述故事，读者代入感强',
    pronoun: '我',
    template: '以"我"（{role}）的视角展开叙述，用"我发现""我心想""我鼓起勇气"等句式',
  },
  thirdPerson: {
    name: '第三人称',
    description: '全知视角讲述故事，可自由切换场景和角色心理',
    pronoun: '他/她',
    template: '以旁观者视角讲述{role}的故事，用"他发现""她心想""只见"等句式',
  },
  dialogue: {
    name: '对话体',
    description: '以角色之间的对话推进情节，节奏明快',
    pronoun: '角色名',
    template: '以角色之间的对话为主推动情节，穿插简短的场景描写，用引号""包裹对话',
  },
}

/**
 * 学科与年级的适配角色映射
 */
const gradeSubjectRoles = {
  math: {
    martial: { role: '数学少侠', companion: '算盘灵兽', mentor: '数学大师' },
    phantom: { role: '密码怪盗', companion: '数字精灵', mentor: '谜题博士' },
    detective: { role: '数学侦探', companion: '计算笔', mentor: '逻辑教授' },
    scifi: { role: '星际计算师', companion: 'AI伙伴"算算"', mentor: '量子导师' },
    school: { role: '数学课代表', companion: '同桌小算', mentor: '班主任王老师' },
  },
  chinese: {
    martial: { role: '文武少侠', companion: '毛笔精灵', mentor: '文学宗师' },
    phantom: { role: '文字怪盗', companion: '诗词蝴蝶', mentor: '语法法师' },
    detective: { role: '语文侦探', companion: '成语之书', mentor: '阅读导师' },
    scifi: { role: '星际翻译官', companion: '语言AI"文文"', mentor: '文化长者' },
    school: { role: '语文课代表', companion: '读书搭子', mentor: '语文张老师' },
  },
  english: {
    martial: { role: '英语少侠', companion: '字母剑', mentor: '外语宗师' },
    phantom: { role: '暗语怪盗', companion: '单词魔方', mentor: '语法侦探' },
    detective: { role: '英文侦探', companion: '词典助手', mentor: '语言教授' },
    scifi: { role: '星际通讯员', companion: '翻译AI"译译"', mentor: '跨星导师' },
    school: { role: '英语课代表', companion: '英语搭档', mentor: '英语李老师' },
  },
  science: {
    martial: { role: '科学少侠', companion: '实验灵兽', mentor: '科学宗师' },
    phantom: { role: '实验怪盗', companion: '元素精灵', mentor: '实验室长者' },
    detective: { role: '科学侦探', companion: '显微镜', mentor: '研究院院长' },
    scifi: { role: '星际科学家', companion: '实验AI"探探"', mentor: '科学院导师' },
    school: { role: '科学课代表', companion: '实验搭档', mentor: '科学周老师' },
  },
  history: {
    martial: { role: '历史少侠', companion: '时光卷轴', mentor: '历史宗师' },
    phantom: { role: '时间怪盗', companion: '年代罗盘', mentor: '史学教授' },
    detective: { role: '历史侦探', companion: '古籍助手', mentor: '考古学者' },
    scifi: { role: '时空旅人', companion: '时光AI"穿越"', mentor: '时空导师' },
    school: { role: '历史课代表', companion: '历史搭档', mentor: '历史陈老师' },
  },
}

/**
 * 生成故事化作业的完整 Prompt
 * @param {Object} params
 * @param {string} params.grade - 年级 (1-6)
 * @param {string} params.subject - 学科 (math/chinese/english/science/history)
 * @param {string} params.chapter - 章节标题
 * @param {string} params.knowledgePoint - 知识点名称
 * @param {string} params.theme - 题材风格 (martial/phantom/detective/scifi/school)
 * @param {string} params.narrativeStyle - 叙事方式 (firstPerson/thirdPerson/dialogue)
 * @param {number} params.episodeCount - 剧集数量 (3-5)
 */
export function generateStoryPrompt(params) {
  const {
    grade,
    subject,
    chapter,
    knowledgePoint,
    theme = 'martial',
    narrativeStyle = 'firstPerson',
    episodeCount = 4,
  } = params

  const themeDesc = themeDescriptions[theme] || themeDescriptions.martial
  const narrative = narrativeStyles[narrativeStyle] || narrativeStyles.firstPerson
  const roles = gradeSubjectRoles[subject]?.[theme] || gradeSubjectRoles.math.martial

  const subjectNames = {
    math: '数学',
    chinese: '语文',
    english: '英语',
    science: '科学',
    history: '历史',
  }

  const gradeWord = `${grade}年级`
  const subjectName = subjectNames[subject] || '数学'

  return `你是一个专业的儿童教育故事编剧，专门为${gradeWord}${subjectName}课本编写知识剧场故事。

## 任务
请根据以下信息，生成一个完整的知识剧场故事剧本，包含${episodeCount}个剧集。

## 故事设定
- **年级**：${grade}年级
- **学科**：${subjectName}
- **章节**：${chapter}
- **核心知识点**：${knowledgePoint}
- **题材风格**：${themeDesc.name}
  - 场景设定：${themeDesc.setting}
  - 叙事氛围：${themeDesc.tone}
  - 典型元素：${themeDesc.sampleElements}
  - 写作技巧：${themeDesc.narrativeTips}
- **叙事方式**：${narrative.name}（${narrative.description}）
- **主角**：${roles.role}
- **伙伴**：${roles.companion}
- **导师**：${roles.mentor}

## 叙事要求
- ${narrative.template.replace('{role}', roles.role)}

## 写作约束
1. **story 类型**的 narrative 控制在 **150-250字**，纯故事推进，不包含题目
2. **challenge 类型**的 narrative 控制在 **80-120字**，作为关卡铺垫，自然引出题目
3. 语言风格：${themeDesc.tone}，用词简单易懂，句子短小精悍
4. 每个剧集必须**自然地融入知识点**，让读者在故事中理解概念
5. 知识点是通关的唯一手段——学生必须掌握知识点才能答对题目
6. 故事需要有**起承转合**的结构：story 引入→challenge 挑战→story 发展→challenge 挑战→...→story 总结
7. 题目必须与知识点直接相关，难度与${gradeWord}水平匹配
8. 每个剧集需要有一个具体的**场景描述**（一句话，描述故事发生的画面）
9. 每幕至少包含一个**幽默元素**，保持趣味性
10. 每个 question 必须包含 **hint 字段**（30字以内的提示，帮助学生思考）
11. **⚠️ 最关键：每个关卡幕（challenge）的 questions 数组必须包含至少2道题目！** 这样学生能通过多个角度巩固同一个知识点
12. **性格时刻（可选）**：在关卡幕中可以加入一个与剧情自然融合的性格抉择 moment，格式见下方

## 性格时刻（可选）
在每个关卡幕中，可以加入一个性格抉择 moment，让角色在剧情中做出自然选择。

性格抉择的格式（嵌入到对应 episode 中）：
\`\`\`json
"personalityMoment": {
  "narrative": "结合当前剧情的抉择描述（20-40字）",
  "options": [
    { "text": "选项A（2-6字）", "trait": "对应的性格特质ID" },
    { "text": "选项B（2-6字）", "trait": "对应的性格特质ID" }
  ]
}
\`\`\`

性格特质配对（每次选一对，二选一）：
- cautious(谨慎) ↔ adventurous(冒险)：安稳 vs 冒险
- empathetic(共情) ↔ independent(独立)：关心他人 vs 独立完成
- persistent(坚持) ↔ strategic(策略)：硬碰硬 vs 巧办法
- structured(有序) ↔ exploratory(探索)：按部就班 vs 自由探索
- ambitious(上进) ↔ thorough(扎实)：挑战高难度 vs 打好基础

⚠️ 性格时刻必须在剧情中自然呈现，不能生硬插入。让选择看起来是故事的一部分。

## 输出格式
请严格按以下 JSON 格式输出，不要输出其他内容：

\`\`\`json
{
  "title": "${themeDesc.name}·${chapter}",
  "theme": "${themeDesc.name}",
  "episodes": [
    {
      "id": "示例: ep1",
      "type": "story",
      "title": "第一幕：[小标题]",
      "narrative": "[150-250字的纯故事，推进剧情]",
      "knowledge": "",
      "scene": "[场景描述]",
      "questions": []
    },
    {
      "id": "示例: ep2",
      "type": "challenge",
      "title": "第二幕：[小标题]",
      "narrative": "[80-120字的关卡铺垫]",
      "knowledge": "[知识点名称]",
      "scene": "[场景描述]",
      "personalityMoment": {
        "narrative": "自然融入剧情的抉择（20-40字）, 可选",
        "options": [
          { "text": "选项A", "trait": "cautious" },
          { "text": "选项B", "trait": "adventurous" }
        ]
      },
      "questions": [
        {
          "text": "[第一道题目文本]",
          "options": ["选项A", "选项B", "选项C", "选项D"],
          "correct": [正确选项索引],
          "explanation": "[答对后故事继续，30字以内]",
          "hint": "[30字以内的提示]"
        },
        {
          "text": "[第二道题目文本，从不同角度考查同一个知识点]",
          "options": ["选项A", "选项B", "选项C", "选项D"],
          "correct": [正确选项索引],
          "explanation": "[答对后故事继续，30字以内]",
          "hint": "[30字以内的提示]"
        }
      ]
    }
  ]
}
\`\`\`

## 知识点要求
- 确保故事中涉及的数字、概念、术语都符合${gradeWord}${subjectName}课标要求
- 题目选项中需要包含常见的**易错选项**作为干扰项
- explanation 需要简洁明了，点明知识点核心
- hint 是给学生的温馨提示，30字以内，引导思考方向而非直接给出答案`
}

/**
 * 生成前情回顾的 Prompt
 * @param {Object} params
 * @param {string} params.previousStory - 上一期故事的摘要
 * @param {string} params.theme - 题材风格
 * @param {string} params.subject - 学科
 * @param {string} params.grade - 年级
 * @param {string} params.currentChapter - 当前章节
 */
export function generateRecapPrompt(params) {
  const {
    previousStory,
    theme = 'martial',
    subject = 'math',
    grade = '1',
    currentChapter,
  } = params

  const themeDesc = themeDescriptions[theme] || themeDescriptions.martial

  return `你是一个专业的儿童教育故事编剧。现在需要为知识剧场编写一段"前情回顾"。

## 任务
根据上一期故事的内容，生成一段简洁的前情回顾，帮助读者回忆上次的故事进展，并自然引出本章内容。

## 背景信息
- **题材风格**：${themeDesc.name}（氛围：${themeDesc.tone}）
- **当前章节**：${currentChapter}
- **上一期故事摘要**：
${previousStory || '（无上一期内容，作为系列开篇）'}

## 写作约束
1. 回顾文字控制在 **50-80字**
2. 语气要像"上次我们说到……"的连载故事开场白
3. 如果是系列开篇（无上期内容），则写一段简短的开场介绍，引出主角和世界观
4. 结尾要有一个**悬念或引子**，自然过渡到本章故事
5. 语言简单生动，适合${grade}年级学生阅读

## 输出格式
请直接输出前情回顾的文本内容，不要输出JSON或其他格式：

[前情回顾文本]`
}

/**
 * 生成分支剧情的 Prompt（答错时的纠正支线）
 * @param {Object} params
 * @param {string} params.originalNarrative - 原始叙事文本
 * @param {Object} params.question - 原始题目对象
 * @param {number} params.wrongAnswerIndex - 学生选错的选项索引
 * @param {string} params.theme - 题材风格
 * @param {string} params.subject - 学科
 * @param {string} params.grade - 年级
 * @param {string} params.knowledgePoint - 知识点
 */
export function generateWrongBranchPrompt(params) {
  const {
    originalNarrative,
    question,
    wrongAnswerIndex,
    theme = 'martial',
    subject = 'math',
    grade = '1',
    knowledgePoint,
  } = params

  const themeDesc = themeDescriptions[theme] || themeDescriptions.martial

  return `你是一个专业的儿童教育故事编剧，擅长在故事中巧妙地纠正错误并巩固知识点。

## 任务
学生在知识剧场中答错了一道题。请生成一段"纠正支线"剧情，在故事中自然地引导学生理解正确答案。

## 背景信息
- **题材风格**：${themeDesc.name}（氛围：${themeDesc.tone}）
- **年级**：${grade}年级
- **知识点**：${knowledgePoint}
- **原始叙事**：
${originalNarrative}
- **题目**：${question?.text || ''}
- **选项**：${JSON.stringify(question?.options || [])}
- **学生选择**：${question?.options?.[wrongAnswerIndex] || '未知'}
- **正确答案**：${question?.options?.[question?.correct] || '未知'}

## 写作约束
1. 回答文字控制在 **60-100字**
2. 以故事角色的口吻说话（如导师、伙伴等角色出面讲解）
3. **先肯定学生**的思考过程，再温柔地指出误解
4. 用故事中的**比喻或类比**来解释正确答案，不要干巴巴地说教
5. 最后给出一个简短的鼓励，让学生带着信心继续阅读
6. 语气温暖、积极，绝不能让学生产生挫败感
7. 自然融入知识点的讲解，让纠正过程本身也是一个学习机会

## 输出格式
请直接输出纠正支线的叙事文本，不要输出JSON或其他格式：

[纠正支线文本]`
}

/**
 * 生成知识点解析的 Prompt
 * @param {Object} params
 * @param {string} params.knowledgePoint - 知识点名称
 * @param {string} params.chapter - 章节标题
 * @param {string} params.subject - 学科
 * @param {string} params.grade - 年级
 * @param {string} params.theme - 题材风格
 * @param {string} params.narrativeStyle - 叙事方式
 * @param {Object} params.question - 相关题目对象
 */
export function generateExplanationPrompt(params) {
  const {
    knowledgePoint,
    chapter,
    subject = 'math',
    grade = '1',
    theme = 'martial',
    narrativeStyle = 'firstPerson',
    question,
  } = params

  const themeDesc = themeDescriptions[theme] || themeDescriptions.martial
  const narrative = narrativeStyles[narrativeStyle] || narrativeStyles.firstPerson

  const subjectNames = {
    math: '数学',
    chinese: '语文',
    english: '英语',
    science: '科学',
    history: '历史',
  }

  return `你是一个擅长用故事化语言讲解知识点的教育专家。

## 任务
为知识剧场生成一段**知识点解析**，用故事中的角色和场景来帮助${grade}年级学生深入理解知识点。

## 知识点信息
- **年级**：${grade}年级
- **学科**：${subjectNames[subject] || '数学'}
- **章节**：${chapter}
- **知识点**：${knowledgePoint}
${question ? `- **相关题目**：${question.text}
- **正确答案**：${question.options?.[question.correct]}
- **答案解析**：${question.explanation}` : ''}

## 风格要求
- **题材氛围**：${themeDesc.name}风格（${themeDesc.tone}）
- **叙事方式**：${narrative.name}

## 写作约束
1. 解析文字控制在 **100-200字**
2. 结构要求：
   - **概念讲解**（30-50字）：用一句话概括知识点的核心含义
   - **故事化举例**（40-80字）：用故事中的场景/角色做一个生动的类比
   - **要点总结**（30-70字）：提炼关键要点，方便记忆
3. 用**加粗**标注关键词（用 ** 包裹）
4. 避免使用过于抽象的学术用语，用小学生能听懂的语言
5. 如果涉及数学公式或概念，用**文字描述**代替符号（如用"大于"代替">"）
6. 最后加一句**记忆口诀**或**趣味提示**，帮助学生记住核心要点

## 输出格式
请直接输出知识点解析文本，用 Markdown 格式排版：

### 📖 知识点解析

**概念讲解**
[一句话概括]

**故事化理解**
[用故事场景举例说明]

**要点总结**
- [要点1]
- [要点2]

**💡 记忆小贴士**
[趣味记忆口诀或提示]`
}

/**
 * AI 接口调用的占位函数
 * 实际使用时替换为真实的大模型 API 调用
 */
export async function callAI(prompt) {
  console.log('AI Prompt:', prompt)
  // TODO: 接入真实的大模型 API
  // 示例：调用通义千问 / 文心一言 / GLM
  return { content: 'AI 生成的内容将在这里返回...' }
}
