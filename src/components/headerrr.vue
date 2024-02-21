<script setup>
import logo from '@/assets/icon/logo.vue';
import pnh3 from '@/assets/icon/pnh3.vue';
</script>

<template>
    <div class="flex max-w-h mx-10 justify-between mt-10 p-7 bg-indigo-950 text-white rounded-2xl">
        <p class="flex items-center text-2xl font-medium">
          <logo class="mr-5 ml-10"/>
          Lenscape
        </p>

        <div class="flex max-w-lg justify-center rounded-full bg-white px-6 py-4 text-black space-x-4 mx-5 ">
          <router-link to="/" class="flex w-24 mr-1 justify-center text-md hover:font-medium cursor-pointer">
            Home
          </router-link>
          <router-link to="/1" class="flex w-24 justify-center text-md hover:font-medium cursor-pointer">
            About
          </router-link>
          <router-link to="/2" class="flex w-36 justify-center text-md hover:font-medium cursor-pointer">
            Services
          </router-link>
          <router-link to="/3" class="flex w-36 justify-center text-md hover:font-medium cursor-pointer">
            Projects
          </router-link>
          <div class="flex w-52 justify-center text-md hover:font-medium cursor-pointer">
            Testimonials
          </div>
          <div class="flex w-36 justify-center text-md hover:font-medium cursor-pointer">
            Contact
          </div>
        </div>

        <div class="flex w-48 justify-center mr- items-center relative cursor-pointer">
          <div class="flex w-40 h-12 my-auto bg-white rounded-full font-medium text-indigo-400 border-2  border-indigo-400 
          items-center justify-center ">
            Get Started
          </div>
          <div class="flex absolute items-center w-7 h-7 bg-indigo-400 bottom-3.5 right-1 border border-indigo-400 rounded-full">
            <pnh3 class="-rotate-45"/>
          </div>
        </div>
    </div>

</template>