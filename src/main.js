import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsExample from '@/Pertemuan1/components/DocsExample'

import BootstrapVue3 from 'bootstrap-vue-3'
//validasi
import Vuelidate from 'vuelidate'
// import VuelidateErrorExtractor, { templates } from 'vuelidate-error-extractor' //IMPORT VuelidateErrorExtractor
import { ValidationProvider, ValidationObserver } from 'vee-validate'
// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/antd.css'
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net'

import '@/assets/style.css'

const app = createApp(App)
app.use(store)
// untuk validasi
app.use(Vuelidate)
app.config.productionTip = false
DataTable.use(DataTablesCore)

// var cors = require('cors')
// const corsOptions = {
//   origin: '*',
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// }
// app.use(cors(corsOptions))
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsExample', DocsExample)
app.component('ValidationObserver', ValidationObserver)
app.component('ValidationProvider', ValidationProvider)
app.use(BootstrapVue3)
// app.use(VueSlider)

app.mount('#app')
