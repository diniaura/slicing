<template>
<div class="mx-auto border-2 border-indigo-950 rounded-xl shadow-lg">
    <div class="p-5 items-center">
        <div class="relative">
            <p class="absolute bg-indigo-950 py-1 px-3 right-0 bottom-0 rounded-tl-lg rounded-br-lg text-xs">17/11/2006</p>
            <img :src="photo" alt=""
            class="h-full rounded-xl" />
        </div>
        <p :src="caption" class="text-indigo-950 mt-3 text-center mx-4">{{ caption }}</p>
    </div>
</div>
</template>

<script>
export default{
    props: {
    photo: String,
    caption: String,
  },
};
</script>