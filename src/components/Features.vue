<!-- eslint-disable prettier/prettier -->

<style scoped>
.date {
  font-size: 11px;
}

#truncateLongTexts {
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* This is where the magic happens. */
}

.comment-text {
  font-size: 12px;
}

.fs-12 {
  font-size: 12px;
}

.shadow-none {
  box-shadow: none;
}

.name {
  color: #007bff;
}

.cursor:hover {
  color: blue;
}

.cursor {
  cursor: pointer;
}

.textarea {
  resize: none;
}

.cardx {
  border: none;
  box-shadow: 5px 6px 6px 2px #e9ecef;
  border-radius: 4px;
  background-color: ghostwhite;
}

.dots {
  height: 4px;
  width: 4px;
  margin-bottom: 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.badge {
  padding: 7px;
  padding-right: 9px;
  padding-left: 16px;
  box-shadow: 5px 6px 6px 2px #e9ecef;
}

.user-img {
  margin-top: 4px;
}

.check-icon {
  font-size: 17px;
  color: #c3bfbf;
  top: 1px;
  position: relative;
  margin-left: 3px;
}

.form-check-input {
  margin-top: 6px;
  margin-left: -24px !important;
  cursor: pointer;
}

.form-check-input:focus {
  box-shadow: none;
}

.icons i {
  margin-left: 8px;
}

.reply {
  margin-left: 12px;
}

.reply small {
  color: #b7b4b4;
}

.reply small:hover {
  color: green;
  cursor: pointer;
}
</style>

<template>
  <div id="Features" class="four-expect-area pt-100 pb-70">
    <div class="container">
      <div class="row d-flex justify-content-center py-3">
        <!-- <div class="col-md-8"> -->
        <div
          class="headings d-flex justify-content-between align-items-center mb-3"
        >
          <h5>Komentar ({{ Komentar.length }})</h5>
          <div class="buttons">
            <span class="badge bg-white d-flex flex-row align-items-center">
              <span class="text-primary">Comments "ON"</span>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked
                />
              </div>
            </span>
          </div>
          <!-- </div> -->
        </div>
      </div>
      <div style="height: 400px; width: auto" class="overflow-auto">
        <div v-for="komen in Komentar" :key="komen.id" class="cardx p-3 mt-2">
          <div
            class="row d-flex justify-content-between align-items-center cardx-body"
          >
            <div
              class="col-lg-11 col-md-10 py-2 col-sm-10 user d-flex flex-row align-items-center"
            >
              <!-- <img
                src="https://i.imgur.com/ZSkeqnd.jpg"
                width="30"
                class="user-img rounded-circle mr-2"
              /> -->
              <span>
                <small class="font-weight-bold text-primary"
                  >{{ komen.username }}
                </small>
                <br />
                <small class="font-weight-bold">
                  {{ komen.komentar }}
                </small>
              </span>
            </div>
            <!-- <div class="font-bold col-sm-2">
              <small>3 days ago</small>
            </div> -->
          </div>
        </div>
      </div>
      <b-form class="p-3" @submit="onSubmit" @reset="onReset">
        <div class="cardx p-3 mt-2">
          <div class="pt-10">
            <div
              class="headings d-flex justify-content-between align-items-center mb-3"
            >
              <h5>Beri Feedback Untuk Kami {{ user }}</h5>
            </div>
            <div class="d-flex flex-row align-items-start">
              <b-form-textarea
                id="textarea"
                v-model="postKomentar.komentar"
                placeholder="Beri Feedback Kami..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </div>
            <div class="mt-2 px-4 flex-column text-right">
              <button class="btn btn-primary btn-sm shadow-none" type="submit">
                Post comment
              </button>
              <!-- <button
                class="px-2 btn btn-outline-danger btn-sm ml-1 shadow-none"
                type="button"
              >
                Cancel
              </button> -->
            </div>
          </div>
        </div>
      </b-form>
    </div>
  </div>
  <!-- <b-cardx class="mt-3" header="Form Data Result">
    
    <pre class="m-0">                  {{ postKomentar }} </pre>
    {{ Komentar }}
  </b-cardx> -->
</template>

<!-- eslint-disable prettier/prettier -->
<style scoped>

body {
  font-family: 'Averia Serif Libre', cursive;
  background-color: rgb(19, 18, 21);
  color: #ffffff;
}
</style>
<!-- eslint-disable prettier/prettier -->

<script>
import axios from 'axios'
import { uuid } from 'vue-uuid'

export default {
  name: "AppFeatures",
  data() {
    return {
      user: '',
      Komentar: [],
      postKomentar: {
        id: uuid.v1(),
        username: '',
        komentar: '',
        date: null
      },
    }
  },
  methods: {
    setKomentar(data) {
      this.Komentar = data
    },
    setUsername(name) {
      this.postKomentar.username = name
      this.user = name
    },
    onSubmit() {
      // event.preventDefault()

      if (this.postKomentar.komentar !== '') {
        let data = this.postKomentar
        // delete data.passwordConfirm
        //langsung di post ke dalam localhost/users
        axios
          .post('http://localhost:3000/komentar/', data)
          .then(() => console.log('Berhasil'))
          .catch((error) => console.log('Gagal : ', error))
        this.postKomentar.komentar = '' //permasalahan sekrang, tidak secara realtime ia mengubah
        // axios
        //   .get('http://localhost:3000/komentar')
        //   .then((response) => this.setKomentar(response.data))
        //   .catch((error) => console.log('Gagal : ', error))

        // this.$router.push({ path: '/overview' })
        // alert(JSON.stringify(data)) //tampilkan notif toast atau navbar bahw aberhasil di daftrkan
      }
    },

  },
  mounted() {
    // console.log(JSON.parse(localStorage.getItem('user')))
    // this.user = JSON.parse(localStorage.getItem('user'))
    this.setUsername(JSON.parse(localStorage.getItem('user')))
    setInterval(() => {
      axios
        .get('http://localhost:3000/komentar')
        .then((response) => this.setKomentar(response.data))
        .catch((error) => console.log('Gagal : ', error))
	}, 3000)
    // this.postKomentar.date = Date.now() //nanti kita pikirkan giman cara konversi ke waktu secara realtime

  }
};
</script>