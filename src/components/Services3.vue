<script setup>
import Header from './Header.vue';
import FeaturesCard from './FeaturesCard.vue';
import Footer from './Footer.vue';
import Reason1 from '@/assets/icons/reason1.vue';
import Reason2 from '@/assets/icons/reason2.vue';
import Reason3 from '@/assets/icons/reason3.vue';
</script>

<template>
  <main class="text-white bg-white overflow-hidden">
    <!-- Navbar -->
    <Header photo="src/assets/img/serviceshome.png" caption="Yearbook Photoshoot" />

    <!-- Features -->
    <div class="md:h-auto mt-10 md:mt-10 lg:mt-16 h-auto mx-7 mb-16">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        Features
      </div>
      <div class="flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-3xl lg:text-3xl font-semibold">
        Our Key Features
      </div>
      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-11 items-center justify-center mt-12 mx-7">
          <FeaturesCard title="Individual and Group Portraits" desc="We specialize in photographing individual and group portraits, ensuring that each student's unique personality shines through" />
          <FeaturesCard title="Special Packages for Schools" desc="We offer customized packages to meet your institution's specific needs. From a variety of portrait styles to a variety of group settings."/>
          <FeaturesCard title="Professional Location Setup" desc="Whether you prefer the classic studio look or want to shoot in a school setting, we offer studio setups and on-location shooting."/>
          <FeaturesCard title="Creative Poses and Styles" desc="Our experienced photographers guide students through creative poses and styles to ensure that their personalities are captured authentically."/>
          <FeaturesCard title="Timely Coordination and Scheduling" desc="Our team works closely with school administrators to plan and execute the shoot efficiently, minimizing disruption to the academic calendar."/>
          <FeaturesCard title="Online Ordering and Accessibility" desc="To simplify the ordering process, we offer an online platform where students and parents can view, select, and order their portrait prints."/>
      </div>
    </div>

    <!-- Reasons -->
    <div class="h-auto mx-7 mb-20">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        Reasons
      </div>
      <div class="flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-3xl lg:text-3xl font-semibold">
        Why Choose Lenscape for Your Yearbook?
      </div>
      <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:flex-row lg:flex justify-center items-center mt-14 lg:space-x-10">
        <!-- Cards -->
        <div class="items-center flex flex-col">
          <div class="absolute z-0 border border-xl bg-white border-indigo-400 rounded-2xl flex items-center justify-center shadow-xl">
            <Reason1 class="m-5 w-11/12"/>
          </div>
          <div class="border border-indigo-400 rounded-2xl text-center flex flex-col px-4 pt-14 mt-12 h-72 w-72">
            <h2 class="text-indigo-950 font-semibold text-2xl mt-1">Experience and Expertise</h2>
            <p class="text-indigo-950 mt-5">Our team has extensive experience in school photography, understanding the unique dynamics and requirements of capturing memorable yearbook portraits.</p>
          </div>
        </div>
        <div class="items-center flex flex-col">
          <div class="absolute z-0 border border-xl bg-white border-indigo-400 rounded-2xl flex items-center justify-center shadow-xl">
            <Reason2 class="m-5 w-11/12"/>
          </div>
          <div class="border border-indigo-400 rounded-2xl text-center flex flex-col px-4 pt-14 mt-12 h-72 w-72">
            <h2 class="text-indigo-950 font-semibold text-2xl mt-1">Commitment to Quality</h2>
            <p class="text-indigo-950 mt-5">We prioritize quality in every aspect of our services, from the photography session to the final edited image.</p>
          </div>
        </div>
        <div class="items-center flex flex-col md:col-span-2">
          <div class="absolute z-0 border border-xl bg-white border-indigo-400 rounded-2xl flex items-center justify-center shadow-xl">
            <Reason3 class="m-5 w-11/12"/>
          </div>
          <div class="border border-indigo-400 rounded-2xl text-center flex flex-col px-4 pt-14 mt-12 h-72 w-72">
            <h2 class="text-indigo-950 font-semibold text-2xl mt-1">Positive and Inclusive Experience</h2>
            <p class="text-indigo-950 mt-5">Our photographers create a positive and inclusive environment, ensuring that each student feels comfortable and confident during their photo shoot.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Theme -->
    <div class="h-auto mx-6 mb-20">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        Theme
      </div>
      <div class="flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-3xl lg:text-3xl font-semibold">
        Best Theme Recommendations
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4 mx-16 md:mx-28 lg:mx-32 my-8">
        <img src="@/assets/img/theme1.jpg" alt="" class="md:col-span-2 lg:col-span-2 rounded-xl">
        <img src="@/assets/img/theme2.jpg" alt="" class="rounded-xl">
        <img src="@/assets/img/theme3.jpg" alt="" class="rounded-xl">
        <img src="@/assets/img/theme4.jpg" alt="" class="rounded-xl">
        <img src="@/assets/img/theme5.jpg" alt="" class="rounded-xl">
        <img src="@/assets/img/theme6.jpg" alt="" class="rounded-xl">
        <img src="@/assets/img/theme7.jpg" alt="" class="rounded-xl">
        <img src="@/assets/img/theme8.jpg" alt="" class="rounded-xl">
        <img src="@/assets/img/theme9.jpg" alt="" class="rounded-xl">
        <img src="@/assets/img/theme10.jpg" alt="" class="md:col-span-2 lg:col-span-2 rounded-xl">
      </div>
      
    </div>

    <!-- Portofolio -->
    <div class="h-auto mx-7 mb-20">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        Portofolio
      </div>
      <div class="flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-3xl lg:text-3xl font-semibold">
        Our Amazing Work
      </div>
      <!-- grid -->
      <div class="grid grid-cols-5 gap-2 md:gap-4 lg:gap-5 my-12">
        <!-- one -->
        <img src="@/assets/img/porto1.jpg" alt="" class="rounded-md md:rounded-xl lg:rounded-2xl row-span-2 h-full object-cover">
        <img src="@/assets/img/porto2.jpg" alt="" class="rounded-md md:rounded-xl lg:rounded-2xl row-span-2 h-full col-span-2 object-cover">
        <img src="@/assets/img/porto3.jpg" alt="" class="rounded-md md:rounded-xl lg:rounded-2xl col-span-2">
        <!-- two -->
        <img src="@/assets/img/porto4.jpg" alt="" class="rounded-md md:rounded-xl lg:rounded-2xl h-full object-cover">
        <!-- three -->
        <img src="@/assets/img/porto5.jpg" alt="" class="rounded-md md:rounded-xl lg:rounded-2xl row-span-2">
        <img src="@/assets/img/porto7.jpg" alt="" class="rounded-md md:rounded-xl lg:rounded-2xl col-span-2 h-full object-cover">
        <img src="@/assets/img/porto6.jpg" alt="" class="rounded-md md:rounded-xl lg:rounded-2xl col-span-2 h-full object-cover">
      </div>
    </div>

    <!-- Footer -->
    <Footer />

  </main>
</template>