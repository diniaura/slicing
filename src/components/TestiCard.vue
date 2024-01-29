<template>
    <div class="h-auto mx-3">
      <div class="flex flex-col items-center relative">
        <chat />
        <div class="flex flex-col mx-8 py-7 absolute text-gray-900 ">
          <div class="flex flex-row justify-between">
            <h4 class="font-semibold">{{ name }}</h4>
            <fivestar />
          </div>
          <p class="text-justify mt-6">{{ comments }}</p>
        </div>
      </div>
    <img :src="photo" alt="" class="w-1/6 rounded-full ml-10 mt-3">
    </div>
</template>

<script setup>
import chat from '@/assets/icons/chat.vue';
import fivestar from '@/assets/icons/fivestar.vue';

defineProps({
  name: String,
  comments: String,
  photo: String,
});
</script>