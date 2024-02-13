<template>
  <div class="mx-7 lg:h-auto">
    <!-- Navbar -->
    <div class="fixed w-full z-40 start-0 top-0 px-10 py-3 md:py- lg:py-5 flex flex-wrap items-center justify-between bg-indigo-950 drop-shadow-xl">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="@/assets/img/logo.png" class="h-8" alt="Lenscape Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap">Lenscape</span>
      </a>
      <div class="relative flex lg:order-2 space-x-5 lg:space-x-0 rtl:space-x-reverse items-center">
        <button type="button" class="text-blue-500 bg-white font-medium rounded-full text-sm px-5 py-2 text-center flex border border-blue-400 relative">Get Started
        <arrowup class="bg-blue-400 rounded-full absolute right-[-11px] lg:inline-flex" /></button>
  
        <!-- Mobile Menu Button -->
        <button 
         type="button" 
         class="inline-flex items-center w-8 h-8 justify-center text-sm text-white rounded-full lg:hidden hover:text-indigo-400 hover:bg-white duration-500 hover:scale-75"
         aria-controls="navbar-sticky" 
         aria-expanded="false" 
         @click="toggleMobileMenu"
        >
          <span class="sr-only">Toggle menu</span>
          <div v-if="!isMobileMenuOpen">
            <!-- List icon -->
            <svg 
             class="w-5 h-5" 
             aria-hidden="true" 
             xmlns="http://www.w3.org/2000/svg" 
             fill="none" 
             viewBox="0 0 17 14"
            >
            <path 
             stroke="currentColor" 
             stroke-linecap="round" 
             stroke-linejoin="round" 
             stroke-width="2" 
             d="M1 1h15M1 7h15M1 13h15"
            />
            </svg>
          </div>
          <div v-else>
            <!-- X icon -->
            <svg
              class="w-7 h-7 text-red-400" 
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
            </svg>
          </div>
        </button>
      </div>
  
      <!-- Mobile Menu -->
      <div 
       v-if="isMobileMenuOpen" 
       class="items-center justify-between w-full lg:hidden lg:w-auto lg:order-1" 
       id="navbar-sticky"
      >
        <ul class="flex flex-col p-4 lg:py-1 mt-4 font-normal border-t-2 border-indigo-200 lg:space-x-0 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:px-3 text-black text-center">
          <li>
            <a href="#" class="block py-2 px-3 text-white hover:text-indigo-700 hover:bg-white text-sm font-semibold" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 text-white hover:text-indigo-700 hover:bg-white text-sm font-semibold">About</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 text-white hover:text-indigo-700 hover:bg-white text-sm font-semibold">Services</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 text-white hover:text-indigo-700 hover:bg-white text-sm font-semibold">Projects</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 text-white hover:text-indigo-700 hover:bg-white text-sm font-semibold">Testimonials</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-3 text-white hover:text-indigo-700 hover:bg-white text-sm font-semibold">Contact</a>
          </li>
        </ul>
      </div>
       
      <!-- Desktop Menu -->
      <div class="hidden w-full lg:block md:hidden sm:hidden md:w-auto" id="navbar-sticky">
        <ul class="py-1 px-6 text-sm font-medium flex flex-col rounded-full md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 bg-white">
          <li><a href="#" class="block py-2 text-indigo-950 hover:text-indigo-700">Home </a></li>
          <li><a href="#" class="block py-2 text-indigo-950 hover:text-indigo-700">About</a></li>
          <li><a href="#" class="block py-2 text-indigo-950 hover:text-indigo-700">Services</a></li>
          <li><a href="#" class="block py-2 text-indigo-950 hover:text-indigo-700">Projects</a></li>
          <li><a href="#" class="block py-2 text-indigo-950 hover:text-indigo-700">Testimonials</a></li>
          <li><a href="#" class="block py-2 text-indigo-950 hover:text-indigo-700">Contact</a></li>
        </ul>
      </div>
    </div>
  
    <div>
      <slot />
    </div>
  
  </div>
  </template>
  
  <script setup>
  import arrowup from '@/assets/icons/arrowup.vue';
  import { ref } from "vue";
  
  const isMobileMenuOpen = ref(false);
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };
  
  defineProps({
    photo: String,
    caption: String,
  });
  </script>