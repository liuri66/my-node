import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // 动态路由
    {
      path:'/dongtai/:id',
      component: () => import('../views/dongtai.vue')
    },
    {
      path:'/q',
      component: () => import('../views/query.vue')
    },
    {
      path:'/one',
      component: () => import('../views/one.vue')
    },
    {
      path:'/homefive:id',
      name: 'homefive',
      component: () => import('../views/homefive.vue')
    },
    {
      path:'/homesix/:id',
      name: 'homesix',
      component: () => import('../views/homesix.vue')
    },
    {
      path:'/replace',
      name: 'replace',
      component: () => import('../views/replace.vue')
    },
    {
      path:'/home2',
      name: 'home2',
      component: () => import('../views/home2.vue')
    }
    ,
    {
      path:'/home3',
      name: 'home3',
      component: () => import('../views/home3.vue')
    }
    ,
    {
      path:'/home4',
      name: 'home4',
      component: () => import('../views/home4.vue')
    }
  ]
})

export default router
