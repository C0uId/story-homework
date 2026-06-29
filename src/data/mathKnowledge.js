// ============================================================
// 人教版（PEP）小学数学 1-6年级 完整知识点框架
// 严格按照人教版课本目录顺序编排
// 每个知识点包含AI生成元数据字段
// ============================================================

export const mathKnowledge = {
  // ======================== 一年级 ========================
  '1': {
    title: '一年级数学',
    icon: '🔢',
    color: '#22c55e',
    chapters: [
      // ===== 一年级上册 =====
      {
        id: 'ch1-1', title: '准备课', icon: '🔢',
        points: [
          { id: 'p1-1', name: '数一数', difficulty: 1, keywords: ['数数', '点数', '一一对应'], concept: '通过观察场景图，用点数的方法数出物体的数量，建立数与物的对应关系', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-2'] },
          { id: 'p1-2', name: '比多少', difficulty: 1, keywords: ['比较', '多', '少', '同样多'], concept: '用一一对应的方法比较两组物体数量的多少，理解多、少、同样多的含义', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-1'] },
          { id: 'p1-3', name: '数的含义', difficulty: 1, keywords: ['数量', '基数', '物体个数'], concept: '理解每个数表示的具体含义，能用数表示物体的个数', questionTypes: ['选择', '填空'], relatedPoints: ['p1-1'] },
          { id: 'p1-4', name: '数的顺序', difficulty: 1, keywords: ['从小到大', '从大到小', '数列'], concept: '掌握1-5各数的排列顺序，理解数的大小关系', questionTypes: ['填空', '选择'], relatedPoints: ['p1-5'] },
          { id: 'p1-5', name: '书写数字', difficulty: 1, keywords: ['数字书写', '规范', '笔顺'], concept: '学会正确书写阿拉伯数字1-5，注意笔顺和在田字格中的位置', questionTypes: ['判断', '填空'], relatedPoints: ['p1-4'] },
          { id: 'p1-6', name: '比较符号', difficulty: 1, keywords: ['大于', '小于', '等于', '>', '<', '='], concept: '认识">""<""="三种符号，能正确比较两个数的大小并用符号表示', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-2'] }
        ]
      },
      {
        id: 'ch1-2', title: '位置', icon: '📍',
        points: [
          { id: 'p1-7', name: '上下', difficulty: 1, keywords: ['上', '下', '位置关系'], concept: '认识上下的位置关系，能用"上""下"描述物体的相对位置', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-8'] },
          { id: 'p1-8', name: '前后', difficulty: 1, keywords: ['前', '后', '位置关系'], concept: '认识前后的位置关系，能用"前""后"描述物体的相对位置', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-7'] },
          { id: 'p1-9', name: '左右', difficulty: 1, keywords: ['左', '右', '位置关系', '左右手'], concept: '以自身为中心辨别左右，能用"左""右"描述物体的位置', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-7', 'p1-8'] },
          { id: 'p1-10', name: '位置的相对性', difficulty: 2, keywords: ['相对位置', '参照物', '不同角度'], concept: '理解位置是相对的，从不同角度看，同一物体的位置描述可能不同', questionTypes: ['选择', '判断'], relatedPoints: ['p1-7', 'p1-8', 'p1-9'] },
          { id: 'p1-11', name: '确定位置', difficulty: 2, keywords: ['确定', '描述位置', '方位'], concept: '综合运用上下、前后、左右来准确描述物体的位置', questionTypes: ['选择', '填空'], relatedPoints: ['p1-7', 'p1-8', 'p1-9'] },
          { id: 'p1-12', name: '位置应用', difficulty: 2, keywords: ['生活中的位置', '排队', '座位'], concept: '在实际生活场景中运用位置知识解决问题，如排队、找座位等', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-7', 'p1-8', 'p1-9'] }
        ]
      },
      {
        id: 'ch1-3', title: '1-5的认识和加减法', icon: '➕',
        points: [
          { id: 'p1-13', name: '1-5各数的认识', difficulty: 1, keywords: ['认识数字', '数量', '1-5'], concept: '认识1-5各数，会读会写，理解每个数表示的含义', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p1-14'] },
          { id: 'p1-14', name: '比大小', difficulty: 1, keywords: ['大小比较', '>', '<', '='], concept: '用">""<""="比较1-5各数的大小，理解符号的含义', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-6'] },
          { id: 'p1-15', name: '第几', difficulty: 1, keywords: ['基数', '序数', '排队'], concept: '区分基数和序数的含义，理解"几个"和"第几个"的区别', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-13'] },
          { id: 'p1-16', name: '分与合', difficulty: 1, keywords: ['分解', '组成', '数的分合'], concept: '掌握1-5各数的分与合，为加减法运算打基础', questionTypes: ['填空', '选择'], relatedPoints: ['p1-17'] },
          { id: 'p1-17', name: '加法的初步认识', difficulty: 1, keywords: ['加法', '合并', '加号', '+'], concept: '理解加法的含义，认识加号，会计算5以内的加法', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p1-18'] },
          { id: 'p1-18', name: '减法的初步认识', difficulty: 1, keywords: ['减法', '去掉', '减号', '-'], concept: '理解减法的含义，认识减号，会计算5以内的减法', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p1-17'] }
        ]
      },
      {
        id: 'ch1-4', title: '认识图形（一）', icon: '🔷',
        points: [
          { id: 'p1-19', name: '认识长方体', difficulty: 1, keywords: ['长方体', '立体图形', '面'], concept: '初步认识长方体的特征，能从实物中辨认出长方体', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p1-20'] },
          { id: 'p1-20', name: '认识正方体', difficulty: 1, keywords: ['正方体', '立体图形', '面'], concept: '初步认识正方体的特征，能从实物中辨认出正方体', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p1-19'] },
          { id: 'p1-21', name: '认识圆柱', difficulty: 1, keywords: ['圆柱', '立体图形', '曲面'], concept: '初步认识圆柱的特征，能从实物中辨认出圆柱', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p1-22'] },
          { id: 'p1-22', name: '认识球', difficulty: 1, keywords: ['球', '立体图形', '曲面'], concept: '初步认识球的特征，能从实物中辨认出球', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p1-21'] },
          { id: 'p1-23', name: '图形的拼组', difficulty: 2, keywords: ['拼组', '堆积', '图形组合'], concept: '通过拼搭活动，感受立体图形之间的关系，发展空间观念', questionTypes: ['选择', '判断'], relatedPoints: ['p1-19', 'p1-20', 'p1-21', 'p1-22'] },
          { id: 'p1-24', name: '图形的分类', difficulty: 2, keywords: ['分类', '区分', '特征'], concept: '能根据不同立体图形的特征进行分类，比较它们的异同', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-19', 'p1-20', 'p1-21', 'p1-22'] }
        ]
      },
      {
        id: 'ch1-5', title: '6-10的认识和加减法', icon: '🔢',
        points: [
          { id: 'p1-25', name: '6-10各数的认识', difficulty: 1, keywords: ['认识数字', '6-10', '数数'], concept: '认识6-10各数，会读会写，理解每个数表示的含义和数的顺序', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p1-26'] },
          { id: 'p1-26', name: '10以内数的大小比较', difficulty: 1, keywords: ['大小比较', '>', '<', '='], concept: '掌握10以内数的大小比较方法，会用符号表示大小关系', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-14'] },
          { id: 'p1-27', name: '10以内的加法', difficulty: 1, keywords: ['加法', '10以内', '计算'], concept: '掌握10以内加法的计算方法，能熟练口算10以内的加法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-28'] },
          { id: 'p1-28', name: '10以内的减法', difficulty: 1, keywords: ['减法', '10以内', '计算'], concept: '掌握10以内减法的计算方法，能熟练口算10以内的减法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-27'] },
          { id: 'p1-29', name: '连加连减', difficulty: 2, keywords: ['连加', '连减', '三个数'], concept: '掌握连加、连减的运算顺序，能正确计算三个数的连加连减', questionTypes: ['计算', '填空'], relatedPoints: ['p1-27', 'p1-28'] },
          { id: 'p1-30', name: '加减混合', difficulty: 2, keywords: ['加减混合', '运算顺序'], concept: '掌握加减混合运算的计算方法，能正确计算加减混合算式', questionTypes: ['计算', '填空'], relatedPoints: ['p1-29'] }
        ]
      },
      {
        id: 'ch1-6', title: '11-20各数的认识', icon: '🔟',
        points: [
          { id: 'p1-31', name: '11-20各数的认识', difficulty: 1, keywords: ['11-20', '认识数', '读写'], concept: '认识11-20各数，理解这些数是由1个十和几个一组成的', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p1-32'] },
          { id: 'p1-32', name: '数的组成', difficulty: 1, keywords: ['十位', '个位', '十和一'], concept: '理解11-20各数的组成，知道十几是由1个十和几个一组成', questionTypes: ['填空', '选择'], relatedPoints: ['p1-31'] },
          { id: 'p1-33', name: '数的顺序和大小', difficulty: 1, keywords: ['顺序', '大小比较', '排列'], concept: '掌握11-20各数的顺序，能比较大小，会排列', questionTypes: ['选择', '填空'], relatedPoints: ['p1-31'] },
          { id: 'p1-34', name: '十加几和相应的减法', difficulty: 1, keywords: ['十加几', '十几减几', '十几减十'], concept: '掌握10加几和十几减几的计算方法，理解算理', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-32'] },
          { id: 'p1-35', name: '十几加几和相应的减法', difficulty: 2, keywords: ['十几加几', '不进位加', '不退位减'], concept: '掌握十几加几（不进位）和十几减几（不退位）的计算方法', questionTypes: ['计算', '填空'], relatedPoints: ['p1-34'] },
          { id: 'p1-36', name: '数学符号的认识', difficulty: 1, keywords: ['加号', '减号', '等号', '算式'], concept: '进一步巩固加号、减号、等号的认识，能看图列算式', questionTypes: ['选择', '填空', '计算'], relatedPoints: ['p1-17', 'p1-18'] }
        ]
      },
      {
        id: 'ch1-7', title: '认识钟表', icon: '🕐',
        points: [
          { id: 'p1-37', name: '认识钟面', difficulty: 1, keywords: ['钟面', '时针', '分针', '12个数'], concept: '认识钟面上的12个数字、时针和分针，了解钟面的基本结构', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-38'] },
          { id: 'p1-38', name: '认识整时', difficulty: 1, keywords: ['整时', '整点', '钟表'], concept: '学会看整时的钟表，知道分针指向12、时针指向几就是几时整', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-37'] },
          { id: 'p1-39', name: '书写时间', difficulty: 1, keywords: ['时间书写', '电子表', '几时'], concept: '学会用两种方式表示时间：文字方式（几时整）和电子表方式（几:00）', questionTypes: ['填空', '选择'], relatedPoints: ['p1-38'] },
          { id: 'p1-40', name: '快几时了和几时刚过', difficulty: 2, keywords: ['快几时', '几时刚过', '大约'], concept: '能辨别"快几时了"和"几时刚过"的大约时间', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p1-38'] },
          { id: 'p1-41', name: '时间的先后顺序', difficulty: 2, keywords: ['先后', '时间排序', '日常生活'], concept: '能根据钟表时间判断事情的先后顺序，感受时间的流逝', questionTypes: ['选择', '判断'], relatedPoints: ['p1-38'] },
          { id: 'p1-42', name: '钟表在生活中的应用', difficulty: 2, keywords: ['作息时间', '时间安排', '生活应用'], concept: '结合生活经验，合理安排时间，养成良好的时间观念', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-41'] }
        ]
      },
      {
        id: 'ch1-8', title: '20以内的进位加法', icon: '🧮',
        points: [
          { id: 'p1-43', name: '9加几', difficulty: 1, keywords: ['9加几', '凑十法', '进位加'], concept: '掌握9加几的计算方法，学会用"凑十法"进行计算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-44'] },
          { id: 'p1-44', name: '8、7、6加几', difficulty: 1, keywords: ['8加几', '7加几', '6加几', '凑十法'], concept: '掌握8、7、6加几的计算方法，灵活运用凑十法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-43'] },
          { id: 'p1-45', name: '5、4、3、2加几', difficulty: 1, keywords: ['5加几', '4加几', '3加几', '2加几'], concept: '掌握5、4、3、2加几的计算方法，能正确口算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-44'] },
          { id: 'p1-46', name: '凑十法', difficulty: 2, keywords: ['凑十', '拆数', '方法'], concept: '理解凑十法的算理：看大数、拆小数、凑成十、再加几', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-43'] },
          { id: 'p1-47', name: '20以内进位加法表', difficulty: 2, keywords: ['加法表', '规律', '口算'], concept: '整理20以内进位加法表，发现规律，提高口算速度和正确率', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-43', 'p1-44', 'p1-45'] },
          { id: 'p1-48', name: '用数学解决问题', difficulty: 2, keywords: ['解决问题', '应用题', '提问题'], concept: '能根据情境图提出数学问题并用加法解决，培养问题意识', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p1-43', 'p1-44', 'p1-45'] }
        ]
      },
      // ===== 一年级下册 =====
      {
        id: 'ch1-9', title: '认识图形（二）', icon: '🔷',
        points: [
          { id: 'p1-49', name: '认识长方形', difficulty: 1, keywords: ['长方形', '平面图形', '对边相等'], concept: '认识长方形的特征：对边相等，四个角都是直角', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p1-50'] },
          { id: 'p1-50', name: '认识正方形', difficulty: 1, keywords: ['正方形', '平面图形', '四边相等'], concept: '认识正方形的特征：四条边都相等，四个角都是直角', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p1-49'] },
          { id: 'p1-51', name: '认识三角形', difficulty: 1, keywords: ['三角形', '平面图形', '三条边'], concept: '认识三角形的特征：由三条边围成，有三个角', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p1-52'] },
          { id: 'p1-52', name: '认识圆', difficulty: 1, keywords: ['圆', '平面图形', '曲线'], concept: '认识圆的特征：由一条曲线围成，没有角，是封闭图形', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p1-51'] },
          { id: 'p1-53', name: '图形的拼组', difficulty: 2, keywords: ['拼组', '组合', '七巧板'], concept: '用平面图形进行拼组活动，体会图形之间的关系', questionTypes: ['选择', '判断'], relatedPoints: ['p1-49', 'p1-50', 'p1-51', 'p1-52'] },
          { id: 'p1-54', name: '立体图形与平面图形的关系', difficulty: 2, keywords: ['展开', '截面', '立体和平面'], concept: '初步感知立体图形的面是平面图形，体会立体与平面的关系', questionTypes: ['选择', '判断'], relatedPoints: ['p1-19', 'p1-20', 'p1-21', 'p1-22'] }
        ]
      },
      {
        id: 'ch1-10', title: '20以内的退位减法', icon: '➖',
        points: [
          { id: 'p1-55', name: '十几减9', difficulty: 1, keywords: ['十几减9', '退位减', '破十法'], concept: '掌握十几减9的计算方法，学会用"破十法""想加算减法"计算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-56'] },
          { id: 'p1-56', name: '十几减8', difficulty: 1, keywords: ['十几减8', '退位减', '破十法'], concept: '掌握十几减8的计算方法，能正确口算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-57'] },
          { id: 'p1-57', name: '十几减7、6', difficulty: 1, keywords: ['十几减7', '十几减6', '退位减'], concept: '掌握十几减7和十几减6的计算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-58'] },
          { id: 'p1-58', name: '十几减5、4、3、2', difficulty: 1, keywords: ['十几减5', '十几减4', '退位减'], concept: '掌握十几减5、4、3、2的计算方法，能熟练口算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-55'] },
          { id: 'p1-59', name: '想加算减法', difficulty: 2, keywords: ['想加算减', '逆运算', '方法'], concept: '利用加减法的互逆关系，用想加法算减法的方法进行退位减法计算', questionTypes: ['计算', '填空', '判断'], relatedPoints: ['p1-55', 'p1-56', 'p1-57', 'p1-58'] },
          { id: 'p1-60', name: '用减法解决问题', difficulty: 2, keywords: ['解决问题', '应用题', '减法应用'], concept: '能根据情境图提出数学问题并用减法解决', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p1-55', 'p1-56'] }
        ]
      },
      {
        id: 'ch1-11', title: '分类与整理', icon: '📊',
        points: [
          { id: 'p1-61', name: '按给定标准分类', difficulty: 1, keywords: ['分类', '标准', '归类'], concept: '能按照给定的标准对物体进行分类，体会分类的意义', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p1-62'] },
          { id: 'p1-62', name: '自选标准分类', difficulty: 1, keywords: ['自选标准', '分类方法', '不同标准'], concept: '能自选标准进行分类，理解不同标准下分类结果可能不同', questionTypes: ['选择', '判断'], relatedPoints: ['p1-61'] },
          { id: 'p1-63', name: '用象形统计图整理数据', difficulty: 1, keywords: ['象形图', '统计图', '整理'], concept: '学会用象形统计图（一一对应摆图形）来整理分类结果', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-64'] },
          { id: 'p1-64', name: '简单的统计表', difficulty: 2, keywords: ['统计表', '记录', '数据'], concept: '学会用简单的统计表记录分类结果，能看表回答问题', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p1-63'] },
          { id: 'p1-65', name: '数据分析', difficulty: 2, keywords: ['数据分析', '比较', '多少'], concept: '能根据统计图或统计表回答问题，进行简单的数据比较和分析', questionTypes: ['选择', '填空'], relatedPoints: ['p1-63', 'p1-64'] },
          { id: 'p1-66', name: '分类在生活中的应用', difficulty: 2, keywords: ['生活应用', '分类整理', '实际问题'], concept: '体会分类在生活中的广泛应用，能用分类知识解决实际问题', questionTypes: ['选择', '判断'], relatedPoints: ['p1-61', 'p1-62'] }
        ]
      },
      {
        id: 'ch1-12', title: '100以内数的认识', icon: '💯',
        points: [
          { id: 'p1-67', name: '数数', difficulty: 1, keywords: ['数数', '一个一个数', '十个十个数'], concept: '学会一个一个地数、十个十个地数，能数到100', questionTypes: ['填空', '选择'], relatedPoints: ['p1-68'] },
          { id: 'p1-68', name: '100以内数的组成', difficulty: 1, keywords: ['十位', '个位', '组成'], concept: '理解100以内数的组成，知道几个十和几个一组成几十几', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p1-69'] },
          { id: 'p1-69', name: '100以内数的读写', difficulty: 1, keywords: ['读数', '写数', '十位', '个位'], concept: '掌握100以内数的读法和写法，认识百位', questionTypes: ['填空', '选择'], relatedPoints: ['p1-68'] },
          { id: 'p1-70', name: '100以内数的大小比较', difficulty: 1, keywords: ['大小比较', '位数', '十位'], concept: '掌握100以内数的大小比较方法：位数不同比位数，位数相同比最高位', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-68'] },
          { id: 'p1-71', name: '整十数加一位数及相应的减法', difficulty: 1, keywords: ['整十数', '一位数', '加减法'], concept: '掌握整十数加一位数和相应减法的计算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-68'] },
          { id: 'p1-72', name: '数的顺序表', difficulty: 2, keywords: ['百数表', '规律', '数列'], concept: '认识百数表，发现数的排列规律，加深对100以内数的认识', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p1-67', 'p1-68'] }
        ]
      },
      {
        id: 'ch1-13', title: '认识人民币', icon: '💰',
        points: [
          { id: 'p1-73', name: '认识人民币', difficulty: 1, keywords: ['人民币', '元', '角', '分'], concept: '认识各种面值的人民币，知道元、角、分是人民币的单位', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-74'] },
          { id: 'p1-74', name: '元角分的关系', difficulty: 1, keywords: ['1元=10角', '1角=10分', '进率'], concept: '掌握元、角、分之间的进率：1元=10角，1角=10分', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p1-73'] },
          { id: 'p1-75', name: '人民币的换算', difficulty: 1, keywords: ['换算', '兑换', '等值'], concept: '能进行人民币不同单位之间的换算，理解等值兑换', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p1-74'] },
          { id: 'p1-76', name: '人民币的简单计算', difficulty: 2, keywords: ['加法', '减法', '购物计算'], concept: '能用人民币进行简单的加减法计算，解决购物付款问题', questionTypes: ['计算', '选择', '填空'], relatedPoints: ['p1-74', 'p1-75'] },
          { id: 'p1-77', name: '购物问题', difficulty: 2, keywords: ['购物', '付钱', '找钱'], concept: '解决简单的购物问题，理解付钱、找钱的过程', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p1-76'] },
          { id: 'p1-78', name: '人民币在生活中的应用', difficulty: 2, keywords: ['生活应用', '合理消费', '爱护人民币'], concept: '认识人民币在生活中的作用，培养合理消费意识和爱护人民币的习惯', questionTypes: ['选择', '判断'], relatedPoints: ['p1-73', 'p1-77'] }
        ]
      },
      {
        id: 'ch1-14', title: '100以内的加减法（一）', icon: '➕',
        points: [
          { id: 'p1-79', name: '整十数加整十数', difficulty: 1, keywords: ['整十数', '加法', '口算'], concept: '掌握整十数加整十数的计算方法，理解算理', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-80'] },
          { id: 'p1-80', name: '整十数减整十数', difficulty: 1, keywords: ['整十数', '减法', '口算'], concept: '掌握整十数减整十数的计算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-79'] },
          { id: 'p1-81', name: '两位数加一位数不进位加法', difficulty: 1, keywords: ['不进位', '两位数加一位数'], concept: '掌握两位数加一位数（不进位）的口算方法，个位加个位', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-82'] },
          { id: 'p1-82', name: '两位数加整十数', difficulty: 1, keywords: ['整十数', '两位数加整十数'], concept: '掌握两位数加整十数的口算方法，十位加十位', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-81'] },
          { id: 'p1-83', name: '两位数减一位数不退位减法', difficulty: 1, keywords: ['不退位', '两位数减一位数'], concept: '掌握两位数减一位数（不退位）的口算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-84'] },
          { id: 'p1-84', name: '两位数减整十数', difficulty: 1, keywords: ['整十数', '两位数减整十数'], concept: '掌握两位数减整十数的口算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-83'] },
          { id: 'p1-85', name: '用加减法解决实际问题', difficulty: 2, keywords: ['解决问题', '应用题', '实际问题'], concept: '能根据题意选择正确的计算方法解决简单的实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p1-79', 'p1-80'] },
          { id: 'p1-86', name: '两位数加一位数进位加法', difficulty: 2, keywords: ['进位', '凑十', '个位满十'], concept: '掌握两位数加一位数（进位）的口算方法，个位满十向十位进一', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p1-81'] }
        ]
      },
      {
        id: 'ch1-15', title: '找规律', icon: '🔍',
        points: [
          { id: 'p1-87', name: '图形的变化规律', difficulty: 1, keywords: ['图形规律', '排列', '重复'], concept: '发现图形的排列规律，能按规律接着摆或画', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-88'] },
          { id: 'p1-88', name: '数字的变化规律', difficulty: 1, keywords: ['数字规律', '等差', '数列'], concept: '发现数字排列的规律，能按规律填数', questionTypes: ['填空', '选择'], relatedPoints: ['p1-87'] },
          { id: 'p1-89', name: '递增递减规律', difficulty: 2, keywords: ['递增', '递减', '等差数列'], concept: '发现数列中递增或递减的规律，理解每次增加或减少相同的数', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p1-88'] },
          { id: 'p1-90', name: '重复排列规律', difficulty: 1, keywords: ['重复', '循环', '周期'], concept: '发现事物按一定顺序重复排列的规律', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p1-87'] },
          { id: 'p1-91', name: '综合运用规律', difficulty: 2, keywords: ['综合', '推理', '创造规律'], concept: '能综合运用所学规律知识，进行推理和创造性地设计规律', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p1-87', 'p1-88'] },
          { id: 'p1-92', name: '生活中的规律', difficulty: 2, keywords: ['生活规律', '发现', '应用'], concept: '发现生活中存在的各种规律，体会数学与生活的密切联系', questionTypes: ['选择', '判断'], relatedPoints: ['p1-87', 'p1-88', 'p1-90'] }
        ]
      }
    ]
  },

  // ======================== 二年级 ========================
  '2': {
    title: '二年级数学',
    icon: '🔢',
    color: '#3b82f6',
    chapters: [
      // ===== 二年级上册 =====
      {
        id: 'ch2-1', title: '长度单位', icon: '📏',
        points: [
          { id: 'p2-1', name: '认识厘米', difficulty: 1, keywords: ['厘米', 'cm', '长度单位'], concept: '认识长度单位厘米，知道1厘米有多长，建立1厘米的长度观念', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-2'] },
          { id: 'p2-2', name: '认识米', difficulty: 1, keywords: ['米', 'm', '长度单位'], concept: '认识长度单位米，知道1米有多长，建立1米的长度观念', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-1'] },
          { id: 'p2-3', name: '厘米和米的关系', difficulty: 1, keywords: ['1米=100厘米', '进率', '换算'], concept: '掌握厘米和米之间的进率：1米=100厘米，能进行简单换算', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p2-1', 'p2-2'] },
          { id: 'p2-4', name: '用尺子量长度', difficulty: 1, keywords: ['量长度', '刻度', '起点'], concept: '学会用尺子正确量物体的长度，注意从0刻度开始量', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-1'] },
          { id: 'p2-5', name: '线段的认识', difficulty: 2, keywords: ['线段', '直的', '两个端点'], concept: '认识线段的特征：直的、有两个端点、可以量出长度', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p2-4'] },
          { id: 'p2-6', name: '选择合适的长度单位', difficulty: 2, keywords: ['估计', '选择单位', '实际应用'], concept: '根据实际情况选择合适的长度单位，培养估测能力', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-1', 'p2-2', 'p2-3'] }
        ]
      },
      {
        id: 'ch2-2', title: '100以内的加减法（二）', icon: '➕',
        points: [
          { id: 'p2-7', name: '两位数加两位数不进位', difficulty: 1, keywords: ['不进位', '笔算', '竖式'], concept: '掌握两位数加两位数（不进位）的笔算方法，理解相同数位对齐', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p2-8'] },
          { id: 'p2-8', name: '两位数加两位数进位', difficulty: 2, keywords: ['进位', '笔算', '竖式', '满十进一'], concept: '掌握两位数加两位数（进位）的笔算方法，个位满十向十位进一', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p2-7'] },
          { id: 'p2-9', name: '两位数减两位数不退位', difficulty: 1, keywords: ['不退位', '笔算', '竖式'], concept: '掌握两位数减两位数（不退位）的笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p2-10'] },
          { id: 'p2-10', name: '两位数减两位数退位', difficulty: 2, keywords: ['退位', '笔算', '竖式', '借一当十'], concept: '掌握两位数减两位数（退位）的笔算方法，个位不够减从十位借一', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p2-9'] },
          { id: 'p2-11', name: '连加连减和加减混合', difficulty: 2, keywords: ['连加', '连减', '加减混合', '笔算'], concept: '掌握连加、连减和加减混合运算的笔算方法和运算顺序', questionTypes: ['计算', '填空'], relatedPoints: ['p2-7', 'p2-8', 'p2-9', 'p2-10'] },
          { id: 'p2-12', name: '用加减法解决实际问题', difficulty: 2, keywords: ['解决问题', '应用题', '实际问题'], concept: '能根据题意列竖式计算，解决100以内的加减法实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p2-7', 'p2-8'] }
        ]
      },
      {
        id: 'ch2-3', title: '角的初步认识', icon: '📐',
        points: [
          { id: 'p2-13', name: '认识角', difficulty: 1, keywords: ['角', '顶点', '边'], concept: '初步认识角，知道角有一个顶点和两条边', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p2-14'] },
          { id: 'p2-14', name: '角的各部分名称', difficulty: 1, keywords: ['顶点', '边', '角的组成'], concept: '认识角的各部分名称：一个顶点、两条边', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-13'] },
          { id: 'p2-15', name: '画角', difficulty: 1, keywords: ['画角', '步骤', '方法'], concept: '学会用直尺画角：先画一个顶点，再从顶点出发画两条边', questionTypes: ['选择', '判断'], relatedPoints: ['p2-13', 'p2-14'] },
          { id: 'p2-16', name: '直角的认识', difficulty: 1, keywords: ['直角', '90度', '三角尺'], concept: '认识直角，会用三角尺判断和画直角', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p2-13'] },
          { id: 'p2-17', name: '锐角和钝角', difficulty: 2, keywords: ['锐角', '钝角', '比直角大', '比直角小'], concept: '认识锐角和钝角：比直角小的是锐角，比直角大的是钝角', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p2-16'] },
          { id: 'p2-18', name: '角的大小', difficulty: 2, keywords: ['张口大小', '角的比较', '活动角'], concept: '理解角的大小与边的长短无关，与两条边张开的大小有关', questionTypes: ['选择', '判断'], relatedPoints: ['p2-13', 'p2-16', 'p2-17'] }
        ]
      },
      {
        id: 'ch2-4', title: '表内乘法（一）', icon: '✖️',
        points: [
          { id: 'p2-19', name: '乘法的初步认识', difficulty: 1, keywords: ['乘法', '相同加数', '乘号'], concept: '理解乘法的含义：求几个相同加数的和可以用乘法计算', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-20'] },
          { id: 'p2-20', name: '乘法算式的读写', difficulty: 1, keywords: ['读法', '写法', '乘法算式'], concept: '学会乘法算式的读法和写法，认识乘号和乘法算式各部分名称', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p2-19'] },
          { id: 'p2-21', name: '2-6的乘法口诀', difficulty: 1, keywords: ['口诀', '乘法表', '背诵'], concept: '掌握2-6的乘法口诀，理解口诀的来源，能熟练背诵和运用', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p2-22'] },
          { id: 'p2-22', name: '乘法口诀的应用', difficulty: 1, keywords: ['口诀计算', '快速计算', '口算'], concept: '运用乘法口诀进行快速计算，提高口算速度', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p2-21'] },
          { id: 'p2-23', name: '乘加乘减', difficulty: 2, keywords: ['乘加', '乘减', '混合运算'], concept: '掌握乘加、乘减混合运算的计算方法和运算顺序', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p2-21', 'p2-22'] },
          { id: 'p2-24', name: '用乘法解决问题', difficulty: 2, keywords: ['解决问题', '应用题', '求几个几'], concept: '能根据题意判断是否用乘法，列出乘法算式解决问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p2-19', 'p2-21'] }
        ]
      },
      {
        id: 'ch2-5', title: '观察物体（一）', icon: '👀',
        points: [
          { id: 'p2-25', name: '从前面看', difficulty: 1, keywords: ['前面', '正面', '观察'], concept: '学会从前面（正面）观察物体，画出看到的形状', questionTypes: ['选择', '判断', '连线'], relatedPoints: ['p2-26'] },
          { id: 'p2-26', name: '从侧面看', difficulty: 1, keywords: ['侧面', '左面', '右面'], concept: '学会从侧面观察物体，能辨认从左面和右面看到的形状', questionTypes: ['选择', '判断', '连线'], relatedPoints: ['p2-27'] },
          { id: 'p2-27', name: '从上面看', difficulty: 1, keywords: ['上面', '俯视', '观察'], concept: '学会从上面（俯视）观察物体，画出看到的形状', questionTypes: ['选择', '判断', '连线'], relatedPoints: ['p2-25'] },
          { id: 'p2-28', name: '不同方向看到的不同形状', difficulty: 2, keywords: ['不同方向', '不同形状', '空间想象'], concept: '理解从不同方向观察同一物体，看到的形状可能不同', questionTypes: ['选择', '判断'], relatedPoints: ['p2-25', 'p2-26', 'p2-27'] },
          { id: 'p2-29', name: '根据描述判断物体形状', difficulty: 2, keywords: ['空间想象', '推理', '判断'], concept: '根据看到的形状描述，判断是从哪个方向观察到的', questionTypes: ['选择', '判断'], relatedPoints: ['p2-28'] },
          { id: 'p2-30', name: '发展空间观念', difficulty: 2, keywords: ['空间观念', '立体感', '想象'], concept: '通过观察活动，培养初步的空间观念和想象力', questionTypes: ['选择', '判断'], relatedPoints: ['p2-25', 'p2-26', 'p2-27', 'p2-28'] }
        ]
      },
      {
        id: 'ch2-6', title: '表内乘法（二）', icon: '✖️',
        points: [
          { id: 'p2-31', name: '7的乘法口诀', difficulty: 1, keywords: ['7的口诀', '乘法', '背诵'], concept: '掌握7的乘法口诀，理解口诀的含义并能熟练运用', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p2-32'] },
          { id: 'p2-32', name: '8的乘法口诀', difficulty: 1, keywords: ['8的口诀', '乘法', '背诵'], concept: '掌握8的乘法口诀，能正确快速地进行口算', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p2-33'] },
          { id: 'p2-33', name: '9的乘法口诀', difficulty: 1, keywords: ['9的口诀', '乘法', '规律'], concept: '掌握9的乘法口诀，发现9的口诀中积的规律', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p2-31', 'p2-32'] },
          { id: 'p2-34', name: '乘法口诀表', difficulty: 2, keywords: ['完整口诀表', '规律', '整理'], concept: '整理完整的乘法口诀表，发现口诀表中的规律', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p2-21', 'p2-31', 'p2-32', 'p2-33'] },
          { id: 'p2-35', name: '用乘法口诀解决问题', difficulty: 2, keywords: ['解决问题', '应用题', '乘法应用'], concept: '能运用7-9的乘法口诀解决简单的实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p2-31', 'p2-32', 'p2-33'] },
          { id: 'p2-36', name: '乘法和加法的混合问题', difficulty: 2, keywords: ['混合运算', '乘加', '乘减'], concept: '解决需要乘法和加减法混合运算的实际问题，培养综合应用能力', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p2-35'] }
        ]
      },
      // ===== 二年级下册 =====
      {
        id: 'ch2-7', title: '数据收集整理', icon: '📊',
        points: [
          { id: 'p2-37', name: '用调查法收集数据', difficulty: 1, keywords: ['调查', '收集', '数据'], concept: '学会用举手、投票等调查方法收集数据', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p2-38'] },
          { id: 'p2-38', name: '用"正"字记录数据', difficulty: 1, keywords: ['正字', '记录', '统计'], concept: '学会用"正"字记录数据，一个"正"字代表5', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-37'] },
          { id: 'p2-39', name: '填写统计表', difficulty: 1, keywords: ['统计表', '填写', '数据'], concept: '学会把收集到的数据填写到统计表中', questionTypes: ['填空', '选择'], relatedPoints: ['p2-37'] },
          { id: 'p2-40', name: '分析数据', difficulty: 2, keywords: ['分析', '比较', '最多最少'], concept: '能根据统计表中的数据进行分析和比较，回答问题', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-39'] },
          { id: 'p2-41', name: '根据数据做出判断', difficulty: 2, keywords: ['判断', '决策', '数据'], concept: '能根据数据做出简单的判断和预测', questionTypes: ['选择', '判断'], relatedPoints: ['p2-40'] },
          { id: 'p2-42', name: '统计在生活中的应用', difficulty: 2, keywords: ['生活应用', '统计', '实际问题'], concept: '体会统计在日常生活中的广泛应用，培养数据分析意识', questionTypes: ['选择', '判断'], relatedPoints: ['p2-37', 'p2-40'] }
        ]
      },
      {
        id: 'ch2-8', title: '表内除法（一）', icon: '➗',
        points: [
          { id: 'p2-43', name: '平均分', difficulty: 1, keywords: ['平均分', '等分', '每份'], concept: '理解平均分的含义：每份分得同样多叫平均分', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p2-44'] },
          { id: 'p2-44', name: '除法的初步认识', difficulty: 1, keywords: ['除法', '除号', '含义'], concept: '理解除法的含义：把一个数平均分成几份，求每份是多少', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-43'] },
          { id: 'p2-45', name: '除法算式的读写', difficulty: 1, keywords: ['读法', '写法', '除法算式'], concept: '学会除法算式的读法和写法，认识除号和各部分名称', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p2-44'] },
          { id: 'p2-46', name: '用2-6的口诀求商', difficulty: 1, keywords: ['求商', '口诀', '除法计算'], concept: '掌握用乘法口诀求商的方法，能快速算出除法的结果', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p2-44', 'p2-21'] },
          { id: 'p2-47', name: '乘除法的关系', difficulty: 2, keywords: ['互逆', '乘除关系', '联系'], concept: '理解乘法和除法的互逆关系，乘法口诀既能算乘法也能算除法', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-46'] },
          { id: 'p2-48', name: '用除法解决问题', difficulty: 2, keywords: ['解决问题', '应用题', '除法应用'], concept: '能根据题意判断用除法计算，解决简单的实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p2-43', 'p2-44'] }
        ]
      },
      {
        id: 'ch2-9', title: '图形的运动（一）', icon: '🔄',
        points: [
          { id: 'p2-49', name: '轴对称现象', difficulty: 1, keywords: ['轴对称', '对称', '对称轴'], concept: '认识轴对称现象，能判断一个图形是否是轴对称图形', questionTypes: ['选择', '判断', '连线'], relatedPoints: ['p2-50'] },
          { id: 'p2-50', name: '平移现象', difficulty: 1, keywords: ['平移', '移动', '方向'], concept: '认识平移现象，能判断图形的平移方向和距离', questionTypes: ['选择', '判断', '连线'], relatedPoints: ['p2-51'] },
          { id: 'p2-51', name: '旋转现象', difficulty: 1, keywords: ['旋转', '转动', '方向'], concept: '认识旋转现象，能判断图形的旋转方向', questionTypes: ['选择', '判断', '连线'], relatedPoints: ['p2-50'] },
          { id: 'p2-52', name: '轴对称图形的特征', difficulty: 2, keywords: ['对称轴', '两边完全重合', '折叠'], concept: '理解轴对称图形沿对称轴折叠后两边能完全重合', questionTypes: ['选择', '判断', '操作'], relatedPoints: ['p2-49'] },
          { id: 'p2-53', name: '区分平移和旋转', difficulty: 2, keywords: ['平移和旋转', '区别', '判断'], concept: '能正确区分平移和旋转两种运动方式', questionTypes: ['选择', '判断'], relatedPoints: ['p2-50', 'p2-51'] },
          { id: 'p2-54', name: '生活中的运动现象', difficulty: 2, keywords: ['生活现象', '运动', '分类'], concept: '能从生活中找到平移和旋转的实例，体会数学与生活的联系', questionTypes: ['选择', '判断'], relatedPoints: ['p2-49', 'p2-50', 'p2-51'] }
        ]
      },
      {
        id: 'ch2-10', title: '表内除法（二）', icon: '➗',
        points: [
          { id: 'p2-55', name: '用7-9的口诀求商', difficulty: 1, keywords: ['口诀求商', '除法', '7-9'], concept: '掌握用7-9的乘法口诀求商的方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p2-46'] },
          { id: 'p2-56', name: '除法的计算练习', difficulty: 1, keywords: ['计算练习', '口算', '熟练'], concept: '通过练习提高用口诀求商的速度和正确率', questionTypes: ['计算', '填空'], relatedPoints: ['p2-55'] },
          { id: 'p2-57', name: '有关0的除法', difficulty: 1, keywords: ['0除以任何数', '0', '除法'], concept: '理解0除以任何不为0的数都等于0', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-55'] },
          { id: 'p2-58', name: '乘除混合问题', difficulty: 2, keywords: ['乘除混合', '两步计算', '运算顺序'], concept: '解决需要乘除混合运算的两步计算问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p2-55', 'p2-56'] },
          { id: 'p2-59', name: '用除法解决多步问题', difficulty: 2, keywords: ['多步问题', '综合应用', '逆向思维'], concept: '运用除法知识解决需要多步思考的实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p2-48', 'p2-58'] },
          { id: 'p2-60', name: '乘除法的综合应用', difficulty: 2, keywords: ['综合应用', '乘除关系', '实际问题'], concept: '综合运用乘除法知识解决稍复杂的实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p2-55', 'p2-58', 'p2-59'] }
        ]
      },
      {
        id: 'ch2-11', title: '混合运算', icon: '🔢',
        points: [
          { id: 'p2-61', name: '同级运算', difficulty: 1, keywords: ['同级', '从左到右', '顺序'], concept: '掌握只有加减法或只有乘除法的混合运算，从左到右依次计算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p2-62'] },
          { id: 'p2-62', name: '两级运算', difficulty: 2, keywords: ['两级', '先乘除后加减', '运算顺序'], concept: '掌握既有加减又有乘除的混合运算，先算乘除后算加减', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p2-61'] },
          { id: 'p2-63', name: '有括号的混合运算', difficulty: 2, keywords: ['括号', '小括号', '优先计算'], concept: '掌握有小括号的混合运算，先算括号里面的', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p2-62'] },
          { id: 'p2-64', name: '混合运算的运算顺序', difficulty: 2, keywords: ['运算顺序', '规则', '综合'], concept: '总结混合运算的运算顺序：先乘除后加减，有括号先算括号', questionTypes: ['选择', '判断', '计算'], relatedPoints: ['p2-61', 'p2-62', 'p2-63'] },
          { id: 'p2-65', name: '列综合算式', difficulty: 2, keywords: ['综合算式', '列式', '两步计算'], concept: '能把两步计算的分步算式写成综合算式', questionTypes: ['填空', '选择', '解答'], relatedPoints: ['p2-64'] },
          { id: 'p2-66', name: '混合运算解决问题', difficulty: 2, keywords: ['解决问题', '综合应用', '实际问题'], concept: '运用混合运算的知识解决两步计算的实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p2-64', 'p2-65'] }
        ]
      },
      {
        id: 'ch2-12', title: '有余数的除法', icon: '➗',
        points: [
          { id: 'p2-67', name: '有余数除法的意义', difficulty: 1, keywords: ['余数', '剩余', '不够分'], concept: '理解有余数除法的意义：平均分后还有剩余，剩余的数就是余数', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-68'] },
          { id: 'p2-68', name: '有余数除法的算式', difficulty: 1, keywords: ['算式', '读法', '写法'], concept: '学会有余数除法算式的读法和写法', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p2-67'] },
          { id: 'p2-69', name: '余数和除数的关系', difficulty: 2, keywords: ['余数小于除数', '规律', '检验'], concept: '理解余数一定比除数小的规律，会用这个规律检验计算结果', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-67'] },
          { id: 'p2-70', name: '有余数除法的计算', difficulty: 2, keywords: ['试商', '口诀', '计算'], concept: '掌握有余数除法的计算方法：想乘法口诀，找到最接近且小于被除数的积', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p2-69'] },
          { id: 'p2-71', name: '用有余数除法解决问题', difficulty: 2, keywords: ['进一法', '去尾法', '实际问题'], concept: '解决有余数除法的实际问题，理解"进一法"和"去尾法"的不同用法', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p2-70'] },
          { id: 'p2-72', name: '周期问题', difficulty: 3, keywords: ['周期', '规律', '重复'], concept: '运用有余数除法解决周期性重复排列的问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p2-70', 'p2-71'] }
        ]
      },
      {
        id: 'ch2-13', title: '万以内数的认识', icon: '💯',
        points: [
          { id: 'p2-73', name: '认识计数单位', difficulty: 1, keywords: ['个', '十', '百', '千', '万'], concept: '认识个、十、百、千、万等计数单位，理解相邻计数单位之间的进率是10', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-74'] },
          { id: 'p2-74', name: '万以内数的读写', difficulty: 1, keywords: ['读数', '写数', '万以内'], concept: '掌握万以内数的读法和写法，理解数位顺序表', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p2-73'] },
          { id: 'p2-75', name: '万以内数的组成', difficulty: 1, keywords: ['组成', '数位', '几个千几个百'], concept: '理解万以内数的组成，知道每个数位上的数表示什么', questionTypes: ['填空', '选择'], relatedPoints: ['p2-74'] },
          { id: 'p2-76', name: '万以内数的大小比较', difficulty: 1, keywords: ['大小比较', '位数', '最高位'], concept: '掌握万以内数的大小比较方法，能排列大小', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-74'] },
          { id: 'p2-77', name: '近似数', difficulty: 2, keywords: ['近似数', '估计', '大约'], concept: '理解近似数的含义，能用"大约""接近"等词语描述近似数', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-74'] },
          { id: 'p2-78', name: '整百整千数的加减法', difficulty: 2, keywords: ['整百', '整千', '加减法'], concept: '掌握整百、整千数的加减法计算方法，能正确口算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p2-74'] }
        ]
      },
      {
        id: 'ch2-14', title: '克和千克', icon: '⚖️',
        points: [
          { id: 'p2-79', name: '认识克', difficulty: 1, keywords: ['克', 'g', '轻'], concept: '认识质量单位克，知道1克有多重，建立1克的质量观念', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-80'] },
          { id: 'p2-80', name: '认识千克', difficulty: 1, keywords: ['千克', 'kg', '重'], concept: '认识质量单位千克，知道1千克有多重，建立1千克的质量观念', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-79'] },
          { id: 'p2-81', name: '克和千克的关系', difficulty: 1, keywords: ['1千克=1000克', '进率', '换算'], concept: '掌握克和千克之间的进率：1千克=1000克', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p2-79', 'p2-80'] },
          { id: 'p2-82', name: '选择合适的质量单位', difficulty: 2, keywords: ['估计', '选择单位', '实际应用'], concept: '根据实际情况选择合适的质量单位，培养估测能力', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-79', 'p2-80'] },
          { id: 'p2-83', name: '用秤称量', difficulty: 1, keywords: ['秤', '称量', '读数'], concept: '学会使用天平和台秤称量物体的质量，能正确读数', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p2-79', 'p2-80'] },
          { id: 'p2-84', name: '质量单位在生活中的应用', difficulty: 2, keywords: ['生活应用', '购物', '实际问题'], concept: '能运用质量知识解决购物称重等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p2-79', 'p2-80', 'p2-81'] }
        ]
      }
    ]
  },
// ======================== 三年级 ========================
  '3': {
    title: '三年级数学',
    icon: '🔢',
    color: '#f59e0b',
    chapters: [
      // ===== 三年级上册 =====
      {
        id: 'ch3-1', title: '时分秒', icon: '🕐',
        points: [
          { id: 'p3-1', name: '认识秒', difficulty: 1, keywords: ['秒', '时间单位', '1秒'], concept: '认识时间单位秒，知道1秒有多长，建立1秒的时间观念', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-2'] },
          { id: 'p3-2', name: '分和秒的关系', difficulty: 1, keywords: ['1分=60秒', '进率', '换算'], concept: '掌握分和秒之间的进率：1分=60秒，能进行简单换算', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p3-1'] },
          { id: 'p3-3', name: '时和分的关系', difficulty: 1, keywords: ['1时=60分', '进率', '换算'], concept: '掌握时和分之间的进率：1时=60分，能进行简单换算', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p3-4'] },
          { id: 'p3-4', name: '认识时刻', difficulty: 1, keywords: ['几时几分', '钟表', '读时间'], concept: '学会看钟表上的时刻，能读出几时几分', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p3-3'] },
          { id: 'p3-5', name: '计算经过时间', difficulty: 2, keywords: ['经过时间', '开始', '结束', '计算'], concept: '学会计算从开始到结束经过了多少时间', questionTypes: ['填空', '选择', '解答'], relatedPoints: ['p3-2', 'p3-3'] },
          { id: 'p3-6', name: '时间在生活中的应用', difficulty: 2, keywords: ['作息时间', '合理安排', '珍惜时间'], concept: '能合理安排作息时间，体会珍惜时间的重要性', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-5'] }
        ]
      },
      {
        id: 'ch3-2', title: '万以内的加减法（一）', icon: '➕',
        points: [
          { id: 'p3-7', name: '两位数加两位数口算', difficulty: 1, keywords: ['口算', '两位数加', '快速'], concept: '掌握两位数加两位数的口算方法，能快速口算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-8'] },
          { id: 'p3-8', name: '两位数减两位数口算', difficulty: 1, keywords: ['口算', '两位数减', '快速'], concept: '掌握两位数减两位数的口算方法，能快速口算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-7'] },
          { id: 'p3-9', name: '几百几十加减几百几十', difficulty: 1, keywords: ['几百几十', '加减', '笔算'], concept: '掌握几百几十加减几百几十的笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-10'] },
          { id: 'p3-10', name: '三位数加三位数不进位', difficulty: 1, keywords: ['三位数', '不进位', '笔算'], concept: '掌握三位数加三位数（不进位）的笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-11'] },
          { id: 'p3-11', name: '三位数加三位数进位', difficulty: 2, keywords: ['进位', '三位数', '笔算'], concept: '掌握三位数加三位数（进位）的笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-10'] },
          { id: 'p3-12', name: '用加减法解决问题', difficulty: 2, keywords: ['解决问题', '估算', '实际问题'], concept: '能运用估算解决实际问题，判断结果是否合理', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-7', 'p3-8'] }
        ]
      },
      {
        id: 'ch3-3', title: '测量', icon: '📏',
        points: [
          { id: 'p3-13', name: '认识毫米', difficulty: 1, keywords: ['毫米', 'mm', '长度单位'], concept: '认识长度单位毫米，知道1毫米有多长，体会毫米的实际意义', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-14'] },
          { id: 'p3-14', name: '认识分米', difficulty: 1, keywords: ['分米', 'dm', '长度单位'], concept: '认识长度单位分米，知道1分米有多长', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-13'] },
          { id: 'p3-15', name: '认识千米', difficulty: 1, keywords: ['千米', 'km', '公里'], concept: '认识长度单位千米，知道千米用于表示较长的距离', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-16'] },
          { id: 'p3-16', name: '长度单位间的进率', difficulty: 2, keywords: ['进率', '换算', '单位关系'], concept: '掌握毫米、厘米、分米、米、千米之间的进率和换算方法', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p3-13', 'p3-14', 'p3-15'] },
          { id: 'p3-17', name: '认识吨', difficulty: 1, keywords: ['吨', '质量', '重'], concept: '认识质量单位吨，知道吨用于表示很重的物体', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-18'] },
          { id: 'p3-18', name: '质量单位间的进率', difficulty: 2, keywords: ['千克', '吨', '1吨=1000千克'], concept: '掌握克、千克、吨之间的进率，能进行单位换算', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p3-17'] }
        ]
      },
      {
        id: 'ch3-4', title: '万以内的加减法（二）', icon: '➕',
        points: [
          { id: 'p3-19', name: '三位数加三位数连续进位', difficulty: 2, keywords: ['连续进位', '三位数加', '笔算'], concept: '掌握三位数加三位数连续进位的笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-20'] },
          { id: 'p3-20', name: '三位数减三位数不退位', difficulty: 1, keywords: ['不退位', '三位数减', '笔算'], concept: '掌握三位数减三位数（不退位）的笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-21'] },
          { id: 'p3-21', name: '三位数减三位数退位', difficulty: 2, keywords: ['退位', '三位数减', '笔算'], concept: '掌握三位数减三位数（退位）的笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-20'] },
          { id: 'p3-22', name: '三位数减三位数连续退位', difficulty: 3, keywords: ['连续退位', '被减数中间有0', '笔算'], concept: '掌握连续退位减法，特别是被减数中间有0的情况', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-21'] },
          { id: 'p3-23', name: '加减法的验算', difficulty: 2, keywords: ['验算', '互逆', '检查'], concept: '学会用加法验算减法、用减法验算加法，养成验算习惯', questionTypes: ['选择', '判断', '计算'], relatedPoints: ['p3-19', 'p3-21'] },
          { id: 'p3-24', name: '解决问题', difficulty: 2, keywords: ['解决问题', '策略', '实际问题'], concept: '能运用万以内加减法解决购物、旅游等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-19', 'p3-21'] }
        ]
      },
      {
        id: 'ch3-5', title: '倍的认识', icon: '✖️',
        points: [
          { id: 'p3-25', name: '倍的含义', difficulty: 1, keywords: ['倍', '几个', '比较'], concept: '理解"倍"的含义：一个数里面有几个另一个数就是几倍', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-26'] },
          { id: 'p3-26', name: '求一个数是另一个数的几倍', difficulty: 1, keywords: ['是几倍', '除法', '比较'], concept: '用除法求一个数是另一个数的几倍', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-25'] },
          { id: 'p3-27', name: '求一个数的几倍是多少', difficulty: 2, keywords: ['几倍', '乘法', '求倍数'], concept: '用乘法求一个数的几倍是多少', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-25'] },
          { id: 'p3-28', name: '倍的画图表示', difficulty: 2, keywords: ['画图', '线段图', '表示'], concept: '能用画图（如线段图）表示倍数关系', questionTypes: ['选择', '判断', '操作'], relatedPoints: ['p3-25', 'p3-27'] },
          { id: 'p3-29', name: '倍的综合应用', difficulty: 2, keywords: ['综合', '两步', '逆向'], concept: '运用倍的知识解决需要两步思考的综合问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-26', 'p3-27'] },
          { id: 'p3-30', name: '倍在生活中的应用', difficulty: 2, keywords: ['生活应用', '比较', '实际问题'], concept: '能用倍的知识解决生活中比较数量关系的问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-25', 'p3-29'] }
        ]
      },
      {
        id: 'ch3-6', title: '多位数乘一位数', icon: '✖️',
        points: [
          { id: 'p3-31', name: '口算乘法', difficulty: 1, keywords: ['口算', '整十整百', '乘一位数'], concept: '掌握整十、整百数乘一位数的口算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-32'] },
          { id: 'p3-32', name: '笔算乘法（不进位）', difficulty: 1, keywords: ['不进位', '笔算', '竖式'], concept: '掌握多位数乘一位数（不进位）的笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-33'] },
          { id: 'p3-33', name: '笔算乘法（进位）', difficulty: 2, keywords: ['进位', '笔算', '满十进一'], concept: '掌握多位数乘一位数（进位）的笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-32'] },
          { id: 'p3-34', name: '笔算乘法（连续进位）', difficulty: 2, keywords: ['连续进位', '笔算', '多位数'], concept: '掌握连续进位的乘法笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-33'] },
          { id: 'p3-35', name: '有关0的乘法', difficulty: 1, keywords: ['0乘任何数', '0', '乘法'], concept: '理解0乘任何数都等于0', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-31'] },
          { id: 'p3-36', name: '用乘法解决问题', difficulty: 2, keywords: ['解决问题', '购物', '实际问题'], concept: '能运用多位数乘一位数的知识解决实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-31', 'p3-33'] }
        ]
      },
      {
        id: 'ch3-7', title: '长方形和正方形', icon: '🔷',
        points: [
          { id: 'p3-37', name: '认识长方形的特征', difficulty: 1, keywords: ['长方形', '对边相等', '四个直角'], concept: '掌握长方形的特征：对边相等，四个角都是直角', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p3-38'] },
          { id: 'p3-38', name: '认识正方形的特征', difficulty: 1, keywords: ['正方形', '四边相等', '四个直角'], concept: '掌握正方形的特征：四条边都相等，四个角都是直角', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p3-37'] },
          { id: 'p3-39', name: '周长的含义', difficulty: 1, keywords: ['周长', '封闭图形', '边线'], concept: '理解周长的含义：封闭图形一周的长度就是它的周长', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p3-40'] },
          { id: 'p3-40', name: '长方形的周长', difficulty: 2, keywords: ['周长公式', '长方形周长', '(长+宽)×2'], concept: '掌握长方形周长的计算方法：周长=(长+宽)×2', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-37', 'p3-39'] },
          { id: 'p3-41', name: '正方形的周长', difficulty: 2, keywords: ['周长公式', '正方形周长', '边长×4'], concept: '掌握正方形周长的计算方法：周长=边长×4', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-38', 'p3-39'] },
          { id: 'p3-42', name: '周长的实际应用', difficulty: 2, keywords: ['实际应用', '围栏', '花边'], concept: '运用周长知识解决围栏、花边等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-40', 'p3-41'] }
        ]
      },
      {
        id: 'ch3-8', title: '分数的初步认识', icon: '🔢',
        points: [
          { id: 'p3-43', name: '认识几分之一', difficulty: 1, keywords: ['几分之一', '平均分', '分子分母'], concept: '理解把一个物体平均分成几份，每份就是它的几分之一', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-44'] },
          { id: 'p3-44', name: '认识几分之几', difficulty: 1, keywords: ['几分之几', '分数', '读写'], concept: '理解分数的含义，认识分子、分母和分数线', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-43'] },
          { id: 'p3-45', name: '分数的读写', difficulty: 1, keywords: ['读法', '写法', '分数表示'], concept: '学会分数的正确读法和写法', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p3-44'] },
          { id: 'p3-46', name: '同分母分数的大小比较', difficulty: 1, keywords: ['大小比较', '同分母', '分子大分数大'], concept: '掌握同分母分数比较大小的方法：分子大的分数大', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-44'] },
          { id: 'p3-47', name: '简单的分数加减法', difficulty: 2, keywords: ['分数加法', '分数减法', '同分母'], concept: '掌握同分母分数的简单加减法计算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-44', 'p3-46'] },
          { id: 'p3-48', name: '分数在生活中的应用', difficulty: 2, keywords: ['生活应用', '折纸', '分蛋糕'], concept: '能在生活情境中理解分数的含义，体会分数与生活的联系', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-43', 'p3-44'] }
        ]
      },
      {
        id: 'ch3-9', title: '数学广角——集合', icon: '🎯',
        points: [
          { id: 'p3-49', name: '集合的概念', difficulty: 2, keywords: ['集合', '韦恩图', '圈'], concept: '初步认识集合的概念，能用韦恩图表示集合', questionTypes: ['选择', '判断', '画图'], relatedPoints: ['p3-50'] },
          { id: 'p3-50', name: '交集', difficulty: 2, keywords: ['交集', '公共部分', '重叠'], concept: '理解交集的含义：两个集合公共的部分', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-49'] },
          { id: 'p3-51', name: '并集', difficulty: 2, keywords: ['并集', '合并', '总和'], concept: '理解并集的含义：把两个集合合并在一起', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-49'] },
          { id: 'p3-52', name: '重叠问题', difficulty: 3, keywords: ['重叠', '容斥原理', '重复'], concept: '解决重叠问题：总数=A+B-公共部分', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-50'] },
          { id: 'p3-53', name: '集合图的阅读', difficulty: 2, keywords: ['韦恩图', '读图', '分析'], concept: '能看懂韦恩图中的信息并进行分析', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-49', 'p3-50'] },
          { id: 'p3-54', name: '用集合方法解决问题', difficulty: 3, keywords: ['解决问题', '实际问题', '分类'], concept: '运用集合的思想解决分类和重叠的实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-50', 'p3-52'] }
        ]
      },
      // ===== 三年级下册 =====
      {
        id: 'ch3-10', title: '位置与方向（一）', icon: '🧭',
        points: [
          { id: 'p3-55', name: '认识东南西北', difficulty: 1, keywords: ['东', '南', '西', '北', '方向'], concept: '认识东、南、西、北四个基本方向，会辨认方向', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-56'] },
          { id: 'p3-56', name: '认识东南、东北、西南、西北', difficulty: 1, keywords: ['四个偏方向', '八方向'], concept: '在四个基本方向的基础上，认识东南、东北、西南、西北四个偏方向', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-55'] },
          { id: 'p3-57', name: '看简单的路线图', difficulty: 1, keywords: ['路线图', '方向', '行走路线'], concept: '能看懂简单的路线图，描述行走的方向和路线', questionTypes: ['选择', '填空'], relatedPoints: ['p3-55', 'p3-56'] },
          { id: 'p3-58', name: '用方向描述位置', difficulty: 2, keywords: ['描述位置', '方向', '距离'], concept: '能用方向和距离准确描述物体的位置', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-55', 'p3-56'] },
          { id: 'p3-59', name: '地图上的方向', difficulty: 2, keywords: ['地图', '上北下南', '方向标'], concept: '掌握地图上"上北下南、左西右东"的方向规则', questionTypes: ['选择', '判断'], relatedPoints: ['p3-55'] },
          { id: 'p3-60', name: '方向在生活中的应用', difficulty: 2, keywords: ['生活应用', '指南针', '辨方向'], concept: '能在生活中运用方向知识辨别方向，认识指南针', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p3-55', 'p3-56'] }
        ]
      },
      {
        id: 'ch3-11', title: '除数是一位数的除法', icon: '➗',
        points: [
          { id: 'p3-61', name: '口算除法', difficulty: 1, keywords: ['口算', '整十整百', '除以一位数'], concept: '掌握整十、整百数除以一位数的口算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-62'] },
          { id: 'p3-62', name: '笔算除法（首位能整除）', difficulty: 1, keywords: ['笔算', '竖式', '首位整除'], concept: '掌握除数是一位数、首位能整除的笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-63'] },
          { id: 'p3-63', name: '笔算除法（首位不够除）', difficulty: 2, keywords: ['首位不够', '试商', '笔算'], concept: '掌握首位不够除时的试商方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-62'] },
          { id: 'p3-64', name: '笔算除法（有余数）', difficulty: 2, keywords: ['有余数', '验算', '笔算'], concept: '掌握有余数的除法笔算，学会验算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-62', 'p3-63'] },
          { id: 'p3-65', name: '商中间或末尾有0', difficulty: 3, keywords: ['商有0', '占位', '不够商1'], concept: '掌握商中间或末尾有0的除法计算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-62', 'p3-63'] },
          { id: 'p3-66', name: '用除法解决问题', difficulty: 2, keywords: ['解决问题', '租船', '实际问题'], concept: '运用除法知识解决租船、乘车等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-62', 'p3-63'] }
        ]
      },
      {
        id: 'ch3-12', title: '复式统计表', icon: '📊',
        points: [
          { id: 'p3-67', name: '认识复式统计表', difficulty: 1, keywords: ['复式统计表', '合并', '对比'], concept: '认识复式统计表的结构，理解复式统计表的优点', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p3-68'] },
          { id: 'p3-68', name: '填写复式统计表', difficulty: 1, keywords: ['填写', '数据', '整理'], concept: '能根据数据正确填写复式统计表', questionTypes: ['填空', '选择'], relatedPoints: ['p3-67'] },
          { id: 'p3-69', name: '分析复式统计表', difficulty: 2, keywords: ['分析', '比较', '回答问题'], concept: '能根据复式统计表中的数据进行分析和比较，回答问题', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-67', 'p3-68'] },
          { id: 'p3-70', name: '单式统计表与复式统计表的比较', difficulty: 2, keywords: ['单式', '复式', '优缺点'], concept: '理解复式统计表比单式统计表信息更丰富、便于比较', questionTypes: ['选择', '判断'], relatedPoints: ['p3-67'] },
          { id: 'p3-71', name: '根据数据提出建议', difficulty: 2, keywords: ['建议', '决策', '数据'], concept: '能根据统计表中的数据提出合理的建议', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-69'] },
          { id: 'p3-72', name: '统计在生活中的应用', difficulty: 2, keywords: ['生活应用', '调查', '统计'], concept: '体会统计在生活中的广泛应用，培养数据分析意识', questionTypes: ['选择', '判断'], relatedPoints: ['p3-67', 'p3-69'] }
        ]
      },
      {
        id: 'ch3-13', title: '两位数乘两位数', icon: '✖️',
        points: [
          { id: 'p3-73', name: '口算乘法', difficulty: 1, keywords: ['口算', '两位数乘整十', '快速'], concept: '掌握两位数乘整十数的口算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-74'] },
          { id: 'p3-74', name: '笔算乘法（不进位）', difficulty: 1, keywords: ['不进位', '竖式', '笔算'], concept: '掌握两位数乘两位数（不进位）的笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-75'] },
          { id: 'p3-75', name: '笔算乘法（进位）', difficulty: 2, keywords: ['进位', '竖式', '笔算'], concept: '掌握两位数乘两位数（进位）的笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-74'] },
          { id: 'p3-76', name: '笔算乘法的计算步骤', difficulty: 2, keywords: ['步骤', '分步', '积的含义'], concept: '理解笔算乘法的计算步骤和每步积的含义', questionTypes: ['选择', '判断', '计算'], relatedPoints: ['p3-74', 'p3-75'] },
          { id: 'p3-77', name: '估算', difficulty: 2, keywords: ['估算', '大约', '近似值'], concept: '学会用估算的方法判断计算结果是否合理', questionTypes: ['选择', '填空', '计算'], relatedPoints: ['p3-74', 'p3-75'] },
          { id: 'p3-78', name: '用乘法解决问题', difficulty: 2, keywords: ['解决问题', '购物', '面积'], concept: '运用两位数乘两位数解决购物、面积等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-74', 'p3-75'] }
        ]
      },
      {
        id: 'ch3-14', title: '面积', icon: '📐',
        points: [
          { id: 'p3-79', name: '面积的含义', difficulty: 1, keywords: ['面积', '表面', '大小'], concept: '理解面积的含义：物体表面或封闭图形的大小就是面积', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p3-80'] },
          { id: 'p3-80', name: '面积单位', difficulty: 1, keywords: ['平方厘米', '平方分米', '平方米'], concept: '认识面积单位：平方厘米、平方分米、平方米', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-79'] },
          { id: 'p3-81', name: '面积单位间的进率', difficulty: 2, keywords: ['进率', '换算', '1平方分米=100平方厘米'], concept: '掌握面积单位之间的进率，能进行单位换算', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p3-80'] },
          { id: 'p3-82', name: '长方形的面积', difficulty: 2, keywords: ['面积公式', '长×宽'], concept: '掌握长方形面积的计算方法：面积=长×宽', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-79', 'p3-83'] },
          { id: 'p3-83', name: '正方形的面积', difficulty: 2, keywords: ['面积公式', '边长×边长'], concept: '掌握正方形面积的计算方法：面积=边长×边长', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-82'] },
          { id: 'p3-84', name: '面积的实际应用', difficulty: 2, keywords: ['实际应用', '铺地砖', '粉刷'], concept: '运用面积知识解决铺地砖、粉刷墙壁等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-82', 'p3-83'] }
        ]
      },
      {
        id: 'ch3-15', title: '年月日', icon: '📅',
        points: [
          { id: 'p3-85', name: '认识年、月、日', difficulty: 1, keywords: ['年', '月', '日', '大月小月'], concept: '认识年、月、日的时间单位，知道一年有12个月', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-86'] },
          { id: 'p3-86', name: '大月和小月', difficulty: 1, keywords: ['大月', '小月', '31天', '30天'], concept: '知道哪些月是大月（31天），哪些月是小月（30天）', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-85'] },
          { id: 'p3-87', name: '平年和闰年', difficulty: 2, keywords: ['平年', '闰年', '2月', '判断方法'], concept: '理解平年和闰年的区别，掌握判断平年闰年的方法', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-85'] },
          { id: 'p3-88', name: '24时计时法', difficulty: 2, keywords: ['24时', '普通计时法', '转换'], concept: '认识24时计时法，能进行普通计时法和24时计时法的转换', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-89'] },
          { id: 'p3-89', name: '计算经过的时间', difficulty: 2, keywords: ['经过时间', '开始', '结束'], concept: '能计算从开始到结束经过了多少时间', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-88'] },
          { id: 'p3-90', name: '年月日在生活中的应用', difficulty: 2, keywords: ['生活应用', '日历', '时间规划'], concept: '能运用年月日知识看日历、计算日期等', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-85', 'p3-86', 'p3-87'] }
        ]
      },
      {
        id: 'ch3-16', title: '小数的初步认识', icon: '🔢',
        points: [
          { id: 'p3-91', name: '认识小数', difficulty: 1, keywords: ['小数', '小数点', '整数部分', '小数部分'], concept: '认识小数的结构：整数部分、小数点、小数部分', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-92'] },
          { id: 'p3-92', name: '一位小数的含义', difficulty: 1, keywords: ['十分之几', '一位小数', '分数关系'], concept: '理解一位小数与十分之几分数的关系', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-91', 'p3-44'] },
          { id: 'p3-93', name: '小数的读写', difficulty: 1, keywords: ['读法', '写法', '小数点'], concept: '学会小数的正确读法和写法', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p3-91'] },
          { id: 'p3-94', name: '小数的大小比较', difficulty: 2, keywords: ['大小比较', '整数部分', '小数部分'], concept: '掌握小数大小比较的方法：先比整数部分，再比小数部分', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p3-91'] },
          { id: 'p3-95', name: '简单的小数加减法', difficulty: 2, keywords: ['小数加法', '小数减法', '对齐小数点'], concept: '掌握简单小数加减法的计算方法：小数点对齐', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p3-91'] },
          { id: 'p3-96', name: '小数在生活中的应用', difficulty: 2, keywords: ['价格', '身高', '测量'], concept: '能在价格、身高等生活情境中认识和运用小数', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-91', 'p3-92'] }
        ]
      },
      {
        id: 'ch3-17', title: '数学广角——搭配（二）', icon: '🎯',
        points: [
          { id: 'p3-97', name: '排列问题', difficulty: 2, keywords: ['排列', '顺序', '有序思考'], concept: '解决排列问题，学会用有序的方法找出所有排列情况', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-98'] },
          { id: 'p3-98', name: '组合问题', difficulty: 2, keywords: ['组合', '搭配', '不考虑顺序'], concept: '解决组合问题，理解组合与排列的区别', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-97'] },
          { id: 'p3-99', name: '用列表法解决问题', difficulty: 2, keywords: ['列表', '有序', '不遗漏'], concept: '学会用列表法有序地找出所有可能的情况', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-97', 'p3-98'] },
          { id: 'p3-100', name: '用图示法解决问题', difficulty: 2, keywords: ['图示', '连线', '画图'], concept: '学会用连线、画图等方法分析搭配问题', questionTypes: ['选择', '填空', '操作'], relatedPoints: ['p3-99'] },
          { id: 'p3-101', name: '搭配在生活中的应用', difficulty: 2, keywords: ['穿衣搭配', '路线选择', '实际问题'], concept: '运用搭配知识解决穿衣、路线等生活实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p3-97', 'p3-98'] },
          { id: 'p3-102', name: '有序思考的方法', difficulty: 3, keywords: ['有序', '不重复', '不遗漏'], concept: '培养有序思考的习惯，做到不重复、不遗漏', questionTypes: ['选择', '判断', '解答'], relatedPoints: ['p3-97', 'p3-98', 'p3-99'] }
        ]
      }
    ]
  },

  // ======================== 四年级 ========================
  '4': {
    title: '四年级数学',
    icon: '🔢',
    color: '#ef4444',
    chapters: [
      // ===== 四年级上册 =====
      {
        id: 'ch4-1', title: '大数的认识', icon: '🔢',
        points: [
          { id: 'p4-1', name: '亿以内数的认识', difficulty: 1, keywords: ['亿以内', '数位', '计数单位'], concept: '认识亿以内的数，掌握数位顺序表和计数单位', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-2'] },
          { id: 'p4-2', name: '亿以内数的读写', difficulty: 1, keywords: ['读数', '写数', '分级'], concept: '掌握亿以内数的读法和写法，学会分级读写', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p4-1'] },
          { id: 'p4-3', name: '亿以内数的大小比较', difficulty: 1, keywords: ['大小比较', '位数', '最高位'], concept: '掌握亿以内数的大小比较方法', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-2'] },
          { id: 'p4-4', name: '亿以内数的改写', difficulty: 2, keywords: ['改写', '万', '省略尾数'], concept: '学会将整万数改写成用"万"作单位的数', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p4-2'] },
          { id: 'p4-5', name: '数的产生和十进制计数法', difficulty: 2, keywords: ['数的产生', '十进制', '进率'], concept: '了解数的产生历史，理解十进制计数法的原理', questionTypes: ['选择', '判断'], relatedPoints: ['p4-1'] },
          { id: 'p4-6', name: '亿以上数的认识', difficulty: 2, keywords: ['亿以上', '读写', '改写'], concept: '认识亿以上的数，掌握读写和改写方法', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p4-1', 'p4-2'] }
        ]
      },
      {
        id: 'ch4-2', title: '公顷和平方千米', icon: '📐',
        points: [
          { id: 'p4-7', name: '认识公顷', difficulty: 1, keywords: ['公顷', '面积单位', '1公顷'], concept: '认识面积单位公顷，知道1公顷有多大', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-8'] },
          { id: 'p4-8', name: '认识平方千米', difficulty: 1, keywords: ['平方千米', '面积单位', '大面积'], concept: '认识面积单位平方千米，知道平方千米用于表示很大的面积', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-7'] },
          { id: 'p4-9', name: '公顷和平方米的关系', difficulty: 2, keywords: ['1公顷=10000平方米', '进率', '换算'], concept: '掌握公顷和平方米之间的进率：1公顷=10000平方米', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p4-7'] },
          { id: 'p4-10', name: '平方千米和公顷的关系', difficulty: 2, keywords: ['1平方千米=100公顷', '进率', '换算'], concept: '掌握平方千米和公顷之间的进率：1平方千米=100公顷', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p4-8', 'p4-9'] },
          { id: 'p4-11', name: '选择合适的面积单位', difficulty: 2, keywords: ['估计', '选择单位', '实际应用'], concept: '根据实际情况选择合适的面积单位', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-7', 'p4-8'] },
          { id: 'p4-12', name: '面积单位在生活中的应用', difficulty: 2, keywords: ['土地面积', '城市面积', '实际问题'], concept: '运用面积单位知识解决土地测量等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-7', 'p4-8', 'p4-11'] }
        ]
      },
      {
        id: 'ch4-3', title: '角的度量', icon: '📐',
        points: [
          { id: 'p4-13', name: '线段、直线和射线', difficulty: 1, keywords: ['线段', '直线', '射线'], concept: '区分线段、直线和射线的特征', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p4-14'] },
          { id: 'p4-14', name: '角的度量单位', difficulty: 1, keywords: ['度', '°', '量角器'], concept: '认识角的度量单位"度"，学会用量角器量角', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-15'] },
          { id: 'p4-15', name: '角的分类', difficulty: 2, keywords: ['锐角', '直角', '钝角', '平角', '周角'], concept: '掌握角的分类：锐角、直角、钝角、平角、周角', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-14'] },
          { id: 'p4-16', name: '画指定度数的角', difficulty: 2, keywords: ['画角', '量角器', '步骤'], concept: '学会用量角器画指定度数的角', questionTypes: ['选择', '判断', '操作'], relatedPoints: ['p4-14'] },
          { id: 'p4-17', name: '角的计算', difficulty: 2, keywords: ['角的和差', '计算', '推理'], concept: '进行角的和差计算，解决角度相关的推理问题', questionTypes: ['计算', '选择', '填空'], relatedPoints: ['p4-14', 'p4-15'] },
          { id: 'p4-18', name: '角在生活中的应用', difficulty: 2, keywords: ['生活应用', '建筑', '设计'], concept: '体会角在建筑、设计等生活领域的应用', questionTypes: ['选择', '判断'], relatedPoints: ['p4-13', 'p4-14', 'p4-15'] }
        ]
      },
      {
        id: 'ch4-4', title: '三位数乘两位数', icon: '✖️',
        points: [
          { id: 'p4-19', name: '口算乘法', difficulty: 1, keywords: ['口算', '整百', '乘两位数'], concept: '掌握整百数乘两位数的口算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p4-20'] },
          { id: 'p4-20', name: '笔算三位数乘两位数', difficulty: 2, keywords: ['笔算', '竖式', '三位数乘两位数'], concept: '掌握三位数乘两位数的笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p4-21'] },
          { id: 'p4-21', name: '因数中间或末尾有0', difficulty: 2, keywords: ['因数有0', '简便计算', '笔算'], concept: '掌握因数中间或末尾有0的乘法简便计算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p4-20'] },
          { id: 'p4-22', name: '积的变化规律', difficulty: 2, keywords: ['积的变化', '规律', '扩大缩小'], concept: '发现因数变化引起积变化的规律', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-20'] },
          { id: 'p4-23', name: '估算', difficulty: 2, keywords: ['估算', '大约', '近似值'], concept: '学会用估算的方法判断计算结果是否合理', questionTypes: ['选择', '填空', '计算'], relatedPoints: ['p4-20'] },
          { id: 'p4-24', name: '用乘法解决问题', difficulty: 2, keywords: ['解决问题', '行程', '购物'], concept: '运用三位数乘两位数解决行程、购物等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-20', 'p4-23'] }
        ]
      },
      {
        id: 'ch4-5', title: '平行四边形和梯形', icon: '🔷',
        points: [
          { id: 'p4-25', name: '垂直与平行', difficulty: 1, keywords: ['垂直', '平行', '两条直线'], concept: '理解同一平面内两条直线的位置关系：相交和平行', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p4-26'] },
          { id: 'p4-26', name: '垂线和距离', difficulty: 2, keywords: ['垂线', '距离', '点到直线'], concept: '认识垂线，理解点到直线的距离', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-25'] },
          { id: 'p4-27', name: '平行四边形的特征', difficulty: 1, keywords: ['平行四边形', '对边平行', '对边相等'], concept: '掌握平行四边形的特征：两组对边分别平行且相等', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p4-28'] },
          { id: 'p4-28', name: '梯形的特征', difficulty: 1, keywords: ['梯形', '只有一组对边平行'], concept: '掌握梯形的特征：只有一组对边平行的四边形', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p4-27'] },
          { id: 'p4-29', name: '四边形之间的关系', difficulty: 2, keywords: ['分类', '包含', '关系图'], concept: '理解平行四边形、长方形、正方形、梯形之间的关系', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p4-27', 'p4-28'] },
          { id: 'p4-30', name: '画平行线和垂线', difficulty: 2, keywords: ['画平行线', '画垂线', '工具'], concept: '学会用直尺和三角尺画平行线和垂线', questionTypes: ['选择', '判断', '操作'], relatedPoints: ['p4-25', 'p4-26'] }
        ]
      },
      {
        id: 'ch4-6', title: '除数是两位数的除法', icon: '➗',
        points: [
          { id: 'p4-31', name: '口算除法', difficulty: 1, keywords: ['口算', '整十数', '除以两位数'], concept: '掌握整十数除以整十数的口算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p4-32'] },
          { id: 'p4-32', name: '笔算除法（试商）', difficulty: 2, keywords: ['试商', '四舍五入', '笔算'], concept: '掌握除数是两位数的试商方法（四舍五入法）', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p4-33'] },
          { id: 'p4-33', name: '商的变化规律', difficulty: 2, keywords: ['商不变', '规律', '被除数除数同时变化'], concept: '发现商不变的规律：被除数和除数同时乘或除以相同的数，商不变', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-32'] },
          { id: 'p4-34', name: '除法的验算', difficulty: 2, keywords: ['验算', '商×除数+余数', '检查'], concept: '学会用商×除数+余数=被除数的方法验算除法', questionTypes: ['选择', '判断', '计算'], relatedPoints: ['p4-32'] },
          { id: 'p4-35', name: '商是一位数的除法', difficulty: 2, keywords: ['商一位数', '笔算', '计算'], concept: '掌握商是一位数的除法笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p4-32'] },
          { id: 'p4-36', name: '商是两位数的除法', difficulty: 3, keywords: ['商两位数', '笔算', '计算'], concept: '掌握商是两位数的除法笔算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p4-35'] }
        ]
      },
      {
        id: 'ch4-7', title: '条形统计图', icon: '📊',
        points: [
          { id: 'p4-37', name: '认识条形统计图', difficulty: 1, keywords: ['条形统计图', '一个格代表1', '画图'], concept: '认识1格代表1个单位的条形统计图', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-38'] },
          { id: 'p4-38', name: '1格代表多个单位', difficulty: 2, keywords: ['1格代表2', '1格代表5', '选择比例'], concept: '学会根据数据特点选择合适的比例（1格代表2或5等）', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-37'] },
          { id: 'p4-39', name: '绘制条形统计图', difficulty: 2, keywords: ['绘制', '步骤', '标注'], concept: '学会根据数据绘制条形统计图', questionTypes: ['选择', '判断', '操作'], relatedPoints: ['p4-37'] },
          { id: 'p4-40', name: '分析条形统计图', difficulty: 2, keywords: ['分析', '比较', '趋势'], concept: '能根据条形统计图分析数据，回答问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-37', 'p4-38'] },
          { id: 'p4-41', name: '统计图的选择', difficulty: 2, keywords: ['选择', '合适', '数据特点'], concept: '能根据数据特点选择合适的统计图', questionTypes: ['选择', '判断'], relatedPoints: ['p4-37', 'p4-38'] },
          { id: 'p4-42', name: '统计在生活中的应用', difficulty: 2, keywords: ['生活应用', '调查', '分析'], concept: '体会统计在生活中的应用，培养数据分析意识', questionTypes: ['选择', '判断'], relatedPoints: ['p4-37', 'p4-40'] }
        ]
      },
      {
        id: 'ch4-8', title: '数学广角——优化', icon: '🎯',
        points: [
          { id: 'p4-43', name: '合理安排时间', difficulty: 2, keywords: ['时间优化', '统筹', '效率'], concept: '学会合理安排时间，提高做事效率', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-44'] },
          { id: 'p4-44', name: '烙饼问题', difficulty: 3, keywords: ['烙饼', '最优方案', '节省'], concept: '解决烙饼问题：怎样安排使烙饼时间最短', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-43'] },
          { id: 'p4-45', name: '沏茶问题', difficulty: 2, keywords: ['沏茶', '同时做', '统筹'], concept: '解决沏茶问题：合理安排同时进行的步骤', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-43'] },
          { id: 'p4-46', name: '对策问题', difficulty: 3, keywords: ['对策', '田忌赛马', '策略'], concept: '了解对策问题，体会策略在竞争中的重要性', questionTypes: ['选择', '判断', '解答'], relatedPoints: ['p4-43', 'p4-44'] },
          { id: 'p4-47', name: '排队论', difficulty: 3, keywords: ['排队', '等待时间', '优化'], concept: '解决排队问题：怎样安排使等待总时间最短', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-43'] },
          { id: 'p4-48', name: '优化思想在生活中的应用', difficulty: 2, keywords: ['生活应用', '效率', '统筹方法'], concept: '体会优化思想在生活中的广泛应用', questionTypes: ['选择', '判断'], relatedPoints: ['p4-43', 'p4-44', 'p4-45'] }
        ]
      },
      // ===== 四年级下册 =====
      {
        id: 'ch4-9', title: '四则运算', icon: '🔢',
        points: [
          { id: 'p4-49', name: '加减法的意义', difficulty: 1, keywords: ['加法意义', '减法意义', '互逆'], concept: '理解加法和减法的意义及各部分间的关系', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p4-50'] },
          { id: 'p4-50', name: '乘除法的意义', difficulty: 1, keywords: ['乘法意义', '除法意义', '互逆'], concept: '理解乘法和除法的意义及各部分间的关系', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p4-49'] },
          { id: 'p4-51', name: '四则运算的运算顺序', difficulty: 2, keywords: ['运算顺序', '先乘除后加减', '括号'], concept: '掌握含有两级运算的运算顺序和有括号的运算顺序', questionTypes: ['选择', '判断', '计算'], relatedPoints: ['p4-49', 'p4-50'] },
          { id: 'p4-52', name: '有关0的运算', difficulty: 1, keywords: ['0的运算', '0不能做除数', '规则'], concept: '掌握有关0的运算规则：0加任何数等于任何数，0不能做除数', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-49', 'p4-50'] },
          { id: 'p4-53', name: '列综合算式', difficulty: 2, keywords: ['综合算式', '列式', '两步计算'], concept: '能把分步算式写成综合算式', questionTypes: ['填空', '选择', '解答'], relatedPoints: ['p4-51'] },
          { id: 'p4-54', name: '用四则运算解决问题', difficulty: 2, keywords: ['解决问题', '综合应用', '实际问题'], concept: '运用四则运算知识解决多步计算的实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-51', 'p4-53'] }
        ]
      },
      {
        id: 'ch4-10', title: '观察物体（二）', icon: '👀',
        points: [
          { id: 'p4-55', name: '从不同方向观察物体', difficulty: 1, keywords: ['前面', '侧面', '上面'], concept: '能从前面、侧面、上面观察由小正方体搭成的物体', questionTypes: ['选择', '判断', '连线'], relatedPoints: ['p4-56'] },
          { id: 'p4-56', name: '根据观察结果搭物体', difficulty: 2, keywords: ['搭物体', '小正方体', '还原'], concept: '能根据从不同方向看到的图形搭出对应的物体', questionTypes: ['选择', '操作', '判断'], relatedPoints: ['p4-55'] },
          { id: 'p4-57', name: '从三个方向观察', difficulty: 2, keywords: ['三个方向', '确定形状', '空间想象'], concept: '能从三个方向综合观察物体，确定物体的形状', questionTypes: ['选择', '判断'], relatedPoints: ['p4-55', 'p4-56'] },
          { id: 'p4-58', name: '判断小正方体的个数', difficulty: 3, keywords: ['个数', '最少', '最多'], concept: '根据三个方向的视图判断搭成物体最少和最多需要多少小正方体', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-55', 'p4-56'] },
          { id: 'p4-59', name: '空间想象能力训练', difficulty: 2, keywords: ['空间想象', '推理', '想象'], concept: '通过观察活动培养空间想象和推理能力', questionTypes: ['选择', '判断'], relatedPoints: ['p4-55', 'p4-56', 'p4-57'] },
          { id: 'p4-60', name: '观察物体在生活中的应用', difficulty: 2, keywords: ['建筑设计', '摄影', '实际应用'], concept: '体会观察物体知识在建筑设计、摄影等领域的应用', questionTypes: ['选择', '判断'], relatedPoints: ['p4-55'] }
        ]
      },
      {
        id: 'ch4-11', title: '运算定律', icon: '🔢',
        points: [
          { id: 'p4-61', name: '加法交换律', difficulty: 1, keywords: ['交换律', 'a+b=b+a', '位置互换'], concept: '理解加法交换律：两个数相加，交换位置，和不变', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-62'] },
          { id: 'p4-62', name: '加法结合律', difficulty: 1, keywords: ['结合律', '(a+b)+c=a+(b+c)', '凑整'], concept: '理解加法结合律：三个数相加，先把前两个数相加或先把后两个数相加，和不变', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-61'] },
          { id: 'p4-63', name: '乘法交换律', difficulty: 1, keywords: ['交换律', 'a×b=b×a', '位置互换'], concept: '理解乘法交换律：两个数相乘，交换位置，积不变', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-64'] },
          { id: 'p4-64', name: '乘法结合律', difficulty: 1, keywords: ['结合律', '(a×b)×c=a×(b×c)', '凑整'], concept: '理解乘法结合律：三个数相乘，先乘前两个数或先乘后两个数，积不变', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-63'] },
          { id: 'p4-65', name: '乘法分配律', difficulty: 2, keywords: ['分配律', '(a+b)×c=a×c+b×c', '拆分'], concept: '理解乘法分配律：两个数的和与一个数相乘，等于分别与这个数相乘再相加', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-63', 'p4-64'] },
          { id: 'p4-66', name: '简便计算', difficulty: 2, keywords: ['简便计算', '凑整', '运算定律'], concept: '运用运算定律进行简便计算，提高计算效率', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p4-61', 'p4-62', 'p4-63', 'p4-64', 'p4-65'] }
        ]
      },
      {
        id: 'ch4-12', title: '小数的意义和性质', icon: '🔢',
        points: [
          { id: 'p4-67', name: '小数的意义', difficulty: 1, keywords: ['小数', '十分之几', '计数单位'], concept: '理解小数的意义：小数是十进制分数的另一种表示形式', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-68'] },
          { id: 'p4-68', name: '小数的计数单位', difficulty: 1, keywords: ['十分之一', '百分之一', '千分之一'], concept: '认识小数的计数单位：十分之一、百分之一、千分之一等', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-67'] },
          { id: 'p4-69', name: '小数的读写', difficulty: 1, keywords: ['读法', '写法', '小数部分'], concept: '掌握小数的正确读法和写法', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p4-67'] },
          { id: 'p4-70', name: '小数的性质', difficulty: 2, keywords: ['性质', '末尾添0去0', '大小不变'], concept: '理解小数的性质：小数末尾添上0或去掉0，小数的大小不变', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-67'] },
          { id: 'p4-71', name: '小数的大小比较', difficulty: 2, keywords: ['大小比较', '数位', '逐位比较'], concept: '掌握小数大小比较的方法，从高位逐位比较', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-67'] },
          { id: 'p4-72', name: '小数的改写和近似数', difficulty: 2, keywords: ['改写', '近似数', '四舍五入'], concept: '学会将小数改写或用四舍五入法求近似数', questionTypes: ['填空', '选择', '计算'], relatedPoints: ['p4-67', 'p4-70'] }
        ]
      },
      {
        id: 'ch4-13', title: '三角形', icon: '🔺',
        points: [
          { id: 'p4-73', name: '三角形的特性', difficulty: 1, keywords: ['三角形', '稳定性', '三条边'], concept: '认识三角形的特征：由三条线段围成，具有稳定性', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p4-74'] },
          { id: 'p4-74', name: '三角形的各部分名称', difficulty: 1, keywords: ['顶点', '边', '角', '高'], concept: '认识三角形的各部分：顶点、边、角和高', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p4-73'] },
          { id: 'p4-75', name: '三角形三边的关系', difficulty: 2, keywords: ['三边关系', '两边之和大于第三边', '判断'], concept: '理解三角形任意两边之和大于第三边', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p4-73'] },
          { id: 'p4-76', name: '三角形的分类（按角）', difficulty: 1, keywords: ['锐角三角形', '直角三角形', '钝角三角形'], concept: '按角的大小将三角形分为锐角、直角和钝角三角形', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p4-77'] },
          { id: 'p4-77', name: '三角形的分类（按边）', difficulty: 2, keywords: ['等腰三角形', '等边三角形', '三边关系'], concept: '按边的关系将三角形分为等腰三角形和等边三角形', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p4-76'] },
          { id: 'p4-78', name: '三角形的内角和', difficulty: 2, keywords: ['内角和', '180度', '推理'], concept: '理解三角形三个内角的和是180度', questionTypes: ['选择', '填空', '计算'], relatedPoints: ['p4-73', 'p4-76', 'p4-77'] }
        ]
      },
      {
        id: 'ch4-14', title: '小数的加法和减法', icon: '➕',
        points: [
          { id: 'p4-79', name: '小数加法', difficulty: 1, keywords: ['小数加法', '小数点对齐', '竖式'], concept: '掌握小数加法的计算方法：小数点对齐，从低位加起', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p4-80'] },
          { id: 'p4-80', name: '小数减法', difficulty: 1, keywords: ['小数减法', '小数点对齐', '退位'], concept: '掌握小数减法的计算方法：小数点对齐，从低位减起', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p4-79'] },
          { id: 'p4-81', name: '小数加减混合运算', difficulty: 2, keywords: ['混合运算', '运算顺序', '从左到右'], concept: '掌握小数加减混合运算的运算顺序', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p4-79', 'p4-80'] },
          { id: 'p4-82', name: '整数运算定律推广到小数', difficulty: 2, keywords: ['运算定律', '简便计算', '小数'], concept: '将整数的运算定律推广到小数，进行简便计算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p4-81', 'p4-65'] },
          { id: 'p4-83', name: '小数加减法的验算', difficulty: 2, keywords: ['验算', '互逆', '检查'], concept: '学会用加法验算减法、用减法验算加法', questionTypes: ['选择', '判断', '计算'], relatedPoints: ['p4-79', 'p4-80'] },
          { id: 'p4-84', name: '用小数加减法解决问题', difficulty: 2, keywords: ['解决问题', '购物', '测量'], concept: '运用小数加减法解决购物、测量等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-79', 'p4-80'] }
        ]
      },
      {
        id: 'ch4-15', title: '图形的运动（二）', icon: '🔄',
        points: [
          { id: 'p4-85', name: '轴对称', difficulty: 1, keywords: ['轴对称', '对称轴', '完全重合'], concept: '进一步认识轴对称图形，能在方格纸上补全轴对称图形', questionTypes: ['选择', '判断', '操作'], relatedPoints: ['p4-86'] },
          { id: 'p4-86', name: '平移', difficulty: 2, keywords: ['平移', '方向', '距离', '方格纸'], concept: '能在方格纸上将图形按指定方向和距离平移', questionTypes: ['选择', '判断', '操作'], relatedPoints: ['p4-85'] },
          { id: 'p4-87', name: '在方格纸上画轴对称图形', difficulty: 2, keywords: ['画图', '补全', '对称轴'], concept: '学会在方格纸上画出轴对称图形的另一半', questionTypes: ['选择', '操作', '判断'], relatedPoints: ['p4-85'] },
          { id: 'p4-88', name: '在方格纸上平移图形', difficulty: 2, keywords: ['画图', '平移', '方格纸'], concept: '学会在方格纸上按要求平移图形', questionTypes: ['选择', '操作', '判断'], relatedPoints: ['p4-86'] },
          { id: 'p4-89', name: '利用平移计算面积', difficulty: 3, keywords: ['平移', '面积', '不规则图形'], concept: '运用平移将不规则图形转化为规则图形来计算面积', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-86', 'p4-88'] },
          { id: 'p4-90', name: '图形运动的综合应用', difficulty: 2, keywords: ['综合', '设计', '欣赏'], concept: '综合运用轴对称和平移知识进行图形设计和欣赏', questionTypes: ['选择', '操作', '判断'], relatedPoints: ['p4-85', 'p4-86'] }
        ]
      },
      {
        id: 'ch4-16', title: '平均数与条形统计图', icon: '📊',
        points: [
          { id: 'p4-91', name: '平均数的意义', difficulty: 1, keywords: ['平均数', '平均', '代表值'], concept: '理解平均数的含义：一组数据的平均值，反映数据的一般水平', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p4-92'] },
          { id: 'p4-92', name: '求平均数', difficulty: 1, keywords: ['求平均数', '移多补少', '总和÷个数'], concept: '掌握求平均数的方法：总数量÷总份数=平均数', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p4-91'] },
          { id: 'p4-93', name: '平均数的应用', difficulty: 2, keywords: ['应用', '比较', '判断'], concept: '能用平均数进行数据比较和判断', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-91', 'p4-92'] },
          { id: 'p4-94', name: '复式条形统计图', difficulty: 2, keywords: ['复式', '条形图', '对比'], concept: '认识复式条形统计图，能绘制和分析复式条形统计图', questionTypes: ['选择', '填空', '操作'], relatedPoints: ['p4-37', 'p4-38'] },
          { id: 'p4-95', name: '分析复式条形统计图', difficulty: 2, keywords: ['分析', '比较', '回答问题'], concept: '能根据复式条形统计图中的数据进行分析和比较', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-94'] },
          { id: 'p4-96', name: '统计在生活中的应用', difficulty: 2, keywords: ['生活应用', '调查', '分析'], concept: '能运用统计知识解决生活中的实际问题', questionTypes: ['选择', '判断'], relatedPoints: ['p4-91', 'p4-94'] }
        ]
      },
      {
        id: 'ch4-17', title: '数学广角——鸡兔同笼', icon: '🎯',
        points: [
          { id: 'p4-97', name: '鸡兔同笼问题', difficulty: 2, keywords: ['鸡兔同笼', '假设法', '方程'], concept: '理解鸡兔同笼问题的解法：假设法和列表法', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-98'] },
          { id: 'p4-98', name: '假设法', difficulty: 2, keywords: ['假设', '全是鸡', '全是兔'], concept: '掌握假设法解鸡兔同笼：先假设全是鸡（或兔），再调整', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-97'] },
          { id: 'p4-99', name: '列表法', difficulty: 2, keywords: ['列表', '尝试', '有序'], concept: '用列表法逐步尝试，找出正确答案', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-97'] },
          { id: 'p4-100', name: '方程法', difficulty: 3, keywords: ['方程', '设未知数', '列方程'], concept: '用方程方法解决鸡兔同笼问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-97', 'p4-98'] },
          { id: 'p4-101', name: '鸡兔同笼的变式问题', difficulty: 3, keywords: ['变式', '举一反三', '推广'], concept: '将鸡兔同笼问题推广到类似的实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p4-97', 'p4-98'] },
          { id: 'p4-102', name: '数学建模思想', difficulty: 3, keywords: ['建模', '抽象', '实际问题'], concept: '体会将实际问题抽象为数学模型的思想方法', questionTypes: ['选择', '判断', '解答'], relatedPoints: ['p4-97', 'p4-101'] }
        ]
      }
    ]
  },

  // ======================== 五年级 ========================
  '5': {
    title: '五年级数学',
    icon: '🔢',
    color: '#8b5cf6',
    chapters: [
      // ===== 五年级上册 =====
      {
        id: 'ch5-1', title: '小数乘法', icon: '✖️',
        points: [
          { id: 'p5-1', name: '小数乘整数', difficulty: 1, keywords: ['小数乘整数', '意义', '计算'], concept: '理解小数乘整数的意义与整数乘法相同，掌握计算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-2'] },
          { id: 'p5-2', name: '小数乘小数', difficulty: 2, keywords: ['小数乘小数', '积的小数位数', '计算'], concept: '掌握小数乘小数的计算方法，积的小数位数等于因数小数位数之和', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-1'] },
          { id: 'p5-3', name: '积的近似数', difficulty: 2, keywords: ['四舍五入', '近似数', '保留小数'], concept: '学会用"四舍五入"法求积的近似数', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-2'] },
          { id: 'p5-4', name: '整数乘法运算定律推广到小数', difficulty: 2, keywords: ['运算定律', '简便计算', '推广'], concept: '将整数乘法运算定律推广到小数乘法，进行简便计算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-2'] },
          { id: 'p5-5', name: '小数乘法的估算', difficulty: 2, keywords: ['估算', '大约', '近似'], concept: '学会用估算判断小数乘法结果是否合理', questionTypes: ['选择', '填空', '计算'], relatedPoints: ['p5-2'] },
          { id: 'p5-6', name: '用小数乘法解决问题', difficulty: 2, keywords: ['解决问题', '购物', '面积'], concept: '运用小数乘法解决购物、面积计算等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-2', 'p5-5'] }
        ]
      },
      {
        id: 'ch5-2', title: '位置', icon: '📍',
        points: [
          { id: 'p5-7', name: '用数对表示位置', difficulty: 1, keywords: ['数对', '列', '行'], concept: '学会用数对（列，行）表示物体在方格纸上的位置', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p5-8'] },
          { id: 'p5-8', name: '在方格纸上用数对确定位置', difficulty: 1, keywords: ['方格纸', '确定位置', '坐标'], concept: '能在方格纸上根据数对确定物体的位置', questionTypes: ['选择', '填空', '操作'], relatedPoints: ['p5-7'] },
          { id: 'p5-9', name: '数对的含义', difficulty: 2, keywords: ['列', '行', '第一个数第二个数'], concept: '理解数对中第一个数表示列，第二个数表示行', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-7'] },
          { id: 'p5-10', name: '数对与位置的对应', difficulty: 2, keywords: ['一一对应', '唯一', '位置'], concept: '理解数对和位置是一一对应的关系', questionTypes: ['选择', '判断'], relatedPoints: ['p5-7', 'p5-8'] },
          { id: 'p5-11', name: '用数对描述运动', difficulty: 2, keywords: ['平移', '数对变化', '规律'], concept: '能用数对描述物体平移后的位置变化规律', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-7', 'p5-8'] },
          { id: 'p5-12', name: '位置知识在生活中的应用', difficulty: 2, keywords: ['座位', '地图', '实际应用'], concept: '运用数对知识解决座位安排、地图定位等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-7'] }
        ]
      },
      {
        id: 'ch5-3', title: '小数除法', icon: '➗',
        points: [
          { id: 'p5-13', name: '小数除以整数', difficulty: 1, keywords: ['小数除以整数', '计算', '商的小数点'], concept: '掌握小数除以整数的计算方法，商的小数点要和被除数的小数点对齐', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-14'] },
          { id: 'p5-14', name: '除数是小数的除法', difficulty: 2, keywords: ['移动小数点', '转化', '除数是小数'], concept: '掌握除数是小数的除法：将除数转化为整数再计算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-13'] },
          { id: 'p5-15', name: '商的近似数', difficulty: 2, keywords: ['四舍五入', '近似数', '保留'], concept: '学会用"四舍五入"法求商的近似数', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-14'] },
          { id: 'p5-16', name: '循环小数', difficulty: 2, keywords: ['循环小数', '循环节', '有限无限'], concept: '认识循环小数，理解有限小数和无限小数的区别', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-14'] },
          { id: 'p5-17', name: '用计算器探索规律', difficulty: 2, keywords: ['计算器', '探索', '规律'], concept: '用计算器计算，发现商的变化规律', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p5-14'] },
          { id: 'p5-18', name: '用小数除法解决问题', difficulty: 2, keywords: ['解决问题', '实际问题', '进一法', '去尾法'], concept: '运用小数除法解决实际问题，理解"进一法"和"去尾法"', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-14', 'p5-15'] }
        ]
      },
      {
        id: 'ch5-4', title: '可能性', icon: '🎲',
        points: [
          { id: 'p5-19', name: '事件的确定性与不确定性', difficulty: 1, keywords: ['确定', '不确定', '一定', '可能'], concept: '区分确定事件和不确定事件，理解"一定""可能""不可能"', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-20'] },
          { id: 'p5-20', name: '可能性的大小', difficulty: 2, keywords: ['可能性大', '可能性小', '数量'], concept: '理解可能性大小与数量多少有关：数量多则可能性大', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-19'] },
          { id: 'p5-21', name: '用"一定""可能""不可能"描述', difficulty: 1, keywords: ['描述', '判断', '事件'], concept: '能用"一定""可能""不可能"正确描述事件发生的可能性', questionTypes: ['选择', '判断'], relatedPoints: ['p5-19'] },
          { id: 'p5-22', name: '设计公平的游戏规则', difficulty: 2, keywords: ['公平', '等可能', '设计'], concept: '能设计公平的游戏规则，使各方获胜的可能性相等', questionTypes: ['选择', '判断', '解答'], relatedPoints: ['p5-20'] },
          { id: 'p5-23', name: '可能性在生活中的应用', difficulty: 2, keywords: ['生活应用', '预测', '决策'], concept: '运用可能性知识进行预测和决策', questionTypes: ['选择', '判断'], relatedPoints: ['p5-19', 'p5-20'] },
          { id: 'p5-24', name: '分数与可能性', difficulty: 2, keywords: ['分数表示', '可能性大小', '用分数'], concept: '能用分数表示可能性的大小', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p5-20'] }
        ]
      },
      {
        id: 'ch5-5', title: '简易方程', icon: '🔢',
        points: [
          { id: 'p5-25', name: '用字母表示数', difficulty: 1, keywords: ['字母', '未知数', '表示'], concept: '学会用字母表示数和数量关系', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p5-26'] },
          { id: 'p5-26', name: '用字母表示运算定律', difficulty: 1, keywords: ['运算定律', '字母表示', '公式'], concept: '学会用字母表示运算定律和计算公式', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p5-25'] },
          { id: 'p5-27', name: '方程的意义', difficulty: 1, keywords: ['方程', '等式', '含有未知数'], concept: '理解方程的意义：含有未知数的等式叫做方程', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-28'] },
          { id: 'p5-28', name: '等式的性质', difficulty: 2, keywords: ['等式性质', '两边同时加减乘除'], concept: '理解等式的性质：等式两边同时加减乘除同一个数，等式仍然成立', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-27'] },
          { id: 'p5-29', name: '解简易方程', difficulty: 2, keywords: ['解方程', '求x', '等式性质'], concept: '学会利用等式的性质解简易方程', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-27', 'p5-28'] },
          { id: 'p5-30', name: '列方程解决问题', difficulty: 2, keywords: ['列方程', '实际问题', '解题步骤'], concept: '学会根据题意列方程并解方程解决实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-27', 'p5-29'] }
        ]
      },
      {
        id: 'ch5-6', title: '多边形的面积', icon: '📐',
        points: [
          { id: 'p5-31', name: '平行四边形的面积', difficulty: 2, keywords: ['面积公式', '底×高', '转化'], concept: '通过割补法推导平行四边形面积公式：面积=底×高', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-32'] },
          { id: 'p5-32', name: '三角形的面积', difficulty: 2, keywords: ['面积公式', '底×高÷2', '转化'], concept: '通过拼摆法推导三角形面积公式：面积=底×高÷2', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-31'] },
          { id: 'p5-33', name: '梯形的面积', difficulty: 2, keywords: ['面积公式', '(上底+下底)×高÷2', '转化'], concept: '通过拼摆法推导梯形面积公式：面积=(上底+下底)×高÷2', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-31', 'p5-32'] },
          { id: 'p5-34', name: '组合图形的面积', difficulty: 3, keywords: ['组合图形', '分割', '补全'], concept: '学会用分割法或补全法求组合图形的面积', questionTypes: ['计算', '填空', '解答'], relatedPoints: ['p5-31', 'p5-32', 'p5-33'] },
          { id: 'p5-35', name: '面积公式的推导过程', difficulty: 2, keywords: ['转化思想', '推导', '割补'], concept: '理解面积公式的推导过程，体会转化的数学思想', questionTypes: ['选择', '判断'], relatedPoints: ['p5-31', 'p5-32', 'p5-33'] },
          { id: 'p5-36', name: '面积的实际应用', difficulty: 2, keywords: ['实际应用', '土地', '设计'], concept: '运用多边形面积知识解决土地测量、设计等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-31', 'p5-32', 'p5-33'] }
        ]
      },
      {
        id: 'ch5-7', title: '植树问题', icon: '🌳',
        points: [
          { id: 'p5-37', name: '两端都栽的植树问题', difficulty: 2, keywords: ['两端都栽', '棵数=间隔数+1', '植树'], concept: '掌握两端都栽的植树问题：棵数=间隔数+1', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-38'] },
          { id: 'p5-38', name: '两端都不栽的植树问题', difficulty: 2, keywords: ['两端不栽', '棵数=间隔数-1', '植树'], concept: '掌握两端都不栽的植树问题：棵数=间隔数-1', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-37'] },
          { id: 'p5-39', name: '一端栽一端不栽的植树问题', difficulty: 2, keywords: ['一端栽', '棵数=间隔数', '植树'], concept: '掌握一端栽一端不栽的植树问题：棵数=间隔数', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-37', 'p5-38'] },
          { id: 'p5-40', name: '封闭图形的植树问题', difficulty: 3, keywords: ['封闭', '棵数=间隔数', '环形'], concept: '理解封闭图形上的植树问题：棵数=间隔数', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-39'] },
          { id: 'p5-41', name: '植树问题的变式', difficulty: 3, keywords: ['变式', '锯木头', '爬楼梯'], concept: '将植树问题推广到锯木头、爬楼梯等类似问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-37', 'p5-38'] },
          { id: 'p5-42', name: '植树问题在生活中的应用', difficulty: 2, keywords: ['生活应用', '路灯', '队列'], concept: '运用植树问题的知识解决路灯安装、队列排列等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-37', 'p5-41'] }
        ]
      },
      // ===== 五年级下册 =====
      {
        id: 'ch5-8', title: '观察物体（三）', icon: '👀',
        points: [
          { id: 'p5-43', name: '根据一个方向看到的图形搭物体', difficulty: 2, keywords: ['搭物体', '一个方向', '多种可能'], concept: '根据从一个方向看到的图形搭物体，可能有多种搭法', questionTypes: ['选择', '操作', '判断'], relatedPoints: ['p5-44'] },
          { id: 'p5-44', name: '根据两个方向看到的图形搭物体', difficulty: 2, keywords: ['两个方向', '确定', '小正方体'], concept: '根据从两个方向看到的图形搭物体，减少可能性', questionTypes: ['选择', '操作', '判断'], relatedPoints: ['p5-45'] },
          { id: 'p5-45', name: '根据三个方向看到的图形搭物体', difficulty: 3, keywords: ['三个方向', '唯一', '确定'], concept: '根据从三个方向看到的图形搭物体，通常能确定唯一的搭法', questionTypes: ['选择', '操作', '判断'], relatedPoints: ['p5-43', 'p5-44'] },
          { id: 'p5-46', name: '判断小正方体的最少数量', difficulty: 3, keywords: ['最少', '推断', '空间想象'], concept: '根据三个方向的视图判断搭成物体最少需要多少小正方体', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-45'] },
          { id: 'p5-47', name: '视图与物体的对应关系', difficulty: 2, keywords: ['视图', '对应', '逆向思维'], concept: '理解从视图还原物体的过程，培养逆向思维能力', questionTypes: ['选择', '判断'], relatedPoints: ['p5-43', 'p5-44', 'p5-45'] },
          { id: 'p5-48', name: '发展空间想象力', difficulty: 2, keywords: ['空间想象', '推理', '综合'], concept: '通过观察物体活动，发展空间想象力和推理能力', questionTypes: ['选择', '判断'], relatedPoints: ['p5-45', 'p5-47'] }
        ]
      },
      {
        id: 'ch5-9', title: '因数和倍数', icon: '🔢',
        points: [
          { id: 'p5-49', name: '因数和倍数的意义', difficulty: 1, keywords: ['因数', '倍数', '整除'], concept: '理解因数和倍数的意义：如果a÷b=c，那么b和c是a的因数，a是b和c的倍数', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p5-50'] },
          { id: 'p5-50', name: '找一个数的因数', difficulty: 1, keywords: ['找因数', '成对', '有序'], concept: '学会有序地找出一个数的所有因数', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p5-49'] },
          { id: 'p5-51', name: '找一个数的倍数', difficulty: 1, keywords: ['找倍数', '乘法', '无限'], concept: '学会找出一个数的倍数，理解倍数有无限多个', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p5-49'] },
          { id: 'p5-52', name: '2、3、5的倍数特征', difficulty: 2, keywords: ['2的倍数', '3的倍数', '5的倍数', '特征'], concept: '掌握2、3、5的倍数特征：2的倍数个位是偶数，5的倍数个位是0或5，3的倍数各位数字之和是3的倍数', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p5-49'] },
          { id: 'p5-53', name: '质数和合数', difficulty: 2, keywords: ['质数', '合数', '因数个数'], concept: '理解质数和合数的概念：只有1和它本身两个因数的是质数，否则是合数', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p5-49', 'p5-50'] },
          { id: 'p5-54', name: '因数和倍数的综合应用', difficulty: 2, keywords: ['综合', '分解质因数', '公因数'], concept: '综合运用因数和倍数的知识解决实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-49', 'p5-52', 'p5-53'] }
        ]
      },
      {
        id: 'ch5-10', title: '长方体和正方体', icon: '📦',
        points: [
          { id: 'p5-55', name: '长方体的认识', difficulty: 1, keywords: ['长方体', '面', '棱', '顶点'], concept: '认识长方体的特征：6个面、12条棱、8个顶点', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-56'] },
          { id: 'p5-56', name: '正方体的认识', difficulty: 1, keywords: ['正方体', '特殊长方体', '棱长相等'], concept: '认识正方体的特征：正方体是特殊的长方体，12条棱都相等', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-55'] },
          { id: 'p5-57', name: '长方体和正方体的展开图', difficulty: 2, keywords: ['展开图', '平面', '折叠'], concept: '认识长方体和正方体的展开图，能判断哪些能折叠成立体图形', questionTypes: ['选择', '判断', '操作'], relatedPoints: ['p5-55', 'p5-56'] },
          { id: 'p5-58', name: '长方体的表面积', difficulty: 2, keywords: ['表面积', '公式', '6个面'], concept: '掌握长方体表面积的计算方法：(长×宽+长×高+宽×高)×2', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-55'] },
          { id: 'p5-59', name: '正方体的表面积', difficulty: 2, keywords: ['表面积', '公式', '棱长×棱长×6'], concept: '掌握正方体表面积的计算方法：棱长×棱长×6', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-56', 'p5-58'] },
          { id: 'p5-60', name: '长方体和正方体的体积', difficulty: 2, keywords: ['体积', '体积单位', '容积'], concept: '掌握长方体和正方体体积的计算方法，认识体积单位', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-58', 'p5-59'] }
        ]
      },
      {
        id: 'ch5-11', title: '分数的意义和性质', icon: '🔢',
        points: [
          { id: 'p5-61', name: '分数的意义', difficulty: 1, keywords: ['分数', '单位1', '平均分'], concept: '理解分数的意义：把单位1平均分成若干份，表示这样的一份或几份的数', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-62'] },
          { id: 'p5-62', name: '分数与除法的关系', difficulty: 2, keywords: ['分数', '除法', 'a÷b=a/b'], concept: '理解分数与除法的关系：被除数÷除数=被除数/除数', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p5-61'] },
          { id: 'p5-63', name: '真分数和假分数', difficulty: 1, keywords: ['真分数', '假分数', '带分数'], concept: '区分真分数（分子<分母）和假分数（分子≥分母），认识带分数', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-61'] },
          { id: 'p5-64', name: '分数的基本性质', difficulty: 2, keywords: ['基本性质', '约分', '通分'], concept: '理解分数的基本性质：分子分母同时乘或除以相同的数，分数大小不变', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p5-61'] },
          { id: 'p5-65', name: '约分和通分', difficulty: 2, keywords: ['约分', '通分', '最大公因数', '最小公倍数'], concept: '掌握约分和通分的方法，理解最大公因数和最小公倍数', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-64'] },
          { id: 'p5-66', name: '分数的大小比较', difficulty: 2, keywords: ['同分母', '同分子', '通分比较'], concept: '掌握分数大小比较的方法：同分母比分子，异分母先通分', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p5-64', 'p5-65'] }
        ]
      },
      {
        id: 'ch5-12', title: '图形的运动（三）', icon: '🔄',
        points: [
          { id: 'p5-67', name: '旋转的认识', difficulty: 1, keywords: ['旋转', '旋转中心', '旋转角度'], concept: '进一步认识旋转，知道旋转中心、旋转方向和旋转角度', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-68'] },
          { id: 'p5-68', name: '在方格纸上旋转图形', difficulty: 2, keywords: ['画图', '旋转90度', '方格纸'], concept: '能在方格纸上将图形绕某点旋转90度', questionTypes: ['选择', '操作', '判断'], relatedPoints: ['p5-67'] },
          { id: 'p5-69', name: '旋转的三要素', difficulty: 2, keywords: ['旋转中心', '方向', '角度'], concept: '理解旋转的三要素：旋转中心、旋转方向和旋转角度', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-67'] },
          { id: 'p5-70', name: '利用旋转设计图案', difficulty: 2, keywords: ['设计', '图案', '创造'], concept: '利用旋转的知识设计美丽的图案', questionTypes: ['选择', '操作', '判断'], relatedPoints: ['p5-67', 'p5-68'] },
          { id: 'p5-71', name: '旋转在生活中的应用', difficulty: 2, keywords: ['生活应用', '风车', '钟表'], concept: '体会旋转在风车、钟表等生活物品中的应用', questionTypes: ['选择', '判断'], relatedPoints: ['p5-67'] },
          { id: 'p5-72', name: '综合运用图形运动', difficulty: 2, keywords: ['综合', '轴对称', '平移', '旋转'], concept: '综合运用轴对称、平移和旋转进行图形变换和欣赏', questionTypes: ['选择', '判断', '操作'], relatedPoints: ['p5-67', 'p5-68'] }
        ]
      },
      {
        id: 'ch5-13', title: '分数的加法和减法', icon: '➕',
        points: [
          { id: 'p5-73', name: '同分母分数加减法', difficulty: 1, keywords: ['同分母', '分子相加减', '分母不变'], concept: '掌握同分母分数加减法的计算方法：分母不变，分子相加减', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-74'] },
          { id: 'p5-74', name: '异分母分数加减法', difficulty: 2, keywords: ['异分母', '通分', '计算'], concept: '掌握异分母分数加减法的计算方法：先通分，再加减', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-73'] },
          { id: 'p5-75', name: '分数加减混合运算', difficulty: 2, keywords: ['混合运算', '运算顺序', '简便计算'], concept: '掌握分数加减混合运算的运算顺序和简便计算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-73', 'p5-74'] },
          { id: 'p5-76', name: '整数加法运算定律推广到分数', difficulty: 2, keywords: ['运算定律', '推广', '简便计算'], concept: '将整数加法运算定律推广到分数加法，进行简便计算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p5-75'] },
          { id: 'p5-77', name: '分数加减法的验算', difficulty: 2, keywords: ['验算', '互逆', '检查'], concept: '学会用减法验算加法、用加法验算减法', questionTypes: ['选择', '判断', '计算'], relatedPoints: ['p5-73', 'p5-74'] },
          { id: 'p5-78', name: '用分数加减法解决问题', difficulty: 2, keywords: ['解决问题', '实际问题', '综合'], concept: '运用分数加减法知识解决实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-73', 'p5-74'] }
        ]
      },
      {
        id: 'ch5-14', title: '折线统计图', icon: '📊',
        points: [
          { id: 'p5-79', name: '认识单式折线统计图', difficulty: 1, keywords: ['折线图', '趋势', '变化'], concept: '认识单式折线统计图，理解折线图能反映数据的变化趋势', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-80'] },
          { id: 'p5-80', name: '绘制单式折线统计图', difficulty: 2, keywords: ['绘制', '描点', '连线'], concept: '学会根据数据绘制单式折线统计图', questionTypes: ['选择', '操作', '判断'], relatedPoints: ['p5-79'] },
          { id: 'p5-81', name: '认识复式折线统计图', difficulty: 2, keywords: ['复式', '对比', '多组数据'], concept: '认识复式折线统计图，理解其便于对比的优点', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p5-79'] },
          { id: 'p5-82', name: '分析折线统计图', difficulty: 2, keywords: ['分析', '趋势', '预测'], concept: '能根据折线统计图分析数据变化趋势并做出预测', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-79', 'p5-81'] },
          { id: 'p5-83', name: '折线统计图的应用', difficulty: 2, keywords: ['生活应用', '气温', '销量'], concept: '体会折线统计图在气温变化、销量分析等领域的应用', questionTypes: ['选择', '判断'], relatedPoints: ['p5-79', 'p5-82'] },
          { id: 'p5-84', name: '选择合适的统计图', difficulty: 2, keywords: ['选择', '条形图', '折线图', '扇形图'], concept: '能根据不同需求选择合适的统计图', questionTypes: ['选择', '判断'], relatedPoints: ['p5-79', 'p5-81'] }
        ]
      },
      {
        id: 'ch5-15', title: '数学广角——找次品', icon: '🎯',
        points: [
          { id: 'p5-85', name: '找次品问题', difficulty: 2, keywords: ['次品', '天平', '称量'], concept: '理解找次品问题：用天平称量找出稍轻或稍重的次品', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-86'] },
          { id: 'p5-86', name: '用天平找次品', difficulty: 2, keywords: ['天平', '称量', '比较'], concept: '学会用天平通过称量比较找出次品', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-85'] },
          { id: 'p5-87', name: '最优称量策略', difficulty: 3, keywords: ['最优', '三分法', '最少次数'], concept: '掌握找次品的最优策略：尽量将物品分成3份', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-85', 'p5-86'] },
          { id: 'p5-88', name: '推理和分析', difficulty: 3, keywords: ['推理', '分析', '逻辑'], concept: '通过找次品问题培养逻辑推理和分析能力', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-87'] },
          { id: 'p5-89', name: '找次品的规律', difficulty: 3, keywords: ['规律', '3的幂', '称量次数'], concept: '发现找次品问题中物品数量与最少称量次数的关系', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p5-87'] },
          { id: 'p5-90', name: '找次品在生活中的应用', difficulty: 2, keywords: ['质量检测', '生产', '实际应用'], concept: '体会找次品思想在质量检测等生产领域的应用', questionTypes: ['选择', '判断'], relatedPoints: ['p5-85', 'p5-87'] }
        ]
      }
    ]
  },

  // ======================== 六年级 ========================
  '6': {
    title: '六年级数学',
    icon: '🔢',
    color: '#ec4899',
    chapters: [
      // ===== 六年级上册 =====
      {
        id: 'ch6-1', title: '分数乘法', icon: '✖️',
        points: [
          { id: 'p6-1', name: '分数乘整数', difficulty: 1, keywords: ['分数乘整数', '意义', '计算'], concept: '理解分数乘整数的意义与整数乘法相同，掌握计算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-2'] },
          { id: 'p6-2', name: '分数乘分数', difficulty: 2, keywords: ['分数乘分数', '分子乘分子', '分母乘分母'], concept: '掌握分数乘分数的计算方法：分子相乘的积作分子，分母相乘的积作分母', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-1'] },
          { id: 'p6-3', name: '分数乘法的简便计算', difficulty: 2, keywords: ['约分', '简便', '先约分再乘'], concept: '学会在分数乘法中先约分再计算，使计算简便', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-2'] },
          { id: 'p6-4', name: '求一个数的几分之几是多少', difficulty: 2, keywords: ['几分之几', '乘法', '实际问题'], concept: '理解求一个数的几分之几是多少用乘法计算', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-2'] },
          { id: 'p6-5', name: '倒数的认识', difficulty: 1, keywords: ['倒数', '乘积为1', '互为倒数'], concept: '理解倒数的意义：乘积为1的两个数互为倒数', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p6-2'] },
          { id: 'p6-6', name: '用分数乘法解决问题', difficulty: 2, keywords: ['解决问题', '实际问题', '综合'], concept: '运用分数乘法知识解决实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-2', 'p6-4'] }
        ]
      },
      {
        id: 'ch6-2', title: '位置与方向（二）', icon: '🧭',
        points: [
          { id: 'p6-7', name: '用方向和距离确定位置', difficulty: 2, keywords: ['方向', '距离', '确定位置'], concept: '学会用方向和距离确定物体的位置', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p6-8'] },
          { id: 'p6-8', name: '在平面图上标出物体的位置', difficulty: 2, keywords: ['标位置', '比例尺', '量角器'], concept: '能在平面图上根据方向和距离标出物体的位置', questionTypes: ['选择', '操作', '判断'], relatedPoints: ['p6-7'] },
          { id: 'p6-9', name: '描述简单的路线图', difficulty: 2, keywords: ['路线图', '方向', '描述'], concept: '能根据方向和距离描述简单的行走路线', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-7'] },
          { id: 'p6-10', name: '比例尺与实际距离', difficulty: 2, keywords: ['比例尺', '图上距离', '实际距离'], concept: '理解比例尺的含义，能进行图上距离和实际距离的换算', questionTypes: ['选择', '填空', '计算'], relatedPoints: ['p6-7'] },
          { id: 'p6-11', name: '位置与方向的综合应用', difficulty: 2, keywords: ['综合', '导航', '实际问题'], concept: '综合运用位置与方向知识解决导航等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-7', 'p6-9'] },
          { id: 'p6-12', name: '位置与方向在生活中的应用', difficulty: 2, keywords: ['生活应用', '地图', '实际应用'], concept: '体会位置与方向知识在地图、导航等领域的应用', questionTypes: ['选择', '判断'], relatedPoints: ['p6-7'] }
        ]
      },
      {
        id: 'ch6-3', title: '分数除法', icon: '➗',
        points: [
          { id: 'p6-13', name: '分数除以整数', difficulty: 1, keywords: ['分数除以整数', '计算', '倒数'], concept: '掌握分数除以整数的计算方法：除以一个数等于乘这个数的倒数', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-14'] },
          { id: 'p6-14', name: '一个数除以分数', difficulty: 2, keywords: ['除以分数', '倒数', '计算'], concept: '掌握一个数除以分数的计算方法：乘这个分数的倒数', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-13'] },
          { id: 'p6-15', name: '已知一个数的几分之几是多少求这个数', difficulty: 2, keywords: ['逆向', '除法', '方程'], concept: '已知一个数的几分之几是多少，求这个数用除法或方程', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-4', 'p6-14'] },
          { id: 'p6-16', name: '分数混合运算', difficulty: 2, keywords: ['混合运算', '运算顺序', '简便计算'], concept: '掌握分数混合运算的运算顺序和简便计算方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-13', 'p6-14'] },
          { id: 'p6-17', name: '比与分数除法的关系', difficulty: 2, keywords: ['比', '除法', '分数', '联系'], concept: '理解比与除法、分数之间的关系', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p6-14'] },
          { id: 'p6-18', name: '用分数除法解决问题', difficulty: 2, keywords: ['解决问题', '实际问题', '综合'], concept: '运用分数除法知识解决实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-14', 'p6-15'] }
        ]
      },
      {
        id: 'ch6-4', title: '比', icon: '🔢',
        points: [
          { id: 'p6-19', name: '比的意义', difficulty: 1, keywords: ['比', '前项', '后项', '比值'], concept: '理解比的意义：两个数相除又叫做两个数的比', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p6-20'] },
          { id: 'p6-20', name: '比的基本性质', difficulty: 2, keywords: ['基本性质', '化简比', '最简整数比'], concept: '理解比的基本性质：比的前项和后项同时乘或除以相同的数，比值不变', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p6-19'] },
          { id: 'p6-21', name: '化简比', difficulty: 2, keywords: ['化简', '最简整数比', '方法'], concept: '学会化简比，将比化为最简整数比', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-20'] },
          { id: 'p6-22', name: '求比值', difficulty: 1, keywords: ['求比值', '前项÷后项', '结果'], concept: '学会求比值：前项÷后项', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-19'] },
          { id: 'p6-23', name: '按比分配', difficulty: 2, keywords: ['按比分配', '实际问题', '分配'], concept: '掌握按比分配问题的解法：先求总份数，再求各部分', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-19', 'p6-20'] },
          { id: 'p6-24', name: '比在生活中的应用', difficulty: 2, keywords: ['生活应用', '调配', '比例'], concept: '运用比的知识解决调配、比例等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-19', 'p6-23'] }
        ]
      },
      {
        id: 'ch6-5', title: '圆', icon: '⭕',
        points: [
          { id: 'p6-25', name: '圆的认识', difficulty: 1, keywords: ['圆心', '半径', '直径'], concept: '认识圆的各部分：圆心、半径、直径及其关系', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p6-26'] },
          { id: 'p6-26', name: '圆的周长', difficulty: 2, keywords: ['周长', '圆周率', 'π', '公式'], concept: '理解圆周率的概念，掌握圆的周长公式：C=πd=2πr', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-25'] },
          { id: 'p6-27', name: '圆的面积', difficulty: 2, keywords: ['面积', '公式', 'πr²'], concept: '理解圆面积公式的推导过程，掌握面积公式：S=πr²', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-25', 'p6-26'] },
          { id: 'p6-28', name: '圆环的面积', difficulty: 2, keywords: ['圆环', '面积差', '计算'], concept: '掌握圆环面积的计算方法：S=π(R²-r²)', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-27'] },
          { id: 'p6-29', name: '画圆', difficulty: 1, keywords: ['画圆', '圆规', '步骤'], concept: '学会用圆规画圆，掌握画圆的步骤', questionTypes: ['选择', '判断', '操作'], relatedPoints: ['p6-25'] },
          { id: 'p6-30', name: '圆在生活中的应用', difficulty: 2, keywords: ['生活应用', '车轮', '设计'], concept: '体会圆在车轮、建筑设计等生活领域的应用', questionTypes: ['选择', '判断'], relatedPoints: ['p6-25', 'p6-26', 'p6-27'] }
        ]
      },
      {
        id: 'ch6-6', title: '百分数（一）', icon: '💯',
        points: [
          { id: 'p6-31', name: '百分数的意义', difficulty: 1, keywords: ['百分数', '百分率', '百分之几'], concept: '理解百分数的意义：表示一个数是另一个数的百分之几的数', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p6-32'] },
          { id: 'p6-32', name: '百分数和分数、小数的互化', difficulty: 2, keywords: ['互化', '百分数', '分数', '小数'], concept: '掌握百分数与分数、小数之间的互化方法', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-31'] },
          { id: 'p6-33', name: '求一个数是另一个数的百分之几', difficulty: 2, keywords: ['百分之几', '除法', '计算'], concept: '掌握求百分率的方法：用除法计算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-31'] },
          { id: 'p6-34', name: '求一个数的百分之几是多少', difficulty: 2, keywords: ['百分之几', '乘法', '计算'], concept: '理解求一个数的百分之几是多少用乘法计算', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-31'] },
          { id: 'p6-35', name: '折扣问题', difficulty: 2, keywords: ['折扣', '几折', '实际价格'], concept: '理解折扣的含义：几折就是十分之几，计算折后价格', questionTypes: ['计算', '选择', '填空'], relatedPoints: ['p6-31', 'p6-34'] },
          { id: 'p6-36', name: '用百分数解决问题', difficulty: 2, keywords: ['解决问题', '实际问题', '综合'], concept: '运用百分数知识解决折扣、增长率等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-31', 'p6-32', 'p6-35'] }
        ]
      },
      {
        id: 'ch6-7', title: '扇形统计图', icon: '📊',
        points: [
          { id: 'p6-37', name: '认识扇形统计图', difficulty: 1, keywords: ['扇形图', '部分与整体', '百分比'], concept: '认识扇形统计图的特点：用整个圆表示总数，扇形表示各部分占总数的百分比', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p6-38'] },
          { id: 'p6-38', name: '扇形统计图的绘制', difficulty: 2, keywords: ['绘制', '步骤', '圆心角'], concept: '学会根据数据绘制扇形统计图', questionTypes: ['选择', '判断', '操作'], relatedPoints: ['p6-37'] },
          { id: 'p6-39', name: '分析扇形统计图', difficulty: 2, keywords: ['分析', '比较', '百分比'], concept: '能根据扇形统计图分析各部分占总数的百分比', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-37'] },
          { id: 'p6-40', name: '选择合适的统计图', difficulty: 2, keywords: ['选择', '条形图', '折线图', '扇形图'], concept: '能根据不同需求选择合适的统计图', questionTypes: ['选择', '判断'], relatedPoints: ['p6-37'] },
          { id: 'p6-41', name: '综合运用统计知识', difficulty: 2, keywords: ['综合', '分析', '决策'], concept: '综合运用各类统计图进行数据分析和决策', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-37', 'p6-39'] },
          { id: 'p6-42', name: '统计在生活中的应用', difficulty: 2, keywords: ['生活应用', '调查', '分析'], concept: '体会统计在人口、经济等生活领域的应用', questionTypes: ['选择', '判断'], relatedPoints: ['p6-37', 'p6-39'] }
        ]
      },
      {
        id: 'ch6-8', title: '数学广角——数与形', icon: '🎯',
        points: [
          { id: 'p6-43', name: '数形结合的思想', difficulty: 2, keywords: ['数形结合', '直观', '抽象'], concept: '理解数形结合的数学思想：用图形直观表示数的规律', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p6-44'] },
          { id: 'p6-44', name: '用图形表示数的规律', difficulty: 2, keywords: ['图形', '规律', '发现'], concept: '学会用图形来发现和表示数的规律', questionTypes: ['选择', '填空', '操作'], relatedPoints: ['p6-43'] },
          { id: 'p6-45', name: '用数解释图形', difficulty: 2, keywords: ['数', '图形', '解释'], concept: '学会用数的计算来解释图形中的规律', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-43'] },
          { id: 'p6-46', name: '探索复杂问题的规律', difficulty: 3, keywords: ['探索', '复杂', '化繁为简'], concept: '学会从简单入手，探索复杂问题中的规律', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-43', 'p6-44'] },
          { id: 'p6-47', name: '数与形在解决问题中的应用', difficulty: 2, keywords: ['应用', '解决', '策略'], concept: '运用数形结合的思想解决数学问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-43', 'p6-46'] },
          { id: 'p6-48', name: '数学美感', difficulty: 2, keywords: ['美感', '对称', '和谐'], concept: '通过数与形的学习感受数学的美', questionTypes: ['选择', '判断'], relatedPoints: ['p6-43'] }
        ]
      },
      // ===== 六年级下册 =====
      {
        id: 'ch6-9', title: '负数', icon: '➖',
        points: [
          { id: 'p6-49', name: '认识负数', difficulty: 1, keywords: ['负数', '正数', '0'], concept: '认识负数，理解负数表示与正数意义相反的量', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p6-50'] },
          { id: 'p6-50', name: '正数和负数的读写', difficulty: 1, keywords: ['读法', '写法', '负号'], concept: '学会正数和负数的正确读法和写法', questionTypes: ['填空', '选择', '判断'], relatedPoints: ['p6-49'] },
          { id: 'p6-51', name: '用直线表示正负数', difficulty: 2, keywords: ['数轴', '原点', '正方向'], concept: '学会在数轴上表示正数、负数和0', questionTypes: ['选择', '判断', '操作'], relatedPoints: ['p6-49'] },
          { id: 'p6-52', name: '负数的大小比较', difficulty: 2, keywords: ['大小比较', '数轴', '越往右越大'], concept: '掌握负数大小比较的方法：在数轴上越往右越大', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p6-49', 'p6-51'] },
          { id: 'p6-53', name: '负数在生活中的应用', difficulty: 2, keywords: ['温度', '海拔', '收支'], concept: '体会负数在温度、海拔、收支等生活中的应用', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-49'] },
          { id: 'p6-54', name: '正负数的实际问题', difficulty: 2, keywords: ['实际问题', '收支', '盈亏'], concept: '运用正负数知识解决收支、盈亏等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-49', 'p6-53'] }
        ]
      },
      {
        id: 'ch6-10', title: '百分数（二）', icon: '💯',
        points: [
          { id: 'p6-55', name: '折扣', difficulty: 2, keywords: ['折扣', '几折', '现价原价'], concept: '理解折扣的含义，掌握折扣问题的计算方法', questionTypes: ['计算', '选择', '填空'], relatedPoints: ['p6-35'] },
          { id: 'p6-56', name: '成数', difficulty: 2, keywords: ['成数', '几成', '十分之几'], concept: '理解成数的含义：几成就是十分之几，即百分之几十', questionTypes: ['选择', '填空', '计算'], relatedPoints: ['p6-55'] },
          { id: 'p6-57', name: '税率', difficulty: 2, keywords: ['税率', '纳税', '应纳税额'], concept: '理解税率的含义，掌握应纳税额的计算方法', questionTypes: ['计算', '选择', '填空'], relatedPoints: ['p6-58'] },
          { id: 'p6-58', name: '利率', difficulty: 2, keywords: ['利率', '利息', '本金', '存期'], concept: '理解利率的含义，掌握利息的计算方法：利息=本金×利率×存期', questionTypes: ['计算', '选择', '填空'], relatedPoints: ['p6-55'] },
          { id: 'p6-59', name: '解决实际问题', difficulty: 2, keywords: ['购物', '理财', '实际问题'], concept: '运用折扣、税率、利率知识解决购物和理财等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-55', 'p6-56', 'p6-57', 'p6-58'] },
          { id: 'p6-60', name: '生活中的百分数应用', difficulty: 2, keywords: ['生活应用', '经济', '理财'], concept: '体会百分数在经济活动和日常生活中的广泛应用', questionTypes: ['选择', '判断'], relatedPoints: ['p6-55', 'p6-59'] }
        ]
      },
      {
        id: 'ch6-11', title: '圆柱与圆锥', icon: '📦',
        points: [
          { id: 'p6-61', name: '圆柱的认识', difficulty: 1, keywords: ['圆柱', '底面', '侧面', '高'], concept: '认识圆柱的特征：两个底面是相等的圆，侧面是曲面', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p6-62'] },
          { id: 'p6-62', name: '圆柱的表面积', difficulty: 2, keywords: ['表面积', '侧面积', '底面积'], concept: '掌握圆柱表面积的计算方法：侧面积+两个底面积', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-61'] },
          { id: 'p6-63', name: '圆柱的体积', difficulty: 2, keywords: ['体积', '底面积×高', '公式'], concept: '掌握圆柱体积的计算方法：V=πr²h', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-61', 'p6-62'] },
          { id: 'p6-64', name: '圆锥的认识', difficulty: 1, keywords: ['圆锥', '顶点', '底面', '高'], concept: '认识圆锥的特征：一个底面是圆，侧面是曲面，有一个顶点', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p6-65'] },
          { id: 'p6-65', name: '圆锥的体积', difficulty: 2, keywords: ['体积', '圆柱的三分之一', '公式'], concept: '理解圆锥体积是等底等高圆柱体积的三分之一：V=⅓πr²h', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-63', 'p6-64'] },
          { id: 'p6-66', name: '圆柱和圆锥的实际应用', difficulty: 2, keywords: ['实际应用', '水桶', '沙堆'], concept: '运用圆柱和圆锥知识解决水桶容积、沙堆体积等实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-62', 'p6-63', 'p6-65'] }
        ]
      },
      {
        id: 'ch6-12', title: '比例', icon: '🔢',
        points: [
          { id: 'p6-67', name: '比例的意义', difficulty: 1, keywords: ['比例', '两个比相等', '组成'], concept: '理解比例的意义：表示两个比相等的式子叫做比例', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p6-68'] },
          { id: 'p6-68', name: '比例的基本性质', difficulty: 2, keywords: ['基本性质', '内项积=外项积', '解比例'], concept: '理解比例的基本性质：两个外项的积等于两个内项的积', questionTypes: ['选择', '填空', '判断'], relatedPoints: ['p6-67'] },
          { id: 'p6-69', name: '解比例', difficulty: 2, keywords: ['解比例', '求未知数', '基本性质'], concept: '学会利用比例的基本性质解比例', questionTypes: ['计算', '填空', '选择'], relatedPoints: ['p6-67', 'p6-68'] },
          { id: 'p6-70', name: '正比例', difficulty: 2, keywords: ['正比例', '比值一定', 'y/x=k'], concept: '理解正比例的意义：两种相关联的量，比值一定', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p6-71'] },
          { id: 'p6-71', name: '反比例', difficulty: 2, keywords: ['反比例', '乘积一定', 'xy=k'], concept: '理解反比例的意义：两种相关联的量，乘积一定', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p6-70'] },
          { id: 'p6-72', name: '用比例解决问题', difficulty: 2, keywords: ['解决问题', '判断比例', '列比例'], concept: '学会判断正反比例关系，用比例知识解决问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-67', 'p6-70', 'p6-71'] }
        ]
      },
      {
        id: 'ch6-13', title: '数学广角——鸽巢问题', icon: '🎯',
        points: [
          { id: 'p6-73', name: '鸽巢问题（抽屉原理）', difficulty: 2, keywords: ['鸽巢原理', '抽屉', '至少'], concept: '理解鸽巢问题的基本原理：n+1个物体放入n个抽屉，至少有一个抽屉有2个', questionTypes: ['选择', '判断', '填空'], relatedPoints: ['p6-74'] },
          { id: 'p6-74', name: '用鸽巢原理分析问题', difficulty: 2, keywords: ['分析', '至少', '推断'], concept: '学会用鸽巢原理分析问题，判断"至少"的情况', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-73'] },
          { id: 'p6-75', name: '鸽巢原理的变式问题', difficulty: 3, keywords: ['变式', '推广', '灵活'], concept: '解决鸽巢原理的变式问题，灵活运用原理', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-73', 'p6-74'] },
          { id: 'p6-76', name: '鸽巢原理的逆向应用', difficulty: 3, keywords: ['逆向', '最少', '推断'], concept: '运用鸽巢原理进行逆向推断', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-73', 'p6-74'] },
          { id: 'p6-77', name: '鸽巢原理在生活中的应用', difficulty: 2, keywords: ['生活应用', '分组', '比赛'], concept: '体会鸽巢原理在分组、比赛等生活场景中的应用', questionTypes: ['选择', '判断'], relatedPoints: ['p6-73', 'p6-74'] },
          { id: 'p6-78', name: '逻辑推理训练', difficulty: 3, keywords: ['逻辑推理', '证明', '数学思维'], concept: '通过鸽巢问题训练逻辑推理和数学证明能力', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-73', 'p6-75'] }
        ]
      },
      {
        id: 'ch6-14', title: '整理和复习', icon: '📚',
        points: [
          { id: 'p6-79', name: '数与代数', difficulty: 2, keywords: ['数的认识', '运算', '方程'], concept: '系统整理小学阶段数与代数的知识：整数、小数、分数、百分数、方程', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-1', 'p6-13', 'p6-31', 'p6-49'] },
          { id: 'p6-80', name: '图形与几何', difficulty: 2, keywords: ['平面图形', '立体图形', '面积', '体积'], concept: '系统整理图形与几何的知识：平面图形的面积和立体图形的体积', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-25', 'p6-61'] },
          { id: 'p6-81', name: '统计与概率', difficulty: 2, keywords: ['统计图', '可能性', '数据分析'], concept: '系统整理统计与概率的知识：各类统计图和可能性', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-37', 'p6-73'] },
          { id: 'p6-82', name: '综合与实践', difficulty: 2, keywords: ['综合', '实践', '应用'], concept: '综合运用所学知识解决实际问题', questionTypes: ['选择', '填空', '解答'], relatedPoints: ['p6-79', 'p6-80', 'p6-81'] },
          { id: 'p6-83', name: '数学思想方法', difficulty: 2, keywords: ['转化', '数形结合', '模型'], concept: '回顾小学阶段的数学思想方法：转化、数形结合、模型等', questionTypes: ['选择', '判断'], relatedPoints: ['p6-79', 'p6-80'] },
          { id: 'p6-84', name: '解题策略总结', difficulty: 2, keywords: ['策略', '方法', '总结'], concept: '总结小学阶段的解题策略和方法', questionTypes: ['选择', '判断', '解答'], relatedPoints: ['p6-79', 'p6-80', 'p6-81'] }
        ]
      }
    ]
  }
};


  