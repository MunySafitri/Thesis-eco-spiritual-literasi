<!-- eslint-disable prettier/prettier -->

<template>
  <Navbar />
  <!-- <div>{{ kognitif[0]}}</div> -->
  <div v-if="kognitif[questionIndex]">

    <!-- {{ console.log("ini data:", this.jawaban) }} -->
    <!-- <div v-for="kog in kognitif" :key="kog.id"> -->
    <div class="container">

      <div class="row align-items-center">
        <div class="question-container">
          <!-- nnati gambar nya diganti -->
          <img src="../../assets/img/logo.png" alt="">
          <h1 class="question">
            {{ kognitif[questionIndex].pertanyaan }}
          </h1>
        </div>
        <div class="options-container">
          <div v-for="opsi in kognitif[questionIndex].opsi" :key="opsi.id" class="option"
            @click="emitSelectedOption(kognitif[questionIndex].id, opsi.id)">

            <p class="option-label">{{ opsi.id }}</p>
            <div class="option-value">
              <p>{{ opsi.isi }}</p>
            </div>

          </div>
          <!-- <strong> Jawaban yang benar {{ kognitif[questionIndex].jawaban }}</strong> -->
        </div>
      </div>
    </div>
  </div>
  <!-- coba kita simpan datanya -->
  <div v-else>
    <h1>klik ke overview</h1>
    <button class="btn btn-danger" @click="addData"> Data hasil jawabn disimpan</button>
  </div>
  <div v-if="user">
    {{ user[0] }}
  </div>
  <!-- {{ user[0] }} -->
  <!-- {{ typeof(user[0)}} -->
  <!-- </div> -->


</template>
<!-- eslint-disable prettier/prettier -->

<style scoped>
.question-container {
  margin-top: 20px;
}

.question {
  font-size: 20px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  margin-bottom: 10px;
  cursor: pointer;
}

.option-label {
  background-color: bisque;
  width: 50px;
  height: 40px;
  margin-bottom: 10px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  /* background-color: rgb(244, 239, 239); */
  width: 80%;
  font-size: 15px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  padding: 0 20px
}

.option-value:hover {
  background-color: rgb(244, 239, 239);

}
</style>
<!-- eslint-disable prettier/prettier -->

<script>
import Navbar from '@/components/Layouts/Navbar.vue'
import axios from 'axios'
// import { ref } from "vue";
// import { uuid } from 'vue-uuid'

export default {
  name: 'AppKkognitif',

  data() {
    return {
      time: 0,
      kognitif: [],
      questionIndex: 0,
      jawaban: [],
      user: null
    }
  },
  components: {
    Navbar,
  },
  methods: {
    setKognitif(data) {
      this.kognitif = data
    },
    setUser(data) {
      this.user = data.filter(d => d.id === JSON.parse(localStorage.getItem('id_user')))
    },
    emitSelectedOption(no, jawaban) {
      this.jawaban.push([no, jawaban]) //formatnya no soal dan jawaban yang di pilih user
      this.questionIndex++
    },
    addData() {
      this.user[0]['kognitif'] = this.jawaban
      this.user[0]['isKognitif'] = "true"
      // menghapus yang lama (masih gagal)
      axios.get('http://localhost:3000/user/'+this.user[0].id )
        .then(response => {
          console.log(response.data);
        })
        .catch((error) => console.log('Gagal : ', error))
        //mengupdate data user yang baru telah ujian kognitif
        axios
          .post('http://localhost:3000/user/', this.user[0])
          .then(() => console.log('Berhasil'))
          .catch((error) => console.log('Gagal : ', error))
          //kita coba set true dulu nnti di akalin dengan make api
          localStorage.setItem('isPretest', true)
        this.$router.push({ path: '/overview' })
    }

  },
  mounted() {
    axios
      .get('http://localhost:3000/kognitif')
      .then((response) => this.setKognitif(response.data))
      .catch((error) => console.log('Gagal : ', error))

    axios
      .get('http://localhost:3000/user')
      .then((response) => this.setUser(response.data))
      .catch((error) => console.log('Gagal : ', error))

      
  },
}
</script>
