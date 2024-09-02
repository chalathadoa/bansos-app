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
      <form class="w-3/4 lg:w-1/2 mx-auto">
        <div class="space-y-12">
          <div class="pb-12">
            <div class="text-center">
              <h2 class="font-semibold text-3xl leading-7 text-gray-900">
                Form Input Data Penerima Bansos
              </h2>
              <p>
                {{ cities }}
              </p>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                Silakan isi form dibawah ini dengan data penerima Bantuan Sosial (Bansos)
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
                    name="nama"
                    id="nama"
                    autocomplete="name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Nama Lengkap Anda"
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
                    name="nik"
                    id="nik"
                    autocomplete="name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="nik Lengkap Anda"
                  />
                </div>
              </div>
              <div class="col-span-full">
                <label for="nkk" class="block text-sm font-medium leading-6 text-gray-900"
                  >Nomor Kartu Keluarga (nkk)</label
                >
                <div class="mt-2">
                  <input
                    type="number"
                    name="nkk"
                    id="nkk"
                    autocomplete="name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="nkk Lengkap Anda"
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
                          id="foto_ktp"
                          name="foto_ktp"
                          type="file"
                          class="sr-only"
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
                        <input id="foto_kk" name="foto_kk" type="file" class="sr-only" />
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
                    type="number"
                    name="umur"
                    id="umur"
                    autocomplete="umur"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="umur Lengkap Anda"
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
                    id="jenis_kelamin"
                    name="jenis_kelamin"
                    autocomplete="jenis_kelamin"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
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
                    v-model="selectedProvince"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option
                      v-for="province in provinces"
                      :key="province.id"
                      :value="province.id"
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
                  <select
                    @change="handleChangeCity"
                    id="kab_kota"
                    name="kab_kota"
                    autocomplete="kab_kota"
                    v-model="selectedCity"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option
                      v-if="cities && cities.length"
                      v-for="city in cities"
                      :key="city.id"
                      :value="city.id"
                    >
                      {{ city.name }}
                    </option>
                    <option v-else disabled>Loading...</option>
                  </select>
                </div>
                <p v-if="cities">{{ cities }}</p>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="kecamatan"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Kecamatan</label
                >
                <div class="mt-2">
                  <select
                    @change="handleChangeDistrict"
                    id="kecamatan"
                    name="kecamatan"
                    autocomplete="kecamatan"
                    v-model="selectedDistrict"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option
                      v-if="districts && districts.length"
                      v-for="district in districts"
                      :key="district.id"
                      :value="district.id"
                    >
                      {{ district.name }}
                    </option>
                    <option v-else disabled>Loading...</option>
                  </select>
                </div>
                <p v-if="districts">{{ districts }}</p>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="kelurahan"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Kelurahan/Desa</label
                >
                <div class="mt-2">
                  <select
                    id="kelurahan"
                    name="kelurahan"
                    autocomplete="kelurahan"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option
                      v-if="villages && villages.length"
                      v-for="village in villages"
                      :key="village.id"
                      :value="village.id"
                    >
                      {{ village.name }}
                    </option>
                    <option v-else disabled>Loading...</option>
                  </select>
                </div>
                <p v-if="villages">{{ villages }}</p>
              </div>
              <div class="col-span-full">
                <label
                  for="alamat"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Alamat</label
                >
                <div class="mt-2">
                  <textarea
                    id="alamat"
                    name="alamat"
                    rows="3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Isi alamat Anda"
                  />
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="RT"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >RT</label
                >
                <div class="mt-2">
                  <input
                    id="RT"
                    name="RT"
                    autocomplete="RT"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:max-w-xs sm:text-sm sm:leading-6" placeholder="Contoh: 001"
                  >
                  </input>
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="RW"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >RW</label
                >
                <div class="mt-2">
                  <input
                    id="RW"
                    name="RW"
                    autocomplete="RW"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:max-w-xs sm:text-sm sm:leading-6" placeholder="Contoh: 001"
                  >
                  </input>
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="penghasilan_sebelum"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Penghasilan Sebelum Pandemi</label
                >
                <div class="mt-2">
                  <input type="number"
                    id="penghasilan_sebelum"
                    name="penghasilan_sebelum"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Isi penghasilan sebelum Pandemi Anda"
                  ></input>
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="penghasilan_sesudah"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Penghasilan sesudah Pandemi</label
                >
                <div class="mt-2">
                  <input type="number"
                    id="penghasilan_sesudah"
                    name="penghasilan_sesudah"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Isi penghasilan sesudah Pandemi Anda"
                  ></input>
                </div>
              </div>
              <div class="col-span-full">
                <label
                  for="alasan"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Alasan Anda membutuhkan bantuan</label
                >
                <div class="mt-2">
                  <textarea
                    id="alasan"
                    name="alasan"
                    rows="3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    placeholder="Isi alasan Anda"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFetch } from "#app";
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

// kabupaten/kota
const cities = ref([]);
const selectedCity = ref("");
async function fetchCities(provinceId) {
  if (provinceId) {
    const url = `/api/cities?provinceId=${provinceId}`;
    try {
      const { data: cityData } = await useFetch(url);
      cities.value = cityData;
      console.log(cities.value);
      console.log(provinces.value);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  } else {
    cities.value = [];
  }
}

function handleChangeProvince() {
  return fetchCities(selectedProvince.value);
}
// kecamatan
const districts = ref([]);
const selectedDistrict = ref("");
async function fetchDistricts(cityId) {
  if (cityId) {
    const url = `/api/districts?cityId=${cityId}`;
    try {
      const { data: districtData } = await useFetch(url);
      districts.value = districtData;
      console.log(districts.value);
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  } else {
    districts.value = [];
  }
}

function handleChangeCity() {
  return fetchDistricts(selectedCity.value);
}
// kelurahan
const villages = ref([]);
const selectedVillage = ref("");
async function fetchVillages(districtId) {
  if (districtId) {
    const url = `/api/villages?districtId=${districtId}`;
    try {
      const { data: villageData } = await useFetch(url);
      villages.value = villageData;
      console.log(villages.value);
    } catch (error) {
      console.error("Error fetching villages:", error);
    }
  } else {
    villages.value = [];
  }
}

function handleChangeDistrict() {
  return fetchVillages(selectedDistrict.value);
}

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

// function handleChange(event) {
//   selectedProvince.value = event.target.value;
// }
// const url = `https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${selectedProvince.value}.json`;
// const { data: trycit } = await useFetch(url);
// cities.value = trycit.value;
// console.log(url);
// watch(selectedProvince, async (newProvinceId) => {
//   if (newProvinceId) {
//     const url = `https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${newProvinceId}.json`;
//     const { data: trycit } = await useFetch(url);
//     cities.value = trycit.value;
//     console.log("berhasil");
//   } else {
//     cities.value = [];
//     console.log("gagal");
//   }
// });
</script>
