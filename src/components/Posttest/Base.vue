<!-- eslint-disable prettier/prettier -->
<template>
<Navbar/>>
    <div class="container pb-5">
        <h1> Saatnya Anda melakukan Pretest untuk menguji kemampuan anda</h1>
        <div class="mt-5 row align-items-center">
            <h3><strong>Pemberitahuan</strong></h3>
            <ul>
                <li>
                    1.Ketika anda baru melakukan registrasi, maka sistem terdetect sih bahwa anda belum mengerjakan
                    Pretest, Kerjakan Pretest terlebih dahulu
                </li>
                <li>
                    2.Ujian pretest ini tidak ada batasan waktu untuk mengerjakannya
                </li>
                <li>
                    3.Peserta diharuskan untuk fokus mengerjakan ini, Pretest dibagi menjadi 3 bagian uji test, yakni
                    aspek kognitif yang terdiri dari 20 soal,
                    aspek perilaku ekoliterasi yan terdiri dari 16 soal dan aspek sikap spritual yang terdiri dari 17
                    soal.
                </li>
                <li>
                    4.Tidak ada penilaian benar dan salah

                </li>
                <li>
                    5.Peserta hanya diperbolehkan menjawab sekali, peserta tidak dapat kembali ke soal sebelumnya. Maka
                    dari itu, peserta diharuskan teliti dalam menjawab pertanyaan
                </li>
                <li>
                    6.Peserta akan di pantau oleh sistem atas telah mengerjakan test ini atau tidaknya.
                </li>
                <li>
                    7.Peserta tidak boleh melakukan refresh ketika ujian sedang berlangsung, peserta akan kehilangan jawaban dan mengulangi kembali dari awal. Pastikan Koneksi internet lancar.
                </li>

            </ul>
            <strong>Good luck ^^</strong>



            <div class="mt-5">
                <!-- Button trigger modal -->

                <CButton color="primary" @click="() => {
                        visibleScrollableDemo = true
                    }
                    ">Mulai Pretest</CButton>
                <!-- <button class="btn btn-primary" @click="OnSubmit">Mulai Melakukan Pretest</button> -->

            </div>
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
            <p>
                Ujian terdiri dari 3 aspek
            </p>
            <li>
                Kognitif: 20 soal
            </li><br/>
            <li>
                Perilaku Ekoliterasi: 16 soal
            </li><br/>
            <li>
                Sikap Spritual: 17 soal
            </li><br/>
            <div class="accordion-body">
                <p> Mulai Pretest?</p>
            </div>
            <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Tidak</button>
        <button type="button" @click='startTest' class="btn btn-primary">Mulai</button>
      </div>
        </CModalBody>
    </CModal>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import Navbar from '@/components/Layouts/Navbar.vue'

export default {
    name: "Pretest",
    data() {
        return {
            visibleScrollableDemo: false,
            data: '',
            show: true,
        }
    },
    components: {
      Navbar,
    },
    methods:
    {
        startTest(){
            this.$router.push({ path: '/kognitif-posttest' })
        }
    },
    mounted() {
        // setInterval(() => {
        //     this.setPopup()
        //     alert("ini")
        //     // this.$router.push({ path: '/kognitif' })
        // }, )

    }

}
</script>
