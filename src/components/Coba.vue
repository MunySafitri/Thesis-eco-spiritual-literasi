<!-- eslint-disable prettier/prettier -->

<template>
  <div class="container">
    <h1>Quiz Title</h1>
    <div id="quiz">
      <div id="question">
        <h2>Question 1:</h2>
        <p>What is the capital of France?</p>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="question1" id="option1" value="option1">
          <label class="form-check-label" for="option1">
            Paris What is the capital of France?What is the capital of France?What is the capital of France?What is the capital of France?What is the capital of France?What is the capital of France?What is the capital of France?What is the capital of France?What is the capital of France?What is the capital of France?What is the capital of France?What is the capital of France?What is the capital of France?What is the capital of France?
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="question1" id="option2" value="option2">
          <label class="form-check-label" for="option2">
            Rome
          </label>
        </div>
        <!-- Add more options as needed -->
      </div>
      <button id="submit" class="btn btn-primary">Submit</button>
    </div>
    <div id="result" style="display:none;">
      <!-- Result will be displayed here -->
    </div>
  </div>

  
    <div>
    <a href="https://vitejs.dev" target="_blank">
      <img  class="logo" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img  class="logo vue" alt="Vue logo"/>
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue"/> -->
  <button @click.prevent="exportExcel">excel</button> 



<div>
  <p>Percobaan Mongodb</p>
  <h1 v-for= "d in data" :key="d">
    <b>{{ d.name }}</b>
    <b>{{ d.pelajaran }}</b>
    <b>{{ d.kelas }}</b>

  </h1>

</div>



  </template>
<!-- eslint-disable prettier/prettier -->

<script>
// import Navbar from '@/components/Pretest/Navbar.vue'
var $ = require('jquery')
$('#submit').click(function () {
  // Logic to check answers and display result
  // Example: You can use jQuery to get the selected answer and compare it with the correct answer
  // Display result accordingly
})

import xlsx from 'xlsx/dist/xlsx.full.min'
import axios from 'axios'
// const API_URL = "http://localhost:5000"
export default {
  name: 'App',
  data() {
    return {
      framework: [
        { name: 'George Washington', birthday: '1732-02-22' },
        { name: 'John Adams', birthday: '1735-10-19' },
        { name: 'John Adams', birthday: '1735-10-19' },
        { name: 'John Adams', birthday: '1735-10-19' },
      ],
      data:[],
    }
  },
  methods: {
    exportExcel() {
      const XLSX = xlsx
      const workbook = XLSX.utils.book_new()
      const worksheet = XLSX.utils.json_to_sheet(this.framework)
      XLSX.utils.book_append_sheet(workbook, worksheet, 'framework')
      XLSX.writeFile(workbook, 'framework.xlsx')
    },
    async refreshData(){
      // fetch('http://localhost:5000/api/ecoliterasi/GetEcoliterasi')
      // .then((response) =>response.json())
      // .then((json) =>  this.data = json)
      axios
      .get("http://localhost:5000/api/ecoliterasi/GetEcoliterasi")
      .then((response) => this.data =response.data)
    .catch((error) => console.log('Gagal : ', error))
   }
  },
  mounted(){
    this.refreshData()
  }

}
</script>