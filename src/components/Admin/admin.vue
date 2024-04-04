<!-- eslint-disable prettier/prettier -->
<template>
    <Navbar />

    <div class="container py-5">
        <div class="card bg-white overflow-auto">
            <div class="card-header  ">
                <b-row>
                    <b-col>
                        <h1>Halaman Administrator</h1>
                    </b-col>
                    <b-col cols="12" md="auto"></b-col>
                    <b-col col lg="2" align-self="end">
                        <b-dropdown id="dropdown-lef" offset="25" text="Pretest" variant="dark" class=" col-6">
                            <b-dropdown-item href="#" @click="exportExcelPretestKognitif">Kognitif</b-dropdown-item>
                            <b-dropdown-item href="#"
                                @click="exportExcelPretestEkoliterasi">Ekoliterasi</b-dropdown-item>
                            <b-dropdown-item href="#" @click="exportExcelPretestSpritual">Spritual</b-dropdown-item>
                        </b-dropdown>

                        <b-dropdown id="dropdown-right" offset="25" right text="Postest" variant="dark"
                            class=" col-6 px-2">
                            <b-dropdown-item href="#" @click="exportExcelPosttestKognitif">Kognitif</b-dropdown-item>
                            <b-dropdown-item href="#"
                                @click="exportExcelPosttestEkoliterasi">Ekoliterasi</b-dropdown-item>
                            <b-dropdown-item href="#" @click="exportExcelPosttestSpritual">Spritual</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                </b-row>
            </div>
            <div class="card-body overflow-auto ">
                <table class=" table table-responsive table-bordered table-striped" id="myTable">
                    <thead>
                        <tr>
                            <!-- <th scope="col">#</th> -->
                            <th scope="col">username</th>
                            <th scope="col">email</th>
                            <th scope="col">pelajaran</th>
                            <th scope="col">kelas</th>
                            <th scope="col">semester</th>
                            <th scope="col">Pretest</th>
                            <th scope="col">Posttest</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>

            </div>

        </div>

        <!-- ini halaman admin btw
        {{ user }}
        <br />
        {{ jawabanKognitif }}
        <br />
        {{ jawabanSpritual }}
        <br />
        {{ jawabanPPL }}
        <br /> -->
    </div>
    <div class="bg-body-tertiary text-center text-lg-start">
        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2024 Copyright:
            <a class="text-body"><span> </span>SupporterC</a>
        </div>
        <!-- Copyright -->
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import axios from 'axios'
// import { uuid } from 'vue-uuid'
import Navbar from '@/components/Pretest/Navbar.vue'
var $ = require('jquery');

import xlsx from 'xlsx/dist/xlsx.full.min'
export default {
    name: "Admin",
    data() {
        return {

            visibleScrollableDemo: false,
            user: [],
            jawabanKognitif: [],
            jawabanSpritual: [],
            jawabanPPL: [],
            framework: [],
        }
    },
    components: {
        Navbar,
    },
    methods:
    {
        setUser(data) {
            this.user = data
        },
        setKognitif(data) {
            this.jawabanKognitif = data
        },
        setSpritual(data) {
            this.jawabanSpritual = data
        },
        setPPL(data) {
            this.jawabanPPL = data
        },
        searchId(data, id) {
            return data.filter((d) => d.id === id)
            // console.log(data.filter((nama) => nama.id_user === id))
        },
        exportExcelPosttestKognitif() {
            // let no = 1
            let data = []
            //simpan nama, kelas, semeseter, jawaban nya
            let idx = 0
            for (let i = 0; i < this.jawabanKognitif.length; i++) {
                let user = this.searchId(this.user, this.jawabanKognitif[i].id_user) //set user data untuk diambil pert data user
                //jika sudah posttest kognitif
                if (this.jawabanKognitif[i].isKognitifPosttest === true) {
                    // console.log("id :", user[0].id,"nama :", user[0].name,", jawaban kognitif: ",this.jawabanKognitif[i].jawabanKognitif)        
                    console.log("nama :", user[0].name)
                    data.push({ "nama_siswa": user[0].name })

                    for (let j = 0; j < this.jawabanKognitif[i].jawabanKognitif.length; j++) {
                        let num = this.jawabanKognitif[i].jawabanKognitif[j][0][0].toString()
                        // console.log("no: ", this.jawabanKognitif[i].jawabanKognitif[j][0][0]," jawaban: ",this.jawabanKognitif[i].jawabanKognitif[j][0][1])
                        data[idx][num] = this.jawabanKognitif[i].jawabanKognitif[j][0][1]
                    }
                    // data[idx]["nama_siswa"] = user[0].name
                    idx++
                    // no++

                }
            }
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '-' + dd + '-' + yyyy;
            // this.framework = data
            console.log(data)
            const XLSX = xlsx;
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(workbook, worksheet, "framework");
            XLSX.writeFile(workbook, "Kognitif-Posttest_" + today + ".xlsx")
        },
        exportExcelPretestKognitif() {
            // let no = 1
            let data = []
            //simpan nama, kelas, semeseter, jawaban nya
            let idx = 0
            for (let i = 0; i < this.jawabanKognitif.length; i++) {
                let user = this.searchId(this.user, this.jawabanKognitif[i].id_user) //set user data untuk diambil pert data user
                //jika sudah pretest kognitif
                if (this.jawabanKognitif[i].isKognitif === true) {
                    // console.log("id :", user[0].id,"nama :", user[0].name,", jawaban kognitif: ",this.jawabanKognitif[i].jawabanKognitif)        
                    // console.log("no: ", no, "nama :", user[0].name)
                    data.push({ "nama_siswa": user[0].name })

                    for (let j = 0; j < this.jawabanKognitif[i].jawabanKognitif.length; j++) {
                        let num = this.jawabanKognitif[i].jawabanKognitif[j][0][0].toString()
                        // console.log("no: ", this.jawabanKognitif[i].jawabanKognitif[j][0][0]," jawaban: ",this.jawabanKognitif[i].jawabanKognitif[j][0][1])
                        data[idx][num] = this.jawabanKognitif[i].jawabanKognitif[j][0][1]
                    }

                    idx++
                    // no++

                }
            }
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '-' + dd + '-' + yyyy;
            // this.framework = data
            console.log(data)
            const XLSX = xlsx;
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(workbook, worksheet, "framework");
            XLSX.writeFile(workbook, "Kognitif-Pretest_" + today + ".xlsx")
        },
        exportExcelPretestEkoliterasi() {
            // let no = 1
            let data = []
            //simpan nama, kelas, semeseter, jawaban nya
            let idx = 0
            for (let i = 0; i < this.jawabanPPL.length; i++) {
                let user = this.searchId(this.user, this.jawabanPPL[i].id_user) //set user data untuk diambil pert data user
                //jika sudah pretest kognitif
                if (this.jawabanPPL[i].isPPL === true) {
                    // console.log("id :", user[0].id,"nama :", user[0].name,", jawaban kognitif: ",this.jawabanPPL[i].jawabanPPL)        
                    // console.log("no: ", no, "nama :", user[0].name)
                    data.push({ "nama_siswa": user[0].name })
                    for (let j = 0; j < this.jawabanPPL[i].jawabanPPL.length; j++) {
                        let num = this.jawabanPPL[i].jawabanPPL[j][0][0].toString()
                        // console.log("no: ", this.jawabanPPL[i].jawabanPPL[j][0][0]," jawaban: ",this.jawabanPPL[i].jawabanPPL[j][0][1])
                        data[idx][num] = this.jawabanPPL[i].jawabanPPL[j][0][1]
                    }
                    // data[idx]["nama_siswa"] = user[0].name
                    idx++
                    // no++

                }
            }
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '-' + dd + '-' + yyyy;
            // this.framework = data
            console.log(data)
            const XLSX = xlsx;
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(workbook, worksheet, "framework");
            XLSX.writeFile(workbook, "Ekoliterasi-Pretest_" + today + ".xlsx")
        },
        exportExcelPosttestEkoliterasi() {
            // let no = 1
            let data = []
            //simpan nama, kelas, semeseter, jawaban nya
            let idx = 0
            for (let i = 0; i < this.jawabanPPL.length; i++) {
                let user = this.searchId(this.user, this.jawabanPPL[i].id_user) //set user data untuk diambil pert data user
                //jika sudah pretest kognitif
                if (this.jawabanPPL[i].isPPLPosttest === true) {
                    // console.log("id :", user[0].id,"nama :", user[0].name,", jawaban kognitif: ",this.jawabanPPL[i].jawabanPPL)        
                    // console.log("no: ", no, "nama :", user[0].name)
                    data.push({ "nama_siswa": user[0].name })
                    for (let j = 0; j < this.jawabanPPL[i].jawabanPPL.length; j++) {
                        let num = this.jawabanPPL[i].jawabanPPL[j][0][0].toString()
                        // console.log("no: ", this.jawabanPPL[i].jawabanPPL[j][0][0]," jawaban: ",this.jawabanPPL[i].jawabanPPL[j][0][1])
                        data[idx][num] = this.jawabanPPL[i].jawabanPPL[j][0][1]
                    }
                    // data[idx]["nama_siswa"] = user[0].name
                    idx++
                    // no++

                }
            }
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '-' + dd + '-' + yyyy;
            // this.framework = data
            console.log(data)
            const XLSX = xlsx;
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(workbook, worksheet, "framework");
            XLSX.writeFile(workbook, "Ekoliterasi-Posttest_" + today + ".xlsx")
        },
        exportExcelPosttestSpritual() {
            // let no = 1
            let data = []
            //simpan nama, kelas, semeseter, jawaban nya
            let idx = 0
            for (let i = 0; i < this.jawabanSpritual.length; i++) {
                let user = this.searchId(this.user, this.jawabanSpritual[i].id_user) //set user data untuk diambil pert data user
                //jika sudah pretest kognitif
                console.log(this.jawabanSpritual[i])
                if (this.jawabanSpritual[i].isSpritualPosttest === true) {
                    // console.log("id :", user[0].id,"nama :", user[0].name,", jawaban kognitif: ",this.jawabanSpritual[i].jawabanSpritual)        
                    console.log("berhasil msuk kondisi")
                    data.push({ "nama_siswa": user[0].name })
                    for (let j = 0; j < this.jawabanSpritual[i].jawabanSpritual.length; j++) {
                        console.log("berhasil msuk looping")
                        let num = this.jawabanSpritual[i].jawabanSpritual[j][0].toString()
                        console.log("berhasil msuk num")
                        // console.log("no: ", this.jawabanSpritual[i].jawabanSpritual[j][0][0]," jawaban: ",this.jawabanSpritual[i].jawabanSpritual[j][0][1])
                        data[idx][num] = this.jawabanSpritual[i].jawabanSpritual[j][1].toString()
                    }
                    console.log(data)
                    idx++
                    // no++

                }
            }
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '-' + dd + '-' + yyyy;
            // this.framework = data
            console.log(data)
            const XLSX = xlsx;
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(workbook, worksheet, "framework");
            XLSX.writeFile(workbook, "Spritual-Posttest_" + today + ".xlsx")
        },
        exportExcelPretestSpritual() {
            // let no = 1
            let data = []
            //simpan nama, kelas, semeseter, jawaban nya
            let idx = 0
            for (let i = 0; i < this.jawabanSpritual.length; i++) {
                let user = this.searchId(this.user, this.jawabanSpritual[i].id_user) //set user data untuk diambil pert data user
                //jika sudah pretest kognitif
                console.log(this.jawabanSpritual[i])
                if (this.jawabanSpritual[i].isSpritual === true) {
                    // console.log("id :", user[0].id,"nama :", user[0].name,", jawaban kognitif: ",this.jawabanSpritual[i].jawabanSpritual)        
                    console.log("berhasil msuk kondisi")
                    data.push({ "nama_siswa": user[0].name })
                    for (let j = 0; j < this.jawabanSpritual[i].jawabanSpritual.length; j++) {
                        console.log("berhasil msuk looping")
                        let num = this.jawabanSpritual[i].jawabanSpritual[j][0].toString()
                        console.log("berhasil msuk num")
                        // console.log("no: ", this.jawabanSpritual[i].jawabanSpritual[j][0][0]," jawaban: ",this.jawabanSpritual[i].jawabanSpritual[j][0][1])
                        data[idx][num] = this.jawabanSpritual[i].jawabanSpritual[j][1].toString()
                    }
                    console.log(data)
                    idx++
                    // no++

                }
            }
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '-' + dd + '-' + yyyy;
            // this.framework = data
            console.log(data)
            const XLSX = xlsx;
            const workbook = XLSX.utils.book_new();
            const worksheet = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(workbook, worksheet, "framework");
            XLSX.writeFile(workbook, "Spritual-Pretest_" + today + ".xlsx")
        }

    },
    mounted() {
        setTimeout(() => {
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
                .get("http://localhost:5000/user")
                .then((response) => {
                    $("#myTable").DataTable({
                        // dom: "Bfrtip",
                        // buttons: ["colvis", "excel", "print", "csv"],
                        data: response.data,
                        columns: [
                            // { data: "id" },
                            {
                                data: {
                                    'b': 'name',
                                    'o': 'isAdmin'
                                },

                                render: function (data) {
                                    if (data['isAdmin']) {
                                        return `
                                        <td><strong>${data['name']}</strong></td>                `
                                    }
                                    else {
                                        // console.log("iaprwtest", data)
                                        return `
                                        <td>${data['name']}</td> 
                                        `
                                    }
                                }
                            },
                            { data: "email" },
                            { data: "pelajaran" },
                            { data: "kelas" },
                            { data: "semester" },
                            {
                                data: 'isPretest',
                                searchable: false,
                                orderable: false,
                                width: '5%',
                                render: function (data) {
                                    if (data) {
                                        return `
                                        <td><button type="button" class="btn btn-primary btn-sm disabled">Selesai</button></td>                `
                                    }
                                    else {
                                        // console.log("iaprwtest", data)
                                        return `
                                        <td><button type="button" class="btn btn-danger btn-sm disabled">Belum</button></td>
                                        `
                                    }
                                }
                            },
                            {
                                data: 'isPosttest',
                                searchable: false,
                                orderable: false,
                                width: '5%',
                                render: function (data) {
                                    if (data) {

                                        return `
                                        <td><button type="button" class="btn btn-primary btn-sm disabled">Selesai</button></td>                `
                                    }
                                    else {
                                        return `
                                        <td><button type="button" class="btn btn-danger btn-sm disabled">Belum</button></td>
                                        `
                                    }
                                }
                            }
                        ],
                    });
                })
                .catch((error) => console.log(error.response));
            axios
                .get('http://localhost:5000/user')
                .then((response) => this.setUser(response.data))
                .catch((error) => console.log('Gagal : ', error))
            axios
                .get('http://localhost:5000/jawabanKognitif')
                .then((response) => this.setKognitif(response.data))
                .catch((error) => console.log('Gagal : ', error))
            axios
                .get('http://localhost:5000/jawabanSpritual')
                .then((response) => this.setSpritual(response.data))
                .catch((error) => console.log('Gagal : ', error))
            axios
                .get('http://localhost:5000/jawabanPPL')
                .then((response) => this.setPPL(response.data))
                .catch((error) => console.log('Gagal : ', error))
        }, 2000);
        console.log(this.user)
    },
}


</script>