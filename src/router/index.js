import { createRouter, createWebHistory } from 'vue-router'

import home from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'More',
      component: home
    }, 
    {
      path: '/1',
      name: 'Services4',
      component: () => import('../views/ser.vue')
    }, 
    {
      path: '/2',
      name: 'Services5',
      component: () => import('../views/serr.vue')
    }, 
    {
      path: '/3',
      name: 'Services6',
      component: () => import('../views/serrr.vue')
    }, 
  ]
})


export default router