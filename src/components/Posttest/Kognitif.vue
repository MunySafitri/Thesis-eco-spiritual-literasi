<!-- eslint-disable prettier/prettier -->


<template>
  <Navbar />
  <!-- <div>{{ kognitif[0]}}</div> -->
  <div v-if="kognitif[questionIndex]">
    <div class="container p-2 overflow-auto">
      <div class="card ">
        <div class="row p-5 card-body">
          <section class="radio-section col-sm">
            <div class="px-2">
              <div class="radio-list" style="font-size: 10px">
                <center>
                  <img
                    v-if="kognitif[questionIndex].gambar !== null"
                    :src="
                      require(
                        `../../assets/img/ujian/${kognitif[questionIndex].gambar}`,
                      )
                    "
                    alt=""
                    width="400"
                  />
                </center>
                <br />
                <div 
                  v-for="(k, index) in kognitif"
                  :key="k.id"
                  class=""
                >
                  <div
                    v-show="index === questionIndex"
                    class="question"
                  >
                  <div class="">

                  
                    <p style="font-size: 15px">{{ index + 1 }}. {{ k.pertanyaan }}</p>
                    <ul >
                      <li
                        class="radio-item form-check py-2"
                        v-for="response in k.opsi"
                        :key="response.id"
                      >
                        <input
                          @click="emitSelectedOption(index + 1, response.id)"
                          :id="response.id + k.pertanyaan"
                          type="radio"
                          v-bind:value="response.isi"
                          v-bind:name="response.isi"
                          v-model="userResponses[index]"
                          class="form-check-input" 
                        />
                        <label class="form-check-label justify-content-start" :for="response.id + k.pertanyaan"
                          >{{ response.id }}. {{ response.isi }}
                        </label>
                      </li>
                    </ul>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            v-if="questionIndex === kognitif.length - 1"
            class="d-flex justify-content-sm-end pt-5"
          >
            <!-- <button type="button" class="next round" >&#8250;</button> -->
            <!-- <h1>klik ke PPL</h1> -->
            <CButton
              class="btn-lg"
              :class="choose ? '' : 'disabled'"
              color="success"
              @click="
                () => {
                  visibleScrollableDemo = true,
                  nextModal()
                }
              "
              >Selesai &#8250;</CButton
            >

            <!-- <button class="btn btn-success" @click="addData">Selesai &#8250;</button> -->
          </div>
          <div v-else class="d-flex justify-content-sm-end pt-5">
            <button
              class="btn btn-lg btn-secondary"
              :class="choose ? '' : 'disabled'"
              @click="nextQuestion"
              style="font-size: 10px"
            >
              Berikutnya &#8250;
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
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
          >Peringatan</CModalTitle
        >
      </CModalHeader>
      <CModalBody>
        <div class="accordion-body">
          <p>Lanjut Aspek Perilaku Ekoliterasi?</p>
          <p>16 soal</p>
        </div>
        <p>⮚ Jika halaman mengalami kejanggalan segera refresh</p>
      <br />
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Tidak
          </button>
          <button type="submit" @click="addData" class="btn btn-primary" >
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
// import { ref } from "vue";
// import { uuid } from 'vue-uuid'
var kognitif = [
  {
    id: '1',
    gambar: 'logo.png',
    pertanyaan:
      'Berdasarkan gambar diatas, Urutan proses siklus hidrologi yang benar adalah ….',
    opsi: [
      {
        id: 'a',
        isi: '1, 2, 3, dan 4',
      },
      {
        id: 'b',
        isi: '1, 4, 3, dan 2 ',
      },
      {
        id: 'c',
        isi: '2, 3, 4, dan 1 ',
      },
      {
        id: 'd',
        isi: '3, 4, 1, dan 2',
      },
    ],
    jawaban: 'a',
  },
  {
    id: '2',
    gambar: null,
    pertanyaan:
      'Berikut ini yang merupakan pasangan yang tepat mengenai jenis proses yang terjadi dalam daur air dengan keterangannya yang tepat adalah…',
    opsi: [
      {
        id: 'a',
        isi: 'Evaporasi : Proses perubahan wujud uap air menjadi air akibat adanya pendinginan',
      },
      {
        id: 'b',
        isi: 'Kondensasi: Semua bentuk hujan dari atmosfer ke bumi yang meliputi air, salju, dan es  ',
      },
      {
        id: 'c',
        isi: 'Presipitasi:  Proses penguapan air dari permukaan bumi yang berasal dari danau, laut dan sungai ',
      },
      {
        id: 'd',
        isi: 'Infiltrasi:  Perembesan atau pergerakan air ke dalam tanah melalui pori-pori tanah',
      },
    ],
    jawaban: 'd',
  },
  {
    id: '3',
    gambar: 'no3.jpg',
    pertanyaan:
      'Berdasarkan gambar dibawah ini, jenis siklus air yang terjadi adalah…',
    opsi: [
      {
        id: 'a',
        isi: 'Siklus sedang ',
      },
      {
        id: 'b',
        isi: 'Siklus pendek',
      },
      {
        id: 'c',
        isi: 'Siklus panjang',
      },
      {
        id: 'd',
        isi: 'Siklus temporer',
      },
    ],
    jawaban: 'a',
  },
  {
    id: '4',
    gambar: 'no4.jpg',
    pertanyaan:
      'Saat matahari bersinar terang di atas sungai, panasnya memicu penguapan air dari permukaan sungai. Air ini berubah menjadi uap air dan naik ke atmosfer. | Apakah volume air sungai akan berkurang karena proses evaporasi ? ',
    opsi: [
      {
        id: 'a',
        isi: 'Ya, karena uap air belum tentu menjadi hujan  ',
      },
      {
        id: 'b',
        isi: 'Ya, karena uap air akan menjadi air tanah.',
      },
      {
        id: 'c',
        isi: 'Tidak, karena air yang menguap menjadi uap air hanya sedikit',
      },
      {
        id: 'd',
        isi: 'Tidak, karena uap air tersebut akan kembali ke sungai ',
      },
    ],
    jawaban: 'b',
  },
  {
    id: '5',
    gambar: 'no5.jpg',
    pertanyaan:
      'Ketika hujan turun kaca rumah Thaha basah padahal atap rumah cukup panjang sehingga kaca rumah tidak terkena air hujan. Mengapa hal itu terjadi?',
    opsi: [
      {
        id: 'a',
        isi: 'Kaca rumah bagian dalam basah karena suhu udara di dalam rmah lebih tinggi dari luar ',
      },
      {
        id: 'b',
        isi: 'Kaca rumah bagian luar basah kerena suhu udara di dalam rumah lebih tinggi dari di luar',
      },
      {
        id: 'c',
        isi: 'Kaca rumah bagian dalam basah karena suhu udara di dalam rmah lebih rendah dari luar',
      },
      {
        id: 'd',
        isi: 'Kaca rumah bagian luar basah kerena suhu udara di dalam rumah lebih tinggi dari di luar',
      },
    ],
    jawaban: 'a',
  },
  {
    id: '6',
    gambar: null,
    pertanyaan:
      'Daur air adalah perubahan yang terjadi pada air secara berulang dalam suatu pola tertentu. Air di sungai, danau, rawa, laut, serta hasil transpirasi tumbuhan akan menguap membentuk awan. Awan tersebut adalah hasil…',
    opsi: [
      {
        id: 'a',
        isi: 'Penyerapan titik-titik air yang jatuh kembali ke tanah',
      },
      {
        id: 'b',
        isi: 'Titik-titik air jatuh menuju permukaan Bumi dalam bentuk hujan atau salju',
      },
      {
        id: 'c',
        isi: 'Uap air di atmosfer mengalami pengembunan',
      },
      {
        id: 'd',
        isi: 'Air dipermukaan Bumi mengalami penguapan olah panas',
      },
    ],
    jawaban: 'c',
  },
  {
    id: '7',
    gambar: null,
    pertanyaan:
      'Perhatikan pernyataan berikut ini!\n1. Menyuplai oksigen dan menyerap karbondioksida\n2. Menyimpan keanekaragaman flora dan fauna\n3. Menjaga kondisi dan kestabilan cadangan air\n4. Menyuplai produksi kayu\n5. Menyediakan tempat baru untuk pemukiman, perkebunan, dan pertambangan\nPeran dan fungsi hutan dalam menjaga fungsi siklus air agar kestabilan lingkungan tetap terjaga ditunjukkan pada nomor...',
    opsi: [
      {
        id: 'a',
        isi: '1, 2, dan 3',
      },
      {
        id: 'b',
        isi: '1, 3, dan 4',
      },
      {
        id: 'c',
        isi: '2, 3, dan 5',
      },
      {
        id: 'd',
        isi: '2, 4, dan 5',
      },
    ],
    jawaban: 'b',
  },
  {
    id: '8',
    gambar: null,
    pertanyaan:
      'Salah satu fungsi hutan adalah untuk menjaga cadangan dan kualitas air di daerah sekitarnya. Jika terjadi deforestasi di suatu kawasan hutan tersebut, maka fenomena apa yang akan terjadi berkaitan dengan fungsi hutan tersebut…',
    opsi: [
      {
        id: 'a',
        isi: 'Kepunahan flora dan fauna secara masal',
      },
      {
        id: 'b',
        isi: 'Berkurangnya cadangan air di musim hujan',
      },
      {
        id: 'c',
        isi: 'Berpotensi terjadi bencana banjir saat musim hujan',
      },
      {
        id: 'd',
        isi: 'Air tanah di sekitar hutan menjadi tercemar',
      },
    ],
    jawaban: 'b',
  },
  {
    id: '9',
    gambar: null,
    pertanyaan:
      'Taman Nasional Bali adalah wilayah hutan yang menjadi satu-satunya Taman Nasional yang terdapat di Bali, selain sebagai tempat penangkaran alami satwa endemic, yaitu Jalak Bali. Peranan vegetasi hutan dalam siklus hidrologi adalah...',
    opsi: [
      {
        id: 'a',
        isi: 'Membantu penyerapan air dalam tanah',
      },
      {
        id: 'b',
        isi: 'Mempercepat penjenuhan uap air',
      },
      {
        id: 'c',
        isi: 'Mempercepat proses penguapan',
      },
      {
        id: 'd',
        isi: 'Meningkatkan daya ilfiltrasi',
      },
    ],
    jawaban: 'd',
  },
  {
    id: '10',
    gambar: null,
    pertanyaan:
      'Kegiatan reboisasi dengan menanami pohon pada hutan gundul mempengaruhi proses siklus hidrologi dan berdampak positif bagi pencegahan banjir. Fungsi pepohonan hutan dalam siklus hidrologi adalah...',
    opsi: [
      {
        id: 'a',
        isi: 'Mempercepat aliran permukaan',
      },
      {
        id: 'b',
        isi: 'Mengurangi curah hujan',
      },
      {
        id: 'c',
        isi: 'Meningkatkan infiltrasi',
      },
      {
        id: 'd',
        isi: 'Mengurangi penguapan',
      },
    ],
    jawaban: 'c',
  },
  {
    id: '11',
    gambar: null,
    pertanyaan:
      'Pemerintah Kabupaten Gorontalo Utara akan melakukan program reboisasi berkelanjutan guna menutupi sejumlah lahan dan hutan yang kritis akibat musim kemarau panjang.(Antaranews, 2018). Program tersebut berpengaruh terhadap tahapan siklus air karena ….',
    opsi: [
      {
        id: 'a',
        isi: 'Hutan  berguna menambah sumber resapan',
      },
      {
        id: 'b',
        isi: 'Hutan menjadi sumber utama uap air ke awan.',
      },
      {
        id: 'c',
        isi: 'Hutan dapat menjaga persediaan air bersih',
      },
      {
        id: 'd',
        isi: 'Hutan menahan air ke sungai',
      },
    ],
    jawaban: 'a',
  },
  {
    id: '12',
    gambar: null,
    pertanyaan:
      'Kurangnya air di bumi dapat menyebabkan banyaknya hewan yang mengalami dehidrasi dan tumbuhan yang tidak tumbuhan dengan baik. Kesimpulan yang didapat dari peristiwa diatas adalah ….',
    opsi: [
      {
        id: 'a',
        isi: 'Menyadari pentingnya dan bermanfaatnya proses siklus agar dapat menjaga siklus air',
      },
      {
        id: 'b',
        isi: 'Mencari sumber air dengan melakukan penggalian',
      },
      {
        id: 'c',
        isi: 'Membiarkan saja dengan memanfaatkan yang ada untuk kepentingan sendiri',
      },
      {
        id: 'd',
        isi: 'Tetap menggunakan air secara berlebihan',
      },
    ],
    jawaban: 'a',
  },
  {
    id: '13',
    gambar: null,
    pertanyaan:
      'Berbagai tindakan manusia terhadap hutan\n1. pemupukan tanah secara berkala\n2. penebangan hutan\n3. reboisasi\n4. diadakan pembangunan perumahan diatas lahan hijau\nTindakan manusia terhadap hutan yang membantu menjaga siklus air adalah....',
    opsi: [
      {
        id: 'a',
        isi: '1 dan 3',
      },
      {
        id: 'b',
        isi: '2 dan 3',
      },
      {
        id: 'c',
        isi: '3 dan 4',
      },
      {
        id: 'd',
        isi: '1 dan 4',
      },
    ],
    jawaban: 'a',
  },
  {
    id: '14',
    gambar: null,
    pertanyaan:
      'Manusia membutuhkan air tanah yang bersih untuk dikonsumsi. Dikutip dari detikhelt sumber mata air terbaik berasal dari pegunungan. Jika dikaitkan dengan proses hidrologi, yang menjadi penyebab sumber mata air pegunungan menjadi yang terbaik adalah …...',
    opsi: [
      {
        id: 'a',
        isi: 'Mata air pegunungan relative bebas pencemaran dan sudah mengalami proses penyaringan alami melalui bebatuan',
      },
      {
        id: 'b',
        isi: 'Mata air pegunungan bersumber dari danau',
      },
      {
        id: 'c',
        isi: 'Mata air pegunungan berasal dari proses penyaringan bebatuan',
      },
      {
        id: 'd',
        isi: 'Mata air pegunungan telah melalui penyaringan yang dilakukan oleh akar tumbuhan sehingga layak dikonsumsi',
      },
    ],
    jawaban: 'a',
  },
  {
    id: '15',
    gambar: null,
    pertanyaan:
      'Menurut ayah, Saat hujan keberadaan hutan sangat penting karena hutan menyebabkan air tanah semakin banyak sehingga air yang ada dalam hutan lebih bersih. Pendapat ayah benar karena …..',
    opsi: [
      {
        id: 'a',
        isi: 'Air tanah berasal dari air hujan ',
      },
      {
        id: 'b',
        isi: 'Air tanah sudah disaring lapisan tanah dan akar',
      },
      {
        id: 'c',
        isi: 'Air tanah tidak mengalami pencemaran udara',
      },
      {
        id: 'd',
        isi: 'Air tanah sudah disaring rerumputan dan akar',
      },
    ],
    jawaban: 'a',
  },
  {
    id: '16',
    gambar: null,
    pertanyaan:
      'Masyarakat disuatu desa percaya,air yang berada di hutan sangat lebih bersih. Hal ini disebabkan karena ….',
    opsi: [
      {
        id: 'a',
        isi: 'Air tanah tidak mengalami pencemaran',
      },
      {
        id: 'b',
        isi: 'Air tanah sudah disaring rerumputan dan akar',
      },
      {
        id: 'c',
        isi: 'Air tanah berasal dari air hujan',
      },
      {
        id: 'd',
        isi: 'Air tanah sudah disaring lapisan tanah dan akar',
      },
    ],
    jawaban: 'd',
  },
  {
    id: '17',
    gambar: null,
    pertanyaan:
      'Berikut ini yang merupakan faktor alami penyebab masalah lingkungan hidup adalah….',
    opsi: [
      {
        id: 'a',
        isi: 'Banjir',
      },
      {
        id: 'b',
        isi: 'Limbah industri',
      },
      {
        id: 'c',
        isi: 'Menebang pohon',
      },
      {
        id: 'd',
        isi: 'Membuang sampah di sungai',
      },
    ],
    jawaban: 'a',
  },
  {
    id: '18',
    gambar: null,
    pertanyaan:
      'Banyak air sungai yang tercemar minyak. Saat proses siklus air pengaruh kualitas air terhadap proses siklus air tersebut adalah ….',
    opsi: [
      {
        id: 'a',
        isi: 'air dalam siklus air tersebut memiliki kandungan kimia yang menurunkan kualitas air',
      },
      {
        id: 'b',
        isi: 'air dalam siklus air tersebut tidak sepenuhnya menguap',
      },
      {
        id: 'c',
        isi: 'air dalam siklus air tersebut menguap bersama kotoran yang ada pada minyak',
      },
      {
        id: 'd',
        isi: 'air dalam siklus air menguap tanpa terpengaruh minyak yang mencemari air',
      },
    ],
    jawaban: 'a',
  },
  {
    id: '19',
    gambar: null,
    pertanyaan:
      'Berdasarkan sebuah penelitian pada tahun 2017, kandungan pH air hujan yang menigisi di danau buyan adalah 4 dan mengandung zat kimia yang berlebihan. Namun apabila hanya dilihat sebentar air di danau Buyan tetap jernih dan tidak berbau. Berdasarkan hal tersebut, apa yang dapat disimpulkan …. ',
    opsi: [
      {
        id: 'a',
        isi: 'Air di danau Buyan aman-aman saja karena  tidak terlihat bermasalah',
      },
      {
        id: 'b',
        isi: 'Air di danau Buyan  harus tetap dijaga karena air pada Danau Buyan tergolong tidak bersih berdasarkan kandungannya',
      },
      {
        id: 'c',
        isi: 'Kita dapat meminum air di danau Buyan karena tampak jernih walaupun secara ilmiah terkandung zat kimia yang berlebihan',
      },
      {
        id: 'd',
        isi: 'Kita harus menjaga air di danau Buyan agar tetap jernih',
      },
    ],
    jawaban: 'b',
  },
  {
    id: '20',
    gambar: null,
    pertanyaan:
      'Untuk menghidari efek bencana tanah longsor pemerintah terhadap kandungan air permukaan,  menggalakkan penanaman 1001 pohon. Tujuan dilakukannya hal tersebut adalah ….',
    opsi: [
      {
        id: 'a',
        isi: 'Adanya banyak pohon berkurangnya polusi',
      },
      {
        id: 'b',
        isi: 'Adanya banyak pohon akan tanah akan semakin kokoh dangan  akan menjaga kandungan air tanah',
      },
      {
        id: 'c',
        isi: 'Akan membuat lingkungan hijau',
      },
      {
        id: 'd',
        isi: 'Menambah oksigen',
      },
    ],
    jawaban: 'b',
  },
]
export default {
  name: 'Appkognitif',
  components: {
    Navbar,
  },
  data() {
    return {
      // active: false,
      time: 0,
      kognitif: kognitif,
      questionIndex: 0,
      jawaban: [],
      user: null,
      temp: [],
      userResponses: Array(kognitif.length).fill(false),
      visibleScrollableDemo: false,
      show: true,
      choose: false,
    }
  },
  methods: {
    setKognitif(data) {
      this.kognitif = data
    },
    emitSelectedOption(no, jawaban) {
      this.temp = []
      this.temp.push([no, jawaban])
      this.choose = true
    },
    nextQuestion() {
      // this.temp.push([no, jawaban])
      this.jawaban.push(this.temp) //formatnya no soal dan jawaban yang di pilih user
      this.questionIndex++
      this.temp = []
      this.choose = false
    },
    nextModal() {
      // this.temp.push([no, jawaban])
      this.jawaban.push(this.temp) //formatnya no soal dan jawaban yang di pilih user
      // this.questionIndex++
      this.temp = []
      this.choose = false
    },
    async addData() {
      const datas = {
        id: uuid.v1(),
        id_user: JSON.parse(localStorage.getItem('id_user')),
        jawabanKognitif: this.jawaban,
        isKognitifPosttest: true,
      }
      // console.log(datas)

      axios
        .post('http://localhost:5000/jawabanKognitifPostest/', datas)
        .then((response) => {
          console.log("berhasil:",response.data)
        })
        .catch((error) => console.log('Gagal : ', error))
      this.$router.push({ path: '/ppl-posttest' })
    },
  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
    axios
      .get('http://localhost:5000/user')
      .then((response) => this.setUser(response.data))
      .catch((error) => console.log('Gagal : ', error))
  },
}
</script>
