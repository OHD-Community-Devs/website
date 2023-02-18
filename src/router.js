import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'

import Home from './views/home.vue'
import PrivacyPolicy from './views/privacy-policy.vue'
import './style.css'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'PrivacyPolicy',
    path: '/privacy-policy',
    component: PrivacyPolicy
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const head = createHead()

export { router, head }
