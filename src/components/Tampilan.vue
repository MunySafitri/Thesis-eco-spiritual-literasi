<template>
  <div>
    <div id="Overview" class="overview-area">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="overview-content">
            <div class="card">
              <span class="sub-title"
                >Selamat Belajar & Jangan Lupa Berdo'a</span
              >
              <h1>
                E-Modul Siklus Hidrologi Terintegrasi Ayat Al-Qur'an &
                Lingkungan
              </h1>
            </div>
          </div>

          <div class="card">
            <RouterLink to="/dashboard">
              <center><button class="row align-items-center">open registration</button></center>
            </RouterLink>
          </div>
          <div class="card">
            <RouterLink to="/Features">
              <center><button>pretest</button></center>
            </RouterLink>
          </div>
          <div class="card">
            <RouterLink to="/Informasi">
              <center><button>selamat belajar</button></center>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTampilan",

  data() {
    return {
      time: 0,
    };
  },
};
</script>
