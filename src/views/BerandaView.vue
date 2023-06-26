<script>
   import axios from 'axios';
   import {ref} from 'vue';

   const readData = 'http://localhost/buku/selectallbuku.php';

   export default {
    data () {
        return {
            buku: ref ([]),
        };
    }, 
    mounted() {
        this.readData();
    },
        methods: {
            readData () {
                axios
                .get(readData)
                .then((resp) => {
                    console.log(resp);
                    this.buku = resp.data;
                })
                .catch((err) => {
                    console.log(err);
            });
        },
    },
   };
</script>
<template>
     <li v-for="data in buku" style="list-style: none;">
        <p>{{ data.judul }}</p>
        <p>{{ data.pengarang }}</p>
        <p>{{ data.penerbit }}</p>
        <p>{{ data.tahun }}</p>
        <p>{{ data.harga }}</p>
     </li>
</template>