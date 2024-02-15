<script setup>
import Header from './Header.vue';
import cart from '@/assets/icons/cart.vue';
import ServicesCard2 from './ServicesCard2.vue';
import Footer from './Footer.vue';
</script>

<template>
  <main class="text-white bg-white">
    <!-- Header -->
    <Header photo="src/assets/img/foods.png" caption="Product Photoshoot" />

    <!-- Process -->
    <div class="h-auto md:h-auto lg:h-auto mx-7 my-4">
      <div class="flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-4xl lg:text-3xl lg:mt-28 font-semibold">
        Product Photography Process
      </div> 
      <div class="mt-7 lg:px-14 justify-center text-center text-base md:text-lg lg:text-xl text-slate-800">
        Ship us your products, and we'll shoot and deliver high-quality product photos.
      </div>
      <!-- Cards -->
      <div class="grid gap-7 grid-cols-1 md:grid-cols-2 lg:flex justify-center items-center place-items-center mt-8">
        <div class="flex flex-row place-items-center space-x-5 justify-center md:justify-start">
          <div class="flex flex-col place-items-center">
            <div class="flex shadow-xl p-7 w-28 h-28 justify-center">
              <cart class="w-5/6"/>
            </div>
            <p class="font-semibold text-indigo-950 mt-4 text-base md:text-lg lg:text-xl text-center md:text-left">Book your shoot online</p>
          </div>
          <div class="flex flex-col place-items-center">
            <div class="flex shadow-xl p-7 w-28 h-28 justify-center">
              <cart class="w-5/6"/>
            </div>
            <p class="font-semibold text-indigo-950 mt-4 text-base md:text-lg lg:text-xl text-center md:text-left">Ship or drop off your products</p>
          </div>
          <div class="flex flex-col place-items-center">
            <div class="flex shadow-xl p-7 w-28 h-28 justify-center">
              <cart class="w-5/6"/>
            </div>
            <p class="font-semibold text-indigo-950 mt-4 text-base md:text-lg lg:text-xl text-center md:text-left">Review. Pay. Download.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Services -->
    <div class="h-auto md:h-auto lg:h-auto mx-7 mt-20">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        Services
      </div>
      <div class="flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-3xl lg:text-3xl font-semibold">
        The best choice for you
      </div>
      <div class="mt-7 lg:px-14 justify-center text-center text-base md:text-lg lg:text-xl text-slate-800">
        We provide several choices of photography product services
      </div>
      <!-- Cards -->
      <div class="mt-10">
        <ServicesCard2 />
      </div>
    </div>

    <!-- Portofolio -->
    <div class="h-auto md:h-auto lg:h-auto mx-7 mt-20">
      <div class="flex w-28 mx-auto p-2 bg-indigo-950 rounded-full justify-center shadow-xl">
        Portofolio
      </div>
      <div class="flex mx-auto text-center justify-center mt-7 text-indigo-950 text-3xl md:text-3xl lg:text-3xl font-semibold">
        Our Amazing Work
      </div>
    </div>
    <!--image-->
    <div class="bg-white h-full w-full py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"></div>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6 mx-10 xl:gap-8">
            <a href="#" class="group relative max-h-fit items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg row-span-2 md:col-span-2">
                <img src="@/assets/img/porto2(1).jpg" alt="" class="absolute inset-0 w-full h-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
            <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="@/assets/img/porto2(2).jpg" alt="" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
            <a href="#" class="group relative flex h-52 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-52">
                <img src="@/assets/img/porto2(3).jpg" alt="" class="absolute inset-0 w-full h-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
            <a href="#" class="group relative flex h-48 w-full items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-52">
                <img src="@/assets/img/porto2(4).jpg" alt="" class="absolute inset-0 w-full h-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
            <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="@/assets/img/porto2(5).jpg" alt="" class="absolute inset-0 w-full h-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
            <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="@/assets/img/porto2(6).jpg" alt="" class="absolute inset-0 w-full h-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
            <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="@/assets/img/porto2(7).jpg" alt="" class="absolute inset-0 w-full h-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
        </div>
        </div>
    </div>



    <!--FAQ-->
    <div class="flex justify-between mx-14 text-black">
    <ul class="max-w-2xl mx-auto mt-20 divide-y ">
        <li>
            <details class="group">
                <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                    <svg class="w-5 h-5 text-gray-900 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                        </path>
                    </svg>
                    <span>What am I getting as a Premium Member?</span>
                </summary>

                <article class="px-4 pb-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                        porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.
                    </p>
                </article>
            </details>
        </li>
        <li>
            <details class="group">
                <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                    <svg class="w-5 h-5 text-gray-900 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                        </path>
                    </svg>
                    <span>What am I getting as a Premium Member?</span>
                </summary>

                <article class="px-4 pb-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                        porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. </p>
                </article>
            </details>
        </li>
        <li>
            <details class="group">
                <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                    <svg class="w-5 h-5 text-gray-900 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                        </path>
                    </svg>
                    <span>What am I getting as a Premium Member?</span>
                </summary>

                <article class="px-4 pb-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                        porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. </p>
                </article>
            </details>
        </li>
        <li>
            <details class="group">
                <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                    <svg class="w-5 h-5 text-gray-900 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                        </path>
                    </svg>
                    <span>What am I getting as a Premium Member?</span>
                </summary>

                <article class="px-4 pb-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                        porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. </p>
                </article>
            </details>
        </li>
    </ul>
    <ul class="max-w-2xl mx-auto mt-20 divide-y">
        <li>
            <details class="group">
                <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                    <svg class="w-5 h-5 text-gray-900 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                        </path>
                    </svg>
                    <span>What am I getting as a Premium Member?</span>
                </summary>

                <article class="px-4 pb-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                        porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.
                    </p>
                </article>
            </details>
        </li>
        <li>
            <details class="group">
                <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                    <svg class="w-5 h-5 text-gray-900 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                        </path>
                    </svg>
                    <span>What am I getting as a Premium Member?</span>
                </summary>

                <article class="px-4 pb-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                        porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. </p>
                </article>
            </details>
        </li>
        <li>
            <details class="group">
                <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                    <svg class="w-5 h-5 text-gray-900 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                        </path>
                    </svg>
                    <span>What am I getting as a Premium Member?</span>
                </summary>

                <article class="px-4 pb-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                        porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. </p>
                </article>
            </details>
        </li>
        <li>
            <details class="group">
                <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                    <svg class="w-5 h-5 text-gray-900 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                        </path>
                    </svg>
                    <span>What am I getting as a Premium Member?</span>
                </summary>

                <article class="px-4 pb-4">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                        porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. </p>
                </article>
            </details>
        </li>

    </ul>
</div>

    <Footer />

  </main>
</template>