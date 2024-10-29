import Vue from 'vue'
import VueRouter from 'vue-router'
import pages from './pages.js'
import vuex from '@/store/index.js'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue'),
    redirect: '/home',
    children: pages,
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.NODE_ENV === 'production' ? '/pivot/' : process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path != '/' && to.path != '/login') {
    if (vuex.state.login) {
      next();
    } else {
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
})

export default router
