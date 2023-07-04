<script>
    import {RouterLink} from "vue-router";
    import axios from 'axios';
    import {ref} from 'vue';
    import allKategori from "@/views/allKategori.vue";

   const allData = 'https://cordless-bushing.000webhostapp.com/filephp/selectallbuku.php';
   const insertApi = 'https://cordless-bushing.000webhostapp.com/filephp/insertbuku.php';
   const delApi = 'https://cordless-bushing.000webhostapp.com/filephp/deletebukubycode.php';

   export default {

    data () {
        return {
          buku: ref ([]),
          insertId: '',
          insertKode: '',
          insertKodeKategori: '',
          insertJudul: '',
          insertPengarang: '',
          insertPenerbit: '',
          insertTahun: '',
          insertHarga: '',
          file: ''

        };
    },
    mounted() {
        this.readData();

    },
        methods: {
            readData () {
                axios
                .get(allData)
                .then((resp) => {
                    console.log(resp);
                    this.buku = resp.data;
                })
                .catch((err) => {
                    console.log(err);
            });
        },
          insertbuku() {
            this.file = this.$refs.file.files[0];
            let formData = new FormData();

            formData.append('id', this.insertId);
            formData.append('kode', this.insertKode);
            formData.append('kode_kategori', this.insertKodeKategori);
            formData.append('judul', this.insertJudul);
            formData.append('pengarang', this.insertPengarang);
            formData.append('penerbit', this.insertPenerbit);
            formData.append('tahun', this.insertTahun);
            formData.append('harga', this.insertHarga);
            formData.append('file_cover', this.file);


            axios
                .post(insertApi, formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                })
                .then((resp) => {
                  console.log(resp.data);
                  this.readData();
                  this.insertId = '';
                  this.insertKode = '';
                  this.insertKodeKategori = '';
                  this.insertJudul = '';
                  this.insertPengarang = '';
                  this.insertPenerbit = '';
                  this.insertTahun = '';
                  this.$refs.file.value = '';
                })
                .catch((err) => {
                  console.log(err);
                });
          },

          deleteBuku(kode) {
            if (confirm('Apakah anda ingin mendelete data ??')) {
              axios
                  .get(delApi + '?kode=' + kode)
                  .then((resp) => {
                    console.log(resp);
                    this.readData();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
            }
          },
        },
   };
</script>

<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary" style="font-family: Avenir, Helvetica, Arial, sans-serif">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Toko Buku Bersama</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <a class="nav-link" href="/anggota">Anggota</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/allKategori">Kategori</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container my-5 ms-5">
    <div class="mb-5">
      <h1 class="text-center">Daftar Buku</h1>
      <hr />
    </div>



    <!-- Modal Insert -->
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Buku</h1>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input
                class="form-control"
                type="text"
                v-model="insertId"
                placeholder="Id Buku"
                aria-label="default input example" /><br />

              <input
                  class="form-control"
                  type="text"
                  v-model="insertKode"
                  placeholder="Kode Buku"
                  aria-label="default input example" /><br />

                <input
                    class="form-control"
                    type="text"
                    v-model="insertKodeKategori"
                    placeholder="Kategori Buku"
                    aria-label="default input example" /><br />

            <input
                class="form-control"
                type="text"
                v-model="insertJudul"
                placeholder="Judul Buku"
                aria-label="default input example" /><br />
            <input
                class="form-control"
                type="text"
                v-model="insertPengarang"
                placeholder="Nama Pengarang"
                aria-label="default input example" /><br />
            <input
                class="form-control"
                type="text"
                v-model="insertPenerbit"
                placeholder="Penerbit Buku"
                aria-label="default input example" /><br />
            <input
                class="form-control"
                type="text"
                v-model="insertTahun"
                placeholder="Tahun Terbit"
                aria-label="default input example" /><br />
            <input
                class="form-control"
                type="text"
                v-model="insertHarga"
                placeholder="Harga Buku"
                aria-label="default input example" /><br />
              <div class="mb-3">
              <input
                  class="form-control"
                  type="file"
                  ref="file"
                  id="formFile" />
            </div>
          </div>
          <div class="modal-footer">
            <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal">
              Batal
            </button>
            <button
                type="button"
                class="btn btn-primary"
                v-on:click="insertbuku()">
              Tambah Buku
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-5">
    <table class="table border">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Judul Buku</th>
        <th scope="col">Pengarang</th>
        <th scope="col">Penerbit</th>
        <th scope="col">Tahun Terbit</th>
        <th scope="col">Kategori</th>
        <th scope="col">Harga</th>
        <th scope="col">Cover</th>
        <th scope="col">Aksi</th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="(data, idx) in buku">
        <td>{{ idx + 1 }}</td>
        <td>{{ data.judul }}</td>
        <td>{{ data.pengarang }}</td>
        <td>{{ data.penerbit }}</td>
        <td>{{ data.tahun }}</td>
        <td>{{ data.kode_kategori }}</td>
        <td>Rp.{{ data.harga }}</td>
        <td>
          <img :src="data.file_cover" alt="cover" style="width: 150px" />
        </td>
        <td>

<!--          <router-link-->
<!--              :to="{ name: 'updateapi', params: { kode: data.kode } }"-->
<!--              class="btn btn-warning me-3">Update</router-link>-->

          <button
              type="button"
              class="btn btn-danger"
              v-on:click="deleteBuku(data.kode)">
            Delete
          </button>
        </td>
      </tr>
      </tbody>
    </table>

    <!-- Button trigger modal -->
    <div class="d-flex justify-content-between">
      <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal">
        Tambah Buku
      </button>
    </div>
  </div>

</template>