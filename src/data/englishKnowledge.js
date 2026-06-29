// ============================================================
// 人教版（PEP）小学英语 1-6年级 完整知识点框架
// 严格按照人教版课本目录顺序编排
// 1-2年级为启蒙内容（chapters留空），3-6年级正式学习
// 每学期6个单元，3-6年级上册+下册共46个单元
// 每个知识点包含AI生成元数据字段
// ============================================================

export const englishKnowledge = {
  // ========================
  // 一年级（启蒙，暂无正式课程）
  // ========================
  '1': { title: '一年级英语', icon: '🌍', color: '#4facfe', chapters: [] },

  // ========================
  // 二年级（启蒙，暂无正式课程）
  // ========================
  '2': { title: '二年级英语', icon: '🌍', color: '#4facfe', chapters: [] },

  // ========================
  // 三年级
  // ========================
  '3': {
    title: '三年级英语',
    icon: '🌍',
    color: '#4facfe',
    chapters: [
      // ========== 三年级上册 ==========
      {
        id: 'che3-1',
        title: 'Unit 1 Hello!',
        icon: '👋',
        semester: '上册',
        points: [
          {
            id: 'pe3-1', name: '问候语Hello与Hi', difficulty: 1,
            keywords: ['Hello', 'Hi', '问候', '打招呼'],
            concept: '学会用Hello和Hi进行日常问候，两者使用场景基本相同，Hi更为随意口语化',
            questionTypes: ['选择', '判断', '连线'],
            relatedPoints: ['pe3-3', 'pe3-43']
          },
          {
            id: 'pe3-2', name: '自我介绍I\'m...句型', difficulty: 1,
            keywords: ['I\'m', '自我介绍', '名字'],
            concept: '学会用I\'m + 名字进行自我介绍，如I\'m Sarah. 了解I am的缩写形式',
            questionTypes: ['填空', '选择', '判断'],
            relatedPoints: ['pe3-5', 'pe3-43']
          },
          {
            id: 'pe3-3', name: '告别语Goodbye与Bye', difficulty: 1,
            keywords: ['Goodbye', 'Bye', '告别', '再见'],
            concept: '学会用Goodbye和Bye进行告别，了解两者的使用场景',
            questionTypes: ['选择', '判断', '连线'],
            relatedPoints: ['pe3-1']
          },
          {
            id: 'pe3-4', name: '文具词汇', difficulty: 1,
            keywords: ['pencil', 'ruler', 'eraser', 'crayon', 'pen', 'bag', '文具'],
            concept: '掌握六种常见文具的英文表达：pencil铅笔、ruler尺子、eraser橡皮、crayon蜡笔、pen钢笔、bag书包',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-6']
          },
          {
            id: 'pe3-5', name: 'What\'s your name?句型', difficulty: 1,
            keywords: ['What\'s your name', 'My name is', '询问姓名'],
            concept: '学会用What\'s your name?询问对方姓名，用My name is...回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-2']
          },
          {
            id: 'pe3-6', name: 'I have a...句型', difficulty: 1,
            keywords: ['I have', '拥有', '文具'],
            concept: '学会用I have a/an + 物品表达拥有某物，如I have a pencil.',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-4', 'pe3-22']
          },
          {
            id: 'pe3-7', name: '字母Aa-Bb认读与书写', difficulty: 1,
            keywords: ['字母', 'Aa', 'Bb', '书写'],
            concept: '学会字母Aa和Bb的正确读音和书写规范，包括大写和小写形式',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-14']
          }
        ]
      },
      {
        id: 'che3-2',
        title: 'Unit 2 Colours',
        icon: '🎨',
        semester: '上册',
        points: [
          {
            id: 'pe3-8', name: '基础颜色词汇（一）', difficulty: 1,
            keywords: ['red', 'yellow', 'green', 'blue', '红色', '黄色', '绿色', '蓝色'],
            concept: '掌握四种基础颜色的英文表达：red红色、yellow黄色、green绿色、blue蓝色',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-9']
          },
          {
            id: 'pe3-9', name: '基础颜色词汇（二）', difficulty: 1,
            keywords: ['black', 'white', 'orange', 'brown', '黑色', '白色', '橙色', '棕色'],
            concept: '掌握四种常见颜色的英文表达：black黑色、white白色、orange橙色、brown棕色',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-8', 'pe4-8']
          },
          {
            id: 'pe3-10', name: 'What colour is it?句型', difficulty: 1,
            keywords: ['What colour', '颜色提问', '颜色回答'],
            concept: '学会用What colour is it/this/that?询问物品颜色，用It\'s + 颜色回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-8', 'pe3-9']
          },
          {
            id: 'pe3-11', name: 'I see...句型', difficulty: 1,
            keywords: ['I see', '看见', '颜色'],
            concept: '学会用I see + 颜色表达看到某种颜色，如I see red.',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-10']
          },
          {
            id: 'pe3-12', name: 'Show me your...祈使句', difficulty: 1,
            keywords: ['Show me', '展示', '祈使句'],
            concept: '学会用Show me your + 物品的祈使句，请求展示某物，如Show me your red crayon.',
            questionTypes: ['选择', '连线', '判断'],
            relatedPoints: ['pe3-4', 'pe3-10']
          },
          {
            id: 'pe3-13', name: '颜色形容词修饰名词', difficulty: 1,
            keywords: ['颜色形容词', '名词搭配', 'a red pen'],
            concept: '了解颜色形容词放在名词前面修饰物品，如a red pen一支红笔、a blue bag一个蓝色书包',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pe3-8', 'pe3-9']
          },
          {
            id: 'pe3-14', name: '字母Cc-Dd认读与书写', difficulty: 1,
            keywords: ['字母', 'Cc', 'Dd', '书写'],
            concept: '学会字母Cc和Dd的正确读音和书写规范',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-7', 'pe3-21']
          }
        ]
      },
      {
        id: 'che3-3',
        title: 'Unit 3 Look at me!',
        icon: '🫣',
        semester: '上册',
        points: [
          {
            id: 'pe3-15', name: '身体部位词汇（头部）', difficulty: 1,
            keywords: ['head', 'face', 'nose', 'mouth', 'eye', 'ear', '头', '脸', '鼻子', '嘴巴', '眼睛', '耳朵'],
            concept: '掌握头部六个身体部位的英文表达：head头、face脸、nose鼻子、mouth嘴巴、eye眼睛、ear耳朵',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-16']
          },
          {
            id: 'pe3-16', name: '身体部位词汇（四肢）', difficulty: 1,
            keywords: ['arm', 'hand', 'finger', 'leg', 'foot', 'body', '胳膊', '手', '手指', '腿', '脚', '身体'],
            concept: '掌握身体其他部位的英文表达：arm胳膊、hand手、finger手指、leg腿、foot脚、body身体',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-15']
          },
          {
            id: 'pe3-17', name: 'Look at me!句型', difficulty: 1,
            keywords: ['Look at', '看', '祈使句'],
            concept: '学会用Look at me!或Look at my + 身体部位引导对方看某处',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-15', 'pe3-16']
          },
          {
            id: 'pe3-18', name: 'This is my...句型', difficulty: 1,
            keywords: ['This is my', '介绍身体部位'],
            concept: '学会用This is my + 身体部位介绍自己身体的某个部分',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-15', 'pe3-16']
          },
          {
            id: 'pe3-19', name: 'How are you?日常问候', difficulty: 1,
            keywords: ['How are you', 'Fine', 'thank you', '身体状况'],
            concept: '学会用How are you?询问对方状况，用Fine, thank you.等回答',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe3-1', 'pe3-5']
          },
          {
            id: 'pe3-20', name: 'Touch your...触摸指令', difficulty: 1,
            keywords: ['Touch', '触摸', '指令', '祈使句'],
            concept: '学会用Touch your + 身体部位的指令，如Touch your nose. 摸摸你的鼻子',
            questionTypes: ['选择', '连线', '判断'],
            relatedPoints: ['pe3-15', 'pe3-16']
          },
          {
            id: 'pe3-21', name: '字母Ee-Ff认读与书写', difficulty: 1,
            keywords: ['字母', 'Ee', 'Ff', '书写'],
            concept: '学会字母Ee和Ff的正确读音和书写规范',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-14', 'pe3-28']
          }
        ]
      },
      {
        id: 'che3-4',
        title: 'Unit 4 We love animals',
        icon: '🐾',
        semester: '上册',
        points: [
          {
            id: 'pe3-22', name: '动物词汇（一）', difficulty: 1,
            keywords: ['cat', 'dog', 'duck', 'pig', 'bear', 'bird', '猫', '狗', '鸭', '猪', '熊', '鸟'],
            concept: '掌握六种常见动物的英文表达：cat猫、dog狗、duck鸭、pig猪、bear熊、bird鸟',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-23', 'pe3-57']
          },
          {
            id: 'pe3-23', name: '动物词汇（二）', difficulty: 1,
            keywords: ['panda', 'tiger', 'elephant', 'monkey', 'rabbit', '熊猫', '老虎', '大象', '猴子', '兔子'],
            concept: '掌握五种动物的英文表达：panda熊猫、tiger老虎、elephant大象、monkey猴子、rabbit兔子',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-22', 'pe3-57']
          },
          {
            id: 'pe3-24', name: 'What\'s this/that?句型', difficulty: 1,
            keywords: ['What\'s this', 'What\'s that', 'It\'s a', '动物识别'],
            concept: '学会用What\'s this/that?询问近处/远处物品，用It\'s a/an + 动物名回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-22', 'pe3-23']
          },
          {
            id: 'pe3-25', name: 'I have a...句型（动物）', difficulty: 1,
            keywords: ['I have', '拥有动物', '玩具动物'],
            concept: '学会用I have a/an + 动物名表达自己拥有某动物玩具，如I have a dog.',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-6', 'pe3-24']
          },
          {
            id: 'pe3-26', name: 'Cool/Super/Great/Wow感叹词', difficulty: 1,
            keywords: ['Cool', 'Super', 'Great', 'Wow', '感叹'],
            concept: '学会使用Cool、Super、Great、Wow等感叹词表达赞赏和惊讶',
            questionTypes: ['选择', '判断', '情景对话'],
            relatedPoints: ['pe3-19']
          },
          {
            id: 'pe3-27', name: 'Act like a...模仿指令', difficulty: 1,
            keywords: ['Act like', '模仿', '动物动作'],
            concept: '学会用Act like a + 动物名模仿该动物的动作，如Act like a cat.',
            questionTypes: ['选择', '判断', '连线'],
            relatedPoints: ['pe3-22', 'pe3-23']
          },
          {
            id: 'pe3-28', name: '字母Gg-Hh认读与书写', difficulty: 1,
            keywords: ['字母', 'Gg', 'Hh', '书写'],
            concept: '学会字母Gg和Hh的正确读音和书写规范',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-21', 'pe3-35']
          }
        ]
      },
      {
        id: 'che3-5',
        title: 'Unit 5 Let\'s eat!',
        icon: '🍔',
        semester: '上册',
        points: [
          {
            id: 'pe3-29', name: '食物词汇', difficulty: 1,
            keywords: ['cake', 'bread', 'hot dog', 'hamburger', 'chicken', '蛋糕', '面包', '热狗', '汉堡', '鸡肉'],
            concept: '掌握五种常见食物的英文表达：cake蛋糕、bread面包、hot dog热狗、hamburger汉堡、chicken鸡肉',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-30', 'pe3-71']
          },
          {
            id: 'pe3-30', name: '饮料词汇', difficulty: 1,
            keywords: ['water', 'milk', 'juice', 'tea', 'Coke', 'coffee', '水', '牛奶', '果汁', '茶', '可乐', '咖啡'],
            concept: '掌握六种常见饮料的英文表达：water水、milk牛奶、juice果汁、tea茶、Coke可乐、coffee咖啡',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-29']
          },
          {
            id: 'pe3-31', name: 'Can I have some...?句型', difficulty: 1,
            keywords: ['Can I have', '请求', '食物饮料'],
            concept: '学会用Can I have some + 食物/饮料?礼貌地请求得到某物，如Can I have some water?',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-29', 'pe3-30']
          },
          {
            id: 'pe3-32', name: 'I like...句型', difficulty: 1,
            keywords: ['I like', '喜欢', '食物'],
            concept: '学会用I like + 食物/饮料表达喜欢某物，如I like chicken.',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-31']
          },
          {
            id: 'pe3-33', name: 'Have some...请客句型', difficulty: 1,
            keywords: ['Have some', '请客', '分享食物'],
            concept: '学会用Have some + 食物/饮料?主动请客，如Have some bread.',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe3-31', 'pe3-34']
          },
          {
            id: 'pe3-34', name: 'Thank you与You\'re welcome', difficulty: 1,
            keywords: ['Thank you', 'You\'re welcome', '感谢', '不客气'],
            concept: '学会用Thank you表达感谢，用You\'re welcome回应感谢',
            questionTypes: ['选择', '连线', '情景对话'],
            relatedPoints: ['pe3-33']
          },
          {
            id: 'pe3-35', name: '字母Ii-Jj认读与书写', difficulty: 1,
            keywords: ['字母', 'Ii', 'Jj', '书写'],
            concept: '学会字母Ii和Jj的正确读音和书写规范',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-28', 'pe3-42']
          }
        ]
      },
      {
        id: 'che3-6',
        title: 'Unit 6 Happy birthday!',
        icon: '🎂',
        semester: '上册',
        points: [
          {
            id: 'pe3-36', name: '数字1-10的英文表达', difficulty: 1,
            keywords: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', '数字'],
            concept: '掌握数字1-10的英文表达：one到ten，注意three、five、seven等的发音',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pe3-78']
          },
          {
            id: 'pe3-37', name: 'How old are you?句型', difficulty: 1,
            keywords: ['How old', '年龄', 'I\'m...years old'],
            concept: '学会用How old are you?询问年龄，用I\'m + 数字 + years old.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-36']
          },
          {
            id: 'pe3-38', name: 'Happy birthday!祝福语', difficulty: 1,
            keywords: ['Happy birthday', '生日快乐', '祝福'],
            concept: '学会用Happy birthday!祝福生日快乐，了解生日场合的基本礼貌用语',
            questionTypes: ['选择', '判断', '情景对话'],
            relatedPoints: ['pe3-37']
          },
          {
            id: 'pe3-39', name: 'How many...?句型', difficulty: 1,
            keywords: ['How many', '数量', '多少'],
            concept: '学会用How many + 可数名词复数?询问物品数量，如How many cakes?',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-36', 'pe3-78']
          },
          {
            id: 'pe3-40', name: '数字与物品搭配', difficulty: 1,
            keywords: ['数字搭配', '数词', '名词复数'],
            concept: '学会用数字+名词表达物品数量，如three pencils五支铅笔、five cakes五个蛋糕',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pe3-36', 'pe3-39']
          },
          {
            id: 'pe3-41', name: 'This is for you.句型', difficulty: 1,
            keywords: ['This is for you', '赠送礼物', '生日'],
            concept: '学会用This is for you.表达赠送礼物，理解for表示"给"的含义',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe3-38']
          },
          {
            id: 'pe3-42', name: '字母Kk-Ll认读与书写', difficulty: 1,
            keywords: ['字母', 'Kk', 'Ll', '书写'],
            concept: '学会字母Kk和Ll的正确读音和书写规范',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-35', 'pe3-49']
          }
        ]
      },
      // ========== 三年级下册 ==========
      {
        id: 'che3-7',
        title: 'Unit 1 Welcome back to school!',
        icon: '🏫',
        semester: '下册',
        points: [
          {
            id: 'pe3-43', name: '国家词汇', difficulty: 1,
            keywords: ['UK', 'Canada', 'USA', 'China', '英国', '加拿大', '美国', '中国'],
            concept: '掌握四个国家的英文表达：UK英国、Canada加拿大、USA美国、China中国',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-44']
          },
          {
            id: 'pe3-44', name: 'boy和girl的区别', difficulty: 1,
            keywords: ['boy', 'girl', '男孩', '女孩', '性别'],
            concept: '学会用boy表示男孩、girl表示女孩，能正确区分和使用',
            questionTypes: ['选择', '判断', '连线'],
            relatedPoints: ['pe3-43', 'pe3-50']
          },
          {
            id: 'pe3-45', name: 'Where are you from?句型', difficulty: 1,
            keywords: ['Where are you from', 'I\'m from', '来自哪里'],
            concept: '学会用Where are you from?询问对方来自哪里，用I\'m from + 国家名回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-43']
          },
          {
            id: 'pe3-46', name: 'We have a new friend.句型', difficulty: 1,
            keywords: ['new friend', '新朋友', '介绍'],
            concept: '学会用We have a new friend.介绍新同学到来的场景表达',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe3-43', 'pe3-2']
          },
          {
            id: 'pe3-47', name: '介绍他人的句型This is...', difficulty: 1,
            keywords: ['This is', '介绍他人', '礼貌'],
            concept: '学会用This is + 人名.向他人介绍第三方，了解介绍的礼貌顺序',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe3-45']
          },
          {
            id: 'pe3-48', name: '常见国家标志物认知', difficulty: 1,
            keywords: ['国家标志', '文化常识', '国旗'],
            concept: '了解UK、Canada、USA、China等国家的代表性标志物和基本文化常识',
            questionTypes: ['选择', '连线', '判断'],
            relatedPoints: ['pe3-43']
          },
          {
            id: 'pe3-49', name: '字母Mm-Nn认读与书写', difficulty: 1,
            keywords: ['字母', 'Mm', 'Nn', '书写'],
            concept: '学会字母Mm和Nn的正确读音和书写规范',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-42', 'pe3-56']
          }
        ]
      },
      {
        id: 'che3-8',
        title: 'Unit 2 My family',
        icon: '👨‍👩‍👧‍👦',
        semester: '下册',
        points: [
          {
            id: 'pe3-50', name: '家庭成员词汇（父母辈）', difficulty: 1,
            keywords: ['father', 'dad', 'mother', 'mom', 'grandfather', 'grandpa', 'grandmother', 'grandma', '父亲', '母亲', '祖父', '祖母'],
            concept: '掌握家庭成员称谓：father/dad父亲、mother/mom母亲、grandfather/grandpa祖父、grandmother/grandma祖母',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-51', 'pe4-36']
          },
          {
            id: 'pe3-51', name: '家庭成员词汇（同辈及泛称）', difficulty: 1,
            keywords: ['brother', 'sister', 'man', 'woman', '兄弟', '姐妹', '男人', '女人'],
            concept: '掌握brother兄弟、sister姐妹的表达，以及man男人、woman女人的区分',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-50']
          },
          {
            id: 'pe3-52', name: 'Who\'s he/she?句型', difficulty: 1,
            keywords: ['Who\'s', 'He is', 'She is', '家庭成员问答'],
            concept: '学会用Who\'s he/she?询问某人身份，用He/She is my + 家庭成员称谓回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-50', 'pe3-51']
          },
          {
            id: 'pe3-53', name: 'This is my family.句型', difficulty: 1,
            keywords: ['This is my family', '介绍家庭'],
            concept: '学会用This is my family.引出家庭介绍，This is my + 称谓逐一介绍家庭成员',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe3-52']
          },
          {
            id: 'pe3-54', name: '人称代词he与she的区分', difficulty: 1,
            keywords: ['he', 'she', '人称代词', '性别区分'],
            concept: '学会正确区分he（他）和she（她）的使用，男性用he，女性用she',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-44', 'pe3-52']
          },
          {
            id: 'pe3-55', name: '家庭成员称谓记忆方法', difficulty: 1,
            keywords: ['称谓记忆', '家庭树', '家谱'],
            concept: '通过家庭树/家谱的方式记忆家庭成员称谓，理解辈分关系',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-50', 'pe3-51']
          },
          {
            id: 'pe3-56', name: '字母Oo-Pp认读与书写', difficulty: 1,
            keywords: ['字母', 'Oo', 'Pp', '书写'],
            concept: '学会字母Oo和Pp的正确读音和书写规范',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-49', 'pe3-63']
          }
        ]
      },
      {
        id: 'che3-9',
        title: 'Unit 3 At the zoo',
        icon: '🦁',
        semester: '下册',
        points: [
          {
            id: 'pe3-57', name: '描述词（大小高矮）', difficulty: 1,
            keywords: ['tall', 'short', 'big', 'small', 'long', '高', '矮', '大', '小', '长'],
            concept: '掌握描述体型的形容词：tall高、short矮/短、big大、small小、long长',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-58']
          },
          {
            id: 'pe3-58', name: '描述词（胖瘦）', difficulty: 1,
            keywords: ['fat', 'thin', '胖', '瘦'],
            concept: '掌握fat胖和thin瘦两个描述体型的形容词，了解反义词配对',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-57', 'pe3-60']
          },
          {
            id: 'pe3-59', name: 'It\'s so + 形容词.感叹句', difficulty: 1,
            keywords: ['It\'s so', '感叹句', '描述动物'],
            concept: '学会用It\'s so + 形容词!表达对动物特征的感叹，如It\'s so tall!',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-57', 'pe3-26']
          },
          {
            id: 'pe3-60', name: 'Come here. It has...描述特征', difficulty: 1,
            keywords: ['Come here', 'It has', '动物特征'],
            concept: '学会用It has + 身体部位描述动物特征，如It has long nose. 注意has表示"有"',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-15', 'pe3-57']
          },
          {
            id: 'pe3-61', name: 'Look at this/that...祈使句', difficulty: 1,
            keywords: ['Look at', '看', '祈使句'],
            concept: '学会用Look at this/that + 动物.引导他人看某动物并进行描述',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-17']
          },
          {
            id: 'pe3-62', name: '描述词反义词配对', difficulty: 1,
            keywords: ['反义词', 'tall-short', 'big-small', 'fat-thin', 'long-short'],
            concept: '掌握常见描述词的反义词配对：tall-short、big-small、fat-thin、long-short',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-57', 'pe3-58']
          },
          {
            id: 'pe3-63', name: '字母Qq-Rr认读与书写', difficulty: 1,
            keywords: ['字母', 'Qq', 'Rr', '书写'],
            concept: '学会字母Qq和Rr的正确读音和书写规范',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-56', 'pe3-70']
          }
        ]
      },
      {
        id: 'che3-10',
        title: 'Unit 4 Where is my car?',
        icon: '🚗',
        semester: '下册',
        points: [
          {
            id: 'pe3-64', name: '方位介词in、on、under', difficulty: 1,
            keywords: ['in', 'on', 'under', '在...里面', '在...上面', '在...下面'],
            concept: '掌握三个基本方位介词：in在...里面、on在...上面、under在...下面',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-65', 'pe5-29']
          },
          {
            id: 'pe3-65', name: 'Where is my...?句型', difficulty: 1,
            keywords: ['Where is', '位置询问', '物品位置'],
            concept: '学会用Where is my + 物品?询问物品位置，用It\'s in/on/under the...回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-64']
          },
          {
            id: 'pe3-66', name: 'Is it in/on/under...?一般疑问句', difficulty: 1,
            keywords: ['Is it', '一般疑问句', '肯定否定回答'],
            concept: '学会用Is it in/on/under the...?进行位置猜测，用Yes, it is./No, it isn\'t.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-65']
          },
          {
            id: 'pe3-67', name: '介词与地点搭配', difficulty: 1,
            keywords: ['on the desk', 'in the box', 'under the chair', '地点搭配'],
            concept: '学会将方位介词与常见地点搭配使用：on the desk在桌上、in the box在盒子里、under the chair在椅子下',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-64']
          },
          {
            id: 'pe3-68', name: 'On the desk/in the box/under the chair', difficulty: 1,
            keywords: ['短语搭配', '介词短语', '名词'],
            concept: '掌握介词短语的完整表达，能描述物品的具体位置',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pe3-64', 'pe3-67']
          },
          {
            id: 'pe3-69', name: 'Have a good time!祝福语', difficulty: 1,
            keywords: ['Have a good time', '祝福', '玩得开心'],
            concept: '学会用Have a good time!祝福对方玩得开心，了解该短语的使用场景',
            questionTypes: ['选择', '判断', '情景对话'],
            relatedPoints: ['pe3-34']
          },
          {
            id: 'pe3-70', name: '字母Ss-Tt认读与书写', difficulty: 1,
            keywords: ['字母', 'Ss', 'Tt', '书写'],
            concept: '学会字母Ss和Tt的正确读音和书写规范',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-63', 'pe3-77']
          }
        ]
      },
      {
        id: 'che3-11',
        title: 'Unit 5 Do you like pears?',
        icon: '🍐',
        semester: '下册',
        points: [
          {
            id: 'pe3-71', name: '水果词汇', difficulty: 1,
            keywords: ['apple', 'pear', 'orange', 'banana', 'watermelon', 'grape', 'strawberry', '苹果', '梨', '橙子', '香蕉', '西瓜', '葡萄', '草莓'],
            concept: '掌握七种水果的英文表达，注意orange既是"橙子"也是"橙色"',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-29', 'pe5-15']
          },
          {
            id: 'pe3-72', name: 'Do you like...?句型', difficulty: 1,
            keywords: ['Do you like', 'Yes, I do', 'No, I don\'t', '喜欢'],
            concept: '学会用Do you like + 名词?询问喜好，用Yes, I do./No, I don\'t.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-71', 'pe3-73']
          },
          {
            id: 'pe3-73', name: 'I like.../I don\'t like...句型', difficulty: 1,
            keywords: ['I like', 'I don\'t like', '表达喜好'],
            concept: '学会用I like + 名词表达喜欢某物，用I don\'t like + 名词表达不喜欢',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-72', 'pe3-32']
          },
          {
            id: 'pe3-74', name: 'Have an apple/pear...请客', difficulty: 1,
            keywords: ['Have an', '请客', 'a与an的区别'],
            concept: '学会用Have an + 水果名?请客，了解an用于元音音素开头的单词前',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-33']
          },
          {
            id: 'pe3-75', name: '水果的可数与不可数表达', difficulty: 1,
            keywords: ['可数名词', '不可数名词', 'some', 'a/an'],
            concept: '了解水果作为可数名词时可以用a/an或数字修饰，也可以用some修饰',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-71']
          },
          {
            id: 'pe3-76', name: 'Let\'s have some fruit.句型', difficulty: 1,
            keywords: ['Let\'s', '建议', '水果'],
            concept: '学会用Let\'s have some + 名词.提出建议，如Let\'s have some fruit.',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe3-72', 'pe3-73']
          },
          {
            id: 'pe3-77', name: '字母Uu-Vv认读与书写', difficulty: 1,
            keywords: ['字母', 'Uu', 'Vv', '书写'],
            concept: '学会字母Uu和Vv的正确读音和书写规范',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-70', 'pe3-84']
          }
        ]
      },
      {
        id: 'che3-12',
        title: 'Unit 6 How many?',
        icon: '🔢',
        semester: '下册',
        points: [
          {
            id: 'pe3-78', name: '数字11-20的英文表达', difficulty: 1,
            keywords: ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', '数字'],
            concept: '掌握数字11-20的英文表达，注意thirteen、fifteen、eighteen等特殊拼写',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pe3-36']
          },
          {
            id: 'pe3-79', name: 'How many...do you see/have?句型', difficulty: 1,
            keywords: ['How many', 'see', 'have', '数量询问'],
            concept: '学会用How many + 可数名词复数 + do you see/have?询问看到或拥有的物品数量',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-39', 'pe3-78']
          },
          {
            id: 'pe3-80', name: '数字的拼写与发音规则', difficulty: 1,
            keywords: ['数字拼写', '数字发音', 'teen后缀'],
            concept: '了解13-19的数字拼写规律：在3-9基础上加teen后缀，注意部分变化',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-78']
          },
          {
            id: 'pe3-81', name: 'I see/have + 数量 + 名词', difficulty: 1,
            keywords: ['I see', 'I have', '数量表达'],
            concept: '学会用I see/have + 数字 + 名词复数表达看到或拥有的物品数量',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-79']
          },
          {
            id: 'pe3-82', name: 'Let\'s count!祈使句', difficulty: 1,
            keywords: ['Let\'s count', '数数', '祈使句'],
            concept: '学会用Let\'s count!提议一起数数，在数数场景中运用数字',
            questionTypes: ['选择', '判断', '情景对话'],
            relatedPoints: ['pe3-78', 'pe3-79']
          },
          {
            id: 'pe3-83', name: '数字1-20的综合运用', difficulty: 2,
            keywords: ['数字综合', '计数', '数量表达'],
            concept: '综合运用数字1-20进行日常计数和数量表达，包括询问和回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-36', 'pe3-78']
          },
          {
            id: 'pe3-84', name: '字母Ww-Xx-Yy-Zz认读与书写', difficulty: 1,
            keywords: ['字母', 'Ww', 'Xx', 'Yy', 'Zz', '书写'],
            concept: '学会字母Ww、Xx、Yy、Zz的正确读音和书写规范，完成26个字母的学习',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-77']
          }
        ]
      }
    ]
  },

  // ========================
  // 四年级
  // ========================
  '4': {
    title: '四年级英语',
    icon: '🌍',
    color: '#4facfe',
    chapters: [
      // ========== 四年级上册 ==========
      {
        id: 'che4-1',
        title: 'Unit 1 My classroom',
        icon: '🏫',
        semester: '上册',
        points: [
          {
            id: 'pe4-1', name: '教室物品词汇', difficulty: 1,
            keywords: ['classroom', 'window', 'door', 'picture', 'board', 'light', 'fan', 'computer', '教室', '窗户', '门'],
            concept: '掌握教室常见物品的英文表达：classroom教室、window窗户、door门、picture图画、board黑板、light灯、fan风扇、computer电脑',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-8']
          },
          {
            id: 'pe4-2', name: 'What\'s in the classroom?句型', difficulty: 1,
            keywords: ['What\'s in', '教室物品询问'],
            concept: '学会用What\'s in the classroom?询问教室里有什么，用One blackboard, a TV...回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-1', 'pe3-24']
          },
          {
            id: 'pe4-3', name: '数量词在教室场景中的运用', difficulty: 1,
            keywords: ['one', 'many', '数量', '名词复数'],
            concept: '学会用one/many等数量词描述教室物品数量，如One blackboard, many desks and chairs',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-36', 'pe3-78']
          },
          {
            id: 'pe4-4', name: 'Where is it?方位句型', difficulty: 1,
            keywords: ['Where is it', '方位', 'near', 'in', 'on'],
            concept: '学会用Where is it?结合方位介词描述物品位置，It\'s near/in/on...',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-65', 'pe3-64']
          },
          {
            id: 'pe4-5', name: 'Let me/us clean the...祈使句', difficulty: 1,
            keywords: ['Let me', 'Let us', 'clean', '打扫', '祈使句'],
            concept: '学会用Let me/Let us clean the + 物品.提出打扫建议',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe3-76']
          },
          {
            id: 'pe4-6', name: '方位介词在教室中的综合应用', difficulty: 2,
            keywords: ['方位介词', '教室', 'near', 'beside', 'behind', 'in front of'],
            concept: '将方位介词扩展到教室场景中，学习near附近、beside旁边、behind后面等',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pe3-64', 'pe5-29']
          },
          {
            id: 'pe4-7', name: '大写字母的使用场景', difficulty: 1,
            keywords: ['大写字母', '句首', '专有名词', '标题'],
            concept: '了解大写字母的使用场景：句首、人名、地名、国名、星期、月份等的首字母大写',
            questionTypes: ['选择', '判断', '填空'],
            relatedPoints: ['pe3-84']
          }
        ]
      },
      {
        id: 'che4-2',
        title: 'Unit 2 My schoolbag',
        icon: '🎒',
        semester: '上册',
        points: [
          {
            id: 'pe4-8', name: '书包物品词汇', difficulty: 1,
            keywords: ['schoolbag', 'maths book', 'English book', 'Chinese book', 'storybook', 'candy', 'notebook', 'toy', 'key'],
            concept: '掌握书包相关物品的英文表达：schoolbag书包、maths book数学书、English book英语书、Chinese book语文书、storybook故事书、candy糖果、notebook笔记本、toy玩具、key钥匙',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-1', 'pe4-9']
          },
          {
            id: 'pe4-9', name: 'What\'s in your schoolbag?句型', difficulty: 1,
            keywords: ['What\'s in', '书包内容'],
            concept: '学会用What\'s in your schoolbag?询问书包里有什么，用An English book, a maths book...回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-2', 'pe4-8']
          },
          {
            id: 'pe4-10', name: 'What colour is it?颜色问答', difficulty: 1,
            keywords: ['What colour', '颜色', '书包'],
            concept: '在书包场景中运用What colour is it?询问物品颜色',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-10']
          },
          {
            id: 'pe4-11', name: 'I have a new...句型', difficulty: 1,
            keywords: ['I have a new', '新物品', '描述'],
            concept: '学会用I have a new + 物品.表达拥有新物品的喜悦',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-6', 'pe4-9']
          },
          {
            id: 'pe4-12', name: '名词单复数初步认知', difficulty: 2,
            keywords: ['单数', '复数', 's后缀', '名词变化'],
            concept: '初步了解名词复数的概念，知道book→books、candy→candies等变化规律',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe4-9']
          },
          {
            id: 'pe4-13', name: 'Thank you so much!感谢表达', difficulty: 1,
            keywords: ['Thank you so much', '非常感谢', '感谢'],
            concept: '学会用Thank you so much!表达强烈的感谢之情',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe3-34']
          },
          {
            id: 'pe4-14', name: '字母组合发音初步感知', difficulty: 2,
            keywords: ['字母组合', '发音', '自然拼读'],
            concept: '初步感知常见字母组合的发音规则，为后续自然拼读学习打基础',
            questionTypes: ['选择', '连线', '判断'],
            relatedPoints: ['pe3-84']
          }
        ]
      },
      {
        id: 'che4-3',
        title: 'Unit 3 My friends',
        icon: '👫',
        semester: '上册',
        points: [
          {
            id: 'pe4-15', name: '外貌描述词', difficulty: 1,
            keywords: ['strong', 'friendly', 'quiet', 'tall', 'short', 'thin', 'fat', '强壮', '友好', '安静'],
            concept: '掌握描述人物外貌和性格的形容词：strong强壮、friendly友好、quiet安静、tall高、short矮、thin瘦、fat胖',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-57', 'pe5-1']
          },
          {
            id: 'pe4-16', name: 'He/She has...描述外貌', difficulty: 1,
            keywords: ['He has', 'She has', '外貌描述', 'has'],
            concept: '学会用He/She has + 身体特征描述外貌，如He has short hair. She has big eyes.',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-60', 'pe4-15']
          },
          {
            id: 'pe4-17', name: 'He/She is + 形容词', difficulty: 1,
            keywords: ['He is', 'She is', '性格描述'],
            concept: '学会用He/She is + 形容词描述人物特征，如He is tall and strong.',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-15', 'pe4-16']
          },
          {
            id: 'pe4-18', name: 'What\'s his/her name?句型', difficulty: 1,
            keywords: ['What\'s his name', 'What\'s her name', '询问姓名'],
            concept: '学会用What\'s his/her name?询问第三方姓名，用His/Her name is...回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-5', 'pe3-54']
          },
          {
            id: 'pe4-19', name: '外貌描述的完整表达', difficulty: 2,
            keywords: ['完整描述', '外貌特征', 'has与is搭配'],
            concept: '综合使用has和is描述一个人的外貌和性格，如My friend is tall. She has long hair and big eyes.',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-16', 'pe4-17']
          },
          {
            id: 'pe4-20', name: 'His/Her glasses are...描述', difficulty: 1,
            keywords: ['glasses', '眼镜', 'His/Her', '描述配饰'],
            concept: '学会用His/Her glasses are + 形容词描述眼镜特征',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe4-15']
          },
          {
            id: 'pe4-21', name: '描述人物的完整句型组合', difficulty: 2,
            keywords: ['人物描述', '综合运用', '形容词排列'],
            concept: '将形容词、has句型、is句型组合运用，完整描述一个人的外貌和性格特征',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-15', 'pe4-16', 'pe4-17']
          }
        ]
      },
      {
        id: 'che4-4',
        title: 'Unit 4 My home',
        icon: '🏠',
        semester: '上册',
        points: [
          {
            id: 'pe4-22', name: '房间词汇', difficulty: 1,
            keywords: ['bedroom', 'living room', 'study', 'kitchen', 'bathroom', '卧室', '客厅', '书房', '厨房', '浴室'],
            concept: '掌握五个房间的英文表达：bedroom卧室、living room客厅、study书房、kitchen厨房、bathroom浴室',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe5-29']
          },
          {
            id: 'pe4-23', name: '家具词汇', difficulty: 1,
            keywords: ['bed', 'phone', 'table', 'sofa', 'fridge', '床', '电话', '桌子', '沙发', '冰箱'],
            concept: '掌握五种家具/电器的英文表达：bed床、phone电话、table桌子、sofa沙发、fridge冰箱',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-22']
          },
          {
            id: 'pe4-24', name: 'Is she/he/it in the...?句型', difficulty: 1,
            keywords: ['Is she', 'Is he', 'Is it', '位置猜测'],
            concept: '学会用Is she/he/it in the + 房间?进行位置猜测，用Yes, she/he/it is.或No, she/he/it isn\'t.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-66', 'pe4-22']
          },
          {
            id: 'pe4-25', name: 'Where are my keys/cars/books?复数形式', difficulty: 1,
            keywords: ['Where are', '复数物品', '位置'],
            concept: '学会用Where are my + 名词复数?询问多个物品的位置，用They\'re in/on/under...回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-65', 'pe4-12']
          },
          {
            id: 'pe4-26', name: 'Open the door, please.祈使句', difficulty: 1,
            keywords: ['Open', 'please', '祈使句', '礼貌表达'],
            concept: '学会用Open/Turn on/Go to + 地点的祈使句，并用please表示礼貌',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe4-5']
          },
          {
            id: 'pe4-27', name: '房间与家具的搭配', difficulty: 2,
            keywords: ['房间搭配', '家具摆放', 'home'],
            concept: '了解不同房间中通常放置的家具，如bedroom有bed，kitchen有fridge',
            questionTypes: ['选择', '连线', '判断'],
            relatedPoints: ['pe4-22', 'pe4-23']
          },
          {
            id: 'pe4-28', name: 'Have a snack/Take a shower等日常活动', difficulty: 1,
            keywords: ['have a snack', 'take a shower', 'read a book', '日常活动'],
            concept: '学习描述家中日常活动的短语：have a snack吃零食、take a shower洗澡、read a book看书',
            questionTypes: ['选择', '连线', '判断'],
            relatedPoints: ['pe4-26', 'pe5-43']
          }
        ]
      },
      {
        id: 'che4-5',
        title: 'Unit 5 Dinner\'s ready',
        icon: '🍽️',
        semester: '上册',
        points: [
          {
            id: 'pe4-29', name: '食物词汇（正餐）', difficulty: 1,
            keywords: ['beef', 'chicken', 'noodles', 'soup', 'vegetable', '牛肉', '鸡肉', '面条', '汤', '蔬菜'],
            concept: '掌握五种正餐食物的英文表达：beef牛肉、chicken鸡肉、noodles面条、soup汤、vegetable蔬菜',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-29', 'pe3-71']
          },
          {
            id: 'pe4-30', name: '餐具词汇', difficulty: 1,
            keywords: ['chopsticks', 'bowl', 'fork', 'knife', 'spoon', '筷子', '碗', '叉子', '刀', '勺子'],
            concept: '掌握五种餐具的英文表达：chopsticks筷子、bowl碗、fork叉子、knife刀、spoon勺子',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-29']
          },
          {
            id: 'pe4-31', name: 'What would you like?句型', difficulty: 1,
            keywords: ['What would you like', 'I\'d like', '点餐'],
            concept: '学会用What would you like?询问对方想吃什么，用I\'d like some + 食物.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-31', 'pe5-15']
          },
          {
            id: 'pe4-32', name: 'Help yourself.自便表达', difficulty: 1,
            keywords: ['Help yourself', '请自便', '用餐礼貌'],
            concept: '学会用Help yourself.请客人自便用餐，了解西方用餐礼仪',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe4-31']
          },
          {
            id: 'pe4-33', name: 'Would you like a knife and fork or chopsticks?', difficulty: 2,
            keywords: ['Would you like', '选择疑问句', '餐具选择'],
            concept: '学会用选择疑问句询问餐具偏好：Would you like a knife and fork or chopsticks?',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe4-30', 'pe4-31']
          },
          {
            id: 'pe4-34', name: 'Dinner\'s ready!日常用语', difficulty: 1,
            keywords: ['Dinner\'s ready', '晚餐好了', '日常用语'],
            concept: '学会用Dinner\'s ready!通知家人晚餐准备好了，了解日常生活场景用语',
            questionTypes: ['选择', '判断', '情景对话'],
            relatedPoints: ['pe4-31']
          },
          {
            id: 'pe4-35', name: '食物与餐具的搭配表达', difficulty: 2,
            keywords: ['食物搭配', '餐具搭配', '文化差异'],
            concept: '了解中西方餐具使用的差异，学会表达用不同餐具吃不同食物',
            questionTypes: ['选择', '判断', '连线'],
            relatedPoints: ['pe4-30', 'pe4-33']
          }
        ]
      },
      {
        id: 'che4-6',
        title: 'Unit 6 Meet my family',
        icon: '👨‍👩‍👧',
        semester: '上册',
        points: [
          {
            id: 'pe4-36', name: '职业词汇', difficulty: 1,
            keywords: ['doctor', 'nurse', 'farmer', 'driver', 'cook', 'player', '医生', '护士', '农民', '司机', '厨师'],
            concept: '掌握六种职业的英文表达：doctor医生、nurse护士、farmer农民、driver司机、cook厨师、player运动员',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe6-29']
          },
          {
            id: 'pe4-37', name: '家庭成员扩展词汇', difficulty: 1,
            keywords: ['uncle', 'aunt', 'baby', 'cousin', '叔叔', '阿姨', '婴儿', '堂/表兄弟姐妹'],
            concept: '掌握扩展家庭成员词汇：uncle叔叔/舅舅、aunt阿姨/姑姑、baby婴儿、cousin堂/表兄弟姐妹',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-50', 'pe3-51']
          },
          {
            id: 'pe4-38', name: 'What\'s your father\'s/mother\'s job?句型', difficulty: 1,
            keywords: ['What\'s ... job', '职业询问', '职业回答'],
            concept: '学会用What\'s your + 家庭成员 + job?询问职业，用He/She is a + 职业.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-36', 'pe6-33']
          },
          {
            id: 'pe4-39', name: 'How many people are there in your family?', difficulty: 1,
            keywords: ['How many people', '家庭人数', 'There are'],
            concept: '学会用How many people are there in your family?询问家庭人数',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-39']
          },
          {
            id: 'pe4-40', name: 'Is this your...?句型', difficulty: 1,
            keywords: ['Is this your', '确认关系', '家庭成员'],
            concept: '学会用Is this your + 家庭成员/职业?确认照片或描述中的人物关系',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe3-66']
          },
          {
            id: 'pe4-41', name: '职业词汇的记忆方法', difficulty: 1,
            keywords: ['职业记忆', '分类记忆', '联想记忆'],
            concept: '通过工作场所、工具等方式分类记忆职业词汇，如farmer在farm上工作',
            questionTypes: ['选择', '连线', '判断'],
            relatedPoints: ['pe4-36']
          },
          {
            id: 'pe4-42', name: '完整的家庭介绍表达', difficulty: 2,
            keywords: ['家庭介绍', '综合表达', '人物描述'],
            concept: '综合运用家庭成员词汇、职业词汇和描述句型，完整介绍家庭成员',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-36', 'pe4-37', 'pe4-38']
          }
        ]
      },
      // ========== 四年级下册 ==========
      {
        id: 'che4-7',
        title: 'Unit 1 My school',
        icon: '🏫',
        semester: '下册',
        points: [
          {
            id: 'pe4-43', name: '学校设施词汇', difficulty: 1,
            keywords: ['first floor', 'second floor', 'teachers\' office', 'library', 'playground', 'computer room', 'art room', 'music room'],
            concept: '掌握学校设施词汇：first/second floor一楼/二楼、teachers\' office教师办公室、library图书馆、playground操场、computer room计算机教室、art room美术教室、music room音乐教室',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-1']
          },
          {
            id: 'pe4-44', name: 'Where is the...?句型', difficulty: 1,
            keywords: ['Where is the', '设施位置', '楼层'],
            concept: '学会用Where is the + 设施名?询问设施位置，用It\'s on the first/second floor.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-65', 'pe4-43']
          },
          {
            id: 'pe4-45', name: 'Is this/that the...?句型', difficulty: 1,
            keywords: ['Is this', 'Is that', '确认设施'],
            concept: '学会用Is this/that the + 设施名?确认是否为某个设施，用Yes/No回答',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe3-66']
          },
          {
            id: 'pe4-46', name: '数字在楼层中的表达', difficulty: 1,
            keywords: ['first floor', 'second floor', '楼层表达', '序数词'],
            concept: '了解楼层用序数词表达：first floor一楼、second floor二楼',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-36', 'pe5-64']
          },
          {
            id: 'pe4-47', name: 'Go to the library. Read a book.祈使句', difficulty: 1,
            keywords: ['Go to', '祈使句', '学校活动'],
            concept: '学会用Go to the + 地点. Read a book.等祈使句描述学校活动',
            questionTypes: ['选择', '连线', '情景对话'],
            relatedPoints: ['pe4-26']
          },
          {
            id: 'pe4-48', name: 'Do you have a...?句型', difficulty: 1,
            keywords: ['Do you have', '学校设施询问'],
            concept: '学会用Do you have a + 设施名?询问学校是否有某设施，用Yes, we do./No, we don\'t.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-43']
          },
          {
            id: 'pe4-49', name: '学校设施的方位描述', difficulty: 2,
            keywords: ['方位描述', '学校布局', '介词运用'],
            concept: '综合运用方位介词和地点词汇，描述学校设施的方位和布局',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-43', 'pe4-44']
          }
        ]
      },
      {
        id: 'che4-8',
        title: 'Unit 2 What time is it?',
        icon: '🕐',
        semester: '下册',
        points: [
          {
            id: 'pe4-50', name: 'o\'clock整点表达', difficulty: 1,
            keywords: ['o\'clock', '整点', '时间'],
            concept: '学会用It\'s + 数字 + o\'clock.表达整点时间，如It\'s seven o\'clock.',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe4-51']
          },
          {
            id: 'pe4-51', name: 'What time is it?句型', difficulty: 1,
            keywords: ['What time is it', '时间询问'],
            concept: '学会用What time is it?询问时间，用It\'s + 时间.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-50']
          },
          {
            id: 'pe4-52', name: 'It\'s time for/to...句型', difficulty: 1,
            keywords: ['It\'s time for', 'It\'s time to', '时间与活动'],
            concept: '学会用It\'s time for + 名词/It\'s time to + 动词原形表达"到做某事的时间了"',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe4-51', 'pe4-53']
          },
          {
            id: 'pe4-53', name: '日常活动词汇', difficulty: 1,
            keywords: ['breakfast', 'lunch', 'dinner', 'English class', 'music class', 'PE class', '早餐', '午餐', '晚餐'],
            concept: '掌握日常活动词汇：breakfast早餐、lunch午餐、dinner晚餐、English class英语课、music class音乐课、PE class体育课',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-52']
          },
          {
            id: 'pe4-54', name: 'Hurry up! Time to go to school.', difficulty: 1,
            keywords: ['Hurry up', '赶快', 'Time to', '上学'],
            concept: '学会用Hurry up!催促对方快点，Time to + 动词原形表示到做某事的时间了',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe4-52']
          },
          {
            id: 'pe4-55', name: '时间表达的完整句型', difficulty: 2,
            keywords: ['时间表达', '完整句型', '时间问答'],
            concept: '综合运用What time is it?和It\'s...o\'clock.等句型进行完整的时间问答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-50', 'pe4-51']
          },
          {
            id: 'pe4-56', name: '日常作息时间的描述', difficulty: 2,
            keywords: ['作息时间', '日常安排', '时间描述'],
            concept: '学会描述自己一天的作息时间安排，将时间与日常活动搭配表达',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-52', 'pe4-53']
          }
        ]
      },
      {
        id: 'che4-9',
        title: 'Unit 3 Weather',
        icon: '☀️',
        semester: '下册',
        points: [
          {
            id: 'pe4-57', name: '天气词汇（温度感受）', difficulty: 1,
            keywords: ['warm', 'cold', 'cool', 'hot', '温暖', '寒冷', '凉爽', '炎热'],
            concept: '掌握四种温度感受词汇：warm温暖、cold寒冷、cool凉爽、hot炎热',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-58']
          },
          {
            id: 'pe4-58', name: '天气词汇（天气状况）', difficulty: 1,
            keywords: ['sunny', 'windy', 'cloudy', 'snowy', 'rainy', '晴天', '多风', '多云', '下雪', '下雨'],
            concept: '掌握五种天气状况词汇：sunny晴天、windy多风、cloudy多云、snowy下雪、rainy下雨',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-57', 'pe5-50']
          },
          {
            id: 'pe4-59', name: 'What\'s the weather like?句型', difficulty: 1,
            keywords: ['What\'s the weather like', '天气询问', 'in + 地点'],
            concept: '学会用What\'s the weather like in + 地点?询问某地天气，用It\'s + 天气形容词.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-57', 'pe4-58']
          },
          {
            id: 'pe4-60', name: 'Can I go outside? Can I wear my...?', difficulty: 1,
            keywords: ['Can I', '请求许可', '外出', '穿衣服'],
            concept: '学会用Can I...?请求许可，Can I go outside?我可以出去吗？Can I wear my...?我可以穿...吗？',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe3-31']
          },
          {
            id: 'pe4-61', name: '天气与地点的搭配', difficulty: 2,
            keywords: ['天气搭配', '地点', '城市'],
            concept: '学会将天气描述与具体地点搭配，描述不同城市的天气状况',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-59']
          },
          {
            id: 'pe4-62', name: 'I have to wear...必要性表达', difficulty: 2,
            keywords: ['have to', '必须', '穿衣服', '必要性'],
            concept: '学会用I have to wear...表达因天气原因必须穿某衣物',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe4-60']
          },
          {
            id: 'pe4-63', name: '天气预报的简单理解', difficulty: 2,
            keywords: ['天气预报', '综合描述', '天气信息'],
            concept: '能简单理解天气预报内容，综合运用天气词汇描述天气情况',
            questionTypes: ['选择', '判断', '情景对话'],
            relatedPoints: ['pe4-57', 'pe4-58', 'pe4-59']
          }
        ]
      },
      {
        id: 'che4-10',
        title: 'Unit 4 At the farm',
        icon: '🌾',
        semester: '下册',
        points: [
          {
            id: 'pe4-64', name: '蔬菜词汇', difficulty: 1,
            keywords: ['tomato', 'potato', 'carrot', '西红柿', '土豆', '胡萝卜'],
            concept: '掌握三种蔬菜的英文表达：tomato西红柿、potato土豆、carrot胡萝卜',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-65']
          },
          {
            id: 'pe4-65', name: '农场动物词汇', difficulty: 1,
            keywords: ['horse', 'cow', 'sheep', 'hen', '马', '牛', '绵羊', '母鸡'],
            concept: '掌握四种农场动物的英文表达：horse马、cow奶牛、sheep绵羊、hen母鸡',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-22', 'pe3-23']
          },
          {
            id: 'pe4-66', name: 'Are these/those...?句型', difficulty: 1,
            keywords: ['Are these', 'Are those', '复数疑问句'],
            concept: '学会用Are these/those + 名词复数?询问近处/远处多个物品，用Yes, they are./No, they aren\'t.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-66']
          },
          {
            id: 'pe4-67', name: 'What are these/those?句型', difficulty: 1,
            keywords: ['What are these', 'What are those', '询问物品'],
            concept: '学会用What are these/those?询问近处/远处多个物品是什么，用They\'re...回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-24', 'pe4-66']
          },
          {
            id: 'pe4-68', name: 'How many...are there?句型', difficulty: 1,
            keywords: ['How many', '数量询问', '复数'],
            concept: '学会用How many + 名词复数 + are there?询问某处物品数量',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe3-39', 'pe3-79']
          },
          {
            id: 'pe4-69', name: '指示代词this/these与that/those的区别', difficulty: 2,
            keywords: ['this', 'these', 'that', 'those', '指示代词', '单复数'],
            concept: '区分this(这个)与these(这些)指近处，that(那个)与those(那些)指远处，注意单复数对应',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe4-66', 'pe4-67']
          },
          {
            id: 'pe4-70', name: '名词复数的规则变化', difficulty: 2,
            keywords: ['名词复数', '规则变化', 's', 'es', 'ies'],
            concept: '掌握名词复数的规则变化：一般加s、以s/x/ch/sh结尾加es、辅音+y结尾变y为ies',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe4-12', 'pe4-69']
          }
        ]
      },
      {
        id: 'che4-11',
        title: 'Unit 5 My clothes',
        icon: '👗',
        semester: '下册',
        points: [
          {
            id: 'pe4-71', name: '衣物词汇', difficulty: 1,
            keywords: ['clothes', 'pants', 'hat', 'dress', 'skirt', 'coat', 'sweater', 'sock', 'short', 'jacket', 'shirt', '衣服', '裤子', '帽子', '裙子'],
            concept: '掌握多种衣物词汇：clothes衣服、pants裤子、hat帽子、dress连衣裙、skirt短裙、coat外套、sweater毛衣、sock袜子、short短裤、jacket夹克、shirt衬衫',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-62']
          },
          {
            id: 'pe4-72', name: 'Whose coat/pants/hat is this/are these?句型', difficulty: 1,
            keywords: ['Whose', '物品归属', '所有格'],
            concept: '学会用Whose + 衣物名 + is this/are these?询问衣物归属，用It\'s/They\'re + 人名\'s.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-71']
          },
          {
            id: 'pe4-73', name: 'Are these yours? Is this John\'s?', difficulty: 1,
            keywords: ['yours', 'John\'s', '物主代词', '名词所有格'],
            concept: '学会用Are these yours?确认物品归属，Is this John\'s?使用名词所有格\'s形式',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-72']
          },
          {
            id: 'pe4-74', name: 'Put on your...等穿衣祈使句', difficulty: 1,
            keywords: ['Put on', 'Take off', 'Hang up', 'Wash', '穿衣动作'],
            concept: '学会穿衣相关祈使句：Put on穿上、Take off脱下、Hang up挂起、Wash洗',
            questionTypes: ['选择', '连线', '情景对话'],
            relatedPoints: ['pe4-26']
          },
          {
            id: 'pe4-75', name: '形容词性物主代词与名词所有格', difficulty: 2,
            keywords: ['物主代词', '名词所有格', 'my', 'your', 'his', 'her', 'mine', 'yours'],
            concept: '区分形容词性物主代词(my/your/his/her)和名词所有格(人名+\'s)的用法',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe4-72', 'pe4-73']
          },
          {
            id: 'pe4-76', name: '衣物归属的问答练习', difficulty: 2,
            keywords: ['归属问答', '综合运用', '对话练习'],
            concept: '综合运用Whose和所有格进行衣物归属的完整问答练习',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-72', 'pe4-73', 'pe4-75']
          },
          {
            id: 'pe4-77', name: '衣物与场合的搭配', difficulty: 1,
            keywords: ['场合搭配', '天气搭配', '穿衣选择'],
            concept: '了解不同场合和天气条件下选择合适的衣物穿着',
            questionTypes: ['选择', '连线', '判断'],
            relatedPoints: ['pe4-71', 'pe4-57']
          }
        ]
      },
      {
        id: 'che4-12',
        title: 'Unit 6 Shopping',
        icon: '🛒',
        semester: '下册',
        points: [
          {
            id: 'pe4-78', name: '购物词汇（配饰）', difficulty: 1,
            keywords: ['sunglasses', 'gloves', 'scarf', 'umbrella', '太阳镜', '手套', '围巾', '雨伞'],
            concept: '掌握四种配饰的英文表达：sunglasses太阳镜、gloves手套、scarf围巾、umbrella雨伞',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-71']
          },
          {
            id: 'pe4-79', name: '购物形容词', difficulty: 1,
            keywords: ['pretty', 'expensive', 'cheap', 'nice', '漂亮', '贵', '便宜', '好'],
            concept: '掌握四个描述商品的形容词：pretty漂亮的、expensive贵的、cheap便宜的、nice好的',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-78']
          },
          {
            id: 'pe4-80', name: 'Can I help you?购物开场白', difficulty: 1,
            keywords: ['Can I help you', '购物服务', '开场白'],
            concept: '了解购物场景的开场白：Can I help you?我能帮您吗？',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe4-81']
          },
          {
            id: 'pe4-81', name: 'How much is it/are they?价格询问', difficulty: 1,
            keywords: ['How much', '价格', '多少钱'],
            concept: '学会用How much is it?询问单件物品价格，How much are they?询问多件物品价格',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-82']
          },
          {
            id: 'pe4-82', name: 'It\'s/They\'re + 价格 + yuan.价格表达', difficulty: 1,
            keywords: ['价格表达', 'yuan', '数字'],
            concept: '学会用It\'s/They\'re + 数字 + yuan.回答物品价格，注意单复数主语的区别',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-81']
          },
          {
            id: 'pe4-83', name: '购物对话的完整流程', difficulty: 2,
            keywords: ['购物对话', '完整流程', '情景交际'],
            concept: '掌握购物对话的完整流程：打招呼→挑选商品→询问价格→评价→决定购买',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe4-80', 'pe4-81', 'pe4-82']
          },
          {
            id: 'pe4-84', name: 'I\'ll take it.购买决定表达', difficulty: 1,
            keywords: ['I\'ll take it', '购买', '决定'],
            concept: '学会用I\'ll take it/them.表达决定购买某物',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe4-83']
          }
        ]
      }
    ]
  },

  // ========================
  // 五年级
  // ========================
  '5': {
    title: '五年级英语',
    icon: '🌍',
    color: '#4facfe',
    chapters: [
      // ========== 五年级上册 ==========
      {
        id: 'che5-1',
        title: 'Unit 1 What\'s he like?',
        icon: '🧑',
        semester: '上册',
        points: [
          {
            id: 'pe5-1', name: '性格描述词（正面）', difficulty: 2,
            keywords: ['old', 'young', 'funny', 'kind', 'polite', 'clever', 'helpful', '老的', '年轻的', '有趣的', '和蔼的', '有礼貌的', '聪明的'],
            concept: '掌握描述人物性格的正面形容词：old老的、young年轻的、funny有趣的、kind和蔼的、polite有礼貌的、clever聪明的、helpful乐于助人的',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe5-2', 'pe4-15']
          },
          {
            id: 'pe5-2', name: '性格描述词（其他）', difficulty: 2,
            keywords: ['strict', 'hard-working', 'shy', 'quiet', 'strict', '严厉的', '勤奋的', '害羞的'],
            concept: '掌握strict严厉的、hard-working勤奋的、shy害羞的等性格描述词',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe5-1']
          },
          {
            id: 'pe5-3', name: 'Who\'s your...teacher? What\'s he/she like?句型', difficulty: 2,
            keywords: ['What\'s he like', 'What\'s she like', '询问性格'],
            concept: '学会用Who\'s your + 科目 + teacher?询问老师，What\'s he/she like?询问某人性格特征',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-1', 'pe5-2']
          },
          {
            id: 'pe5-4', name: 'He/She is kind/strict/funny...回答', difficulty: 2,
            keywords: ['He is', 'She is', '性格回答'],
            concept: '学会用He/She is + 性格形容词回答性格询问，如He is very kind.',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-3']
          },
          {
            id: 'pe5-5', name: 'Is he/she...?一般疑问句', difficulty: 2,
            keywords: ['Is he', 'Is she', '性格确认'],
            concept: '学会用Is he/she + 性格形容词?确认某人是否具有某种特征，用Yes/No回答',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe5-3', 'pe5-4']
          },
          {
            id: 'pe5-6', name: '描述人物性格特征的完整表达', difficulty: 2,
            keywords: ['完整描述', '性格特征', '综合运用'],
            concept: '综合运用多个性格形容词完整描述一个人，如He is tall and strict. She is young and funny.',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-1', 'pe5-2', 'pe5-4']
          },
          {
            id: 'pe5-7', name: '形容词在句中的位置', difficulty: 2,
            keywords: ['形容词位置', 'be动词后', '名词前'],
            concept: '了解形容词放在be动词后作表语(He is kind)或放在名词前作定语(a kind teacher)',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-1', 'pe4-15']
          }
        ]
      },
      {
        id: 'che5-2',
        title: 'Unit 2 My week',
        icon: '📅',
        semester: '上册',
        points: [
          {
            id: 'pe5-8', name: '星期词汇', difficulty: 2,
            keywords: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
            concept: '掌握星期一到星期日的英文表达，注意首字母大写，Monday到Sunday',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe5-9']
          },
          {
            id: 'pe5-9', name: '课程词汇', difficulty: 2,
            keywords: ['Chinese', 'English', 'maths', 'music', 'PE', 'science', 'art', 'computer class', '语文', '英语', '数学', '音乐', '体育', '科学', '美术'],
            concept: '掌握主要课程的英文表达：Chinese语文、English英语、maths数学、music音乐、PE体育、science科学、art美术、computer class计算机课',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe5-8']
          },
          {
            id: 'pe5-10', name: 'What do you have on Mondays?句型', difficulty: 2,
            keywords: ['What do you have', '课程安排', 'on + 星期'],
            concept: '学会用What do you have on + 星期?询问某天的课程安排，用I have + 课程名.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-8', 'pe5-9']
          },
          {
            id: 'pe5-11', name: 'What do you do on weekends?句型', difficulty: 2,
            keywords: ['What do you do', '周末活动', '频率表达'],
            concept: '学会用What do you do on weekends/Saturdays?询问周末活动，用I often/usually/sometimes...回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-10', 'pe5-12']
          },
          {
            id: 'pe5-12', name: '频率副词的使用', difficulty: 2,
            keywords: ['often', 'usually', 'sometimes', '频率副词', '频度'],
            concept: '掌握频率副词：often经常(60%)、usually通常(80%)、sometimes有时(30%)，了解它们在句中的位置',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-11']
          },
          {
            id: 'pe5-13', name: '一周活动的安排与描述', difficulty: 2,
            keywords: ['活动安排', '一周计划', '综合表达'],
            concept: '综合运用星期词汇和活动短语，描述一周的课程和活动安排',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-8', 'pe5-10', 'pe5-11']
          },
          {
            id: 'pe5-14', name: '星期的缩写形式', difficulty: 2,
            keywords: ['缩写', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            concept: '了解星期的常见缩写形式：Mon., Tue., Wed., Thu., Fri., Sat., Sun.',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pe5-8']
          }
        ]
      },
      {
        id: 'che5-3',
        title: 'Unit 3 What would you like?',
        icon: '🍕',
        semester: '上册',
        points: [
          {
            id: 'pe5-15', name: '食物词汇（进阶）', difficulty: 2,
            keywords: ['sandwich', 'salad', 'hamburger', 'ice cream', 'tea', '三明治', '沙拉', '汉堡', '冰淇淋', '茶'],
            concept: '掌握进阶食物词汇：sandwich三明治、salad沙拉、hamburger汉堡、ice cream冰淇淋、tea茶',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-29', 'pe4-29']
          },
          {
            id: 'pe5-16', name: '食物描述形容词', difficulty: 2,
            keywords: ['fresh', 'healthy', 'delicious', 'sweet', 'hot', '新鲜的', '健康的', '美味的', '甜的', '辣的'],
            concept: '掌握食物描述形容词：fresh新鲜的、healthy健康的、delicious美味的、sweet甜的、hot辣的',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe5-15']
          },
          {
            id: 'pe5-17', name: 'What would you like to eat/drink?句型', difficulty: 2,
            keywords: ['What would you like', 'to eat', 'to drink', '点餐'],
            concept: '学会用What would you like to eat/drink?询问想吃/喝什么，用I\'d like + 食物/饮料.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-31']
          },
          {
            id: 'pe5-18', name: 'What\'s your favourite food/drink?句型', difficulty: 2,
            keywords: ['favourite', '最喜欢', '食物偏好'],
            concept: '学会用What\'s your favourite food/drink?询问最喜欢的食品，用My favourite food/drink is...回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-15', 'pe5-17']
          },
          {
            id: 'pe5-19', name: 'I love/like... They\'re delicious.表达', difficulty: 2,
            keywords: ['I love', 'delicious', '食物评价'],
            concept: '学会用I love/like + 食物.和They\'re + 形容词.表达对食物的喜爱和评价',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-32', 'pe5-16']
          },
          {
            id: 'pe5-20', name: '可数与不可数名词在食物中的应用', difficulty: 2,
            keywords: ['可数名词', '不可数名词', 'some', 'a/an'],
            concept: '区分食物中的可数名词(sandwich→sandwiches)和不可数名词(salad, tea, ice cream)',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe3-75', 'pe4-12']
          },
          {
            id: 'pe5-21', name: '点餐场景的完整对话', difficulty: 2,
            keywords: ['点餐对话', '综合运用', '情景交际'],
            concept: '综合运用点餐句型完成完整的点餐场景对话，包括询问、回答和确认',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-17', 'pe5-18']
          }
        ]
      },
      {
        id: 'che5-4',
        title: 'Unit 4 What can you do?',
        icon: '💪',
        semester: '上册',
        points: [
          {
            id: 'pe5-22', name: '能力动词', difficulty: 2,
            keywords: ['sing', 'dance', 'draw', 'cook', 'swim', 'play', 'do kung fu', 'speak English', '唱歌', '跳舞', '画画', '做饭', '游泳'],
            concept: '掌握常见能力动词：sing唱歌、dance跳舞、draw画画、cook做饭、swim游泳、play打/弹、do kung fu练功夫、speak English说英语',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe5-23']
          },
          {
            id: 'pe5-23', name: 'What can you do? I can...句型', difficulty: 2,
            keywords: ['What can you do', 'I can', '能力询问'],
            concept: '学会用What can you do?询问对方能力，用I can + 动词原形.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-22']
          },
          {
            id: 'pe5-24', name: 'Can you...?一般疑问句', difficulty: 2,
            keywords: ['Can you', '能力确认', 'Yes I can', 'No I can\'t'],
            concept: '学会用Can you + 动词原形?确认对方是否具有某种能力，用Yes, I can./No, I can\'t.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-23']
          },
          {
            id: 'pe5-25', name: 'play + 球类/乐器的区别', difficulty: 2,
            keywords: ['play + 球类', 'play the + 乐器', '介词区别'],
            concept: '区分play + 球类(不加the)和play the + 乐器(加the)的用法，如play basketball/play the piano',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-22']
          },
          {
            id: 'pe5-26', name: 'I can do some kung fu.动作表达', difficulty: 2,
            keywords: ['do kung fu', 'do + 动作', 'some用法'],
            concept: '学会用I can do some kung fu.等表达能力，注意do与动词的搭配',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-22', 'pe5-23']
          },
          {
            id: 'pe5-27', name: 'No problem.回应能力询问', difficulty: 2,
            keywords: ['No problem', '没问题', '回应'],
            concept: '学会用No problem.回应对方的能力请求，表示没问题、可以做到',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe5-24']
          },
          {
            id: 'pe5-28', name: '能力动词与宾语的搭配', difficulty: 2,
            keywords: ['动宾搭配', '能力表达', '固定搭配'],
            concept: '掌握能力动词与宾语的固定搭配：sing songs、draw cartoons、do kung fu、speak English',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe5-22', 'pe5-26']
          }
        ]
      },
      {
        id: 'che5-5',
        title: 'Unit 5 There is a big bed',
        icon: '🛏️',
        semester: '上册',
        points: [
          {
            id: 'pe5-29', name: '家具与房间物品词汇', difficulty: 2,
            keywords: ['clock', 'plant', 'bottle', 'water bottle', 'bike', 'photo', '时钟', '植物', '瓶子', '自行车', '照片'],
            concept: '掌握房间物品词汇：clock时钟、plant植物、bottle瓶子、water bottle水瓶、bike自行车、photo照片',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-23', 'pe4-22']
          },
          {
            id: 'pe5-30', name: 'There is a/an...句型', difficulty: 2,
            keywords: ['There is', '单数存在句', 'there be'],
            concept: '学会用There is a/an + 单数名词 + 方位介词短语描述某处有一个物品',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-31']
          },
          {
            id: 'pe5-31', name: 'There are...句型', difficulty: 2,
            keywords: ['There are', '复数存在句', 'there be'],
            concept: '学会用There are + 复数名词 + 方位介词短语描述某处有多个物品',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-30']
          },
          {
            id: 'pe5-32', name: '方位介词短语的扩展', difficulty: 2,
            keywords: ['in front of', 'between', 'above', 'beside', 'behind', '在...前面', '在...之间', '在...上方', '在...旁边', '在...后面'],
            concept: '掌握扩展方位介词：in front of在...前面、between在...之间、above在...上方、beside在...旁边、behind在...后面',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe3-64', 'pe4-6']
          },
          {
            id: 'pe5-33', name: 'The room is really nice.描述房间', difficulty: 2,
            keywords: ['really', 'nice', 'beautiful', '房间描述'],
            concept: '学会用形容词描述房间整体特征：The room is really nice/beautiful/natural.',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-29']
          },
          {
            id: 'pe5-34', name: 'There be句型的一般疑问句与否定句', difficulty: 2,
            keywords: ['Is there', 'Are there', 'There isn\'t', 'There aren\'t', '否定句'],
            concept: '学会There be句型的一般疑问句(Is there...?Are there...?)和否定句(There isn\'t/aren\'t...)',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-30', 'pe5-31']
          },
          {
            id: 'pe5-35', name: '描述房间的完整表达', difficulty: 2,
            keywords: ['房间描述', '综合运用', '方位表达'],
            concept: '综合运用There be句型和方位介词完整描述一个房间的物品及其位置',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-30', 'pe5-31', 'pe5-32']
          }
        ]
      },
      {
        id: 'che5-6',
        title: 'Unit 6 In a nature park',
        icon: '🏞️',
        semester: '上册',
        points: [
          {
            id: 'pe5-36', name: '自然景物词汇', difficulty: 2,
            keywords: ['forest', 'river', 'lake', 'mountain', 'hill', 'tree', 'bridge', 'building', 'village', 'house', '森林', '河流', '湖泊', '山', '小山', '树', '桥', '建筑', '村庄', '房子'],
            concept: '掌握自然景物词汇：forest森林、river河流、lake湖泊、mountain山、hill小山、tree树、bridge桥、building建筑、village村庄、house房子',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-43']
          },
          {
            id: 'pe5-37', name: 'Is there a...?一般疑问句', difficulty: 2,
            keywords: ['Is there', '单数疑问句', '自然景物'],
            concept: '学会用Is there a/an + 单数名词?询问某处是否有某物，用Yes, there is./No, there isn\'t.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-34', 'pe5-30']
          },
          {
            id: 'pe5-38', name: 'Are there any...?一般疑问句', difficulty: 2,
            keywords: ['Are there any', '复数疑问句', 'any'],
            concept: '学会用Are there any + 复数名词?询问某处是否有多个物品，注意any用于疑问句中',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-34', 'pe5-31']
          },
          {
            id: 'pe5-39', name: 'There is/are...in the nature park.描述', difficulty: 2,
            keywords: ['There is', 'There are', '自然公园描述'],
            concept: '学会用There is/are...in the nature park.描述自然公园中有哪些景物',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-30', 'pe5-31', 'pe5-36']
          },
          {
            id: 'pe5-40', name: '自然景物的描述与问答', difficulty: 2,
            keywords: ['景物问答', '综合描述', '自然公园'],
            concept: '综合运用There be句型的肯定句、否定句和疑问句描述自然景物',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-37', 'pe5-38', 'pe5-39']
          },
          {
            id: 'pe5-41', name: 'any与some在疑问句中的使用', difficulty: 2,
            keywords: ['any', 'some', '疑问句', '肯定句'],
            concept: '了解some一般用于肯定句，any用于疑问句和否定句中修饰可数/不可数名词',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-38']
          },
          {
            id: 'pe5-42', name: '自然公园场景的完整描述', difficulty: 2,
            keywords: ['自然公园', '完整描述', '综合运用'],
            concept: '综合运用自然景物词汇和There be句型，完整描述一个自然公园的场景',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-36', 'pe5-37', 'pe5-38']
          }
        ]
      },
      // ========== 五年级下册 ==========
      {
        id: 'che5-7',
        title: 'Unit 1 My day',
        icon: '⏰',
        semester: '下册',
        points: [
          {
            id: 'pe5-43', name: '日常活动词汇', difficulty: 2,
            keywords: ['eat breakfast', 'eat lunch', 'eat dinner', 'have...class', 'play sports', 'do morning exercises', '吃早餐', '上课', '运动', '做早操'],
            concept: '掌握日常活动短语：eat breakfast/lunch/dinner吃三餐、have...class上...课、play sports做运动、do morning exercises做早操',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-28', 'pe4-53']
          },
          {
            id: 'pe5-44', name: 'When do you...?句型', difficulty: 2,
            keywords: ['When do you', '时间询问', '日常活动'],
            concept: '学会用When do you + 动词短语?询问做某事的时间，用I usually/often + 动词短语 + at + 时间.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-51', 'pe5-11']
          },
          {
            id: 'pe5-45', name: '一天中的时间表达', difficulty: 2,
            keywords: ['in the morning', 'in the afternoon', 'in the evening', 'at noon', 'at night', '早上', '下午', '晚上'],
            concept: '掌握一天中时间段的表达：in the morning/afternoon/evening、at noon在中午、at night在晚上',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-50']
          },
          {
            id: 'pe5-46', name: '频率副词的进一步运用', difficulty: 2,
            keywords: ['always', 'usually', 'often', 'sometimes', '频率'],
            concept: '进一步学习频率副词的使用：always总是(100%)、usually通常(80%)、often经常(60%)、sometimes有时(30%)',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-12']
          },
          {
            id: 'pe5-47', name: '描述日常作息时间表', difficulty: 2,
            keywords: ['作息时间表', '日常安排', '时间线'],
            concept: '学会描述自己一天的完整作息时间表，按时间顺序排列活动',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-44', 'pe5-43']
          },
          {
            id: 'pe5-48', name: 'I usually...at...频率表达', difficulty: 2,
            keywords: ['I usually', 'at + 时间', '频率表达'],
            concept: '学会用I usually/often/sometimes + 动词短语 + at + 时间.描述日常活动的时间',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-44', 'pe5-46']
          },
          {
            id: 'pe5-49', name: '日常活动的完整时间线', difficulty: 2,
            keywords: ['时间线', '活动顺序', '综合描述'],
            concept: '用时间线方式完整描述一天的活动安排，注意时间顺序和频率副词的使用',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-43', 'pe5-44', 'pe5-47']
          }
        ]
      },
      {
        id: 'che5-8',
        title: 'Unit 2 My favourite season',
        icon: '🌸',
        semester: '下册',
        points: [
          {
            id: 'pe5-50', name: '季节词汇', difficulty: 2,
            keywords: ['spring', 'summer', 'autumn', 'fall', 'winter', '春天', '夏天', '秋天', '冬天'],
            concept: '掌握四季的英文表达：spring春天、summer夏天、autumn/fall秋天、winter冬天',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-57']
          },
          {
            id: 'pe5-51', name: '季节活动词汇', difficulty: 2,
            keywords: ['go on a picnic', 'go swimming', 'make a snowman', 'go hiking', 'pick apples', '去野餐', '去游泳', '堆雪人', '去远足', '摘苹果'],
            concept: '掌握季节活动短语：go on a picnic去野餐、go swimming去游泳、make a snowman堆雪人、go hiking去远足、pick apples摘苹果',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe5-50']
          },
          {
            id: 'pe5-52', name: 'Which season do you like best?句型', difficulty: 2,
            keywords: ['Which season', 'like best', '最喜欢的季节'],
            concept: '学会用Which season do you like best?询问最喜欢的季节，用I like + 季节 + best.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-18']
          },
          {
            id: 'pe5-53', name: 'Because I can...原因表达', difficulty: 2,
            keywords: ['Because', '原因', '因为'],
            concept: '学会用Because I can + 动词短语.说明喜欢某个季节的原因',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-52']
          },
          {
            id: 'pe5-54', name: 'What\'s your favourite season?句型', difficulty: 2,
            keywords: ['favourite season', '最喜欢的季节'],
            concept: '学会用What\'s your favourite season?询问最喜欢的季节，与Which season do you like best?同义',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-52']
          },
          {
            id: 'pe5-55', name: '季节特征描述', difficulty: 2,
            keywords: ['warm', 'hot', 'cool', 'cold', '季节特征'],
            concept: '学会用形容词描述季节特征：spring is warm、summer is hot、autumn is cool、winter is cold',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-50', 'pe4-57']
          },
          {
            id: 'pe5-56', name: '季节与活动的搭配', difficulty: 2,
            keywords: ['季节搭配', '活动搭配', '综合表达'],
            concept: '综合描述每个季节的特征和对应的活动，如In spring, I can go on a picnic.',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-50', 'pe5-51', 'pe5-55']
          }
        ]
      },
      {
        id: 'che5-9',
        title: 'Unit 3 My school calendar',
        icon: '📆',
        semester: '下册',
        points: [
          {
            id: 'pe5-57', name: '月份词汇', difficulty: 2,
            keywords: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', '月份'],
            concept: '掌握十二个月份的英文表达：January一月到December十二月，注意首字母大写',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe5-58']
          },
          {
            id: 'pe5-58', name: '节日词汇', difficulty: 2,
            keywords: ['New Year\'s Day', 'Tree Planting Day', 'Easter', 'Mother\'s Day', 'Children\'s Day', 'Father\'s Day', 'National Day', 'Thanksgiving Day', 'Christmas', '节日'],
            concept: '掌握常见节日的英文表达：New Year\'s Day元旦、Children\'s Day儿童节、Christmas圣诞节等',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe5-57']
          },
          {
            id: 'pe5-59', name: 'When is...?句型', difficulty: 2,
            keywords: ['When is', '节日日期询问', 'in + 月份'],
            concept: '学会用When is + 节日/活动?询问日期，用It\'s in + 月份.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-57', 'pe5-58']
          },
          {
            id: 'pe5-60', name: 'There are some special days in + 月份', difficulty: 2,
            keywords: ['special days', '特殊日子', '月份活动'],
            concept: '学会用There are some special days in + 月份.描述某月的特殊日子',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-59', 'pe5-30']
          },
          {
            id: 'pe5-61', name: '月份的缩写形式', difficulty: 2,
            keywords: ['缩写', 'Jan', 'Feb', 'Mar', 'Apr'],
            concept: '了解月份的常见缩写形式：Jan., Feb., Mar., Apr., May, Jun., Jul., Aug., Sep., Oct., Nov., Dec.',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pe5-57']
          },
          {
            id: 'pe5-62', name: '节日与月份的对应关系', difficulty: 2,
            keywords: ['节日月份', '对应关系', '文化知识'],
            concept: '掌握主要节日对应的月份，如Children\'s Day在June、Christmas在December',
            questionTypes: ['选择', '连线', '判断'],
            relatedPoints: ['pe5-58', 'pe5-59']
          },
          {
            id: 'pe5-63', name: '日历的阅读与使用', difficulty: 2,
            keywords: ['日历', '阅读', '日期'],
            concept: '学会阅读英文日历，理解月份、日期和星期的排列方式',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-57', 'pe5-8']
          }
        ]
      },
      {
        id: 'che5-10',
        title: 'Unit 4 When is Easter?',
        icon: '🐣',
        semester: '下册',
        points: [
          {
            id: 'pe5-64', name: '序数词1st-10th', difficulty: 2,
            keywords: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', '序数词'],
            concept: '掌握序数词1st-10th：first第一、second第二、third第三、fourth第四、fifth第五等，注意特殊形式',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pe5-65']
          },
          {
            id: 'pe5-65', name: '序数词11th-31st', difficulty: 2,
            keywords: ['eleventh', 'twelfth', 'twentieth', 'twenty-first', 'thirty-first', '序数词'],
            concept: '掌握序数词11th-31st，注意twelfth(第十二)和twentieth(第二十)的特殊拼写',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pe5-64']
          },
          {
            id: 'pe5-66', name: '序数词的构成规则', difficulty: 2,
            keywords: ['构成规则', '-th后缀', '特殊变化'],
            concept: '掌握序数词的构成规则：在基数词后加-th，注意fifth、eighth、ninth、twelfth、twentieth等特殊形式',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-64', 'pe5-65']
          },
          {
            id: 'pe5-67', name: 'When is your birthday?句型', difficulty: 2,
            keywords: ['birthday', '生日', '日期表达'],
            concept: '学会用When is your birthday?询问生日，用My birthday is on + 月份 + 序数词.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-59']
          },
          {
            id: 'pe5-68', name: '日期表达：on + 月份 + 序数词', difficulty: 2,
            keywords: ['日期表达', 'on', '月份 + 序数词'],
            concept: '掌握日期的完整表达：on April 5th在4月5日，注意介词on用于具体日期前',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-64', 'pe5-67']
          },
          {
            id: 'pe5-69', name: '序数词与基数词的区别', difficulty: 2,
            keywords: ['序数词', '基数词', '区别'],
            concept: '区分序数词(表示顺序，如first第一)和基数词(表示数量，如one一)的用法',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-64', 'pe3-36']
          },
          {
            id: 'pe5-70', name: '生日与特殊日期的表达', difficulty: 2,
            keywords: ['生日', '特殊日期', '综合表达'],
            concept: '综合运用日期表达描述生日和其他特殊日期，如Sports Meet is on April 4th.',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-67', 'pe5-68']
          }
        ]
      },
      {
        id: 'che5-11',
        title: 'Unit 5 Whose dog is it?',
        icon: '🐕',
        semester: '下册',
        points: [
          {
            id: 'pe5-71', name: '名词所有格\'s的用法', difficulty: 2,
            keywords: ['名词所有格', "'s", '所有关系', '归属'],
            concept: '掌握名词所有格\'s形式：Mike\'s迈克的、the dog\'s狗的、the children\'s孩子们的',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe4-72', 'pe4-75']
          },
          {
            id: 'pe5-72', name: 'Whose...is this/that?句型', difficulty: 2,
            keywords: ['Whose', '询问归属', '所有格问答'],
            concept: '学会用Whose + 名词 + is this/that?询问物品归属，用It\'s + 人名\'s.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-72', 'pe5-71']
          },
          {
            id: 'pe5-73', name: '动名词(现在分词)形式', difficulty: 2,
            keywords: ['-ing形式', '动名词', '现在分词', 'eating', 'drinking', 'playing'],
            concept: '掌握动词加-ing的形式：eating吃、drinking喝、playing玩、sleeping睡觉、climbing爬、jumping跳',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-78']
          },
          {
            id: 'pe5-74', name: 'The...is + 动名词.描述正在进行的动作', difficulty: 2,
            keywords: ['is eating', 'is drinking', '正在进行'],
            concept: '学会用The + 名词 + is + 动名词.描述动物正在做的事情，如The dog is eating.',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-73', 'pe5-78']
          },
          {
            id: 'pe5-75', name: '名词所有格的特殊形式', difficulty: 2,
            keywords: ['以s结尾', '复数所有格', '特殊形式'],
            concept: '了解以s结尾的复数名词所有格只加\'，如the teachers\' office；不以s结尾的加\'s',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-71']
          },
          {
            id: 'pe5-76', name: '动物的所有格表达', difficulty: 2,
            keywords: ['动物所有格', '宠物归属', 'whose'],
            concept: '学会用名词所有格表达动物的归属，如the cat\'s name猫的名字',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-71', 'pe5-72']
          },
          {
            id: 'pe5-77', name: '现在进行时的初步认知', difficulty: 2,
            keywords: ['现在进行时', 'be + doing', '正在'],
            concept: '初步了解现在进行时的结构：主语 + be动词 + 动词-ing，表示正在进行的动作',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-73', 'pe5-74', 'pe5-78']
          }
        ]
      },
      {
        id: 'che5-12',
        title: 'Unit 6 Work quietly!',
        icon: '🤫',
        semester: '下册',
        points: [
          {
            id: 'pe5-78', name: '现在进行时：主语 + be + doing', difficulty: 2,
            keywords: ['现在进行时', 'be动词', 'doing', '正在做'],
            concept: '系统学习现在进行时的结构：主语(I/He/She/They) + am/is/are + 动词-ing，描述正在发生的动作',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-77']
          },
          {
            id: 'pe5-79', name: 'They are...ing.描述正在发生的动作', difficulty: 2,
            keywords: ['They are', '描述动作', '正在进行'],
            concept: '学会用They are + 动词-ing.描述多个人正在做的事情，如They are having an English class.',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-78']
          },
          {
            id: 'pe5-80', name: '现在进行时的疑问句与否定句', difficulty: 2,
            keywords: ['Are they', 'They aren\'t', '疑问句', '否定句'],
            concept: '学会现在进行时的一般疑问句(Are they + doing?)和否定句(They aren\'t + doing.)',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-78']
          },
          {
            id: 'pe5-81', name: '动词-ing的构成规则', difficulty: 2,
            keywords: ['-ing构成', '直接加', '去e加', '双写加'],
            concept: '掌握动词-ing的构成规则：一般直接加ing、去不发音e加ing、重读闭音节双写末字母加ing',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-73', 'pe5-78']
          },
          {
            id: 'pe5-82', name: '行为规范词汇', difficulty: 2,
            keywords: ['work quietly', 'keep your desk clean', 'talk quietly', 'take turns', '安静工作', '保持整洁'],
            concept: '学习行为规范表达：work quietly安静工作、keep your desk clean保持桌面整洁、talk quietly小声说话、take turns轮流',
            questionTypes: ['选择', '连线', '情景对话'],
            relatedPoints: ['pe5-83']
          },
          {
            id: 'pe5-83', name: '图书馆、教室等场合的行为规范', difficulty: 2,
            keywords: ['场合规范', '图书馆', '教室', '行为要求'],
            concept: '了解不同场合的行为规范要求，学会用英语表达规则和要求',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe5-82']
          },
          {
            id: 'pe5-84', name: '现在进行时与一般现在时的区别', difficulty: 2,
            keywords: ['现在进行时', '一般现在时', '区别', '时态'],
            concept: '区分现在进行时(正在发生)和一般现在时(习惯/事实)的不同用法和含义',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-78']
          }
        ]
      }
    ]
  },

  // ========================
  // 六年级
  // ========================
  '6': {
    title: '六年级英语',
    icon: '🌍',
    color: '#4facfe',
    chapters: [
      // ========== 六年级上册 ==========
      {
        id: 'che6-1',
        title: 'Unit 1 How can I get there?',
        icon: '🗺️',
        semester: '上册',
        points: [
          {
            id: 'pe6-1', name: '地点词汇', difficulty: 2,
            keywords: ['science museum', 'post office', 'bookstore', 'cinema', 'hospital', 'crossing', '科学博物馆', '邮局', '书店', '电影院', '医院', '十字路口'],
            concept: '掌握六个常见地点的英文表达：science museum科学博物馆、post office邮局、bookstore书店、cinema电影院、hospital医院、crossing十字路口',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe6-2']
          },
          {
            id: 'pe6-2', name: 'Where is the...?问路句型', difficulty: 2,
            keywords: ['Where is', 'next to', 'near', 'behind', 'in front of', '问路'],
            concept: '学会用Where is the + 地点?问路，用It\'s next to/near/behind/in front of + 地点.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-1', 'pe5-32']
          },
          {
            id: 'pe6-3', name: 'Turn left/right. Go straight.指路指令', difficulty: 2,
            keywords: ['Turn left', 'Turn right', 'Go straight', '左转', '右转', '直走'],
            concept: '学会用Turn left/right at the + 地点.和Go straight.指路',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-2']
          },
          {
            id: 'pe6-4', name: 'How can I get there?句型', difficulty: 2,
            keywords: ['How can I get', '问路', '交通'],
            concept: '学会用How can I get there/to the + 地点?询问如何到达某地',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-2', 'pe6-3']
          },
          {
            id: 'pe6-5', name: '方位介词在问路中的综合运用', difficulty: 2,
            keywords: ['方位介词', '问路', '综合运用'],
            concept: '综合运用next to、near、behind、in front of、between等方位介词进行问路和指路',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-32', 'pe6-2']
          },
          {
            id: 'pe6-6', name: 'Is there a...near here?附近询问', difficulty: 2,
            keywords: ['near here', '附近', '地点询问'],
            concept: '学会用Is there a + 地点 + near here?询问附近是否有某设施',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-1', 'pe5-37']
          },
          {
            id: 'pe6-7', name: '问路与指路的完整对话', difficulty: 2,
            keywords: ['问路对话', '指路对话', '综合运用'],
            concept: '综合运用问路句型和指路指令完成完整的问路与指路对话',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-2', 'pe6-3', 'pe6-4']
          }
        ]
      },
      {
        id: 'che6-2',
        title: 'Unit 2 Ways to go to school',
        icon: '🚌',
        semester: '上册',
        points: [
          {
            id: 'pe6-8', name: '交通方式词汇', difficulty: 2,
            keywords: ['on foot', 'by bus', 'by taxi', 'by plane', 'by ship', 'by subway', 'by train', 'by bike', '步行', '乘公交', '乘出租车', '乘飞机', '乘船', '乘地铁', '骑自行车'],
            concept: '掌握交通方式表达：on foot步行、by bus/taxi/plane/ship/subway/train/bike乘坐各种交通工具',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe6-9']
          },
          {
            id: 'pe6-9', name: 'How do you come to school?句型', difficulty: 2,
            keywords: ['How do you come', '交通方式询问'],
            concept: '学会用How do you come to school?询问上学的交通方式，用I usually come by.../on foot.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-8']
          },
          {
            id: 'pe6-10', name: 'How can I get to...?句型', difficulty: 2,
            keywords: ['How can I get to', '到达某地'],
            concept: '学会用How can I get to + 地点?询问到达某地的交通方式',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-4', 'pe6-8']
          },
          {
            id: 'pe6-11', name: '交通规则', difficulty: 2,
            keywords: ['Stop', 'Wait', 'Go', 'red light', 'yellow light', 'green light', '停', '等', '行'],
            concept: '掌握交通规则：Stop at a red light红灯停、Wait at a yellow light黄灯等、Go at a green light绿灯行',
            questionTypes: ['选择', '连线', '判断'],
            relatedPoints: ['pe6-12']
          },
          {
            id: 'pe6-12', name: '交通信号灯词汇', difficulty: 2,
            keywords: ['traffic lights', 'red', 'yellow', 'green', '信号灯'],
            concept: '掌握交通信号灯相关词汇：traffic lights信号灯、red light红灯、yellow light黄灯、green light绿灯',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe6-11']
          },
          {
            id: 'pe6-13', name: 'I must...表达义务与必要', difficulty: 2,
            keywords: ['must', '必须', '义务', '交通规则'],
            concept: '学会用I must + 动词原形.表达必须做某事，如I must stop at a red light.',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe6-11']
          },
          {
            id: 'pe6-14', name: '不同交通方式的介词搭配', difficulty: 2,
            keywords: ['by + 交通工具', 'on foot', '介词搭配'],
            concept: '掌握by + 交通工具(无冠词)和on foot的固定搭配，注意by car/bus/train等不加冠词',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe6-8', 'pe6-9']
          }
        ]
      },
      {
        id: 'che6-3',
        title: 'Unit 3 My weekend plan',
        icon: '📋',
        semester: '上册',
        points: [
          {
            id: 'pe6-15', name: 'be going to将来时结构', difficulty: 3,
            keywords: ['be going to', '将来时', '计划', '打算'],
            concept: '掌握be going to + 动词原形的将来时结构，表示计划或打算做某事',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe6-16']
          },
          {
            id: 'pe6-16', name: 'What are you going to do?句型', difficulty: 3,
            keywords: ['What are you going to', '将来时询问'],
            concept: '学会用What are you going to do?询问对方的计划，用I\'m going to + 动词短语.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-15']
          },
          {
            id: 'pe6-17', name: 'Where are you going?句型', difficulty: 2,
            keywords: ['Where are you going', '地点询问', '将来时'],
            concept: '学会用Where are you going?询问对方要去哪里，用I\'m going to + 地点.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-16']
          },
          {
            id: 'pe6-18', name: 'When are you going?时间表达', difficulty: 2,
            keywords: ['When are you going', '时间', 'this morning', 'tomorrow', 'next week'],
            concept: '学会用When are you going?询问时间，用This morning/afternoon/evening, tomorrow, next week等回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-16', 'pe6-17']
          },
          {
            id: 'pe6-19', name: '动词短语：周末活动', difficulty: 2,
            keywords: ['see a film', 'take a trip', 'go to the supermarket', 'visit grandparents', '看电影', '旅行', '去超市', '看望祖父母'],
            concept: '掌握周末活动短语：see a film看电影、take a trip去旅行、go to the supermarket去超市、visit grandparents看望祖父母',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe6-16']
          },
          {
            id: 'pe6-20', name: 'be going to与一般现在时的区别', difficulty: 3,
            keywords: ['将来时', '一般现在时', '区别'],
            concept: '区分be going to(将来的计划/打算)和一般现在时(习惯/事实)的不同用法',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe6-15']
          },
          {
            id: 'pe6-21', name: '周末计划的完整描述', difficulty: 3,
            keywords: ['周末计划', '综合表达', 'be going to'],
            concept: '综合运用be going to将来时结构完整描述周末计划，包括时间、地点和活动',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-15', 'pe6-16', 'pe6-17']
          }
        ]
      },
      {
        id: 'che6-4',
        title: 'Unit 4 I have a pen pal',
        icon: '✉️',
        semester: '上册',
        points: [
          {
            id: 'pe6-22', name: '爱好词汇', difficulty: 2,
            keywords: ['reading', 'singing', 'dancing', 'doing kung fu', 'playing football', '阅读', '唱歌', '跳舞', '练功夫', '踢足球'],
            concept: '掌握爱好相关动名词：reading阅读、singing唱歌、dancing跳舞、doing kung fu练功夫、playing football踢足球',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe5-22', 'pe5-73']
          },
          {
            id: 'pe6-23', name: 'Does he/she like...?句型', difficulty: 2,
            keywords: ['Does he like', 'Does she like', '第三人称疑问句'],
            concept: '学会用Does he/she like + 动名词?询问第三人称的爱好，用Yes, he/she does./No, he/she doesn\'t.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-22', 'pe6-24']
          },
          {
            id: 'pe6-24', name: 'He/She likes + 动名词.陈述句', difficulty: 2,
            keywords: ['He likes', 'She likes', '第三人称陈述句'],
            concept: '学会用He/She likes + 动名词.描述第三人称的爱好，注意likes的第三人称单数形式',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-22', 'pe6-23']
          },
          {
            id: 'pe6-25', name: '动名词作宾语的用法', difficulty: 2,
            keywords: ['动名词', '宾语', 'like + doing', 'love + doing'],
            concept: '了解动名词可以作动词的宾语，如like/love/enjoy + doing sth.',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe5-73', 'pe6-22']
          },
          {
            id: 'pe6-26', name: '描述他人的爱好与兴趣', difficulty: 2,
            keywords: ['描述爱好', 'pen pal', '综合表达'],
            concept: '综合运用likes和动名词描述笔友或他人的爱好与兴趣',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-22', 'pe6-24']
          },
          {
            id: 'pe6-27', name: 'pen pal的交流内容', difficulty: 2,
            keywords: ['pen pal', '笔友', '交流', '写信'],
            concept: '了解pen pal笔友的概念，学会描述笔友的个人信息和爱好',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe6-26']
          },
          {
            id: 'pe6-28', name: '第三人称单数的动词变化规则', difficulty: 2,
            keywords: ['第三人称单数', '动词变化', '-s', '-es', '-ies'],
            concept: '掌握动词第三人称单数的变化规则：一般加-s、以s/x/ch/sh结尾加-es、辅音+y结尾变y为ies',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe6-23', 'pe6-24']
          }
        ]
      },
      {
        id: 'che6-5',
        title: 'Unit 5 What does he do?',
        icon: '👨‍⚕️',
        semester: '上册',
        points: [
          {
            id: 'pe6-29', name: '职业词汇（进阶）', difficulty: 2,
            keywords: ['factory worker', 'postman', 'businessman', 'police officer', 'fisherman', 'scientist', 'pilot', 'coach', '工厂工人', '邮递员', '商人', '警察', '渔夫', '科学家', '飞行员', '教练'],
            concept: '掌握进阶职业词汇：factory worker工厂工人、postman邮递员、businessman商人、police officer警察、fisherman渔夫、scientist科学家、pilot飞行员、coach教练',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe4-36']
          },
          {
            id: 'pe6-30', name: 'What does he/she do?句型', difficulty: 2,
            keywords: ['What does he do', '职业询问'],
            concept: '学会用What does he/she do?询问职业，用He/She is a/an + 职业.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe4-38', 'pe6-29']
          },
          {
            id: 'pe6-31', name: 'Where does he/she work?句型', difficulty: 2,
            keywords: ['Where does he work', '工作地点询问'],
            concept: '学会用Where does he/she work?询问工作地点，用He/She works in/at/on a/an + 地点.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-30']
          },
          {
            id: 'pe6-32', name: 'How does he/she go to work?句型', difficulty: 2,
            keywords: ['How does he go', '上班方式'],
            concept: '学会用How does he/she go to work?询问上班方式，用He/She goes to work by...回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-31', 'pe6-8']
          },
          {
            id: 'pe6-33', name: '动词第三人称单数形式', difficulty: 2,
            keywords: ['第三人称单数', 'does', 'works', 'goes'],
            concept: '巩固动词第三人称单数的变化：do→does、work→works、go→goes、teach→teaches等',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe6-28']
          },
          {
            id: 'pe6-34', name: '职业与工作地点的搭配', difficulty: 2,
            keywords: ['职业搭配', '工作地点', '综合表达'],
            concept: '掌握职业与工作地点的搭配：teacher在学校、doctor在医院、pilot在飞机上等',
            questionTypes: ['选择', '连线', '判断'],
            relatedPoints: ['pe6-29', 'pe6-31']
          },
          {
            id: 'pe6-35', name: '职业描述的完整句型', difficulty: 2,
            keywords: ['职业描述', '综合句型', '完整表达'],
            concept: '综合运用What/Where/How does he/she do/work/go?完整描述一个人的职业信息',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-30', 'pe6-31', 'pe6-32']
          }
        ]
      },
      {
        id: 'che6-6',
        title: 'Unit 6 How do you feel?',
        icon: '😊',
        semester: '上册',
        points: [
          {
            id: 'pe6-36', name: '情感形容词', difficulty: 2,
            keywords: ['angry', 'afraid', 'sad', 'worried', 'happy', 'ill', '生气', '害怕', '难过', '担心', '高兴', '生病'],
            concept: '掌握情感形容词：angry生气、afraid害怕、sad难过、worried担心、happy高兴、ill生病',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe6-37']
          },
          {
            id: 'pe6-37', name: 'How do you feel?句型', difficulty: 2,
            keywords: ['How do you feel', '情感询问'],
            concept: '学会用How do you feel?询问情感状态，用I\'m/He\'s/She\'s + 情感形容词.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-36']
          },
          {
            id: 'pe6-38', name: 'What\'s wrong? You should...句型', difficulty: 2,
            keywords: ['What\'s wrong', 'should', '建议', '情感建议'],
            concept: '学会用What\'s wrong?询问怎么了，用You/He/She should + 动词原形.给出建议',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-37']
          },
          {
            id: 'pe6-39', name: 'Don\'t be afraid. Take a deep breath.', difficulty: 2,
            keywords: ['Don\'t be', 'Take a deep breath', '安慰', '建议'],
            concept: '学会用Don\'t be afraid/sad/worried.和Take a deep breath.等安慰和建议表达',
            questionTypes: ['选择', '情景对话', '判断'],
            relatedPoints: ['pe6-38']
          },
          {
            id: 'pe6-40', name: '情感原因的表达Because...', difficulty: 2,
            keywords: ['Because', '情感原因', '因为'],
            concept: '学会用Because...说明情感产生的原因，如I\'m sad because my cat is ill.',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-37', 'pe5-53']
          },
          {
            id: 'pe6-41', name: 'Should的用法与建议表达', difficulty: 2,
            keywords: ['should', '建议', '应该'],
            concept: '掌握should的用法：You should + 动词原形.表示建议，You shouldn\'t + 动词原形.表示不应该',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe6-38']
          },
          {
            id: 'pe6-42', name: '情感词汇的完整运用', difficulty: 2,
            keywords: ['情感表达', '综合运用', '情感对话'],
            concept: '综合运用情感形容词、询问句型和建议表达，完成情感相关的完整对话',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-36', 'pe6-37', 'pe6-38']
          }
        ]
      },
      // ========== 六年级下册 ==========
      {
        id: 'che6-7',
        title: 'Unit 1 How tall are you?',
        icon: '📏',
        semester: '下册',
        points: [
          {
            id: 'pe6-43', name: '比较级形容词（身高体重年龄）', difficulty: 3,
            keywords: ['taller', 'shorter', 'older', 'younger', 'longer', 'stronger', '更高', '更矮', '更老', '更年轻', '更长', '更强壮'],
            concept: '掌握比较级形容词：taller更高、shorter更矮、older更老、younger更年轻、longer更长、stronger更强壮',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe6-44']
          },
          {
            id: 'pe6-44', name: '比较级形容词（大小胖瘦）', difficulty: 3,
            keywords: ['bigger', 'smaller', 'thinner', 'heavier', '更大', '更小', '更瘦', '更重'],
            concept: '掌握比较级形容词：bigger更大、smaller更小、thinner更瘦、heavier更重',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe6-43']
          },
          {
            id: 'pe6-45', name: 'How tall/heavy/old are you?句型', difficulty: 3,
            keywords: ['How tall', 'How heavy', 'How old', '身体数据询问'],
            concept: '学会用How tall are you?问身高、How heavy are you?问体重、How old are you?问年龄',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-43', 'pe3-37']
          },
          {
            id: 'pe6-46', name: 'You\'re taller/shorter than me.比较句型', difficulty: 3,
            keywords: ['比较级', 'than', '比较句'],
            concept: '学会用A is + 比较级 + than B.进行两者比较，如You\'re taller than me.',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-43', 'pe6-44']
          },
          {
            id: 'pe6-47', name: '比较级的构成规则', difficulty: 3,
            keywords: ['-er', '双写', '变y为i', '构成规则'],
            concept: '掌握比较级构成规则：一般加-er、以e结尾只加r、重读闭音节双写末字母加-er、辅音+y结尾变y为i加-er',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe6-43', 'pe6-44']
          },
          {
            id: 'pe6-48', name: 'A is taller than B.比较句型综合', difficulty: 3,
            keywords: ['比较句型', '综合运用', '两者比较'],
            concept: '综合运用比较级进行两个事物的比较，包括形容词比较级和than的搭配使用',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-46', 'pe6-47']
          },
          {
            id: 'pe6-49', name: 'How tall is it?高度表达', difficulty: 3,
            keywords: ['How tall', 'metres', '高度表达'],
            concept: '学会用How tall is it?询问物体高度，用It\'s + 数字 + metres/metres tall.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-45', 'pe6-46']
          }
        ]
      },
      {
        id: 'che6-8',
        title: 'Unit 2 Last weekend',
        icon: '📆',
        semester: '下册',
        points: [
          {
            id: 'pe6-50', name: '一般过去时动词（规则变化）', difficulty: 3,
            keywords: ['watched', 'washed', 'cleaned', 'stayed', 'cooked', '看电视', '洗衣服', '打扫', '待在', '做饭'],
            concept: '掌握规则动词的过去式：watch→watched、wash→washed、clean→cleaned、stay→stayed、cook→cooked',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pe6-51']
          },
          {
            id: 'pe6-51', name: 'What did you do last weekend?句型', difficulty: 3,
            keywords: ['What did you do', '过去时询问', '上周末'],
            concept: '学会用What did you do last weekend/last night/...?询问过去做了什么，用I + 动词过去式.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-50', 'pe6-52']
          },
          {
            id: 'pe6-52', name: 'Did you...?一般疑问句', difficulty: 3,
            keywords: ['Did you', '过去时疑问句', 'Yes I did', 'No I didn\'t'],
            concept: '学会用Did you + 动词原形?询问过去是否做了某事，用Yes, I did./No, I didn\'t.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-51']
          },
          {
            id: 'pe6-53', name: '一般过去时的规则变化：加-ed', difficulty: 3,
            keywords: ['-ed', '规则变化', '过去式'],
            concept: '掌握动词过去式的规则变化：一般加-ed、以e结尾加-d、辅音+y结尾变y为ied、重读闭音节双写加-ed',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe6-50']
          },
          {
            id: 'pe6-54', name: 'How was your weekend?句型', difficulty: 3,
            keywords: ['How was', '周末评价', 'good', 'great', 'fine'],
            concept: '学会用How was your weekend?询问周末过得怎样，用It was good/great/fine.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-51']
          },
          {
            id: 'pe6-55', name: '不规则动词过去式', difficulty: 3,
            keywords: ['read', 'saw', 'had', 'went', '不规则变化'],
            concept: '掌握不规则动词的过去式：read→read、see→saw、have→had、go→went等',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pe6-56']
          },
          {
            id: 'pe6-56', name: '一般过去时的一般疑问句与否定句', difficulty: 3,
            keywords: ['Did', 'didn\'t', '否定句', '疑问句'],
            concept: '掌握一般过去时的疑问句(Did you...?)和否定句(I didn\'t...)的构成和用法',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe6-52', 'pe6-50']
          }
        ]
      },
      {
        id: 'che6-9',
        title: 'Unit 3 Where did you go?',
        icon: '✈️',
        semester: '下册',
        points: [
          {
            id: 'pe6-57', name: '地点活动词汇', difficulty: 3,
            keywords: ['went camping', 'went fishing', 'went swimming', 'rode a horse', 'rode a bike', '去露营', '去钓鱼', '去游泳', '骑马', '骑自行车'],
            concept: '掌握假期活动短语：went camping去露营、went fishing去钓鱼、went swimming去游泳、rode a horse骑马、rode a bike骑自行车',
            questionTypes: ['选择', '连线', '填空'],
            relatedPoints: ['pe6-58']
          },
          {
            id: 'pe6-58', name: 'Where did you go?句型', difficulty: 3,
            keywords: ['Where did you go', '假期地点询问'],
            concept: '学会用Where did you go over the holiday?询问假期去了哪里，用I went to + 地点.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-57', 'pe6-60']
          },
          {
            id: 'pe6-59', name: 'How did you go there?句型', difficulty: 3,
            keywords: ['How did you go', '交通方式过去时'],
            concept: '学会用How did you go there?询问过去怎么去的，用I went by plane/car/bus.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-58', 'pe6-8']
          },
          {
            id: 'pe6-60', name: 'What did you do there?句型', difficulty: 3,
            keywords: ['What did you do', '活动询问', '过去时'],
            concept: '学会用What did you do there?询问在那里做了什么，用I + 过去式动词短语.回答',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-51', 'pe6-57']
          },
          {
            id: 'pe6-61', name: '不规则动词过去式（续）', difficulty: 3,
            keywords: ['went', 'rode', 'took', 'bought', 'hurt', '不规则变化'],
            concept: '掌握更多不规则动词过去式：go→went、ride→rode、take→took、buy→bought、hurt→hurt',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pe6-55']
          },
          {
            id: 'pe6-62', name: '过去时态下的问路与回答', difficulty: 3,
            keywords: ['过去时问路', '假期旅行', '综合运用'],
            concept: '在旅行场景中综合运用过去时态的疑问句和陈述句',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-58', 'pe6-59', 'pe6-60']
          },
          {
            id: 'pe6-63', name: '假期旅行经历的完整描述', difficulty: 3,
            keywords: ['旅行描述', '综合表达', '过去时'],
            concept: '综合运用过去时态完整描述一次假期旅行经历，包括地点、交通方式和活动',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-58', 'pe6-59', 'pe6-60']
          }
        ]
      },
      {
        id: 'che6-10',
        title: 'Unit 4 Then and now',
        icon: '🔄',
        semester: '下册',
        points: [
          {
            id: 'pe6-64', name: '过去与现在对比：There was/were...与There is/are...', difficulty: 3,
            keywords: ['There was', 'There were', '过去与现在', '对比'],
            concept: '学会用There was/were...描述过去，用There is/are...描述现在，进行过去与现在的对比',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-30', 'pe5-31']
          },
          {
            id: 'pe6-65', name: 'I could/couldn\'t...before.能力过去时', difficulty: 3,
            keywords: ['could', 'couldn\'t', 'before', '过去能力'],
            concept: '学会用I could/couldn\'t + 动词原形.描述过去的能力，could是can的过去式',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe5-23']
          },
          {
            id: 'pe6-66', name: 'Now I can...能力现在时', difficulty: 3,
            keywords: ['Now I can', '现在能力', '进步'],
            concept: '学会用Now I can + 动词原形.描述现在的能力，与过去的能力进行对比',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-65']
          },
          {
            id: 'pe6-67', name: '一般过去时的be动词：was/were', difficulty: 3,
            keywords: ['was', 'were', 'be动词过去式'],
            concept: '掌握be动词的过去式：I/He/She/It was...、We/You/They were...',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe6-64']
          },
          {
            id: 'pe6-68', name: 'could作为can的过去式', difficulty: 3,
            keywords: ['could', 'can过去式', '能力对比'],
            concept: '掌握could是can的过去式，用于描述过去的能力，couldn\'t是can\'t的过去式',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pe6-65', 'pe5-24']
          },
          {
            id: 'pe6-69', name: '人物成长变化的描述', difficulty: 3,
            keywords: ['成长变化', '过去现在', '对比描述'],
            concept: '学会描述人物的成长变化，综合运用was/could和is/can进行对比',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-64', 'pe6-65', 'pe6-66']
          },
          {
            id: 'pe6-70', name: '综合运用过去时与现在时', difficulty: 3,
            keywords: ['时态综合', '过去现在', '对比表达'],
            concept: '综合运用一般过去时和一般现在时进行过去与现在的全面对比，包括状态、能力和事物变化',
            questionTypes: ['选择', '填空', '情景对话'],
            relatedPoints: ['pe6-64', 'pe6-65', 'pe6-67', 'pe6-68']
          }
        ]
      }
    ]
  }
};