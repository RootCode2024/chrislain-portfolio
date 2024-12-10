/**
 * Fichier de configuration du router
 * @module src/router/index
 * @author Chrislain AVOCEGAN <chrislainavocegan@gmail.com>
 * @copyright 2024 Chrislain AVOCEGAN
 * @license MIT
 */
import { createRouter, createWebHistory } from 'vue-router'

/**
 * Tableau des routes
 * @type {Object[]}
 */
const routes = [
  { path: '/', component: () => import('../views/HomeView.vue') },
  { path: '/contact', component: () => import('../views/ContactView.vue') },
  { path: '/resume', component: () => import('../views/ResumeView.vue') },
  { path: '/about', component: () => import('../views/AboutView.vue') },
  { path: '/posts', component: () => import('../views/Blog/PostsView.vue') },
  { path: '/post/:id', component: () => import('../views/Blog/PostDetailView.vue'), props: true },
  { path: '/tag/:id', component: () => import('../views/Blog/AllTagsView.vue'), props: true },
  { path: '/settings', component: () => import('../views/Dashboard/SettingsView.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') },
]

/**
 * Création du router
 * @type {Object}
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 }
  },
})

export default router



