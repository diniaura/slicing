<script setup>
import acc from '@/assets/icon/acc.vue'
import fold from '@/assets/icon/fold.vue'
import vids5 from '@/assets/icon/vids5.vue'
import vid2s5 from '@/assets/icon/vid2s5.vue'
import cams5 from '@/assets/icon/cams5.vue'
import sym from '@/assets/icon/sym.vue'
import people from '@/assets/icon/people.vue'
import hq from '@/assets/icon/hq.vue'
import play from '@/assets/icon/play.vue'
import mappp from '@/assets/icon/mappp.vue'
</script>

<template>


    <!-- Event   -->


    <div class="max-w-h flex flex-row mx-10 bg-gradient-to-b from-indigo-950 via-indigo-800 to-indigo-400 h-56 mt-14 rounded-xl justify-center items-center md:h-72 lg:h-96 lg:justify-between">
      <div class="flex flex-col text-white ml-5 lg:ml-20">
         <p class="text-xl font-medium md:text-2xl lg:text-4xl">
          Event Documentation
        </p>
         <p class="text-lg font-light md:text-xl lg:text-2xl">
          - Unveil Your Story with Lenscape!
        </p>
     </div>
     <img src="@/assets/img/cam.png" class="h-44 md:h-64 lg:h-96">
    </div>
    <!-- <div class="flex flex-row max-w-h mx-10 p-4 lg:h-96 sm:h-64 mt-14 justify-between bg-gradient-to-b from-indigo-950 via-indigo-800 to-indigo-400 rounded-xl items-center">
     <div class="flex flex-col justify-center lg:ml-10 sm:ml-5 text-white text-justify">
         <p class="flex lg:text-5xl sm:text-xl font-medium">
          Event Documentation
        </p>
         <p class="lg:text-4xl sm:text-lg font-thin mt-4">
          - Unveil Your Story with Lenscape!
        </p>
     </div>
         <img src="@/assets/img/cam.png" class="lg:h-96 sm:h-44">
    </div> -->


    <!-- Reasons  -->
    <div class="max-w-h mx-10 flex flex-row mt-20">
        <img src="@/assets/img/s5.jpeg" class="w-56 rounded-xl md:w-80 lg:w-6/12">
        <div class="flex flex-col ml-5 lg:ml-10 lg:mt-7">
          <div class="flex w-16 p-1.5 bg-indigo-950 text-xs text-white font-medium justify-center rounded-full md:w-20 md:p-2 md:text-sm lg:w-28 lg:p-3 ">
            Reasons
          </div>
          <p class="text-base font-medium text-indigo-950 mt-2 md:text-xl lg:text-4xl lg:mt-5">Why Choose Our Event Documentation Services?</p>
          <div class="flex flex-col mt-2 lg:mt-7">
            <div class="flex flex-row items-center">
              <acc class="w-6 h-6 p-0.5 bg-indigo-400 rounded-full mr-3 md:w-10 md:h-10 lg:w-16 lg:h-16 lg:p-2"/> <p class="text-sm md:text-lg lg:text-2xl">Professional Expertise</p>
            </div>
          </div>

          <div class="flex flex-col mt-2 lg:mt-5">
            <div class="flex flex-row items-center">
              <fold class="w-6 h-6 p-1 bg-indigo-400 rounded-full mr-3 md:w-10 md:h-10 lg:w-16 lg:h-16 lg:p-2"/> <p class="text-sm md:text-lg lg:text-2xl">Tailored Packages</p>
            </div>
          </div>

          <div class="flex flex-col mt-2 lg:mt-5">
            <div class="flex flex-row items-center">
              <vids5 class="w-6 h-6 p-0.5 bg-indigo-400 rounded-full mr-3 md:w-10 md:h-10 lg:w-16 lg:h-16 lg:p-2"/> <p class="text-sm md:text-lg lg:text-2xl">Dynamic Videography</p>
            </div>
          </div>
        </div>
    </div>
    <!-- <div class="flex flex-row max-w-h mx-10 mt-20">
        <div class="rounded-xl">
          <img src="@/assets/img/s5.jpeg" class="lg:max-w-xl sm:w-96 bg-black">
        </div>
        <div class="flex flex-col lg:ml-20 sm:ml-16 ">
            <div class="flex lg:w-32 sm:w-24 lg:p-3 sm:p-1 lg:mt-7 sm:mt-0 justify-center bg-indigo-950 text-white font-medium rounded-full shadow-xl">
                Reasons
            </div>
            <p class="lg:text-4xl sm:text-md font-medium text-left text-indigo-950 lg:mt-5 sm:mt-2 ">
                Why Choose Our Event Documentation Services?
            </p>
            <div class="flex flex-row lg:mt-5 sm:mt-2 items-center">
                <div class="flex lg:w-14 lg:h-14 sm:w-7 sm:h-7 rounded-full bg-indigo-400 justify-center items-center lg:p-2 sm:p-1">
                    <acc />
                </div>  
                <p class="lg:text-xl sm:text-sm ml-5 ">
                  Professional Expertise
                </p>
            </div>
            <div class="flex flex-row lg:mt-5 sm:mt-2 items-center">
                <div class="flex lg:w-14 lg:h-14 sm:w-7 sm:h-7 rounded-full bg-indigo-400 justify-center items-center lg:p-2 sm:p-1">
                    <fold />
                </div>
                <p class="lg:text-xl sm:text-sm ml-5 ">
                  Tailored Packages
                </p>
            </div>
            <div class="flex flex-row lg:mt-5 sm:mt-2 items-center">
                <div class="flex lg:w-14 lg:h-14 sm:w-7 sm:h-7 rounded-full bg-indigo-400 justify-center items-center lg:p-2 sm:p-1">
                    <vids5 />
                </div>
                <p class="lg:text-xl sm:text-sm ml-5 ">Dynamic Videography</p>
            </div>
        </div>
    </div> -->


    <!-- Services  -->
    <div class="flex flex-col max-w-h mx-auto items-center mt-20">
      <div class="flex w-20 bg-indigo-950 text-white text-xs font-medium justify-center p-3 rounded-full md:w-24 md:text-sm lg:w-28 lg:text-base">
        Services
      </div>
      <div class="text-xl font-semibold mt-4 text-indigo-950 md:text-2xl lg:text-4xl">
        Our Services Include
      </div>
    </div>
    <!-- <div class="flex lg:w-32 sm:w-24 lg:p-3 sm:p-1 mt-32 mx-auto justify-center bg-indigo-950 text-white font-medium rounded-full shadow-xl">
        Services
    </div>
    <div class="flex w-96 mx-auto text-indigo-950 mt-8 lg:text-4xl sm:text-xl font-semibold justify-center">
        Our Services Include
    </div> -->
    <div class="grid grid-cols-3 px-3 mx-10 ml-14 mt-14 md:ml-20 lg:ml-12 lg:translate-x-10 lg:-mx-32">

      <div class="flex flex-col items-center w-32 h-44 border-2 border-indigo-950 rounded-xl md:w-44 md:h-52 lg:w-48 lg:h-60">
        <div class="flex bg-indigo-950 w-16 h-16 items-center justify-center rounded-full mt-7 md:w-20 md:h-20 lg:w-24 lg:h-24  ">
          <cams5 class="p-1"/>
        </div>
        <div class="flex flex-col items-center justify-center mt-5 text-indigo-950 lg:mt-7">
          <p class="md:text-lg lg:text-xl">Professional</p>
          <p class="md:text-lg lg:text-xl">Photography</p>
        </div>
      </div>

      <div class="flex flex-col items-center w-32 h-44 border-2 border-indigo-950 rounded-xl md:w-44 md:h-52 lg:w-48 lg:h-60">
        <div class="flex bg-indigo-950 w-16 h-16 items-center justify-center rounded-full mt-7 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <vid2s5 class="p-1"/>
        </div>
        <div class="flex flex-col items-center justify-center mt-5 text-indigo-950 lg:mt-7">
          <p class="md:text-lg lg:text-xl">Cinematic </p>
          <p class="md:text-lg lg:text-xl">Videography</p>
        </div>
      </div>

      <div class="flex flex-col items-center w-32 h-44 border-2 border-indigo-950 rounded-xl md:w-44 md:h-52 lg:w-48 lg:h-60">
        <div class="flex bg-indigo-950 w-16 h-16 items-center justify-center rounded-full mt-7 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <sym class="p-1"/>
        </div>
        <div class="flex flex-col items-center justify-center mt-5 text-indigo-950 lg:mt-7">
          <p class="md:text-lg lg:text-xl">Customized </p>
          <p class="md:text-lg lg:text-xl">Packages</p>
        </div>
      </div>

      <div class="flex flex-col items-center w-32 h-44 border-2 border-indigo-950 rounded-xl ml-16 mt-2 md:w-44 md:h-52 md:ml-24 md:mt-6 lg:ml-56 lg:w-48 lg:h-60 lg:-mt-40">
        <div class="flex bg-indigo-950 w-16 h-16 items-center justify-center rounded-full mt-7 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <people class="p-1"/>
        </div>
        <div class="flex flex-col items-center justify-center mt-5 text-indigo-950 lg:mt-7">
          <p class="md:text-lg lg:text-xl">Interviews and </p>
          <p class="md:text-lg lg:text-xl">Testimonials</p>
        </div>
      </div>

      <div class="flex flex-col items-center w-32 h-44 border-2 border-indigo-950 rounded-xl ml-16 mt-2 md:w-44 md:h-52 md:ml-24 md:mt-6 lg:ml-56 lg:w-48 lg:h-60 lg:-mt-40">
        <div class="flex bg-indigo-950 w-16 h-16 items-center justify-center rounded-full mt-7 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <hq class="p-1"/>
        </div>
        <div class="flex flex-col items-center justify-center mt-5 text-indigo-950 lg:mt-7">
          <p class="md:text-lg lg:text-xl">High-Quality </p>
          <p class="md:text-lg lg:text-xl">Production</p>
        </div>
      </div>


    </div>
    <!-- <div class="grid grid-rows-3 grid-flow-col gap-2 mx-8 mt-20 text-indigo-950">
        <div class="flex flex-col row-start-1 row-span-2 lg:w-56 lg:h-72 sm:w-28 sm:h-40 rounded-xl border-2 border-indigo-950 items-center">
            <div class="flex lg:w-24 lg:h-24 sm:w-14 sm:h-14 rounded-full border-2 border-indigo-400 bg-indigo-950 lg:mt-10 sm:mt-7 justify-center items-center">
                <cams5 class="lg:p-0 sm:p-2"/>
            </div>
            <p class="flex w-32 lg:text-2xl sm:text-sm text-center lg:mt-10 sm:mt-5 ">
                Professional Photography
            </p>
        </div>

        <div class="flex flex-col row-start-2 row-span-2 lg:w-56 sm:w-28 lg:-mt-16 sm:-mt-8 lg:h-72 sm:h-40 rounded-xl border-2 border-indigo-950 items-center">
            <div class="flex lg:w-24 lg:h-24 sm:w-14 sm:h-14 rounded-full border-2 border-indigo-400 bg-indigo-950 lg:mt-10 sm:mt-7 justify-center items-center">
                <vid2s5 class="lg:p-0 sm:p-2"/>
            </div>
            <p class="flex w-32 lg:text-2xl sm:text-sm text-center lg:mt-10 sm:mt-5 ">
                Cinematic Videography
            </p>
        </div>

        <div class="flex flex-col row-start-1 row-end-4 lg:w-56 lg:h-72 sm:w-28 sm:h-40 rounded-xl border-2 border-indigo-950 items-center">
            <div class="flex lg:w-24 lg:h-24 sm:w-14 sm:h-14 rounded-full border-2 border-indigo-400 bg-indigo-950 lg:mt-10 sm:mt-7 justify-center items-center">
                <sym class="lg:p-0 sm:p-2"/>
            </div>
            <p class="flex w-32 lg:text-2xl sm:text-sm text-center lg:mt-10 sm:mt-5 ">
                Customized Packages
            </p>
        </div>

        <div class="flex flex-col row-start-2 row-span-2 lg:w-56 sm:w-28 lg:-mt-16 sm:-mt-7 lg:h-72 sm:h-40 rounded-xl border-2 border-indigo-950 items-center">
            <div class="flex lg:w-24 lg:h-24 sm:w-14 sm:h-14 rounded-full border-2 border-indigo-400 bg-indigo-950 lg:mt-10 sm:mt-7 justify-center items-center">
                <people class="lg:p-0 sm:p-2"/>
            </div>
            <p class="flex w-40 lg:text-2xl sm:text-sm text-center lg:mt-10 sm:mt-5 ">
                Interviews and Testimonials
            </p>
        </div>
        
        <div class="flex flex-col row-start-1 row-end-4 lg:w-56 lg:h-72 sm:w-28 sm:h-40 rounded-xl border-2 border-indigo-950 items-center">
            <div class="flex lg:w-24 lg:h-24 sm:w-14 sm:h-14 rounded-full border-2 border-indigo-400 bg-indigo-950 lg:mt-10 sm:mt-7 justify-center items-center">
                <hq class="lg:p-0 sm:p-2"/>
            </div>
            <p class="flex lg:w-40 sm:w-24 lg:text-2xl sm:text-sm text-center lg:mt-10 sm:mt-5 ">
                High-Quality Production
            </p>
        </div>
    </div> -->


    <!-- process -->
    <div class="flex flex-col max-w-h mx-auto items-center mt-20">
      <div class="flex w-20 bg-indigo-950 text-white text-xs font-medium justify-center p-3 rounded-full md:w-24 md:text-sm lg:w-28 lg:text-base">
        Process
      </div>
      <div class="text-xl font-semibold mt-4 text-indigo-950 md:text-2xl lg:text-4xl">
        How Our Process Works?
      </div>
    </div>
    <div class="max-w-h flex flex-row mx-5 mt-14 lg:ml-44">
      <div class="flex flex-col text-right ml-5 md:ml-10">
        <div class="mr-5 lg:mr-10 lg:-translate-y-1">
          <p class="text-lg font-medium text-indigo-950 md:text-2xl lg:text-4xl ">Consultation</p>
          <p class="w-56 text-sm md:text-xl md:w-80 lg:text-2xl lg:w-96 lg:mt-3">We begin with a thorough consultation to understand the goals, theme, and unique aspects of your event.</p>
        </div>
        <div class="mt-28 py-5 mr-5 md:mt-20 md:py-4 lg:mr-10 lg:mt-44 lg:translate-y-1">
          <p class="text-lg font-medium text-indigo-950 md:text-2xl lg:text-4xl">Editing Excellence</p>
          <p class="w-56 text-sm md:text-xl md:w-80 lg:text-2xl lg:w-96 lg:mt-3">Our post-production team meticulously edits and enhances each photograph and video to meet the highest standards of visual quality.</p>
        </div>
      </div>

      <div class="flex flex-col justify-between items-center w-1 h-96 mx-auto bg-indigo-950 mt-1 lg:w-1.5 lg:h-auto">
        <div class="w-5 h-5 bg-indigo-950 rounded-full lg:w-6 lg:h-6"></div>
        <div class="w-5 h-5 bg-indigo-950 rounded-full lg:w-6 lg:h-6"></div>
        <div class="w-5 h-5 bg-indigo-950 rounded-full lg:w-6 lg:h-6"></div>
        <div class="w-5 h-5 bg-indigo-950 rounded-full lg:w-6 lg:h-6"></div>
      </div>

      <div class="flex flex-col text-left mt-28 mr-28 md:mr-12 lg:mr-56">
        <div class="mt-1 py-2 ml-5 md:py-1 lg:ml-10 lg:mt-14 lg:translate-y-4">
        <p class="text-lg font-medium text-indigo-950 md:text-2xl lg:text-4xl">On-Site Professionals</p>
          <p class="w-56 mt-1 text-sm md:text-xl md:w-80 lg:text-2xl lg:w-96 lg:mt-3">Our experienced team arrives on-site with top-tier equipment, ready to seamlessly capture every moment.</p>
        </div>
        <div class="mt-28 py-2 ml-5 md:mt-20 md:py-3 lg:ml-10 lg:translate-y-40">
          <p class="text-lg font-medium text-indigo-950 md:text-2xl lg:text-4xl">Timely Delivery</p>
          <p class="w-56 mt-1 text-sm md:text-xl md:w-80 lg:text-2xl lg:w-96 lg:mt-3">Your edited photos and videos are delivered within a reasonable timeframe, ready to be shared across various platforms and media.</p>
        </div>
      </div>
    </div>
    <!-- <div class="flex flex-row mt-20 ">
      <div class="flex flex-col">
        <div class="max-w-md text-right text-indigo-950 lg:ml-32 lg:mr-0 sm:mr-10 sm:ml-30 lg:mt-0 sm:mt-1">
            <p class="lg:text-2xl sm:text-lg font-medium ">Consultation</p>
            <p class="lg:text-xl sm:text-sm text-right mt-2">We begin with a thorough consultation to understand the goals, theme, and unique
               aspects of your event.
            </p>
        </div>
        <div class="max-w-md text-right text-indigo-950 lg:ml-32 lg:mr-0 sm:mr-10 lg:mt-28 sm:mt-24 lg:py-2 sm:py-2">
            <p class="lg:text-2xl sm:text-lg font-medium ">On-Site Professionals</p>
            <p class="lg:text-xl sm:text-sm text-right mt-2">Our experienced team arrives on-site with top-tier equipment, ready to seamlessly
               capture every moment.
            </p>
        </div>
      </div>

        <div class="flex flex-col mx-auto w-1 lg:h-96 sm:h-80 bg-indigo-950 justify-between items-center mt-2">
            <div class="w-5 h-5 rounded-full bg-indigo-950"></div>
            <div class="w-5 h-5 rounded-full bg-indigo-950"></div>
            <div class="w-5 h-5 rounded-full bg-indigo-950"></div>
            <div class="w-5 h-5 rounded-full bg-indigo-950"></div>
        </div>

      <div class="flex flex-col">
        <div class="max-w-md float-left lg:mt-28 sm:mt-24 lg:mr-32 lg:ml-0 sm:ml-10 text-indigo-950 lg:py-3 sm:py-2">
            <p class="lg:text-2xl sm:text-lg font-medium ">Editing Excellence</p>
            <p class="lg:text-xl sm:text-sm text-left mt-2">Our post-production team meticulously edits and enhances each photograph and video
               to meet the highest standards of visual quality.
            </p>
        </div>
        <div class="max-w-md float-left lg:my-24 sm:my-16 lg:mr-32 lg:ml-0 sm:ml-10 text-indigo-950 lg:py-3 sm:py-4">
            <p class="lg:text-2xl sm:text-lg font-medium ">Timely Delivery</p>
            <p class="lg:text-xl sm:text-sm text-left mt-2">Your edited photos and videos are delivered within a reasonable timeframe, ready to
               be shared across various platforms and media.
            </p>
        </div>
      </div>
    </div> -->
    

    <!-- Portofolio -->
    <div class="flex flex-col max-w-h mx-auto items-center mt-20 lg:mt-64">
      <div class="flex w-20 bg-indigo-950 text-white text-xs font-medium justify-center p-3 rounded-full md:w-24 md:text-sm lg:w-28 lg:text-base">
        Portofolio
      </div>
      <div class="text-xl font-semibold mt-4 text-indigo-950 md:text-2xl lg:text-4xl">
        Our Amazing Work
      </div>
    </div>
    <div class="grid grid-cols-2 grid-flow-row gap-5 mx-10 mt-10 relative lg:grid-cols-3">  
      <div class="flex flex-col">
        <img src="@/assets/img/1.jpeg">
        <div class="flex absolute translate-y-3/4 left-20 md:translate-y-full md:left-32 lg:translate-y-20 lg:translate-x-6 lg:left-">
          <play class="h-16 md:h-20 lg:h-24"/>
        </div>
        <p class="ml-1 text-indigo-950 font-semibold md:text-lg lg:text-xl ">Trading Workshop</p>
        <div class="flex text-sm items-center md:text-base lg:text-lg">
          <mappp class="w-5 md:w-7 lg:w-10"/> Trading Corporate
        </div>
      </div>

      <div class="flex flex-col">
        <img src="@/assets/img/2.jpeg">
        <div class="flex absolute translate-y-3/4 right-20 md:translate-y-full md:right-32 lg:translate-y-20 lg:right-36">
          <play class="h-16 md:h-20 lg:h-24"/>
        </div>
        <p class="ml-1 text-indigo-950 font-semibold md:text-lg lg:text-xl ">Carnevale</p>
        <div class="flex text-sm items-center md:text-base lg:text-lg">
          <mappp class="w-5 md:w-7 lg:w-10"/> Revile Corporate
        </div>
      </div>
      
      <div class="flex flex-col">
        <img src="@/assets/img/3.jpeg">
        <div class="flex absolute translate-y-3/4 left-20 md:translate-y-full md:left-32 lg:translate-y-20 lg:translate-x-96 lg:left-44">
          <play class="h-16 md:h-20 lg:h-24"/>
        </div>
        <p class="ml-1 text-indigo-950 font-semibold md:text-lg lg:text-xl">Business Seminar </p>
        <div class="flex text-sm items-center md:text-base lg:text-lg">
          <mappp class="w-5 md:w-7 lg:w-10"/> Matt Corporate
        </div>
      </div> 

      <div class="flex flex-col">
        <img src="@/assets/img/4.jpeg">
        <div class="flex absolute translate-y-3/4 right-20 md:translate-y-full md:right-32 lg:translate-y-20 lg:translate-x-32 lg:left-6">
          <play class="h-16 md:h-20 lg:h-24"/>
        </div>
        <p class="ml-1 text-indigo-950 font-semibold md:text-lg lg:text-xl">Corporate’s Party</p>
        <div class="flex text-sm items-center md:text-base lg:text-lg">
          <mappp class="w-5 md:w-7 lg:w-10"/> Zona Corporate 
        </div>
      </div>

      <div class="flex flex-col">
        <img src="@/assets/img/5.jpeg">
        <div class="flex absolute translate-y-3/4 left-20 md:translate-y-full md:left-32 lg:translate-y-20 lg:translate-x-96 lg:left-44">
          <play class="h-16 md:h-20 lg:h-24"/>
        </div>
        <p class="ml-1 text-indigo-950 font-semibold md:text-lg lg:text-xl ">Corporate’s Greeting  </p>
        <div class="flex text-sm items-center md:text-base lg:text-lg">
          <mappp class="w-5 md:w-7 lg:w-10"/> Connacht Corporate 
        </div>
      </div>

      <div class="flex flex-col">
        <img src="@/assets/img/6.jpeg">
        <div class="flex absolute translate-y-3/4 right-20 md:translate-y-full md:right-32 lg:translate-y-20 lg:translate-x-2 lg:right-40">
          <play class="h-16 md:h-20 lg:h-24"/>
        </div>
        <p class="ml-1 text-indigo-950 font-semibold md:text-lg lg:text-xl">Execute Tender</p>
        <div class="flex text-sm items-center md:text-base lg:text-lg">
          <mappp class="w-5 md:w-7 lg:w-10"/> Yard Corporate  
        </div>
      </div>
  </div>
    <!-- <div class="flex lg:justify-between sm:justify-center sm:space-x-4 max-w-h mx-10 mt-20 text-indigo-950 items-center">
    <div class="flex flex-col lg:w-96 sm:w-80 rounded-xl relative">
        <img src="@/assets/img/1.jpeg" class="w-full lg:h-52 sm:h-auto rounded-xl">
        <play class="absolute lg:top-1/2 sm:top-20 left-1/2 transform -translate-x-1/2 -translate-y-3/4 lg:h-24 sm:h-16"/>
        <div class="lg:text-base sm:text-md font-semibold ml-2">
          Trading Workshop
        </div>
        <div class="flex flex-row lg:text-base sm:text-sm items-center ml-1">
            <img src="@/assets/img/map.png" class="lg:w-6 lg:h-auto sm:h-5 sm:w-5 ">Trade Corporate
        </div>
    </div>  

      <div class="flex flex-col lg:w-96 sm:w-80 rounded-xl relative">
        <img src="@/assets/img/2.jpeg" class="w-full lg:h-52 sm:h-auto rounded-xl">
        <play class="absolute lg:top-1/2 sm:top-20 left-1/2 transform -translate-x-1/2 -translate-y-3/4 lg:h-24 sm:h-16"/>
      <div class="lg:text-base sm:text-md font-semibold ml-2">
        Carnevale
      </div>
      <div class="flex flex-row lg:text-base sm:text-sm items-center ml-1">
        <img src="@/assets/img/map.png" class="lg:w-6 lg:h-auto sm:w-5 sm:h-5">Revile Corporate
      </div>
    </div>

    <div class="flex flex-col lg:w-96 sm:w-80 rounded-xl relative">
        <img src="@/assets/img/3.jpeg" class="w-full lg:h-52 sm:h-auto rounded-xl">
        <play class="absolute lg:top-1/2 sm:top-20 left-1/2 transform -translate-x-1/2 -translate-y-3/4 lg:h-24 sm:h-16"/>
      <div class="lg:text-base sm:text-md font-semibold ml-2">
        Business Seminar
      </div>
      <div class="flex flex-row lg:text-base sm:text-sm items-center ml-1">
        <img src="@/assets/img/map.png" class="lg:w-6 lg:h-auto sm:w-5 sm:h-5">Matt Corporate
      </div>
    </div>
    </div>
    <div class="flex lg:justify-between sm:justify-center sm:space-x-4 max-w-h mx-10 lg:mt-5 sm:mt-2 text-indigo-950 items-center">
    <div class="flex flex-col lg:w-96 sm:w-80 rounded-xl relative">
        <img src="@/assets/img/4.jpeg" class="w-full lg:h-52 md:h-auto rounded-xl">
        <play class="absolute lg:top-1/2 sm:top-20 left-1/2 transform -translate-x-1/2 -translate-y-3/4 lg:h-24 sm:h-16"/>
      <div class="lg:text-base sm:text-md font-semibold ml-2">
        Corporate's Party
      </div>
      <div class="flex flex-row lg:text-base sm:text-sm items-center ml-1">
        <img src="@/assets/img/map.png" class="lg:w-6 lg:h-auto sm:w-5 sm:h-5">
        Zona Corporate
      </div>
    </div>

    <div class="flex flex-col lg:w-96 sm:w-80 rounded-xl relative">
        <img src="@/assets/img/5.jpeg" class="w-full lg:h-52 md:h-auto rounded-xl">
        <play class="absolute lg:top-1/2 sm:top-20 left-1/2 transform -translate-x-1/2 -translate-y-3/4 lg:h-24 sm:h-16"/>
      <div class="lg:text-base sm:text-md font-semibold ml-2">
        Corporate's Greeting
      </div>
      <div class="flex flex-row lg:text-base sm:text-sm items-center ml-1">
        <img src="@/assets/img/map.png" class="lg:w-6 lg:h-auto sm:w-5 sm:h-5">
        Connacht Corporate
      </div>
    </div>

    <div class="flex flex-col lg:w-96 sm:w-80 rounded-xl relative">
        <img src="@/assets/img/6.jpeg" class="w-full lg:h-52 sm:h-auto rounded-xl">
        <play class="absolute lg:top-1/2 sm:top-20 left-1/2 transform -translate-x-1/2 -translate-y-3/4 lg:h-24 sm:h-16"/>
      <div class="lg:text-base sm:text-md font-semibold ml-2">
        Execute Tender
      </div>
      <div class="flex flex-row lg:text-base sm:text-sm items-center ml-1">
        <img src="@/assets/img/map.png" class="lg:w-6 lg:h-auto sm:w-5 sm:h-5">
        Yard Corporate
      </div>
    </div>
    </div> -->


</template>