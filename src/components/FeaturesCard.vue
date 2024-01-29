<template>
    <div class="px-5 py-4 flex flex-col justify-center rounded-xl border shadow-xl border-blue-400 text-indigo-950">
        <div class="flex-row flex items-center">
            <Check />
            <h4 class="font-semibold text-indigo-950 ml-2 text-lg">{{ title }}</h4>
        </div>
        <p class="mt-1">{{ desc }}</p>
    </div>
</template>

<script setup>
import Check from '@/assets/icons/check.vue';

defineProps({
  title: String,
  desc: String,
});
</script>
