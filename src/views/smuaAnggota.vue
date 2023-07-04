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
      <h1 class="text-center">Daftar Anggota</h1>
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
          <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Anggota</h1>
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
              v-model="insertNomor"
              placeholder="Nomor"
              aria-label="default input example" /><br />

          <input
              class="form-control"
              type="text"
              v-model="insertNama"
              placeholder="Nama"
              aria-label="default input example" /><br />
          <input
              class="form-control"
              type="text"
              v-model="insertGender"
              placeholder="Gender"
              aria-label="default input example" /><br />
          <input
              class="form-control"
              type="text"
              v-model="insertAlamat"
              placeholder="Alamat"
              aria-label="default input example" /><br />
          <input
              class="form-control"
              type="text"
              v-model="insertNomorHP"
              placeholder="Nomor Hp"
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
              v-on:click="insertAnggota()">
            Tambah Anggota
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
        <th scope="col">Nomor anggota</th>
        <th scope="col">Nama</th>
        <th scope="col">Gender</th>
        <th scope="col">Alamat</th>
        <th scope="col">Nomor HP</th>

      </tr>
      </thead>
      <tbody>
      <tr v-for="(data, idx) in anggota">
        <td>{{ idx + 1 }}</td>
        <td>{{ data.nomor }}</td>
        <td>{{ data.nama }}</td>
        <td>{{ data.gender }}</td>
        <td>{{ data.alamat }}</td>
        <td>{{ data.nomorHp }}</td>
        <td>

          <!--          <router-link-->
          <!--              :to="{ name: 'updatekate', params: { kode: data.kode } }"-->
          <!--              class="btn btn-warning me-3">Update</router-link>-->

          <button
              type="button"
              class="btn btn-danger"
              v-on:click="deleteAnggota(data.nomor)">
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
        Tambah Anggota
      </button>
    </div>
  </div>

</template>

<script>
import {RouterLink} from "vue-router";
import axios from 'axios';
import {ref} from 'vue';

const allData = 'https://cordless-bushing.000webhostapp.com/filephp/selectallanggota.php';
const insertApi = 'https://cordless-bushing.000webhostapp.com/filephp/insertanggota.php';
const delApi = 'https://cordless-bushing.000webhostapp.com/filephp/deleteanggotabynomor.php';

export default {

  data () {
    return {
      anggota: ref ([]),
      insertId: '',
      insertNomor: '',
      insertNama: '',
      insertGender: '',
      insertAlamat: '',
      insertNomorHP: '',

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
            this.anggota = resp.data;
          })
          .catch((err) => {
            console.log(err);
          });
    },
    insertAnggota() {
      let formData = new FormData();

      formData.append('id', this.insertId);
      formData.append('nomor', this.insertNomor);
      formData.append('nama', this.insertNama);
      formData.append('gender', this.insertGender);
      formData.append('alamat', this.insertAlamat);
      formData.append('nomorHp', this.insertNomorHP);


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
                this.insertNomor = '';
                this.insertNama = '';
                this.insertGender = '';
                this.insertAlamat = '';
                this.insertNomorHP = '';

          })
          .catch((err) => {
            console.log(err);
          });
    },

    deleteAnggota(nomor) {
      if (confirm('Apakah anda ingin mendelete data ??')) {
        axios
            .get(delApi + '?nomor=' + nomor)
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