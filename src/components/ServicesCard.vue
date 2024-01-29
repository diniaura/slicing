<template>
<div class="flex flex-row mt-10 mx-36 border-2 border-indigo-950 rounded-xl shadow-lg">
    <div class="px-10 py-7 flex flex-row items-center">
        <!-- fotonya jadiin 1:1 sama kananin panahnya HEHE -->
      <div class="flex items-center w-2/4 h-48 p-4 bg-indigo-400 border-2 border-indigo-950 rounded-xl">
        <img src="@/assets/img/wedding.png" class="h-48 w-48">
      </div>
      <div class="flex flex-col text-indigo-950 mx-5 text-left pl-4 px-1">
        <p class="text-3xl font-semibold mb-3 py-3">Wedding Photoshoot</p>
        <p class="text-lg text-justify">Your wedding day is one of the most precious moments in your life. 
          This service is designed to transform magical moments into lasting memories, preserving the essence 
          of your love story through the art of photography.</p>
          <arrowright class="flex ml-auto mt-3" />
      </div>
    </div>
</div>
</template>

<script setup>
import arrowright from '@/assets/icons/arrowright.vue';
</script>