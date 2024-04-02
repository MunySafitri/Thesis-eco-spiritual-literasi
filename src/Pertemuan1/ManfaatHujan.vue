<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Manfaat Hujan Bagi Tumbuhan dan Manusia</strong>
        </CCardHeader>
        <CCardBody>
          <h6>
            ⮚ Jika kita melihat, hujan sangatlah bermanfaat bagi kehidupan
            makhluk hidup. Salah satunya yaitu pada tumbuhan.
          </h6>
          <strong>Dalam Al-Qur'an dijelaskan.</strong>
          <br />
          <p>
            “Dan Dialah yang menurunkan hujan setelah mereka berputus asa dan
            menyebarkan rahmat-Nya. Dan Dialah Maha Pelindung, Maha Terpuji.”
            <strong>(QS. Asy-Syura: 28)</strong>
          </p>
          <br />
          <h6>
            ⮚ Dengan turunnya air hujan, tanaman dapat tumbuh dengan subur,
            kemudian menghasilkan banyak daun dan buah serta biji-bijian.
          </h6>
          <CAccordion>
            <p>
              <strong>Dalam Al-Qur'an dijelaskan.</strong>
              <br />
              (Dialah) yang menjadikan bumi sebagai hamparan bagimu dan langit
              sebagai atap, dan Dialah yang menurunkan air (hujan) dari langit,
              lalu
              <u
                >Dia hasilkan dengan (hujan) itu buah-buahan sebagai rezeki
                untukmu.</u
              >
              Karena itu janganlah kamu mengadakan tandingan-tandingan bagi
              Allah, padahal kamu mengetahui”
              <strong>(Q.S AL Baqarah (2): Ayat 22)</strong>
            </p>
            <br />
            <h6>
              ⮚ Hal ini menjadi sumber rezeki bagi manusia, karena tanaman yang
              berkembang dengan baik memberikan manfaat untuk kebutuhan makanan
              dan lainnya.
            </h6>
            <p>
              <br />
              <strong>Dalam Al-Qur'an dijelaskan.</strong><br />
              Dan dari langit Kami turunkan air yang memberi berkah lalu
              <u
                >Kami tumbuhkan dengan (air) itu pepohonan yang rindang dan
                biji-bijian yang dapat dipanen</u
              >” <strong>(Q.S Qaff (50) : Ayat 9)</strong>
            </p>
            <br />
            <div>
              <h1>mines video bener</h1>
              <p>
                (+Video Pendek tumbuhan subur/tumbuh dengan kena air hujan) (+
                Slide Video (3 video)) video cek di grup wa
              </p>
              <!-- <video class="vid2" autoplay muted loop width="300" id="myVideo">
                <source
                  src="@/assets/img/VideoLatarBelakang.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video> -->
            </div>
            <br />
          </CAccordion>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Collapse',
  setup() {
    const visible = ref(false)
    const visibleA = ref(false)
    const visibleB = ref(false)
    const visibleHorizontal = ref(false)
    return {
      visible,
      visibleA,
      visibleB,
      visibleHorizontal,
    }
  },
}
</script>
