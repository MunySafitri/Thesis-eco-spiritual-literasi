<!-- eslint-disable prettier/prettier -->

<template>
  <Preloader v-if="isLoading" />
  <div
    class="bg-light min-vh-100 d-flex flex-row align-items-center"
    style="background-color: antiquewhite; background-position: top"
  >
    <!-- <template> -->
    <div class="container-fluid">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-8 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            <div class="card-header text-center pt-4">
              <h5>Register with</h5>
            </div>
            <div class="row px-xl-5 px-sm-4 px-3">
              <div class="col-3 ms-auto px-1">
                <a class="btn btn-outline-light w-100" href="javascript:;">
                  <svg
                    width="24px"
                    height="32px"
                    viewBox="0 0 64 64"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(3.000000, 3.000000)"
                        fill-rule="nonzero"
                      >
                        <circle
                          fill="#3C5A9A"
                          cx="29.5091719"
                          cy="29.4927506"
                          r="29.4882047"
                        />
                        <path
                          d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z"
                          fill="#FFFFFF"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div class="col-3 px-1">
                <a class="btn btn-outline-light w-100" href="javascript:;">
                  <svg
                    width="24px"
                    height="32px"
                    viewBox="0 0 64 64"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(7.000000, 0.564551)"
                        fill="#000000"
                        fill-rule="nonzero"
                      >
                        <path
                          d="M40.9233048,32.8428307 C41.0078713,42.0741676 48.9124247,45.146088 49,45.1851909 C48.9331634,45.4017274 47.7369821,49.5628653 44.835501,53.8610269 C42.3271952,57.5771105 39.7241148,61.2793611 35.6233362,61.356042 C31.5939073,61.431307 30.2982233,58.9340578 25.6914424,58.9340578 C21.0860585,58.9340578 19.6464932,61.27947 15.8321878,61.4314159 C11.8738936,61.5833617 8.85958554,57.4131833 6.33064852,53.7107148 C1.16284874,46.1373849 -2.78641926,32.3103122 2.51645059,22.9768066 C5.15080028,18.3417501 9.85858819,15.4066355 14.9684701,15.3313705 C18.8554146,15.2562145 22.5241194,17.9820905 24.9003639,17.9820905 C27.275104,17.9820905 31.733383,14.7039812 36.4203248,15.1854154 C38.3824403,15.2681959 43.8902255,15.9888223 47.4267616,21.2362369 C47.1417927,21.4153043 40.8549638,25.1251794 40.9233048,32.8428307 M33.3504628,10.1750144 C35.4519466,7.59650964 36.8663676,4.00699306 36.4804992,0.435448578 C33.4513624,0.558856931 29.7884601,2.48154382 27.6157341,5.05863265 C25.6685547,7.34076135 23.9632549,10.9934525 24.4233742,14.4943068 C27.7996959,14.7590956 31.2488715,12.7551531 33.3504628,10.1750144"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div class="col-3 me-auto px-1">
                <a class="btn btn-outline-light w-100" href="javascript:;">
                  <svg
                    width="24px"
                    height="32px"
                    viewBox="0 0 64 64"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(3.000000, 2.000000)"
                        fill-rule="nonzero"
                      >
                        <path
                          d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                          fill="#4285F4"
                        />
                        <path
                          d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                          fill="#34A853"
                        />
                        <path
                          d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                          fill="#FBBC05"
                        />
                        <path
                          d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                          fill="#EB4335"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div class="mt-2 position-relative text-center">
                <p
                  class="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3"
                >
                  or
                </p>
              </div>
            </div>
            <div class="card-body" style="font-size: 1.2em">
              <!-- <div v-for="err in errors" v-bind:key="err">
                {{ err }}

              </div> -->

              <b-form
                class="p-3"
                @submit="onSubmit"
                @reset="onReset"
                v-if="show"
              >
                <!-- nama -->
                <b-row class="my-1">
                  <b-col sm="3">
                    <label for="type-name"><code>Nama</code>:</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-input
                      trim
                      id="type-name"
                      aria-describedby="input-live-help input-live-feedback"
                      :state="errors.includes('name_required') ? false : none"
                      v-model="form.name"
                      placeholder="Masukkan Nama.."
                    ></b-form-input>
                    <!-- {{errors.includes('name_required') ? false : true}} -->
                    <b-form-invalid-feedback id="type-name">
                      Nama Perlu ditambahkan
                    </b-form-invalid-feedback>
                  </b-col>
                </b-row>
                <!-- email -->
                <b-row class="my-2">
                  <b-col sm="3">
                    <label for="`type-email`"><code>Email</code>:</label>
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
                        errors.includes('Email_exist')
                          ? false
                          : none
                      "
                      placeholder="Masukkan Email.."
                    ></b-form-input>

                    <b-form-invalid-feedback
                      v-if="errors.includes('Email_exist')"
                      id="type-email"
                    >
                      Email Sudah Terdaftar
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                      v-if="errors.includes('email_required')"
                      id="type-email"
                    >
                      Email Perlu ditambahkan
                    </b-form-invalid-feedback>
                  </b-col>
                </b-row>
                <b-row class="my-2">
                  <b-col sm="3">
                    <label for="`type-kelas`"><code>Kelas</code>:</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-input
                      trim
                      id="type-kelas"
                      v-model="form.kelas"
                      type="text"
                      aria-describedby="input-live-help input-live-feedback"
                      :state="errors.includes('kelas_required') ? false : none"
                      placeholder="Contoh: X IPS 1"
                    ></b-form-input>
                    <b-form-invalid-feedback id="type-kelas">
                      Kelas Perlu ditambahkan
                    </b-form-invalid-feedback>
                  </b-col>
                </b-row>
                <b-row class="my-2">
                  <b-col sm="3">
                    <label for="`type-pelajaran`"
                      ><code>Mata Pelajaran</code>:</label
                    >
                  </b-col>
                  <b-col sm="9">
                    <b-form-input
                      trim
                      id="type-pelajaran"
                      v-model="form.pelajaran"
                      type="text"
                      aria-describedby="input-live-help input-live-feedback"
                      :state="
                        errors.includes('pelajaran_required') ? false : none
                      "
                      placeholder="Contoh: Geografi"
                    ></b-form-input>
                    <b-form-invalid-feedback id="type-pelajaran">
                      Pelajaran Perlu ditambahkan
                    </b-form-invalid-feedback>
                  </b-col>
                </b-row>
                <!-- password -->
                <b-row class="my-2">
                  <b-col sm="3">
                    <label for="type-password"><code>password</code>:</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-input
                      id="type-password"
                      v-model="form.password"
                      type="password"
                      aria-describedby="input-live-help input-live-feedback"
                      :state="
                        errors.includes('password_required') ? false : none
                      "
                      placeholder="Masukkan Password.."
                    ></b-form-input>
                    <b-form-invalid-feedback id="type-password">
                      Password Perlu ditambahkan
                    </b-form-invalid-feedback>
                  </b-col>
                </b-row>
                <b-row class="my-2">
                  <b-col sm="3">
                    <label for="type-password-confirm"
                      ><code>Konfirmasi Password</code>:</label
                    >
                  </b-col>
                  <b-col sm="9">
                    <b-form-input
                      id="type-password-confirm"
                      v-model="form.passwordConfirm"
                      type="password"
                      placeholder="Masukkan Konfirmasi Password.."
                      aria-describedby="input-live-help input-live-feedback"
                      :state="
                        errors.includes('passwordConfirm_required') ||
                        form.password !== form.passwordConfirm
                          ? false
                          : none
                      "
                    ></b-form-input>

                    <b-form-invalid-feedback
                      v-show="errors.includes('passwordConfirm_not_same')"
                      id="type-password-confirm"
                    >
                      Konfirmasi Password yang anda Masukkan Salah.
                    </b-form-invalid-feedback>
                    <b-form-invalid-feedback
                      v-show="errors.includes('passwordConfirm_required')"
                      id="type-password-confirm"
                    >
                      Masukkan Konfirmasi Password
                    </b-form-invalid-feedback>
                  </b-col>
                </b-row>
                <!-- semester -->
                <b-row class="my-2">
                  <b-col sm="3">
                    <label for="input-group-3"><code>Semester</code>:</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-group
                      class="is-invalid"
                      id="input-group-3"
                      label-for="input-3"
                    >
                      <b-form-select
                        id="input-3"
                        v-model="form.semester"
                        :options="semesters"
                      ></b-form-select>
                    </b-form-group>
                    <div
                      v-show="errors.includes('semester_required')"
                      class="invalid-feedback"
                    >
                      Masukkan Semester
                    </div>
                    <!-- <b-form-invalid-feedback id="input-3">
                      Masukkan Semester
                    </b-form-invalid-feedback> -->
                  </b-col>
                </b-row>

                <b-button class="mx-2" type="submit" variant="primary"
                  >Submit</b-button
                >
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
              <div class="px-1 pt-2 text-center card-footer px-lg-2">
                <p class="mx-auto mb-4 text-sm">
                  Susah Punya Akun
                  <a
                    href="/login"
                    class="text-danger text-gradient font-weight-bold"
                    >Masuk</a
                  >
                </p>
              </div>
              <!-- <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
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
import { uuid } from 'vue-uuid'
import Preloader from '@/components/Layouts/Preloader'
export default {
  name: 'Register',
  components: {
    Preloader,
  },
  data() {
    return {
      isLoading: true,
      datas: [],
      errors: [],
      form: {
        id: uuid.v1(),
        email: '',
        name: '',
        pelajaran: '',
        semester: null,
        kelas: '',
        password: '',
        passwordConfirm: '',
        isPretest: false,
        isPosttest: false,
        isAdmin: false,
      },
      semesters: [
        { text: 'Pilih Salah satu', value: null },
        { text: '1 (satu) / Ganjil', value: 1 },
        { text: '2 (dua) / Genap', value: 2 },
        { text: '3 (tiga) / Ganjil', value: 3 },
        { text: '4 (empat) / Genap', value: 4 },
        { text: '5 (lima) / Ganjil', value: 5 },
        { text: '6 (enam) / Genap', value: 6 },
      ],
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
      //cek apakah ada di dalam email database
      if (this.datas.find((o) => o.email === this.form.email)) {
        this.errors.push('Email_exist')
      }
      //cek apakah password tidak sama
      if (
        this.form.password != this.form.passwordConfirm &&
        !this.errors.includes('passwordConfirm' + '_required')
      ) {
        this.errors.push('passwordConfirm' + '_not_same')
      }
      if (this.errors.length === 0) {
        let data = this.form
        delete data.passwordConfirm
        //langsung di post ke dalam localhost/users
        // axios
        //   .post('http://localhost:3000/user/', data)
        //   .then(() => console.log('Berhasil'))
        //   .catch((error) => console.log('Gagal : ', error))
        axios
          .post('http://localhost:5000/user/', data)
          .then((response) => {
            console.log('berhasil:', response.data)
          })
          .catch((error) => console.log('Gagal : ', error))
        this.$router.push({ path: '/login' })
        // alert(JSON.stringify(data)) //tampilkan notif toast atau navbar bahw aberhasil di daftrkan
      }
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.semester = null
      this.form.password = ''
      this.form.passwordConfirm = ''
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
    }, 2000)
    // Make a request for a user with a given ID
    axios
      .get('http://localhost:5000/user')
      .then((response) => this.setData(response.data))
      .catch((error) => console.log('Gagal : ', error))
  },
}
</script>
