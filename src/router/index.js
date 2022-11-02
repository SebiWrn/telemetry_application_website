import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SilentSSO from '@/components/SilentSSO'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/silent-check-sso',
    component: SilentSSO
  },
  {
    path: '/impressum',
    name: 'impressum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "impressum" */ '@/views/ImpressumView.vue')
  },
  {
    path: '/roadmap',
    name: 'roadmap',
    component: () => import(/* webpackChunkName: "roadmap" */ '@/views/RoadmapView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import(/* webpackChunkName: "roadmap" */ '@/views/PrivacyPolicy.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "roadmap" */ '@/views/Profile.vue'),
    children: [
      {
        path: '',
        redirect: {name: 'profile-dashboard'},
      },
      {
        path: 'dashboard',
        name: 'profile-dashboard',
        component: () => import(/* webpackChunkName: "roadmap" */ '@/components/ProfileDashboard.vue')
      },
      {
        path: 'settings',
        name: 'profile-settings',
        component: () => import(/* webpackChunkName: "roadmap" */ '@/components/Settings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
