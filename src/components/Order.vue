<!-- eslint-disable prettier/prettier -->
<!-- //assesment -->
<template>
  <div id="Order" class="bgmix">
    <div class="container">
      <div :class="'main-section-title'">
        <span class="sub-title"># CHOOSE YOUR ASSESSMENT</span>
        <h2>Kerjakanlah Soal-Soal Berikut dengan Hati Ikhlas</h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="why-choose-us-item">
            <div class="choose-image">
              <img src="../assets/img/1_2.png" alt="image" />
            </div>
            <div class="choose-content">

              <a :href="'/posttest'" class=" btn btn-success btn-lg " :class="postTest ? 'disabled' : '' "  
                >Kerjakan Posttest</a>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-4 col-md-6">
          <div class="why-choose-us-item">
            <div class="choose-image">
              <img src="../assets/img/2_2.png" alt="image" />
            </div>
            <div class="choose-content">
             
              <a :href="'/kognitif'" :class="'choose-btn'"
                >Kerjakan sekarang</a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script >

export default {
  name: "AppOrder",
  data() {
    return {
     postTest: JSON.parse(localStorage.getItem('isPosttest'))
    }
  },
  mounted(){
    // console.log("si kognitif",JSON.parse(localStorage.getItem('isKognitif')))
  }
}
</script>