<!-- eslint-disable prettier/prettier -->

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid">
    <router-link class="navbar-brand" to="/">
      <img class="black-logo" style="height: 50px" src="../../assets/img/logo.png" alt="Logo" />
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!-- <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li> -->
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav d-flex justify-content-sm-end ">

          <li class="nav-item">
            <a class="nav-link">{{ username }}</a>
          </li>
          <li @click="logout" class="nav-item">
            <a class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import router from '@/router'
export default {
  name: 'AppNavbarPretest',

  data() {
    return {
      isSticky: false,
      active: false,
      button_active_state: false,
      username: JSON.parse(localStorage.getItem('user'))
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
