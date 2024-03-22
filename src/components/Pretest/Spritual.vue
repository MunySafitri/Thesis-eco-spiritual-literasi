<!-- eslint-disable prettier/prettier -->
<template>
   <Navbar />
  <div class="container pb-5">
    <h1>Aspek Spritual</h1>
    <div class="row ">
      <section class="radio-section">
        <div class="px-2">
          <table class="table table-responsive table-striped">
            <thead class="thead-light">
              <tr>
                <th rowspan="2">Pernyataan</th>
                <th colspan="4">Jawaban</th>
              </tr>
              <tr>
                <td>Selalu</td>
                <td>Sering</td>
                <td>Jarang</td>
                <td>Tidak <br/> Pernah</td>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th scope="row">Saya menutup keran air jika menemukan aliran air yang tidak diperlukan</th>

                <td for="zop1">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                  <label class="form-check-label" for="flexRadioDefault1">

                  </label>
                </td>

                <td for="zop2">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                  <label class="form-check-label" for="flexRadioDefault2">

                  </label>
                </td>
                <td for="zop3">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                  <label class="form-check-label" for="flexRadioDefault3">

                  </label>
                </td>
                <td for="zop4">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4">
                  <label class="form-check-label" for="flexRadioDefault4">
                  </label>
                </td>
              </tr>
              <!-- <tr>
        <th scope="row">Saya menegur teman yang tidak menghabiskan air minum kemasan sewaktu ada kegiatan</th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr>
      <tr>
        <th scope="row">Saya lebih memilih mandi dengan shower dibandingkan dengan gayung agar lebih hemat dalam
          penggunaan air

        </th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr>
      <tr>
        <th scope="row">Saya membiarkan air mengalir dengan percuma meskipun dikarenakan kebocoran pipa merupakan
          salah satu bentuk pemborosan terhadap air.</th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr>
      <tr>
        <th scope="row">Saya berusaha keras penghematan penggunaan air pada waktu mencuci pakaian, mencuci alat
          makan/minum ataupun mencuci sayuran/buah</th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr>
      <tr>
        <th scope="row">Saya berusaha Memeliharan kran air agar tidak cepat rusak dan segera menggantinya bila
          rusak/bocor.

        </th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr>
      <tr>
        <th scope="row">Menampung air yang tetap mengalir saat berwudhu. Jika setiap berwudhu air yang dapat
          ditampung sekitar 1 - 1,5 liter/orang

        </th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr>
      <tr>
        <th scope="row">Saya tidak membuang sampah ke daerah aliran sungai, sehingga tidak terjadi pencemaran air
        </th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr>
      <tr>
        <th scope="row">Saya ikut serta menjadi anggota komuditas peduli lingkungan seperti program penghijauan
          yang bertujuan menjaga ketersediaan air bersih?</th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr>
      <tr>
        <th scope="row">Saya berusaha memilah limbah seperti bahan kimia berbahaya atau obat-obatan agar tidak
          mencemari air bersih?</th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr>
      <tr>
        <th scope="row">Saya menyarankan kepada keluarga agar memperhatikan limbah dari mencuci mobil atau
          membersihkan halaman tidak mencemari saluran air atau sungai disekitar yang dijadikan sebagai sumber
          air.</th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr>
      <tr>
        <th scope="row">Saya mencoba memanfaatkan air bekas pakai (greywater) untuk menyiram tanaman</th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr>
      <tr>
        <th scope="row">Saya berusaha manfaatkan air bilasan terakhir cucian untuk mengepel lantai atau
          membersihkan kamar mandi</th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr>
      <tr>
        <th scope="row">Saya menyarankan kepada semua pihak agar menanam pohon disekitar area rumah atau sekolah
          untuk membantu penyerapan air ke dalam tanah.</th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr>
      <tr>
        <th scope="row">Saya menyarankan kepada teman agar setiap rumah mereka menyediakan area resapan air,
          sehingga air hujan tidak langsung terbuang ke saluran air, namun meresap kembali ke tanah sebagai sumber
          air bersih.</th>
        
          <td>
            <input class="better-radio" type="radio" name="z" id="zop1" value="0.15" />
            <label for="zop1" class="btn btn-outline-primary">1</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop2" value="0.25" />
            <label for="zop2" class="btn btn-outline-primary">2</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop3" value="0.30" />
            <label for="zop3" class="btn btn-outline-primary">3</label>
          </td>
          <td>
            <input class="better-radio" type="radio" name="z" id="zop4" value="0.35" />
            <label for="zop4" class="btn btn-outline-primary">4</label>
          </td>
      </tr> -->
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>

import Navbar from '@/components/Pretest/Navbar.vue'
import axios from 'axios'
import { uuid } from 'vue-uuid'
// var ppl =[]
export default {
  name: 'AppOverview',

  data() {
    return {
      time: 0,
      // Store current question index
      questionIndex: 0,
      temp: [],
      visibleScrollableDemo: false,
      show: true,
      // An array initialized with "false" values for each question
      // It means: "did the user answered correctly to the question n?" "no".
      // userResponses: Array(ppl.length).fill(false),
      // ekoliterasi: ppl,
      jawaban: [],
      choose: false
    }
  },
  components: {
    Navbar,
    //ButtonPpl,
  },
  methods: {
    async addData() {
      const datas = {
        id: uuid.v1(),
        'id_user': JSON.parse(localStorage.getItem('id_user')),
        "jawabanPPL": this.jawaban,
        "isPPL": true
      }
      console.log(datas)

      axios
        .post('http://localhost:3000/jawabanPPL/', datas)
        .then(() => console.log('Berhasil'))
        .catch((error) => console.log('Gagal : ', error))
      //kita coba set true dulu nnti di akalin dengan make api
      // localStorage.setItem('isPretest', true)
      this.$router.push({ path: '/spritual' })
    },
    emitSelectedOption(no, jawaban) {
      this.temp = []
      this.temp.push([no, jawaban])
      // this.active = !this.active
      this.choose = true
      // this.jawaban.push([no, jawaban]) //formatnya no soal dan jawaban yang di pilih user
      // this.questionIndex++
    },
    next: function () {
      this.questionIndex++;
      this.jawaban.push(this.temp)
      this.temp = []
      this.choose = false
    },
    

    // Restart quiz
    start: function () {
      this.userResponses = [];
      this.questionIndex = 0;
    },
   
  }
}
</script>
