<template>
<div class="bg-indigo-950 text-white lg:mx-7 lg:rounded-t-xl mt-20">
  <div class="grid gap-7 grid-cols-1 md:grid-cols-2 lg:flex px-12 py-10 lg:justify-center lg:space-x-12 lg:place-items-start">
    <div class="grid text-center place-items-center space-y-2 md:space-y-0 lg:items-start lg:place-items-start lg:w-80 lg:space-y-5">
      <div class="flex space-x-2">
        <img src="@/assets/img/logo.png" alt="Lenscape Logo" class="w-6 ml-5">
        <p class="text-xl font-semibold">Lenscape</p>
      </div>
      <p class="font-light mx-5 lg:text-justify">Lenscape is a photography and videography services 
        company that focuses on professionalism, innovation and 
        collaboration. Lenscape has become a top choice for special events.
      </p>
    </div>
    <div class="grid text-center space-y-2 lg:text-left lg:space-y-5">
      <p class="text-xl font-semibold">Pages</p>
      <ul class="text-xl">
        <li class="font-light text-lg">Home</li>
        <li class="font-light text-lg">About</li>
        <li class="font-light text-lg">Services</li>
        <li class="font-light text-lg">Projects</li>
        <li class="font-light text-lg">Testimonials</li>
        <li class="font-light text-lg">Contact</li>
      </ul>
    </div>
    <div class="grid text-center space-y-2 lg:text-left lg:space-y-5">
      <p class="text-xl font-semibold">Support</p>
      <ul class="text-xl">
        <li class="font-light text-lg">Privacy Policy</li>
        <li class="font-light text-lg">Terms & Conditions</li>
        <li class="font-light text-lg">FAQ</li>
      </ul>
    </div>
    <div class="lg:flex-col lg:w-80 lg:space-y-8">
      <div class="grid text-center space-y-2 md:space-y-0  lg:space-y-5 lg:items-start lg:place-items-start">
        <p class="text-xl">Our experts are available 24/7:</p>
        <ul class="text-xl">
          <div class="flex space-x-2 items-center justify-center lg:justify-start">
            <telepon class="w-4"/><p class="text-lg">0332-123-456</p>
          </div>
          <div class="flex space-x-2 items-center justify-center lg:justify-start">
            <email class="w-4"/><p class="text-lg">lenscape@gmail.com</p>
          </div>
        </ul>
      </div>
      <div class="grid text-center space-y-3 md:col-span-2 lg:items-start lg:place-items-start">
        <p class="text-xl">Follow Us:</p>
        <div class="flex flex-row space-x-3 justify-center">
          <facebook />
          <instagram />
          <twitter />
          <youtube class="border rounded-md w-9 h-9"/>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center max-w-5xl mx-auto p-2 border-t-2 ">
        <p class="text-xl font-thin mb-3 text-center">©2023 Lenscape. All Rights Reserved.</p>
      </div>
</div>
</template>

<script setup>
import telepon from '@/assets/icons/telepon.vue'
import email from '@/assets/icons/email.vue'
import facebook from '@/assets/icons/facebook.vue'
import instagram from '@/assets/icons/instagram.vue'
import twitter from '@/assets/icons/twitter.vue'
import youtube from '@/assets/icons/youtube.vue'
</script>