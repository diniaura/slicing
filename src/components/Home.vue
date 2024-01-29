<script setup>
import profesional from '@/assets/icons/profesional.vue'
import innovative from '@/assets/icons/innovative.vue'
import collaborative from '@/assets/icons/collaborative.vue'
import arrowleft from '@/assets/icons/arrowleft.vue'
import arrowright from '@/assets/icons/arrowright.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import quote from '@/assets/icons/quote.vue'
import fivestar from '@/assets/icons/fivestar.vue'
import cursor from '@/assets/icons/cursor.vue'
import TestiCard from './TestiCard.vue'
import ServicesCard from './ServicesCard.vue'
import Footer from './Footer.vue'
import Services3 from './Services3.vue'
import Header from './Header.vue'
</script>

<template>
  <main class="text-white bg-white">
    <!-- Header -->
    <Header photo="src/assets/img/camera.png" caption="Picture Perfect Moments, Cinematic Memories" />

    <!-- About (Gadhing) -->
    <div class="h-screen mx-7 mb-16">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        About
      </div>
      <div class="flex w-96 mx-auto justify-center mt-7 text-indigo-950 text-4xl font-semibold">
        Get to Know About Us 
      </div>
      <div class="mt-7 px-14 justify-center text-center text-xl text-slate-800">
        Lenscape is photography and videography services company that focuses on profesionalism, innovation
        and collaboration. Lenscape has become a top choice for special events.
      </div>
      <div class="flex px-28 justify-center space-x-11 mt-10">
        <div class="flex flex-col w-80 p-8 border-2 border-blue-700 rounded-xl justify-center shadow-2xl">
          <profesional 
            class="relative mx-auto h-28 w-24" />
          <div class="flex flex-col mt-3">
            <p class="flex text-slate-800 justify-center font-semibold text-2xl">Professional</p>
            <p class="mt-4 text-center text-black">We prioritize professionalism in every aspect of the business, 
              committed to providing high quality service.</p>
          </div>
        </div>
        <div class="flex flex-col w-80 p-8 border-2 border-blue-700 rounded-xl justify-center shadow-2xl ">
          <innovative 
            class="relative mx-auto h-28 w-24" />
          <div class="flex flex-col mt-3">
            <p class="flex text-slate-800 justify-center font-semibold text-xl">Innovative</p>
            <p class="mt-2 text-center text-black">We use a creative and innovative approach in presenting 
              visuals, able to embrace new ideas to create unique works.</p>
          </div>
        </div>
        <div class="flex flex-col w-80 p-8 border-2 border-blue-700 rounded-xl justify-center shadow-2xl ">
          <collaborative 
            class="relative mx-auto h-28 w-24" />
          <div class="flex flex-col mt-3">
            <p class="flex text-slate-800 justify-center font-semibold text-xl">Collaborative</p>
            <p class="mt-2 text-center text-black">We collaborate actively by combining the client's vision 
              with our expertise to create extraordinary results.</p>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Services -->
    <div class="h-screen mx-7 my-4">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        Services
      </div>
      <div class="flex w-96 mx-auto justify-center mt-7 text-indigo-950 text-4xl font-semibold">
        Best Services for you
      </div> 
      <div class="max-w-h mx-auto mt-7 px-12 justify-center text-center text-xl text-slate-800">
        Lenscape can provide the best service. Our commitment to quality, innovation and customer satisfaction 
        sets us apart as the top choice for individuals and businesses looking for the best.
      </div> 
      <!-- card components -->
      <ServicesCard />
      <!-- Slides button -->
      <div class="flex justify-center mt-5">
        <button type="button" class="w-8 h-3 rounded-full bg-indigo-400 mr-2" aria-current="false" aria-label="Slide 1"
          data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-slate-300 mr-2" aria-current="false" aria-label="Slide 2"
          data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-slate-300 mr-2" aria-current="false" aria-label="Slide 3"
          data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-slate-300 mr-2" aria-current="false" aria-label="Slide 1"
          data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-slate-300 mr-2" aria-current="false" aria-label="Slide 2"
          data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-slate-300" aria-current="false" aria-label="Slide 3"
          data-carousel-slide-to="2"></button>
      </div>
    </div>

    <!-- Projects -->
    <div class="h-auto mx-7">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        Projects
      </div>
      <div class="flex w-96 mx-auto justify-center mt-7 text-indigo-950 text-4xl font-semibold">
        Last Completed Project
      </div> 
      <div class="max-w-h mx-auto mt-7 px-12 justify-center text-center text-xl text-slate-800">
        Lenscape has successfully completed several projects with clients. Of course, the entire project 
        achieved satisfactory results and received very good feedback from our clients.
      </div> 
      <div class="flex flex-row mt-7 justify-center mb-7">
        <p class="text-xl cursor-pointer text-black tracking-tight hover:font-medium hover:text-indigo-950 mr-0">All Project</p>
        <p class="text-xl cursor-pointer text-black tracking-tight hover:font-medium hover:text-indigo-950 mx-10">Photography</p>
        <p class="text-xl cursor-pointer text-black tracking-tight hover:font-medium hover:text-indigo-950 mr-0">Videography</p>
      </div>
      <!-- Photos -->
      <div class="grid grid-cols-3 grid-rows-2 gap-7 mx-24">
        <ProjectCard photo="src/assets/img/project1.jpg" caption="The Wedding of Axel and Emma at Galaxia Hall" />
        <ProjectCard photo="src/assets/img/project2.jpg" caption="Yearbook of Sanghai Senior High School at Lenscape Studio" />
        <ProjectCard photo="src/assets/img/project3.jpg" caption="Product Promotion at Burger Queen" />
        <ProjectCard photo="src/assets/img/project4.jpg" caption="Healthy Seminar at Relans University" />
        <ProjectCard photo="src/assets/img/project5.jpg" caption="Zona Festival 2023 at Zona Auditorium" />
        <ProjectCard photo="src/assets/img/project6.jpg" caption="Profile Video of Yungzhu Tech" />
      </div>
    </div>

    <!-- Review -->
    <div class="bg-indigo-400 h-screen mt-20">
      <div class="flex flex-row justify-between px-12 py-14">
        <div class="flex flex-col mr-9 ml-3">
          <h2 class="text-4xl font-semibold tracking-normal">What our Customers <br /> are saying</h2>
          <p class="text-2xl my-5 mr-20 text-justify font-light">Lenscape prioritizes quality and client satisfaction.</p>
        </div>
        <!-- pindah posisi -->
        <div class="absolute flex bg-slate-100 border-2 border-indigo-400 w-7/12 rounded-xl mx-3 px-3 mt-52">
          <div class="flex flex-col">
            <div class=" flex flex-row m-7">
              <img src="@/assets/img/person1.jpg" alt=""
                class="rounded-3xl w-1/6" />
              <div class="flex flex-col space-y-2 mt-4 ml-6">
                <h4 class="text-xl text-gray-900 font-semibold">Kenzie Axel</h4>
                <fivestar class=""/>
                <hr class="border-t-2 border-indigo-400 my-5 w-60"/>
              </div>
              <quote class="transform translate-x-48" />
            </div>
              <p class="text-gray-900 text-justify text-medium mx-8 mb-7">
                I had the pleasure of working with Lenscape for our recent event,
                and I cannot express how thrilled we are with the exceptional
                videography services provided. From start to finish,
                the experience was seamless and professional.
              </p>
          </div>
        </div>
        <img src="@/assets/img/review.jpg" class="my-2 flex flex-col items-center w-6/12 rounded-xl" alt="" />
      </div>
    </div>

    <!-- Arrows -->
    <div class="flex flex-row justify-end h-auto my-7 mx-7 space-x-6">
      <arrowleft />
      <arrowright />
    </div>

    <!-- Testimonials -->
    <div class="flex flex-row mx-5 justify-center">
      <TestiCard 
        name="Alex Shengelya" 
        comments="Working with Igor was a pleasure! He's a professional photographer with an amazing skills and expensive equipment." 
        photo="src/assets/img/person2.jpg" />
      <TestiCard 
        name="Mickey Malka"
        comments="Great photographer! Very professional and photos came out amazing! Will definitely use again!"
        photo="src/assets/img/person3.jpg" />
    </div>
    
    <div class="h-auto mx-7 mt-16">
      <!-- Contact -->
      <div class="rounded-xl py-9 border-2 border-indigo-400 bg-gradient-to-r from-indigo-900 via-indigo-500 to-gray-100">
        <div class="flex flex-row mx-10 justify-between items-center">
          <div class="flex flex-col">
            <h2 class="text-3xl font-semibold">Do you have any questions?</h2>
            <p class="text-xl font-light leading-10">Put your email address and get started</p>
          </div>
          <!-- input -->
          <div class="w-6/12 h-14 rounded-lg border-2 border-indigo-950 bg-transparent flex flex-row justify-between items-center px-2 ">
            <p class="text-normal text-black">Enter your email address</p>
            <div class="bg-transparent text-indigo-950 font-normal px-2">
              <div class="flex justify-center items-center px-1 border bg-indigo-400 rounded-md w-8 h-8">
                <cursor class="w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />

  </main>
</template>
