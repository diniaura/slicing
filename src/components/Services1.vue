<script setup>
import Navbar from './Navbar.vue';
import arrowup from '@/assets/icons/arrowup.vue';
import arrowupb from '@/assets/icons/arrowupb.vue';
import checkfill from '@/assets/icons/checkfill.vue';
import cross from '@/assets/icons/cross.vue';
import Footer from './Footer.vue';
</script>

<template>
  <main class="bg-white text-white overflow-hidden">
    <!-- Header -->
    <div class="mx-7 lg:h-auto">
      <Navbar />
      <div class="relative mt-24 md:mt-24 lg:mt-28 md:py-0 flex flex-row rounded-2xl lg:py-12 px-10 justify-between items-center bg-gradient-to-b from-indigo-950 via-indigo-800 to-indigo-400">
        <div class="flex flex-col py-24 text-center md:text-center lg:text-left">
          <!-- Teks: Kiri -->
          <p class="font-semibold text-4xl md:text-5xl lg:text-5xl tracking-normal justify-center py-2 sm:py-0 sm:justify-start">Wedding Photoshoot</p>
          <p class="font-light text-2xl md:text-4xl lg:text-4xl tracking-normal py-5">- Unveil Your Story with Lenscape!</p>
          <!-- Gambar: Kanan -->
        </div>
        <div class="absolute right-10 mt-40">
          <img alt="header image" class="object-contain h-full w-full hidden lg:block drop-shadow-2xl" src="@/assets/img/wedding.png" />
        </div>
      </div>
    </div>

    <!-- More About -->
    <div class="mx-10 lg:h-auto my-20">
      <div class="flex flex-col place-items-center md:flex-row lg:flex-row space-y-6 md:space-x-6 lg:px-6 ">
        <!-- Row Reverse -->
        <div class="space-y-6 flex flex-col md:flex-row-reverse lg:flex-row-reverse place-items-center">
          <h2 class="text-gray-800 text-xl font-bold md:hidden text-center">Capture the Magic of Your Love Story</h2>
          <img src="@/assets/img/capture.jpg" alt="picture" class="rounded-xl w-9/12 md:w-full lg:w-9/12 lg:-translate-x-20">
        </div>
        <!-- Md Lg placing -->
        <div class="hidden md:block lg:block flex-col space-y-4 w-11/12 lg:-translate-x-20">
          <h2 class="text-gray-800 text-xl font-bold">Capture the Magic of Your Love Story</h2>
          <p class="text-gray-800 text-justify">We specialize in crafting enchanting visual narratives that tell the 
            unique story of your wedding day. Our team of skilled photographers is dedicated to capturing 
            the genuine emotions, the intricate details, and the pure joy that defines your love. Trust 
            us to transform your wedding moments into timeless, breathtaking memories that will last a lifetime.
          </p>
          <button type="button" class="text-blue-500 bg-white font-semibold rounded-full text-sm px-5 py-2 text-center flex border border-blue-400 relative">More About
          <arrowup class="bg-blue-400 rounded-full absolute right-[-11px] lg:inline-flex" /></button>
        </div>
        <!-- Md placing end -->
        <p class="text-gray-800 text-center md:hidden">We specialize in crafting enchanting visual narratives that tell the 
          unique story of your wedding day. Our team of skilled photographers is dedicated to capturing 
          the genuine emotions, the intricate details, and the pure joy that defines your love. Trust 
          us to transform your wedding moments into timeless, breathtaking memories that will last a lifetime.
        </p>
        <button type="button" class="md:hidden lg:hidden text-blue-500 bg-white font-semibold rounded-full text-sm px-5 py-2 text-center flex border border-blue-400 relative">More About
        <arrowup class="bg-blue-400 rounded-full absolute right-[-11px] lg:inline-flex" /></button>
      </div>
    </div>

    <!-- Services -->
    <div class="h-auto mx-7 my-4">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        Services
      </div>
      <div class="flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-3xl lg:text-3xl font-semibold">
        Services We're Offering
      </div>
      <div class="flex flex-col space-y-7 md:space-y-0 md:space-x-5 md:flex-row lg:space-x-10 lg:flex-row mt-9 place-items-center lg:mx-20">
        <div class="flex flex-col space-y-3 place-items-center border-2 border-indigo-950 text-indigo-950 p-4 rounded-xl w-8/12">
          <img src="@/assets/img/services1(1).jpg" alt="" class="rounded-xl">
          <p class="text-xl font-semibold">Pre Wedding</p>
        </div>
        <div class="flex flex-col space-y-3 place-items-center border-2 border-indigo-950 text-indigo-950 p-4 rounded-xl w-8/12">
          <img src="@/assets/img/services1(2).jpg" alt="" class="rounded-xl">
          <p class="text-xl font-semibold">Wedding Day</p>
        </div>
        <div class="flex flex-col space-y-3 place-items-center border-2 border-indigo-950 text-indigo-950 p-4 rounded-xl w-8/12">
          <img src="@/assets/img/services1(3).jpg" alt="" class="rounded-xl">
          <p class="text-xl font-semibold">Post Wedding</p>
        </div>
      </div>
    </div>

    <!-- Portofolio -->
    <div class="h-auto mx-7 my-16">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        Portofolio
      </div>
      <div class="flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-3xl lg:text-3xl font-semibold">
        Our Amazing Work
      </div>
      <div class="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 my-8 mx-2 lg:mx-12">
        <img src="@/assets/img/porto1(1).jpg" alt="" class="rounded-xl">
        <img src="@/assets/img/porto1(2).jpg" alt="" class="rounded-xl row-span-2">
        <img src="@/assets/img/porto1(3).jpg" alt="" class="rounded-xl">
        <img src="@/assets/img/porto1(4).jpg" alt="" class="rounded-xl">
        <img src="@/assets/img/porto1(5).jpg" alt="" class="rounded-xl">
        <img src="@/assets/img/porto1(6).jpg" alt="" class="rounded-xl col-span-2">
      </div>
    </div>

    <!-- Packages -->
    <div class="h-auto md:h-screen lg:h-screen my-16 relative md:mb-0 lg:mb-0 bg-indigo-950 md:bg-transparent lg:bg-transparent pb-16">
      <div class="flex mx-auto text-center justify-center py-10 text-white text-3xl md:text-3xl lg:text-3xl font-semibold bg-indigo-950 md:h-96 lg:h-96 z-0">
        Packages & Prices
      </div>
      <div class="relative lg:absolute md:absolute md:top-28 lg:top-28 flex justify-center flex-col md:flex-row lg:flex-row space-y-6 md:space-y-0 md:space-x-4 lg:space-x-0 lg:justify-evenly items-center w-full md:px-7">
        <div class="w-7/12 lg:w-80 bg-white text-indigo-950 border-2 border-indigo-950 flex flex-col space-y-6 p-5 rounded-lg">
          <h2 class="text-2xl font-bold my-3 text-center">Package 1</h2>
          <div class="flex flex-col items-left space-y-2">
            <div class="flex space-x-2"><checkfill /><p>4 hours of photoshoot</p></div>
            <div class="flex space-x-2"><checkfill /><p>Photos of the ceremony</p></div>
            <div class="flex space-x-2"><checkfill /><p>Group photos</p></div>
            <div class="flex space-x-2"><checkfill /><p>Couple shoot</p></div>
            <div class="flex space-x-2"><cross /><p>Photos of the preparation</p></div>
            <div class="flex space-x-2"><cross /><p>Photos of the dinner</p></div>
            <div class="flex space-x-2"><cross /><p>Unlimited photos</p></div>
            <div class="flex space-x-2"><checkfill /><p>Assistance in posing</p></div>
            <div class="flex space-x-2"><checkfill /><p>Soft Copy in Flash Drive</p></div>
            <div class="flex space-x-2"><checkfill /><p>2 best printed photos</p></div>
          </div>
          <button type="button" class="self-center w-fit text-white bg-indigo-400 font-semibold rounded-full text-sm px-5 py-2 text-center flex border border-blue-400 relative">Order Now
          <arrowupb class="border border-indigo-400 text-indigo-400 bg-white rounded-full absolute right-[-11px] lg:inline-flex" /></button>
        </div>
        <div class="w-7/12 lg:w-80 bg-white text-indigo-950 border-2 border-indigo-950 flex flex-col space-y-6 p-5 rounded-lg">
          <h2 class="text-2xl font-bold my-3 text-center">Package 2</h2>
          <div class="flex flex-col items-left space-y-2">
            <div class="flex space-x-2"><checkfill /><p>4 hours of photoshoot</p></div>
            <div class="flex space-x-2"><checkfill /><p>Photos of the ceremony</p></div>
            <div class="flex space-x-2"><checkfill /><p>Group photos</p></div>
            <div class="flex space-x-2"><checkfill /><p>Couple shoot</p></div>
            <div class="flex space-x-2"><checkfill /><p>Photos of the preparation</p></div>
            <div class="flex space-x-2"><cross /><p>Photos of the dinner</p></div>
            <div class="flex space-x-2"><cross /><p>Unlimited photos</p></div>
            <div class="flex space-x-2"><checkfill /><p>Assistance in posing</p></div>
            <div class="flex space-x-2"><checkfill /><p>Soft Copy in Flash Drive</p></div>
            <div class="flex space-x-2"><checkfill /><p>5 best printed photos</p></div>
          </div>
          <button type="button" class="self-center w-fit text-white bg-indigo-400 font-semibold rounded-full text-sm px-5 py-2 text-center flex border border-blue-400 relative">Order Now
          <arrowupb class="border border-indigo-400 text-indigo-400 bg-white rounded-full absolute right-[-11px] lg:inline-flex" /></button>
        </div>
        <div class="w-7/12 lg:w-80 bg-white text-indigo-950 border-2 border-indigo-950 flex flex-col space-y-6 p-5 rounded-lg">
          <h2 class="text-2xl font-bold my-3 text-center">Package 3</h2>
          <div class="flex flex-col items-left space-y-2">
            <div class="flex space-x-2"><checkfill /><p>6 hours of photoshoot</p></div>
            <div class="flex space-x-2"><checkfill /><p>Photos of the ceremony</p></div>
            <div class="flex space-x-2"><checkfill /><p>Group photos</p></div>
            <div class="flex space-x-2"><checkfill /><p>Couple shoot</p></div>
            <div class="flex space-x-2"><checkfill /><p>Photos of the preparation</p></div>
            <div class="flex space-x-2"><checkfill /><p>Photos of the dinner</p></div>
            <div class="flex space-x-2"><checkfill /><p>Unlimited photos</p></div>
            <div class="flex space-x-2"><checkfill /><p>Assistance in posing</p></div>
            <div class="flex space-x-2"><checkfill /><p>Soft Copy in Flash Drive</p></div>
            <div class="flex space-x-2"><checkfill /><p>10 best printed photos</p></div>
          </div>
          <button type="button" class="self-center w-fit text-white bg-indigo-400 font-semibold rounded-full text-sm px-5 py-2 text-center flex border border-blue-400 relative">Order Now
          <arrowupb class="border border-indigo-400 text-indigo-400 bg-white rounded-full absolute right-[-11px] lg:inline-flex" /></button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />

  </main>
</template>