<template>
  <div class="bg-white">
    <header
      class="fixed inset-x-0 top-0 z-50 bg-yellow-500 bg-opacity-5 backdrop-blur-sm"
    >
      <nav class="flex items-center justify-between" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="">
            <span class="sr-only">LPM Jabar</span>
            <img class="h-16 w-auto ml-6" src="assets/images/logo.png" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm p-6 mr-2 font-semibold leading-6 text-gray-900 hover:bg-yellow-400"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">LPM Jabar</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate px-6 pt-28 lg:px-8">
      <!-- FORMULIR -->
      <form
        v-if="!submittedData"
        @submit.prevent="submitForm"
        class="w-3/4 lg:w-1/2 mx-auto mb-24"
      >
        <div class="space-y-12">
          <div class="pb-12">
            <div class="text-center">
              <h2 class="font-semibold text-3xl leading-7 text-gray-900">
                Form Input Data Penerima Bansos
              </h2>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                Silakan isi form dibawah ini dengan data penerima Bantuan Sosial (Bansos).
                Jika api provinsi belum muncul, silakan refresh halaman.
              </p>
            </div>

            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="col-span-full">
                <label
                  for="nama"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Nama Lengkap</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    v-model="form.nama"
                    name="nama"
                    id="nama"
                    autocomplete="name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Nama Lengkap Anda"
                    required
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label for="nik" class="block text-sm font-medium leading-6 text-gray-900"
                  >Nomor Induk Kependudukan (nik)</label
                >
                <div class="mt-2">
                  <input
                    type="number"
                    v-model="form.nik"
                    name="nik"
                    id="nik"
                    autocomplete="nik"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="NIK Anda"
                    required
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label for="nkk" class="block text-sm font-medium leading-6 text-gray-900"
                  >Nomor Kartu Keluarga (NKK)</label
                >
                <div class="mt-2">
                  <input
                    v-model="form.nkk"
                    type="number"
                    name="nkk"
                    id="nkk"
                    autocomplete="nkk"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="NKK Anda"
                    required
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="foto_ktp"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Foto KTP</label
                >
                <div
                  class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                >
                  <div class="text-center">
                    <PhotoIcon
                      class="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        for="foto_ktp"
                        class="relative cursor-pointer rounded-md bg-white font-semibold text-yellow-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-600 focus-within:ring-offset-2 hover:text-yellow-500"
                      >
                        <span>Upload a file</span>
                        <input
                          @change="handleFileUpload('ktp', $event)"
                          id="foto_ktp"
                          name="foto_ktp"
                          type="file"
                          class="sr-only"
                          accept=".jpg,.jpeg,.png,.bmp"
                          required
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="foto_kk"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Foto KK</label
                >
                <div
                  class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                >
                  <div class="text-center">
                    <PhotoIcon
                      class="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        for="foto_kk"
                        class="relative cursor-pointer rounded-md bg-white font-semibold text-yellow-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-600 focus-within:ring-offset-2 hover:text-yellow-500"
                      >
                        <span>Upload a file</span>
                        <input
                          @change="handleFileUpload('kk', $event)"
                          id="foto_kk"
                          name="foto_kk"
                          type="file"
                          class="sr-only"
                          accept=".jpg,.jpeg,.png,.bmp"
                          required
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="umur"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Umur</label
                >
                <div class="mt-2">
                  <input
                    v-model="form.umur"
                    type="number"
                    name="umur"
                    id="umur"
                    autocomplete="umur"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="umur Lengkap Anda"
                    required
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="jenis_kelamin"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Jenis Kelamin</label
                >
                <div class="mt-2">
                  <select
                    v-model="form.jenis_kelamin"
                    id="jenis_kelamin"
                    name="jenis_kelamin"
                    autocomplete="jenis_kelamin"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    required
                  >
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="provinsi"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Provinsi</label
                >
                <div class="mt-2">
                  <select
                    @change="handleChangeProvince"
                    id="provinsi"
                    name="provinsi"
                    autocomplete="provinsi"
                    v-model="form.provinsi"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                  >
                    <option
                      v-for="province in provinces"
                      :key="province.id"
                      :value="province.name"
                    >
                      {{ province.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="kab_kota"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Kabupaten/Kota</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    v-model="form.kab_kota"
                    id="kab_kota"
                    name="kab_kota"
                    autocomplete="kab_kota"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="kecamatan"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Kecamatan</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    v-model="kecamatan"
                    id="kecamatan"
                    name="kecamatan"
                    autocomplete="kecamatan"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="kelurahan"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Kelurahan</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    v-model="form.kelurahan"
                    id="kelurahan"
                    name="kelurahan"
                    autocomplete="kelurahan"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:max-w-xs sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="alamat"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Alamat</label
                >
                <div class="mt-2">
                  <textarea
                    v-model="form.alamat"
                    id="alamat"
                    name="alamat"
                    rows="3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Isi alamat Anda"
                    required
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label for="rt" class="block text-sm font-medium leading-6 text-gray-900"
                  >RT</label
                >
                <div class="mt-2">
                  <input
                    v-model="form.rt"
                    id="rt"
                    name="rt"
                    autocomplete="rt"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:max-w-xs sm:text-sm sm:leading-6"
                    placeholder="Contoh: 001"
                    required
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label for="rw" class="block text-sm font-medium leading-6 text-gray-900"
                  >RW</label
                >
                <div class="mt-2">
                  <input
                    v-model="form.rw"
                    id="rw"
                    name="rw"
                    autocomplete="rw"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:max-w-xs sm:text-sm sm:leading-6"
                    placeholder="Contoh: 001"
                    required
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="penghasilan_sebelum"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Penghasilan Sebelum Pandemi</label
                >
                <div class="mt-2">
                  <input
                    type="number"
                    v-model="penghasilan_sebelum"
                    id="penghasilan_sebelum"
                    name="penghasilan_sebelum"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Isi penghasilan sebelum Pandemi Anda"
                    required
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="penghasilan_sesudah"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Penghasilan sesudah Pandemi</label
                >
                <div class="mt-2">
                  <input
                    type="number"
                    v-model="form.penghasilan_sesudah"
                    id="penghasilan_sesudah"
                    name="penghasilan_sesudah"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Isi penghasilan sesudah Pandemi Anda"
                    required
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="alasan"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Alasan Anda membutuhkan bantuan</label
                >
                <div class="mt-2">
                  <select
                    v-model="form.alasan"
                    id="alasan"
                    name="alasan"
                    autocomplete="alasan"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    required
                  >
                    <option value="Kehilangan pekerjaan">Kehilangan pekerjaan</option>
                    <option value="Kepala keluarga">Kepala keluarga</option>
                    <option value="Tergolong fakir/miskin">Tergolong fakir/miskin</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                  <input
                    v-if="form.alasan === 'Lainnya'"
                    v-model="form.customAlasan"
                    type="text"
                    placeholder="Isi alasan lain"
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label class="block text-sm font-medium leading-6 text-gray-900">
                  <input v-model="form.konfirmasi" type="checkbox" required />
                  Saya menyatakan bahwa data yang diisikan adalah benar dan siap
                  mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data
                  tersebut.
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">
            Batal
          </button>
          <button
            type="submit"
            class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Kirim
          </button>
        </div>
      </form>
      <!-- HASIL DATA -->
      <div v-else class="w-3/4 lg:w-1/2 mx-auto">
        <div class="px-4 sm:px-0 mx-auto text-center">
          <h3 class="text-base font-semibold leading-7 text-gray-900">
            Data Penerima Bansos
          </h3>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Lembaga Pemberdayaan Masyarakat Jawa Barat
          </p>
        </div>
        <div class="mt-6 border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Nama Lengkap</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {{ submittedData.nama }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">NIK</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {{ submittedData.nik }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                Nomor Kartu Keluarga
              </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {{ submittedData.nkk }}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Foto KTP</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {{ submittedData.foto_ktp }}
              </dd>
            </div>
          </dl>
          <button
            @click="resetForm"
            class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Kembali ke Form
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFetch } from "#app";
import { useRouter } from "vue-router";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { PhotoIcon, UserCircleIcon } from "@heroicons/vue/24/solid";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Input Form", href: "#" },
];

const mobileMenuOpen = ref(false);

// provinsi
const provinces = ref([]);
const selectedProvince = ref(null);
const { data } = await useFetch(
  "https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json"
);
provinces.value = data.value;

const form = ref({
  nama: "",
  nik: "",
  nkk: "",
  foto_ktp: null,
  foto_kk: null,
  umur: "",
  jenis_kelamin: "",
  provinsi: "",
  kab_kota: "",
  kecamatan: "",
  kelurahan: "",
  alamat: "",
  rt: "",
  rw: "",
  penghasilan_sebelum: "",
  penghasilan_sesudah: "",
  alasan: "",
  customAlasan: "",
  konfirmasi: false,
});
const submittedData = ref(null);
const handleFileUpload = (field, event) => {
  const file = event.target.files[0];
  if (file && file.size <= 2 * 1024 * 1024) {
    form.value[field] = file;
  } else {
    alert("Ukuran file terlalu besar, maksimal 2MB");
  }
};

const submitForm = async () => {
  if (form.value.age < 25) {
    alert("Umur harus lebih dari atau sama dengan 25 tahun");
    return;
  }

  const formData = new FormData();
  for (const key in form.value) {
    const value = form.value[key];

    if (value !== null && value !== undefined) {
      if (value instanceof File) {
        formData.append(key, value);
        submittedData.value = { ...formData.value };
      } else {
        formData.append(key, value.toString());
        submittedData.value = { ...formData.value };
      }
    }
  }

  try {
    const response = await simulateApiCall(formData);
    console.log(response);
    alert("Form berhasil disubmit");
  } catch (error) {
    alert("Gagal submit form, silakan coba lagi");
  }
};

const simulateApiCall = async (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2;
      isSuccess ? resolve() : reject();
    }, 1500);
  });
};

function resetForm() {
  formData.value = {
    name: "",
    nik: "",
    // Reset field lainnya
  };
  submittedData.value = null;
}
// // kabupaten/kota
// const cities = ref([]);
// const selectedCity = ref("");
// async function fetchCities(provinceId) {
//   if (provinceId) {
//     const url = `/api/cities?provinceId=${provinceId}`;
//     try {
//       const { data: cityData } = await useFetch(url);
//       cities.value = cityData;
//       console.log(cities.value);
//       console.log(provinces.value);
//     } catch (error) {
//       console.error("Error fetching cities:", error);
//     }
//   } else {
//     cities.value = [];
//   }
// }

// function handleChangeProvince() {
//   return fetchCities(selectedProvince.value);
// }
// // kecamatan
// const districts = ref([]);
// const selectedDistrict = ref("");
// async function fetchDistricts(cityId) {
//   if (cityId) {
//     const url = `/api/districts?cityId=${cityId}`;
//     try {
//       const { data: districtData } = await useFetch(url);
//       districts.value = districtData;
//       console.log(districts.value);
//     } catch (error) {
//       console.error("Error fetching districts:", error);
//     }
//   } else {
//     districts.value = [];
//   }
// }

// function handleChangeCity() {
//   return fetchDistricts(selectedCity.value);
// }
// // kelurahan
// const villages = ref([]);
// const selectedVillage = ref("");
// async function fetchVillages(districtId) {
//   if (districtId) {
//     const url = `/api/villages?districtId=${districtId}`;
//     try {
//       const { data: villageData } = await useFetch(url);
//       villages.value = villageData;
//       console.log(villages.value);
//     } catch (error) {
//       console.error("Error fetching villages:", error);
//     }
//   } else {
//     villages.value = [];
//   }
// }

// function handleChangeDistrict() {
//   return fetchVillages(selectedDistrict.value);
// }
</script>
