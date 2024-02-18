<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Penjelasan Tentang Siklus Hidrologi</strong>
        </CCardHeader>
        <CCardBody>
          <ul>
            <li>
              Siklus Hidrologi adalah sirkulasi air yang tidak pernah berhenti
              dari atmosfir ke bumi dan kembali ke atmosfir melalui evaporasi
              dan transpirasi, kondensasi, presipitasi dan koleksi
            </li>
            <li>
              Air akan mudah mengalami perubahan wujud. Dalam keseharian hanya
              air yang dapat kita saksikan dalam berbagai wujud yaitu, cair
              (air), padat (es) dan uap air (gas)
            </li>
          </ul>
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
