<!-- <script setup>
import yt from '@/assets/icon/yt.vue'
import ig from '@/assets/icon/ig.vue'
import facebook from '@/assets/icon/facebook.vue'
import twit from '@/assets/icon/twit.vue'
import logo from '@/assets/icon/logo.vue'
import mail from '@/assets/icon/mail.vue'
import tlp from '@/assets/icon/tlp.vue'
</script>

<template>
  <div class="max-w-h max-h-fit  mx-10 lg:mt-24 md:mt-12 bg-indigo-950 rounded-t-2xl text-white">
    <div class="flex flex-row justify-center space-x-10 lg:px-24 md:px-16 lg:pt-20 md:pt-12 md:pb-10">
      <div class="lg:w-80 md:w-72">
        <div class="flex flex-col">
          <div class="flex flex-row items-center ">
            <logo class="lg:w-9 lg:h-12 md:w-6 md:h-9" />
            <p class="lg:text-xl md:text-lg font-medium ml-5">
              Lenscape
            </p>  
          </div>
          <p class="text-justify mt-5 lg:text-lg md:text-md font-light">Lenscape is a photography and videography services company that focuses on professionalism, innovation and collaboration. Lenscape has become a top choice for special events.
          </p>
        </div>
      </div>

      <div class="flex flex-col lg:w-44 md:w-36 items-center">
        <p class="text-medium lg:text-xl md:text-lg lg:mt-5 md:mt-2 mr-12">Pages</p>
        <div class="lg:text-lg md:text-md font-light space-y-2 mt-5">
          <div class="cursor-pointer">Home</div>
          <div class="cursor-pointer">About</div>
          <div class="cursor-pointer">Services</div>
          <div class="cursor-pointer">Projects</div>
          <div class="cursor-pointer">Testimonials</div>
          <div class="cursor-pointer">Contact</div>
        </div>
      </div>

      <div class="flex flex-col w-52 items-center ">
        <p class="lg:mt-5 md:mt-2 font-medium text-xl mr-24">Support</p>
        <div class="w-40 lg:text-lg md:text-md font-light space-y-2 mt-5">
          <p class="cursor-pointer">Privacy Policy</p>
          <p class="cursor-pointer">Terms & Conditions</p>
          <p class="cursor-pointer">FAQ</p>
        </div>
      </div>

      <div class="w-80">
          <p class="lg:text-xl md:text-lg font-medium lg:mt-5 md:mt-2">
            Our experts are available 24/7:
          </p>
          <div class="flex justify-items-center py-4">
            <tlp class="lg:w-6 md:w-5 lg:h-7 md:h-6 mr-4" />
            <p class="lg:text-lg md:text-md cursor-pointer">0332-123-456</p>
          </div>
          <div class="flex justify-items-center">
            <mail class="lg:w-7 md:w-6 lg:h-7 md:h-6 mr-4" />
            <p class="lg:text-lg md:text-md cursor-pointer">lenscape@gmail.com</p>
          </div>
          <p class="lg:text-xl md:text-lg font-light lg:mt-10 md:mt-7">Follow Us:</p>
          <div class="flex flex-row space-x-4 mt-4">
            <facebook class="border rounded-md lg:h-10 md:h-9 lg:w-10 md:w-9 cursor-pointer " />
            <ig class="border rounded-md cursor-pointer lg:h-10 md:h-9 lg:w-10 md:w-9" />
            <div class="flex justify-center items-center border lg:w-10 md:w-9 md:h-9 rounded-md">
              <twit class="h-5 w-5 cursor-pointer " />
            </div>
            <yt class="border rounded-md cursor-pointer lg:h-10 md:h-9 lg:w-10 md:w-9" />
          </div>
      </div>
    </div>
    <div class="flex justify-center items-center lg:max-w-5xl md:max-w-3xl mx-auto p-2 border-t-2 ">
      <p class="lg:text-2xl md:text-xl font-thin mb-3">©2023 Lenscape. All Rights Reserved.</p>
    </div>
  </div>
</template> -->

<template>
  <div class="bg-indigo-950 text-white lg:mx-7 lg:rounded-t-xl mt-20">
    <div class="grid gap-7 grid-cols-1 md:grid-cols-2 lg:flex px-12 py-10 lg:justify-center lg:space-x-12 lg:place-items-start">
      <div class="grid text-center place-items-center space-y-2 md:space-y-0 lg:items-start lg:place-items-start lg:w-80 lg:space-y-5">
        <div class="flex space-x-2">
          <logo class="w-6 ml-5"/>
          <p class="text-xl font-semibold">Lenscape</p>
        </div>
        <p class="font-light mx-5 lg:text-justify">Lenscape is a photography and videography services 
          company that focuses on professionalism, innovation and 
          collaboration. Lenscape has become a top choice for special events.
        </p>
      </div>
      <div class="grid text-center space-y-2 lg:text-left lg:space-y-5">
        <p class="text-xl font-semibold">Pages</p>
        <ul class="text-xl">
          <li class="font-light text-lg">Home</li>
          <li class="font-light text-lg">About</li>
          <li class="font-light text-lg">Services</li>
          <li class="font-light text-lg">Projects</li>
          <li class="font-light text-lg">Testimonials</li>
          <li class="font-light text-lg">Contact</li>
        </ul>
      </div>
      <div class="grid text-center space-y-2 lg:text-left lg:space-y-5">
        <p class="text-xl font-semibold">Support</p>
        <ul class="text-xl">
          <li class="font-light text-lg">Privacy Policy</li>
          <li class="font-light text-lg">Terms & Conditions</li>
          <li class="font-light text-lg">FAQ</li>
        </ul>
      </div>
      <div class="lg:flex-col lg:w-80 lg:space-y-8">
        <div class="grid text-center space-y-2 md:space-y-0  lg:space-y-5 lg:items-start lg:place-items-start">
          <p class="text-xl">Our experts are available 24/7:</p>
          <ul class="text-xl">
            <div class="flex space-x-2 items-center justify-center lg:justify-start">
              <tlp class="w-4"/><p class="text-lg">0332-123-456</p>
            </div>
            <div class="flex space-x-2 items-center justify-center lg:justify-start">
              <mail class="w-4"/><p class="text-lg">lenscape@gmail.com</p>
            </div>
          </ul>
        </div>
        <div class="grid text-center space-y-3 md:col-span-2 lg:items-start lg:place-items-start">
          <p class="text-xl">Follow Us:</p>
          <div class="flex flex-row space-x-3 justify-center">
            <facebook />
            <ig />
            <twit />
            <yt class="border rounded-md w-9 h-9"/>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center max-w-5xl mx-auto p-2 border-t-2 ">
          <p class="text-xl font-thin mb-3">©2023 Lenscape. All Rights Reserved.</p>
        </div>
  </div>
  </template>
  
  <script setup>
  import tlp from '@/assets/icon/tlp.vue'
  import mail from '@/assets/icon/mail.vue'
  import facebook from '@/assets/icon/facebook.vue'
  import ig from '@/assets/icon/ig.vue'
  import twit from '@/assets/icon/twit.vue'
  import yt from '@/assets/icon/yt.vue'
  import logo from '@/assets/icon/logo.vue'
  </script>