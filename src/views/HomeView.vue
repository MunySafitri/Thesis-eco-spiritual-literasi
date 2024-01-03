<template>
  <div>
    <Navbar />
    <Overview />
    <Informasi/>
    <Kegiatan/>
    <Komponen/>
    <features />
    <Order/>
    <Footer/>
  </div>
</template>
<script >
// @ is an alias to /src
import Navbar from '@/components/Layouts/Navbar'
import Footer from '@/components/Layouts/Footer'
import Overview from '../components/Overview.vue'
import Features from '../components/Features.vue'
import Informasi from '../components/InformasiUmum.vue'
import Order from '../components/Order.vue'
import Kegiatan from '../components/KegiatanPembelajaran.vue'
import Komponen from '../components/KomponenInti.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Overview,
    Informasi,
    Footer,
    Features,
    Komponen,
    Kegiatan,
    Order,
  }
}
</script>
