<template>
<div class="items-center flex flex-col space-x-18">
  <div class="absolute border border-xl bg-white border-indigo-400 rounded-2xl flex items-center justify-center shadow-xl">
    <Usercheck :src="icon" class="m-5 w-11/12"/>
  </div>
  <div class="border border-indigo-400 rounded-2xl text-center flex flex-col mx-6 px-6 py-6 pt-14 mt-12">
    <h2 class="text-indigo-950 font-semibold text-xl mx-7">{{ title }}</h2>
    <p class="text-indigo-950 mt-3">{{ desc }}</p>
  </div>
</div>
</template>

<script>
export default{
    props: {
    icons: String,
    title: String,
    desc: String,
  },
};
</script>