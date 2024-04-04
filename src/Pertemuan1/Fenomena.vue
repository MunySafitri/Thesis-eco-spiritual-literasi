<template>
  <Preloader v-if="isLoading" />
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Fenomena Hujan </strong
          ><small>(Element Daya Rusak Air) </small>
        </CCardHeader>
        <CCardBody>
          <h6>
            ⮚ Apa yang pertama kali terlintas dalam pikiran kita ketika
            mendengar kata air dan hujan?
          </h6>
          <strong>Dalam Al-Qur'an dijelaskan.</strong>
          <br />
          <p>
            “Telah tampak kerusakan di darat dan di laut disebabkan karena
            perbuatan tangan manusia; Allah menghendaki agar mereka merasakan
            sebagian dari (akibat) perbuatan mereka, agar mereka kembali (ke
            jalan yang benar). Katakanlah (Muhammad), “Bepergianlah di bumi lalu
            lihatlah bagaimana kesudahan orang-orang dahulu. Kebanyakan dari
            mereka adalah orang-orang yang mempersekutukan (Allah).” (QS. Ar-rum
            (30) : Ayat 41-42)
          </p>
          <br />
          <h6>
            ⮚ Apakah kita sering beranggapan bahwa hujan itu sebagai suatu
            bencana? Atau sebagai rasa syukur atas nikmat Allah sebagai sang
            pencipta.
          </h6>
          <CAccordion>
            <p>
              <strong>Dalam Al-Qur'an dijelaskan.</strong>
              <br />
              "Lalu Kami bukakan pintu-pintu langit dengan (menurunkan) air yang
              tercurah, dan Kami jadikan bumi menyemburkan mata-mata air maka
              bertemulah (air-air) itu sehingga (meluap menimbulkan) keadaan
              (bencana) yang telah ditetapkan. Dan Kami angkut dia (Nuh) ke atas
              (kapal) yang terbuat dari papan dan pasak. (al-Qamar (54) : ayat
              11-13)
            </p>
            <br />
            <h6>
              ⮚ Bila kita amati, pada saat musim hujan air sangat berlimpah
              bahkan menimbulkan banjir di beberapa daerah. Sebaliknya, apabila
              musim kemarau datang banyak tempat di sekitar kita yang kekurangan
              air, kemanakah air tersebut? apakah jumlah air dari semenjak
              diciptakan oleh Tuhan YME hingga sekarang berkurang jumlahnya?
            </h6>
            <p>
              <br />
              <strong>Dalam Al-Qur'an dijelaskan.</strong><br />
              Dia (anaknya) menjawab, “Aku akan mencari perlindungan ke gunung
              yang dapat menghindarkan aku dari air bah!” (Nuh) berkata, “Tidak
              ada yang melindungi dari siksaan Allah pada hari ini selain Allah
              yang Maha Penyayang.” Dan gelombang menjadi penghalang antara
              keduanya; maka dia (anak itu) termasuk orang yang ditenggelamkan.
              (QS Hud : ayat 43)
            </p>
            <br />
            <strong>
              <p class="bold">
                ⮚ Mari, kita cari tahu lebih banyak tentang keistimewaan air
                melalui e-modul ini. Agar dapat membantu kita menemukan
                fakta-fakta ilmiah yang menarik seputar air dan air dijelasakan
                di dalam Al-Qur’an.
              </p>
            </strong>
            <div>
              <h1>mines video bener</h1>
              <p>Banjir</p>
              <!-- <video class="vid2" autoplay muted loop width="300" id="myVideo">
                <source
                  src="@/assets/img/VideoLatarBelakang.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video> -->
              <div class="d-flex justify-content-md-center">
                <video class="vid2" play loop controls id="myVideo">
                  <source
                    src="../assets/Surat-ALbaqarah.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>
            <br />
            <iframe
              width="420"
              height="345"
              src="https://www.youtube.com/embed/Ve7zncHZxvQ?si=gw-cCzm80GYybyv5"
            >
            </iframe>
            <div>
              <p>+ Video Pendek tentang kekeringan</p>
              <video class="vid2" autoplay muted loop width="300" id="myVideo">
                <source src="@/assets/video/infiltrasi.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </CAccordion>
        </CCardBody>
      </CCard>
      <!-- <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Accordion</strong> <small>Flush</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add <code>flush</code> to remove the default
            <code>background-color</code>, some borders, and some rounded
            corners to render accordions edge-to-edge with their parent
            container.
          </p>
          <DocsExample href="components/accordion.html#flush">
            <CAccordion flush>
              <CAccordionItem>
                <CAccordionHeader> Accordion Item #1 </CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the first item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem>
                <CAccordionHeader> Accordion Item #2 </CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem>
                <CAccordionHeader> Accordion Item #3 </CAccordionHeader>
                <CAccordionBody>
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </DocsExample>
        </CCardBody>
      </CCard> -->
    </CCol>
  </CRow>
</template>

<script>
import { ref } from 'vue'
import Preloader from '@/components/Layouts/Preloader'
export default {
  name: 'Accordion',
  components: {
    Preloader,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  },
  setup() {
    const activeKey = ref(1)
    const flushActiveKey = ref(1)

    return {
      activeKey,
      flushActiveKey,
    }
  },
}
</script>
