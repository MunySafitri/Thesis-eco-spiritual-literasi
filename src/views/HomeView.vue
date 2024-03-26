<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <Preloader v-if="isLoading" />
    <Navbar />
    <Overview />
    <Informasi />
    <ProfilPancasila/>
    <Komponen />
    <Kegiatan />
    <features />
    <Order />
    <Futer />
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import Preloader from '@/components/Layouts/Preloader'
// @ is an alias to /src
import Navbar from '@/components/Layouts/Navbar.vue'
import Futer from '@/components/Layouts/Footer.vue'
import Overview from '@/components/Overview.vue'
import Features from '@/components/Features.vue'
import Informasi from '@/components/InformasiUmum.vue'
import Order from '@/components/Order.vue'
import Kegiatan from '@/components/KegiatanPembelajaran.vue'
import Komponen from '@/components/KomponenInti.vue'
import ProfilPancasila from '@/components/P5.vue'

export default {
  name: 'HomeView',
  components: {
    Preloader,
    Navbar,
    Overview,
    Informasi,
    Futer,
    Features,
    Komponen,
    Kegiatan,
    Order,
    ProfilPancasila,
  },
  data() {
      return {
          isLoading: true
      }
  },
  mounted() {
      setTimeout(() => {
          this.isLoading = false
      }, 2000)
  }
}
</script>
