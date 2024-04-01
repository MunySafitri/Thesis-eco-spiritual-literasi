<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div id="Kegiatan" class="process-style-area2 ptb-100">
    <div class="container">
      <div class="main-section-title">
        <div class="card">
          <!-- <span class="sub-title"># Kegiatan</span> -->
          <h2>Kegiatan Pembelajaran</h2>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="card">
            <div class="process-style-accordion">
              <div class="accordion" id="ProcessAccordion">
                <div class="accordion-item">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Collapse1"
                    aria-expanded="true"
                    aria-controls="Collapse1"
                  >
                    <span>01</span> Pertemuan I
                  </button>
                  <div
                    id="Collapse1"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#ProcessAccordion"
                  >
                    <div class="accordion-body">
                      <div class="choose-content">
                        <RouterLink to="/pertemuan1">
                        <CButton color="info" shape="rounded-pill"
                          >Mulai
                        </CButton>
                      </RouterLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Collapse2"
                    aria-expanded="false"
                    aria-controls="Collapse2"
                  >
                    <span>02</span> Pertemuan II
                  </button>
                  <div
                    id="Collapse2"
                    class="accordion-collapse collapse"
                    data-bs-parent="#ProcessAccordion"
                  >
                    <div class="accordion-body">
                      <div class="choose-content">
                        <CButton
                          color="info"
                          shape="rounded-pill"
                          @click="
                            () => {
                              Soon = true
                            }
                          "
                          >Comming Soon
                        </CButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    <span>03</span> Aktivitas Siswa
                  </button>
                  <div
                    id="collapse3"
                    class="accordion-collapse collapse"
                    data-bs-parent="#ProcessAccordion"
                  >
                    <div class="accordion-body">
                      <div class="choose-content">
                        <!-- <p class="bold">
                          Mengidentifikasi Faktor-faktor yang Mempengaruhi
                          Siklus Hidrologi :
                        </p> -->
                        <CButton
                          color="info"
                          shape="rounded-pill"
                          @click="
                            () => {
                              Aktifitas = true
                            }
                          "
                          >Mulai
                        </CButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse5"
                  >
                    <span>04</span> Pengayaan
                  </button>
                  <div
                    id="collapse5"
                    class="accordion-collapse collapse"
                    data-bs-parent="#ProcessAccordion"
                  >
                    <div class="accordion-body">
                      <div class="choose-content">
                        <CButton
                          color="info"
                          shape="rounded-pill"
                          @click="
                            () => {
                              Pengayaan = true
                            }
                          "
                          >Mulai
                        </CButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse6"
                    aria-expanded="false"
                    aria-controls="collapse6"
                  >
                    <span>05</span> Refleksi
                  </button>
                  <div
                    id="collapse6"
                    class="accordion-collapse collapse"
                    data-bs-parent="#ProcessAccordion"
                  >
                    <div class="accordion-body">
                      <div class="choose-content">
                        <CButton
                          color="info"
                          shape="rounded-pill"
                          @click="
                            () => {
                              Refleksi = true
                            }
                          "
                          >Mulai
                        </CButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="card">
            <div class="process-style-image">
              <img src="../assets/img//no2.jpg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- modal untuk aktivitas siswa -->
  <CModal
    scrollable
    size="lg"
    :visible="Aktifitas"
    @close="
      () => {
        Aktifitas = false
      }
    "
    aria-labelledby="ScrollingLongContentExampleLabel2"
  >
    <CModalHeader>
      <CModalTitle id="ScrollingLongContentExampleLabel2"
        >Aktivitas Siswa</CModalTitle
      >
    </CModalHeader>
    <CModalBody>
      <h6>
        <ul class="bold">
          <li>
            Lakukan pengamatan bersama guru dengan memperhatikan kondisi
            atmosfer diluar rungan, Apakah ada terbentuk awan yang
            bergumpal-gumpal dengan kilat yang masuk kedalam salah satu proses
            siklus air atau tidak?
          </li>
          <li>
            Penanaman Tanaman: Melibatkan siswa dalam kegiatan penanaman tanaman
            sebagai bagian dari siklus hidrologi. Mereka dapat memahami betapa
            pentingnya air untuk pertumbuhan tanaman dan bagaimana tanaman juga
            berperan dalam menjaga siklus hidrologi.
          </li>
          <li>
            Diskusi Kelompok: Mengadakan diskusi kelompok tentang tanggung jawab
            kita terhadap sumber daya air dan bagaimana kita dapat berkontribusi
            dalam menjaga keseimbangan siklus hidrologi. Siswa dapat berbagi
            pandangan mereka dan mencari solusi berbasis nilai-nilai spiritual.
          </li>
        </ul>
      </h6>
    </CModalBody>
  </CModal>
  <!-- modal untuk coming soon -->
  <CModal
    backdrop="static"
    :visible="Soon"
    @close="
      () => {
        Soon = false
      }
    "
    aria-labelledby="StaticBackdropExampleLabel"
  >
    <CModalHeader>
      <CModalTitle id="StaticBackdropExampleLabel">Pertemuan 2</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <center><CIcon :icon="cilBellExclamation" size="8xl" /></center>
      <br />
      <h6>ini belum tersedia, nantikan update berikutnya!</h6></CModalBody
    >
    <CModalFooter>
      <CButton
        color="primary"
        @click="
          () => {
            Soon = false
          }
        "
      >
        Mengerti
      </CButton>
    </CModalFooter>
  </CModal>
  <!-- modal untuk pengayaan -->
  <CModal
    scrollable
    size="lg"
    :visible="Pengayaan"
    @close="
      () => {
        Pengayaan = false
      }
    "
    aria-labelledby="ScrollingLongContentExampleLabel2"
  >
    <CModalHeader>
      <CModalTitle id="ScrollingLongContentExampleLabel2"
        >Pengayaan Tentang Air Tanah</CModalTitle
      >
    </CModalHeader>
    <CModalBody>
      <h6>
        Siklus air, yang juga dikenal sebagai siklus hidrologi, adalah proses
        berkelanjutan di mana air berpindah antara lautan, atmosfer, dan daratan
        di Bumi. Proses ini melibatkan beberapa tahapan: evaporasi, transpirasi,
        kondensasi, presipitasi, infiltrasi, limpasan permukaan, dan aliran
        bawah permukaan. <br /><br />Ketika uap air naik ke atmosfer, ia
        mendingin dan mengembun membentuk awan. Kondensasi ini melepaskan
        energi, yang dapat memanaskan udara di sekitarnya dan membantu mengubah
        pola cuaca. Curah hujan terjadi ketika tetesan air di awan menjadi cukup
        besar untuk jatuh sebagai hujan, salju, hujan es, atau hujan es.<br /><br />Setelah
        curah hujan mencapai permukaan bumi, air tersebut dapat mengikuti
        berbagai jalur. Sebagian diserap oleh tanah, mengisi kembali cadangan
        air tanah, sementara sebagian mengalir di atas daratan sebagai limpasan
        permukaan, yang akhirnya mengalir kembali ke lautan. Beberapa curah
        hujan juga langsung menguap kembali ke atmosfer, menutup siklus air.<br /><br />Siklus
        air memainkan peran penting dalam menjaga iklim Bumi dan keseimbangan
        kehidupan. Ini membantu mengatur suhu, mendistribusikan air tawar, serta
        membentuk dan mengikis permukaan bumi.<br /><br />Pada skema air lapisan
        tanah, terdapat beberapa komponen utama yang perlu dipahami, antara lain
        daya serap hujan, sumber mata air, air bawah tanah, infiltrasi,
        limpasan, dan penyimpanan airtanah. Daya serap hujan merujuk pada
        kemampuan tanah untuk menyerap air hujan. Daya serap hujan ini
        dipengaruhi oleh jenis tanah, tekstur tanah, dan tingkat kelembaban yang
        ada di dalamnya (wardani et al 2020).
      </h6>

      <br />
      <div class="d-flex justify-content-center">
        <img class="vid2" src="../assets/images/Pengayaan.png" alt="image" />
      </div>
      <br />

      <h6>
        Air tanah adalah air yang telah meresap ke dalam tanah dan tersimpan
        dalam akuifer bawah tanah, air tanah berfungsi sebagai sumber kehidupan
        yang sangat penting karena digunakan untuk keperluan minum, pertanian,
        dan industri.<br /><br />
        Air tanah merupakan komponen penting dalam siklus air karena membantu
        menopang dan mengatur ketersediaan air di berbagai wilayah, bertindak
        sebagai sistem penyimpanan alami, menahan air di bawah tanah selama masa
        curah hujan yang berlebihan dan melepaskannya secara perlahan selama
        periode yang lebih kering (Kuang et al., 2024).
      </h6>

      <br />
      <div class="d-flex justify-content-center">
        <img class="vid2" src="../assets/images/Pengayaan2.jpg" alt="image" />
      </div>
      <br />
      <h5>Berikut penjelasan dari istilah-istilah penting dari air tanah:</h5>
      <h6>
        <ol>
          <li>
            Spring water: Air yang mengalir secara alami dari sumber bawah tanah
            ke permukaan bumi.
          </li>
          <li>
            Base flow: Bagian aliran sungai yang dipertahankan oleh pelepasan
            air tanah.
          </li>
          <li>
            Calculation: Proses menentukan jumlah air dalam bagian tertentu dari
            siklus hidrologi, seperti evapotranspirasi atau pengisian kembali
            air tanah.
          </li>
          <li>
            Groundwater flow: Pergerakan air melalui tanah dan batuan di bawah
            permukaan bumi.
          </li>
          <li>
            Groundwater recharge: Proses penambahan air ke dalam reservoir air
            tanah.
          </li>
          <li>
            Groundwater discharge: Proses air meninggalkan reservoir air tanah
            dan mengalir ke badan air permukaan seperti sungai dan danau.
          </li>
          <li>
            Infiltration capacity: Tingkat maksimum di mana air dapat meresap ke
            dalam tanah.
          </li>
          <li>
            Soil moisture storage: Jumlah air yang tersimpan di dalam tanah.
          </li>
          <li>
            Water budget: Perhitungan jumlah air yang masuk dan keluar dari area
            atau sistem tertentu, seperti daerah aliran sungai atau akuifer.
          </li>
          <li>
            Water table: Permukaan atas zona jenuh, di bawah mana tanah atau
            batuan sepenuhnya jenuh dengan air.
          </li>
          <li>
            Groundwater level: Tingkat air tanah dalam sumur atau lubang bor.
          </li>
          <li>
            Groundwater aquifer: Formasi geologi, kelompok formasi, atau bagian
            dari formasi yang mampu menghasilkan jumlah air yang signifikan ke
            sumur atau mata air.
          </li>
          <li>
            Groundwater pollution: Pencemaran air tanah oleh aktivitas manusia,
            seperti pembuangan limbah atau penggunaan bahan kimia.
          </li>
          <li>
            Groundwater modeling: Penggunaan model matematika untuk
            mensimulasikan dan memprediksi pergerakan dan perilaku air tanah.
          </li>
          <li>
            Groundwater remediation: Proses membersihkan air tanah yang
            terkontaminasi.
          </li>
          <li>
            Groundwater sustainability: Kemampuan untuk mempertahankan tingkat
            dan kualitas air tanah dalam jangka panjang.
          </li>
          <li>Groundwater storage: Jumlah air yang tersimpan dalam akuifer.</li>
          <li>
            Groundwater yield: Jumlah air yang dapat diambil secara
            berkelanjutan dari akuifer.
          </li>
          <li>
            Groundwater-surface water interaction: Pertukaran air antara air
            tanah dan badan air permukaan seperti sungai dan danau.
          </li>
          <li>
            Hydrogeology: Studi tentang distribusi dan pergerakan air tanah di
            kerak bumi.
          </li>
          <li>Infiltration rate: Tingkat di mana air dapat memasuki tanah.</li>
          <li>
            Runoff: Bagian dari presipitasi yang mengalir di atas permukaan
            tanah dan tidak meresap ke dalam tanah.
          </li>
          <li>Streamflow: Volume air yang mengalir di sungai atau sungai.</li>
          <li>
            Water resources: Pasokan air yang tersedia dalam area atau sistem
            tertentu, termasuk air permukaan dan air tanah.
          </li>
          <li>
            Water use: Penarikan dan konsumsi air untuk berbagai tujuan, seperti
            irigasi, industri, dan penggunaan domestik.
          </li>
          <li>
            Water well: Lubang yang dibor, diambil, atau diturunkan ke dalam
            tanah yang dibangun untuk mengekstraksi air atau cairan lainnya.
          </li>
        </ol>
      </h6>
    </CModalBody>
  </CModal>
  <!-- Modal untuk refleksi -->
  <CModal
    scrollable
    size="lg"
    :visible="Refleksi"
    @close="
      () => {
        Refleksi = false
      }
    "
    aria-labelledby="ScrollingLongContentExampleLabel2"
  >
    <CModalHeader>
      <CModalTitle id="ScrollingLongContentExampleLabel2">Refleksi</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <h6>
        Pemahaman Praktis dan Spiritual: <br />
        Siswa dapat merefleksikan bagaimana pemahaman praktis siklus hidrologi
        dapat diintegrasikan dengan nilai-nilai spiritual yang ditemukan dalam
        ayat Alquran. Bagaimana pemahaman tentang air sebagai karunia Allah
        dapat memotivasi mereka untuk menjaga sumber daya air dengan lebih baik.

        <br /><br />
        Implementasi Nilai-nilai Spiritual:<br />
        Siswa dapat merenungkan cara mereka dapat mengimplementasikan
        nilai-nilai spiritual yang mereka pelajari dalam kehidupan sehari-hari.
        Bagaimana sikap bersyukur terhadap air dan kepedulian terhadap
        lingkungan bisa menjadi bagian integral dari hidup mereka.
      </h6>
    </CModalBody>
  </CModal>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { CIcon } from '@coreui/icons-vue'
import { cilBellExclamation } from '@coreui/icons'
export default {
  name: 'AppKegiatan',
  components: {
    CIcon,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      Aktifitas: false,
      Soon: false,
      Pengayaan: false,
      Refleksi: false,
      cilBellExclamation,
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
}
</script>
