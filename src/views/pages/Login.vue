<!-- eslint-disable prettier/prettier -->
<template>
  <Preloader v-if="isLoading" />
  <div
    class="bg-light min-vh-100 d-flex flex-row align-items-center"
    style="background-color: antiquewhite; background-position: top"
  >
    <!-- <template> -->
    <CModal
      scrollable
      size="lg"
      :visible="visibleScrollableDemo"
      @close="
        () => {
          visibleScrollableDemo = false
        }
      "
      aria-labelledby="ScrollingLongContentExampleLabel2"
    >
      <CModalHeader>
        <CModalTitle id="ScrollingLongContentExampleLabel2"
          >Modal title</CModalTitle
        >
      </CModalHeader>
      <CModalBody>
        <p>
          Berikut adalah langkah-langkah yang lebih detail untuk menggunakan
          e-modul tentang siklus hidrologi:
        </p>
        <div class="accordion-body">
          <ol class="bold">
            <li>
              Registrasi:<br />
              Buka e-modul dan temukan opsi registrasi. Isi informasi yang
              diperlukan seperti nama, email, dan informasi lain yang diminta.
              Ikuti instruksi untuk menyelesaikan proses registrasi.
            </li>
            <br />
            <li>
              Pretest :<br />
              Setelah registrasi selesai, cari dan pilih opsi untuk mengerjakan
              pretest. Kerjakan pretest sesuai dengan petunjuk yang diberikan.
              Pastikan untuk memahami pertanyaan dan memberikan jawaban dengan
              cermat.
            </li>
            <br />
            <li>
              Halaman Utama :<br />Setelah selesai pretest, kembali ke halaman
              awal. Baca informasi yang ditampilkan di halaman utama secara
              menyeluruh. Luangkan waktu untuk membaca berbagai poin yang
              tersedia dengan seksama.
            </li>
            <br />
            <li>
              Kegiatan Inti (Pertemuan I) :<br />Pilih opsi menuju ke kegiatan
              inti atau pertemuan I. Pada pertemuan I, cari dan klik tombol
              "Mulai" untuk memulai. Anda akan diarahkan ke materi tentang
              siklus hidrologi yang terintegrasi dengan ayat-ayat Alquran.
              Pelajari materi tersebut dengan seksama dan pahami keterkaitannya
              dengan konten Alquran yang disajikan.
            </li>
            <br />
            <li>
              Aktifitas Siswa :<br />Setelah mengikuti materi tentang siklus
              hydrology berintegrasi Klik pada opsi aktifitas siswa dan lakukan
              aktivitas siswa yang ada pada modul.
            </li>
            <br />
            <li>
              Pengayaan :<br />Setelah melakukan aktifitas siswa. Silahkan
              mengisi laporan pengamatan Kembali ke halaman utama dan masuk ke
              dalam materi pengayaan. Silahkan membaca materi-materi yang
              tersedia uantuk menambah berbagai informasi tambahan tentang
              siklus air.
            </li>
            <br />
            <li>
              Refleksi : <br />Pada menu relfeksi, mari merenungkan kembali apa
              yang sudah kita pelajari dan Bersama-sama menyimpulkan
              pembelajaran
            </li>
            <br />
            <li>
              Post Test :<br />Setelah melakukan serangkain kegiatan pada menu
              “kegiatan Inti”. kemudian, Silahkan mengerjakan Pretest. Setelah
              mengerjakan pre test. Maka selesai sudah pertemuan kita pada hari
              ini.
            </li>
            <br />
            <p>
              Dengan mengikuti langkah-langkah ini secara rinci, Anda akan dapat
              menggunakan e-modul tentang siklus hidrologi terintegrasi
              ayat-ayat Al-Quran dengan lebih efektif dan memaksimalkan
              manfaatnya.
            </p>
          </ol>
        </div>
      </CModalBody>
    </CModal>
    <div class="container-fluid">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-6 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            <div class="card-header text-center pt-4">
              <h5>Login with</h5>
            </div>
            <br />
            <CButton
              color="primary"
              @click="
                () => {
                  visibleScrollableDemo = true
                }
              "
              >Baca Petunjuk Eco-Literasi</CButton
            >
            <div class="card-body p-3" style="font-size: 1.2em">
              <!-- <div v-for="err in errors" v-bind:key="err">
                {{ err }}

              </div> -->

              <b-form
                class="p-3"
                @submit="onSubmit"
                @reset="onReset"
                v-if="show"
              >
                <!-- email -->
                <b-row class="my-2">
                  <b-col sm="3">
                    <label for="`type-email`"><code>Email</code> :</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-input
                      trim
                      id="type-email"
                      v-model="form.email"
                      type="email"
                      aria-describedby="input-live-help input-live-feedback"
                      :state="
                        errors.includes('email_required') ||
                        errors.includes('email_wrong')
                          ? false
                          : none
                      "
                      placeholder="Masukkan Email.."
                    ></b-form-input>

                    <!-- <b-form-invalid-feedback v-if="errors.includes('Email_exist')" id="type-email">
                      Email Sudah Terdaftar
                      </b-form-invalid-feedback>  -->
                    <b-form-invalid-feedback
                      v-if="errors.includes('email_required')"
                      id="type-email"
                    >
                      Email Perlu ditambahkan
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                      v-if="errors.includes('email_wrong')"
                      id="type-password"
                    >
                      Email ini tidak terdaftar
                    </b-form-invalid-feedback>
                  </b-col>
                </b-row>
                <!-- password -->
                <b-row class="my-2">
                  <b-col sm="3">
                    <label for="type-password"><code>password</code> :</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-input
                      id="type-password"
                      v-model="form.password"
                      type="password"
                      aria-describedby="input-live-help input-live-feedback"
                      :state="
                        errors.includes('password_required') ||
                        errors.includes('password_wrong')
                          ? false
                          : none
                      "
                      placeholder="Masukkan Password.."
                    ></b-form-input>
                    <b-form-invalid-feedback
                      v-if="errors.includes('password_required')"
                      id="type-password"
                    >
                      Password Perlu ditambahkan
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                      v-if="errors.includes('password_wrong')"
                      id="type-password"
                    >
                      Password yang ada masukkan salah
                    </b-form-invalid-feedback>
                  </b-col>
                </b-row>

                <b-button class="mx-2" type="submit" variant="primary"
                  >Login</b-button
                >
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
              <div class="px-1 pt-2 text-center card-footer px-lg-2">
                <p class="mx-auto mb-4 text-sm">
                  Tidak Punya Akun
                  <a
                    href="/register"
                    class="text-danger text-gradient font-weight-bold"
                    >Daftar</a
                  >
                </p>
              </div>
              <!-- <b-card class="mt-3" header="Form Data Result">
                <div v-for="err in errors" :key="err"> {{ err }}</div>
                <pre class="m-0">
                  {{ form }} </pre>
                {{ datas }}
              </b-card> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Preloader from '@/components/Layouts/Preloader'
// import { uuid } from 'vue-uuid'
// import { useRouter } from 'vue-router'

// const router = useRouter()
// const route = useRoute()

export default {
  name: 'Login',
  components: {
    Preloader,
  },
  data() {
    return {
      isLoading: true,
      visibleScrollableDemo: false,
      datas: [],
      errors: [],
      form: {
        email: '',
        password: '',
      },
      show: true,
    }
  },

  methods: {
    setData(data) {
      //untuk menyimpan data registrasi
      this.datas = data
    },
    onSubmit(event) {
      event.preventDefault()
      this.errors = []
      //cara validasi kata yang kosong
      Object.entries(this.form).forEach(([key, value]) => {
        //cek apakah setiap value ada di dalam database
        try {
          if (value === '' || value.length === 0 || value === null) {
            this.errors.push(key + '_required')
          }
        } catch (err) {
          this.errors.push(key + '_required')
        }
      })
      //cek apakah ada di dalam email database return ke halaman overview dn jangan lupa buat session dengan local storages untuk middleware

      if (
        !this.datas.find((o) => o.email === this.form.email) &&
        this.form.email !== ''
      ) {
        this.errors.push('email_wrong')
      }
      if (
        this.datas.find(
          (o) =>
            o.email === this.form.email && o.password !== this.form.password,
        )
      ) {
        this.errors.push('password_wrong')
      }
      //jika tidak ada error
      if (this.errors.length === 0) {
        let user = this.datas.find((o) => o.email === this.form.email)
        localStorage.setItem('isLogin', true)

        //kita coba set false dulu nnti diganti
        localStorage.setItem('isPretest', user.isPretest)
        localStorage.setItem('isPosttest', user.isPosttest)
        localStorage.setItem('user', JSON.stringify(user.name))
        localStorage.setItem('id_user', JSON.stringify(user.id))
        if (user.isAdmin) {
          localStorage.setItem('isAdmin', user.isAdmin)
          this.$router.push({ path: '/admin' })
        }
        this.$router.push({ path: '/overview' })
      }
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 2000),
      // Make a request for a user with a given ID
      // alert('ini pop up yang isinya aturan modul')
      axios
        .get('http://localhost:5000/user')
        .then((response) => this.setData(response.data))
        .catch((error) => console.log('Gagal : ', error))
  },
}
</script>
