<template>
  <carousel :items-to-show="1">
    <!-- Slides -->
    <slide v-for="slide in 5" :key="slide">
      <div class="flex flex-col lg:flex-row items-center border-2 border-indigo-950 text-indigo-950 rounded-xl shadow-lg p-6 lg:p-8 mt-8 space-y-4 lg:mx-56 lg:space-x-6">
        <img src="@/assets/img/wedding.png" alt="" class="w-3/6 aspect-square border-2 border-indigo-950 bg-indigo-400 rounded-xl object-contain md:w-2/6 lg:h-48 lg:w-48">
        <div class="lg:flex-col">
          <h2 class="text-2xl font-semibold text-center lg:text-left">Wedding Photoshoot</h2>
          <p class="text-base text-center lg:text-left mt-3">Your wedding day is one of the most precious moments in your life. 
            This service is designed to transform magical moments into lasting memories, preserving the essence 
            of your love story through the art of photography.</p>
          <button @click="next" class="flex ml-auto"><Arrowright /></button>
        </div>
      </div>
    </slide>
    <!-- Buttons -->
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Arrowright from '@/assets/icons/arrowright.vue';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Arrowright
},
}
</script>
