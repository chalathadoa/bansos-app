<template>
  <div class="bg-white">
    <header class="fixed inset-x-0 top-0 z-50 bg-yellow-500 bg-opacity-5 backdrop-blur-sm">
      <nav class="flex items-center justify-between" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="">
            <span class="sr-only">LPM Jabar</span>
            <img class="h-16 w-auto ml-6" src="assets/images/logo.png" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm p-6 mr-2 font-semibold leading-6 text-gray-900 hover:bg-yellow-400">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">LPM Jabar</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <!-- <div class="absolute inset-0 -z-10 overflow-hidden">
        <div class="relative w-full h-full">
          <img src="assets/images/background.jpg" alt="Background Image" class="w-full h-full object-cover opacity-50">
          <div class="absolute inset-0 bg-black opacity-30"></div>
        </div>
      </div> -->
      <div class="mx-auto max-w-2xl py-12 sm:py-48 lg:py-32">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 hover:text-yellow-500 sm:text-6xl">Selamat Datang!</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">Aplikasi Pengumpulan Data Penerima Bantuan Sosial LPM Jabar memudahkan administrasi kecamatan dan kelurahan dalam menginput dan memverifikasi data penerima bantuan. Dengan fitur verifikasi yang terintegrasi, kami memastikan bantuan sosial tepat sasaran dan tepat waktu.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <nuxt-link to="/form">
              <a href="#" class="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">Input Data</a>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Input Form', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>
