import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ResumeView from '../views/ResumeView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   component: null
    // },
    // {
    //   path: '/blog/new',
    //   name: 'blog-new',
    //   component: null
    // },
    // {
    //   path: '/blog/:id',
    //   name: 'blog-detail',
    //   component: null
    // },
    // {
    //   path: '/blog/:id/edit',
    //   name: 'blog-edit',
    //   component: null
    // },
    // {
    //   path: '/blog/:id/delete',
    //   name: 'blog-delete',
    //   component: null
    // },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
