<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Manfaat Siklus Air</strong>
        </CCardHeader>
        <CCardBody>
          <h6>Begitu besar manfaat dari Siklus Hidrologi</h6>
          <br />
          <p>
            ⮚ Terjadinya siklus air memberikan manfaat bagi makhluk hidup:
            manusia, hewan dan tumbuhan, yaitu:
          </p>
          <ul style="list-style-type: disc">
            <li>
              Untuk merjaga ketersediaan air di bumi, mendistribusikan air
              keseluruh penjuru muka bumi baik yang berada di dataran tinggi
              maupun dataran rendah. Menyediakan air bersih yang sangat
              dibutuhkan untuk kehidupan makhluk hidup.
            </li>
            <li>
              Pada tumbuhan menghasilkan berbagai macam buah-buahan, biji-bijian
              dan tanaman lain, hal ini adalah rezeki pemberian Tuhan yang Maha
              pemurah dan kuasa kepada Makhluk lainnya baik dimnafaatkan manusia
              atau ternak.
            </li>
            <li>
              Selain itu air hujan akan menyerap ke dalam tanam, dan mengalir
              membentuk sungai dari daratan tinggi (gunung) menuju ke daerah
              rendah kemudian terkumpul yaitu terbentuk danau dan air laut.
            </li>
            <li>
              Yang menariknya dari siklus hidrologi ini yaitu bahwa hujan tidak
              akan pernah berhenti. Dari proses tersebut hujan dapat diprediksi
              kapan akan turunnya dan kapan akan berakhirnya. Namun hujan tidak
              akan berhenti selamanya. Karena hujan meruapan salah satu ciptaan
              Tuhan yang Maha Besar untuk alam semesta ini.
            </li>
          </ul>
          <p>
            ⮚ Hal ini bearti air senantiasa berputar dalam suatu siklus yang
            seimbang menurut ukuran dan kadarnya. Sehingga kehidupan di Bumi
            bergantung pada siklus air ini.
          </p>
          <br />>
          <strong>Manfaat siklus hidrologi terdapat dalam surat :</strong>
          <br />
          <ol type="A">
            <li>Al-A’raf ayat 57</li>
            <li>Al- Anfal ayat 11</li>
            <li>An-Nahl ayat 10</li>
            <li>Az-Zukhruf ayat 11</li>
          </ol>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Collapse',
  setup() {
    const visible = ref(false)
    const visibleA = ref(false)
    const visibleB = ref(false)
    const visibleHorizontal = ref(false)
    return {
      visible,
      visibleA,
      visibleB,
      visibleHorizontal,
    }
  },
}
</script>
