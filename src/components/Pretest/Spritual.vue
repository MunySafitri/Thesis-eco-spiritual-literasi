<!-- eslint-disable prettier/prettier -->
<template>
  <Navbar />
  <div class="container pb-5 overflow-auto ">
    <h1>Aspek Spritual</h1>
    <br/>
    

    <div class="row p-2">
      <section class="radio-section overflow-auto">
        <div class="px-2">
          <table class="table table-responsive table-bordered table-striped">
            <thead class="thead-light text-center">
              <tr>
                <th rowspan="2">No</th>
                <!-- <th rowspan="2">Indikator</th> -->
                <th rowspan="4">Pertanyaan</th>
                <th colspan="10">Tidak -------------- Iya</th>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>

              </tr>
            </thead>
            <tbody >
              <tr v-for="(field, index) in data" :key="index">
                <td scope="row">
                  <label :for="field.angket">{{ index+1 }}</label>
                </td>
                <!-- <td scope="row">
                  <label :for="field.angket">{{ field.indikator }}</label>
                </td> -->
                <td scope="row">
                  <label :for="field.angket">{{ field.angket }}</label>
                </td>


                <td>
                  <input class="form-check-input" type="radio" :id="field.angket + index + '1'" value="1"
                    v-model="field.value">
                  <label class="form-check-label" :for="field.angket + index + '1'"></label>

                </td>
                <td>
                  <input class="form-check-input" type="radio" :id="field.angket + index + '2'" value="2"
                    v-model="field.value">
                  <label class="form-check-label" :for="field.angket + index + '2'"></label><br>
                </td>
                <td>
                  <input class="form-check-input" type="radio" :id="field.angket + index + '3'" value="3"
                    v-model="field.value">
                  <label class="form-check-label" :for="field.angket + index + '3'"></label><br>
                </td>
                <td>
                  <input class="form-check-input" type="radio" :id="field.angket + index + '4'" value="4"
                    v-model="field.value">
                  <label class="form-check-label" :for="field.angket + index + '4'"></label><br>
                </td>
                <td>
                  <input class="form-check-input" type="radio" :id="field.angket + index + '5'" value="5"
                    v-model="field.value">
                  <label class="form-check-label" :for="field.angket + index + '5'"></label><br>
                </td>
                <td>
                  <input class="form-check-input" type="radio" :id="field.angket + index + '6'" value="6"
                    v-model="field.value">
                  <label class="form-check-label" :for="field.angket + index + '6'"></label><br>
                </td>
                <td>
                  <input class="form-check-input" type="radio" :id="field.angket + index + '7'" value="7"
                    v-model="field.value">
                  <label class="form-check-label" :for="field.angket + index + '7'"></label><br>
                </td>
                <td>
                  <input class="form-check-input" type="radio" :id="field.angket + index + '8'" value="8"
                    v-model="field.value">
                  <label class="form-check-label" :for="field.angket + index + '8'"></label><br>
                </td>
                <td>
                  <input class="form-check-input" type="radio" :id="field.angket + index + '9'" value="9"
                    v-model="field.value">
                  <label class="form-check-label" :for="field.angket + index + '9'"></label><br>
                </td>
                <td>
                  <input class="form-check-input" type="radio" :id="field.angket + index + '10'" value="10"
                    v-model="field.value">
                  <label class="form-check-label" :for="field.angket + index + '10'"></label><br>
                </td>
              </tr>

            </tbody>
          </table>
          <div v-show="error" class="text-danger p-3">{{ error[0] }}</div>
          <button type="button" @click="fillJawaban" class="btn btn-success">Submit</button>
          <!-- <div>
            {{ this.error }}
          </div> -->
          
        </div>
      </section>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<!-- refrensi dibawah -->
<!-- https://stackoverflow.com/questions/74691409/vuejs-input-binding-for-dynamic-radio-buttons -->
<script>
var spritual= [
      {
        "id": 1,
        "indikator": "Menyadari akan adanya  Tuhan YME",
        "angket": "Setelah mengikuti Pembelajaran menggunakan E-Modul Siklus Hidrologi, menyadari bahwa Allah Tuhan  YME itu ada?",
        'value': '',
        
      },
      {
        "id": 2,
        "indikator": "Menyadari bahwa fenomena yang ditemukan di alam  itu ada yang mendesain yaitu Tuhan YME",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi, menyadari bahwa segala sesuatu yang ada di Bumi itu bukan semata fenomena alam melainkan didesain oleh Tuhan YME?",
        'value': '',
        
      },
      {
        "id": 3,
        "indikator": "Menyadari bahwa segala sesuatu yang diciptakan Tuhan YME  di Bumi   ada kegunaannya bagi makhluk hidup",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi,  menyadari  bahwa tidak ada yang sia-sia  bagi makhluk hidup segala sesuatu yang diciptakan Tuhan di Bumi?",
        'value': '',
        
      },
      {
        "id": 4,
        "indikator": "Menyadari bahwa Tuhan YME  memiliki sifat-sifat agung yang tidak dimiliki makhluknya",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi,  menyadari  bahwa Allah Tuhan  YME itu maha memelihara dan melindungi makhluk yang diciptakannya?",
        'value': '',
        
      },
      {
        "id": 5,
        "indikator": "Menyadari bahwa semua fenomena alam  beserta hukum-hukum alam yang mereprsentasikannya itu merupakan ilmu Tuhan yang ditebarkan di muka Bumi.",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi,  menyadari  bahwa semua fenomena alam itu merupakan ilmu Tuhan yang ditebarkan di muka Bumi untuk dimanfaatkan oleh manusia?",
        'value': '',
        
      },
      {
        "id": 6,
        "indikator": "Menyadari bahwa semua fenomena alam  beserta hukum-hukum alam yang mereprsentasikannya itu merupakan ilmu Tuhan yang ditebarkan di muka Bumi.",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi, Menyadari bahwa ilmu-ilmu alam yang ditemukan oleh para ilmuwan itu sebenarnya ilmu Allah? ",
        'value': '',
        
      },
      {
        "id": 7,
        "indikator": "Menyadari akan kebenaran semua firman Allah yang ditulis dalam Al-Quran ",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi,  Menyadari terhadap kebenaran firman Allah yang tertulis dalam kitab suci Al-Quran?",
        'value': '',
        
      },
      {
        "id": 8,
        "indikator": "Menyadari bahwa ilmu Allah itu maha luas ",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi,  Menyadari bahwa ilmu dan pengetahuan yang dimiliki manusia itu hanya bagian kecil saja dari ilmu Allah?",
        'value': '',
        
      },
      {
        "id": 9,
        "indikator": "Menyadari bahwa ilmu Allah itu maha luas",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi Menyadari  bahwa setinggi apapun ilmu dan teknologi yang dikuasai manusia, tidak akan pernah menyamai ciptaan Tuhan YME?",
        'value': '',
        
      },
      {
        "id": 10,
        "indikator": "Menyadari  bahwa segala sesuatu yang terjadi di alam yang diciptakan oleh  Allah SWT pasti untuk kebaikan makhluk yang diciptakannya",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi,  Menyadari  bahwa ilmu-ilmu Tuhan YME yang ditebarkan  di muka Bumi ini adalah untuk memudahkan kehidupan manusia di muka Bumi? ",
        'value': '',
        
      },
      {
        "id": 11,
        "indikator": "Menyadari  bahwa segala sesuatu yang terjadi di alam yang diciptakan oleh  Allah SWT pasti untuk kebaikan makhluk yang diciptakannya.",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi,  Menyadari  fenomena hujan yang terjadi di muka Bumi ini adalah sebagai sumber kehidupan dan memudahkan kehidupan makhluk hidup di muka Bumi seperti? ",
        'value': '',
        
      },
      {
        "id": 12,
        "indikator": "Menyadari bahwa semua fenomena alam  beserta hukum-hukum alam yang mereprsentasikannya itu merupakan ilmu Tuhan yang ditebarkan di muka Bumi.",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi,  Menyadari  bahwa konsep menguap, kondensasi dan lain-lain yang terlibat dalam fenomena siklus hidrologi itu sebenarnya merupakan ilmu Tuhan? ",
        'value': '',
        
      },
      {
        "id": 13,
        "indikator": "Menyadari bahwa Tuhan YME  memiliki sifat-sifat agung yang tidak dimiliki makhluknya.",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi,  Menyadari  bahwa  fenomena alam yang disaksikan manusia di Bumi itu sebagai tanda-tanda kebesaran Allah Tuhan YME.",
        'value': '',
        
      },
      {
        "id": 14,
        "indikator": "Menyadari bahwa Tuhan YME  memiliki sifat-sifat agung yang tidak dimiliki makhluknya.",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi,  Menyadari  bahwa  fenomena alam seperti bencana banjir dan kekeringan sebagai tanda-tanda kebesaran Allah Tuhan YME.",
        'value': '',
        
      },
      {
        "id": 15,
        "indikator": "Menyadari akan kebenaran semua firman Allah yang ditulis dalam Al-Quran",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi,  Menyadari bahwa segala sesuatu yang terjadi di Bumi ini sangat selaras dengan keterangan yang difirmankan Allah dalam kitab suci Al-Quran?",
        'value': '',
        
      },
      {
        "id": 16,
        "indikator": "Menyadari akan kebenaran semua firman Allah yang ditulis dalam Al-Quran",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi,  Menyadari bahwa kerusakan alam yang terjadi akibat ulah aktivitas manusia?",
        'value': '',
        
      },
      {
        "id": 17,
        "indikator": "Menyadari akan kebenaran semua firman Allah yang ditulis dalam Al-Quran.",
        "angket": "Setelah mengikuti  Pembelajaran menggunakan E-Modul Siklus Hidrologi,   Menyadari bahwa kata air sebagai hujan sudah dijelaskan kebenarannya melalui  firman Allah dalam kitab suci Al-Quran?",
        'value': '',
        
      }
    ]
  

import Navbar from '@/components/Pretest/Navbar.vue'
import axios from 'axios'
import { uuid } from 'vue-uuid'
// var ppl =[]
export default {
  name: 'AppOverview',

  data() {
    return {
      time: 0,
      opsi: '',
      // sprituals: sprituals,

      // Store current question index
      index: 0,
      temp: [],
      visibleScrollableDemo: false,
      show: true,
      data: spritual,
      // An array initialized with "false" values for each question
      // It means: "did the user answered correctly to the question n?" "no".
      // userResponses: Array(ppl.length).fill(false),
      // ekoliterasi: ppl,
      jawaban: [],
      choose: false,
      error : []
    }
  },
  components: {
    Navbar,
    //ButtonPpl,
  },
  methods: {
    reload(){
      location.reload()
    },
    fillJawaban(){
      this.error =[]
      for(let i  =0 ; i < this.data.length; i++) {
        if(this.data[i].value ==''){
          return this.error.push('Angket no  '+ ( i+1 )+ ' belum anda isi, silahkan isi terlebih dahulu')
          // return console.log('ada yang kosong di baris '+ (i+1))
          
        }
          this.jawaban.push([this.data[i].id , this.data[i].value])
          
          // console.log(this.data[i].id + ' ' + this.data[i].value)
        }
        if(this.jawaban.length === this.data.length)
        {
          this.addData()
        }
    },
    async addData() {
      var id_user =JSON.parse(localStorage.getItem('id_user'))
      const datas = {
        id: uuid.v1(),
        'id_user': id_user,
        "jawabanSpritual": this.jawaban,
        "isSpritual": true
      }
      console.log(datas)
      //tambah data spritual
      axios
        .post('http://localhost:5000/jawabanSpritual/', datas)
        .then((response) => console.log("berhasil:",response.data))
        .catch((error) => console.log('Gagal : ', error))
        //modif atribut user
      axios.patch(`http://localhost:5000/user/${id_user}`, 
        { 
          isPretest: true 
        }
      )
      .then((response) => console.log("berhasil:",response.data))
        .catch((error) => console.log('Gagal : ', error))

      localStorage.setItem('isPretest', true)
      this.$router.push({ path: '/overview' })
    },
  },
   mounted() {
    //reload sekali
    if (localStorage.getItem('reloaded')) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem('reloaded');
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem('reloaded', '1');
      location.reload();
    }
  }
}
</script>
