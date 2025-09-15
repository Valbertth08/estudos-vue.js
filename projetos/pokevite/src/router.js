import { createRouter, createWebHistory } from 'vue-router'
import Home from './view/HomeView.vue'
import About from './view/AboutView.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
  ]
})


export default router;