// 人教版（PEP）小学语文1-6年级完整知识点框架
// 严格按照人教版课本目录顺序编排
// AI生成元数据：包含难度、关键词、核心概念、题型、关联知识点

export const chineseKnowledge = {
  '1': {
    title: '一年级语文',
    icon: '📝',
    color: '#f5576c',
    chapters: [
      // ========== 一年级上册 ==========
      {
        id: 'chc1-1',
        title: '入学教育',
        icon: '🎒',
        semester: '上册',
        points: [
          {
            id: 'pc1-1', name: '我上学了', difficulty: 1,
            keywords: ['入学', '学校', '老师', '同学'],
            concept: '认识学校环境，了解校园生活的基本规范，培养上学的积极情感',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc1-8']
          },
          {
            id: 'pc1-2', name: '自我介绍', difficulty: 1,
            keywords: ['姓名', '年龄', '自我介绍', '口语表达'],
            concept: '学会用完整的句子介绍自己的姓名和年龄，培养口语交际能力',
            questionTypes: ['填空', '判断'],
            relatedPoints: ['pc1-1']
          },
          {
            id: 'pc1-3', name: '认识同学和老师', difficulty: 1,
            keywords: ['打招呼', '礼貌', '同学', '老师'],
            concept: '学会礼貌用语，认识新同学和老师，建立良好的人际关系',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc1-2']
          },
          {
            id: 'pc1-4', name: '课堂常规', difficulty: 1,
            keywords: ['坐姿', '举手', '听课', '纪律'],
            concept: '了解课堂基本纪律要求，学会正确的坐姿和举手发言的规范',
            questionTypes: ['判断', '选择'],
            relatedPoints: ['pc1-1']
          },
          {
            id: 'pc1-5', name: '认识课本', difficulty: 1,
            keywords: ['语文书', '封面', '目录', '页码'],
            concept: '认识语文课本的结构，学会看封面、目录和页码',
            questionTypes: ['选择', '填空'],
            relatedPoints: ['pc1-4']
          },
          {
            id: 'pc1-6', name: '上学歌', difficulty: 1,
            keywords: ['上学', '儿歌', '朗读', '背诵'],
            concept: '通过儿歌培养上学的兴趣，初步感受语文学习的乐趣',
            questionTypes: ['选择', '填空'],
            relatedPoints: ['pc1-1']
          },
          {
            id: 'pc1-7', name: '学习用具认识', difficulty: 1,
            keywords: ['铅笔', '橡皮', '书包', '文具'],
            concept: '认识常用学习用具的名称，学会整理书包和学习用品',
            questionTypes: ['选择', '填空'],
            relatedPoints: ['pc1-5']
          }
        ]
      },
      {
        id: 'chc1-2',
        title: '识字单元（一）',
        icon: '🔤',
        semester: '上册',
        points: [
          {
            id: 'pc1-8', name: '天地人', difficulty: 1,
            keywords: ['天', '地', '人', '识字', '独体字'],
            concept: '认识"天地人"三个基本汉字，了解汉字象形的特点，感受汉字文化',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-9', 'pc1-10']
          },
          {
            id: 'pc1-9', name: '金木水火土', difficulty: 1,
            keywords: ['金', '木', '水', '火', '土', '五行'],
            concept: '认识"金木水火土"五个汉字，初步了解五行概念和对仗',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-8', 'pc1-10']
          },
          {
            id: 'pc1-10', name: '口耳目', difficulty: 1,
            keywords: ['口', '耳', '目', '身体部位', '象形字'],
            concept: '认识身体部位相关汉字，理解象形造字法，图文对照识字',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-8', 'pc1-11']
          },
          {
            id: 'pc1-11', name: '日月水火', difficulty: 1,
            keywords: ['日', '月', '水', '火', '象形字', '自然'],
            concept: '认识自然事物相关汉字，继续学习象形字的特征',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-10', 'pc1-12']
          },
          {
            id: 'pc1-12', name: '对韵歌', difficulty: 1,
            keywords: ['对韵', '对子', '韵律', '反义词'],
            concept: '通过对韵歌感受汉语的韵律美，初步认识对仗和反义词',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-9', 'pc1-11']
          },
          {
            id: 'pc1-13', name: '象形字特点', difficulty: 2,
            keywords: ['象形', '造字法', '图文对照', '字形'],
            concept: '理解象形字是用图形表示事物形状的造字方法，能将汉字与图片对应',
            questionTypes: ['选择', '判断', '连线'],
            relatedPoints: ['pc1-10', 'pc1-11']
          },
          {
            id: 'pc1-14', name: '基本笔画认识', difficulty: 1,
            keywords: ['横', '竖', '撇', '捺', '点', '笔画'],
            concept: '认识汉字的基本笔画名称：横、竖、撇、捺、点，学会正确的笔画书写',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-13']
          }
        ]
      },
      {
        id: 'chc1-3',
        title: '汉语拼音（一）',
        icon: '🔤',
        semester: '上册',
        points: [
          {
            id: 'pc1-15', name: '单韵母a o e', difficulty: 1,
            keywords: ['a', 'o', 'e', '单韵母', '四声'],
            concept: '学习三个单韵母a o e的发音和四声调号，掌握正确的口型和声调标注',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-16', 'pc1-18']
          },
          {
            id: 'pc1-16', name: '单韵母i u ü', difficulty: 1,
            keywords: ['i', 'u', 'ü', '单韵母', '四声'],
            concept: '学习三个单韵母i u ü的发音，注意ü的发音特点和标调规则',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-15', 'pc1-18']
          },
          {
            id: 'pc1-17', name: '声母b p m f', difficulty: 1,
            keywords: ['b', 'p', 'm', 'f', '声母', '拼读'],
            concept: '学习四个声母b p m f的发音方法，学会声母与韵母的两拼音节拼读',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-15', 'pc1-19']
          },
          {
            id: 'pc1-18', name: '四声调号', difficulty: 1,
            keywords: ['一声', '二声', '三声', '四声', '声调', '标调'],
            concept: '掌握四个声调的发音特点和标调规则，能正确标注声调',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-15', 'pc1-16']
          },
          {
            id: 'pc1-19', name: '两拼音节', difficulty: 2,
            keywords: ['声母', '韵母', '两拼', '拼读方法'],
            concept: '掌握声母+韵母的两拼音节拼读方法，前音轻短后音重，两音相连猛一碰',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-17', 'pc1-22']
          },
          {
            id: 'pc1-20', name: '四线三格', difficulty: 1,
            keywords: ['四线三格', '书写', '拼音格', '占格'],
            concept: '认识四线三格本，掌握拼音字母在四线三格中的正确书写位置',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc1-15']
          },
          {
            id: 'pc1-21', name: '拼音儿歌', difficulty: 1,
            keywords: ['儿歌', '记忆', '韵母', '声母', '拼读'],
            concept: '通过朗朗上口的儿歌帮助记忆声母和韵母的发音',
            questionTypes: ['选择', '填空'],
            relatedPoints: ['pc1-15', 'pc1-17']
          }
        ]
      },
      {
        id: 'chc1-4',
        title: '汉语拼音（二）',
        icon: '🔤',
        semester: '上册',
        points: [
          {
            id: 'pc1-22', name: '声母d t n l', difficulty: 1,
            keywords: ['d', 't', 'n', 'l', '声母', '拼读'],
            concept: '学习声母d t n l的发音，区分n和l的发音，学会与韵母拼读',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-17', 'pc1-23']
          },
          {
            id: 'pc1-23', name: '声母g k h', difficulty: 1,
            keywords: ['g', 'k', 'h', '声母', '拼读'],
            concept: '学习声母g k h的发音方法和与韵母的拼读',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-22', 'pc1-24']
          },
          {
            id: 'pc1-24', name: '声母j q x', difficulty: 1,
            keywords: ['j', 'q', 'x', '声母', '拼读', 'ü上两点'],
            concept: '学习声母j q x的发音，掌握j q x与ü相拼时ü上去掉两点的规则',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-23', 'pc1-25']
          },
          {
            id: 'pc1-25', name: '三拼音节', difficulty: 2,
            keywords: ['三拼音节', '介母', '声母', '韵母', '拼读'],
            concept: '学习声母+介母+韵母的三拼音节拼读方法，介母要读得轻而短',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-19', 'pc1-24']
          },
          {
            id: 'pc1-26', name: 'j q x与ü拼写规则', difficulty: 2,
            keywords: ['ü上两点', '省略', '拼写规则', 'j q x'],
            concept: 'j q x与ü相拼时ü上两点省略不写，但ü仍读ü的音',
            questionTypes: ['选择', '判断', '填空'],
            relatedPoints: ['pc1-24', 'pc1-27']
          },
          {
            id: 'pc1-27', name: '拼音声调标调规则', difficulty: 2,
            keywords: ['标调规则', '有a先找a', '标调位置'],
            concept: '掌握标调口诀：有a先找a，没a找o e，i u并列标在后',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-18', 'pc1-25']
          },
          {
            id: 'pc1-28', name: '拼音词语拼读', difficulty: 2,
            keywords: ['词语拼读', '音节', '读词', '拼读练习'],
            concept: '将所学声母韵母组合，拼读简单的双音节词语',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-19', 'pc1-25']
          }
        ]
      },
      {
        id: 'chc1-5',
        title: '汉语拼音（三）',
        icon: '🔤',
        semester: '上册',
        points: [
          {
            id: 'pc1-29', name: '声母z c s', difficulty: 1,
            keywords: ['z', 'c', 's', '声母', '平舌音'],
            concept: '学习声母z c s的发音，注意平舌音的发音特点，舌尖平伸',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-30']
          },
          {
            id: 'pc1-30', name: '声母zh ch sh r', difficulty: 1,
            keywords: ['zh', 'ch', 'sh', 'r', '声母', '翘舌音'],
            concept: '学习声母zh ch sh r的发音，注意翘舌音与平舌音的区别',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-29', 'pc1-31']
          },
          {
            id: 'pc1-31', name: '声母y w', difficulty: 1,
            keywords: ['y', 'w', '声母', '整体认读'],
            concept: '学习声母y w的发音和用法，了解y w作为声母的特殊地位',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-29', 'pc1-32']
          },
          {
            id: 'pc1-32', name: '整体认读音节', difficulty: 2,
            keywords: ['整体认读', 'zhi', 'chi', 'shi', 'ri', 'zi', 'ci', 'si', 'yi', 'wu', 'yu'],
            concept: '掌握16个整体认读音节，这些音节不能拆分拼读，要整体记忆',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-29', 'pc1-30', 'pc1-31']
          },
          {
            id: 'pc1-33', name: '平翘舌音区分', difficulty: 2,
            keywords: ['平舌音', '翘舌音', 'z-zh', 'c-ch', 's-sh', '区分'],
            concept: '区分平舌音z c s和翘舌音zh ch sh r的发音，掌握区分方法',
            questionTypes: ['选择', '判断', '填空'],
            relatedPoints: ['pc1-29', 'pc1-30']
          },
          {
            id: 'pc1-34', name: '拼读练习（综合）', difficulty: 2,
            keywords: ['拼读', '综合练习', '音节', '词语'],
            concept: '综合运用所有学过的声母和韵母进行拼读练习，提高拼读速度和准确性',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-19', 'pc1-25', 'pc1-32']
          },
          {
            id: 'pc1-35', name: '拼音儿歌诵读', difficulty: 1,
            keywords: ['儿歌', '诵读', '拼音', '语感'],
            concept: '通过拼音儿歌诵读巩固拼音知识，培养语感和朗读兴趣',
            questionTypes: ['选择', '填空'],
            relatedPoints: ['pc1-32']
          }
        ]
      },
      {
        id: 'chc1-6',
        title: '汉语拼音（四）',
        icon: '🔤',
        semester: '上册',
        points: [
          {
            id: 'pc1-36', name: '复韵母ai ei ui', difficulty: 2,
            keywords: ['ai', 'ei', 'ui', '复韵母', '拼读'],
            concept: '学习三个复韵母ai ei ui的发音，掌握复韵母的发音要领：口型有变化',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-15', 'pc1-37']
          },
          {
            id: 'pc1-37', name: '复韵母ao ou iu', difficulty: 2,
            keywords: ['ao', 'ou', 'iu', '复韵母', '拼读'],
            concept: '学习复韵母ao ou iu的发音和拼读，注意iu和ui的标调位置',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-36', 'pc1-38']
          },
          {
            id: 'pc1-38', name: '复韵母ie üe er', difficulty: 2,
            keywords: ['ie', 'üe', 'er', '复韵母', '特殊韵母'],
            concept: '学习复韵母ie üe和特殊韵母er，er是卷舌韵母，不与声母相拼',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-36', 'pc1-37']
          },
          {
            id: 'pc1-39', name: '前鼻韵母an en in', difficulty: 2,
            keywords: ['an', 'en', 'in', '前鼻韵母', '-n'],
            concept: '学习前鼻韵母an en in的发音，发音时舌尖抵住上齿龈',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-40']
          },
          {
            id: 'pc1-40', name: '后鼻韵母ang eng ing ong', difficulty: 2,
            keywords: ['ang', 'eng', 'ing', 'ong', '后鼻韵母', '-ng'],
            concept: '学习后鼻韵母的发音，与前鼻韵母区分，发音时舌根抬起',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-39']
          },
          {
            id: 'pc1-41', name: '音序查字法', difficulty: 2,
            keywords: ['音序', '查字法', '字典', '大写字母'],
            concept: '学会用音序查字法查字典，掌握查字典的基本步骤',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-32']
          },
          {
            id: 'pc1-42', name: '拼音综合运用', difficulty: 2,
            keywords: ['拼音', '综合', '拼读', '音节', '句子'],
            concept: '综合运用声母、韵母、声调知识进行句子拼读，提高拼音实际运用能力',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-36', 'pc1-39', 'pc1-40']
          }
        ]
      },
      {
        id: 'chc1-7',
        title: '识字单元（二）',
        icon: '🔤',
        semester: '上册',
        points: [
          {
            id: 'pc1-43', name: '画（远看山有色）', difficulty: 1,
            keywords: ['画', '古诗', '反义词', '远近', '有无'],
            concept: '通过古诗《画》认识反义词，感受古诗的对仗美，巩固识字',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-12', 'pc1-44']
          },
          {
            id: 'pc1-44', name: '大小多少', difficulty: 1,
            keywords: ['大', '小', '多', '少', '反义词', '量词'],
            concept: '通过比较认识大小多少等反义词，学习常用量词的使用',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-43', 'pc1-45']
          },
          {
            id: 'pc1-45', name: '小书包', difficulty: 1,
            keywords: ['书包', '文具', '学习用品', '识字'],
            concept: '认识学习用品的名称，培养整理书包的好习惯，巩固识字',
            questionTypes: ['选择', '填空'],
            relatedPoints: ['pc1-7', 'pc1-44']
          },
          {
            id: 'pc1-46', name: '日月明', difficulty: 2,
            keywords: ['会意字', '日月', '明', '构字法'],
            concept: '通过"日月明"等例子学习会意字的构字方法，两个字合在一起表示新意思',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-13', 'pc1-47']
          },
          {
            id: 'pc1-47', name: '升国旗', difficulty: 1,
            keywords: ['国旗', '五星红旗', '升旗', '爱国'],
            concept: '认识国旗，了解升旗仪式的意义，培养爱国情感，学写相关汉字',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-1']
          },
          {
            id: 'pc1-48', name: '汉字结构认识', difficulty: 2,
            keywords: ['独体字', '合体字', '左右结构', '上下结构'],
            concept: '认识汉字的基本结构类型：独体字和合体字（左右、上下、包围结构）',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-13', 'pc1-46']
          },
          {
            id: 'pc1-49', name: '常用量词', difficulty: 1,
            keywords: ['量词', '一个', '一只', '一朵', '一条'],
            concept: '学习常用量词的搭配：个、只、朵、条、把、本等',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-44']
          }
        ]
      },
      {
        id: 'chc1-8',
        title: '课文（一）',
        icon: '📖',
        semester: '上册',
        points: [
          {
            id: 'pc1-50', name: '秋天', difficulty: 1,
            keywords: ['秋天', '自然', '天气', '落叶', '朗读'],
            concept: '通过课文感受秋天的景色特点，学习描写秋天的词语，培养观察能力',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-51', 'pc1-53']
          },
          {
            id: 'pc1-51', name: '小小的船', difficulty: 1,
            keywords: ['月亮', '弯弯', '小小的船', '想象', '儿歌'],
            concept: '通过儿歌感受夜空之美，学习比喻修辞（月儿像小船），培养想象力',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-50', 'pc1-52']
          },
          {
            id: 'pc1-52', name: '江南', difficulty: 1,
            keywords: ['江南', '采莲', '鱼', '古诗', '汉乐府'],
            concept: '通过汉乐府诗歌感受江南水乡的美丽景色，学习古诗背诵',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc1-51', 'pc1-53']
          },
          {
            id: 'pc1-53', name: '四季', difficulty: 1,
            keywords: ['春', '夏', '秋', '冬', '四季', '自然'],
            concept: '了解四季的特点和变化，学习描写四季的基本词语和句式',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-50', 'pc1-52']
          },
          {
            id: 'pc1-54', name: '自然段认识', difficulty: 2,
            keywords: ['自然段', '段落', '开头', '空两格'],
            concept: '认识自然段的概念，知道每个自然段开头要空两格',
            questionTypes: ['选择', '判断', '填空'],
            relatedPoints: ['pc1-50']
          },
          {
            id: 'pc1-55', name: '偏旁部首（一）', difficulty: 2,
            keywords: ['偏旁', '部首', '提手旁', '三点水', '口字旁'],
            concept: '学习常见偏旁部首的名称和含义，如提手旁与手有关、三点水与水有关',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-48', 'pc1-14']
          },
          {
            id: 'pc1-56', name: '看图说话', difficulty: 2,
            keywords: ['看图', '说话', '口语表达', '完整句子'],
            concept: '学会观察图片，用完整的句子描述图片内容，培养口头表达能力',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc1-2']
          }
        ]
      },
      {
        id: 'chc1-9',
        title: '课文（二）',
        icon: '📖',
        semester: '上册',
        points: [
          {
            id: 'pc1-57', name: '雪地里的小画家', difficulty: 1,
            keywords: ['雪地', '小画家', '动物', '脚印', '冬天'],
            concept: '通过儿歌了解不同动物脚印的形状，感受冬天的乐趣',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-58']
          },
          {
            id: 'pc1-58', name: '乌鸦喝水', difficulty: 1,
            keywords: ['乌鸦', '喝水', '聪明', '瓶子', '石子'],
            concept: '通过故事学习乌鸦想办法喝水的过程，培养善于动脑思考的品质',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-57', 'pc1-59']
          },
          {
            id: 'pc1-59', name: '小蜗牛', difficulty: 1,
            keywords: ['蜗牛', '四季', '故事', '观察'],
            concept: '通过小蜗牛的故事了解四季变化，培养耐心观察自然的习惯',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-53', 'pc1-58']
          },
          {
            id: 'pc1-60', name: '汉字笔顺规则', difficulty: 2,
            keywords: ['笔顺', '先横后竖', '先撇后捺', '从上到下', '从左到右'],
            concept: '掌握基本笔顺规则：先横后竖、先撇后捺、从上到下、从左到右、先外后内',
            questionTypes: ['选择', '判断', '填空'],
            relatedPoints: ['pc1-14', 'pc1-48']
          },
          {
            id: 'pc1-61', name: '常用偏旁部首（二）', difficulty: 2,
            keywords: ['偏旁', '草字头', '走之底', '心字底', '女字旁'],
            concept: '继续学习常见偏旁部首，理解偏旁与字义的关系',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-55']
          },
          {
            id: 'pc1-62', name: '反义词积累', difficulty: 1,
            keywords: ['反义词', '大-小', '多-少', '上-下', '前-后'],
            concept: '积累常见反义词对，理解反义词的概念和使用',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-43', 'pc1-44']
          },
          {
            id: 'pc1-63', name: '课后写字练习', difficulty: 1,
            keywords: ['写字', '田字格', '笔画', '书写规范'],
            concept: '在田字格中规范书写本学期学习的生字，注意笔画顺序和间架结构',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc1-60', 'pc1-48']
          }
        ]
      },

      // ========== 一年级下册 ==========
      {
        id: 'chc1-10',
        title: '识字单元（一）',
        icon: '🔤',
        semester: '下册',
        points: [
          {
            id: 'pc1-64', name: '春夏秋冬', difficulty: 1,
            keywords: ['春', '夏', '秋', '冬', '四季', '自然词语'],
            concept: '学习描写四季的词语和短语，认识与季节相关的汉字',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-53', 'pc1-65']
          },
          {
            id: 'pc1-65', name: '姓氏歌', difficulty: 1,
            keywords: ['姓氏', '百家姓', '姓', '姓名'],
            concept: '了解中国姓氏文化，认识常见姓氏的汉字写法',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-64', 'pc1-66']
          },
          {
            id: 'pc1-66', name: '小青蛙', difficulty: 1,
            keywords: ['青蛙', '形声字', '青', '晴', '请', '清'],
            concept: '通过"青"字族学习形声字的构字规律：形旁表义、声旁表音',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-46', 'pc1-67']
          },
          {
            id: 'pc1-67', name: '猜字谜', difficulty: 2,
            keywords: ['字谜', '猜谜', '汉字', '构字'],
            concept: '通过猜字谜活动加深对汉字结构的理解，培养思维能力',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-66', 'pc1-46']
          },
          {
            id: 'pc1-68', name: '形声字规律', difficulty: 2,
            keywords: ['形声字', '形旁', '声旁', '构字规律'],
            concept: '理解形声字由形旁（表义）和声旁（表音）两部分组成',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-66', 'pc1-46']
          },
          {
            id: 'pc1-69', name: '同音字区分', difficulty: 2,
            keywords: ['同音字', '区分', '字义', '用法'],
            concept: '学会区分读音相同但字义不同的汉字，根据语境选择正确的字',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-66', 'pc1-68']
          },
          {
            id: 'pc1-70', name: '加一加减一减识字', difficulty: 1,
            keywords: ['加一加', '减一减', '换一换', '识字方法'],
            concept: '通过加一笔、减一笔、换偏旁等方法记忆和认识新字',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-46', 'pc1-55']
          }
        ]
      },
      {
        id: 'chc1-11',
        title: '课文（一）',
        icon: '📖',
        semester: '下册',
        points: [
          {
            id: 'pc1-71', name: '吃水不忘挖井人', difficulty: 1,
            keywords: ['毛主席', '挖井', '感恩', '革命'],
            concept: '了解毛主席在瑞金的故事，学会感恩，认识革命历史',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-72']
          },
          {
            id: 'pc1-72', name: '我多想去看看', difficulty: 1,
            keywords: ['北京', '天安门', '广场', '愿望'],
            concept: '感受对首都北京的向往之情，学习表达愿望的句式',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-71', 'pc1-73']
          },
          {
            id: 'pc1-73', name: '一个接一个', difficulty: 1,
            keywords: ['生活', '快乐', '烦恼', '转换'],
            concept: '通过生活场景感受快乐与烦恼的转换，培养积极乐观的心态',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-72', 'pc1-74']
          },
          {
            id: 'pc1-74', name: '四个太阳', difficulty: 1,
            keywords: ['太阳', '四季', '颜色', '想象力'],
            concept: '通过四个不同颜色的太阳感受想象力的魅力，学习表达美好心愿',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-53', 'pc1-73']
          },
          {
            id: 'pc1-75', name: '地的用法', difficulty: 2,
            keywords: ['的', '地', '得', '助词', '用法区分'],
            concept: '初步区分"的""地""得"的用法：的+名词，地+动词，得+形容词',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-76']
          },
          {
            id: 'pc1-76', name: '感叹句和问句', difficulty: 2,
            keywords: ['感叹句', '问句', '标点', '语气'],
            concept: '认识感叹号和问号的用法，学会用感叹句和问句表达',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-75']
          },
          {
            id: 'pc1-77', name: '句子仿写', difficulty: 2,
            keywords: ['仿写', '句式', '练习', '表达'],
            concept: '模仿课文中的好句子进行仿写练习，提高造句能力',
            questionTypes: ['选择', '填空'],
            relatedPoints: ['pc1-76', 'pc1-56']
          }
        ]
      },
      {
        id: 'chc1-12',
        title: '识字单元（二）',
        icon: '🔤',
        semester: '下册',
        points: [
          {
            id: 'pc1-78', name: '操场上', difficulty: 1,
            keywords: ['操场', '运动', '体育', '提手旁', '足字旁'],
            concept: '学习与运动相关的词语，认识提手旁和足字旁的字',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-55', 'pc1-79']
          },
          {
            id: 'pc1-79', name: '古对今', difficulty: 1,
            keywords: ['对子', '反义词', '对仗', '韵律'],
            concept: '通过对子歌学习反义词和对仗知识，感受汉语的韵律美',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-12', 'pc1-80']
          },
          {
            id: 'pc1-80', name: '人之初', difficulty: 1,
            keywords: ['三字经', '人之初', '性本善', '国学'],
            concept: '通过《三字经》选段感受传统文化，学习做人做事的道理',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc1-79', 'pc1-81']
          },
          {
            id: 'pc1-81', name: '动物儿歌', difficulty: 1,
            keywords: ['动物', '昆虫', '儿歌', '虫字旁'],
            concept: '通过儿歌认识常见动物和昆虫，学习虫字旁的字',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-55', 'pc1-78']
          },
          {
            id: 'pc1-82', name: '偏旁表义规律', difficulty: 2,
            keywords: ['偏旁', '表义', '规律', '归类'],
            concept: '理解偏旁部首与字义的关系，如虫字旁与昆虫有关、足字旁与脚有关',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-55', 'pc1-61']
          },
          {
            id: 'pc1-83', name: '识字方法总结', difficulty: 2,
            keywords: ['识字方法', '归类', '加减', '换偏旁', '形声'],
            concept: '总结本学期学过的识字方法：加一加、减一减、换偏旁、形声字等',
            questionTypes: ['选择', '判断', '填空'],
            relatedPoints: ['pc1-70', 'pc1-68']
          },
          {
            id: 'pc1-84', name: '传统文化积累', difficulty: 1,
            keywords: ['三字经', '对子', '传统', '国学启蒙'],
            concept: '积累传统蒙学内容，了解中华传统文化的基础知识',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc1-80']
          }
        ]
      },
      {
        id: 'chc1-13',
        title: '课文（二）',
        icon: '📖',
        semester: '下册',
        points: [
          {
            id: 'pc1-85', name: '荷叶圆圆', difficulty: 1,
            keywords: ['荷叶', '夏天', '动物', '比喻', '想象'],
            concept: '通过荷叶上小水珠等角色的描述，感受夏天的美和想象力',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-86']
          },
          {
            id: 'pc1-86', name: '要下雨了', difficulty: 1,
            keywords: ['下雨', '自然现象', '燕子', '蚂蚁', '观察'],
            concept: '了解下雨前动物的异常表现，培养观察自然现象的兴趣',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-85', 'pc1-87']
          },
          {
            id: 'pc1-87', name: '文具的家', difficulty: 1,
            keywords: ['文具', '整理', '习惯', '贝贝'],
            concept: '通过故事养成整理文具的好习惯，学会爱护学习用品',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-45', 'pc1-88']
          },
          {
            id: 'pc1-88', name: '一分钟', difficulty: 1,
            keywords: ['时间', '一分钟', '珍惜', '迟到'],
            concept: '通过故事感受时间的宝贵，懂得珍惜每一分钟',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-87', 'pc1-89']
          },
          {
            id: 'pc1-89', name: '近义词积累', difficulty: 2,
            keywords: ['近义词', '意思相近', '词语积累'],
            concept: '学习积累常见近义词，理解词义的细微差别',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-62']
          },
          {
            id: 'pc1-90', name: '扩句练习', difficulty: 2,
            keywords: ['扩句', '加修饰', '形容词', '句子练习'],
            concept: '学会用形容词、数量词等修饰语把句子写具体、写生动',
            questionTypes: ['选择', '填空'],
            relatedPoints: ['pc1-77', 'pc1-76']
          },
          {
            id: 'pc1-91', name: '阅读理解（简单）', difficulty: 2,
            keywords: ['阅读', '理解', '找信息', '回答问题'],
            concept: '学会从短文中找出相关答案，初步培养阅读理解能力',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-85']
          }
        ]
      },
      {
        id: 'chc1-14',
        title: '课文（三）',
        icon: '📖',
        semester: '下册',
        points: [
          {
            id: 'pc1-92', name: '动物王国开大会', difficulty: 1,
            keywords: ['通知', '格式', '时间', '地点', '动物'],
            concept: '通过故事学习通知的格式和要素：时间、地点、事件',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-93']
          },
          {
            id: 'pc1-93', name: '小猴子下山', difficulty: 1,
            keywords: ['小猴子', '做事', '坚持', '三心二意'],
            concept: '通过故事明白做事要一心一意、有始有终，不能三心二意',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-92', 'pc1-94']
          },
          {
            id: 'pc1-94', name: '棉花姑娘', difficulty: 1,
            keywords: ['棉花', '治病', '七星瓢虫', '益虫'],
            concept: '了解益虫益鸟对人类的帮助，认识生物防治的知识',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-93', 'pc1-95']
          },
          {
            id: 'pc1-95', name: '咕咚', difficulty: 1,
            keywords: ['咕咚', '害怕', '真相', '勇敢'],
            concept: '通过故事明白遇事要动脑筋想一想，不要盲目害怕和跟从',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-94', 'pc1-96']
          },
          {
            id: 'pc1-96', name: '通知的写法', difficulty: 2,
            keywords: ['通知', '格式', '要素', '应用文'],
            concept: '掌握通知的基本格式：标题、正文（时间、地点、内容）、落款',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-92']
          },
          {
            id: 'pc1-97', name: '分角色朗读', difficulty: 2,
            keywords: ['分角色', '朗读', '语气', '表演'],
            concept: '学会分角色朗读课文，根据不同角色的语气读出感情',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc1-92', 'pc1-94']
          },
          {
            id: 'pc1-98', name: '词语搭配', difficulty: 2,
            keywords: ['搭配', '动词+名词', '形容词+名词', '词语运用'],
            concept: '学习正确的词语搭配，如"碧绿碧绿的荷叶""雪白雪白的棉花"',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-89', 'pc1-90']
          }
        ]
      },
      {
        id: 'chc1-15',
        title: '课文（四）',
        icon: '📖',
        semester: '下册',
        points: [
          {
            id: 'pc1-99', name: '小壁虎借尾巴', difficulty: 1,
            keywords: ['壁虎', '尾巴', '借', '再生', '动物'],
            concept: '通过故事了解不同动物尾巴的用途和壁虎尾巴再生的知识',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-57', 'pc1-94']
          },
          {
            id: 'pc1-100', name: '标点符号运用', difficulty: 2,
            keywords: ['标点', '逗号', '句号', '问号', '感叹号'],
            concept: '正确使用逗号、句号、问号、感叹号等基本标点符号',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-76']
          },
          {
            id: 'pc1-101', name: '课文内容理解', difficulty: 2,
            keywords: ['理解', '中心思想', '故事道理', '课文'],
            concept: '能理解课文的主要内容，说出故事告诉我们的道理',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-91', 'pc1-93']
          },
          {
            id: 'pc1-102', name: '看图写话（完整）', difficulty: 3,
            keywords: ['看图写话', '写话', '完整句子', '表达'],
            concept: '能观察多幅图，用完整的句子写出图意，做到语句通顺',
            questionTypes: ['判断'],
            relatedPoints: ['pc1-56', 'pc1-90']
          },
          {
            id: 'pc1-103', name: '写字规范总结', difficulty: 1,
            keywords: ['写字', '规范', '笔顺', '结构', '整洁'],
            concept: '总结本学年的写字要求：笔顺正确、结构匀称、页面整洁',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc1-60', 'pc1-63']
          },
          {
            id: 'pc1-104', name: '一学年字词盘点', difficulty: 2,
            keywords: ['字词', '盘点', '复习', '总结'],
            concept: '回顾整学年学习的生字词，进行分类复习和巩固',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-83', 'pc1-100']
          },
          {
            id: 'pc1-105', name: '口语交际', difficulty: 2,
            keywords: ['口语', '交际', '表达', '倾听'],
            concept: '培养认真倾听和清楚表达的口语交际能力',
            questionTypes: ['判断'],
            relatedPoints: ['pc1-56', 'pc1-102']
          }
        ]
      }
    ]
  },

  '2': {
    title: '二年级语文',
    icon: '📝',
    color: '#ff9a44',
    chapters: [
      // ========== 二年级上册 ==========
      {
        id: 'chc2-1',
        title: '识字单元',
        icon: '🔤',
        semester: '上册',
        points: [
          {
            id: 'pc2-1', name: '场景歌', difficulty: 2,
            keywords: ['量词', '场景', '事物', '海边', '乡村'],
            concept: '通过不同场景学习量词的准确使用，如"一只海鸥""一片沙滩"',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-49', 'pc2-2']
          },
          {
            id: 'pc2-2', name: '树之歌', difficulty: 2,
            keywords: ['树木', '杨树', '柳树', '梧桐', '木字旁'],
            concept: '认识不同树木的特点，学习木字旁的字，积累描写树木的词语',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-1', 'pc2-3']
          },
          {
            id: 'pc2-3', name: '拍手歌', difficulty: 2,
            keywords: ['动物', '保护', '拍手歌', '鸟类', '兽类'],
            concept: '通过拍手歌认识各种动物，了解动物保护的知识',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-2', 'pc2-4']
          },
          {
            id: 'pc2-4', name: '田家四季歌', difficulty: 2,
            keywords: ['四季', '农事', '田家', '季节', '农活'],
            concept: '通过四季农事活动了解农村生活，积累描写四季的词语',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-64', 'pc2-1']
          },
          {
            id: 'pc2-5', name: '形声字归类识字', difficulty: 2,
            keywords: ['形声字', '归类', '识字方法', '偏旁'],
            concept: '运用形声字规律进行归类识字，提高识字效率',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-68', 'pc1-82']
          },
          {
            id: 'pc2-6', name: '查字典（部首查字法）', difficulty: 2,
            keywords: ['部首查字法', '字典', '查字', '部首'],
            concept: '学会用部首查字法查字典：确定部首→查部首→数剩余笔画→找到汉字',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-41']
          },
          {
            id: 'pc2-7', name: '多音字初步', difficulty: 2,
            keywords: ['多音字', '不同读音', '不同意思', '语境'],
            concept: '认识多音字的概念，根据语境判断多音字的正确读音',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-5']
          }
        ]
      },
      {
        id: 'chc2-2',
        title: '课文（一）',
        icon: '📖',
        semester: '上册',
        points: [
          {
            id: 'pc2-8', name: '小蝌蚪找妈妈', difficulty: 2,
            keywords: ['蝌蚪', '青蛙', '成长', '变化', '动物'],
            concept: '了解青蛙的生长变化过程（蝌蚪→长后腿→长前腿→尾巴消失→青蛙）',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-9', 'pc1-99']
          },
          {
            id: 'pc2-9', name: '我是什么', difficulty: 2,
            keywords: ['水', '变化', '云', '雨', '雪', '冰雹'],
            concept: '了解水的三态变化和自然现象（云、雨、冰雹、雪的形成）',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-8', 'pc2-10']
          },
          {
            id: 'pc2-10', name: '植物妈妈有办法', difficulty: 2,
            keywords: ['植物', '传播种子', '蒲公英', '苍耳', '豌豆'],
            concept: '了解几种植物传播种子的方法，感受大自然的奇妙',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-9', 'pc2-11']
          },
          {
            id: 'pc2-11', name: '拟人修辞手法', difficulty: 3,
            keywords: ['拟人', '修辞', '把物当人写', '生动'],
            concept: '认识拟人修辞：把事物当作人来写，赋予人的动作和情感',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-51', 'pc2-10']
          },
          {
            id: 'pc2-12', name: '科普知识积累', difficulty: 2,
            keywords: ['科学', '自然', '常识', '科普'],
            concept: '积累自然科学常识：动物生长、水的变化、植物传播种子等',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-8', 'pc2-9', 'pc2-10']
          },
          {
            id: 'pc2-13', name: '按课文内容填空', difficulty: 2,
            keywords: ['填空', '课文背诵', '默写', '记忆'],
            concept: '能够按课文原文填空，检测对课文内容的记忆和理解',
            questionTypes: ['填空'],
            relatedPoints: ['pc2-8', 'pc2-10']
          },
          {
            id: 'pc2-14', name: '句式练习：有的...有的...', difficulty: 2,
            keywords: ['句式', '有的', '排比', '造句'],
            concept: '学会用"有的……有的……还有的……"句式描述多个事物',
            questionTypes: ['选择', '填空'],
            relatedPoints: ['pc1-77', 'pc1-90']
          }
        ]
      },
      {
        id: 'chc2-3',
        title: '课文（二）',
        icon: '📖',
        semester: '上册',
        points: [
          {
            id: 'pc2-15', name: '曹冲称象', difficulty: 2,
            keywords: ['曹冲', '称象', '聪明', '浮力', '故事'],
            concept: '学习曹冲用石头代替大象重量的巧妙方法，培养善于思考的品质',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-16']
          },
          {
            id: 'pc2-16', name: '玲玲的画', difficulty: 2,
            keywords: ['玲玲', '画', '弄脏', '想办法', '坏事变好事'],
            concept: '通过故事学会遇事多动脑筋，坏事有时可以变成好事',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-15', 'pc2-17']
          },
          {
            id: 'pc2-17', name: '一封信', difficulty: 2,
            keywords: ['信', '写信', '格式', '亲人', '思念'],
            concept: '了解信的基本格式，感受亲人之间的思念和关爱',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-16', 'pc2-18']
          },
          {
            id: 'pc2-18', name: '妈妈睡了', difficulty: 2,
            keywords: ['妈妈', '睡觉', '美丽', '母爱', '观察'],
            concept: '通过观察妈妈睡觉的样子，感受母爱的伟大和温馨',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-17', 'pc2-19']
          },
          {
            id: 'pc2-19', name: '比喻句', difficulty: 2,
            keywords: ['比喻', '好像', '像', '仿佛', '修辞'],
            concept: '认识比喻句：用"好像""像""仿佛"等词将一事物比作另一事物',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-51', 'pc2-11']
          },
          {
            id: 'pc2-20', name: '数量词搭配', difficulty: 2,
            keywords: ['数量词', '正确搭配', '一+量词+名词'],
            concept: '正确使用数量词搭配，如"一封信""一匹马""一支笔"',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc2-1', 'pc1-49']
          },
          {
            id: 'pc2-21', name: '人物品质分析', difficulty: 3,
            keywords: ['人物', '品质', '聪明', '爱', '分析'],
            concept: '通过课文人物的行为分析其品质特点，如曹冲的聪明、玲玲的机智',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-15', 'pc2-16']
          }
        ]
      },
      {
        id: 'chc2-4',
        title: '课文（三）',
        icon: '📖',
        semester: '上册',
        points: [
          {
            id: 'pc2-22', name: '黄山奇石', difficulty: 2,
            keywords: ['黄山', '奇石', '景色', '名胜', '想象'],
            concept: '欣赏黄山奇石的奇特造型，学习用"好像"描述石头的形状',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-23', 'pc2-24']
          },
          {
            id: 'pc2-23', name: '日月潭', difficulty: 2,
            keywords: ['日月潭', '台湾', '风景', '湖水', '名胜'],
            concept: '了解台湾日月潭的美丽风光，感受祖国山河的壮丽',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-22', 'pc2-24']
          },
          {
            id: 'pc2-24', name: '葡萄沟', difficulty: 2,
            keywords: ['葡萄沟', '新疆', '葡萄', '好客', '民族'],
            concept: '了解新疆葡萄沟的特产和维吾尔族人民的热情好客',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-22', 'pc2-23']
          },
          {
            id: 'pc2-25', name: '难忘的泼水节', difficulty: 2,
            keywords: ['泼水节', '傣族', '周总理', '民族团结'],
            concept: '了解傣族泼水节的风俗，感受周总理与人民的深厚感情',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-24']
          },
          {
            id: 'pc2-26', name: '风景描写方法', difficulty: 3,
            keywords: ['风景', '描写', '顺序', '词语积累'],
            concept: '学习按一定顺序描写景物：时间顺序、空间顺序，积累描写风景的好词',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-22', 'pc2-23']
          },
          {
            id: 'pc2-27', name: '祖国地名与特产', difficulty: 2,
            keywords: ['地名', '特产', '省份', '民族文化'],
            concept: '了解祖国各地的名胜古迹和特产，增强民族自豪感',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc2-23', 'pc2-24', 'pc2-25']
          },
          {
            id: 'pc2-28', name: '关联词：因为...所以...', difficulty: 2,
            keywords: ['关联词', '因为', '所以', '因果关系'],
            concept: '学会使用"因为……所以……"表达因果关系',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-75']
          }
        ]
      },
      {
        id: 'chc2-5',
        title: '课文（四）',
        icon: '📖',
        semester: '上册',
        points: [
          {
            id: 'pc2-29', name: '古诗二首（登鹳雀楼）', difficulty: 2,
            keywords: ['登鹳雀楼', '王之涣', '白日依山尽', '黄河入海流', '古诗'],
            concept: '背诵并理解《登鹳雀楼》，体会"欲穷千里目，更上一层楼"的哲理',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc2-30']
          },
          {
            id: 'pc2-30', name: '古诗二首（望庐山瀑布）', difficulty: 2,
            keywords: ['望庐山瀑布', '李白', '飞流直下三千尺', '古诗'],
            concept: '背诵并理解《望庐山瀑布》，感受夸张手法在古诗中的运用',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc2-29', 'pc2-31']
          },
          {
            id: 'pc2-31', name: '古诗朗读节奏', difficulty: 2,
            keywords: ['朗读节奏', '停顿', '节奏', '古诗朗读'],
            concept: '掌握古诗的朗读节奏，五言诗一般按2/3或2/1/2停顿',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc2-29', 'pc2-30']
          },
          {
            id: 'pc2-32', name: '夸张修辞', difficulty: 3,
            keywords: ['夸张', '修辞', '三千尺', '夸大', '效果'],
            concept: '认识夸张修辞：有意夸大或缩小事物的特征，增强表达效果',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-11', 'pc2-19']
          },
          {
            id: 'pc2-33', name: '古诗背诵技巧', difficulty: 2,
            keywords: ['背诵', '技巧', '理解', '画面'],
            concept: '通过理解诗意和想象画面来帮助古诗背诵，而非死记硬背',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc2-29', 'pc2-30', 'pc2-31']
          },
          {
            id: 'pc2-34', name: '日积月累（名言警句）', difficulty: 2,
            keywords: ['名言', '警句', '积累', '道理'],
            concept: '积累课文中学到的名言警句和优美句子',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc2-29']
          },
          {
            id: 'pc2-35', name: '写话练习', difficulty: 2,
            keywords: ['写话', '练习', '观察', '表达'],
            concept: '学会用几句话写出自己的观察和感受，做到语句通顺',
            questionTypes: ['判断'],
            relatedPoints: ['pc1-102']
          }
        ]
      },
      {
        id: 'chc2-6',
        title: '语文园地',
        icon: '📚',
        semester: '上册',
        points: [
          {
            id: 'pc2-36', name: '我的发现', difficulty: 2,
            keywords: ['发现', '汉字规律', '识字', '归类'],
            concept: '通过"我的发现"板块，发现汉字的构字规律和识字方法',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-5']
          },
          {
            id: 'pc2-37', name: '字词句运用', difficulty: 2,
            keywords: ['字词', '句', '运用', '练习'],
            concept: '综合运用字词句知识进行练习，提高语文综合能力',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-20', 'pc2-28']
          },
          {
            id: 'pc2-38', name: '写话：我喜欢的小动物', difficulty: 2,
            keywords: ['写话', '小动物', '描写', '特点'],
            concept: '用几句话描写自己喜欢的小动物，写出动物的外形和特点',
            questionTypes: ['判断'],
            relatedPoints: ['pc1-102', 'pc2-35']
          },
          {
            id: 'pc2-39', name: '口语交际：做手工', difficulty: 2,
            keywords: ['口语', '手工', '介绍', '过程'],
            concept: '学会按顺序介绍自己的手工作品，说清楚制作过程',
            questionTypes: ['判断'],
            relatedPoints: ['pc1-105']
          },
          {
            id: 'pc2-40', name: '展示台', difficulty: 1,
            keywords: ['展示', '成果', '分享', '交流'],
            concept: '展示自己的学习成果，学会与同学分享和交流',
            questionTypes: ['判断'],
            relatedPoints: ['pc2-39']
          },
          {
            id: 'pc2-41', name: '识字加油站', difficulty: 2,
            keywords: ['识字', '拓展', '生活识字', '招牌'],
            concept: '从生活场景中识字：招牌、广告、包装等，拓展识字渠道',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc2-5']
          },
          {
            id: 'pc2-42', name: '日积月累（成语）', difficulty: 2,
            keywords: ['成语', '积累', '四字词语', '运用'],
            concept: '积累本单元出现的成语和四字词语，理解意思并学会运用',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-34']
          }
        ]
      },

      // ========== 二年级下册 ==========
      {
        id: 'chc2-7',
        title: '识字单元',
        icon: '🔤',
        semester: '下册',
        points: [
          {
            id: 'pc2-43', name: '古诗二首（村居）', difficulty: 2,
            keywords: ['村居', '高鼎', '草长莺飞', '春天', '古诗'],
            concept: '背诵并理解《村居》，感受春天的生机和儿童放风筝的快乐',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc2-44']
          },
          {
            id: 'pc2-44', name: '古诗二首（咏柳）', difficulty: 2,
            keywords: ['咏柳', '贺知章', '碧玉妆成', '柳树', '春天'],
            concept: '背诵并理解《咏柳》，学习用比喻手法描写春天的柳树',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc2-43', 'pc2-45']
          },
          {
            id: 'pc2-45', name: '找春天', difficulty: 2,
            keywords: ['春天', '寻找', '观察', '自然', '课文'],
            concept: '通过课文学会观察和发现春天的变化，感受春天的美好',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-43', 'pc2-44']
          },
          {
            id: 'pc2-46', name: '开满鲜花的小路', difficulty: 2,
            keywords: ['鲜花', '鼹鼠', '包裹', '春天', '故事'],
            concept: '通过故事感受分享的快乐和春天的美丽',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-45']
          },
          {
            id: 'pc2-47', name: '邓小平爷爷植树', difficulty: 2,
            keywords: ['邓小平', '植树', '植树节', '环保'],
            concept: '了解邓小平爷爷植树的故事，培养环保意识和植树节的意义',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-46']
          },
          {
            id: 'pc2-48', name: '春天的词语积累', difficulty: 2,
            keywords: ['春天', '词语', '积累', '描写'],
            concept: '积累描写春天的词语：春暖花开、万物复苏、柳绿花红等',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc2-45']
          },
          {
            id: 'pc2-49', name: '部首查字法练习', difficulty: 2,
            keywords: ['部首', '查字法', '练习', '字典'],
            concept: '通过练习巩固部首查字法的使用，提高查字速度',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-6']
          }
        ]
      },
      {
        id: 'chc2-8',
        title: '课文（一）',
        icon: '📖',
        semester: '下册',
        points: [
          {
            id: 'pc2-50', name: '古诗二首（赋得古原草送别）', difficulty: 2,
            keywords: ['赋得古原草送别', '白居易', '离离原上草', '顽强', '古诗'],
            concept: '背诵并理解古诗，感受小草顽强的生命力',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc2-51']
          },
          {
            id: 'pc2-51', name: '古诗二首（宿新市徐公店）', difficulty: 2,
            keywords: ['宿新市徐公店', '杨万里', '篱落疏疏', '儿童', '春天'],
            concept: '背诵并理解古诗，感受田园风光和儿童追蝶的童趣',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc2-50', 'pc2-52']
          },
          {
            id: 'pc2-52', name: '雷锋叔叔你在哪里', difficulty: 2,
            keywords: ['雷锋', '助人为乐', '奉献', '榜样'],
            concept: '学习雷锋叔叔乐于助人的精神，理解"雷锋精神"的含义',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-53']
          },
          {
            id: 'pc2-53', name: '千人糕', difficulty: 2,
            keywords: ['千人糕', '合作', '劳动', '珍惜'],
            concept: '通过故事理解任何东西都凝聚着很多人的劳动，要学会珍惜',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-52', 'pc2-54']
          },
          {
            id: 'pc2-54', name: '一匹出色的马', difficulty: 2,
            keywords: ['出色的马', '柳条', '想象力', '回家', '郊游'],
            concept: '通过故事感受想象力的力量和家庭的温暖',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-53']
          },
          {
            id: 'pc2-55', name: '关联词：虽然...但是...', difficulty: 2,
            keywords: ['关联词', '虽然', '但是', '转折关系'],
            concept: '学会使用"虽然……但是……"表达转折关系',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-28']
          },
          {
            id: 'pc2-56', name: '词语理解方法', difficulty: 2,
            keywords: ['词语理解', '联系上下文', '近义词', '拆分法'],
            concept: '学习理解词语的方法：联系上下文、找近义词、拆字理解等',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-89']
          }
        ]
      },
      {
        id: 'chc2-9',
        title: '识字单元（二）',
        icon: '🔤',
        semester: '下册',
        points: [
          {
            id: 'pc2-57', name: '神州谣', difficulty: 2,
            keywords: ['神州', '中国', '黄河', '长江', '祖国'],
            concept: '通过儿歌了解祖国的壮丽山河和伟大成就，增强爱国情感',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-58']
          },
          {
            id: 'pc2-58', name: '传统节日', difficulty: 2,
            keywords: ['春节', '元宵', '端午', '中秋', '传统节日', '习俗'],
            concept: '了解中国传统节日的时间和习俗，感受中华文化的魅力',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc2-57', 'pc2-59']
          },
          {
            id: 'pc2-59', name: '"贝"的故事', difficulty: 2,
            keywords: ['贝', '贝字旁', '钱币', '偏旁', '字义'],
            concept: '通过"贝"字了解贝字旁的字多与钱财有关，理解偏旁表义',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-82', 'pc2-60']
          },
          {
            id: 'pc2-60', name: '中国美食', difficulty: 2,
            keywords: ['美食', '烹饪', '火字旁', '四点底'],
            concept: '认识各种中国美食，学习与烹饪相关的汉字（火字旁、四点底）',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-59']
          },
          {
            id: 'pc2-61', name: '中华文化积累', difficulty: 2,
            keywords: ['文化', '传统', '节日', '美食', '积累'],
            concept: '综合积累中华传统文化知识：节日、美食、地名等',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-57', 'pc2-58', 'pc2-60']
          },
          {
            id: 'pc2-62', name: '偏旁归类复习', difficulty: 2,
            keywords: ['偏旁', '归类', '复习', '表义'],
            concept: '复习本册学过的偏旁部首，进行归类整理，巩固偏旁表义的知识',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc1-82', 'pc2-5']
          }
        ]
      },
      {
        id: 'chc2-10',
        title: '课文（二）',
        icon: '📖',
        semester: '下册',
        points: [
          {
            id: 'pc2-63', name: '彩色的梦', difficulty: 2,
            keywords: ['彩色', '梦', '想象', '画画', '诗歌'],
            concept: '通过诗歌感受色彩和想象力的美好，学习用色彩描绘世界',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-64']
          },
          {
            id: 'pc2-64', name: '枫树上的喜鹊', difficulty: 2,
            keywords: ['枫树', '喜鹊', '想象', '对话', '自然'],
            concept: '通过想象喜鹊的对话，培养丰富的想象力和对自然的热爱',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-63', 'pc2-65']
          },
          {
            id: 'pc2-65', name: '沙滩上的童话', difficulty: 2,
            keywords: ['沙滩', '童话', '故事', '想象', '编故事'],
            concept: '通过故事学习在沙滩上编童话，培养想象力和创造力',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-64', 'pc2-66']
          },
          {
            id: 'pc2-66', name: '我是一只小虫子', difficulty: 2,
            keywords: ['小虫子', '昆虫', '视角', '想象', '快乐'],
            concept: '从小虫子的视角看世界，感受做小虫子的快乐和烦恼',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-65']
          },
          {
            id: 'pc2-67', name: '写话：我的想象', difficulty: 2,
            keywords: ['写话', '想象', '编写', '表达'],
            concept: '发挥想象力，用几句话写一个有趣的想象故事',
            questionTypes: ['判断'],
            relatedPoints: ['pc2-35', 'pc2-63']
          },
          {
            id: 'pc2-68', name: '口语交际：推荐一部动画片', difficulty: 2,
            keywords: ['口语', '推荐', '动画片', '表达'],
            concept: '学会向同学推荐一部动画片，说清楚推荐的理由',
            questionTypes: ['判断'],
            relatedPoints: ['pc2-39']
          }
        ]
      },
      {
        id: 'chc2-11',
        title: '课文（三）',
        icon: '📖',
        semester: '下册',
        points: [
          {
            id: 'pc2-69', name: '寓言二则（亡羊补牢）', difficulty: 2,
            keywords: ['亡羊补牢', '寓言', '知错就改', '道理'],
            concept: '通过寓言理解"亡羊补牢，为时未晚"的道理，犯了错要及时改正',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-70']
          },
          {
            id: 'pc2-70', name: '寓言二则（揠苗助长）', difficulty: 2,
            keywords: ['揠苗助长', '寓言', '急于求成', '道理'],
            concept: '通过寓言明白做事不能急于求成，要遵循事物发展规律',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-69', 'pc2-71']
          },
          {
            id: 'pc2-71', name: '画杨桃', difficulty: 2,
            keywords: ['杨桃', '不同角度', '实事求是', '观察'],
            concept: '通过故事明白从不同角度看事物会不同，要实事求是',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-70', 'pc2-72']
          },
          {
            id: 'pc2-72', name: '小马过河', difficulty: 2,
            keywords: ['小马', '过河', '实践', '独立思考'],
            concept: '通过故事明白别人说的不一定对，要亲自去试一试才知道',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-71']
          },
          {
            id: 'pc2-73', name: '寓言故事理解', difficulty: 3,
            keywords: ['寓言', '道理', '理解', '寓意'],
            concept: '学会读懂寓言故事，能说出故事蕴含的道理和启示',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-69', 'pc2-70']
          },
          {
            id: 'pc2-74', name: '对话标点', difficulty: 2,
            keywords: ['对话', '引号', '冒号', '标点'],
            concept: '正确使用引号和冒号书写人物对话',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc1-100']
          },
          {
            id: 'pc2-75', name: '续写故事', difficulty: 3,
            keywords: ['续写', '故事', '想象', '写话'],
            concept: '根据课文内容续写故事的发展，培养想象力和写作能力',
            questionTypes: ['判断'],
            relatedPoints: ['pc2-67', 'pc2-73']
          }
        ]
      },
      {
        id: 'chc2-12',
        title: '课文（四）',
        icon: '📖',
        semester: '下册',
        points: [
          {
            id: 'pc2-76', name: '古诗二首（晓出净慈寺送林子方）', difficulty: 2,
            keywords: ['晓出净慈寺送林子方', '杨万里', '接天莲叶', '荷花', '古诗'],
            concept: '背诵并理解古诗，感受西湖六月荷花盛开的壮丽景象',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc2-77']
          },
          {
            id: 'pc2-77', name: '古诗二首（绝句）', difficulty: 2,
            keywords: ['绝句', '杜甫', '两个黄鹂', '春天', '古诗'],
            concept: '背诵并理解杜甫的《绝句》，感受春天的生机和色彩美',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc2-76', 'pc2-78']
          },
          {
            id: 'pc2-78', name: '雷雨', difficulty: 2,
            keywords: ['雷雨', '天气', '自然现象', '描写', '顺序'],
            concept: '学习按时间顺序描写雷雨前、雷雨中、雷雨后的景象',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-77', 'pc2-79']
          },
          {
            id: 'pc2-79', name: '要是你在野外迷了路', difficulty: 2,
            keywords: ['野外', '辨别方向', '太阳', '北极星', '自然'],
            concept: '学习在野外辨别方向的方法：太阳、北极星、树影等',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-78']
          },
          {
            id: 'pc2-80', name: '太空生活趣事多', difficulty: 2,
            keywords: ['太空', '宇航员', '失重', '科学'],
            concept: '了解宇航员在太空中的特殊生活方式，感受科学的奇妙',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-79']
          },
          {
            id: 'pc2-81', name: '写话：我的好朋友', difficulty: 2,
            keywords: ['写话', '朋友', '描写', '特点'],
            concept: '用几句话写一写自己的好朋友，写出外貌和性格特点',
            questionTypes: ['判断'],
            relatedPoints: ['pc2-35', 'pc2-67']
          },
          {
            id: 'pc2-82', name: '二年级字词总复习', difficulty: 2,
            keywords: ['字词', '复习', '总结', '二年级'],
            concept: '回顾二年级全年的生字词和语文知识，进行系统复习',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-42', 'pc2-62']
          }
        ]
      }
    ]
  },

  '3': {
    title: '三年级语文',
    icon: '📝',
    color: '#4facfe',
    chapters: [
      // ========== 三年级上册 ==========
      {
        id: 'chc3-1',
        title: '第一单元：学校生活',
        icon: '🏫',
        semester: '上册',
        points: [
          {
            id: 'pc3-1', name: '大青树下的小学', difficulty: 2,
            keywords: ['大青树', '小学', '民族', '校园', '朗读'],
            concept: '通过课文感受边疆小学的美丽和多民族学生共同学习的快乐',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-2']
          },
          {
            id: 'pc3-2', name: '花的学校', difficulty: 2,
            keywords: ['花', '学校', '泰戈尔', '想象', '诗歌'],
            concept: '通过泰戈尔的诗歌感受丰富的想象力，学习拟人手法',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-1', 'pc3-3']
          },
          {
            id: 'pc3-3', name: '不懂就要问', difficulty: 2,
            keywords: ['孙中山', '勤学好问', '勇敢', '品质'],
            concept: '学习孙中山不懂就问的勤学精神，培养主动学习的习惯',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-2']
          },
          {
            id: 'pc3-4', name: '词语归类（校园相关）', difficulty: 2,
            keywords: ['词语', '归类', '校园', '积累'],
            concept: '积累与校园生活相关的词语，学会按类别整理词语',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc3-1']
          },
          {
            id: 'pc3-5', name: '新鲜感的词语和句子', difficulty: 2,
            keywords: ['新鲜感', '词语', '句子', '积累', '摘抄'],
            concept: '学会找出有新鲜感的词语和句子，养成摘抄好词好句的习惯',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-4']
          },
          {
            id: 'pc3-6', name: '阅读预测策略', difficulty: 3,
            keywords: ['预测', '阅读策略', '猜想', '验证'],
            concept: '学习根据题目和插图预测课文内容，培养阅读预测能力',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc3-1']
          },
          {
            id: 'pc3-7', name: '口语交际：我的暑假生活', difficulty: 2,
            keywords: ['口语', '暑假', '分享', '表达'],
            concept: '学会清楚地讲述自己的暑假生活经历，认真倾听同学的分享',
            questionTypes: ['判断'],
            relatedPoints: ['pc2-68']
          }
        ]
      },
      {
        id: 'chc3-2',
        title: '第二单元：金秋时节',
        icon: '🍂',
        semester: '上册',
        points: [
          {
            id: 'pc3-8', name: '古诗三首（山行）', difficulty: 2,
            keywords: ['山行', '杜牧', '停车坐爱枫林晚', '秋天', '古诗'],
            concept: '背诵并理解《山行》，感受秋天枫叶的美丽，学习借景抒情',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc3-9', 'pc3-10']
          },
          {
            id: 'pc3-9', name: '古诗三首（赠刘景文）', difficulty: 2,
            keywords: ['赠刘景文', '苏轼', '荷尽菊残', '秋天', '古诗'],
            concept: '背诵并理解《赠刘景文》，感受秋天的另一番景象和勉励之意',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc3-8', 'pc3-10']
          },
          {
            id: 'pc3-10', name: '古诗三首（夜书所见）', difficulty: 2,
            keywords: ['夜书所见', '叶绍翁', '萧萧梧叶', '思乡', '古诗'],
            concept: '背诵并理解《夜书所见》，感受诗人对家乡的思念之情',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc3-8', 'pc3-11']
          },
          {
            id: 'pc3-11', name: '铺满金色巴掌的水泥道', difficulty: 2,
            keywords: ['水泥道', '梧桐叶', '秋天', '比喻', '观察'],
            concept: '通过秋天落叶铺成的金色水泥道，感受秋天的美和比喻的生动',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-8', 'pc3-12']
          },
          {
            id: 'pc3-12', name: '秋天的雨', difficulty: 2,
            keywords: ['秋雨', '颜色', '气味', '秋天', '五彩缤纷'],
            concept: '通过秋天的雨感受秋天的色彩、气味和丰收，学习总分结构',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-11', 'pc3-13']
          },
          {
            id: 'pc3-13', name: '听听秋的声音', difficulty: 2,
            keywords: ['秋声', '声音', '诗歌', '秋天', '拟声词'],
            concept: '通过诗歌感受秋天各种美妙的声音，学习拟声词的运用',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-12']
          },
          {
            id: 'pc3-14', name: '理解词语的方法', difficulty: 2,
            keywords: ['理解词语', '查字典', '联系上下文', '近义词替换'],
            concept: '综合运用多种方法理解词语：查字典、联系上下文、找近义词等',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-56']
          }
        ]
      },
      {
        id: 'chc3-3',
        title: '第三单元：童话世界',
        icon: '🧚',
        semester: '上册',
        points: [
          {
            id: 'pc3-15', name: '卖火柴的小女孩', difficulty: 3,
            keywords: ['安徒生', '卖火柴', '小女孩', '幻想', '可怜'],
            concept: '通过安徒生的童话感受小女孩的悲惨命运，培养同情心',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-16']
          },
          {
            id: 'pc3-16', name: '那一定会很好', difficulty: 2,
            keywords: ['种子', '变化', '成长', '童话', '想象'],
            concept: '通过种子不断变化的故事感受成长的美好',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-15', 'pc3-17']
          },
          {
            id: 'pc3-17', name: '在牛肚子里旅行', difficulty: 2,
            keywords: ['牛肚子', '旅行', '红头', '青头', '友谊'],
            concept: '通过红头在牛肚子里的奇妙旅行，感受朋友间的真挚友谊',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-16', 'pc3-18']
          },
          {
            id: 'pc3-18', name: '一块奶酪', difficulty: 2,
            keywords: ['奶酪', '蚂蚁', '纪律', '队长', '品质'],
            concept: '通过蚂蚁队长的故事学习遵守纪律和以身作则的品质',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-17']
          },
          {
            id: 'pc3-19', name: '童话故事的想象', difficulty: 3,
            keywords: ['童话', '想象', '拟人', '夸张', '创编'],
            concept: '理解童话故事中丰富的想象和拟人手法，尝试创编童话',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-15', 'pc2-11']
          },
          {
            id: 'pc3-20', name: '复述故事', difficulty: 3,
            keywords: ['复述', '故事', '主要情节', '关键信息'],
            concept: '学会用自己的话复述故事的主要情节，做到完整、通顺',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc3-17']
          },
          {
            id: 'pc3-21', name: '修改病句（简单）', difficulty: 2,
            keywords: ['病句', '修改', '语序', '搭配', '完整'],
            concept: '初步学会修改简单的病句：语序不当、搭配不当、成分缺失等',
            questionTypes: ['选择', '判断', '填空'],
            relatedPoints: ['pc1-100']
          }
        ]
      },
      {
        id: 'chc3-4',
        title: '第四单元：预测策略',
        icon: '🔮',
        semester: '上册',
        points: [
          {
            id: 'pc3-22', name: '总也倒不了的老屋', difficulty: 2,
            keywords: ['老屋', '帮助', '善良', '预测', '重复'],
            concept: '通过老屋帮助小动物的故事，练习预测策略，感受善良品质',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-23']
          },
          {
            id: 'pc3-23', name: '胡萝卜先生的长胡子', difficulty: 2,
            keywords: ['胡萝卜', '长胡子', '想象', '预测', '续编'],
            concept: '通过故事练习预测和续编，培养想象力',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-22', 'pc3-24']
          },
          {
            id: 'pc3-24', name: '小狗学叫', difficulty: 2,
            keywords: ['小狗', '学叫', '模仿', '故事', '预测'],
            concept: '通过故事预测小狗的命运，体会不同结局的可能性',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-23']
          },
          {
            id: 'pc3-25', name: '预测策略总结', difficulty: 3,
            keywords: ['预测', '策略', '标题', '插图', '内容'],
            concept: '总结预测策略：根据标题、插图、生活经验和文章内容进行预测',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc3-6', 'pc3-22']
          },
          {
            id: 'pc3-26', name: '名字的含义', difficulty: 2,
            keywords: ['名字', '含义', '家人', '期望', '表达'],
            concept: '了解自己名字的含义，感受家人对自己的期望和爱',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-7']
          },
          {
            id: 'pc3-27', name: '写日记', difficulty: 2,
            keywords: ['日记', '格式', '记录', '生活'],
            concept: '学习日记的格式和写法，养成写日记记录生活的习惯',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-81']
          }
        ]
      },
      {
        id: 'chc3-5',
        title: '第五单元：观察',
        icon: '👁️',
        semester: '上册',
        points: [
          {
            id: 'pc3-28', name: '搭船的鸟', difficulty: 2,
            keywords: ['翠鸟', '观察', '外形', '捕鱼', '细致'],
            concept: '学习作者细致观察翠鸟的方法，感受观察的乐趣',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-29']
          },
          {
            id: 'pc3-29', name: '金色的草地', difficulty: 2,
            keywords: ['蒲公英', '草地', '金色', '变化', '观察'],
            concept: '通过观察蒲公英草地颜色的变化，学习细致观察和思考',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-28']
          },
          {
            id: 'pc3-30', name: '观察方法', difficulty: 3,
            keywords: ['观察', '方法', '眼看', '手摸', '鼻闻', '细致'],
            concept: '学习多感官观察法：眼看、手摸、鼻闻、耳听，进行细致观察',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-28', 'pc3-29']
          },
          {
            id: 'pc3-31', name: '外形描写方法', difficulty: 2,
            keywords: ['外形', '描写', '顺序', '特点', '生动'],
            concept: '学习按一定顺序描写动物外形：从整体到局部，抓住特点',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-28', 'pc3-30']
          },
          {
            id: 'pc3-32', name: '习作：我们眼中的缤纷世界', difficulty: 3,
            keywords: ['习作', '观察', '描写', '世界'],
            concept: '用观察日记的形式记录自己的观察发现，写出事物的变化',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-30', 'pc3-27']
          },
          {
            id: 'pc3-33', name: '体会作者留心观察', difficulty: 2,
            keywords: ['留心观察', '作者', '体会', '写作方法'],
            concept: '通过课文体会作者是如何留心观察周围事物的',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-28', 'pc3-29']
          }
        ]
      },
      {
        id: 'chc3-6',
        title: '第六单元：祖国河山',
        icon: '🏔️',
        semester: '上册',
        points: [
          {
            id: 'pc3-34', name: '古诗三首（望天门山）', difficulty: 2,
            keywords: ['望天门山', '李白', '天门山', '长江', '古诗'],
            concept: '背诵并理解《望天门山》，感受长江冲破天门山的雄壮气势',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc3-35', 'pc3-36']
          },
          {
            id: 'pc3-35', name: '古诗三首（饮湖上初晴后雨）', difficulty: 2,
            keywords: ['饮湖上初晴后雨', '苏轼', '西湖', '西子', '古诗'],
            concept: '背诵并理解古诗，学习用比喻手法描写西湖的美丽',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc3-34', 'pc3-36']
          },
          {
            id: 'pc3-36', name: '古诗三首（望洞庭）', difficulty: 2,
            keywords: ['望洞庭', '刘禹锡', '洞庭湖', '月光', '古诗'],
            concept: '背诵并理解《望洞庭》，感受洞庭湖月夜的宁静和美丽',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc3-34', 'pc3-37']
          },
          {
            id: 'pc3-37', name: '富饶的西沙群岛', difficulty: 2,
            keywords: ['西沙群岛', '海水', '海底', '珊瑚', '富饶'],
            concept: '了解西沙群岛的美丽和富饶，学习围绕一个意思写段落',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-38']
          },
          {
            id: 'pc3-38', name: '海滨小城', difficulty: 2,
            keywords: ['海滨', '小城', '海边', '景色', '描写'],
            concept: '感受海滨小城的美丽风光，学习按空间顺序描写景物',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-37', 'pc3-39']
          },
          {
            id: 'pc3-39', name: '美丽的小兴安岭', difficulty: 2,
            keywords: ['小兴安岭', '四季', '树木', '景色', '总分总'],
            concept: '感受小兴安岭四季的美丽景色，学习总分总的段落结构',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-38']
          },
          {
            id: 'pc3-40', name: '关键句理解段意', difficulty: 3,
            keywords: ['关键句', '段意', '中心句', '概括'],
            concept: '学会找段落中的关键句（中心句），用关键句概括段落大意',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-37', 'pc3-39']
          }
        ]
      },
      {
        id: 'chc3-7',
        title: '第七单元：大自然的声音',
        icon: '🎵',
        semester: '上册',
        points: [
          {
            id: 'pc3-41', name: '大自然的声音', difficulty: 2,
            keywords: ['风', '水', '动物', '声音', '音乐'],
            concept: '感受大自然中风声、水声和动物叫声的美妙，学习总分结构',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-42']
          },
          {
            id: 'pc3-42', name: '父亲、树林和鸟', difficulty: 2,
            keywords: ['父亲', '树林', '鸟', '观察', '热爱自然'],
            concept: '通过父亲带"我"观察树林中鸟的故事，感受人与自然的和谐',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-41', 'pc3-43']
          },
          {
            id: 'pc3-43', name: '带刺的朋友', difficulty: 2,
            keywords: ['刺猬', '偷枣', '可爱', '观察', '动物'],
            concept: '通过观察刺猬偷枣的过程，感受小动物的可爱和观察的乐趣',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-42']
          },
          {
            id: 'pc3-44', name: '拟声词运用', difficulty: 2,
            keywords: ['拟声词', '声音', '描写', '生动', '哗哗', '嗡嗡'],
            concept: '学习运用拟声词使文章描写更加生动形象',
            questionTypes: ['选择', '填空', '连线'],
            relatedPoints: ['pc3-13', 'pc3-41']
          },
          {
            id: 'pc3-45', name: '感受生动语言', difficulty: 3,
            keywords: ['生动', '语言', '积累', '品读', '优美'],
            concept: '学会品读课文中生动优美的语言，体会其表达效果',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-5', 'pc3-41']
          },
          {
            id: 'pc3-46', name: '习作：这儿真美', difficulty: 3,
            keywords: ['习作', '写景', '景物', '观察', '描写'],
            concept: '学写一篇写景作文，围绕一个意思把景物写具体',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-32', 'pc3-39']
          },
          {
            id: 'pc3-47', name: '口语交际：请教', difficulty: 2,
            keywords: ['口语', '请教', '礼貌', '表达'],
            concept: '学会有礼貌地向别人请教问题，把问题说清楚',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-7']
          }
        ]
      },
      {
        id: 'chc3-8',
        title: '第八单元：美好品质',
        icon: '⭐',
        semester: '上册',
        points: [
          {
            id: 'pc3-48', name: '司马光', difficulty: 2,
            keywords: ['司马光', '砸缸', '聪明', '文言文', '机智'],
            concept: '通过文言文《司马光》学习古人聪明机智的品质',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc3-49']
          },
          {
            id: 'pc3-49', name: '掌声', difficulty: 2,
            keywords: ['掌声', '英子', '鼓励', '自信', '残疾'],
            concept: '通过英子的故事感受掌声的力量，学会鼓励和关爱他人',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-48', 'pc3-50']
          },
          {
            id: 'pc3-50', name: '灰雀', difficulty: 2,
            keywords: ['灰雀', '列宁', '男孩', '诚实', '知错就改'],
            concept: '通过列宁和灰雀的故事学习诚实和知错就改的品质',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-49', 'pc3-51']
          },
          {
            id: 'pc3-51', name: '手术台就是阵地', difficulty: 2,
            keywords: ['白求恩', '手术台', '阵地', '奉献', '国际主义'],
            concept: '学习白求恩大夫在战场上忘我工作的奉献精神',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-50']
          },
          {
            id: 'pc3-52', name: '人物品质概括', difficulty: 3,
            keywords: ['人物', '品质', '概括', '分析', '关键词'],
            concept: '学会从课文中找出关键语句，概括人物的美好品质',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-21', 'pc3-49']
          },
          {
            id: 'pc3-53', name: '习作：那次玩得真高兴', difficulty: 3,
            keywords: ['习作', '记叙', '高兴', '玩耍', '经历'],
            concept: '学写一件玩得高兴的事，把过程写清楚，写出当时的感受',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-27', 'pc3-46']
          },
          {
            id: 'pc3-54', name: '三年级阅读理解提升', difficulty: 3,
            keywords: ['阅读', '理解', '概括', '分析', '答题'],
            concept: '提升阅读理解能力：学会概括主要内容、理解关键词句、回答问题',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-40', 'pc3-52']
          }
        ]
      },

      // ========== 三年级下册 ==========
      {
        id: 'chc3-9',
        title: '第一单元：可爱的生灵',
        icon: '🌸',
        semester: '下册',
        points: [
          {
            id: 'pc3-55', name: '古诗三首（绝句）', difficulty: 2,
            keywords: ['绝句', '杜甫', '迟日江山丽', '春天', '古诗'],
            concept: '背诵并理解杜甫的《绝句》，感受春天的明媚和生机',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc3-56', 'pc3-57']
          },
          {
            id: 'pc3-56', name: '古诗三首（惠崇春江晚景）', difficulty: 2,
            keywords: ['惠崇春江晚景', '苏轼', '竹外桃花', '春天', '古诗'],
            concept: '背诵并理解古诗，感受早春时节的美丽景色',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc3-55', 'pc3-57']
          },
          {
            id: 'pc3-57', name: '古诗三首（三衢道中）', difficulty: 2,
            keywords: ['三衢道中', '曾几', '梅子黄时', '初夏', '古诗'],
            concept: '背诵并理解古诗，感受初夏山间的清凉和幽静',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc3-55', 'pc3-58']
          },
          {
            id: 'pc3-58', name: '燕子', difficulty: 2,
            keywords: ['燕子', '春天', '外形', '飞行', '歇息'],
            concept: '学习从外形、飞行、歇息三方面描写燕子，感受春天的美好',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-59']
          },
          {
            id: 'pc3-59', name: '荷花', difficulty: 2,
            keywords: ['荷花', '荷叶', '叶圣陶', '想象', '美丽'],
            concept: '通过叶圣陶的描写感受荷花的美丽，学习展开想象的写法',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-58', 'pc3-60']
          },
          {
            id: 'pc3-60', name: '昆虫备忘录', difficulty: 2,
            keywords: ['昆虫', '备忘录', '复眼', '花大姐', '独角仙'],
            concept: '通过有趣的描写了解几种昆虫的特点，学习观察和记录',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-58', 'pc3-59']
          },
          {
            id: 'pc3-61', name: '试着一边读一边想象画面', difficulty: 2,
            keywords: ['想象画面', '阅读', '方法', '感受'],
            concept: '学习在阅读时一边读一边想象画面，加深对课文的理解',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc3-45']
          }
        ]
      },
      {
        id: 'chc3-10',
        title: '第二单元：寓言故事',
        icon: '📖',
        semester: '下册',
        points: [
          {
            id: 'pc3-62', name: '陶罐和铁罐', difficulty: 2,
            keywords: ['陶罐', '铁罐', '骄傲', '谦虚', '寓言'],
            concept: '通过寓言明白每个人都有长处和短处，要善于看到别人的长处',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-63']
          },
          {
            id: 'pc3-63', name: '鹿角和鹿腿', difficulty: 2,
            keywords: ['鹿角', '鹿腿', '美丽', '实用', '寓言'],
            concept: '通过寓言理解美和实用的关系，实用的东西不一定好看',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-62', 'pc3-64']
          },
          {
            id: 'pc3-64', name: '池子与河流', difficulty: 2,
            keywords: ['池子', '河流', '懒惰', '勤奋', '寓言诗'],
            concept: '通过寓言诗明白人不能贪图安逸，要像河流一样不断进取',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-62', 'pc3-63']
          },
          {
            id: 'pc3-65', name: '寓言故事寓意', difficulty: 3,
            keywords: ['寓意', '道理', '寓言', '理解', '概括'],
            concept: '学会准确概括寓言故事的寓意，联系生活谈感受',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-73', 'pc3-62']
          },
          {
            id: 'pc3-66', name: '读寓言的方法', difficulty: 3,
            keywords: ['读寓言', '方法', '故事', '道理', '联系'],
            concept: '学习读寓言的方法：先读懂故事，再联系生活想道理',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc3-65']
          },
          {
            id: 'pc3-67', name: '习作：看图画写一写', difficulty: 3,
            keywords: ['看图写话', '图画', '描写', '完整'],
            concept: '学会仔细观察图画，展开想象写一个完整的故事',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-32', 'pc1-102']
          },
          {
            id: 'pc3-68', name: '口语交际：该不该实行班干部轮流制', difficulty: 2,
            keywords: ['口语', '班干部', '轮流', '讨论', '表达观点'],
            concept: '学会清楚表达自己的观点，有理有据地进行讨论',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-47']
          }
        ]
      },
      {
        id: 'chc3-11',
        title: '第三单元：中华传统文化',
        icon: '🏮',
        semester: '下册',
        points: [
          {
            id: 'pc3-69', name: '古诗三首（元日）', difficulty: 2,
            keywords: ['元日', '王安石', '春节', '爆竹', '古诗'],
            concept: '背诵并理解《元日》，感受春节的热闹和喜庆气氛',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc3-70', 'pc3-71']
          },
          {
            id: 'pc3-70', name: '古诗三首（清明）', difficulty: 2,
            keywords: ['清明', '杜牧', '清明时节', '清明节', '古诗'],
            concept: '背诵并理解《清明》，了解清明节的传统习俗',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc3-69', 'pc3-71']
          },
          {
            id: 'pc3-71', name: '古诗三首（九月九日忆山东兄弟）', difficulty: 2,
            keywords: ['九月九日忆山东兄弟', '王维', '重阳节', '思乡', '古诗'],
            concept: '背诵并理解古诗，感受重阳节的思乡之情',
            questionTypes: ['选择', '填空', '背诵'],
            relatedPoints: ['pc3-69', 'pc3-72']
          },
          {
            id: 'pc3-72', name: '纸的发明', difficulty: 2,
            keywords: ['造纸术', '蔡伦', '四大发明', '科技', '历史'],
            concept: '了解造纸术的发明过程和意义，感受中华文明的伟大',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-73']
          },
          {
            id: 'pc3-73', name: '赵州桥', difficulty: 2,
            keywords: ['赵州桥', '李春', '石拱桥', '坚固', '美观'],
            concept: '了解赵州桥的坚固和美观，学习围绕一个意思写一段话',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-72', 'pc3-74']
          },
          {
            id: 'pc3-74', name: '一幅名扬中外的画', difficulty: 2,
            keywords: ['清明上河图', '张择端', '北宋', '名画', '热闹'],
            concept: '了解《清明上河图》的艺术价值和北宋都城的热闹景象',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-73']
          },
          {
            id: 'pc3-75', name: '综合性学习：中华传统节日', difficulty: 2,
            keywords: ['传统节日', '调查', '记录', '文化'],
            concept: '通过综合性学习了解中华传统节日的由来和习俗',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc2-58', 'pc3-69']
          }
        ]
      },
      {
        id: 'chc3-12',
        title: '第四单元：观察与发现',
        icon: '🔬',
        semester: '下册',
        points: [
          {
            id: 'pc3-76', name: '花钟', difficulty: 2,
            keywords: ['花钟', '开花时间', '观察', '归纳', '科学'],
            concept: '了解不同花在不同时间开放的现象，学习归纳法和观察记录',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-77']
          },
          {
            id: 'pc3-77', name: '蜜蜂', difficulty: 2,
            keywords: ['蜜蜂', '实验', '辨认方向', '法布尔', '科学'],
            concept: '通过法布尔的实验了解蜜蜂辨认方向的能力，学习科学实验的方法',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-76', 'pc3-78']
          },
          {
            id: 'pc3-78', name: '小虾', difficulty: 2,
            keywords: ['小虾', '观察', '外形', '动作', '饲养'],
            concept: '通过观察小虾的外形和动作，学习细致描写小动物',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-77']
          },
          {
            id: 'pc3-79', name: '实验记录与观察日记', difficulty: 3,
            keywords: ['实验', '记录', '观察日记', '格式'],
            concept: '学习记录实验过程和结果，写观察日记',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-32', 'pc3-27']
          },
          {
            id: 'pc3-80', name: '关键句在段落中的作用', difficulty: 3,
            keywords: ['关键句', '段落', '作用', '概括', '总起'],
            concept: '理解关键句在段落中的作用：总起句、总结句、过渡句',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-40']
          },
          {
            id: 'pc3-81', name: '习作：我做了一项小实验', difficulty: 3,
            keywords: ['习作', '实验', '过程', '记录', '感受'],
            concept: '学会用先……接着……然后……最后……的句式记录实验过程',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-79']
          }
        ]
      },
      {
        id: 'chc3-13',
        title: '第五单元：大胆想象',
        icon: '💭',
        semester: '下册',
        points: [
          {
            id: 'pc3-82', name: '宇宙的另一边', difficulty: 3,
            keywords: ['宇宙', '另一边', '想象', '倒影', '另一个世界'],
            concept: '通过想象宇宙另一边的世界，感受想象力的奇妙',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-83']
          },
          {
            id: 'pc3-83', name: '我变成了一棵树', difficulty: 3,
            keywords: ['变成树', '想象', '奇怪', '有趣', '变身'],
            concept: '通过想象自己变成树的奇妙经历，体验大胆想象的乐趣',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-82']
          },
          {
            id: 'pc3-84', name: '想象作文方法', difficulty: 3,
            keywords: ['想象', '作文', '方法', '大胆', '合理'],
            concept: '学习想象作文的方法：大胆想象但要合情合理，情节要有趣',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc3-82', 'pc3-83']
          },
          {
            id: 'pc3-85', name: '创编故事', difficulty: 3,
            keywords: ['创编', '故事', '想象', '情节', '人物'],
            concept: '学会发挥想象创编故事，设计有趣的情节和生动的人物',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-84']
          },
          {
            id: 'pc3-86', name: '习作：奇妙的想象', difficulty: 3,
            keywords: ['习作', '想象', '故事', '有趣', '创编'],
            concept: '写一篇想象作文，展开大胆的想象，写出有趣的故事',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-85']
          },
          {
            id: 'pc3-87', name: '口语交际：趣味故事会', difficulty: 2,
            keywords: ['口语', '故事', '讲述', '趣味'],
            concept: '学会生动有趣地讲述故事，注意语气和表情',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-20', 'pc3-85']
          }
        ]
      },
      {
        id: 'chc3-14',
        title: '第六单元：多彩童年',
        icon: '🎠',
        semester: '下册',
        points: [
          {
            id: 'pc3-88', name: '童年的水墨画', difficulty: 2,
            keywords: ['童年', '水墨画', '溪边', '江上', '林中', '诗歌'],
            concept: '通过组诗感受童年生活的美好画面，学习捕捉生活中的美好瞬间',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-89']
          },
          {
            id: 'pc3-89', name: '剃头大师', difficulty: 2,
            keywords: ['剃头', '大师', '趣事', '童年', '幽默'],
            concept: '通过有趣的剃头经历感受童年的快乐和幽默',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-88', 'pc3-90']
          },
          {
            id: 'pc3-90', name: '肥皂泡', difficulty: 2,
            keywords: ['肥皂泡', '冰心', '吹泡泡', '童年', '想象'],
            concept: '通过冰心的描写感受吹肥皂泡的快乐和童年的美好',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-89', 'pc3-91']
          },
          {
            id: 'pc3-91', name: '我不能失信', difficulty: 2,
            keywords: ['宋庆龄', '守信', '诚实', '品质'],
            concept: '学习宋庆龄守信用的品质，理解"一诺千金"的道理',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-90']
          },
          {
            id: 'pc3-92', name: '理解难懂的句子', difficulty: 3,
            keywords: ['难懂', '句子', '理解', '方法', '联系上下文'],
            concept: '学习理解难懂句子的方法：联系上下文、结合生活经验、查资料等',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-14', 'pc3-54']
          },
          {
            id: 'pc3-93', name: '习作：身边那些有特点的人', difficulty: 3,
            keywords: ['习作', '人物', '特点', '描写', '记叙'],
            concept: '学会用具体事例写出身边有特点的人，突出其性格特征',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-53']
          }
        ]
      },
      {
        id: 'chc3-15',
        title: '第七单元：奇妙世界',
        icon: '🌍',
        semester: '下册',
        points: [
          {
            id: 'pc3-94', name: '我们奇妙的世界', difficulty: 2,
            keywords: ['奇妙', '世界', '天空', '大地', '观察'],
            concept: '通过课文感受天空和大地的奇妙，学习有条理地描写景物',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-95']
          },
          {
            id: 'pc3-95', name: '海底世界', difficulty: 2,
            keywords: ['海底', '深海', '动物', '植物', '景色'],
            concept: '了解海底世界的声音、动物、植物等特点，感受海底的奇妙',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-94', 'pc3-96']
          },
          {
            id: 'pc3-96', name: '火烧云', difficulty: 2,
            keywords: ['火烧云', '颜色', '形状', '变化', '萧红'],
            concept: '通过萧红的描写感受火烧云颜色和形状的千变万化',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-95']
          },
          {
            id: 'pc3-97', name: '围绕中心句写段落', difficulty: 3,
            keywords: ['中心句', '段落', '结构', '总分', '写法'],
            concept: '学会围绕中心句展开描写，做到内容具体、条理清楚',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-80', 'pc3-37']
          },
          {
            id: 'pc3-98', name: '习作：国宝大熊猫', difficulty: 2,
            keywords: ['大熊猫', '国宝', '介绍', '描写', '资料'],
            concept: '学会收集资料，用介绍的方式描写大熊猫的特点',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-93']
          },
          {
            id: 'pc3-99', name: '口语交际：劝告', difficulty: 2,
            keywords: ['口语', '劝告', '说服', '语气', '礼貌'],
            concept: '学会用恰当的语气和理由劝告别人，做到有理有据',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-68']
          }
        ]
      },
      {
        id: 'chc3-16',
        title: '第八单元：有趣的故事',
        icon: '🎭',
        semester: '下册',
        points: [
          {
            id: 'pc3-100', name: '慢性子裁缝和急性子顾客', difficulty: 2,
            keywords: ['慢性子', '急性子', '裁缝', '故事', '对比'],
            concept: '通过两个性格截然不同的人之间的故事，感受人物性格的鲜明对比',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-101']
          },
          {
            id: 'pc3-101', name: '方帽子店', difficulty: 2,
            keywords: ['方帽子', '新帽子', '创新', '改变', '故事'],
            concept: '通过故事明白不能墨守成规，要敢于创新和改变',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-100', 'pc3-102']
          },
          {
            id: 'pc3-102', name: '漏', difficulty: 2,
            keywords: ['漏', '老虎', '贼', '误会', '民间故事'],
            concept: '通过有趣的故事感受民间故事的幽默和智慧',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-101', 'pc3-103']
          },
          {
            id: 'pc3-103', name: '枣核', difficulty: 2,
            keywords: ['枣核', '聪明', '勇敢', '小人儿', '民间故事'],
            concept: '通过枣核的故事学习聪明勇敢的品质',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-102']
          },
          {
            id: 'pc3-104', name: '复述故事（提高）', difficulty: 3,
            keywords: ['复述', '故事', '详细', '创造性', '方法'],
            concept: '学习更详细的复述方法，能创造性地复述故事',
            questionTypes: ['选择', '判断'],
            relatedPoints: ['pc3-20', 'pc3-100']
          },
          {
            id: 'pc3-105', name: '习作：这样想象真有趣', difficulty: 3,
            keywords: ['习作', '想象', '有趣', '动物', '反常'],
            concept: '展开想象，写一个动物变得和现实中完全相反的有趣故事',
            questionTypes: ['判断'],
            relatedPoints: ['pc3-86', 'pc3-100']
          },
          {
            id: 'pc3-106', name: '三年级语文知识总结', difficulty: 3,
            keywords: ['总结', '复习', '三年级', '字词', '阅读', '写作'],
            concept: '回顾三年级全年的语文知识，包括阅读策略、写作方法和语言积累',
            questionTypes: ['选择', '填空', '判断'],
            relatedPoints: ['pc3-54', 'pc3-104']
          }
        ]
      }
    ]
  },

  '4': {
    title: '四年级语文',
    icon: '📝',
    color: '#43e97b',
    chapters: [
      // ========== 四年级上册 ==========
      {
        id: 'chc4-1', title: '第一单元：自然之美', icon: '🌊', semester: '上册',
        points: [
          { id: 'pc4-1', name: '观潮', difficulty: 2, keywords: ['钱塘江', '大潮', '壮观', '顺序'], concept: '学习按时间顺序描写钱塘江大潮的壮观景象，感受大自然的神奇', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-2'] },
          { id: 'pc4-2', name: '走月亮', difficulty: 2, keywords: ['走月亮', '月光', '洱海', '散文', '亲情'], concept: '通过"我"和阿妈走月亮感受浓浓的亲情和月夜的美丽', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-1', 'pc4-3'] },
          { id: 'pc4-3', name: '现代诗二首（秋晚的江上）', difficulty: 2, keywords: ['秋晚', '江上', '归鸟', '秋天', '诗歌'], concept: '通过诗歌感受秋晚江上的美丽景色，体会诗歌的意境美', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-2', 'pc4-4'] },
          { id: 'pc4-4', name: '现代诗二首（花牛歌）', difficulty: 2, keywords: ['花牛', '草地', '白云', '秋天', '诗歌'], concept: '通过诗歌感受花牛在草地上悠闲的生活，体会童趣', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-3', 'pc4-5'] },
          { id: 'pc4-5', name: '繁星', difficulty: 2, keywords: ['繁星', '巴金', '星空', '想象', '观察'], concept: '通过巴金的散文感受星空的美丽，学习按时间顺序描写景物', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-4'] },
          { id: 'pc4-6', name: '边读边想象画面', difficulty: 3, keywords: ['想象画面', '阅读', '方法', '感受', '理解'], concept: '学会在阅读中通过文字想象画面，加深对文章的理解和感受', questionTypes: ['选择', '判断'], relatedPoints: ['pc3-61'] },
          { id: 'pc4-7', name: '习作：推荐一个好地方', difficulty: 3, keywords: ['习作', '推荐', '好地方', '写景', '特点'], concept: '学会推荐一个好地方，写出推荐理由和地方的特点', questionTypes: ['判断'], relatedPoints: ['pc4-1'] }
        ]
      },
      {
        id: 'chc4-2', title: '第二单元：提问策略', icon: '❓', semester: '上册',
        points: [
          { id: 'pc4-8', name: '一个豆荚里的五粒豆', difficulty: 2, keywords: ['豆荚', '五粒豆', '安徒生', '生命', '价值'], concept: '通过故事理解生命的价值，学习针对课文内容提出问题', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-9'] },
          { id: 'pc4-9', name: '蝙蝠和雷达', difficulty: 2, keywords: ['蝙蝠', '雷达', '仿生学', '科学', '实验'], concept: '了解蝙蝠探路的原理和雷达的发明，感受仿生学的奇妙', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-8', 'pc4-10'] },
          { id: 'pc4-10', name: '呼风唤雨的世纪', difficulty: 2, keywords: ['科技', '发明', '世纪', '变化', '现代'], concept: '感受现代科技的巨大成就，学习提问策略', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-9', 'pc4-11'] },
          { id: 'pc4-11', name: '蝴蝶的家', difficulty: 2, keywords: ['蝴蝶', '下雨', '关心', '观察', '想象'], concept: '通过作者对蝴蝶的关心，培养关爱小动物的品质', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-10'] },
          { id: 'pc4-12', name: '提问策略（针对内容）', difficulty: 3, keywords: ['提问', '策略', '内容', '理解', '思考'], concept: '学习针对课文内容提问：可以从字词、句子、段落等方面提出问题', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc3-25'] },
          { id: 'pc4-13', name: '从不同角度提问', difficulty: 3, keywords: ['提问', '角度', '内容', '写法', '启示'], concept: '学习从内容、写法和启示等不同角度提出有价值的问题', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-12'] },
          { id: 'pc4-14', name: '习作：小小"动物园"', difficulty: 3, keywords: ['习作', '动物园', '比喻', '家人', '特点'], concept: '用比喻手法把家人比作动物，写出家人的特点', questionTypes: ['判断'], relatedPoints: ['pc4-7'] }
        ]
      },
      {
        id: 'chc4-3', title: '第三单元：连续观察', icon: '🔍', semester: '上册',
        points: [
          { id: 'pc4-15', name: '古诗三首（暮江吟）', difficulty: 2, keywords: ['暮江吟', '白居易', '残阳', '秋天', '古诗'], concept: '背诵并理解《暮江吟》，感受秋天傍晚到夜晚的美丽景色', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-16', 'pc4-17'] },
          { id: 'pc4-16', name: '古诗三首（题西林壁）', difficulty: 2, keywords: ['题西林壁', '苏轼', '庐山', '角度', '哲理'], concept: '背诵并理解《题西林壁》，明白从不同角度看事物会不同的道理', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-15', 'pc4-17'] },
          { id: 'pc4-17', name: '古诗三首（雪梅）', difficulty: 2, keywords: ['雪梅', '卢钺', '梅雪', '各有长短', '古诗'], concept: '背诵并理解《雪梅》，明白每种事物都有长处和短处', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-15', 'pc4-18'] },
          { id: 'pc4-18', name: '爬山虎的脚', difficulty: 2, keywords: ['爬山虎', '脚', '叶圣陶', '观察', '连续'], concept: '学习叶圣陶连续观察爬山虎的方法，体会细致观察的重要性', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-19'] },
          { id: 'pc4-19', name: '蟋蟀的住宅', difficulty: 2, keywords: ['蟋蟀', '住宅', '法布尔', '观察', '建造'], concept: '通过法布尔的观察了解蟋蟀建造住宅的过程，感受观察的细致', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-18'] },
          { id: 'pc4-20', name: '连续观察记录', difficulty: 3, keywords: ['连续观察', '记录', '变化', '日记', '方法'], concept: '学习连续观察某一事物并记录其变化过程的方法', questionTypes: ['选择', '判断'], relatedPoints: ['pc3-79', 'pc4-18'] },
          { id: 'pc4-21', name: '习作：写观察日记', difficulty: 3, keywords: ['习作', '观察日记', '变化', '连续', '记录'], concept: '写一篇连续观察日记，记录事物在一段时间内的变化', questionTypes: ['判断'], relatedPoints: ['pc4-20'] }
        ]
      },
      {
        id: 'chc4-4', title: '第四单元：神话故事', icon: '⚡', semester: '上册',
        points: [
          { id: 'pc4-22', name: '盘古开天地', difficulty: 2, keywords: ['盘古', '开天辟地', '神话', '创造', '奉献'], concept: '通过神话故事了解盘古开天辟地的过程，感受神话的神奇想象', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-23'] },
          { id: 'pc4-23', name: '精卫填海', difficulty: 2, keywords: ['精卫', '填海', '坚持', '神话', '文言文'], concept: '通过文言文了解精卫填海的故事，感受坚持不懈的精神', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-22', 'pc4-24'] },
          { id: 'pc4-24', name: '普罗米修斯', difficulty: 2, keywords: ['普罗米修斯', '火种', '希腊神话', '勇敢', '奉献'], concept: '了解普罗米修斯为人类盗火的故事，感受勇敢牺牲的精神', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-23', 'pc4-25'] },
          { id: 'pc4-25', name: '女娲补天', difficulty: 2, keywords: ['女娲', '补天', '神话', '拯救', '勇敢'], concept: '通过女娲补天的故事感受中国古代神话的神奇和女娲的伟大', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-24'] },
          { id: 'pc4-26', name: '神话故事特点', difficulty: 3, keywords: ['神话', '特点', '想象', '神奇', '人物'], concept: '了解神话故事的特点：丰富的想象、神奇的情节、伟大的人物', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-22', 'pc3-19'] },
          { id: 'pc4-27', name: '起因经过结果概括', difficulty: 3, keywords: ['起因', '经过', '结果', '概括', '叙事'], concept: '学会用起因、经过、结果三要素概括故事的主要内容', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc3-20'] },
          { id: 'pc4-28', name: '习作：我和___过一天', difficulty: 3, keywords: ['习作', '神话人物', '想象', '故事', '一天'], concept: '发挥想象，写一篇和神话人物一起度过一天的故事', questionTypes: ['判断'], relatedPoints: ['pc4-26'] }
        ]
      },
      {
        id: 'chc4-5', title: '第五单元：生活万花筒', icon: '🎭', semester: '上册',
        points: [
          { id: 'pc4-29', name: '麻雀', difficulty: 2, keywords: ['麻雀', '小麻雀', '老麻雀', '母爱', '勇气'], concept: '通过老麻雀保护小麻雀的故事感受母爱的伟大和勇气的力量', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-30'] },
          { id: 'pc4-30', name: '爬天都峰', difficulty: 2, keywords: ['天都峰', '爬山', '勇气', '互相鼓励', '战胜困难'], concept: '通过爬天都峰的经历学习面对困难要勇敢，互相鼓励', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-29'] },
          { id: 'pc4-31', name: '把一件事写清楚', difficulty: 3, keywords: ['叙事', '清楚', '六要素', '时间', '地点', '人物'], concept: '学习把一件事写清楚：写明时间、地点、人物、起因、经过、结果', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-27'] },
          { id: 'pc4-32', name: '按事情发展顺序写', difficulty: 3, keywords: ['事情发展', '顺序', '起因', '经过', '结果', '写作'], concept: '学会按事情的发展顺序组织文章，做到条理清楚', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-31'] },
          { id: 'pc4-33', name: '习作：生活万花筒', difficulty: 3, keywords: ['习作', '生活', '事件', '写清楚', '感受'], concept: '选择一件印象深刻的事，按顺序把事情写清楚，写出自己的感受', questionTypes: ['判断'], relatedPoints: ['pc4-32'] },
          { id: 'pc4-34', name: '口语交际：安慰', difficulty: 2, keywords: ['口语', '安慰', '关心', '同理心'], concept: '学会用恰当的语言安慰别人，表达关心和理解', questionTypes: ['判断'], relatedPoints: ['pc3-99'] }
        ]
      },
      {
        id: 'chc4-6', title: '第六单元：童年往事', icon: '🎈', semester: '上册',
        points: [
          { id: 'pc4-35', name: '牛和鹅', difficulty: 2, keywords: ['牛', '鹅', '态度', '改变', '道理'], concept: '通过故事明白看问题的角度不同，结果也不同', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-16'] },
          { id: 'pc4-36', name: '一只窝囊的大老虎', difficulty: 2, keywords: ['大老虎', '演出', '窝囊', '成长', '童年'], concept: '通过童年演出的经历感受成长中的快乐和遗憾', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-35', 'pc4-37'] },
          { id: 'pc4-37', name: '陀螺', difficulty: 2, keywords: ['陀螺', '童年', '快乐', '比赛', '成长'], concept: '通过做陀螺、斗陀螺的经历感受童年的快乐', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-36'] },
          { id: 'pc4-38', name: '批注阅读法', difficulty: 3, keywords: ['批注', '阅读', '标注', '感受', '思考'], concept: '学习在阅读时做批注，记录自己的感受、疑问和思考', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-12'] },
          { id: 'pc4-39', name: '体会心情变化', difficulty: 3, keywords: ['心情', '变化', '感受', '体会', '情感'], concept: '学会体会课文中人物心情的变化，理解情感表达', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-35', 'pc4-36'] },
          { id: 'pc4-40', name: '习作：记一次游戏', difficulty: 3, keywords: ['习作', '游戏', '记叙', '感受', '乐趣'], concept: '记叙一次游戏经历，写出游戏的过程和自己的心情感受', questionTypes: ['判断'], relatedPoints: ['pc4-33'] },
          { id: 'pc4-41', name: '口语交际：爱护眼睛', difficulty: 2, keywords: ['口语', '爱护', '眼睛', '健康', '建议'], concept: '学会围绕主题发表自己的看法，提出爱护眼睛的建议', questionTypes: ['判断'], relatedPoints: ['pc4-34'] }
        ]
      },
      {
        id: 'chc4-7', title: '第七单元：家国情怀', icon: '🇨🇳', semester: '上册',
        points: [
          { id: 'pc4-42', name: '古诗三首（出塞）', difficulty: 2, keywords: ['出塞', '王昌龄', '边塞', '战争', '古诗'], concept: '背诵并理解《出塞》，感受边塞诗的悲壮和对和平的渴望', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-43', 'pc4-44'] },
          { id: 'pc4-43', name: '古诗三首（凉州词）', difficulty: 2, keywords: ['凉州词', '王翰', '葡萄美酒', '边塞', '古诗'], concept: '背诵并理解《凉州词》，感受边塞将士的豪情壮志', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-42', 'pc4-44'] },
          { id: 'pc4-44', name: '古诗三首（夏日绝句）', difficulty: 2, keywords: ['夏日绝句', '李清照', '生当作人杰', '爱国', '古诗'], concept: '背诵并理解《夏日绝句》，感受诗人的爱国情怀', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-42', 'pc4-45'] },
          { id: 'pc4-45', name: '为中华之崛起而读书', difficulty: 2, keywords: ['周恩来', '立志', '爱国', '振兴中华'], concept: '学习周恩来从小立志为中华崛起而读书的爱国精神', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-44', 'pc4-46'] },
          { id: 'pc4-46', name: '梅兰芳蓄须', difficulty: 2, keywords: ['梅兰芳', '蓄须', '抗日', '气节', '艺术家'], concept: '了解梅兰芳蓄须明志拒绝为日本人演出的爱国气节', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-45', 'pc4-47'] },
          { id: 'pc4-47', name: '延安，我把你追寻', difficulty: 2, keywords: ['延安', '革命', '精神', '追寻', '诗歌'], concept: '通过诗歌感受延安精神的伟大，了解革命传统', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-46'] },
          { id: 'pc4-48', name: '习作：写信', difficulty: 3, keywords: ['习作', '写信', '格式', '称呼', '落款'], concept: '学习书信的完整格式，写一封信给远方的亲人或朋友', questionTypes: ['判断'], relatedPoints: ['pc2-17'] }
        ]
      },
      {
        id: 'chc4-8', title: '第八单元：历史故事', icon: '📜', semester: '上册',
        points: [
          { id: 'pc4-49', name: '王戎不取道旁李', difficulty: 2, keywords: ['王戎', '道旁李', '文言文', '聪明', '观察'], concept: '通过文言文学习王戎善于观察和推理的聪明品质', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-50'] },
          { id: 'pc4-50', name: '西门豹治邺', difficulty: 2, keywords: ['西门豹', '治邺', '破除迷信', '智慧', '为民'], concept: '了解西门豹破除河伯娶媳妇迷信的智慧和为民除害的精神', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-49', 'pc4-51'] },
          { id: 'pc4-51', name: '故事二则（扁鹊治病）', difficulty: 2, keywords: ['扁鹊', '蔡桓公', '讳疾忌医', '防微杜渐'], concept: '通过故事理解"讳疾忌医"的教训，要善于听取别人的劝告', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-50', 'pc4-52'] },
          { id: 'pc4-52', name: '故事二则（纪昌学射）', difficulty: 2, keywords: ['纪昌', '学射', '基本功', '坚持', '刻苦'], concept: '通过故事明白学好本领要先练好基本功，持之以恒', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-51'] },
          { id: 'pc4-53', name: '简要复述课文', difficulty: 3, keywords: ['简要', '复述', '主要内容', '关键信息', '方法'], concept: '学习简要复述课文的方法：抓住主要内容，省略次要细节', questionTypes: ['选择', '判断'], relatedPoints: ['pc3-104'] },
          { id: 'pc4-54', name: '习作：我的心儿怦怦跳', difficulty: 3, keywords: ['习作', '心跳', '紧张', '害怕', '感受'], concept: '写出一次紧张或害怕的经历，把当时的感受写具体', questionTypes: ['判断'], relatedPoints: ['pc4-40'] },
          { id: 'pc4-55', name: '四年级语文知识总结', difficulty: 3, keywords: ['总结', '复习', '四年级', '阅读', '写作', '策略'], concept: '回顾四年级全年的语文知识：提问策略、批注阅读、连续观察等', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-13', 'pc4-38'] }
        ]
      },

      // ========== 四年级下册 ==========
      {
        id: 'chc4-9', title: '第一单元：乡村生活', icon: '🏡', semester: '下册',
        points: [
          { id: 'pc4-56', name: '古诗词三首（四时田园杂兴）', difficulty: 2, keywords: ['四时田园杂兴', '范成大', '田园', '劳动', '古诗'], concept: '背诵并理解古诗，感受田园生活的美好和劳动的快乐', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-57', 'pc4-58'] },
          { id: 'pc4-57', name: '古诗词三首（宿新市徐公店）', difficulty: 2, keywords: ['宿新市徐公店', '杨万里', '篱落', '儿童', '春天'], concept: '背诵并理解古诗，感受乡村春天的美丽和儿童的天真', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-56', 'pc4-58'] },
          { id: 'pc4-58', name: '古诗词三首（清平乐·村居）', difficulty: 2, keywords: ['清平乐·村居', '辛弃疾', '茅屋', '村居', '幸福'], concept: '背诵并理解词作，感受乡村家庭的温馨和幸福', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-56', 'pc4-59'] },
          { id: 'pc4-59', name: '乡下人家', difficulty: 2, keywords: ['乡下', '人家', '田园', '生活', '独特'], concept: '感受乡下人家的独特风景和生活情趣，学习分场景描写', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-56'] },
          { id: 'pc4-60', name: '天窗', difficulty: 2, keywords: ['天窗', '想象', '童年', '乡村', '自由'], concept: '通过天窗感受乡村孩子的想象力和对自由的向往', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-59', 'pc4-61'] },
          { id: 'pc4-61', name: '三月桃花水', difficulty: 2, keywords: ['桃花水', '春天', '河流', '赞美', '诗歌'], concept: '通过诗歌赞美春天河水的美丽，感受春天的生机', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-60'] },
          { id: 'pc4-62', name: '抓住关键语句体会感情', difficulty: 3, keywords: ['关键语句', '体会', '感情', '阅读方法'], concept: '学会抓住课文中的关键语句体会作者的思想感情', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-39'] }
        ]
      },
      {
        id: 'chc4-10', title: '第二单元：自然科技', icon: '🔬', semester: '下册',
        points: [
          { id: 'pc4-63', name: '琥珀', difficulty: 2, keywords: ['琥珀', '化石', '科学', '推测', '故事'], concept: '通过故事了解琥珀的形成过程，学习科学推测的方法', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-64'] },
          { id: 'pc4-64', name: '飞向蓝天的恐龙', difficulty: 2, keywords: ['恐龙', '鸟类', '进化', '科学', '化石'], concept: '了解恐龙向鸟类进化的过程，感受科学发现的奇妙', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-63', 'pc4-65'] },
          { id: 'pc4-65', name: '纳米技术就在我们身边', difficulty: 2, keywords: ['纳米', '技术', '科技', '应用', '未来'], concept: '了解纳米技术的基本概念和在生活中的应用，感受科技的力量', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-64', 'pc4-66'] },
          { id: 'pc4-66', name: '千年梦圆在今朝', difficulty: 2, keywords: ['航天', '梦想', '神舟', '科技', '成就'], concept: '了解中国航天事业的发展历程，感受科技强国的力量', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-65'] },
          { id: 'pc4-67', name: '阅读时提出不懂的问题', difficulty: 3, keywords: ['提问', '不懂', '问题', '阅读策略'], concept: '在阅读科普文章时，学会提出不懂的问题并尝试解决', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-13'] },
          { id: 'pc4-68', name: '习作：我的奇思妙想', difficulty: 3, keywords: ['习作', '想象', '发明', '创造', '未来'], concept: '发挥想象，写一写自己想发明的神奇东西', questionTypes: ['判断'], relatedPoints: ['pc4-28'] },
          { id: 'pc4-69', name: '口语交际：说新闻', difficulty: 2, keywords: ['口语', '新闻', '播报', '准确', '简洁'], concept: '学会准确、简洁地播报一则新闻', questionTypes: ['判断'], relatedPoints: ['pc4-41'] }
        ]
      },
      {
        id: 'chc4-11', title: '第三单元：现代诗歌', icon: '📝', semester: '下册',
        points: [
          { id: 'pc4-70', name: '短诗三首（繁星七一）', difficulty: 2, keywords: ['繁星', '冰心', '母爱', '童年', '诗歌'], concept: '通过冰心的短诗感受母爱的温暖和童年的美好', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-71'] },
          { id: 'pc4-71', name: '短诗三首（繁星一三一）', difficulty: 2, keywords: ['繁星', '大海', '光明', '诗歌', '想象'], concept: '通过短诗感受大海的辽阔和诗人丰富的想象力', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-70', 'pc4-72'] },
          { id: 'pc4-72', name: '短诗三首（繁星一五九）', difficulty: 2, keywords: ['繁星', '风雨', '母亲', '庇护', '诗歌'], concept: '通过短诗感受母爱如风雨中的庇护所', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-70', 'pc4-73'] },
          { id: 'pc4-73', name: '绿', difficulty: 2, keywords: ['绿', '艾青', '颜色', '春天', '生机'], concept: '通过诗歌感受春天绿色的生机和活力', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-74'] },
          { id: 'pc4-74', name: '白桦', difficulty: 2, keywords: ['白桦', '树木', '高洁', '赞美', '俄罗斯'], concept: '通过诗歌赞美白桦的高洁和美丽', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-73', 'pc4-75'] },
          { id: 'pc4-75', name: '在天晴了的时候', difficulty: 2, keywords: ['天晴', '雨后', '自然', '散步', '诗歌'], concept: '通过诗歌感受雨后天晴的清新和美丽', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-74'] },
          { id: 'pc4-76', name: '合作编小诗集', difficulty: 3, keywords: ['诗集', '合作', '编写', '编排', '展示'], concept: '学会与同学合作编写小诗集，了解诗集的编排方法', questionTypes: ['判断'], relatedPoints: ['pc4-70'] }
        ]
      },
      {
        id: 'chc4-12', title: '第四单元：动物朋友', icon: '🐱', semester: '下册',
        points: [
          { id: 'pc4-77', name: '猫', difficulty: 2, keywords: ['猫', '老舍', '古怪', '可爱', '动物'], concept: '通过老舍的描写感受猫的古怪性格和可爱之处', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-78'] },
          { id: 'pc4-78', name: '母鸡', difficulty: 2, keywords: ['母鸡', '老舍', '讨厌', '敬佩', '母爱'], concept: '通过老舍对母鸡态度的变化感受母爱的伟大', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-77', 'pc4-79'] },
          { id: 'pc4-79', name: '白鹅', difficulty: 2, keywords: ['白鹅', '丰子恺', '高傲', '吃饭', '动物'], concept: '通过丰子恺的描写感受白鹅高傲的性格特点', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-77', 'pc4-78'] },
          { id: 'pc4-80', name: '明贬暗褒的写法', difficulty: 3, keywords: ['明贬暗褒', '写法', '喜爱', '反语', '幽默'], concept: '学习"明贬暗褒"的写作手法：表面批评实则表达喜爱', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-77', 'pc4-78'] },
          { id: 'pc4-81', name: '动物外形与性格描写', difficulty: 3, keywords: ['外形', '性格', '描写', '方法', '特点'], concept: '学习从外形、性格、习性等方面描写动物，抓住特点', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc3-31', 'pc4-80'] },
          { id: 'pc4-82', name: '习作：我的动物朋友', difficulty: 3, keywords: ['习作', '动物', '朋友', '描写', '特点'], concept: '写一篇描写自己动物朋友的作文，写出动物的特点和自己的感情', questionTypes: ['判断'], relatedPoints: ['pc4-81'] },
          { id: 'pc4-83', name: '口语交际：转述', difficulty: 2, keywords: ['口语', '转述', '准确', '人称', '变化'], concept: '学会准确地转述别人的话，注意人称和语气的变化', questionTypes: ['判断'], relatedPoints: ['pc4-69'] }
        ]
      },
      {
        id: 'chc4-13', title: '第五单元：游记', icon: '✈️', semester: '下册',
        points: [
          { id: 'pc4-84', name: '海上日出', difficulty: 2, keywords: ['海上', '日出', '巴金', '壮丽', '景色'], concept: '通过巴金的描写感受海上日出的壮丽，学习按时间顺序写景', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-85'] },
          { id: 'pc4-85', name: '记金华的双龙洞', difficulty: 2, keywords: ['双龙洞', '叶圣陶', '溶洞', '游览', '顺序'], concept: '学习叶圣陶按游览顺序描写双龙洞的方法', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-84'] },
          { id: 'pc4-86', name: '按游览顺序写景', difficulty: 3, keywords: ['游览顺序', '写景', '移步换景', '过渡句'], concept: '学习按游览顺序写游记：移步换景，用过渡句连接各景点', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-85'] },
          { id: 'pc4-87', name: '景物描写要具体', difficulty: 3, keywords: ['景物', '具体', '细节', '感官', '生动'], concept: '学习把景物写具体：运用多种感官描写，加入细节', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-86'] },
          { id: 'pc4-88', name: '习作：游___', difficulty: 3, keywords: ['习作', '游记', '游览', '写景', '感受'], concept: '写一篇游记，按游览顺序把印象深刻的景物写具体', questionTypes: ['判断'], relatedPoints: ['pc4-86'] },
          { id: 'pc4-89', name: '习作单元总结', difficulty: 3, keywords: ['习作', '单元', '写景', '方法', '总结'], concept: '总结游记的写作方法：有序观察、具体描写、真实感受', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-86', 'pc4-87'] }
        ]
      },
      {
        id: 'chc4-14', title: '第六单元：成长故事', icon: '🌱', semester: '下册',
        points: [
          { id: 'pc4-90', name: '小英雄雨来', difficulty: 2, keywords: ['雨来', '小英雄', '抗日', '游泳', '勇敢'], concept: '通过雨来的故事学习小英雄勇敢机智的品质', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-91'] },
          { id: 'pc4-91', name: '我们家的男子汉', difficulty: 2, keywords: ['男子汉', '独立', '成长', '童年', '可爱'], concept: '通过"小男子汉"的成长故事感受成长中的独立和勇敢', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-90', 'pc4-92'] },
          { id: 'pc4-92', name: '芦花鞋', difficulty: 2, keywords: ['芦花鞋', '青铜', '卖鞋', '苦难', '善良'], concept: '通过青铜卖芦花鞋的故事感受苦难中的坚韧和善良', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-91'] },
          { id: 'pc4-93', name: '把握长文的主要内容', difficulty: 3, keywords: ['长文', '主要内容', '概括', '方法', '小标题'], concept: '学习用列小标题的方法概括长文章的主要内容', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-53'] },
          { id: 'pc4-94', name: '习作：我学会了___', difficulty: 3, keywords: ['习作', '学会', '成长', '经历', '感受'], concept: '写一篇自己学会做某件事的作文，写出学习的过程和感受', questionTypes: ['判断'], relatedPoints: ['pc4-33'] },
          { id: 'pc4-95', name: '口语交际：朋友相处的秘诀', difficulty: 2, keywords: ['口语', '朋友', '相处', '秘诀', '讨论'], concept: '学会与同学讨论朋友相处的秘诀，表达自己的看法', questionTypes: ['判断'], relatedPoints: ['pc4-83'] }
        ]
      },
      {
        id: 'chc4-15', title: '第七单元：人物品质', icon: '🦸', semester: '下册',
        points: [
          { id: 'pc4-96', name: '古诗三首（芙蓉楼送辛渐）', difficulty: 2, keywords: ['芙蓉楼送辛渐', '王昌龄', '送别', '清白', '古诗'], concept: '背诵并理解古诗，感受诗人冰清玉洁的品格', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-97', 'pc4-98'] },
          { id: 'pc4-97', name: '古诗三首（塞下曲）', difficulty: 2, keywords: ['塞下曲', '卢纶', '将军', '夜追', '英勇'], concept: '背诵并理解古诗，感受将军夜追敌寇的英勇', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-96', 'pc4-98'] },
          { id: 'pc4-98', name: '古诗三首（墨梅）', difficulty: 2, keywords: ['墨梅', '王冕', '梅花', '高洁', '古诗'], concept: '背诵并理解《墨梅》，学习梅花不求人夸、只留清气的品格', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc4-96', 'pc4-99'] },
          { id: 'pc4-99', name: '黄继光', difficulty: 2, keywords: ['黄继光', '英雄', '堵枪眼', '牺牲', '爱国'], concept: '学习黄继光舍身堵枪眼的英雄壮举和爱国精神', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-98', 'pc4-100'] },
          { id: 'pc4-100', name: '"诺曼底号"遇难记', difficulty: 2, keywords: ['诺曼底号', '遇难', '船长', '镇定', '牺牲'], concept: '感受哈尔威船长在危难中镇定指挥、舍己救人的英雄品质', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-99'] },
          { id: 'pc4-101', name: '从人物语言动作体会品质', difficulty: 3, keywords: ['语言', '动作', '品质', '描写', '体会'], concept: '学会从人物的语言和动作描写中体会人物的品质', questionTypes: ['选择', '判断'], relatedPoints: ['pc3-52'] },
          { id: 'pc4-102', name: '习作：我的自画像', difficulty: 3, keywords: ['习作', '自画像', '外貌', '性格', '特点'], concept: '学会描写自己的外貌、性格和爱好，向新同学介绍自己', questionTypes: ['判断'], relatedPoints: ['pc4-82'] }
        ]
      },
      {
        id: 'chc4-16', title: '第八单元：故事乐园', icon: '🎪', semester: '下册',
        points: [
          { id: 'pc4-103', name: '宝葫芦的秘密（节选）', difficulty: 2, keywords: ['宝葫芦', '张天翼', '童话', '愿望', '想象'], concept: '通过故事了解宝葫芦的秘密，感受童话的魅力', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-104'] },
          { id: 'pc4-104', name: '巨人的花园', difficulty: 2, keywords: ['巨人', '花园', '王尔德', '分享', '快乐'], concept: '通过故事明白快乐要与人分享，自私会带来孤独', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-103', 'pc4-105'] },
          { id: 'pc4-105', name: '海的女儿', difficulty: 2, keywords: ['海的女儿', '安徒生', '美人鱼', '牺牲', '善良'], concept: '通过安徒生童话感受小美人鱼的善良和牺牲精神', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-104'] },
          { id: 'pc4-106', name: '感受童话的奇妙', difficulty: 3, keywords: ['童话', '奇妙', '想象', '人物', '情节'], concept: '感受童话故事的奇妙想象和鲜明的人物形象', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-103', 'pc4-104'] },
          { id: 'pc4-107', name: '按自己的想法新编故事', difficulty: 3, keywords: ['新编', '故事', '改编', '想象', '创造'], concept: '学会按照自己的想法改编经典故事，写出新的结局', questionTypes: ['判断'], relatedPoints: ['pc3-85'] },
          { id: 'pc4-108', name: '习作：故事新编', difficulty: 3, keywords: ['习作', '故事', '新编', '改编', '想象'], concept: '选择一个熟悉的故事进行新编，写出新的情节和结局', questionTypes: ['判断'], relatedPoints: ['pc4-107'] },
          { id: 'pc4-109', name: '四年级语文知识总结', difficulty: 3, keywords: ['总结', '复习', '四年级', '下册', '字词', '阅读', '写作'], concept: '回顾四年级下册的语文知识，系统复习和总结', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc4-55', 'pc4-108'] }
        ]
      }
    ]
  },

  '5': {
    title: '五年级语文',
    icon: '📝',
    color: '#a18cd1',
    chapters: [
      // ========== 五年级上册 ==========
      {
        id: 'chc5-1', title: '第一单元：万物有灵', icon: '🕊️', semester: '上册',
        points: [
          { id: 'pc5-1', name: '白鹭', difficulty: 2, keywords: ['白鹭', '郭沫若', '诗意', '赞美', '散文'], concept: '通过郭沫若的散文感受白鹭的诗意美，学习借物抒情', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-2'] },
          { id: 'pc5-2', name: '落花生', difficulty: 2, keywords: ['落花生', '许地山', '借物喻人', '朴实', '有用'], concept: '通过花生的品格学习做人要做有用的人，不做只讲体面的人', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-1', 'pc5-3'] },
          { id: 'pc5-3', name: '桂花雨', difficulty: 2, keywords: ['桂花雨', '琦君', '童年', '乡愁', '母爱'], concept: '通过桂花雨感受童年美好和对故乡的思念之情', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-2', 'pc5-4'] },
          { id: 'pc5-4', name: '珍珠鸟', difficulty: 2, keywords: ['珍珠鸟', '冯骥才', '信赖', '人与动物', '和谐'], concept: '通过人与鸟的关系体会"信赖，往往创造出美好的境界"', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-3'] },
          { id: 'pc5-5', name: '借助具体事物抒情', difficulty: 3, keywords: ['借物抒情', '具体事物', '情感', '写法', '体会'], concept: '学习借助具体事物表达情感的方法，体会借物抒情的写法', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-2'] },
          { id: 'pc5-6', name: '习作：我的心爱之物', difficulty: 3, keywords: ['习作', '心爱', '物品', '描写', '情感'], concept: '写一篇描写自己心爱之物的作文，写出喜爱的原因和情感', questionTypes: ['判断'], relatedPoints: ['pc5-5'] }
        ]
      },
      {
        id: 'chc5-2', title: '第二单元：阅读策略——提高阅读速度', icon: '⚡', semester: '上册',
        points: [
          { id: 'pc5-7', name: '搭石', difficulty: 2, keywords: ['搭石', '乡亲', '谦让', '美德', '画面'], concept: '通过搭石感受乡亲们谦让互助的美好品德', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-8'] },
          { id: 'pc5-8', name: '将相和', difficulty: 2, keywords: ['廉颇', '蔺相如', '将相和', '团结', '爱国'], concept: '通过完璧归赵、渑池之会、负荆请罪感受人物品质', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-7', 'pc5-9'] },
          { id: 'pc5-9', name: '什么比猎豹的速度更快', difficulty: 2, keywords: ['速度', '猎豹', '光', '科技', '说明文'], concept: '通过比较了解不同事物的速度，学习列数字的说明方法', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-8'] },
          { id: 'pc5-10', name: '提高阅读速度的方法', difficulty: 3, keywords: ['阅读速度', '方法', '集中注意力', '不回读', '连词成句'], concept: '学习提高阅读速度的方法：集中注意力、不回读、连词成句地读', questionTypes: ['选择', '判断'], relatedPoints: ['pc3-6'] },
          { id: 'pc5-11', name: '连词成句阅读', difficulty: 3, keywords: ['连词成句', '阅读', '速度', '方法', '训练'], concept: '训练连词成句的阅读方法，扩大视域，提高阅读效率', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-10'] },
          { id: 'pc5-12', name: '缩写故事', difficulty: 3, keywords: ['缩写', '故事', '保留', '主要', '简洁'], concept: '学习缩写故事的方法：保留主干、删减枝叶、语言简洁', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-53'] }
        ]
      },
      {
        id: 'chc5-3', title: '第三单元：民间故事', icon: '📚', semester: '上册',
        points: [
          { id: 'pc5-13', name: '猎人海力布', difficulty: 2, keywords: ['海力布', '民间故事', '牺牲', '善良', '宝石'], concept: '通过民间故事感受海力布舍己为人的善良品质', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-14'] },
          { id: 'pc5-14', name: '牛郎织女（一）', difficulty: 2, keywords: ['牛郎', '织女', '民间故事', '爱情', '追求'], concept: '了解牛郎织女的故事，感受人们对美好生活的向往', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-13', 'pc5-15'] },
          { id: 'pc5-15', name: '牛郎织女（二）', difficulty: 2, keywords: ['牛郎织女', '鹊桥', '七夕', '团圆', '思念'], concept: '了解故事结局，感受人们对团圆的渴望和对不公的反抗', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-14'] },
          { id: 'pc5-16', name: '民间故事特点', difficulty: 3, keywords: ['民间故事', '口耳相传', '反复', '想象', '特点'], concept: '了解民间故事的特点：口头讲述、反复手法、丰富想象', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-13'] },
          { id: 'pc5-17', name: '创造性复述', difficulty: 3, keywords: ['创造性', '复述', '换角度', '细节', '生动'], concept: '学习创造性复述：换人称、加细节、变顺序等方式复述故事', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-53'] },
          { id: 'pc5-18', name: '习作：缩写故事', difficulty: 3, keywords: ['习作', '缩写', '故事', '简洁', '主要情节'], concept: '将一个较长的故事缩写为短文，保留主要情节', questionTypes: ['判断'], relatedPoints: ['pc5-12'] }
        ]
      },
      {
        id: 'chc5-4', title: '第四单元：爱国情怀', icon: '🇨🇳', semester: '上册',
        points: [
          { id: 'pc5-19', name: '古诗三首（示儿）', difficulty: 2, keywords: ['示儿', '陆游', '爱国', '遗憾', '收复'], concept: '背诵并理解《示儿》，感受陆游至死不忘收复失地的爱国情怀', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-20', 'pc5-21'] },
          { id: 'pc5-20', name: '古诗三首（题临安邸）', difficulty: 2, keywords: ['题临安邸', '林升', '讽刺', '南宋', '古诗'], concept: '背诵并理解古诗，感受诗人对南宋统治者的讽刺和对国家命运的担忧', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-19', 'pc5-21'] },
          { id: 'pc5-21', name: '古诗三首（己亥杂诗）', difficulty: 2, keywords: ['己亥杂诗', '龚自珍', '变革', '落花', '爱国'], concept: '背诵并理解古诗，感受诗人希望社会变革的爱国热情', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-19', 'pc5-22'] },
          { id: 'pc5-22', name: '少年中国说（节选）', difficulty: 3, keywords: ['少年中国', '梁启超', '少年', '责任', '强国'], concept: '理解少年与国家的关系，感受振兴中华的责任感', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-19'] },
          { id: 'pc5-23', name: '圆明园的毁灭', difficulty: 3, keywords: ['圆明园', '毁灭', '八国联军', '耻辱', '勿忘国耻'], concept: '了解圆明园辉煌和毁灭的过程，激发勿忘国耻的情感', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-22', 'pc5-24'] },
          { id: 'pc5-24', name: '小岛', difficulty: 2, keywords: ['小岛', '守岛', '军人', '爱国', '奉献'], concept: '通过驻守小岛的军人故事感受默默奉献的爱国精神', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-23'] },
          { id: 'pc5-25', name: '习作：二十年后的家乡', difficulty: 3, keywords: ['习作', '家乡', '想象', '变化', '二十年后'], concept: '想象二十年后家乡的变化，表达对家乡的热爱', questionTypes: ['判断'], relatedPoints: ['pc5-6'] }
        ]
      },
      {
        id: 'chc5-5', title: '第五单元：说明文', icon: '📊', semester: '上册',
        points: [
          { id: 'pc5-26', name: '太阳', difficulty: 2, keywords: ['太阳', '说明文', '列数字', '打比方', '距离'], concept: '通过课文了解太阳的特点，学习列数字、打比方等说明方法', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-27'] },
          { id: 'pc5-27', name: '松鼠', difficulty: 2, keywords: ['松鼠', '布封', '外形', '习性', '说明文'], concept: '通过布封的描写了解松鼠的外形和生活习性，学习生动说明', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-26'] },
          { id: 'pc5-28', name: '说明方法', difficulty: 3, keywords: ['说明方法', '列数字', '打比方', '作比较', '举例子'], concept: '掌握常见说明方法：列数字、打比方、作比较、举例子等', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-26'] },
          { id: 'pc5-29', name: '说明文特点', difficulty: 3, keywords: ['说明文', '准确', '科学', '条理', '客观'], concept: '了解说明文的特点：语言准确、内容科学、条理清楚', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-28'] },
          { id: 'pc5-30', name: '习作：介绍一种事物', difficulty: 3, keywords: ['习作', '说明文', '介绍', '事物', '方法'], concept: '运用恰当的说明方法写一篇介绍事物的说明文', questionTypes: ['判断'], relatedPoints: ['pc5-28'] }
        ]
      },
      {
        id: 'chc5-6', title: '第六单元：舐犊之情', icon: '❤️', semester: '上册',
        points: [
          { id: 'pc5-31', name: '慈母情深', difficulty: 2, keywords: ['慈母', '情深', '梁晓声', '母爱', '辛劳'], concept: '通过母亲在恶劣环境中辛苦工作的场景感受深沉的母爱', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-32'] },
          { id: 'pc5-32', name: '父爱之舟', difficulty: 2, keywords: ['父爱', '吴冠中', '小船', '深沉', '难忘'], concept: '通过父亲用小船送"我"求学的故事感受深沉的父爱', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-31', 'pc5-33'] },
          { id: 'pc5-33', name: '"精彩极了"和"糟糕透了"', difficulty: 2, keywords: ['鼓励', '批评', '两种爱', '成长', '理解'], concept: '通过故事理解父母两种不同的爱都是为了孩子的成长', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-32'] },
          { id: 'pc5-34', name: '场景和细节描写', difficulty: 3, keywords: ['场景', '细节', '描写', '情感', '表达'], concept: '学习通过场景描写和细节描写表达情感的方法', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-5'] },
          { id: 'pc5-35', name: '体会场景描写的作用', difficulty: 3, keywords: ['场景', '作用', '渲染', '烘托', '表达'], concept: '理解场景描写在文章中的渲染气氛、烘托情感的作用', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-34'] },
          { id: 'pc5-36', name: '口语交际：父母之爱', difficulty: 2, keywords: ['口语', '父母', '爱', '讨论', '理解'], concept: '学会表达对父母之爱的理解，与同学交流感受', questionTypes: ['判断'], relatedPoints: ['pc5-31'] },
          { id: 'pc5-37', name: '习作：我想对您说', difficulty: 3, keywords: ['习作', '书信', '父母', '感恩', '心声'], concept: '用书信的形式向父母表达自己的心里话和感恩之情', questionTypes: ['判断'], relatedPoints: ['pc4-48'] }
        ]
      },
      {
        id: 'chc5-7', title: '第七单元：动静之间', icon: '🌙', semester: '上册',
        points: [
          { id: 'pc5-38', name: '古诗词三首（山居秋暝）', difficulty: 2, keywords: ['山居秋暝', '王维', '山水', '秋天', '隐居'], concept: '背诵并理解《山居秋暝》，感受山水田园的宁静美好', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-39', 'pc5-40'] },
          { id: 'pc5-39', name: '古诗词三首（枫桥夜泊）', difficulty: 2, keywords: ['枫桥夜泊', '张继', '夜泊', '愁眠', '古诗'], concept: '背诵并理解《枫桥夜泊》，感受诗人旅途中的孤寂和愁思', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-38', 'pc5-40'] },
          { id: 'pc5-40', name: '古诗词三首（长相思）', difficulty: 2, keywords: ['长相思', '纳兰性德', '思念', '行军', '边塞'], concept: '背诵并理解《长相思》，感受将士行军途中的思乡之情', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-38'] },
          { id: 'pc5-41', name: '四季之美', difficulty: 2, keywords: ['四季', '清少纳言', '日本', '季节', '美感'], concept: '感受四季不同时间段的独特美感，学习细腻描写', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-42'] },
          { id: 'pc5-42', name: '鸟的天堂', difficulty: 2, keywords: ['鸟的天堂', '巴金', '榕树', '鸟群', '动静结合'], concept: '感受大榕树的静态美和群鸟飞舞的动态美，学习动静结合', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-41', 'pc5-43'] },
          { id: 'pc5-43', name: '月迹', difficulty: 2, keywords: ['月迹', '贾平凹', '月亮', '童年', '追寻'], concept: '通过寻月的过程感受童趣和对美的追寻', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-42'] },
          { id: 'pc5-44', name: '动静结合写景', difficulty: 3, keywords: ['动静结合', '写景', '方法', '对比', '生动'], concept: '学习用动静结合的方法写景，使文章更加生动', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-42'] }
        ]
      },
      {
        id: 'chc5-8', title: '第八单元：读书明智', icon: '📖', semester: '上册',
        points: [
          { id: 'pc5-45', name: '古人谈读书', difficulty: 2, keywords: ['古人', '读书', '论语', '朱熹', '名言'], concept: '通过古人论读书的名言理解读书的方法和态度', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-46'] },
          { id: 'pc5-46', name: '忆读书', difficulty: 2, keywords: ['忆读书', '冰心', '读书', '经验', '好书'], concept: '通过冰心的读书经历理解"读书好，多读书，读好书"', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-45', 'pc5-47'] },
          { id: 'pc5-47', name: '我的"长生果"', difficulty: 2, keywords: ['长生果', '读书', '作文', '叶文玲', '成长'], concept: '通过作者的读书和写作经历理解阅读对写作的重要性', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-46'] },
          { id: 'pc5-48', name: '梳理信息把握内容', difficulty: 3, keywords: ['梳理', '信息', '把握', '内容', '阅读方法'], concept: '学习梳理文章信息、把握文章主要内容的方法', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-10'] },
          { id: 'pc5-49', name: '推荐一本书', difficulty: 3, keywords: ['推荐', '书', '介绍', '理由', '口语'], concept: '学会向同学推荐一本书，说清楚书的主要内容和推荐理由', questionTypes: ['判断'], relatedPoints: ['pc5-46'] },
          { id: 'pc5-50', name: '习作：推荐一本书', difficulty: 3, keywords: ['习作', '推荐', '书', '理由', '介绍'], concept: '写一篇推荐好书的作文，介绍书的内容和推荐理由', questionTypes: ['判断'], relatedPoints: ['pc5-49'] },
          { id: 'pc5-51', name: '五年级上册知识总结', difficulty: 3, keywords: ['总结', '复习', '五年级', '上册', '阅读', '写作'], concept: '回顾五年级上册的语文知识：提高阅读速度、说明方法、借物抒情等', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-10', 'pc5-28'] }
        ]
      },

      // ========== 五年级下册 ==========
      {
        id: 'chc5-9', title: '第一单元：童年往事', icon: '🌾', semester: '下册',
        points: [
          { id: 'pc5-52', name: '古诗三首（四时田园杂兴其三十一）', difficulty: 2, keywords: ['四时田园杂兴', '范成大', '田园', '劳动', '夏天'], concept: '背诵并理解古诗，感受农村夏日劳动的繁忙和儿童的天真', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-53', 'pc5-54'] },
          { id: 'pc5-53', name: '古诗三首（稚子弄冰）', difficulty: 2, keywords: ['稚子弄冰', '杨万里', '儿童', '玩冰', '童趣'], concept: '背诵并理解古诗，感受儿童玩冰的快乐和童趣', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-52', 'pc5-54'] },
          { id: 'pc5-54', name: '古诗三首（村晚）', difficulty: 2, keywords: ['村晚', '雷震', '牧童', '黄昏', '乡村'], concept: '背诵并理解古诗，感受乡村傍晚的宁静和牧童的悠闲', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-52', 'pc5-55'] },
          { id: 'pc5-55', name: '祖父的园子', difficulty: 2, keywords: ['祖父', '园子', '萧红', '自由', '快乐'], concept: '通过祖父的园子感受自由快乐的童年和对祖父的怀念', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-56'] },
          { id: 'pc5-56', name: '月是故乡明', difficulty: 2, keywords: ['月', '故乡', '季羡林', '思乡', '童年'], concept: '通过月亮表达对故乡的思念，感受思乡之情', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-55', 'pc5-57'] },
          { id: 'pc5-57', name: '梅花魂', difficulty: 2, keywords: ['梅花', '外祖父', '爱国', '乡愁', '气节'], concept: '通过外祖父对梅花的珍爱感受海外游子的爱国之情', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-56'] },
          { id: 'pc5-58', name: '体会课文表达的思想感情', difficulty: 3, keywords: ['体会', '思想感情', '方法', '关键词', '语境'], concept: '学习通过关键词句、联系背景等方法体会课文的思想感情', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-62'] }
        ]
      },
      {
        id: 'chc5-10', title: '第二单元：古典名著', icon: '🏛️', semester: '下册',
        points: [
          { id: 'pc5-59', name: '草船借箭', difficulty: 2, keywords: ['草船借箭', '诸葛亮', '周瑜', '智谋', '三国'], concept: '感受诸葛亮的神机妙算和足智多谋', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-60'] },
          { id: 'pc5-60', name: '景阳冈', difficulty: 2, keywords: ['景阳冈', '武松', '打虎', '勇敢', '水浒传'], concept: '通过武松打虎的故事感受武松的勇敢和机智', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-59', 'pc5-61'] },
          { id: 'pc5-61', name: '猴王出世', difficulty: 2, keywords: ['猴王', '孙悟空', '出世', '勇敢', '西游记'], concept: '了解美猴王出世的故事，感受孙悟空的勇敢和神通', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-60', 'pc5-62'] },
          { id: 'pc5-62', name: '红楼春趣', difficulty: 2, keywords: ['红楼', '放风筝', '贾宝玉', '大观园', '红楼梦'], concept: '通过放风筝的场景感受大观园中少年的快乐生活', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-61'] },
          { id: 'pc5-63', name: '古典名著人物形象', difficulty: 3, keywords: ['古典名著', '人物', '形象', '性格', '分析'], concept: '学会分析古典名著中的人物形象，抓住性格特点', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-59'] },
          { id: 'pc5-64', name: '猜读古典名著词语', difficulty: 2, keywords: ['猜读', '古典', '词语', '方法', '联系上下文'], concept: '学习猜测古典名著中难懂词语的意思：联系上下文、结合生活经验', questionTypes: ['选择', '判断'], relatedPoints: ['pc3-14'] },
          { id: 'pc5-65', name: '口语交际：课本剧表演', difficulty: 2, keywords: ['口语', '课本剧', '表演', '合作', '展示'], concept: '学会将课文改编为课本剧并进行表演', questionTypes: ['判断'], relatedPoints: ['pc5-59'] }
        ]
      },
      {
        id: 'chc5-11', title: '第三单元：综合性学习——遨游汉字王国', icon: '🔤', semester: '下册',
        points: [
          { id: 'pc5-66', name: '汉字真有趣', difficulty: 2, keywords: ['汉字', '有趣', '谐音', '字谜', '文化'], concept: '通过综合性学习感受汉字的趣味：谐音、字谜、对联等', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-67'] },
          { id: 'pc5-67', name: '我爱你，汉字', difficulty: 2, keywords: ['汉字', '历史', '演变', '书法', '文化'], concept: '了解汉字的演变历史和书法艺术，感受汉字文化的魅力', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-66'] },
          { id: 'pc5-68', name: '汉字的演变', difficulty: 2, keywords: ['演变', '甲骨文', '金文', '小篆', '楷书'], concept: '了解汉字从甲骨文到楷书的演变过程', questionTypes: ['选择', '填空', '连线'], relatedPoints: ['pc5-67'] },
          { id: 'pc5-69', name: '汉字书法欣赏', difficulty: 2, keywords: ['书法', '楷书', '行书', '草书', '欣赏'], concept: '欣赏不同书法字体的特点，感受书法艺术之美', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-67', 'pc5-68'] },
          { id: 'pc5-70', name: '研究报告', difficulty: 3, keywords: ['研究报告', '调查', '汉字', '社会用字', '规范'], concept: '学习写简单的研究报告，调查社会用字情况', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-66'] },
          { id: 'pc5-71', name: '搜集资料的方法', difficulty: 2, keywords: ['搜集', '资料', '方法', '网络', '图书'], concept: '学习从网络、图书等渠道搜集和整理资料的方法', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-70'] }
        ]
      },
      {
        id: 'chc5-12', title: '第四单元：家国情怀', icon: '🎖️', semester: '下册',
        points: [
          { id: 'pc5-72', name: '从军行', difficulty: 2, keywords: ['从军行', '王昌龄', '边塞', '报国', '古诗'], concept: '背诵并理解《从军行》，感受戍边将士报效国家的决心', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-73', 'pc5-74'] },
          { id: 'pc5-73', name: '秋夜将晓出篱门迎凉有感', difficulty: 2, keywords: ['秋夜', '陆游', '遗憾', '中原', '爱国'], concept: '背诵并理解古诗，感受诗人对中原百姓的同情和收复失地的渴望', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-72', 'pc5-74'] },
          { id: 'pc5-74', name: '闻官军收河南河北', difficulty: 2, keywords: ['闻官军', '杜甫', '收复', '喜悦', '爱国'], concept: '背诵并理解古诗，感受诗人听闻收复失地后的狂喜', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-72'] },
          { id: 'pc5-75', name: '军神', difficulty: 2, keywords: ['军神', '刘伯承', '手术', '钢铁意志', '敬佩'], concept: '通过刘伯承不打麻药做手术的故事感受钢铁般的意志', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-76'] },
          { id: 'pc5-76', name: '清贫', difficulty: 2, keywords: ['清贫', '方志敏', '廉洁', '革命', '清廉'], concept: '通过方志敏的故事学习清正廉洁的革命品质', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-75'] },
          { id: 'pc5-77', name: '通过动作语言体会内心', difficulty: 3, keywords: ['动作', '语言', '内心', '描写', '体会'], concept: '学习通过人物的动作和语言描写体会人物的内心世界', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-101'] },
          { id: 'pc5-78', name: '习作：他___了', difficulty: 3, keywords: ['习作', '人物', '神态', '动作', '语言'], concept: '写一个人生气、高兴或感动时的样子，把细节写具体', questionTypes: ['判断'], relatedPoints: ['pc5-77'] }
        ]
      },
      {
        id: 'chc5-13', title: '第五单元：人物描写', icon: '👤', semester: '下册',
        points: [
          { id: 'pc5-79', name: '人物描写一组（摔跤）', difficulty: 2, keywords: ['摔跤', '小嘎子', '动作', '心理', '描写'], concept: '通过摔跤场景的动作和心理描写感受人物特点', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-80'] },
          { id: 'pc5-80', name: '人物描写一组（他像一棵挺脱的树）', difficulty: 2, keywords: ['祥子', '外貌', '挺脱', '老舍', '骆驼祥子'], concept: '通过外貌描写感受祥子的健壮和对生活的希望', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-79', 'pc5-81'] },
          { id: 'pc5-81', name: '人物描写一组（两茎灯草）', difficulty: 2, keywords: ['严监生', '吝啬', '讽刺', '细节', '儒林外史'], concept: '通过临死前还惦记灯草的细节感受严监生的吝啬', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-80'] },
          { id: 'pc5-82', name: '刷子李', difficulty: 2, keywords: ['刷子李', '冯骥才', '技艺', '规矩', '绝活'], concept: '通过刷子李刷墙的绝活感受民间手艺人的高超技艺', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-81'] },
          { id: 'pc5-83', name: '人物描写方法综合', difficulty: 3, keywords: ['外貌', '动作', '语言', '心理', '神态', '描写'], concept: '综合运用外貌、动作、语言、心理、神态描写塑造人物形象', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-79', 'pc5-82'] },
          { id: 'pc5-84', name: '习作：形形色色的人', difficulty: 3, keywords: ['习作', '人物', '描写', '特点', '事例'], concept: '选择一个有特点的人，用具体事例和人物描写方法写出其特点', questionTypes: ['判断'], relatedPoints: ['pc5-83'] }
        ]
      },
      {
        id: 'chc5-14', title: '第六单元：思维智慧', icon: '🧠', semester: '下册',
        points: [
          { id: 'pc5-85', name: '自相矛盾', difficulty: 2, keywords: ['自相矛盾', '寓言', '成语', '逻辑', '说服'], concept: '通过成语故事理解说话做事不能前后矛盾的道理', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-86'] },
          { id: 'pc5-86', name: '田忌赛马', difficulty: 2, keywords: ['田忌', '赛马', '孙膑', '策略', '智慧'], concept: '通过田忌赛马的故事学习用策略解决问题的智慧', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-85', 'pc5-87'] },
          { id: 'pc5-87', name: '跳水', difficulty: 2, keywords: ['跳水', '船长', '果断', '智慧', '冷静'], concept: '感受船长在危急时刻的果断和智慧', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-86'] },
          { id: 'pc5-88', name: '了解人物思维过程', difficulty: 3, keywords: ['思维', '过程', '分析', '推理', '方法'], concept: '学会分析人物解决问题时的思维过程', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-86'] },
          { id: 'pc5-89', name: '习作：神奇的探险之旅', difficulty: 3, keywords: ['习作', '探险', '想象', '惊险', '解决'], concept: '想象一次探险之旅，写出遇到的困难和解决的过程', questionTypes: ['判断'], relatedPoints: ['pc5-88'] }
        ]
      },
      {
        id: 'chc5-15', title: '第七单元：异域风情', icon: '🌍', semester: '下册',
        points: [
          { id: 'pc5-90', name: '威尼斯的小艇', difficulty: 2, keywords: ['威尼斯', '小艇', '马克·吐温', '城市', '风情'], concept: '感受威尼斯小艇的独特魅力和这座城市的水上风情', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-91'] },
          { id: 'pc5-91', name: '牧场之国', difficulty: 2, keywords: ['牧场', '荷兰', '牛', '静谧', '田园'], concept: '感受荷兰牧场的宁静美好和人与自然的和谐', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-90', 'pc5-92'] },
          { id: 'pc5-92', name: '金字塔', difficulty: 2, keywords: ['金字塔', '埃及', '古文明', '建筑', '奥秘'], concept: '了解金字塔的建筑特点和古埃及文明的奥秘', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-91'] },
          { id: 'pc5-93', name: '体会静态描写和动态描写', difficulty: 3, keywords: ['静态', '动态', '描写', '方法', '效果'], concept: '学会体会和运用静态描写与动态描写', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-44'] },
          { id: 'pc5-94', name: '口语交际：我是小小讲解员', difficulty: 2, keywords: ['口语', '讲解', '介绍', '清楚', '生动'], concept: '学会清楚生动地介绍一个地方或事物', questionTypes: ['判断'], relatedPoints: ['pc5-49'] },
          { id: 'pc5-95', name: '习作：中国的世界文化遗产', difficulty: 3, keywords: ['习作', '世界遗产', '介绍', '资料', '描写'], concept: '搜集资料，介绍一处中国的世界文化遗产', questionTypes: ['判断'], relatedPoints: ['pc5-94'] }
        ]
      },
      {
        id: 'chc5-16', title: '第八单元：语言的艺术', icon: '🎭', semester: '下册',
        points: [
          { id: 'pc5-96', name: '杨氏之子', difficulty: 2, keywords: ['杨氏之子', '聪慧', '幽默', '文言文', '应答'], concept: '通过文言文学习杨氏之子的聪慧和机敏应答', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc5-97'] },
          { id: 'pc5-97', name: '手指', difficulty: 2, keywords: ['手指', '丰子恺', '五根手指', '团结', '各有所长'], concept: '通过五根手指的比喻理解每个人各有所长，团结力量大', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-96', 'pc5-98'] },
          { id: 'pc5-98', name: '童年的发现', difficulty: 2, keywords: ['发现', '胚胎', '好奇心', '求知', '童年'], concept: '通过童年对胚胎发育的发现感受好奇心和求知欲', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-97'] },
          { id: 'pc5-99', name: '风趣幽默的语言', difficulty: 3, keywords: ['风趣', '幽默', '语言', '表达', '效果'], concept: '学习体会风趣幽默的语言在文章中的表达效果', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-97'] },
          { id: 'pc5-100', name: '口语交际：我们都来讲笑话', difficulty: 2, keywords: ['口语', '笑话', '讲述', '幽默', '表情'], concept: '学会讲笑话，注意语气、表情和节奏', questionTypes: ['判断'], relatedPoints: ['pc5-94'] },
          { id: 'pc5-101', name: '习作：漫画的启示', difficulty: 3, keywords: ['习作', '漫画', '启示', '讽刺', '表达'], concept: '看懂漫画的含义，写出漫画给自己的启示', questionTypes: ['判断'], relatedPoints: ['pc5-99'] },
          { id: 'pc5-102', name: '五年级语文知识总结', difficulty: 3, keywords: ['总结', '复习', '五年级', '阅读', '写作', '综合'], concept: '回顾五年级全年的语文知识，系统复习阅读策略、写作方法等', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc5-51', 'pc5-101'] }
        ]
      }
    ]
  },

  '6': {
    title: '六年级语文',
    icon: '📝',
    color: '#fa709a',
    chapters: [
      // ========== 六年级上册 ==========
      {
        id: 'chc6-1', title: '第一单元：感受自然', icon: '🌿', semester: '上册',
        points: [
          { id: 'pc6-1', name: '草原', difficulty: 2, keywords: ['草原', '老舍', '内蒙古', '美丽', '民族团结'], concept: '通过老舍的描写感受草原的美丽和蒙汉人民的深情厚谊', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-2'] },
          { id: 'pc6-2', name: '丁香结', difficulty: 2, keywords: ['丁香结', '宗璞', '花', '愁怨', '人生'], concept: '通过丁香结感悟人生的愁怨和豁达的人生态度', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-1', 'pc6-3'] },
          { id: 'pc6-3', name: '古诗词三首（宿建德江）', difficulty: 2, keywords: ['宿建德江', '孟浩然', '烟渚', '愁', '古诗'], concept: '背诵并理解《宿建德江》，感受诗人旅途中的孤寂忧愁', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-4', 'pc6-5'] },
          { id: 'pc6-4', name: '古诗词三首（六月二十七日望湖楼醉书）', difficulty: 2, keywords: ['望湖楼', '苏轼', '西湖', '暴雨', '变化'], concept: '背诵并理解古诗，感受西湖暴雨的壮观和天气变化之快', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-3', 'pc6-5'] },
          { id: 'pc6-5', name: '古诗词三首（西江月·夜行黄沙道中）', difficulty: 2, keywords: ['西江月', '辛弃疾', '夏夜', '丰收', '乡村'], concept: '背诵并理解词作，感受夏夜乡村的宁静和丰收的喜悦', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-3'] },
          { id: 'pc6-6', name: '花之歌', difficulty: 2, keywords: ['花之歌', '纪伯伦', '花', '人生', '哲理'], concept: '通过诗歌感受花的美丽和花所蕴含的人生哲理', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-2'] },
          { id: 'pc6-7', name: '从阅读的内容想开去', difficulty: 3, keywords: ['想开去', '阅读', '联想', '想象', '理解'], concept: '学会从阅读的内容联想到自己的生活经验，加深理解', questionTypes: ['选择', '判断'], relatedPoints: ['pc4-6'] }
        ]
      },
      {
        id: 'chc6-2', title: '第二单元：革命岁月', icon: '🇨🇳', semester: '上册',
        points: [
          { id: 'pc6-8', name: '七律·长征', difficulty: 3, keywords: ['七律', '长征', '毛泽东', '红军', '革命'], concept: '背诵并理解毛主席的《七律·长征》，感受红军的革命英雄主义', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-9'] },
          { id: 'pc6-9', name: '狼牙山五壮士', difficulty: 2, keywords: ['狼牙山', '五壮士', '抗日', '牺牲', '英勇'], concept: '感受五壮士宁死不屈的革命精神和英雄气概', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-8', 'pc6-10'] },
          { id: 'pc6-10', name: '开国大典', difficulty: 2, keywords: ['开国大典', '1949', '天安门', '新中国', '庄严'], concept: '了解开国大典的盛况，感受新中国成立的庄严和喜悦', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-9', 'pc6-11'] },
          { id: 'pc6-11', name: '灯光', difficulty: 2, keywords: ['灯光', '郝副营长', '牺牲', '憧憬', '革命'], concept: '通过郝副营长的故事感受革命先烈为后代幸福牺牲的精神', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-10'] },
          { id: 'pc6-12', name: '点面结合写场面', difficulty: 3, keywords: ['点面结合', '场面', '写法', '整体', '个体'], concept: '学习点面结合的写作方法：既写整体场面又写个体细节', questionTypes: ['选择', '判断'], relatedPoints: ['pc6-10'] },
          { id: 'pc6-13', name: '口语交际：演讲', difficulty: 2, keywords: ['口语', '演讲', '感染力', '说服', '号召'], concept: '学习写演讲稿并进行演讲，注意感染力和号召力', questionTypes: ['判断'], relatedPoints: ['pc5-49'] },
          { id: 'pc6-14', name: '习作：多彩的活动', difficulty: 3, keywords: ['习作', '活动', '场面', '感受', '点面结合'], concept: '运用点面结合的方法写一次活动，写出活动中的场面和个人感受', questionTypes: ['判断'], relatedPoints: ['pc6-12'] }
        ]
      },
      {
        id: 'chc6-3', title: '第三单元：有目的地阅读', icon: '🎯', semester: '上册',
        points: [
          { id: 'pc6-15', name: '竹节人', difficulty: 2, keywords: ['竹节人', '童年', '玩具', '制作', '回忆'], concept: '通过制作和玩竹节人的经历感受童年的快乐', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-16'] },
          { id: 'pc6-16', name: '宇宙生命之谜', difficulty: 2, keywords: ['宇宙', '生命', '火星', '科学', '探索'], concept: '了解科学家探索宇宙生命之谜的过程，感受科学探索的魅力', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-15', 'pc6-17'] },
          { id: 'pc6-17', name: '故宫博物院', difficulty: 2, keywords: ['故宫', '建筑', '中轴线', '历史', '说明文'], concept: '了解故宫的建筑布局和历史价值，学习有条理地介绍建筑', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-16'] },
          { id: 'pc6-18', name: '有目的地阅读', difficulty: 3, keywords: ['有目的', '阅读', '策略', '选择', '方法'], concept: '学习根据不同的阅读目的选择合适的阅读方法和材料', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-10'] },
          { id: 'pc6-19', name: '阅读策略综合运用', difficulty: 3, keywords: ['阅读策略', '综合', '预测', '提问', '速度'], concept: '综合运用以前学过的阅读策略：预测、提问、提高速度等', questionTypes: ['选择', '判断'], relatedPoints: ['pc6-18', 'pc3-25'] },
          { id: 'pc6-20', name: '习作：___让生活更美好', difficulty: 3, keywords: ['习作', '生活', '美好', '感受', '记叙'], concept: '写一件让生活更美好的事物或经历，写出自己的感受', questionTypes: ['判断'], relatedPoints: ['pc6-14'] }
        ]
      },
      {
        id: 'chc6-4', title: '第四单元：小说', icon: '📖', semester: '上册',
        points: [
          { id: 'pc6-21', name: '桥', difficulty: 2, keywords: ['桥', '老汉', '洪水', '牺牲', '共产党员'], concept: '通过老支书在洪水中的抉择感受共产党员的伟大品质', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-22'] },
          { id: 'pc6-22', name: '穷人', difficulty: 2, keywords: ['穷人', '列夫·托尔斯泰', '桑娜', '善良', '渔夫'], concept: '通过桑娜和渔夫收养孤儿的故事感受穷人的善良品质', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-21', 'pc6-23'] },
          { id: 'pc6-23', name: '在柏林', difficulty: 2, keywords: ['在柏林', '战争', '老妇人', '残酷', '和平'], concept: '通过短篇小说感受战争的残酷和对和平的渴望', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-22'] },
          { id: 'pc6-24', name: '小说三要素', difficulty: 3, keywords: ['小说', '三要素', '人物', '情节', '环境'], concept: '了解小说的三要素：人物、情节、环境，学会分析小说', questionTypes: ['选择', '判断'], relatedPoints: ['pc6-21'] },
          { id: 'pc6-25', name: '关注情节和环境描写', difficulty: 3, keywords: ['情节', '环境', '描写', '作用', '推动'], concept: '学习关注小说中的情节发展和环境描写，理解其对塑造人物的作用', questionTypes: ['选择', '判断'], relatedPoints: ['pc6-24'] },
          { id: 'pc6-26', name: '口语交际：请你支持我', difficulty: 2, keywords: ['口语', '支持', '说服', '理由', '清楚'], concept: '学会清楚地表达自己的想法并说服别人支持', questionTypes: ['判断'], relatedPoints: ['pc6-13'] }
        ]
      },
      {
        id: 'chc6-5', title: '第五单元：围绕中心意思写', icon: '✏️', semester: '上册',
        points: [
          { id: 'pc6-27', name: '夏天里的成长', difficulty: 2, keywords: ['夏天', '成长', '万物', '中心', '描写'], concept: '围绕"夏天是万物迅速生长的季节"这一中心展开描写', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-28'] },
          { id: 'pc6-28', name: '盼', difficulty: 2, keywords: ['盼', '新雨衣', '心理', '等待', '儿童'], concept: '通过盼穿新雨衣的故事，学习细腻的心理描写', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-27'] },
          { id: 'pc6-29', name: '围绕中心意思选材', difficulty: 3, keywords: ['中心', '选材', '方法', '典型', '围绕'], concept: '学习围绕一个中心意思选择典型事例来表达', questionTypes: ['选择', '判断'], relatedPoints: ['pc6-27'] },
          { id: 'pc6-30', name: '从不同方面写', difficulty: 3, keywords: ['不同方面', '中心', '描写', '具体', '全面'], concept: '学习从不同方面围绕中心意思展开具体描写', questionTypes: ['选择', '判断'], relatedPoints: ['pc6-29'] },
          { id: 'pc6-31', name: '习作：围绕中心意思写', difficulty: 3, keywords: ['习作', '中心', '选材', '描写', '方法'], concept: '选择一个字作为中心，围绕它从不同方面展开写作', questionTypes: ['判断'], relatedPoints: ['pc6-29'] },
          { id: 'pc6-32', name: '口语交际：意见不同怎么办', difficulty: 2, keywords: ['口语', '意见', '不同', '协商', '尊重'], concept: '学会在意见不同时通过协商找到解决办法', questionTypes: ['判断'], relatedPoints: ['pc6-26'] }
        ]
      },
      {
        id: 'chc6-6', title: '第六单元：保护环境', icon: '🌍', semester: '上册',
        points: [
          { id: 'pc6-33', name: '古诗三首（浪淘沙）', difficulty: 2, keywords: ['浪淘沙', '刘禹锡', '黄河', '雄伟', '古诗'], concept: '背诵并理解《浪淘沙》，感受黄河的雄伟气势', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-34', 'pc6-35'] },
          { id: 'pc6-34', name: '古诗三首（江南春）', difficulty: 2, keywords: ['江南春', '杜牧', '江南', '春天', '古诗'], concept: '背诵并理解《江南春》，感受江南春天的美丽和历史沧桑', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-33', 'pc6-35'] },
          { id: 'pc6-35', name: '古诗三首（书湖阴先生壁）', difficulty: 2, keywords: ['书湖阴先生壁', '王安石', '田园', '勤劳', '古诗'], concept: '背诵并理解古诗，感受田园生活的美好和主人的勤劳', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-33'] },
          { id: 'pc6-36', name: '只有一个地球', difficulty: 2, keywords: ['地球', '环保', '珍惜', '资源', '保护'], concept: '了解地球的珍贵和面临的威胁，增强环保意识', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-37'] },
          { id: 'pc6-37', name: '三黑和土地', difficulty: 2, keywords: ['三黑', '土地', '农民', '珍惜', '热爱'], concept: '通过农民三黑对土地的热爱感受农民对土地的珍惜', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-36'] },
          { id: 'pc6-38', name: '青山不老', difficulty: 2, keywords: ['青山', '老人', '植树', '绿化', '坚持'], concept: '通过老人植树造林的故事感受保护环境的坚持和奉献', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-36'] },
          { id: 'pc6-39', name: '习作：倡议书', difficulty: 3, keywords: ['倡议书', '环保', '格式', '号召', '行动'], concept: '学习写倡议书的格式，围绕环保主题发出倡议', questionTypes: ['判断'], relatedPoints: ['pc6-36'] }
        ]
      },
      {
        id: 'chc6-7', title: '第七单元：艺术之美', icon: '🎵', semester: '上册',
        points: [
          { id: 'pc6-40', name: '文言文二则（伯牙鼓琴）', difficulty: 2, keywords: ['伯牙', '鼓琴', '知音', '高山流水', '文言文'], concept: '通过伯牙和钟子期的故事理解"知音"的含义', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-41'] },
          { id: 'pc6-41', name: '文言文二则（书戴嵩画牛）', difficulty: 2, keywords: ['戴嵩', '画牛', '牧童', '实践', '文言文'], concept: '通过故事明白实践出真知的道理', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-40'] },
          { id: 'pc6-42', name: '月光曲', difficulty: 2, keywords: ['月光曲', '贝多芬', '盲姑娘', '音乐', '创作'], concept: '了解《月光曲》的创作故事，感受音乐的魅力', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-43'] },
          { id: 'pc6-43', name: '京剧趣谈', difficulty: 2, keywords: ['京剧', '国粹', '马鞭', '亮相', '传统'], concept: '了解京剧的基本知识，感受中国传统戏曲的魅力', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-42'] },
          { id: 'pc6-44', name: '展开想象感受艺术', difficulty: 3, keywords: ['想象', '艺术', '音乐', '画面', '感受'], concept: '学会通过想象将音乐和文字转化为画面，感受艺术之美', questionTypes: ['选择', '判断'], relatedPoints: ['pc6-7'] },
          { id: 'pc6-45', name: '口语交际：聊聊书法', difficulty: 2, keywords: ['口语', '书法', '艺术', '介绍', '欣赏'], concept: '学会介绍和欣赏中国书法艺术', questionTypes: ['判断'], relatedPoints: ['pc5-69'] }
        ]
      },
      {
        id: 'chc6-8', title: '第八单元：走近鲁迅', icon: '📚', semester: '上册',
        points: [
          { id: 'pc6-46', name: '少年闰土', difficulty: 2, keywords: ['闰土', '鲁迅', '故乡', '少年', '自由'], concept: '通过闰土的故事感受鲁迅笔下农村少年的自由和快乐', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-47'] },
          { id: 'pc6-47', name: '好的故事', difficulty: 3, keywords: ['好的故事', '鲁迅', '梦境', '象征', '美好'], concept: '通过鲁迅的散文诗感受其对美好生活的向往', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-46', 'pc6-48'] },
          { id: 'pc6-48', name: '我的伯父鲁迅先生', difficulty: 2, keywords: ['鲁迅', '伯父', '为自己想少', '为别人想多', '品质'], concept: '通过鲁迅先生的几件事感受他为自己想少、为别人想多的品质', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-49'] },
          { id: 'pc6-49', name: '有的人', difficulty: 2, keywords: ['有的人', '臧克家', '鲁迅', '纪念', '对比'], concept: '通过诗歌理解两种人的对比，纪念鲁迅的伟大精神', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-48'] },
          { id: 'pc6-50', name: '借助相关资料理解课文', difficulty: 3, keywords: ['相关资料', '理解', '课文', '背景', '方法'], concept: '学会借助作者生平、写作背景等相关资料理解课文', questionTypes: ['选择', '判断'], relatedPoints: ['pc6-18'] },
          { id: 'pc6-51', name: '习作：有你，真好', difficulty: 3, keywords: ['习作', '你', '真好', '感谢', '记叙'], concept: '写一篇感谢某个对自己重要的人的作文', questionTypes: ['判断'], relatedPoints: ['pc6-14'] },
          { id: 'pc6-52', name: '六年级上册知识总结', difficulty: 3, keywords: ['总结', '复习', '六年级', '上册', '阅读', '写作'], concept: '回顾六年级上册的语文知识：有目的地阅读、小说分析、围绕中心写等', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-19', 'pc6-24'] }
        ]
      },

      // ========== 六年级下册 ==========
      {
        id: 'chc6-9', title: '第一单元：民风民俗', icon: '🏮', semester: '下册',
        points: [
          { id: 'pc6-53', name: '北京的春节', difficulty: 2, keywords: ['北京', '春节', '老舍', '习俗', '热闹'], concept: '通过老舍的描写感受北京春节的热闹和传统习俗', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-54'] },
          { id: 'pc6-54', name: '腊八粥', difficulty: 2, keywords: ['腊八粥', '沈从文', '传统', '美味', '期盼'], concept: '通过腊八粥感受传统节日的温馨和对美食的期盼', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-53', 'pc6-55'] },
          { id: 'pc6-55', name: '古诗三首（寒食）', difficulty: 2, keywords: ['寒食', '韩翃', '寒食节', '传统', '古诗'], concept: '背诵并理解《寒食》，了解寒食节的习俗', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-56', 'pc6-57'] },
          { id: 'pc6-56', name: '古诗三首（迢迢牵牛星）', difficulty: 2, keywords: ['迢迢牵牛星', '牵牛星', '织女星', '七夕', '相思'], concept: '背诵并理解古诗，感受牛郎织女的故事和相思之情', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-55', 'pc6-57'] },
          { id: 'pc6-57', name: '古诗三首（十五夜望山）', difficulty: 2, keywords: ['十五夜', '王建', '中秋', '思乡', '古诗'], concept: '背诵并理解古诗，感受中秋节的思乡之情', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-55'] },
          { id: 'pc6-58', name: '藏戏', difficulty: 2, keywords: ['藏戏', '西藏', '面具', '传统', '戏曲'], concept: '了解藏戏的特点和历史，感受中国传统戏曲的多样性', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-43'] },
          { id: 'pc6-59', name: '分清内容主次', difficulty: 3, keywords: ['内容', '主次', '详略', '详写', '略写'], concept: '学习分清文章内容的主次，理解详写和略写的作用', questionTypes: ['选择', '判断'], relatedPoints: ['pc6-29'] }
        ]
      },
      {
        id: 'chc6-10', title: '第二单元：外国文学名著', icon: '📗', semester: '下册',
        points: [
          { id: 'pc6-60', name: '鲁滨逊漂流记（节选）', difficulty: 2, keywords: ['鲁滨逊', '漂流', '荒岛', '生存', '勇敢'], concept: '感受鲁滨逊在荒岛上勇敢生存的冒险精神', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-61'] },
          { id: 'pc6-61', name: '骑鹅旅行记（节选）', difficulty: 2, keywords: ['骑鹅', '旅行', '瑞典', '成长', '变化'], concept: '通过骑鹅旅行的故事感受主人公的成长变化', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-60', 'pc6-62'] },
          { id: 'pc6-62', name: '汤姆·索亚历险记（节选）', difficulty: 2, keywords: ['汤姆', '索亚', '历险', '冒险', '勇敢'], concept: '感受汤姆·索亚的冒险精神和追求自由的品质', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-61'] },
          { id: 'pc6-63', name: '名著阅读方法', difficulty: 3, keywords: ['名著', '阅读', '方法', '梗概', '精彩片段'], concept: '学习通过读梗概和精彩片段了解名著的方法', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-63'] },
          { id: 'pc6-64', name: '体会人物情感变化', difficulty: 3, keywords: ['人物', '情感', '变化', '分析', '理解'], concept: '学会分析名著中人物的情感变化过程', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-58'] },
          { id: 'pc6-65', name: '口语交际：同读一本书', difficulty: 2, keywords: ['口语', '同读', '交流', '分享', '讨论'], concept: '学会与同学交流读书心得，分享对同一本书的不同理解', questionTypes: ['判断'], relatedPoints: ['pc5-49'] }
        ]
      },
      {
        id: 'chc6-11', title: '第三单元：让真情在笔尖流露', icon: '✍️', semester: '下册',
        points: [
          { id: 'pc6-66', name: '匆匆', difficulty: 2, keywords: ['匆匆', '朱自清', '时间', '珍惜', '散文'], concept: '通过朱自清的散文感受时间的流逝，学会珍惜时间', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-67'] },
          { id: 'pc6-67', name: '那个星期天', difficulty: 2, keywords: ['那个星期天', '史铁生', '等待', '失望', '母爱'], concept: '通过等待母亲带"我"出去玩的经历感受失望和成长', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-66'] },
          { id: 'pc6-68', name: '表达真情实感', difficulty: 3, keywords: ['真情实感', '表达', '方法', '融入', '具体事例'], concept: '学习通过具体事例和细腻描写表达真情实感', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-34'] },
          { id: 'pc6-69', name: '习作：让真情自然流露', difficulty: 3, keywords: ['习作', '真情', '流露', '感受', '具体'], concept: '选择一种感受，通过具体事例让真情自然流露', questionTypes: ['判断'], relatedPoints: ['pc6-68'] },
          { id: 'pc6-70', name: '体会文章表达情感的方法', difficulty: 3, keywords: ['体会', '表达情感', '方法', '融情', '直接'], concept: '学习融情于景、融情于事和直接抒情等表达情感的方法', questionTypes: ['选择', '判断'], relatedPoints: ['pc5-5', 'pc6-68'] }
        ]
      },
      {
        id: 'chc6-12', title: '第四单元：理想与信念', icon: '⭐', semester: '下册',
        points: [
          { id: 'pc6-71', name: '古诗三首（马诗）', difficulty: 2, keywords: ['马诗', '李贺', '大漠', '建功立业', '古诗'], concept: '背诵并理解《马诗》，感受诗人建功立业的渴望', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-72', 'pc6-73'] },
          { id: 'pc6-72', name: '古诗三首（石灰吟）', difficulty: 2, keywords: ['石灰吟', '于谦', '石灰', '清白', '坚贞'], concept: '背诵并理解《石灰吟》，学习诗人坚贞不屈的品格', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-71', 'pc6-73'] },
          { id: 'pc6-73', name: '古诗三首（竹石）', difficulty: 2, keywords: ['竹石', '郑燮', '竹子', '坚韧', '古诗'], concept: '背诵并理解《竹石》，学习竹子坚韧不拔的精神', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-71'] },
          { id: 'pc6-74', name: '十六年前的回忆', difficulty: 2, keywords: ['李大钊', '回忆', '革命', '牺牲', '坚贞'], concept: '通过女儿的回忆感受李大钊坚贞不屈的革命精神', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-75'] },
          { id: 'pc6-75', name: '为人民服务', difficulty: 3, keywords: ['为人民服务', '毛泽东', '张思德', '革命', '信念'], concept: '理解"为人民服务"的深刻含义，感受革命先烈的崇高信念', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-74', 'pc6-76'] },
          { id: 'pc6-76', name: '金色的鱼钩', difficulty: 2, keywords: ['鱼钩', '老班长', '红军', '牺牲', '感动'], concept: '通过老班长照顾伤员的故事感受舍己为人的崇高精神', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-75'] },
          { id: 'pc6-77', name: '习作：心愿', difficulty: 3, keywords: ['习作', '心愿', '理想', '表达', '具体'], concept: '写一写自己的心愿，把心愿产生的原因和打算写具体', questionTypes: ['判断'], relatedPoints: ['pc6-69'] }
        ]
      },
      {
        id: 'chc6-13', title: '第五单元：科学精神', icon: '🔬', semester: '下册',
        points: [
          { id: 'pc6-78', name: '文言文二则（学弈）', difficulty: 2, keywords: ['学弈', '弈秋', '专心', '文言文', '学习'], concept: '通过文言文明白学习要专心致志，不能三心二意', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-79'] },
          { id: 'pc6-79', name: '文言文二则（两小儿辩日）', difficulty: 2, keywords: ['两小儿', '辩日', '孔子', '观察', '思考'], concept: '通过故事感受善于观察和独立思考的重要性', questionTypes: ['选择', '填空', '背诵'], relatedPoints: ['pc6-78'] },
          { id: 'pc6-80', name: '真理诞生于一百个问号之后', difficulty: 2, keywords: ['真理', '问号', '科学', '发现', '坚持'], concept: '通过科学家的故事理解发现真理需要不断追问和探索', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-81'] },
          { id: 'pc6-81', name: '表里的生物', difficulty: 2, keywords: ['表', '生物', '好奇心', '探索', '童年'], concept: '通过童年对表的好奇感受求知欲和探索精神', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-80', 'pc6-82'] },
          { id: 'pc6-82', name: '他们那时候多有趣啊', difficulty: 2, keywords: ['未来', '学习', '想象', '对比', '科幻'], concept: '通过科幻故事想象未来的学习方式，对比现在珍惜学习机会', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-81'] },
          { id: 'pc6-83', name: '用具体事例说明观点', difficulty: 3, keywords: ['具体事例', '观点', '说明', '论证', '方法'], concept: '学习用具体事例来说明和论证自己的观点', questionTypes: ['选择', '判断'], relatedPoints: ['pc6-80'] },
          { id: 'pc6-84', name: '习作：插上科学的翅膀飞', difficulty: 3, keywords: ['习作', '科学', '想象', '科幻', '未来'], concept: '展开科学想象，写一篇科幻故事', questionTypes: ['判断'], relatedPoints: ['pc6-82'] }
        ]
      },
      {
        id: 'chc6-14', title: '第六单元：难忘小学生活', icon: '🏫', semester: '下册',
        points: [
          { id: 'pc6-85', name: '回忆往事', difficulty: 2, keywords: ['回忆', '往事', '小学', '成长', '感恩'], concept: '通过综合性学习回忆小学生活，感受成长和感恩', questionTypes: ['选择', '判断'], relatedPoints: ['pc6-86'] },
          { id: 'pc6-86', name: '依依惜别', difficulty: 2, keywords: ['惜别', '毕业', '感恩', '老师', '同学'], concept: '通过写信、赠言等方式表达对老师和同学的不舍和祝福', questionTypes: ['选择', '判断'], relatedPoints: ['pc6-85'] },
          { id: 'pc6-87', name: '回忆录写作', difficulty: 3, keywords: ['回忆录', '写作', '小学', '难忘', '经历'], concept: '学习写回忆录，记录小学生活中难忘的人和事', questionTypes: ['判断'], relatedPoints: ['pc6-85'] },
          { id: 'pc6-88', name: '毕业赠言', difficulty: 2, keywords: ['赠言', '毕业', '祝福', '鼓励', '友谊'], concept: '学会写毕业赠言，表达对同学的祝福和鼓励', questionTypes: ['判断'], relatedPoints: ['pc6-86'] },
          { id: 'pc6-89', name: '综合性学习成果展示', difficulty: 2, keywords: ['综合', '学习', '成果', '展示', '汇报'], concept: '整理和展示六年来的语文学习成果', questionTypes: ['判断'], relatedPoints: ['pc6-87'] },
          { id: 'pc6-90', name: '六年级语文知识总结', difficulty: 3, keywords: ['总结', '复习', '六年级', '小学', '语文', '综合'], concept: '回顾小学六年的语文知识，系统总结阅读策略、写作方法、语言积累等', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['pc6-52', 'pc6-89'] }
        ]
      }
    ]
  }
};