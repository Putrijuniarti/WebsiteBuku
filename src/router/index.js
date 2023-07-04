import { createRouter, createWebHistory } from 'vue-router';
// import LandingPage from '../views/LandingPage.vue';
import updateapi from '../views/updateapi.vue';
import BerandaView from '../views/BerandaView.vue';
import allKategori from "@/views/allKategori.vue";
import smuaAnggota from "@/views/smuaAnggota.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BerandaView,
    },
    // {
    //   path: '/updateapi/:kode',
    //   name: 'updateapi',
    //   component: updateapi,
    // },
    {
      path: '/allkategori',
      name: 'kategori',
      component: allKategori,
    },
    {
      path: '/anggota',
      name: 'anggota',
      component: smuaAnggota,
    },
  ],
});

export default router;