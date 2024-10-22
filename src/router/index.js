import Vue from 'vue'
import VueRouter from 'vue-router'
import pages from './pages.js'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '*',
  //   name: 'not-found',
  //   component: () => import('../views/not-found.vue')
  // },
  {
    path: '*',
    name: 'index',
    component: () => import('../views/index.vue'),
    redirect: '/home',
    children: pages,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/pivot/dist/' : process.env.BASE_URL,
  routes
})

export default router
