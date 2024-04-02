<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Jenis Siklus Air</strong>
        </CCardHeader>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Jenis Siklus Air</strong>
        </CCardHeader>
        <CCardBody>
          <br />
          <p>
            Video Infiltrasi :
            <CPopover content="youtube NASA The Water Cycle" placement="right">
              <template #toggler="{ on }">
                <CButton color="link" v-on="on">Sumber</CButton>
              </template>
            </CPopover>
          </p>
          <div>
            <video class="vid2" controls loop width="300" id="myVideo">
              <source
                src="@/assets/video/Sumber _ youtube NASA _The Water Cycle_.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Jenis Siklus Air</strong>
        </CCardHeader>
        <CCardBody>
          <br />
          <p>
            Video Infiltrasi :
            <CPopover content="youtube NASA The Water Cycle" placement="right">
              <template #toggler="{ on }">
                <CButton color="link" v-on="on">Sumber</CButton>
              </template>
            </CPopover>
          </p>
          <div>
            <video class="vid2" controls loop width="300" id="myVideo">
              <source
                src="@/assets/video/Sumber _ youtube NASA _The Water Cycle_.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Jenis Siklus Air</strong>
        </CCardHeader>
        <CCardBody>
          <br />
          <p>
            Video Infiltrasi :
            <CPopover content="youtube NASA The Water Cycle" placement="right">
              <template #toggler="{ on }">
                <CButton color="link" v-on="on">Sumber</CButton>
              </template>
            </CPopover>
          </p>
          <div>
            <video class="vid2" controls loop width="300" id="myVideo">
              <source
                src="@/assets/video/Sumber _ youtube NASA _The Water Cycle_.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import VueImg from '@/assets/images/vue.jpg'
export default {
  name: 'Cards',
  setup() {
    return {
      VueImg,
    }
  },
}
</script>
