import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Tampilan.vue'
import HomeView from '../views/HomeView.vue'
import Overview from '../components/Overview.vue'; 
import Features from '../components/Features.vue';
import Informasi from '../components/InformasiUmum.vue';
import Order from '../components/Order.vue';
import Kegiatan from '../components/KegiatanPembelajaran.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: HomeView
  },
  {
    path: '/Overview',
    name: 'overview',
    component: Overview
  },
  {
    path: '/Informasi', 
    name: 'Informasi',
    component: Informasi 
  },
  {
    path: '/Features', 
    name: 'Features',
    component: Features 
  },
  {
    path: '/Order', 
    name: 'Order',
    component: Order 
  },
  {
    path: '/Kegiatan', 
    name: 'Kegiatan',
    component: Kegiatan 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
})

export default router;
