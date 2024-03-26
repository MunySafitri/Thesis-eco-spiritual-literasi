<!-- eslint-disable prettier/prettier -->
<template>
    <Navbar />
    <div class="container p-2">
        <div class="card bg-white overflow-auto">
            <div class="card-header row justify-content-between">
                <div class="col-4">
                    Halaman Administrator
                </div>
                <div class="col-6 col-sm-8 col-lg-4">
                    <div class="row justify-content-end overflow-auto">
                        <div class="col-3">

                            <button type="button" class="btn btn-secondary btn-sm disabled">Export Ekoliterasi</button>
                        </div>
                        <div class="col-3">
    
                            <button type="button" class="btn btn-info btn-sm" @click="ExportSpritual('xlsx')">Export Spritual</button>
                        </div>
                        <div class="col-3">
    
                            <button type="button" class="btn btn-dark btn-sm disabled">Export Kognitif</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body ">
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
        ini halaman admin btw
        {{ user }}
        <br />
        {{ jawabanKognitif }}
        <br />
        {{ jawabanSpritual }}
        <br />
        {{ jawabanPPL }}
        <br />
    </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import axios from 'axios'
// import { uuid } from 'vue-uuid'
import Navbar from '@/components/Pretest/Navbar.vue'
var $ = require('jquery');

// $('#myTable').DataTable( {

// } )
// $(document).ready(function () {
//     $('#myTable').DataTable()
// })

export default {
    name: "Admin",
    data() {
        return {

            visibleScrollableDemo: false,
            user: [],
            jawabanKognitif: [],
            jawabanSpritual: [],
            jawabanPPL: [],
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
        ExportSpritual(){
            alert("export Spritual")
        }
    },
    mounted() {
        setTimeout(() => {
            axios
                .get("http://localhost:3000/user")
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
                .get('http://localhost:3000/user')
                .then((response) => this.setUser(response.data))
                .catch((error) => console.log('Gagal : ', error))
            axios
                .get('http://localhost:3000/jawabanKognitif')
                .then((response) => this.setKognitif(response.data))
                .catch((error) => console.log('Gagal : ', error))
            axios
                .get('http://localhost:3000/jawabanSpritual')
                .then((response) => this.setSpritual(response.data))
                .catch((error) => console.log('Gagal : ', error))
            axios
                .get('http://localhost:3000/jawabanPPL')
                .then((response) => this.setPPL(response.data))
                .catch((error) => console.log('Gagal : ', error))
        }, 1000);
    },
}


</script>