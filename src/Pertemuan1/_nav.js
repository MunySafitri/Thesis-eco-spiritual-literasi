export default [
  {
    component: 'CNavTitle',
    name: 'Pertemuan 1',
  },
  {
    component: 'CNavGroup',
    name: 'Fenomena Hujan',
    to: '/base',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'Elemen daya rusak air',
        to: '/pertemuan1/elementair',
      },
      {
        component: 'CNavItem',
        name: 'Manfaat Hujan',
        to: '/pertemuan1/manfaat',
      },
      {
        component: 'CNavItem',
        name: 'Element Konservasi',
        to: '/base/cards',
      },
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
    component: 'CNavItem',
    name: 'Penutup',
    to: '/pertemuan1/penutup',
    icon: 'cil-chart-pie',
  },
  {
    component: 'CNavItem',
    name: 'Kesimpulan',
    to: '/pertemuan1/kesimpulan',
    icon: 'cil-chart-pie',
  },
]
