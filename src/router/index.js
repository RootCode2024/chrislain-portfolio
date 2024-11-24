import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import ResumeView from '../views/ResumeView.vue';
import NotFound from '../views/NotFound.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Restaure la position sauvegardée (lors d'un retour ou navigation arrière)
    }
    return { top: 0 }; // Scroll en haut de la page
  },
});

export default router;
