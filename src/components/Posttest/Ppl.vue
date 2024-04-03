<!-- eslint-disable prettier/prettier -->
<template>
  <Navbar />
  <div class="container pb-5">
    <h1 class="p-3">Perilaku Peduli Lingkungan</h1>

    <div class="card">
      <div class="row p-5 card-body">
        <section class="radio-section col-sm">
          <div class="px-2">
            <div class="radio-list" style="font-size: 10px">
              <!-- <img src="../../assets/img/logo.png" alt="" width="400"> -->
       
              <div v-for="(ppl, index) in ekoliterasi" :key="ppl.id" class="question-content">
                <div v-show="index === questionIndex" class="question question-box">
                  <p style="font-size: 15px">{{ index + 1 }}. {{ ppl.pernyataan }}</p>
                  <ul>
                    <li  class="radio-item form-check py-2 " v-for="response in ppl.opsi" :key="response.id">
                      <input @click="emitSelectedOption(index + 1, response.id)" :id="response.id + ppl.pernyataan"
                        type="radio" v-bind:value="response.isi" v-bind:name="response.isi"
                        v-model="userResponses[index]" class="form-check-input"/>
                        <label class="form-check-label justify-content-start" :for="response.id + ppl.pernyataan">{{ response.id }}. {{ response.isi }}
                      </label>
                    </li>
                  </ul>
                  <div class="col d-flex justify-content-between">
                    <div v-if="questionIndex === ekoliterasi.length - 1" class="d-flex justify-content-sm-end pt-5">
                      <CButton color="success" class="btn-lg" :class="choose ? '' : 'disabled'" @click="() => {
                  visibleScrollableDemo = true,
                    nextModal()
                }
                ">Selesai &#8250;</CButton>

                      <!-- <button class="btn btn-success" @click="addData">Selesai &#8250;</button> -->
                    </div>
                    <div v-else class="row d-flex justify-content-sm-end pt-5">
                      <button class="btn btn-lg btn-secondary" style ="font-size:10px" :class="choose ? '' : 'disabled'" v-on:click="next">
                        Berikutnya &#8250;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- modal -->
    <CModal scrollable size="lg" :visible="visibleScrollableDemo" @close="() => {
                  visibleScrollableDemo = false
                }
                " aria-labelledby="ScrollingLongContentExampleLabel2">
      <CModalHeader>
        <CModalTitle id="ScrollingLongContentExampleLabel2">Peringatan</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <div class="accordion-body">
          <p>Lanjut Aspek Perilaku Spritual?</p>
          <p>17 soal</p>
        </div>
        <p>⮚ Jika halaman mengalami kejanggalan segera refresh</p>
        <br />
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Tidak
          </button>
          <button type="button" @click="addData" class="btn btn-primary">
            Mulai
          </button>
        </div>
      </CModalBody>
    </CModal>
  </div>

  <!-- <div v-if="jawaban">
    {{ jawaban }}
  </div> -->
</template>
<!-- eslint-disable prettier/prettier -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@300;400;700&display=swap');

ul {
  list-style-type: none;
}

body {
  font-family: 'Averia Serif Libre', cursive;
  background-color: rgb(19, 18, 21);
  color: #ffffff;
}

h1 {
  margin-bottom: 20px;
}


.radio-item label {
  display: block;
  padding: 0px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  position: relative;

}

.radio-item label:after,
.radio-item label:before {
  content: '';
  position: absolute;
  border-radius: 50%;
}

.radio-item label:after {
  height: 19px;
  width: 19px;

  left: 19px;
}

.radio-item label:before {
  height: 20px;
  width: 20px;
  left: 21px;
  top: calc(50%-5px);
  transform: scale(5);
  opacity: 0;
  visibility: hidden;
  transition: 0.4s ease-in-out 0s;
}

.radio-item [type='radio']:checked ~ label::before {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
}
</style>
<!-- eslint-disable prettier/prettier -->
<script>
import Navbar from '@/components/Posttest/Navbar.vue'
import axios from 'axios'
import { uuid } from 'vue-uuid'
//import ButtonPpl from '@/components/Test/pplChoice.vue'

var ppl = [
  {
    id: 1,
    pernyataan:
      'Saya berupaya keras menghemat penggunaan air di rumah agar pompa air di rumah tidak sering bekerja',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 2,
    pernyataan:
      'Saya menutup keran air jika menemukan aliran air yang tidak diperlukan',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 3,
    pernyataan:
      'Saya menegur teman yang tidak menghabiskan air minum kemasan sewaktu ada kegiatan',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 4,
    pernyataan:
      'Saya lebih memilih mandi dengan shower dibandingkan dengan gayung agar lebih hemat dalam penggunaan air ',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 5,
    pernyataan:
      'Saya membiarkan air mengalir dengan percuma meskipun dikarenakan kebocoran pipa merupakan salah satu bentuk pemborosan terhadap air.',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 6,
    pernyataan:
      'Saya berusaha keras penghematan penggunaan air pada waktu mencuci pakaian, mencuci alat makan/minum ataupun mencuci sayuran/buah',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 7,
    pernyataan:
      'Saya berusaha Memeliharan kran air agar tidak cepat rusak dan segera menggantinya bila rusak/bocor. ',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 8,
    pernyataan:
      'Menampung air yang tetap mengalir saat berwudhu. Jika setiap berwudhu air yang dapat ditampung sekitar 1 - 1,5 liter/orang ',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 9,
    pernyataan:
      'Saya tidak membuang sampah ke daerah aliran sungai, sehingga tidak terjadi pencemaran air ',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 10,
    pernyataan:
      'Saya ikut serta menjadi anggota komuditas peduli lingkungan seperti program penghijauan yang bertujuan menjaga ketersediaan air bersih?',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 11,
    pernyataan:
      'Saya berusaha memilah limbah seperti bahan kimia berbahaya atau obat-obatan agar tidak mencemari air bersih?',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 12,
    pernyataan:
      'Saya menyarankan kepada keluarga agar memperhatikan limbah dari mencuci mobil atau membersihkan halaman tidak mencemari saluran air atau sungai disekitar yang dijadikan sebagai sumber air.	',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 13,
    pernyataan:
      'Saya mencoba memanfaatkan air bekas pakai (greywater) untuk menyiram tanaman',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 14,
    pernyataan:
      'Saya berusaha manfaatkan air bilasan terakhir cucian untuk mengepel lantai atau membersihkan kamar mandi	',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 15,
    pernyataan:
      'Saya menyarankan kepada semua pihak agar menanam pohon disekitar area rumah atau sekolah untuk membantu penyerapan air ke dalam tanah.',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
  {
    id: 16,
    pernyataan:
      'Saya menyarankan kepada teman agar setiap rumah mereka menyediakan area resapan air, sehingga air hujan tidak langsung terbuang ke saluran air, namun meresap kembali ke tanah sebagai sumber air bersih.',
    opsi: [
      {
        id: 'a',
        isi: 'Selalu',
      },
      {
        id: 'b',
        isi: 'Sering ',
      },
      {
        id: 'c',
        isi: 'Jarang ',
      },
      {
        id: 'd',
        isi: 'Tidak Pernah',
      },
    ],
  },
]
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
      userResponses: Array(ppl.length).fill(false),
      ekoliterasi: ppl,
      jawaban: [],
      choose: false,
    }
  },
  components: {
    Navbar,
    //ButtonPpl,
  },
  methods: {
    async addData(no,jawaban) {
      this.temp = []
      this.temp.push([no, jawaban])
      
      this.choose = true
      const datas = {
        id: uuid.v1(),
        id_user: JSON.parse(localStorage.getItem('id_user')),
        jawabanPPL: this.jawaban,
        isPPLPosttest: true,
      }
      console.log(datas)

      axios
        .post('http://localhost:5000/jawabanPPLPosttest/', datas)
        .then((response) => console.log("berhasil:",response.data))
        .catch((error) => console.log('Gagal : ', error))
      //kita coba set true dulu nnti di akalin dengan make api
      // localStorage.setItem('isPretest', true)
      this.$router.push({ path: '/spritual-posttest' })
    },
    emitSelectedOption(no, jawaban) {
      this.temp = []
      this.temp.push([no, jawaban])
      
      this.choose = true
      
    },
    nextModal() {
      // this.temp.push([no, jawaban])
      this.jawaban.push(this.temp) //formatnya no soal dan jawaban yang di pilih user
      // this.questionIndex++
      this.temp = []
      this.choose = false
    },
    next: function () {
      this.questionIndex++
      this.jawaban.push(this.temp)
      this.temp = []
      this.choose = false
    },
  
    // Restart quiz
    start: function () {
      this.userResponses = []
      this.questionIndex = 0
    },
  },
  mounted(){
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
