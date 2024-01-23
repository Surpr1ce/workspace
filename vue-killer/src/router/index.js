import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminsView from '../views/AdminsView.vue'
import BanlistView from '../views/BanlistView.vue'
import ForumView from '../views/ForumView.vue'
import BlogDetailView from '../views/BlogDetailView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admini',
      name: 'admins',
      component: AdminsView
    },
    {
      path: '/forum',
      name: 'forum',
      component: ForumView
    },
    {
      path: '/banlist',
      name: 'banlist',
      component: BanlistView
    },
    {
      path: '/blog/:id',
      name: 'blogDetail',
      component: BlogDetailView,
    }
  ]
})

export default router
