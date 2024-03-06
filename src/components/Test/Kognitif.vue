<!-- eslint-disable prettier/prettier -->

<template>
    <div>
        <div id="Overview" class="overview-area">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="overview-content">
                            <div class="card">
                                <span class="sub-title">S----</span>
                                <h1>
                                    Ini halaman Kognitif sementara
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="overview-img">
                            <div class="card">
                                <b-card class="mt-3" header="Form Data Result">

                                    <pre class="m-0">   
                                        <div v-for="kog in kognitif" :key="kog.id">
                                            <h3> {{ kog.pertanyaan }}</h3>  
                                            <div v-for="opsi in kog.opsi" :key="opsi.id">
                                                {{ opsi.id }}. <span> {{ opsi.isi }}</span> 
                                            </div>
                                            <strong> Jawaban yang benar {{ kog.jawaban }}</strong>
                                        </div>
                                                     <!-- {{ kognitif }}  -->
                                    </pre>
                                    <!-- {{ Komentar }} -->
                                </b-card>
                                <!-- <video autoplay muted loop width="300" play>
                    <source src="../assets/Over-Viewnew.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
import axios from 'axios'
// import { uuid } from 'vue-uuid'

export default {
    name: 'AppKkognitif',

    data() {
        return {
            time: 0,
            kognitif: []
        }
    },
    methods: {
        setKognitif(data) {
            this.kognitif = data
        },
    },
    mounted() {
        axios
            .get('http://localhost:3000/kognitif')
            .then((response) => this.setKognitif(response.data))
            .catch((error) => console.log('Gagal : ', error))
       

    }
};
</script>
