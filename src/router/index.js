import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/Main.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path:'/project',
          name: 'project',
        },
        {
          path:'/project/:slug',
          name: 'project.detaail',
          component: () => import('../views/project/ProjectDetail.vue'),
        }
      ],
    },
  ],
});

export default router;
