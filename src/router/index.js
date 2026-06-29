import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import StoryPlayPage from '../views/StoryPlayPage.vue'
import KnowledgeMapPage from '../views/KnowledgeMapPage.vue'
import ParentSettings from '../views/ParentSettings.vue'
import ProgressPage from '../views/ProgressPage.vue'
import CharacterCreation from '../views/CharacterCreation.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/create', name: 'CharacterCreation', component: CharacterCreation },
  { path: '/play/:grade/:subject/:theme/:mode', name: 'StoryPlay', component: StoryPlayPage },
  { path: '/map/:grade/:subject', name: 'KnowledgeMap', component: KnowledgeMapPage },
  { path: '/parent', name: 'ParentSettings', component: ParentSettings },
  { path: '/progress', name: 'Progress', component: ProgressPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage }
]

const VALID_GRADES = ['1', '2', '3', '4', '5', '6']
const VALID_SUBJECTS = ['math', 'chinese', 'english', 'science', 'history']

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.name === 'StoryPlay') {
    const { grade, subject } = to.params
    if (!VALID_GRADES.includes(grade) || !VALID_SUBJECTS.includes(subject)) {
      return next({ name: 'Home' })
    }
  }
  if (to.name === 'KnowledgeMap') {
    const { grade, subject } = to.params
    if (!VALID_GRADES.includes(grade) || !VALID_SUBJECTS.includes(subject)) {
      return next({ name: 'Home' })
    }
  }
  next()
})

export default router
