import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ThisIsAbout',
    name: 'ThisIsAbout',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/ThisPage2',
    name: 'ThisPage2',
    component: () => import('../views/ThisPage2View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
