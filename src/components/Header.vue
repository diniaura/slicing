<template>
    <div class="h-screen mx-7">
      <!-- Navbar -->
      <div class="flex flex-row sm:flex-row rounded-2xl py-5 px-10 justify-between bg-indigo-950 my-6 items-center">
        <div class="flex items-center">
          <img alt="logo" class="w-1/6 my-2" src="@/assets/img/logo.png" />
          <h2 class="text-2xl font-semibold tracking-wide py-3 ml-2">Lenscape</h2>
        </div>
        <nav class="flex flex-row bg-white text-black rounded-full shadow-3xl py-2 h-12 space-x-6 px-6 items-center">
          <p class="hover:font-medium hover:text-indigo-950 cursor-pointer">Home</p>
          <p class="hover:font-medium hover:text-indigo-950 cursor-pointer">About</p>
          <p class="hover:font-medium hover:text-indigo-950 cursor-pointer">Services</p>
          <p class="hover:font-medium hover:text-indigo-950 cursor-pointer">Projects</p>
          <p class="hover:font-medium hover:text-indigo-950 cursor-pointer">Testimonials</p>
          <p class="hover:font-medium hover:text-indigo-950 cursor-pointer">Contact</p>
        </nav>
        <div class="relative flex items-center border-1 rounded-full border border-blue-500 bg-white h-11">
          <p class="px-5 text-blue-500 font-medium tracking-wide cursor-pointer">Get Started</p>
          <arrowup class="m-1 bg-blue-500 rounded-full absolute left-28" />
        </div>
      </div>

      <!-- Header -->
      <div class="flex flex-row rounded-2xl py-9 px-10 justify-between bg-gradient-to-b from-indigo-950 via-indigo-700 to-indigo-400">
        <div class="flex flex-col py-24">
          <!-- Teks: Kiri -->
          <p class="font-semibold text-5xl tracking-normal justify-center py-2">{{ caption }}</p>
          <p class="font-light text-4xl tracking-normal py-2">- Unveil Your Story with Lenscape!</p>
          <!-- Gambar: Kanan -->
        </div>
        <img alt="header image" class="w-1/3 object-contain" :src="photo" />
      </div>
    </div>
</template>


<script setup>
import arrowup from '@/assets/icons/arrowup.vue';

defineProps({
  photo: String,
  caption: String,
});
</script>