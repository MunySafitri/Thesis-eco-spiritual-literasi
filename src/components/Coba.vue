<!-- eslint-disable prettier/prettier -->

<template>
    <div>
    <a href="https://vitejs.dev" target="_blank">
      <img  class="logo" alt="Vite logo"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img  class="logo vue" alt="Vue logo"/>
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue"/> -->
  <button @click.prevent="exportExcel">excel</button>
    <!-- <div>
      <section>
        <h3>Create XLSX</h3>
        <div>
          <input v-model="sheetName" placeholder="type a new sheet name" />
          <button v-if="sheetName" @click="addSheet">Add Sheet</button>
        </div>
  
        <div>Sheets: {{ sheets }}</div>
  
        <xlsx-workbook>
          <xlsx-sheet
            :collection="sheet.data"
            v-for="sheet in sheets"
            :key="sheet.name"
            :sheet-name="sheet.name"
          />
          <xlsx-download>
            <button>Download</button>
          </xlsx-download>
        </xlsx-workbook>
      </section>
      <hr />
      <section>
        <h3>Import XLSX</h3>
        <input type="file" @change="onChange" />
        <xlsx-read :file="file">
          <xlsx-sheets>
            <template #default="{sheets}">
              <select v-model="selectedSheet">
                <option v-for="sheet in sheets" :key="sheet" :value="sheet">
                  {{ sheet }}
                </option>
              </select>
            </template>
          </xlsx-sheets>
          <xlsx-table :sheet="selectedSheet" />
          <xlsx-json :sheet="selectedSheet">
            <template #default="{collection}">
              <div>
                {{ collection }}
              </div>
            </template>
          </xlsx-json>
        </xlsx-read>
      </section>
    </div> -->
  </template>
<!-- eslint-disable prettier/prettier -->


<script>
import xlsx from 'xlsx/dist/xlsx.full.min'
export default {
  name: 'App',
  data() {
    return {
      framework: [
        {name: "George Washington", birthday: "1732-02-22"},
        {name: "John Adams", birthday: "1735-10-19"},
        {name: "John Adams", birthday: "1735-10-19"},
        {name: "John Adams", birthday: "1735-10-19"},
      ]
    }
  },
  methods: {
    exportExcel() {
      const XLSX = xlsx;
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(this.framework);
      XLSX.utils.book_append_sheet(workbook, worksheet, "framework");
      XLSX.writeFile(workbook, "framework.xlsx");
    }
  }
}
// import { XlsxRead, XlsxTable, XlsxSheets, XlsxJson, XlsxWorkbook, XlsxSheet, XlsxDownload } from "vue3-xlsx/dist/vue3-xlsx.cjs.prod.js";

// export default {
//   components: {
//     XlsxRead,
//     XlsxTable,
//     XlsxSheets,
//     XlsxJson,
//     XlsxWorkbook,
//     XlsxSheet,
//     XlsxDownload
//   },
//   data() {
//     return {
//       file: null,
//       selectedSheet: null,
//       sheetName: null,
//       sheets: [{ name: "SheetOne", data: [{ c: 2 }] }],
//       collection: [{ a: 1, b: 2 }]
//     };
//   },
//   methods: {
//     onChange(event) {
//       this.file = event.target.files ? event.target.files[0] : null;
//     },
//     addSheet() {
//       this.sheets.push({ name: this.sheetName, data: [...this.collection] });
//       this.sheetName = null;
//     }
//   }
// };
</script>