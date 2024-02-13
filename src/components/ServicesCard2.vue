<template>
    <carousel :items-to-show="3">
    <!-- Slides -->
    <slide v-for="slide in 5" :key="slide">
    <div class="w-full m-1 md:w-11/12 lg:w-11/12 flex flex-col bg-slate-300 rounded-xl text-indigo-950 relative lg:pb-16">
      <img src="@/assets/img/services2(1).png" alt="clothes">
      <div class="hidden absolute lg:flex flex-col backdrop-blur-md w-full px-4 pt-4 pb-10 text-center bottom-0 border rounded-xl place-items-end">
        <p class="text-xl font-semibold self-center">Clothing Product Photography</p>
        <p class="self-center hidden lg:flex">Flat lay, ghost mannequin, hanged & pinned shoot</p>
        <div class="absolute bottom-0 right-0 bg-indigo-950 text-white w-fit px-5 py-1 mt-7 flex items-center justify-center rounded-tl-xl rounded-br-xl">
          <p class="">Customize</p>
          <!-- <arrowup class="w-7 h-7 mt-1" /> -->
        </div>
      </div>
    </div>
    <!-- Buttons -->
    </slide>
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
  