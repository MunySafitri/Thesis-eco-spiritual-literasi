<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <div id="Overview" class="overview-area">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="overview-content">
            <div class="card">
              <!-- <span class="sub-title"
                >Selamat Belajar & Jangan Lupa Berdo'a</span
              > -->
              <center>
                <h1>E-Modul Siklus</h1>
                <h1>Hidrology</h1>
                <br />
                <h2>Periode 2023-2024</h2>
              </center>
            </div>
          </div>
          <center>
            <RouterLink to="/login">
              <div
                class="d-grid gap-2 col-6 mx-auto"
                style="padding-bottom: 10px"
              >
                <CButton color="primary">Registration</CButton>
              </div>
            </RouterLink>
            <RouterLink to="/pretest">
              <div
                class="d-grid gap-2 col-6 mx-auto"
                style="padding-bottom: 10px"
              >
                <CButton color="primary">Pretest</CButton>
              </div>
            </RouterLink>
            <RouterLink to="/overview">
              <div
                class="d-grid gap-2 col-6 mx-auto"
                style="padding-bottom: 10px"
              >
                <CButton color="primary">Selamat Belajar</CButton>
              </div>
            </RouterLink>
          </center>
        </div>
      </div>
    </div>
    <Futer />
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import Futer from '@/components/Layouts/Footer.vue'
export default {
  name: 'AppTampilan',
  components: {
    Futer,
  },
  data() {
    return {
      time: 0,
    }
  },
}
</script>
