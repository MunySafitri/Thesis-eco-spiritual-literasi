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
              <CButton
                color="info"
                shape="rounded-pill"
                @click="
                  () => {
                    PostTest = true
                  }
                "
                >Kerjakan Posttest
              </CButton>
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
  <CModal
    backdrop="static"
    :visible="PostTest"
    @close="
      () => {
        PostTest = false
      }
    "
    aria-labelledby="StaticBackdropExampleLabel"
  >
    <CModalHeader>
      <CModalTitle id="StaticBackdropExampleLabel">PostTest</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <center><CIcon :icon="cilColorBorder" size="8xl" /></center>
      <br />
      <h6>Apakah anda siap mengikuti PostTest?</h6></CModalBody
    >
    <CModalFooter>
      <CButton
        color="danger"
        @click="
          () => {
            PostTest = false
          }
        "
      >
        Kembali
      </CButton>
      <a :href="'/posttest'" class=" btn btn-success btn-lg " :class="postTest ? 'disabled' : '' "  
                >Kerjakan Posttest</a>
    </CModalFooter>
  </CModal>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import { CIcon } from '@coreui/icons-vue'
import { cilColorBorder } from '@coreui/icons'
export default {
  name: 'AppOrder',
  components: {
    CIcon,
  },
  data() {
    return {
      cilColorBorder,
      PostTest: false,
      postTest: JSON.parse(localStorage.getItem('isPosttest')),
    }
  },
  mounted() {
    // console.log("si kognitif",JSON.parse(localStorage.getItem('isKognitif')))
  },
}
</script>
