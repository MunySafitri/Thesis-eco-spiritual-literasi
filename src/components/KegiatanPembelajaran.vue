<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div id="Kegiatan" class="process-style-area2 ptb-100">
    <div class="container">
      <div class="main-section-title">
        <div class="card">
          <span class="sub-title"># Kegiatan</span>
          <h2>Kegiatan Pembelajaran</h2>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="card">
            <div class="process-style-accordion">
              <div class="accordion" id="ProcessAccordion">
                <div class="accordion-item">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Collapse1"
                    aria-expanded="true"
                    aria-controls="Collapse1"
                  >
                    <span>01</span> Pertemuan I
                  </button>
                  <div
                    id="Collapse1"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#ProcessAccordion"
                  >
                    <div class="accordion-body">
                      <div class="choose-content">
                        <a :href="'/pertemuan1/elementair'" :class="'choose-btn'"
                          >Kerjakan Sekarang</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#Collapse2"
                    aria-expanded="false"
                    aria-controls="Collapse2"
                  >
                    <span>02</span> Pertemuan II
                  </button>
                  <div
                    id="Collapse2"
                    class="accordion-collapse collapse"
                    data-bs-parent="#ProcessAccordion"
                  >
                    <div class="accordion-body">
                      <div class="choose-content">
                        <a :href="''" :class="'choose-btn'">Comming Soon</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    <span>03</span> Pertemuan III
                  </button>
                  <div
                    id="collapse3"
                    class="accordion-collapse collapse"
                    data-bs-parent="#ProcessAccordion"
                  >
                    <div class="accordion-body">
                      <div class="choose-content">
                        <a :href="''" :class="'choose-btn'">Comming Soon</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    <span>04</span> Pertemuan IV
                  </button>
                  <div
                    id="collapse4"
                    class="accordion-collapse collapse"
                    data-bs-parent="#ProcessAccordion"
                  >
                    <div class="accordion-body">
                      <div class="choose-content">
                        <a :href="''" :class="'choose-btn'">Comming Soon</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse5"
                  >
                    <span>05</span> Pengayaan dan Remedi
                  </button>
                  <div
                    id="collapse5"
                    class="accordion-collapse collapse"
                    data-bs-parent="#ProcessAccordion"
                  >
                    <div class="accordion-body">
                      <div class="choose-content">
                        <a :href="''" :class="'choose-btn'">Comming Soon</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse6"
                    aria-expanded="false"
                    aria-controls="collapse6"
                  >
                    <span>06</span> Refleksi
                  </button>
                  <div
                    id="collapse6"
                    class="accordion-collapse collapse"
                    data-bs-parent="#ProcessAccordion"
                  >
                    <div class="accordion-body">
                      <div class="choose-content">
                        <a :href="''" :class="'choose-btn'">Comming Soon</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="card">
            <div class="process-style-image">
              <img src="../assets/img//no2.jpg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: 'AppKegiatan',
}
</script>
