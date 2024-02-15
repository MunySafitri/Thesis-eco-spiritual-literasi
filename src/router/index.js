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
        component: () => import('@/components/Pretes.vue'),
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
    path: '/dashboard',
    name: 'Dashboard',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/Pertemuan1/views/Dashboard.vue'),
      },
      {
        path: '/pertemuan1',
        name: 'Penutup',
        redirect: '/pertemuan1/penutup',
      },
      {
        path: '/pertemuan1/kesimpulan',
        name: 'Kesimpulan',
        component: () => import('@/Pertemuan1/views/charts/Charts.vue'),
      },
      {
        path: '/theme/colors',
        name: 'Colors',
        component: () => import('@/Pertemuan1/views/theme/Colors.vue'),
      },
      {
        path: '/pertemuan1/penutup',
        name: 'Penutup',
        component: () => import('@/Pertemuan1/views/theme/Penutup.vue'),
      },
      {
        path: '/pertemuan1',
        name: 'Pertemuan1',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/pertemuan1/elementair',
        children: [
          {
            path: '/pertemuan1/elementair',
            name: 'Elementair',
            component: () => import('@/Pertemuan1/views/base/Accordion.vue'),
          },
          {
            path: '/pertemuan1/manfaat',
            name: 'Manfaat',
            component: () => import('@/Pertemuan1/views/base/Breadcrumbs.vue'),
          },
          {
            path: '/pertemuan1/cards',
            name: 'Cards',
            component: () => import('@/Pertemuan1/views/base/Cards.vue'),
          },
          {
            path: '/pertemuan1/carousels',
            name: 'Carousels',
            component: () => import('@/Pertemuan1/views/base/Carousels.vue'),
          },
          {
            path: '/pertemuan1/collapses',
            name: 'Collapses',
            component: () => import('@/Pertemuan1/views/base/Collapses.vue'),
          },
          {
            path: '/pertemuan1/list-groups',
            name: 'List Groups',
            component: () => import('@/Pertemuan1/views/base/ListGroups.vue'),
          },
          {
            path: '/pertemuan1/navs',
            name: 'Navs',
            component: () => import('@/Pertemuan1/views/base/Navs.vue'),
          },
          {
            path: '/pertemuan1/paginations',
            name: 'Paginations',
            component: () => import('@/Pertemuan1/views/base/Paginations.vue'),
          },
          {
            path: '/pertemuan1/placeholders',
            name: 'Placeholders',
            component: () => import('@/Pertemuan1/views/base/Placeholders.vue'),
          },
          {
            path: '/pertemuan1/popovers',
            name: 'Popovers',
            component: () => import('@/Pertemuan1/views/base/Popovers.vue'),
          },
          {
            path: '/pertemuan1/progress',
            name: 'Progress',
            component: () => import('@/Pertemuan1/views/base/Progress.vue'),
          },
          {
            path: '/pertemuan1/spinners',
            name: 'Spinners',
            component: () => import('@/Pertemuan1/views/base/Spinners.vue'),
          },
          {
            path: '/bpertemuan1ase/tables',
            name: 'Tables',
            component: () => import('@/Pertemuan1/views/base/Tables.vue'),
          },
          {
            path: '/pertemuan1/tooltips',
            name: 'Tooltips',
            component: () => import('@/Pertemuan1/views/base/Tooltips.vue'),
          },
        ],
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/buttons/standard-buttons',
        children: [
          {
            path: '/buttons/standard-buttons',
            name: 'Buttons',
            component: () => import('@/Pertemuan1/views/buttons/Buttons.vue'),
          },
          {
            path: '/buttons/dropdowns',
            name: 'Dropdowns',
            component: () => import('@/Pertemuan1/views/buttons/Dropdowns.vue'),
          },
          {
            path: '/buttons/button-groups',
            name: 'Button Groups',
            component: () =>
              import('@/Pertemuan1/views/buttons/ButtonGroups.vue'),
          },
        ],
      },
      {
        path: '/forms',
        name: 'Forms',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/forms/form-control',
        children: [
          {
            path: '/forms/form-control',
            name: 'Form Control',
            component: () => import('@/Pertemuan1/views/forms/FormControl.vue'),
          },
          {
            path: '/forms/select',
            name: 'Select',
            component: () => import('@/Pertemuan1/views/forms/Select.vue'),
          },
          {
            path: '/forms/checks-radios',
            name: 'Checks & Radios',
            component: () =>
              import('@/Pertemuan1/views/forms/ChecksRadios.vue'),
          },
          {
            path: '/forms/range',
            name: 'Range',
            component: () => import('@/Pertemuan1/views/forms/Range.vue'),
          },
          {
            path: '/forms/input-group',
            name: 'Input Group',
            component: () => import('@/Pertemuan1/views/forms/InputGroup.vue'),
          },
          {
            path: '/forms/floating-labels',
            name: 'Floating Labels',
            component: () =>
              import('@/Pertemuan1/views/forms/FloatingLabels.vue'),
          },
          {
            path: '/forms/layout',
            name: 'Layout',
            component: () => import('@/Pertemuan1/views/forms/Layout.vue'),
          },
          {
            path: '/forms/validation',
            name: 'Validation',
            component: () => import('@/Pertemuan1/views/forms/Validation.vue'),
          },
        ],
      },
      {
        path: '/icons',
        name: 'Icons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/icons/coreui-icons',
        children: [
          {
            path: '/icons/coreui-icons',
            name: 'CoreUI Icons',
            component: () => import('@/Pertemuan1/views/icons/CoreUIIcons.vue'),
          },
          {
            path: '/icons/brands',
            name: 'Brands',
            component: () => import('@/Pertemuan1/views/icons/Brands.vue'),
          },
          {
            path: '/icons/flags',
            name: 'Flags',
            component: () => import('@/Pertemuan1/views/icons/Flags.vue'),
          },
        ],
      },
      {
        path: '/notifications',
        name: 'Notifications',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/notifications/alerts',
        children: [
          {
            path: '/notifications/alerts',
            name: 'Alerts',
            component: () =>
              import('@/Pertemuan1/views/notifications/Alerts.vue'),
          },
          {
            path: '/notifications/badges',
            name: 'Badges',
            component: () =>
              import('@/Pertemuan1/views/notifications/Badges.vue'),
          },
          {
            path: '/notifications/modals',
            name: 'Modals',
            component: () =>
              import('@/Pertemuan1/views/notifications/Modals.vue'),
          },
        ],
      },
      {
        path: '/widgets',
        name: 'Widgets',
        component: () => import('@/Pertemuan1/views/widgets/Widgets.vue'),
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
