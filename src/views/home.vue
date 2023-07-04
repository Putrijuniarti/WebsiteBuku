<script>
// import axios from 'axios';
// import { ref } from 'vue';
//
// const dataAll = 'http://localhost/buku/selectallbuku.php';
// const loginApi = 'http://localhost/buku/login.php';
//
// export default {
//   data() {
//     return {
//       allBuku: ref([]),
//       username: '',
//       password: '',
//       stts: '',
//       data: '',
//     };
//   },
//   mounted() {
//     this.getAllBuku();
//   },
//   methods: {
//     getAllBuku() {
//       axios
//           .get(dataAll)
//           .then((resp) => {
//             console.log(resp);
//             this.allBuku = resp.data;
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//     },
//     login() {
//       let formData = new FormData();
//
//       formData.append('username', this.username);
//       formData.append('password', this.password);
//
//       axios
//           .post(loginApi, formData, {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//             },
//           })
//           .then((resp) => {
//             console.log(resp);
//             if (resp.status == 200 && resp.data.data.username == this.username) {
//               // console.log('login berhasil');
//               localStorage.setItem('user-info', JSON.stringify(resp.data[0]));
//               this.$router.push({ name: 'BerandaView' });
//             }
//             if (resp.message == 'Request failed with status code 404') {
//               console.log('gagal login');
//             }
//           })
//           .catch((err) => {
//             // console.log(err);
//             alert('Username dan Password Kamu Salah!!!');
//           });
//     },
//   },
// };
</script>
<template>
<!--  &lt;!&ndash;navbar &ndash;&gt;-->
<!--  <nav class="navbar navbar-dark bg-dark fixed-top">-->
<!--    <div class="container-fluid">-->
<!--      <a class="navbar-brand" href="#">Toko Buku Bersama</a>-->
<!--      <button-->
<!--          class="navbar-toggler"-->
<!--          type="button"-->
<!--          data-bs-toggle="offcanvas"-->
<!--          data-bs-target="#offcanvasDarkNavbar"-->
<!--          aria-controls="offcanvasDarkNavbar"-->
<!--          aria-label="Toggle navigation">-->
<!--        <span class="navbar-toggler-icon"></span>-->
<!--      </button>-->
<!--      <div-->
<!--          class="offcanvas offcanvas-end text-bg-dark"-->
<!--          tabindex="-1"-->
<!--          id="offcanvasDarkNavbar"-->
<!--          aria-labelledby="offcanvasDarkNavbarLabel">-->
<!--        <div class="offcanvas-header">-->
<!--          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">-->
<!--            Toko Buku Bersama-->
<!--          </h5>-->
<!--          <button-->
<!--              type="button"-->
<!--              class="btn-close btn-close-white"-->
<!--              data-bs-dismiss="offcanvas"-->
<!--              aria-label="Close"></button>-->
<!--        </div>-->
<!--        <div class="offcanvas-body">-->
<!--          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">-->
<!--            <li class="nav-item">-->
<!--              <a class="nav-link active" aria-current="page" href="#"-->
<!--              >Silahkan Login</a-->
<!--              >-->
<!--            </li>-->
<!--            <div class="input-group mb-3">-->
<!--              <input-->
<!--                  type="text"-->
<!--                  class="form-control"-->
<!--                  v-model="username"-->
<!--                  aria-label="Sizing example input"-->
<!--                  aria-describedby="inputGroup-sizing-default"-->
<!--                  placeholder="Username" />-->
<!--            </div>-->
<!--            <div class="input-group mb-3">-->
<!--              <input-->
<!--                  type="password"-->
<!--                  class="form-control"-->
<!--                  v-model="password"-->
<!--                  aria-label="Sizing example input"-->
<!--                  aria-describedby="inputGroup-sizing-default"-->
<!--                  placeholder="Password" />-->
<!--            </div>-->
<!--            <button type="button" class="btn btn-primary" v-on:click="login">-->
<!--              Login-->
<!--            </button>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->
<!--  &lt;!&ndash; page content &ndash;&gt;-->
<!--  &lt;!&ndash; <img src="../assets/masjid2.jpg" class="img-fluid" alt="..."> &ndash;&gt;-->
<!--&lt;!&ndash;  <div id="carouselExampleDark" class="carousel carousel-dark slide">&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="carousel-indicators">&ndash;&gt;-->
<!--&lt;!&ndash;      <button&ndash;&gt;-->
<!--&lt;!&ndash;          type="button"&ndash;&gt;-->
<!--&lt;!&ndash;          data-bs-target="#carouselExampleDark"&ndash;&gt;-->
<!--&lt;!&ndash;          data-bs-slide-to="0"&ndash;&gt;-->
<!--&lt;!&ndash;          class="active"&ndash;&gt;-->
<!--&lt;!&ndash;          aria-current="true"&ndash;&gt;-->
<!--&lt;!&ndash;          aria-label="Slide 1"></button>&ndash;&gt;-->
<!--&lt;!&ndash;      <button&ndash;&gt;-->
<!--&lt;!&ndash;          type="button"&ndash;&gt;-->
<!--&lt;!&ndash;          data-bs-target="#carouselExampleDark"&ndash;&gt;-->
<!--&lt;!&ndash;          data-bs-slide-to="1"&ndash;&gt;-->
<!--&lt;!&ndash;          aria-label="Slide 2"></button>&ndash;&gt;-->
<!--&lt;!&ndash;      <button&ndash;&gt;-->
<!--&lt;!&ndash;          type="button"&ndash;&gt;-->
<!--&lt;!&ndash;          data-bs-target="#carouselExampleDark"&ndash;&gt;-->
<!--&lt;!&ndash;          data-bs-slide-to="2"&ndash;&gt;-->
<!--&lt;!&ndash;          aria-label="Slide 3"></button>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="carousel-inner">&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="carousel-item active" data-bs-interval="10000">&ndash;&gt;-->
<!--&lt;!&ndash;        <img src="../assets/masjid1.jpg" class="d-block w-100" alt="..." />&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="carousel-caption d-none d-md-block mb-5">&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;          <h2 style="color: aliceblue">Masjid AL-Ikhlas</h2>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;          <p style="color: aliceblue">Jl.Menuju Kebaikan</p>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;          <a href="#table"&ndash;&gt;-->
<!--&lt;!&ndash;          ><button type="button" class="btn btn-secondary">&ndash;&gt;-->
<!--&lt;!&ndash;            Selengkapnya&ndash;&gt;-->
<!--&lt;!&ndash;          </button></a&ndash;&gt;-->
<!--&lt;!&ndash;          >&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="carousel-item" data-bs-interval="2000">&ndash;&gt;-->
<!--&lt;!&ndash;        <img src="../assets/masjid2.jpg" class="d-block w-100" alt="..." />&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="carousel-caption d-none d-md-block mb-5">&ndash;&gt;-->
<!--&lt;!&ndash;          <h2 style="color: aliceblue">Masjid AL-Ikhlas</h2>&ndash;&gt;-->
<!--&lt;!&ndash;          <p style="color: aliceblue">Jl.Menuju Kebaikan</p>&ndash;&gt;-->
<!--&lt;!&ndash;          <a href="#table"&ndash;&gt;-->
<!--&lt;!&ndash;          ><button type="button" class="btn btn-secondary">&ndash;&gt;-->
<!--&lt;!&ndash;            Selengkapnya&ndash;&gt;-->
<!--&lt;!&ndash;          </button></a&ndash;&gt;-->
<!--&lt;!&ndash;          >&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="carousel-item">&ndash;&gt;-->
<!--&lt;!&ndash;        <img src="../assets/masjid3.jpg" class="d-block w-100" alt="..." />&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="carousel-caption d-none d-md-block mb-5">&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;          <h2 style="color: aliceblue">Masjid AL-Ikhlas</h2>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;          <p style="color: aliceblue">Jl.Menuju Kebaikan</p>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;          <a href="#table"&ndash;&gt;-->
<!--&lt;!&ndash;          ><button type="button" class="btn btn-secondary">&ndash;&gt;-->
<!--&lt;!&ndash;            Selengkapnya&ndash;&gt;-->
<!--&lt;!&ndash;          </button></a&ndash;&gt;-->
<!--&lt;!&ndash;          >&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;    <button&ndash;&gt;-->
<!--&lt;!&ndash;        class="carousel-control-prev"&ndash;&gt;-->
<!--&lt;!&ndash;        type="button"&ndash;&gt;-->
<!--&lt;!&ndash;        data-bs-target="#carouselExampleDark"&ndash;&gt;-->
<!--&lt;!&ndash;        data-bs-slide="prev">&ndash;&gt;-->
<!--&lt;!&ndash;      <span class="carousel-control-prev-icon" aria-hidden="true"></span>&ndash;&gt;-->
<!--&lt;!&ndash;      <span class="visually-hidden">Previous</span>&ndash;&gt;-->
<!--&lt;!&ndash;    </button>&ndash;&gt;-->
<!--&lt;!&ndash;    <button&ndash;&gt;-->
<!--&lt;!&ndash;        class="carousel-control-next"&ndash;&gt;-->
<!--&lt;!&ndash;        type="button"&ndash;&gt;-->
<!--&lt;!&ndash;        data-bs-target="#carouselExampleDark"&ndash;&gt;-->
<!--&lt;!&ndash;        data-bs-slide="next">&ndash;&gt;-->
<!--&lt;!&ndash;      <span class="carousel-control-next-icon" aria-hidden="true"></span>&ndash;&gt;-->
<!--&lt;!&ndash;      <span class="visually-hidden">Next</span>&ndash;&gt;-->
<!--&lt;!&ndash;    </button>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->

<!--  <div class="container mb-5">-->
<!--    <div class="headerpapan">-->
<!--      <h1>-->
<!--      Toko Buku Bersama-->
<!--      </h1>-->
<!--    </div>-->
<!--    <table class="table border table-hover mt-5" id="table">-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th scope="col">#</th>-->
<!--        <th scope="col">Judul Buku</th>-->
<!--        <th scope="col">Pengarang</th>-->
<!--        <th scope="col">Penerbit</th>-->
<!--        <th scope="col">Tahun Terbit</th>-->
<!--        <th scope="col">Harga</th>-->
<!--        <th scope="col">Cover</th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--      <tr v-for="(data, idx) in allBuku" v-bind:key="data.id">-->
<!--        <th scope="row">{{ idx + 1 }}</th>-->
<!--        <td>{{ data.judul }}</td>-->
<!--        <td>{{ data.pengarang }}</td>-->
<!--        <td>{{ data.penerbit }}</td>-->
<!--        <td>{{ data.tahun }}</td>-->
<!--        <td>{{ data.harga }}</td>-->
<!--        <td>-->
<!--          <img :src="data.keterangan" alt="cover" style="width: 100px" />-->
<!--        </td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->
<!--  </div>-->
</template>
<style scoped>
.nav-link {
  margin-bottom: 10px;
  font-size: 30px;
  text-align: center;
}

.headerpapan {
  margin-top: 70px;
  text-align: center;
}

/* .img-fluid {
        height: 880px;
        width: 1650px;
    } */
</style>