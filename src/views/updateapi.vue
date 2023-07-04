<script>
import axios from 'axios';
import {ref} from 'vue';

const selById = 'https://cordless-bushing.000webhostapp.com/filephp/selectbukubycode.php';
const urlUpdate = 'https://cordless-bushing.000webhostapp.com/filephp/updatebukubycode.php';

export default {
  data() {
    return {
      selectBuku: ref([]),
      updateJudul: '',
      updatePengarang: '',
      updatePenerbit: '',
      updateTahun: '',
      updateHarga: '',
      file: '',
    };
  },
  mounted() {
    this.getBuku();
  },
  methods: {
    getBuku() {
      axios
          .get(selById + '?kode=' + this.$route.params.kode)
          .then((resp) => {
            console.log(resp);
            this.selectBuku = resp.data;
            this.updateJudul = this.selectBuku.judul;
            this.updatePengarang = this.selectBuku.pengarang;
            this.updatePenerbit = this.selectBuku.penerbit;
            this.updateTahun = this.selectBuku.tahun;
            this.updateHarga = this.selectBuku.harga;
            this.file = this.selectBuku.file_cover;
          })
          .catch((err) => {
            console.log(err);
          });
    },
    updateBuku() {
      this.file = this.$refs.file.files[0];
      let formData = new FormData();

      formData.append('kode', this.$route.params.kode);
      formData.append('judul', this.updateJudul);
      formData.append('pengarang', this.updatePengarang);
      formData.append('penerbit', this.updatePenerbit);
      formData.append('tahun', this.updateTahun);
      formData.append('harga', this.updateHarga);
      formData.append('file_cover', this.file);

      axios
          .post(urlUpdate, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp.data);
            this.getBuku();
          })
          .catch((err) => {
            console.log(err);
          });
    },
  },
};
</script>

<template>
  <div className="m-5 border border-radius p-5">
    <h1 className="mb-4">Edit Buku</h1>
    <input
        className="form-control"
        type="text"
        v-model="updateJudul"
        placeholder="Judul buku"
        aria-label="default input example"
    /><br/>
    <input
        className="form-control"
        type="text"
        v-model="updatePengarang"
        placeholder="Pengarang"
        aria-label="default input example"
    /><br/>
    <input
        className="form-control"
        type="text"
        v-model="updatePenerbit"
        placeholder="Penerbit"
        aria-label="default input example"
    /><br/>
    <input
        className="form-control"
        type="text"
        v-model="updateTahun"
        placeholder="Tahun terbit"
        aria-label="default input example"
    /><br/>
    <input
        className="form-control"
        type="text"
        v-model="updateHarga"
        placeholder="Harga buku"
        aria-label="default input example"
    /><br/>
    <div className="mb-3">
      <input className="form-control" type="file" ref="file"/>
      <img :src="file" alt="cover" style="width: 120px; margin-top: 10px"/>
    </div>
    <div className="mt-5">
      <router-link to="/" className="btn btn-secondary me-5">
        Back
      </router-link>

      <button type="button" className="btn btn-primary" v-on:click="updateBuku()">
        Update Buku
      </button>
    </div>
  </div>

</template>
