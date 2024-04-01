<!-- eslint-disable prettier/prettier -->
<template>
  <div id="Komponen" class="process-style-area3 ptb-100">
    <div class="container">
      <div class="main-section-title">
        <div class="card">
          <!-- <span class="sub-title"># STEPS & PROCESS</span> -->
          <h2>Komponen Inti</h2>
        </div>
      </div>
      <!-- ini untuk isi -->
      <div class="timeline">
        <div class="container1 left">
          <div class="content1" style="position:relative; height:300px; overflow-y:scroll;">
            <h5>01. Tujuan Pembelajaran</h5>
            <p class="bold">Memahami Konsep Siklus Hidrologi :
            <ul class="bold">
              <li>
                Peserta didik diharapkan dapat memahami secara menyeluruh konsep siklus hidrologi, termasuk identifikasi
                dan penjelasan tahap-tahap utama seperti penguapan, kondensasi, presipitasi, infiltrasi, limpasan
                permukaan, dan pengaliran sungai. Mereka seharusnya dapat menggambarkan hubungan antar bagian-bagian
                siklus ini.
              </li>
            </ul>
            </p>
            <p class="bold">Menguasai Proses-proses dalam Siklus Air :
            <ul class="bold">
              <li>
                Peserta didik diharapkan mampu menjelaskan secara rinci setiap proses dalam siklus air.
              </li>
            </ul>
            </p>
            <p class="bold">Mengidentifikasi Faktor-faktor yang Mempengaruhi Siklus Hidrologi :
            <ul class="bold">
              <li>
                Peserta didik diharapkan dapat mengidentifikasi faktor-faktor yang memengaruhi siklus hidrologi, seperti
                aktivitas manusia, perubahan iklim, dan penggunaan lahan.
              </li>
            </ul>
            </p>
            <p class="bold">Menyadari Pentingnya Konservasi Air :
            <ul class="bold">
              <li>
                Peserta didik perlu menyadari pentingnya konservasi air dan dampak negatif dari pemborosan atau polusi
                terhadap siklus hidrologi.
              </li>
            </ul>
            </p>
            <p class="bold">Menghubungkan Siklus Hidrologi dengan Kehidupan Sehari-hari :
            <ul class="bold">
              <li>
                Peserta didik diharapkan dapat mengidentifikasi dan menjelaskan bagaimana siklus hidrologi terkait
                dengan kehidupan sehari-hari.
              </li>
            </ul>
            </p>
            <p class="bold">Mengembangkan Kesadaran Lingkungan :
            <ul class="bold">
              <li>
                Peserta didik diharapkan dapat mengembangkan kesadaran lingkungan melalui pemahaman siklus hidrologi,
                sehingga mereka dapat menjadi agen perubahan untuk pelestarian lingkungan, khususnya dalam konteks
                pelestarian sumber daya air.
              </li>
            </ul>
            </p>

          </div>
        </div>
        <div class="container1 right">
          <div class="content">
            <h5>02. Pemahaman Bermakna</h5>
            <ol class="bold">
              <li>
                Menyadari pentingnya konservasi dan daya guna air pada kehidupan sehari-hari.
              </li>
              <li>
                Mampu Menerapkan Kesadaran Lingkungan pada aspek Perilaku peduli lingkungan terhadap kehidupan sehari
                –hari.
              </li>
            </ol>
          </div>
        </div>
        <div class="container1 left">
          <div class="content1">
            <h5>03. Persiapan Pembelajaran</h5>
            <p class="bold">
              Menyiapkan Perangkat Elektornik, berupa Laptop/PC atau Smartphone.
            </p>
          </div>
        </div>
        <div class="container1 right">
          <div class="content">
            <h5>04. Bacaan Peserta Didik dan Guru</h5>
            <p class="bold">
              Bacaan peserta didik dan guru :
            </p>
            <ol class="bold">
              <li>
                Siklus Hidrologi.
              </li>
              <li>
                Perilaku Peduli lingkungan.
              </li>
              <li>
                Regulasi Air
              </li>
            </ol>
          </div>
        </div>
        <div class="container1 left">
          <div class="content1">
            <h5>05. Pertanyaan Pemantik</h5>
            <ol class="bold">
              <li>
                Mengapa Kita Perlu Mempelajari Siklus Air?
              </li>
              <li>
                Apa saja manfaat Siklus Air?
              </li>
              <li>
                Apa yang terfikirkan pertama kali ketika mendengarkan kata Air?
              </li>
              <li>
                Apakah sebagai sebuah bencana atau sebuah anugrah tuhan yang maha Kuasa?
              </li>
            </ol>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: 'AppKomponen',
  data() {
  },
}
</script>


<style>
/* * {
  box-sizing: border-box;
} */

/* body {
  background-color: #474e5d;
  font-family: Helvetica, sans-serif;
} */

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #B3E0E0;
  top: 18px;
  bottom: 20px;
  left: 50%;
  margin-left: 1.5px;
  margin-right: 1.5px;
}

/* container1 around content */
.container1 {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container1::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: rgba(76, 210, 224,0.15);
  border: 4px solid #13DEE0;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container1 to the left */
.left {
  left: 0;
}

/* Place the container1 to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container1 (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid rgba(76, 210, 224,0.15);
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #B3E0E0;
}

/* Add arrows to the right container1 (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid #B3E0E0;
  border-width: 10px 10px 10px 0;
  border-color: transparent #B3E0E0 transparent transparent;
}

/* Fix the circle for container1s on the right side */
.right::after {
  left: -8px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: rgba(236, 244, 245, 0.80);
  position: relative;
  border-radius: 6px;
}
.content:hover {
  box-shadow: 14px 13px 14px 0px rgba(0,0,0,0.65);
}
.content1 {
  padding: 20px 30px;
  background-color: rgba(236, 244, 245, 0.80);
  position: relative;
  border-radius: 6px;
}
.content1:hover {
  box-shadow: -14px 13px 14px 0px rgba(0,0,0,0.65);
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
  left: 23px;
  }
  
  /* Full-width container1s */
  .container1 {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }
  
  /* Make sure that all arrows are pointing leftwards */
  .container1::before {
  left: 60px;
  border: medium solid rgba(76, 210, 224,0.30);
  border-width: 10px 10px 10px 0;
  border-color: transparent #b7b7b8 transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
  left: 15px;
  }
  
  /* Make all right container1s behave like the left ones */
  .right {
  left: 0%;
  }
}
</style>