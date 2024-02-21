import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminsView from '../views/AdminsView.vue'
import BanlistView from '../views/BanlistView.vue'
import ForumView from '../views/ForumView.vue'
import BlogDetailView from '../views/BlogDetailView.vue';
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForgotpwView from '../views/ForgotpwView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/prihlasit',
      name: 'login',
      component: LoginView
    },
    {
      path: '/registrovat',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/zabudnute-heslo',
      name: 'forgotpw',
      component: ForgotpwView
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
