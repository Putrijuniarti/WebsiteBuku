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
      <h1 class="text-center">Daftar Kategori</h1>
      <hr />
    </div>
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
          <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Kategori</h1>
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
              placeholder="Id"
              aria-label="default input example" /><br />

          <input
              class="form-control"
              type="text"
              v-model="insertKode"
              placeholder="Kode"
              aria-label="default input example" /><br />

          <input
              class="form-control"
              type="text"
              v-model="insertKategori"
              placeholder="Kategori"
              aria-label="default input example" /><br />
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
              v-on:click="insertkate()">
            Tambah Kategori
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-5">
    <table class="table border">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Kode Kategori</th>
        <th scope="col">Kategori</th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="(data, idx) in kategori">
        <td>{{ idx + 1 }}</td>
        <td>{{ data.kode }}</td>
        <td>{{ data.kategori }}</td>
        <td>

<!--          <router-link-->
<!--              :to="{ name: 'updatekate', params: { kode: data.kode } }"-->
<!--              class="btn btn-warning me-3">Update</router-link>-->

          <button
              type="button"
              class="btn btn-danger"
              v-on:click="deletekate(data.kode)">
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
        Tambah kategori
      </button>
    </div>
  </div>

</template>

<script>
import {RouterLink} from "vue-router";
import axios from 'axios';
import {ref} from 'vue';

const allData = 'https://cordless-bushing.000webhostapp.com/filephp/selectallkategori.php';
const insertApi = 'https://cordless-bushing.000webhostapp.com/filephp/insertkategori.php';
const delApi = 'https://cordless-bushing.000webhostapp.com/filephp/deletekategoribycode.php';

export default {

  data () {
    return {
      kategori: ref ([]),
      insertId: '',
      insertKode: '',
      insertKategori: '',

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
            this.kategori = resp.data;
          })
          .catch((err) => {
            console.log(err);
          });
    },
    insertkate() {
      let formData = new FormData();

      formData.append('id', this.insertId);
      formData.append('kode', this.insertKode);
      formData.append('kategori', this.insertKategori);


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
            this.insertKategori = '';

          })
          .catch((err) => {
            console.log(err);
          });
    },

    deletekate(kode) {
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