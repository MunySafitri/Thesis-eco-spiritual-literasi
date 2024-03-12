import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/Pertemuan1/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/components/Home.vue'),
      },
      {
        path: 'overview',
        name: 'Overview',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'pretest',
        name: 'Pretest',
        // component: () => import('@/components/Pretes.vue'),
        //diganti semnetara dengan contoh kognitif
        component: () => import('@/components/Test/Kognitif.vue'),
      },
      {
        path: 'kognitif',
        name: 'Kognitif',
        component: () => import('@/components/Test/Kognitif.vue'),
      },
      {
        path: 'ppl',
        name: 'PPL',
        component: () => import('@/components/Test/Ppl.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login.vue'),
      },
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404.vue'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register.vue'),
      },
      {
        path: '/logout',
        name: 'Logout',
        component: () => import('@/views/pages/Logout.vue'),
      },
    ],
  },
  {
    path: '/pertemuan1',
    name: 'Pertemuan1',
    component: DefaultLayout,
    redirect: '/pertemuan1/element-daya-rusak-air',
    children: [
      {
        path: '/pertemuan1/element-daya-rusak-air',
        name: 'Daya-Rusak',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/pertemuan1/element-daya-rusak-air',
        children: [
          {
            path: '/pertemuan1/element-daya-rusak-air',
            name: 'Daya-Rusak',
            component: () => import('@/Pertemuan1/Elemendayarusakair.vue'),
          },
          {
            path: '/pertemuan1/element-daya-guna-air',
            name: 'Daya-Guna',
            component: () => import('@/Pertemuan1/Elemendayagunaair.vue'),
          },
          {
            path: '/pertemuan1/penjelasan-siklus',
            name: 'Penjelasan-Siklus',
            component: () => import('@/Pertemuan1/Penjelasansiklus.vue'),
          },
          {
            path: '/pertemuan1/tahapan-siklus',
            name: 'Tahapan-Siklus',
            component: () => import('@/Pertemuan1/Tahapansiklus.vue'),
          },
          {
            path: '/pertemuan1/manfaat',
            name: 'Manfaat',
            component: () => import('@/Pertemuan1/Manfaat.vue'),
          },
          {
            path: '/pertemuan1/elemen-konservasi',
            name: 'Elemen-Konservasi',
            component: () => import('@/Pertemuan1/Elemenkonservasi.vue'),
          },
          {
            path: '/pertemuan1/rangkuman',
            name: 'Rangkuman',
            component: () => import('@/Pertemuan1/Rangkuman.vue'),
          },
          {
            path: '/pertemuan1/kesimpulan',
            name: 'Kesimpulan',
            component: () => import('@/Pertemuan1/Kesimpulan.vue'),
          },
          {
            path: '/pertemuan1/saran',
            name: 'Saran',
            component: () => import('@/Pertemuan1/Saran.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

//navigation guard
// let isPretest = false // ini perlu kita buat dalam field "ispretest" di user nya inisialisasi false smua untuk pengguna baru
router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('isLogin'))
  const isPretest = JSON.parse(localStorage.getItem('isPretest'))

  if (to.name === 'Login' && !isAuthenticated) {
    next()
  }
  if (to.name === 'Register' && !isAuthenticated) {
    next()
  }
  if (
    (to.name === 'Login' && isAuthenticated) ||
    (to.name === 'Register' && isAuthenticated)
  ) {
    //nnti kita buat kondisional jika user blum pretest dan sudah pretest, tricky ny di filter nnti trus akan pop up array  pretest
    next({ name: 'Overview' }) // kita buat kondisional semnetara ke Pretest dulu
  }
  if ((to.name !== 'Login' || to.name !== 'Register') && !isAuthenticated) {
    //buat kondisional jika user blum pretest dan sudah pretest, tricky ny di filter nnti trus akan pop up array  pretest
    next({ name: 'Login' }) // kita buat kondisional semnetara ke Pretest dulu
  }
  if (to.name === 'Overview' && !isPretest) {
    next({ name: 'Pretest' })
  }
  if (to.name === 'Pretest' && isPretest) {
    // isPretest = true
    next({ name: 'Overview' })
  }
  // if (
  //   (to.name !== 'Login' || to.name !== 'Register') &&
  //   isAuthenticated &&
  //   !isPretest
  // ) {
  //   //buat kondisional jika user blum pretest dan sudah pretest, tricky ny di filter nnti trus akan pop up array  pretest
  //   next({ name: 'Pretest' }) // kita buat kondisional semnetara ke Pretest dulu
  // }
  // if (to.name === 'Login' && isAuthenticated) next({ name: 'Overview' })
  else next()
})

export default router
