import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import AbsensiSiswa from '../components/AbsensiSiswa.vue'
import DataGuru from '../components/DataGuru.vue'
import DataSiswa from '../components/DataSiswa.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/absensi-siswa',
      name: 'AbsensiSiswa',
      component: AbsensiSiswa
    },
    {
      path: '/data-guru',
      name: 'DataGuru',
      component: DataGuru
    },
    {
      path: '/data-siswa',
      name: 'DataSiswa',
      component: DataSiswa
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
