<script setup>
import arrowright from '@/assets/icons/arrowright.vue';
</script>

<template>

  <!-- font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap" rel="stylesheet">


    <div class="flex flex-col lg:flex-row items-center border-2 border-indigo-950 text-indigo-950 rounded-xl shadow-lg p-6 lg:p-8 mt-8 space-y-4 lg:mx-56 lg:space-x-6">
      <img src="@/assets/img/wedding.png" alt="" class="w-3/6 aspect-square border-2 border-indigo-950 bg-indigo-400 rounded-xl md:w-2/6 lg:h-48 lg:w-48 object-contain">
      <div class="lg:flex-col">
        <h2 class="font-custom text-2xl font-semibold text-center lg:text-left">Wedding Photoshoot</h2>
        <p class="font-custom text-base text-center lg:text-left mt-3">Your wedding day is one of the most precious moments in your life. 
          This service is designed to transform magical moments into lasting memories, preserving the essence 
          of your love story through the art of photography.</p>
        <button class="flex ml-auto"><arrowright /></button>
      </div>
    </div>
</template>

<!-- style font -->
<style>
.font-custom {
  font-family: 'Poppins', sans-serif;
}
</style>