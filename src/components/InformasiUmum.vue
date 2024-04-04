<!-- eslint-disable prettier/prettier -->
<style scoped>
video {
  width: 65%;
  height: auto;
}
</style>
<template>
  <div id="Informasi" class="process-style-area1 ptb-100">
    <div class="container">
      <div class="d-flex justify-content-center">
        <video class="vid2" play loop controls id="myVideo">
          <source src="../assets/Surat-ALbaqarah.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <!-- <RouterLink to="/">
        <button>awikwok</button>
      </RouterLink> -->
      <div class="main-section-title">
        <div class="card4">
          <!-- <span class="sub-title"># STEPS & PROCESS</span> -->
          <h2>Informasi Umum</h2>
        </div>
      </div>

      <div>
        <!-- Tabs with card integration -->
        <b-card no-body>
          <b-tabs v-model="tabIndex" small card>
            <b-tab title="Identitas modul">
              <div class="card2">
                <CCallout color="info">
                  <table class="bold" style="width: 100%">
                    <tr>
                      <td style="width: 35%">Perancang Modul</td>
                      <td style="width: 5%">:</td>
                      <td style="width: 60%">Muhammad Khairul</td>
                    </tr>
                    <tr>
                      <td>NAMA GURU</td>
                      <td>:</td>
                      <td>.....</td>
                    </tr>
                    <tr>
                      <td>SEKOLAH</td>
                      <td>:</td>
                      <td>MAN 1 Pidie Jaya, Prov. Aceh</td>
                    </tr>
                    <tr>
                      <td>MATA PELAJARAN</td>
                      <td>:</td>
                      <td>Geografi</td>
                    </tr>
                    <tr>
                      <td>ALOKASI WAKTU</td>
                      <td>:</td>
                      <td>2 x 45 Menit / Petemuan</td>
                    </tr>
                    <tr>
                      <td>KELAS/ FASE</td>
                      <td>:</td>
                      <td>X / Fase F</td>
                    </tr>
                    <tr>
                      <td>SEMESTER</td>
                      <td>:</td>
                      <td>2 (semeserter genap)</td>
                    </tr>
                  </table>
                </CCallout>
              </div></b-tab
            >
            <b-tab title="CP dan TP">
              <b-card1 no-body>
                <b-tabs pills card vertical nav-wrapper-class="w-30">
                  <b-tab title="CP" active
                    ><b-card-text>
                      <h6>Capaian Pembelajaran</h6>
                      <div class="card2">
                        <CCallout color="info">
                          <ul>
                            <li>
                              Mengidentifikasi keterkaitan antar gejala geosfer
                              dari suatu peristiwa dalam kehidupan sehari-hari.
                            </li>
                            <li>
                              Peserta didik mampu menyampaikan, mengomunikasikan
                              ide antar mereka, dan mampu bekerja secara
                              kelompok atau pun mandiri.
                            </li>
                          </ul>
                        </CCallout>
                      </div></b-card-text
                    ></b-tab
                  >
                  <b-tab title="TP"
                    ><b-card-text>
                      <h6>Tujuan Pembelajaran</h6>
                      <div class="card2">
                        <CCallout color="info">
                          <ul>
                            <li>
                              Mengidentifikasi keterkaitan antar gejala geosfer
                              dari suatu peristiwa dalam kehidupan sehari-hari.
                            </li>
                            <li>
                              Menganalisis gejala geosfer (litosfer, hidrosfer,
                              atmosfer) secara komprehensif dari suatu studi
                              kasus peristiwa atau kejadian dalam kehidupan
                              sehari-hari pada konteks keruangan dan kewilayahan
                            </li>
                          </ul>
                        </CCallout>
                      </div></b-card-text
                    ></b-tab
                  >
                </b-tabs>
              </b-card1>
              <!-- <b-card>I'm the card in tab</b-card> -->
            </b-tab>
            <b-tab title="Materi Esensial">
              <div class="card2">
                <CCallout color="info">
                  <h6>
                    <ol type="1">
                      <li>Fenomena Hujan</li>
                      <li>Siklus Hydrology</li>
                      <li>Manfaat Siklus Hydrology</li>
                      <li>Penanaman Sikap Spiritual</li>
                    </ol>
                  </h6>
                </CCallout>
              </div>
            </b-tab>
            <b-tab title="Sarana & Prasarana">
              <div class="card2">
                <CCallout color="info"
                  ><ul class="bold">
                    <li>Laptop, Android atau Perangkat elektronik</li>
                    <li>LCD projector</li>
                    <li>Jaringan internet</li>
                    <li>papan tulis</li>
                    <li>alat tulis</li>
                  </ul></CCallout
                >
              </div></b-tab
            >
            <b-tab title="Target Peserta didik dan Model Pembelajaran">
              <b-card1 no-body>
                <b-tabs pills card vertical nav-wrapper-class="w-30">
                  <b-tab title="Target Peserta Didik" active
                    ><b-card-text
                      ><div class="card2">
                        <CCallout color="info">
                          <p class="bold">Siswa reguler.</p>
                        </CCallout>
                      </div></b-card-text
                    ></b-tab
                  >
                  <b-tab title="Model Pembelajaran"
                    ><b-card-text
                      ><div class="card2">
                        <CCallout color="info">
                          <p class="bold">Phenomena base learning</p>
                        </CCallout>
                      </div>
                    </b-card-text></b-tab
                  >
                </b-tabs>
              </b-card1></b-tab
            >
            <b-tab title="Glosarium & Daftar Pustaka"
              ><div class="card2">
                <CCallout
                  color="info"
                  style="position: relative; height: 200px; overflow-y: scroll"
                >
                  <strong> <p class="bold">Glosarium</p></strong>
                  1. Siklus Air:
                  <ol type="a">
                    <li>
                      Evaporasi: Proses perubahan air dari bentuk cair menjadi
                      uap air akibat panas matahari.
                    </li>
                    <li>
                      Transpirasi: Pelepasan uap air oleh tanaman melalui
                      stomata pada daun.
                    </li>
                    <li>
                      Konveksi: Perpindahan panas melalui pergerakan massa udara
                      atau air.
                    </li>
                    <li>
                      Presipitasi: Bentuk pengembalian air ke permukaan bumi
                      melalui hujan, salju, embun, atau bentuk presipitasi
                      lainnya.
                    </li>
                    <li>
                      Infiltrasi: Proses air yang meresap ke dalam tanah setelah
                      presipitasi.
                    </li>
                  </ol>
                  2. Ekoliterasi:
                  <ol type="a">
                    <li>
                      Sistem: Komunitas organisme hidup dan lingkungannya yang
                      saling mempengaruhi.
                    </li>
                    <li>
                      Biodiversitas: Keanekaragaman hayati dalam suatu
                      ekosistem, mencakup keanekaragaman jenis, genetik, dan
                      ekosistem.
                    </li>
                    <li>
                      Konservasi: Upaya untuk melindungi dan mempertahankan
                      sumber daya alam serta ekosistem agar tetap lestari.
                    </li>
                    <li>
                      Ekologi: Ilmu yang mempelajari interaksi antara organisme
                      dan lingkungannya.
                    </li>
                    <li>
                      Daur Biogeokimia: Pergerakan unsur-unsur kimia melalui
                      komponen biotik dan abiotik dalam ekosistem.
                    </li>
                  </ol>
                  3. Sumber Daya Air:
                  <ol type="a">
                    <li>
                      Akuifer: Lapisan tanah atau batuan yang dapat menyimpan
                      dan mengalirkan air tanah.
                    </li>

                    <li>
                      Tanggul: Struktur buatan manusia untuk mengendalikan
                      aliran air, seperti tanggul sungai atau bendungan.
                    </li>
                    <li>
                      Air Tanah: Air yang terdapat di dalam pori-pori tanah di
                      bawah permukaan tanah.
                    </li>
                    <li>
                      Air Permukaan: Air yang terdapat di sungai, danau, atau
                      laut.
                    </li>
                  </ol>
                  4. Pencemaran Air:
                  <ol type="a">
                    <li>
                      Eutrofikasi: Peningkatan nutrien dalam air yang dapat
                      menyebabkan pertumbuhan alga yang berlebihan.
                    </li>
                    <li>
                      Limbah Industri: Zat-zat berbahaya yang dibuang oleh
                      kegiatan industri ke dalam air.
                    </li>
                  </ol>
                  5. Pengelolaan Air:
                  <ol type="a">
                    <li>
                      Irigrasi: Pengaturan aliran air untuk meningkatkan
                      produksi tanaman.
                    </li>
                    <li>
                      Pengolahan Air: Proses membersihkan air dari kontaminan
                      untuk membuatnya aman untuk dikonsumsi atau dikembalikan
                      ke lingkungan.
                    </li>
                    <li>
                      Konservasi Air: Praktik untuk mengurangi penggunaan air
                      dan mempertahankan kualitas air.
                    </li>
                  </ol>
                </CCallout>
              </div>
              <div class="card2">
                <CCallout
                  color="info"
                  style="position: relative; height: 200px; overflow-y: scroll"
                >
                  <strong> <p class="bold">Daftar Pustaka</p></strong>
                  <p>
                    Mauliddin, A. I. (2018). Telaah kritis makna hujan dalam
                    Alquran. Al-Quds: Jurnal Studi Alquran Dan Hadis, 2(1),
                    87-102.
                  </p>
                  <p>
                    Noorhidayati, S., Ahmadi, I., & Sari, N. R. (2022).
                    Developing Hydrotheology Concept in Islamic Perspective.
                    Asian Social Science and Humanities Research Journal
                    (ASHREJ), 4(1), 30-36.
                  </p>
                  <p>
                    Rehman, K. U. (2022). The Implications Of Water On Islamic
                    Beliefs In The Perspectives Of The Holy Quran. Al-Idah,
                    40(2), 247-260.
                  </p>
                  <p>
                    Rahmatina, N., Wardani, W., & Saputra, R. (2022). Water
                    Crisis Solutions In The Qur'an And Science. Jurnal Ilmiah
                    Ilmu Ushuluddin, 21(2), 221-240.
                  </p>
                </CCallout>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
        <br />
        <!-- Control buttons-->
        <div class="text-center">
          <b-button-group class="mt-2">
            <b-button @click="tabIndex--">Previous</b-button>
            <b-button @click="tabIndex++">Next</b-button>
          </b-button-group>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: 'AppInformasi',
  data() {
    return {
      tabIndex: 0,
    }
  },
}
</script>
