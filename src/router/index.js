import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/Pertemuan1/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    redirect: '/overview',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: () => import('@/views/HomeView.vue'),
      },
      // {
      //   path: 'pretest',
      //   name: 'Pretest',
      //   // component: () => import('@/components/Pretes.vue'),
      //   //diganti semnetara dengan contoh kognitif
      //   component: () => import('@/components/Test/Kognitif.vue'),
      // },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('@/components/Admin/admin.vue'),
      },
      {
        path: 'pretest',
        name: 'Pretest',
        component: () => import('@/components/Pretest/Base.vue'),
      },
      {
        path: 'kognitif-pretest',
        name: 'KognitifPretest',
        component: () => import('@/components/Pretest/Kognitif.vue'),
      },
      {
        path: 'ppl-pretest',
        name: 'PPLPretest',
        component: () => import('@/components/Pretest/Ppl.vue'),
      },
      {
        path: 'spritual-pretest',
        name: 'SpritualPretest',
        component: () => import('@/components/Pretest/Spritual.vue'),
      },
      {
        path: 'posttest',
        name: 'Posttest',
        component: () => import('@/components/Posttest/Base.vue'),
      },
      {
        path: 'kognitif-posttest',
        name: 'KognitifPosttest',
        component: () => import('@/components/Posttest/Kognitif.vue'),
      },
      {
        path: 'ppl-posttest',
        name: 'PPLPosttest',
        component: () => import('@/components/Posttest/Ppl.vue'),
      },
      {
        path: 'spritual-posttest',
        name: 'SpritualPosttest',
        component: () => import('@/components/Posttest/Spritual.vue'),
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
      {
        path: '/coba',
        name: 'Coba',
        component: () => import('@/components/Coba.vue'),
      },
    ],
  },
  {
    path: '/pertemuan1',
    name: 'Pertemuan1',
    component: DefaultLayout,
    redirect: '/pertemuan1/fenomena',
    children: [
      {
        path: '/pertemuan1/fenomena',
        name: 'Fenomena-hujan',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/pertemuan1/fenomena',
        children: [
          {
            path: '/pertemuan1/fenomena',
            name: 'Fenomena-hujan',
            component: () => import('@/Pertemuan1/Fenomena.vue'),
          },
          {
            path: '/pertemuan1/manfaat-hujan',
            name: 'Manfaat-Hujan',
            component: () => import('@/Pertemuan1/ManfaatHujan.vue'),
          },
          {
            path: '/pertemuan1/siklus-hydrology',
            name: 'Siklus-hydrology',
            component: () => import('@/Pertemuan1/SiklusHydrologi.vue'),
          },
          {
            path: '/pertemuan1/jenis-siklus',
            name: 'Jenis-siklus',
            component: () => import('@/Pertemuan1/JenisSiklus.vue'),
          },
          {
            path: '/pertemuan1/manfaat-siklus',
            name: 'Manfaat-Siklus',
            component: () => import('@/Pertemuan1/ManfaatSiklus.vue'),
          },
          {
            path: '/pertemuan1/penanaman-sikap',
            name: 'Penanaman-sikap',
            component: () => import('@/Pertemuan1/PenanamanSikap.vue'),
          },
          {
            path: '/pertemuan1/penutup',
            name: 'Penutup',
            component: () => import('@/Pertemuan1/Penutup.vue'),
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
  const isAdmin = JSON.parse(localStorage.getItem('isAdmin'))
  const isPosttest = JSON.parse(localStorage.getItem('isPosttest'))
  // const isPretest = false

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
    if (isAdmin) {
      next({ name: 'Admin' })
    } else {
      //nnti kita buat kondisional jika user blum pretest dan sudah pretest, tricky ny di filter nnti trus akan pop up array  pretest
      next({ name: 'Overview' }) // kita buat kondisional semnetara ke Pretest dulu
    }
  }
  if ((to.name !== 'Login' || to.name !== 'Register') && !isAuthenticated) {
    //buat kondisional jika user blum pretest dan sudah pretest, tricky ny di filter nnti trus akan pop up array  pretest
    next({ name: 'Login' }) // kita buat kondisional semnetara ke Pretest dulu
  }
  if (to.name === 'Overview' && !isPretest) {
    if (isAdmin) {
      next({ name: 'Admin' })
    } else {
      next({ name: 'Pretest' })
    }
  }
  if (
    (to.name === 'Pretest' ||
      to.name === 'KognitifPretest' ||
      to.name === 'PPLPretest' ||
      to.name === 'SpritualPretest') &&
    isAdmin
  ) {
    next({ name: 'Admin' })
  }
  if (
    (to.name === 'Pretest' ||
      to.name === 'KognitifPretest' ||
      to.name === 'PPLPretest' ||
      to.name === 'SpritualPretest') &&
    isPretest
  ) {
    if (isAdmin) {
      next({ name: 'Admin' })
    } else {
      // isPretest = true
      next({ name: 'Overview' })
    }
  }
  if (
    (to.name === 'Posttest' ||
      to.name === 'KognitifPosttest' ||
      to.name === 'PPLPosttest' ||
      to.name === 'SpritualPosttest') &&
    !isPretest
  ) {
    if (isAdmin) {
      next({ name: 'Admin' })
    } else {
      // isPretest = tru
      next({ name: 'Pretest' })
    }
  }
  if (
    (to.name === 'Posttest' ||
      to.name === 'KognitifPosttest' ||
      to.name === 'PPLPosttest' ||
      to.name === 'SpritualPosttest') &&
    isAdmin
  ) {
    next({ name: 'Admin' })
  }
  if (
    (to.name === 'Posttest' ||
      to.name === 'KognitifPosttest' ||
      to.name === 'PPLPosttest' ||
      to.name === 'SpritualPosttest') &&
    isPosttest
  ) {
    if (isAdmin) {
      next({ name: 'Admin' })
    }
    // isPretest = true
    else {
      next({ name: 'Overview' })
    }
  } else next()
})

export default router
