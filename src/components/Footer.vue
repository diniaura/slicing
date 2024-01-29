<template>
    <div class="max-w-h max-h-fit mx-7 mt-20 bg-indigo-950 rounded-t-2xl text-white">
      <div class="flex flex-row justify-center space-x-10 px-24 py-16">
        <div class="w-80 h-64 ">
          <div class="flex flex-col mt-5">
            <div class="flex flex-row items-center ">
              <img src="@/assets/img/logo.png" alt="" class="w-1/12" />
              <p class="text-xl font-medium ml-5">
                Lenscape
              </p>  
            </div>
            <p class="text-justify mt-5 text-lg font-light">Lenscape is a photography and videography services company that focuses on professionalism, 
              innovation and collaboration. Lenscape has become a top choice for special events.
            </p>
          </div>
        </div>

        <div class="flex flex-col w-44 h-64 items-center ">
          <p class="font-medium text-medium text-xl mt-5 mr-10">Pages</p>
          <div class="text-lg font-light space-y-2 mt-5">
            <div class="cursor-pointer">Home</div>
            <div class="cursor-pointer">About</div>
            <div class="cursor-pointer">Services</div>
            <div class="cursor-pointer">Projects</div>
            <div class="cursor-pointer">Testimonials</div>
            <div class="cursor-pointer">Contact</div>
          </div>
        </div>

        <div class="flex flex-col w-52 h-64 items-center ">
          <p class="mt-5 font-medium text-xl mr-24">Support</p>
          <div class="w-40 text-lg font-light space-y-2 mt-5">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>FAQ</p>
          </div>
        </div>

        <div class="w-80 h-64">
            <p class="text-xl mt-5">
              Our experts are available 24/7:
            </p>
            <div class="flex justify-items-center py-4">
              <telepon class="w-6 h-7 mr-4"/><p class="text-lg">0332-123-456</p>
            </div>
            <div class="flex justify-items-center">
              <email class="w-6 h-7 mr-4" /><p class="text-lg">lenscape@gmail.com</p>
            </div>
            <p class="text-xl font-light mt-10">Follow Us:</p>
            <div class="flex flex-row space-x-4 mt-4">
              <facebook />
              <instagram />
              <div class="flex justify-center items-center rounded-md space-x-4">
                <twitter class="w-9 h-9" />
                <youtube class="w-9 h-9 border rounded-md border-white" />
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
import telepon from '@/assets/icons/telepon.vue'
import email from '@/assets/icons/email.vue'
import facebook from '@/assets/icons/facebook.vue'
import instagram from '@/assets/icons/instagram.vue'
import twitter from '@/assets/icons/twitter.vue'
import youtube from '@/assets/icons/youtube.vue'
</script>