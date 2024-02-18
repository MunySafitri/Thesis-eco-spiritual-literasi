<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Manfaat Hujan Bagi Tumbuhan dan Manusia </strong
          ><small>(element Daya Guna Air)</small>
        </CCardHeader>
        <CCardBody>
          <p>
            Jika kita melihat, Hujan sangatlah bermanfaat bagi kehidupan makhluk
            hidup. Salah satunya yaitu pada tumbuhan. Dengan turunnya air hujan,
            tanaman dapat tumbuh dengan subur, menghasilkan banyak daun dan
            buah. Hal ini menjadi sumber rezeki bagi manusia, karena tanaman
            yang berkembang dengan baik memberikan manfaat untuk kebutuhan
            makanan dan lainnya.
          </p>
          <strong>Dalam Al-Qur'an dijelaskan.</strong>
          <br />
          <p>
            “Dan Dialah yang menurunkan hujan setelah mereka berputus asa dan
            menyebarkan rahmat-Nya. Dan Dialah Maha Pelindung, Maha Terpuji.”
            (QS. Asy-Syura: 28)
          </p>
          <div>
            <p>+ Video Pendek tumbuhan subur/tumbuh dengan kena air hujan</p>
            <video class="vid2" autoplay muted loop width="300" id="myVideo">
              <source src="@/assets/video/overview2.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Breadcrumbs',
}
</script>
