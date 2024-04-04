<!-- eslint-disable prettier/prettier -->

<template>
  <nav toggleable="lg"
    :class="[
      'main-navbar navbar navbar-expand-md navbar-light',
      { 'is-sticky': isSticky },
    ]"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          class="black-logo"
          style="height: 50px"
          src="../../assets/img/logo.png"
          alt="Logo"
        />
      </router-link>

      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

      <div
        class="navbar-toggler"
        @click="active = !active"
        :aria-pressed="active ? 'true' : 'false'"
        v-bind:class="{ active: button_active_state }"
        v-on:click="button_active_state = !button_active_state"
      >
        <i class="bi bi-list"></i>
        <i class="bi bi-x"></i>
      </div>

      <div :class="{ 'collapse navbar-collapse': true, toggler: active }">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              @click="scroll('Overview')"
              href="javascript:void(0)"
              >Overview</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="scroll('Informasi')"
              href="javascript:void(1)"
              >Informasi Umum
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="scroll('P5')" href="javascript:void(6)"
              >P5
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="scroll('Komponen')"
              href="javascript:void(5)"
              >Komponen Inti</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="scroll('Kegiatan')"
              href="javascript:void(2)"
              >Kegiatan Pembelajaran</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="scroll('Features')"
              href="javascript:void(3)"
              >Features</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="scroll('Order')"
              href="javascript:void(4)"
              >Assessment</a
            >
          </li>
          <li @click="logout" class="nav-item">
            <a
              class="nav-link"
              >Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import router from '@/router'

// import AppHeaderDropdownAccnt from '@/Pertemuan1/components/AppHeaderDropdownAccnt.vue'

export default {
  name: 'AppNavbar',
  components: {
    // AppHeaderDropdownAccnt,
  },
  data() {
    return {
      isSticky: false,
      active: false,
      button_active_state: false,
    }
  },
  mounted() {
    const that = this
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY
      if (scrollPos >= 100) {
        that.isSticky = true
      } else {
        that.isSticky = false
      }
    })
  },
  methods: {
    logout() {
      localStorage.clear()
      router.push({ name: 'Login' })
    },
    scroll(refName) {
      const element = document.getElementById(refName)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
</script>
