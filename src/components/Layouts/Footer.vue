<!-- eslint-disable prettier/prettier -->
<template>
  <footer class="footer-style-area pt-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-6 col-lg-3">
          <div class="single-footer-widget">
            <div class="footer-logo">
              <a :href="'#'">
                <img src="../../assets/img/logoupimerah.png" alt="Logo" />
              </a>
              <p>
                Supporter.C is a website creation service platform according to
                customer requests
              </p>
              <ul class="footer-social">
                <li>
                  <a :href="''">
                    <i class="bi-facebook" style="padding-left: 1px"></i>
                  </a>
                </li>
                <li>
                  <a :href="''">
                    <i class="bi-twitter" style="padding-left: 1px"></i>
                  </a>
                </li>
                <li>
                  <a :href="''">
                    <i class="bi-linkedin" style="padding-left: 1px"></i>
                  </a>
                </li>
                <li>
                  <a :href="''">
                    <i class="bi-instagram" style="padding-left: 1px"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-2">
          <div class="single-footer-widget ps-3">
            <h3>Supporter.C</h3>
            <ul class="quick-link">
              <li>
                <a @click="scroll('Overview')" :href="'javascript:void(0)'"
                  >Overview</a
                >
              </li>
              <li>
                <a @click="scroll('Features')" :href="'javascript:void(1)'"
                  >Features</a
                >
              </li>
              <li>
                <a @click="scroll('Steps')" :href="'javascript:void(2)'"
                  >How To</a
                >
              </li>
              <li>
                <a @click="scroll('Order')" :href="'javascript:void(3)'"
                  >Order</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-2">
          <div class="single-footer-widget ps-3">
            <h3>Company</h3>
            <ul class="quick-link">
              <li>
                <a :href="'https://www.upi.edu/'" target="_blank"
                  >Universitas Pendidikan Indonesia</a
                >
              </li>
              <li>
                <a :href="'https://www.upi.edu/about'" target="_blank"
                  >About Universitas Pendidikan Indonesia</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-2">
          <div class="single-footer-widget ps-3">
            <h3>About Us</h3>
            <ul class="quick-link">
              <li>
                <a @click="scroll('Overview')" :href="'javascript:void(0)'"
                  >Supporter.C</a
                >
              </li>
              <li>
                <a
                  :href="'https://informatika.usk.ac.id/webinf/'"
                  target="_blank"
                  >Informatika USK</a
                >
              </li>
              <li>
                <a
                  :href="'https://maps.app.goo.gl/hjZuxKQxEbDdYG9e6'"
                  target="_blank"
                  >JL. Syech Abdurrauf No.3, Kopelma Darussalam, Kec. Syiah
                  Kuala, Kota Banda Aceh, Aceh 23111</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="single-footer-widget">
            <h3>Contact Us</h3>
            <ul class="address-info">
              <li>
                <i class="bi-telephone-outbound"></i>
                <a :href="'tel:+6282367555945'" target="_blank"
                  >+62 823 6755 5945</a
                >
              </li>
              <li>
                <i class="bi-envelope"></i>
                <a :href="''">ahmad.naufalangkasah@gmail.com</a>
              </li>
              <li>
                <i class="bi bi-whatsapp"></i>
                <a :href="'https://wa.me/qr/YLKG6DUJ3WREC1'" target="_blank"
                  >+62 823 6755 5945</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright-style-area">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="copyright-item">
              <p>
                &copy; Copyright {{ currentYear }} By
                <a href="#">Supporter.C</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    })
  },
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName)
      if (element) {
        element.scrollIntoView({ top: element.offsetTop, behavior: 'smooth' })
      }
    },
  },
}
</script>
