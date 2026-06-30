// 知识剧场 - 完整知识框架（人教版课标对齐）
// 各学科按课本目录顺序编排，每个知识点包含AI生成元数据
import { mathKnowledge } from './mathKnowledge'
import { chineseKnowledge } from './chineseKnowledge'
import { englishKnowledge } from './englishKnowledge'
import { scienceKnowledge } from './scienceKnowledge'
import { historyKnowledge } from './historyKnowledge'

export const knowledgeMap = {
  math: mathKnowledge,
  chinese: chineseKnowledge,
  english: englishKnowledge,
  science: scienceKnowledge,
  history: historyKnowledge,

  subjects: [
    { id: 'math', name: '数学', icon: '🔢', color: '#667eea', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { id: 'chinese', name: '语文', icon: '📝', color: '#f5576c', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    { id: 'english', name: '英语', icon: '🌍', color: '#4facfe', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    { id: 'science', name: '科学', icon: '🔬', color: '#43e97b', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
    { id: 'history', name: '历史', icon: '📜', color: '#fa709a', gradient: 'linear-gradient(135deg, #fa709a, #fee140)' }
  ],
  grades: [
    { id: '1', name: '一年级', age: '6-7岁' },
    { id: '2', name: '二年级', age: '7-8岁' },
    { id: '3', name: '三年级', age: '8-9岁' },
    { id: '4', name: '四年级', age: '9-10岁' },
    { id: '5', name: '五年级', age: '10-11岁' },
    { id: '6', name: '六年级', age: '11-12岁' }
  ]
}

/**
 * 获取章节的上下册信息
 * @param {string} subjectId - 学科id (math/chinese/english/science/history)
 * @param {string} chapterId - 章节id (如 ch1-1, chs2-3, chh3-5)
 * @param {number} grade - 年级 (1-6)
 * @returns {string} '上册' 或 '下册'
 *
 * 已有 semester 字段的章节优先使用该字段，否则自动推断
 */
export function getChapterSemester(subjectId, chapterId, grade) {
  // 如果章节对象已有 semester 字段，直接使用
  const subjectData = knowledgeMap[subjectId]
  const gradeData = subjectData?.[grade]
  if (gradeData?.chapters) {
    const ch = gradeData.chapters.find(c => c.id === chapterId)
    if (ch?.semester) return ch.semester
  }

  // 没有 semester 字段则自动推断
  // 科学(教科版): 每年级8章，前4章上册，后4章下册
  if (subjectId === 'science') {
    const num = parseInt(chapterId.replace('chs', '').split('-')[1])
    return num <= 4 ? '上册' : '下册'
  }
  // 历史: 每年级8章，前4章上册，后4章下册
  if (subjectId === 'history') {
    const num = parseInt(chapterId.replace('chh', '').split('-')[1])
    return num <= 4 ? '上册' : '下册'
  }
  // 数学: 每年级章数不同，根据内置知识推断
  if (subjectId === 'math') {
    const num = parseInt(chapterId.replace('ch', '').split('-')[1])
    const boundaries = {
      '1': 8, '2': 6, '3': 9, '4': 8, '5': 7, '6': 8
    }
    const boundary = boundaries[grade]
    return num <= boundary ? '上册' : '下册'
  }
  // 语文/英语已在数据中自带 semester 字段
  // 兜底
  return '上册'
}
