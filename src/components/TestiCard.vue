<template>
  <carousel :items-to-show="1">
    <slide v-for="slide in 5" :key="slide">
      <div class="h-auto mx-3 relative">
        <div class="flex flex-col items-center">
          <chat class="relative "/>
          <div class="flex flex-col p-8 absolute text-gray-900 ">
            <div class="flex flex-row justify-between">
              <h4 class="font-semibold">{{ name }}</h4>
              <fivestar />
            </div>
            <p class="text-justify mt-4">{{ comments }}</p>
          </div>
        </div>
        <img :src="photo" alt="" class="w-1/6 rounded-full ml-10 mt-3">
      </div>
    </slide>
    <!-- Buttons -->
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import chat from '@/assets/icons/chat.vue';
import fivestar from '@/assets/icons/fivestar.vue';

defineProps({
  name: String,
  comments: String,
  photo: String,
});
</script>