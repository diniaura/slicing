<script setup>
import cam from '@/assets/icon/cam.vue'
import lamp from '@/assets/icon/lamp.vue'
import hp from '@/assets/icon/hp.vue'
import pnh from '@/assets/icon/pnh.vue'
import pnh2 from '@/assets/icon/pnh2.vue'
</script>

<template>


  <!-- content -->

  <div class="flex flex-row max-w-h mx-10 h-56 mt-3 items-center justify-center md:h-72 md:mt-10 lg:h-96 lg:mt-14 lg:justify-between">
    <div class="flex flex-col text-indigo-950">
      <p class="w-48 text-md font-semibold md:text-2xl md:w-40 lg:w-64 lg:text-4xl">Capture Your Love Story</p>
      <p class="w-48 text-xs text-justify mt-2 md:text-sm md:w-56 lg:text-2xl lg:w-auto">Welcome to a world where love is immortalized in every frame. Our wedding photography services are crafted to turn your special day into a timeless visual narrative. We're here to capture the essence of your love story</p>
      <div class="flex w-36 justify-center items-center relative md:w-44 lg:w-52">
        <div class="flex w-32 bg-indigo-400 hover:bg-indigo-500 text-white justify-center rounded-full p-1 md:w-36 md:p-2 md:mt-1 lg:p-3 lg:mt-2 lg:w-44 lg:text-lg">
          Booking Now    
        </div>
        <div class="absolute bg-white rounded-full border border-indigo-950 right-0 md:right-2 lg:right-1 lg:top-5">
          <pnh2 class="-rotate-45 h-4 w-4 p-0.5 md:h-5 md:w-5 lg:w-7 lg:h-7 lg:p-1"/>
        </div>
      </div>
    </div>
    <img src="@/assets/img/weeding.jpeg" class="h-40 w-64 ml-5 rounded-xl md:h-64 md:w-96 md:ml-10 lg:w-7/12 lg:h-96 ">
  </div>
  <!-- <div class="flex flex-row max-w-h mx-7 mt-10">
    <div class="flex flex-col ">
      <p class="lg:text-4xl md:text-2xl lg:mt-7 md:mt-1 w-48 text-indigo-950 font-medium text-md">Capture Your Love Story</p>
      <p class="lg:max-w-screen-lg md:max-w-screen-md lg:mt-5 md:mt-2 lg:text-2xl md:text-md text-justify text-xs w-44 mt-2 ">Welcome to a world where love is immortalized in every
         frame. Our wedding photography services are crafted to turn your special day into a 
         timeless visual narrative. We're here to capture the essence of your love story
      </p>
      <div class="flex lg:w-48 md:w-32 w-32 justify-center items-center lg:mt-3 md:mt-0 mt-1 relative">
        <div class="flex lg:w-40 md:w-28 lg:mt-6 md:mt-3 lg:p-3 md:p-2 justify-center bg-indigo-400 hover:bg-indigo-600 lg:text-lg md:text-xs text-xs w-24 p-1 font-medium text-white rounded-full cursor-pointer">
          Booking Now    
        </div>
        <div class="flex absolute items-center lg:w-7 lg:h-7 md:w-4 md:h-4 bg-white lg:bottom-3 lg:right-1 border md:bottom-2 md:right-0 w-4 h-4 right-2 border-indigo-950 rounded-full">
          <pnh2 class="-rotate-45 h-5"/>
        </div>
      </div>
    </div>
    
      <img src="@/assets/img/weeding.jpeg" class="lg:max-w-2xl md:w-12/12 w-64 ml-">
  
  </div> -->
  

  <!-- why -->
  <div class="flex mx-auto flex-col items-center mt-24 text-indigo-950">
    <p class="text-xl font-semibold md:text-2xl lg:text-4xl">Why Choose Us</p>
    <p class="text-lg md:text-xl lg:text-2xl mt-2">Why Choose Lenscape for Your Wedding Photography?</p>
  </div>

  <div class="flex flex-col max-w-h grid-cols-4 grid-flow-col gap-5 text-indigo-950 mt-10 items-center lg:flex-row lg:justify-center">
    <div class="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-3 lg:space-x-5">
      <div class="flex col-span-2 bg-gray-200 rounded-xl shadow-xl p-3 w-96 md:w-80 ">
        <div class="flex flex-col items-center ">
          <div class="flex flex-row items-center">
            <lamp class="mr-7"/>
            <p class="text-lg font-medium">Exceptional Expertise</p>
          </div>
          <p class="text-sm text-justify mt-2">Our team brings  years of experience and expertise to   ensure every  moment is beautifully captured, reflecting the     uniqueness of your love</p>
        </div>
      </div>
      <div class="flex col-span-2 bg-gray-200 rounded-xl shadow-xl p-3 w-96 md:w-80 lg:h-44">
        <div class="flex flex-col items-center">
          <div class="flex flex-row items-center">
            <hp class="mr-7"/>
            <p class="text-lg font-medium">Creative Approach</p>
          </div>
          <p class="text-sm text-justify mt-2">We don't just take   photos; we craft visual stories. Our creative approach  adds an artistic touch to your wedding album, making it  truly one-of-a-kind</p>
        </div>
      </div>
    </div>
    <div class="flex col-span-2 bg-gray-200 rounded-xl shadow-xl p-3 w-96 lg:w-80 lg:h-44">
      <div class="flex flex-col items-center">
        <div class="flex flex-row items-center">
          <cam class="mr-7"/>
          <p class="text-lg font-medium">Personalized Service</p>
        </div>
        <p class="text-sm text-justify mt-2">Your wedding day is unique, and so is our service. We work closely with you to understand your vision and deliver personalized photography that exceeds expectations</p>
      </div>
    </div>
  </div>
  <!-- <div class="flex max-w-screen-h mt-16 mx-10 justify-center space-x-5 ">
    <div class="lg:w-80 md:w-48 lg:p-4 md:p-3 p-3 rounded-xl shadow-xl bg-gray-200">
      <div class="flex flex-row text-indigo-950 items-center justify-center">
        <cam class="lg:mr-10 md:mr-7 rounded-full lg:w-auto md:w-12 w-7 mr-5" />
        <p class="lg:text-xl md:text-sm text-xs  font-medium">Exceptional Expertise</p>
      </div>
      <p class="lg:text-sm md:text-xs lg:mt-4 md:mt-2 text-justify">Our team brings years of experience and expertise to ensure every moment is beautifully captured, reflecting the uniqueness of your love
      </p>
    </div>

    <div class="lg:w-80 sm:w-48 lg:p-4 md:p-3 rounded-xl shadow-xl bg-gray-200">
      <div class="flex flex-row text-indigo-950 items-center justify-center">
        <lamp class="lg:mr-10 md:mr-7 rounded-full" />
        <p class="lg:text-xl md:text-sm font-medium">Creative Approach </p>
      </div>
      <p class="lg:text-sm md:text-xs lg:mt-4 md:mt-2 text-justify">We don't just take photos; we craft visual stories. Our creative approach adds an artistic touch to your wedding album, making it truly one-of-a-kind
      </p>
    </div>

    <div class="lg:w-80 md:w-48 lg:p-4 md:p-3 rounded-xl shadow-xl bg-gray-200">
      <div class="flex flex-row text-indigo-950 items-center justify-center">
        <hp class="lg:mr-10 md:mr-7 rounded-full" />
        <p class="lg:text-xl md:text-sm font-medium">Personalized Service </p>
      </div>
      <p class="lg:text-sm md:text-xs lg:mt-4 md:mt-2 text-justify">Your wedding day is unique, and so is our service. We work closely with you to understand your vision and deliver personalized photography that exceeds expectations
      </p>
    </div>
  </div>  -->


  <!-- test -->
  <div class="flex mx-auto flex-col items-center mt-24 text-indigo-950">
    <p class="text-xl font-semibold md:text-2xl lg:text-4xl">Client Testimonials</p>
    <p class="text-lg md:text-xl lg:text-2xl">Hear What Our Happy Couples Have to Say</p>
  </div>

  <div class="flex flex-col mt-5">
    <div class="flex flex-row absolute space-x-1 right-10 md:right-14 lg:right-36">
      <pnh class="w-12 h-12-300"/>
      <pnh class="w-12 h-12 bg-indigo-950 rounded-xl rotate-180"/>
    </div>
    <div class="flex flex-col space-y-4 mt-20 items-center justify-center md:flex-row md:space-y-0 md:space-x-3 lg:space-x-5">
      <div class="bg-gray-200 w-96 h-44 rounded-xl border-2 border-gray-300 md:w-80 md:px-44 lg:w-96 lg:px-60 lg:h-56">
      </div>
      <div class="bg-gray-200 w-96 h-44 rounded-xl shadow-xl border border-gray-300 md:w-80 md:px-44 lg:w-96 lg:px-60 lg:h-56">
      </div>
    </div>

  </div>


  <!-- <div class="flex flex-col lg:mt-32 md:mt-24 mt-96">
    <p class="w-70 mx-auto lg:text-4xl md:text-xl font-semibold">
      Client Testimonials
    </p>
    <p class="mx-auto mt-6 lg:text-2xl md:text-lg font-light">
      Hear What Our Happy Couples Have to Say
    </p>
  </div>
  <div class="flex flex-row justify-center max-w-h mx-10 p-20 relative">
    <div class="flex w-24 absolute lg:top-0 md:top-5 lg:right-24 md:right-0">
        <pnh class="cursor-pointer md:w-10 md:h-10" />
        <pnh class="rotate-180 cursor-pointer lg:w-12 md:w-10 lg:h-12 md:h-10 bg-indigo-950 rounded-xl"/>
    </div>
    <div class="flex flex-row space-x-4">
      <div class="lg:px-64 lg:h-60 md:px-32 md:h-32 bg-gray-200 rounded-xl border border-gray-300 ">
      </div>
      <div class="lg:px-64 lg:h-60 md:px-32 md:h-32 bg-gray-200 rounded-xl border border-gray-300 shadow-2xl ">
     </div>
    </div>
  </div> -->


</template>
  