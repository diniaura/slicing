<script setup>
import pnh2 from '@/assets/icon/pnh2.vue'
import lamp2 from '@/assets/icon/lamp2.vue'
import not from '@/assets/icon/note.vue'
import vid from '@/assets/icon/vid.vue'
import cut from '@/assets/icon/cut.vue'
import play from '@/assets/icon/play.vue'
import pesawat from '@/assets/icon/pesawat.vue'
</script>

<template>


   <!-- Company -->

   <div class="max-w-h flex flex-row mx-10 bg-gradient-to-b from-indigo-950 via-indigo-800 to-indigo-400 h-56 mt-14 rounded-xl justify-center items-center md:h-72 lg:h-96 lg:justify-between">
      <div class="flex flex-col text-white ml-5 lg:ml-20">
         <p class="text-xl font-medium md:text-2xl lg:text-4xl">
          Event Documentation
        </p>
         <p class="text-lg font-light md:text-xl lg:text-2xl">
          - Unveil Your Story with Lenscape!
        </p>
     </div>
     <img src="@/assets/img/kantor.png" class="h-44 md:h-64 lg:h-96">
    </div>
   <!-- <div class="flex flex-row max-w-h mx-10 p-4 lg:h-96 sm:h-64 mt-14 justify-between bg-gradient-to-b from-indigo-950 via-indigo-800 to-indigo-400 rounded-xl items-center">
    <div class="flex flex-col justify-center lg:ml-10 sm:ml-5 text-white text-justify">
        <p class="flex lg:text-5xl sm:text-xl font-medium">Company Profile Video</p>
        <p class="lg:text-4xl sm:text-lg font-thin mt-4">– Unveil Your Story with Lenscape!</p>
    </div>
        <img src="@/assets/img/kantor.png" class="lg:h-96 sm:h-44">
   </div> -->


  <!-- benefits  -->

  <div class="max-w-h flex flex-row mx-10 mt-14 ">
    <img src="@/assets/img/benef.jpeg" class="w-52 rounded-xl md:w-80 lg:w-6/12">
    <div class="flex flex-col">
      <p class="text-indigo-950 text-sm ml-3 font-medium md:ml-5 md:text-xl lg:text-4xl lg:mt-20">Benefits of <span class="text-indigo-400">Company Profile</span> Video</p> 

      <div class="flex flex-col mt-2 ml-3 md:ml-5 md:mt-5 lg:mt-7">
        <div class="flex flex-row">
          <pnh2 class="w-7 h-5 md:h-6 lg:w-12 lg:h-12"/><p class="text-xs ml-1 md:text-base md:ml-3 lg:text-2xl lg:ml-5 lg:mt-2">Becomes a quite powerful tool or medium</p>
        </div>  

        <div class="flex flex-row ml-0.5 mt-1 md:mt-3 md:ml-0">
          <pnh2 class="w-5 h-5 md:w-7 md:h-6 lg:w-12 lg:h-12"/><p class="text-xs ml-1 md:text-base md:ml-3 lg:text-2xl lg:ml-5 lg:mt-2">Can minimize costs</p>
        </div> 

        <div class="flex flex-row mt-1 md:mt-3 lg:-ml-1">
          <pnh2 class="w-12 h-5 md:w-12 md:h-6 lg:w-20 lg:h-16 lg:px-1"/><p class="text-xs ml-1 md:text-base md:ml-3 lg:text-2xl lg:ml-5 lg:mt-2">Minimize expenditure on conventional promotional and branding activities</p>
        </div> 

        <div class="flex flex-row ml-0.5 mt-1 md:mt-3 lg:mt-5">
          <pnh2 class="w-6 h-5 md:w-6 md:h-6 lg:w-11 lg:h-12"/><p class="text-xs ml-1 md:text-base md:ml-3 lg:text-2xl lg:ml-6 lg:mt-2">Provides an emotional influence on viewers</p>
        </div>  

        <div class="flex flex-row ml-0.5 mt-1 md:mt-3 lg:mt-5">
          <pnh2 class="w-8 h-5 md:w-8 md:h-6 lg:w-12 lg:h-12"/><p class="text-xs ml-1 md:text-base md:ml-3 lg:text-2xl lg:ml-5 lg:mt-2">Can contain various information related to the company</p>
        </div> 

      </div>
    </div>
  </div>
  <!-- <div class="flex flex-row max-w-h mx-10 mt-20">
      <img src="@/assets/img/benef.jpeg" class="lg:w-2/5 lg:h-auto sm:w-2/5 sm:h-56">
    <div class="lg:w-3/6 sm:w-3/5 flex flex-col">
        <p class="text-indigo-950 font-medium lg:text-4xl sm:text-lg lg:mt-8 sm:mt-0 lg:ml-10 sm:ml-5 ">Benefits of <span class="text-indigo-400">Company Profile</span> Video</p>    
        <div class="flex flex-col lg:ml-10 sm:ml-5 lg:mt-10 sm:mt-1">
            <div class="flex flex-row items-center text-indigo-950">
                <pnh2 class="lg:w-12 sm:w-7 lg:h-auto sm:h-7"/><p class="lg:text-2xl sm:text-sm font-light ml-5">
                  Becomes a quite powerful tool or medium
                </p>
            </div>
            <div class="flex flex-row items-center text-indigo-950 lg:mt-4 sm:mt-0">
                <pnh2 class="lg:w-12 sm:w-7 lg:h-auto sm:h-7"/><p class="lg:text-2xl sm:text-sm font-light ml-5">
                  Can minimize costs
                </p>
            </div>
            <div class="flex flex-row text-indigo-950 lg:mt-4 sm:mt-0">
                <pnh2 class="lg:w-12 sm:w-10 lg:h-auto sm:h-12"/><p class="lg:text-2xl sm:text-sm font-light ml-5 my-1 w-96">Minimize expenditure on conventional promotional and branding activities</p>
            </div>
            <div class="flex flex-row items-center text-indigo-950 lg:mt-4 sm:mt-0">
                <pnh2 class="lg:w-12 sm:w-7 lg:h-auto sm:h-10" /><p class="lg:text-2xl sm:text-sm font-light ml-5">Provides an emotional influence on viewers </p>
            </div>
            <div class="flex flex-row text-indigo-950 lg:mt-4 sm:mt-0">
                <pnh2 class="lg:w-12 sm:w-10 lg:h-auto sm:h-14"/><p class="lg:text-2xl sm:text-sm font-light ml-5 my-2 w-96">Can contain various information related to the company</p>
            </div>
        </div>
    </div>
  </div> -->


  <!-- process  -->
  <div class="flex flex-col max-w-h mx-auto items-center mt-20">
      <div class="flex w-20 bg-indigo-950 text-white text-xs font-medium justify-center p-3 rounded-full md:w-24 md:text-sm lg:w-28 lg:text-base">
        Process
      </div>
      <div class="text-xl font-semibold mt-4 text-indigo-950 md:text-2xl lg:text-4xl">
        The process of making a company profile video
      </div>
  </div>
  <div class="grid grid-cols-2 grid-flow-row gap-5 mx-14 mt-14 md:mx-36 lg:grid-cols-4 lg:mx-12 lg:mr-10">

    <div class="flex flex-col w-52 h-72 bg-slate-300 rounded-xl py-4 md:w-56 md:h-80 lg:w-60 lg:h-96">
      <div class="flex flex-row items-center justify-between px-4 lg:mb-1">
        <lamp2 class="w-16 h-16 bg-indigo-950 p-2 rounded-xl lg:w-20 lg:h-20"/>
        <p class="text-4xl font-medium lg:text-5xl">01</p>
      </div>
      <div class="w-40 bg-slate-400 mt-3 p-2 border-l-8 border-l-black rounded-r-full font-medium lg:w-48 lg:text-lg">Concept creation</div>
      <p class="p-4 text-xs text-justify text-indigo-950 md:text-sm lg:text-base">
        Collect various information ranging from ideas, basic concepts, to references that the company has. As well as the process of developing creative ideas until they become good and interesting concepts
      </p>
    </div>

    <div class="flex flex-col w-52 h-72 bg-indigo-400 rounded-xl py-4 md:w-56 md:h-80 lg:w-60 lg:h-96">
      <div class="flex flex-row items-center justify-between px-4 lg:mb-1">
        <not class="w-16 h-16 bg-white p-2 rounded-xl lg:w-20 lg:h-20" />
        <p class="text-4xl font-medium lg:text-5xl text-white">02</p>
      </div>
      <div class="w-40 bg-white mt-3 p-2 border-l-8 border-l-white rounded-r-full font-medium lg:w-48 lg:text-lg">Pre Production</div>
      <p class="p-4 text-xs text-justify text-white md:text-sm lg:text-base">
        At this stage, the team will conduct a location or company survey to set the location with a story before shooting and talent search or casting, as well as making a storyboard.      </p>
    </div>

    <div class="flex flex-col w-52 h-72 bg-slate-300 rounded-xl py-4 md:w-56 md:h-80 lg:w-60 lg:h-96">
      <div class="flex flex-row items-center justify-between px-4 lg:mb-1">
        <vid class="w-16 h-16 bg-indigo-950 p-2 rounded-xl lg:w-20 lg:h-20"/>
        <p class="text-4xl font-medium lg:text-5xl">03</p>
      </div>
      <div class="w-40 bg-slate-400 mt-3 p-2 border-l-8 border-l-black rounded-r-full font-medium lg:w-48 lg:text-lg">Shooting</div>
      <p class="p-4 text-xs text-justify text-indigo-950 md:text-sm lg:text-base">
        The filming process on location is in accordance with the concept with the storyboard that has been agreed with the client. So that when shooting there will be no mistakes or repetitions.
      </p>
    </div>

    <div class="flex flex-col w-52 h-72 bg-slate-300 rounded-xl py-4 md:w-56 md:h-80 lg:w-60 lg:h-96">
      <div class="flex flex-row items-center justify-between px-4 lg:mb-1">
        <cut class="w-16 h-16 bg-indigo-950 p-2 rounded-xl lg:w-20 lg:h-20"/>
        <p class="text-4xl font-medium lg:text-5xl">04</p>
      </div>
      <div class="w-40 bg-slate-400 mt-3 p-2 border-l-8 border-l-black rounded-r-full font-medium lg:w-48 lg:text-lg">Post Production </div>
      <p class="p-4 text-xs text-justify text-indigo-950 md:text-sm lg:text-base">
        Once the video shooting has been completed, it will then be processed at the editing stage. Our team will edit according to the concept and produce the best output which is then sent to the client.      </p>
    </div>

  </div>
  <!-- <div class="flex flex-row justify-center lg:space-x-5 sm:space-x-1 max-w-h mx-10 px-5 mt-20">
    <div class="flex flex-col lg:w-64 sm:w-44 lg:h-96 sm:h-72 bg-gray-100  rounded-xl shadow-xl text-indigo-950">
        <div class="flex flex-row items-center justify-between lg:p-4 sm:p-2 ">
            <lamp2 class="bg-indigo-950 rounded-xl p-2 lg:h-20 lg:w-20 sm:w-12 sm:h-12" />
            <p class="text-gray-400 lg:text-5xl sm:text-3xl font-medium">01</p>
        </div>
        <div class="bg-gray-400 lg:w-48 sm:w-36 p-2 lg:text-xl sm:text-sm rounded-r-full border-l-8 border-indigo-950 ">Concept creation</div>
        <p class="lg:p-4 sm:p-2 text-justify lg:text-base sm:text-xs">Collect various information ranging from ideas, basic concepts, to references that the company has. As well as the process of developing creative ideas until they become good and interesting concepts
        </p>
    </div>

    <div class="flex flex-col lg:w-64 sm:w-44 lg:h-96 sm:h-72 bg-indigo-400 rounded-xl shadow-xl text-white">
        <div class="flex flex-row items-center justify-between lg:p-4 sm:p-2 ">
            <note class="bg-white rounded-xl p-2 lg:h-20 lg:w-20 sm:h-12 sm:w-12" />
            <p class="text-indigo-950 lg:text-5xl sm:text-3xl font-medium">02</p>
        </div>
        <div class="bg-white lg:w-48 sm:w-36 lg:text-xl sm:text-sm p-2 rounded-r-full text-indigo-950 border-l-8 border-white ">Pre Production</div>
        <p class="lg:p-4 sm:p-2 lg:text-base sm:text-xs text-justify ">At this stage, the team will conduct a location or company survey to set the location with a story before shooting and talent search or casting, as well as making a storyboard.
        </p>
    </div>

    <div class="flex flex-col lg:w-64 sm:w-44 lg:h-96 sm:h-72 bg-gray-100 rounded-xl shadow-xl text-indigo-950">
        <div class="flex flex-row items-center justify-between lg:p-4 sm:p-2 ">
            <vid class="bg-indigo-950 rounded-xl p-2 lg:h-20 lg:w-20 sm:h-12 sm:w-12" />
            <p class="text-gray-400 lg:text-5xl sm:text-3xl font-medium">03</p>
        </div>
        <div class="bg-gray-400 lg:w-48 sm:w-36 p-2 lg:text-xl sm:text-sm rounded-r-full border-l-8 border-indigo-950 ">Shooting</div>
        <p class="lg:p-4 sm:p-2 lg:text-base sm:text-xs text-justify">The filming process on location is in accordance with the concept with the storyboard that has been agreed with the client. So that when shooting there will be no mistakes or repetitions.
        </p>
    </div>

    <div class="flex flex-col lg:w-64 sm:w-36 lg:h-96 sm:h-72 bg-gray-100 rounded-xl shadow-xl text-indigo-950">
        <div class="flex flex-row items-center justify-between lg:p-4 sm:p-2 ">
            <cut class="bg-indigo-950 rounded-xl p-2 lg:h-20 lg:w-20 sm:h-12 sm:w-12" />
            <p class="text-gray-400 lg:text-5xl sm:text-3xl font-medium">04</p>
        </div>
        <div class="bg-gray-400 lg:w-48 sm:w-36 p-2 lg:text-xl sm:text-sm rounded-r-full border-l-8 border-indigo-950 ">Post Production</div>
        <p class="lg:p-4 sm:p-2 lg:text-base sm:text-xs text-justify">Once the video shooting has been completed, it will then be processed at the editing stage. Our team will edit according to the concept and produce the best output which is then sent to the client.
        </p>
    </div>
  </div> -->


<!-- portofolio -->
  <div class="flex flex-col max-w-h mx-auto items-center mt-20 lg:mt-32">
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
  <!-- <div class="flex lg:justify-between sm:justify-center sm:space-x-4  max-w-h mx-10 mt-20 text-indigo-950 items-center">
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



  <!-- behind -->
  <!-- <div class="flex flex-col max-w-h mx-auto items-center mt-20 lg:mt-32">
    <div class="text-xl font-semibold mt-4 text-indigo-950 md:text-2xl lg:text-4xl">
      Our Amazing Work
    </div>
  </div>
  <div class="max-w-h mx-10 flex flex-row bg-indigo-400 rounded-xl p-3 justify-between items-center space-x-5">
    <div class="flex flex-col">
      <p class="text-sm">Behind the Scenes of Our Expert Filming Services</p>
      <p class="text-xs text-nowra mt-2 text-white">Delve into the essence of creativity with our bts look at the process of our filmmaking services. Our team not only captures the moment but also the essence of your story. Trust us and discover the art that brings your vision to life.</p>
    </div>
    <img src="@/assets/img/behind.jpeg" class="h-40 rounded-xl">
  </div>
   <div class="flex flex-row max-w-h mx-10 p-4 lg:h-96 sm:h-80 mt-14 justify-between bg-indigo-400 rounded-xl">
    <div class="flex flex-col lg:ml-10 sm:ml-5 text-white text-justify lg:mt-2 sm:mt-5">
        <p class="flex lg:text-3xl sm:text-lg text-indigo-950">Behind the Scenes of Our Expert Filming Services</p>
        <p class="lg:text-2xl sm:text-sm text-justify font-light  mt-7">Delve into the essence of creativity with our bts look at the process of our film making services. Our team not only captures the moment but also the essence of your story. Trust us and discover the art that brings your vision to life.
        </p>
        <div class="flex mx-auto w-52 justify-center items-center mt-3 relative">
          <div class="flex w-44 p-3 justify-center bg-indigo-950 text-lg font-medium text-white rounded-full cursor-pointer">
            Booking Now    
          </div>
          <div class="flex absolute items-center  w-7 h-7 bg-white bottom-3 right-1 border border-indigo-950 rounded-full">
            <pnh2 class="-rotate-45 h-5"/>
          </div>
        </div>
    </div>
        <img src="@/assets/img/behind.jpeg" class="lg:h-80 sm:h-44 rounded-xl lg:ml-24 sm:ml-5 lg:mt-5 sm:mt-0 mr-5">
        
  </div> --> 


  <!-- questions -->
  <div class="max-w-h flex flex-row mx-7 mt-14 justify-between md:mx-16 lg:mx-20">
    <div class="flex flex-col">
      <p class="text-lg md:text-2xl lg:text-4xl">Do you have any questions?</p>
      <p class="text-xs mt-1 md:text-base lg:text-2xl lg:mt-3 lg:font-light">Put your email address and get started</p>
    </div>
    <div class="flex flex-row items-center justify-between w-56 h-10 border border-indigo-950 rounded-md text-xs px-2 translate-y-1.5 md:w-72 md:h-14 md:translate-y-1.5 lg:w-6/12 lg:h-20 lg:text-xl">
      <p class="lg:ml-3">Enter Your Email Address</p>
      <pesawat class="w-7 h-7 bg-indigo-400 p-1 rounded-xl md:w-10 md:h-10 lg:h-14 lg:w-14 lg:mr-3 "/>
    </div>
  </div>
  <!-- <div class="flex flex-row justify-between items-center max-w-h lg:mx-32 sm:mx-12 mt-32 lg:mb-0 sm:mb-12">
    <div class="flex flex-col text-indigo-950">
        <p class="lg:text-4xl sm:text-xl ">
            Do you have any questions?
        </p>
        <p class="lg:text-2xl sm:text-lg mt-4 font-light">
            Put your email address and get started
        </p>
    </div>
        <div class="flex flex-row justify-between items-center h-16 rounded-xl border-2 border-indigo-950 w-6/12 px-2 " >
            Enter your email address
            <pesawat class="w-10 h-10 p-2 bg-indigo-400 rounded-xl"/>
        </div>
  </div> -->


</template>