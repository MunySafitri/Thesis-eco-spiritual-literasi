export default [
  {
    component: 'CNavTitle',
    name: 'Pertemuan 1',
  },
  {
    component: 'CNavGroup',
    name: 'Fenomena Hujan',
    to: '/base',
    icon: 'cilRain',
    items: [
      {
        component: 'CNavItem',
        name: 'Elemen daya rusak air',
        to: '/pertemuan1/elementair',
      },
      {
        component: 'CNavItem',
        name: 'Element Daya Guna Air',
        to: '/pertemuan1/manfaat',
      },
      // {
      //   component: 'CNavItem',
      //   name: 'Element Konservasi',
      //   to: '/base/cards',
      // },
      // {
      //   component: 'CNavItem',
      //   name: 'Tables',
      //   to: '/base/tables',
      // },
      // {
      //   component: 'CNavItem',
      //   name: 'Tooltips',
      //   to: '/base/tooltips',
      // },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Siklus Air',
    to: '/base',
    icon: 'cilRecycle',
    items: [
      {
        component: 'CNavItem',
        name: 'Penjelasan siklus air',
        to: '/base/cards',
      },
      {
        component: 'CNavItem',
        name: 'Tahapan siklus air',
        to: '/base/tables',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'Manfaat Siklus Air',
    to: '/base/Navs',
    icon: 'cilTask',
  },
  {
    component: 'CNavItem',
    name: 'Element Konservasi Air',
    to: '/pertemuan1/penutup',
    icon: 'cilShareAlt',
  },
  {
    component: 'CNavGroup',
    name: 'Penutup',
    to: '/base',
    icon: 'cilDrop',
    items: [
      {
        component: 'CNavItem',
        name: 'Rangkuman',
        to: '/base/cards',
      },
      {
        component: 'CNavItem',
        name: 'Kesimpulan',
        to: '/base/tables',
      },
      {
        component: 'CNavItem',
        name: 'Saran',
        to: '/base/tooltips',
      },
    ],
  },
]
