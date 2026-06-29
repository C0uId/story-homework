# 知识剧场 v2 重设计 Spec

## 1. 概述

### 1.1 目标
对现有"知识剧场"项目进行 v2 重设计，核心改进两个方面：
- **故事引擎**：重写 AI Prompt 系统，让故事更有趣、知识嵌入更深
- **交互体验**：简化流程、升级答题动效、增加游戏化元素

### 1.2 目标用户
8-12岁小学生（3-6年级），覆盖数学、语文、英语、科学、历史5个学科。

### 1.3 设计决策
| 决策项 | 选择 |
|--------|------|
| 重构方向 | 全面重构（故事 + 交互） |
| 首版范围 | ① 故事引擎 + ② 交互重构 |
| 叙事风格 | 幽默吐槽风为默认，可切换 |
| 知识嵌入 | 故事优先模型（纯故事幕 ⇄ 知识关卡幕） |
| 答错机制 | 勇气机制 + 二次机会 + 分支叙事兜底 |

---

## 2. 模块一：故事引擎重构

### 2.1 新 System Prompt 核心原则

重写 `storyGenerator.js` 中的 `buildSystemPrompt()` 函数，核心原则：

1. **幽默优先**：每幕至少一个笑点（吐槽、反转、拟人、谐音梗）
2. **角色个性**：主角有鲜明性格——好奇心强、爱吐槽、偶尔犯傻但很勇敢
3. **知识即钥匙**：知识点是剧情推进的必要条件，去掉知识故事走不下去
4. **章节悬念**：每章结尾必须有 cliffhanger，驱动孩子继续看下一章

### 2.2 新 Episode 结构

**现有结构：** narrative(50-100字) → questions(答题) → explanation(解析)

**新结构（故事优先模型）：**

```
章节 = [故事幕] → [关卡幕] → [故事幕] → [关卡幕] → ... → [结局幕]

故事幕（story episode）：
  - 类型: "story"
  - narrative: 150-250字
  - 功能: 推进剧情、发展角色、埋伏笔、制造幽默
  - 无 questions

关卡幕（challenge episode）：
  - 类型: "challenge"
  - narrative: 80-120字（场景铺垫）
  - questions: 1-2道题（知识关卡）
  - 功能: 知识点嵌入、答题互动、答对/答错分支
```

**比例：** 每个章节约8-12幕，其中故事幕和关卡幕交替排列，比例约 50:50。

### 2.3 三种叙事风格 Prompt 模板

在 `themes.js` 中新增 `narrativeStyle` 配置，对应三种 Prompt 模板：

#### 风格A：幽默吐槽（默认）
- 大量对话（"""包裹）
- 角色吐槽（"这什么鬼？！""你认真的？"）
- 拟声词（砰！哗啦！叮！咕噜咕噜！）
- 反转笑点（严肃铺垫→搞笑收尾）
- 物品拟人化（烧杯会说话、课本有脾气）

#### 风格B：悬疑解密
- 线索链式推进（线索A→线索B→真相）
- 推理过程外化（"等等，这里有矛盾……"）
- 信息差制造悬念（读者知道的比角色多/少）
- 真相揭示的戏剧性

#### 风格C：成长热血
- 挑战→失败→坚持→突破的弧线
- 内心独白推动情感（"小明握紧了拳头"）
- 师徒/同伴的情感羁绊
- 突破时刻的仪式感

### 2.4 答错分支叙事

答错时的故事处理流程：

```
第一次答错 → 勇气机制：
  - 获得"探索值" +5（不扣分）
  - 显示提示（AI 在生成故事时为每道题预生成一个 hint 字段，30字以内的简短提示）
  - 允许重新选择（隐藏错误选项，减少干扰）

第二次答错 → 分支叙事：
  - 进入"纠错支线"（由 AI 生成的独立叙事）
  - 支线中自然讲解正确答案
  - 支线结尾引导回主线剧情
  - 整个支线也是故事的一部分，不是"老师讲解"
```

### 2.5 AI Prompt 改动范围

| 文件 | 改动内容 |
|------|---------|
| `storyGenerator.js` | 重写 `buildSystemPrompt()`、`buildFirstBatchPrompt()`、`buildNextBatchPrompt()` |
| `aiPromptTemplates.js` | 新增3种叙事风格的 Prompt 模板，更新 `generateStoryPrompt()` |

---

## 3. 模块二：交互重构

### 3.1 首页简化

**现有流程：** 选年级 → 选学科 → 选风格 → 选章节（4步）

**新流程：** 选年级 → 选学科（2步），风格自动匹配

具体改动（`HomePage.vue`）：

1. **移除"选风格"步骤**：风格在设置中选择，默认幽默
2. **移除"选章节"步骤**：自动从第一章开始，或点击"继续冒险"回到上次进度
3. **新增"继续冒险"卡片**：显示上次学习进度，一键继续
4. **新增"每日推荐"**：基于学习数据推荐今天该学什么（简化版，不做复杂算法）
5. **步骤条从4步简化为2步**

### 3.2 答题交互升级

改动 `StoryPlayPage.vue`：

#### 答对反馈
- 粒子特效（CSS animation，不需要第三方库）
- 显示"太棒了！"+ 探索值+10
- 连击计数器：连续答对3题触发"连击模式"（经验翻倍）

#### 答错反馈
- 鼓励动效（柔和的shake + "再试试！"）
- 探索值+5（答错也有奖励）
- 显示"提示"按钮（点击后显示由 AI 生成的简短提示）
- 提示后再答错 → 进入分支叙事

#### 倒计时（可选）
- 在家长设置中可开启
- 开启后每题有30秒倒计时
- 倒计时结束自动显示提示，不扣分

### 3.3 角色系统微调

改动 `characterSystem.js`：

1. **"境界"改名为"等级"**：CULTIVATION_LEVELS 的 name 改为 Lv.1-12 格式，保留中文名作为副标题
2. **新增"探索值"**：
   - 新增 `explorationPoints` 字段到角色数据
   - 答对: +10 探索值
   - 答错: +5 探索值
   - 探索值可兑换"提示次数"
3. **保留**：天赋系统、技能系统、性格探测系统不变

### 3.4 动效设计

所有动效使用纯 CSS animation，不引入第三方动画库：

- 粒子特效：CSS keyframe animation（星星/光点散射）
- 答对反馈：scale弹跳 + 颜色变化
- 答错反馈：轻柔shake + 渐变色
- 连击模式：数字放大 + 光环效果
- 页面过渡：fade + slide

---

## 4. 文件改动清单

### 核心改动（4个文件）
| 文件 | 改动说明 |
|------|---------|
| `src/utils/storyGenerator.js` | 重写 buildSystemPrompt()、buildFirstBatchPrompt()、buildNextBatchPrompt()；新增叙事风格参数 |
| `src/utils/aiPromptTemplates.js` | 新增3种风格 Prompt 模板；更新 generateStoryPrompt() |
| `src/views/HomePage.vue` | 简化为2步选择；新增"继续冒险"和"每日推荐"卡片 |
| `src/views/StoryPlayPage.vue` | 新增勇气机制；升级答题动效；新增连击系统；支持 story/challenge 两种 episode 类型 |

### 辅助改动（4个文件）
| 文件 | 改动说明 |
|------|---------|
| `src/data/themes.js` | 新增 narrativeStyle 字段；新增风格描述配置 |
| `src/utils/characterSystem.js` | 新增 explorationPoints 字段；"境界"改名为"等级" |
| `src/utils/learningProgress.js` | 适配新的 episode 类型（story/challenge） |
| `src/App.vue` | 导航栏微调（如需要） |

### 不改动的文件
- `src/data/mathKnowledge.js` 等知识数据文件 — 不变
- `src/utils/aiService.js` — 不变（API 调用层不变）
- `src/utils/storyContext.js` — 基本不变（跨章节连贯性逻辑保留）
- `src/utils/tts.js` — 不变
- `src/router/index.js` — 不变
- `src/views/CharacterCreation.vue` — 基本不变
- `src/views/ProgressPage.vue` — 基本不变
- `src/views/ParentSettings.vue` — 基本不变（后续迭代加倒计时开关）

---

## 5. 数据结构变更

### 5.1 新增 Episode 类型

```javascript
// 现有格式（保留兼容）
{ id: "ep1", type: "story", narrative: "...", questions: [...] }

// 新增：纯故事幕
{ id: "ep1", type: "story", narrative: "150-250字的故事...", knowledge: "", scene: "", questions: [] }

// 新增：关卡幕
{ id: "ep2", type: "challenge", narrative: "80-120字铺垫...", knowledge: "知识点", scene: "", questions: [...], hint: "AI生成的提示" }
```

### 5.2 新增角色字段

```javascript
// characterSystem.js 中的角色数据新增
character.explorationPoints = 0  // 探索值
```

### 5.3 themes.js 新增字段

```javascript
{
  id: 'martial',
  // ...现有字段保留...
  narrativeStyle: 'humor',  // 新增：默认叙事风格
  stylePrompts: {           // 新增：风格 Prompt 描述
    humor: '用幽默吐槽风格...',
    suspense: '用悬疑解密风格...',
    hotblood: '用成长热血风格...',
  }
}
```

---

## 6. 不在本次范围内

以下功能确认不在 v2 首版范围，留给后续迭代：
- 学习画像（答题数据分析、自适应难度调整）
- 社交系统（班级排行、好友对战、分享）
- 家长设置中的倒计时开关
- 新增主题/学科

---

## 7. 验收标准

### 故事引擎
- [ ] 幽默风格的 AI 生成故事包含对话、吐槽、拟声词
- [ ] 每章至少有一个 cliffhanger
- [ ] 纯故事幕 narrative 长度在 150-250 字
- [ ] 关卡幕 narrative 长度在 80-120 字
- [ ] 知识点是剧情推进的必要条件（去掉知识故事不成立）

### 交互体验
- [ ] 首页从4步简化为2步
- [ ] "继续冒险"按钮可一键回到上次进度
- [ ] 答对时有粒子特效和奖励反馈
- [ ] 答错时有鼓励反馈 + 探索值奖励
- [ ] 提示功能可用
- [ ] 连击系统正常工作

### 角色系统
- [ ] 探索值正确累加（答对+10，答错+5）
- [ ] 等级显示正常（Lv.1-12）
- [ ] 天赋、技能、性格探测系统不受影响

### 兼容性
- [ ] 现有本地缓存数据兼容（旧格式 episode 可正常显示）
- [ ] TTS 功能正常
- [ ] 间隔重复复习系统正常
