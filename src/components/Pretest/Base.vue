<!-- eslint-disable prettier/prettier -->
<template>
   <Preloader v-if="isLoading" />
  <Navbar />
  <div class="container pb-5" style="padding: 10px">
    <h1>Anda Belum melakukan pretest!</h1>
    <div class="mt-4 row align-items-center">
      <h3><strong>Pemberitahuan</strong></h3>
      <div style="padding: 1px">
        <ol type="1">
          <li>
            Ketika anda baru melakukan registrasi, maka sistem terdetect sih
            bahwa anda belum mengerjakan Pretest, Kerjakan Pretest terlebih
            dahulu
          </li>
          <li>
            Ujian pretest ini tidak ada batasan waktu untuk mengerjakannya
          </li>
          <li>
            Peserta diharuskan untuk fokus mengerjakan ini, Pretest dibagi
            menjadi 3 bagian uji test, yakni aspek kognitif yang terdiri dari 20
            soal, aspek perilaku ekoliterasi yan terdiri dari 16 soal dan aspek
            sikap spritual yang terdiri dari 17 soal.
          </li>
          <li>Tidak ada penilaian benar dan salah</li>
          <li>
            Peserta hanya diperbolehkan menjawab sekali, peserta tidak dapat
            kembali ke soal sebelumnya. Maka dari itu, peserta diharuskan teliti
            dalam menjawab pertanyaan
          </li>
          <li>
            Peserta akan di pantau oleh sistem atas telah mengerjakan test ini
            atau tidaknya.
          </li>
          <li>
            Peserta tidak boleh melakukan refresh ketika ujian sedang
            berlangsung, peserta akan kehilangan jawaban dan mengulangi kembali
            dari awal. Pastikan Koneksi internet lancar.
          </li>
        </ol>
      </div>
      <strong>Good luck ^^</strong>

      <div class="mt-4">
        <!-- Button trigger modal -->
        <CButton
          color="primary"
          @click="
            () => {
              visibleStaticBackdropDemo = true
            }
          "
          >Mulai Pretest</CButton
        >
        <!-- <button class="btn btn-primary" @click="OnSubmit">Mulai Melakukan Pretest</button> -->
      </div>
    </div>
  </div>

  <!-- modal -->
  <CModal
    backdrop="static"
    :visible="visibleStaticBackdropDemo"
    @close="
      () => {
        visibleStaticBackdropDemo = false
      }
    "
    aria-labelledby="StaticBackdropExampleLabel"
  >
    <CModalHeader>
      <CModalTitle id="StaticBackdropExampleLabel">Peringatan</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>Ujian terdiri dari 3 aspek</p>
       <table class="bold" style="width: 100%">
        <tr>
          <td style="width: 1%">⮚</td>
          <td style="width: 15%">Kognitif</td>
          <td style="width: 2%">:</td>
          <td style="width: 25%">20 soal</td>
        </tr>
        <tr>
         <td>⮚</td>
          <td>Perilaku Ekoliterasi</td>
          <td>:</td>
          <td>16 soal</td>
        </tr>
        <tr>
         <td>⮚</td>
          <td>Sikap Spritual</td>
          <td>:</td>
          <td>17 soal</td>
        </tr>
      </table>
      <br />
      <p>⮚ Jika halaman mengalami kejanggalan segera refresh</p>
      <br />
      <div class="accordion-body">
       <strong> <p>Mulai Pretest?</p></strong>
      </div>
      <div class="modal-footer">
        <CButton
          color="danger"
          @click="
            () => {
              visibleStaticBackdropDemo = false
            }
          "
        >
          Tidak
        </CButton>
        <button type="button" @click="startTest" class="btn btn-primary">
          Mulai
        </button>
      </div>
    </CModalBody>
  </CModal>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import Navbar from '@/components/Pretest/Navbar.vue'
import Preloader from '@/components/Layouts/Preloader'

export default {
  name: 'Pretest',
  data() {
    return {
      isLoading: true,
      visibleStaticBackdropDemo: false,
      data: '',
    }
  },
  components: {
    Navbar,
    Preloader,
  },
  methods: {
    startTest() {
      this.$router.push({ path: '/kognitif-pretest' })
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
    // setInterval(() => {
    //     this.setPopup()
    //     alert("ini")
    //     // this.$router.push({ path: '/kognitif' })
    // }, )
  },
}
</script>
