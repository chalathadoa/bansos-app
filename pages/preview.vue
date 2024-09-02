<template>
  <div>
    <h1>Preview Data</h1>
    <p>Nama: {{ data.nama }}</p>
    <p>NIK: {{ data.nik }}</p>
    <!-- Display other data fields -->
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const data = route.state?.data;

if (!data) {
  // Redirect or show error
  router.push("/form");
  alert("Tidak ada data untuk ditampilkan");
}
</script>
