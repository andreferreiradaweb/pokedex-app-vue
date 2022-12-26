import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from '@/pages/HomePage/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router