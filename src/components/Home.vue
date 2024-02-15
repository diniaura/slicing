<script setup>
import profesional from '@/assets/icons/profesional.vue';
import collaborative from '@/assets/icons/collaborative.vue';
import innovative from '@/assets/icons/innovative.vue';
import ServicesCard from './ServicesCard.vue'
import Header from './Header.vue'
import Popup from './Popup.vue'
import Login from './Login.vue'
import Register from './Register.vue'
// import Services2 from './Services2.vue'
</script>

<template>

  <!-- font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap" rel="stylesheet">

  <main class="text-white bg-white overflow-hidden">
    <!-- header -->
    <Header photo="src/assets/img/camera.png" caption="Picture Perfect Moments, Cinematic Memories" />

    <!-- about -->
    <div class="md:h-auto mt-10 md:mt-10 lg:mt-16 h-auto mx-7 mb-16">
      <div class="font-custom flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        About
      </div>
      <div class="font-custom flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-4xl lg:text-4xl font-semibold">
        Get to Know About Us 
      </div>
      <div class="font-custom mt-7 lg:px-14 justify-center text-center text-base md:text-lg lg:text-xl text-slate-800">
        Lenscape is photography and videography services company that focuses on profesionalism, innovation
        and collaboration. Lenscape has become a top choice for special events.
      </div>
      <div class="grid md:grid-cols-2 lg:flex place-items-center gap-y-10 mt-10 lg:mx-16 p-9">
        <div class="flex flex-col w-auto p-8 border-2 border-blue-700 rounded-xl justify-center shadow-2xl h-80 mx-7">
          <profesional 
            class="relative mx-auto h-28 w-24" />
          <div class="flex flex-col mt-3">
            <p class="font-custom flex text-slate-800 justify-center font-semibold text-xl">Professional</p>
            <p class="font-custom mt-2 text-center text-black">We prioritize professionalism in every aspect of the business, 
              committed to providing high quality service.</p>
          </div>
        </div>
        <div class="flex flex-col w-auto p-8 border-2 border-blue-700 rounded-xl justify-center shadow-2xl h-80 mx-7">
          <innovative 
            class="relative mx-auto h-28 w-24" />
          <div class="flex flex-col mt-3">
            <p class="font-custom flex text-slate-800 justify-center font-semibold text-xl">Innovative</p>
            <p class="font-custom mt-2 text-center text-black">We use a creative and innovative approach in presenting 
              visuals, able to embrace new ideas to create unique works.</p>
          </div>
        </div>
        <div class="flex flex-col w-auto p-8 border-2 border-blue-700 rounded-xl justify-center shadow-2xl h-80 mx-7 md:col-span-2">
          <collaborative 
            class="relative mx-auto h-28 w-24" />
          <div class="flex flex-col mt-3">
            <p class="font-custom flex text-slate-800 justify-center font-semibold text-xl">Collaborative</p>
            <p class="font-custom mt-2 text-center text-black md:px-10 lg:px-2">We collaborate actively by combining the client's vision 
              with our expertise to create extraordinary results.</p>
          </div>
        </div>
      </div>
    </div>
  
    <!-- services -->
    <div class="h-auto md:h-auto lg:h-screen mx-7 my-4">
      <div class="font-custom flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        Services
      </div>
      <div class="font-custom flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-4xl lg:text-4xl font-semibold">
        Best Services for You
      </div> 
      <div class="font-custom mt-7 lg:px-14 justify-center text-center text-base md:text-lg lg:text-xl text-slate-800">
        Lenscape can provide the best service. Our commitment to quality, innovation and customer satisfaction 
        sets us apart as the top choice for individuals and businesses looking for the best.
      </div> 
      <!-- card components -->
      <ServicesCard />
      <!-- slide button starts -->
      <div class="flex justify-center mt-5">
        <button type="button" class="w-8 h-3 rounded-full bg-indigo-400 mr-2" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-slate-300 mr-2" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-slate-300 mr-2" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-slate-300 mr-2" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-slate-300 mr-2" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-slate-300 mr-2" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      </div>
    </div>
  </main>

  <Popup />

  <Login />

  <Register />

  <!-- <Services2 /> -->

</template>

<!-- style font -->
<style>
.font-custom {
  font-family: 'Poppins', sans-serif;
}
</style>