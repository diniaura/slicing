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
import Services2 from './Services2.vue'
import Services1 from './Services1.vue'
</script>

<template>
  <main class="text-white bg-white overflow-hidden">
    <!-- Header -->
    <Header photo="src/assets/img/camera.png" caption="Picture Perfect Moments, Cinematic Memories" />

    <!-- About -->
    <div class="md:h-auto mt-10 md:mt-10 lg:mt-16 h-auto mx-7 mb-16">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        About
      </div>
      <div class="flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-3xl lg:text-3xl font-semibold">
        Get to Know About Us 
      </div>
      <div class="mt-7 lg:px-14 justify-center text-center text-base md:text-lg lg:text-xl text-slate-800">
        Lenscape is photography and videography services company that focuses on profesionalism, innovation
        and collaboration. Lenscape has become a top choice for special events.
      </div>
      <div class="grid md:grid-cols-2 lg:flex place-items-center gap-y-10 mt-10 lg:mx-16 p-9 justify-center">
        <div class="flex flex-col w-auto p-8 border-2 border-blue-700 rounded-xl justify-center shadow-2xl h-80 mx-7">
          <profesional 
            class="relative mx-auto h-28 w-24" />
          <div class="flex flex-col mt-3">
            <p class="flex text-slate-800 justify-center font-semibold text-xl">Professional</p>
            <p class="mt-2 text-center text-black">We prioritize professionalism in every aspect of the business, 
              committed to providing high quality service.</p>
          </div>
        </div>
        <div class="flex flex-col w-auto p-8 border-2 border-blue-700 rounded-xl justify-center shadow-2xl h-80 mx-7">
          <innovative 
            class="relative mx-auto h-28 w-24" />
          <div class="flex flex-col mt-3">
            <p class="flex text-slate-800 justify-center font-semibold text-xl">Innovative</p>
            <p class="mt-2 text-center text-black">We use a creative and innovative approach in presenting 
              visuals, able to embrace new ideas to create unique works.</p>
          </div>
        </div>
        <div class="flex flex-col w-auto p-8 border-2 border-blue-700 rounded-xl justify-center shadow-2xl h-80 mx-7 md:col-span-2">
          <collaborative 
            class="relative mx-auto h-28 w-24" />
          <div class="flex flex-col mt-3">
            <p class="flex text-slate-800 justify-center font-semibold text-xl">Collaborative</p>
            <p class="mt-2 text-center text-black md:px-10 lg:px-2">We collaborate actively by combining the client's vision 
              with our expertise to create extraordinary results.</p>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Services -->
    <div class="h-auto md:h-auto lg:h-screen mx-7 my-4">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        Services
      </div>
      <div class="flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-3xl lg:text-3xl font-semibold">
        Best Services for You
      </div> 
      <div class="mt-7 lg:px-14 justify-center text-center text-base md:text-lg lg:text-xl text-slate-800">
        Lenscape can provide the best service. Our commitment to quality, innovation and customer satisfaction 
        sets us apart as the top choice for individuals and businesses looking for the best.
      </div> 
      <!-- card components -->
        <ServicesCard />
      <!-- Slides button -->
      
    </div>

    <!-- Projects -->
    <div class="h-auto mx-7 mt-10 md:mt-10 lg:mt-0">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        Projects
      </div>
      <div class="flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-3xl lg:text-3xl font-semibold">
        Last Completed Project
      </div> 
      <div class="mt-7 lg:px-14 justify-center text-center text-base md:text-lg lg:text-xl text-slate-800">
        Lenscape has successfully completed several projects with clients. Of course, the entire project 
        achieved satisfactory results and received very good feedback from our clients.
      </div> 
      <div class="flex flex-col md:flex-row lg:flex-row mt-7 justify-center items-center mb-7 text-black text-lg font-semibold">
        <p class="cursor-pointer tracking-tight hover:text-indigo-950">All Project</p>
        <p class="cursor-pointer tracking-tight hover:text-indigo-950">Photography</p>
        <p class="cursor-pointer tracking-tight hover:text-indigo-950">Videography</p>
      </div>
      <!-- Photos -->
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mx-8 md:mx-8 lg:mx-24">
        <ProjectCard photo="src/assets/img/project1.jpg" caption="The Wedding of Axel and Emma at Galaxia Hall" />
        <ProjectCard photo="src/assets/img/project2.jpg" caption="Yearbook of Sanghai Senior High School at Lenscape Studio" />
        <ProjectCard photo="src/assets/img/project3.jpg" caption="Product Promotion at Burger Queen" />
        <ProjectCard photo="src/assets/img/project4.jpg" caption="Healthy Seminar at Relans University" />
        <ProjectCard photo="src/assets/img/project5.jpg" caption="Zona Festival 2023 at Zona Auditorium" />
        <ProjectCard photo="src/assets/img/project6.jpg" caption="Profile Video of Yungzhu Tech" />
      </div>
    </div>

    <!-- Review -->
    <div class="relative mt-20 bg-indigo-400 lg:h-screen">
      <div class="relative flex flex-col text-white p-7 lg:m-10 lg:py-14">
        <h2 class="text-3xl md:text-3xl lg:text-3xl lg:mt-7 font-semibold">What our Customers are saying</h2>
        <p class="text-xl my-5 font-light">Lenscape prioritizes quality and client satisfaction.</p>
        <div class="lg:mt-14 relative z-10 lg:w-7/12 bg-slate-100 p-6 lg:p-8 bottom-0 rounded-lg border-2 border-indigo-400 flex flex-col space-y-4">
          <div class="relative flex flex-row items-center space-x-3">
            <img src="@/assets/img/person1.jpg" alt="" class="rounded-2xl w-1/5 md:w-1/6 lg:w-1/6">
            <div class="flex flex-col space-y-1 lg:space-y-2">
              <h4 class="text-xl text-gray-900 font-semibold">Kenzie Axel</h4>
              <fivestar />
              <hr class="border-indigo-400 border-t-2">
            </div>
            <quote class="absolute end-0 h-9"/>
          </div>
          <p class="text-gray-900 text-justify">
            I had the pleasure of working with Lenscape for our recent event,
            and I cannot express how thrilled we are with the exceptional
            videography services provided. From start to finish,
            the experience was seamless and professional.
          </p>
        </div>
        <img src="@/assets/img/review.jpg" class="hidden md:hidden z-0 absolute my-2 lg:flex flex-col items-center w-6/12 rounded-xl right-0" alt="" />
      </div>
    </div>

    <!-- Arrows -->
    <div class="flex flex-row justify-end h-auto my-7 mx-7 space-x-6">
      <arrowleft />
      <arrowright />
    </div>

    <!-- Testimonials -->
    <div class="h-auto flex flex-row mx-7 justify-center">
      <TestiCard 
        name="Alex Shengelya" 
        comments="Working with Igor was a pleasure! He's a professional photographer with an amazing skills and expensive equipment." 
        photo="src/assets/img/person2.jpg" />
      <!-- <TestiCard 
        name="Mickey Malka"
        comments="Great photographer! Very professional and photos came out amazing! Will definitely use again!"
        photo="src/assets/img/person3.jpg" /> -->
    </div>
    
    <!-- Contact -->
    <div class="h-auto mx-7 mt-16">
      <div class="h-auto rounded-xl py-9 border-2 border-indigo-400 bg-gradient-to-r from-indigo-900 via-indigo-500 to-gray-100">
        <div class="flex flex-col md:flex-col lg:flex-row px-7 lg:px-10 justify-between items-center space-y-4">
          <div class="flex flex-col text-center lg:text-left">
            <h2 class="text-2xl font-semibold">Do you have any questions?</h2>
            <p class="text-xl font-light leading-10">Put your email address and get started</p>
          </div>
          <!-- input -->
          <div class="w-5/6 lg:w-1/2 rounded-lg border-2 border-indigo-950 bg-transparent flex flex-row justify-between items-center p-2 ">
            <p class="text-sm text-black">Enter your email address</p>
            <div class="bg-transparent text-indigo-950 font-normal px-2">
              <div class="flex justify-center items-center px-1 border bg-indigo-400 rounded-md w-7 h-7">
                <cursor class="w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />

    <Services3 />
    
    <Services1 />

    <Services2 />

  </main>
</template>
