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
