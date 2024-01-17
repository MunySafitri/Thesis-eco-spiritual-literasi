import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    redirect: '/login',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
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
    path: '/dashboard',
    name: 'Dashboard',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/theme',
        name: 'Theme',
        redirect: '/theme/Colors',
      },
      {
        path: '/theme/colors',
        name: 'Colors',
        component: () => import('@/views/theme/Colors.vue'),
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
      },
      {
        path: '/profil',
        name: 'Profil',
        component: () => import('@/views/Profil.vue'),
      },
      {
        path: '/aws',
        name: 'Aws',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/aws/new-order-aws',
        children: [
          {
            path: '/aws/new-order-aws',
            name: 'New Order Aws',
            component: () => import('@/views/aws/NewOrderAws.vue'),
          },
          {
            path: '/aws/ordered-aws',
            name: 'Ordered Aws',
            component: () => import('@/views/aws/OrderedAws.vue'),
          },
        ],
      },
      {
        path: '/kubernetes',
        name: 'Kubernetes',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/kubernetes/new-order-kubernetes',
        children: [
          {
            path: '/kubernetes/new-order-kubernetes',
            name: 'New Order Kubernetes',
            component: () => import('@/views/kubernetes/OrderKubernetes.vue'),
          },
          {
            path: '/kubernetes/ordered-kubernetes',
            name: 'Ordered Kubernetes',
            component: () => import('@/views/kubernetes/OrderedKubernetes.vue'),
          },
        ],
      },
      {
        path: '/minio',
        name: 'Minio',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/minio/new-order-minio',
        children: [
          {
            path: '/minio/new-order-minio',
            name: 'New Order Minio',
            component: () => import('@/views/minio/NewOrderMinio.vue'),
          },
          {
            path: '/minio/ordered-minio',
            name: 'Ordered Minio',
            component: () => import('@/views/minio/OrderedMinio.vue'),
          },
          {
            path: '/minio/request-project',
            name: 'Request Project',
            component: () => import('@/views/minio/RequestProject.vue'),
          },
        ],
      },
      {
        path: '/docs',
        name: 'Docs',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/docs/user-guide',
        children: [
          {
            path: '/docs/user-guide',
            name: 'User Guide',
            component: () => import('@/views/docs/UserGuide.vue'),
          },
          {
            path: '/docs/video',
            name: 'Video',
            component: () => import('@/views/docs/Video.vue'),
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

export default router
