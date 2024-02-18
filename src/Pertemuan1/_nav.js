export default [
  {
    component: 'CNavTitle',
    name: 'Pertemuan 1',
  },
  {
    component: 'CNavGroup',
    name: 'Fenomena Hujan',
    to: '/pertemuan1',
    icon: 'cilRain',
    items: [
      {
        component: 'CNavItem',
        name: 'Elemen daya rusak air',
        to: 'pertemuan1/element-daya-rusak-air',
      },
      {
        component: 'CNavItem',
        name: 'Element Daya Guna Air',
        to: '/pertemuan1/element-daya-guna-air',
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
    to: '/pertemuan1',
    icon: 'cilRecycle',
    items: [
      {
        component: 'CNavItem',
        name: 'Penjelasan siklus air',
        to: '/pertemuan1/penjelasan-siklus',
      },
      {
        component: 'CNavItem',
        name: 'Tahapan siklus air',
        to: '/pertemuan1/tahapan-siklus',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'Manfaat Siklus Air',
    to: '/pertemuan1/manfaat',
    icon: 'cilTask',
  },
  {
    component: 'CNavItem',
    name: 'Element Konservasi Air',
    to: '/pertemuan1/elemen-konservasi',
    icon: 'cilShareAlt',
  },
  {
    component: 'CNavGroup',
    name: 'Penutup',
    to: '/pertemuan1',
    icon: 'cilDrop',
    items: [
      {
        component: 'CNavItem',
        name: 'Rangkuman',
        to: '/pertemuan1/rangkuman',
      },
      {
        component: 'CNavItem',
        name: 'Kesimpulan',
        to: '/pertemuan1/kesimpulan',
      },
      {
        component: 'CNavItem',
        name: 'Saran',
        to: '/pertemuan1/saran',
      },
    ],
  },
]
