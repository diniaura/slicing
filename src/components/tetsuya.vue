<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
.tetsuya {
  font-family: 'Permanent Marker', cursive;
}
</style>

<template>
  <div>
    <header class="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-2xl">
      <nav>
        <div
          class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
          <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="@/assets/img/logo.png" class="h-14" alt="Flowbite Logo" />
            <span class="text-white text-2xl tetsuya"> Fahrizal.dev</span>
          </div>

          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-blue-500 duration-300 "
            aria-controls="navbar-default"
            aria-expanded="false"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Toggle menu</span>
            <div v-if="!isMobileMenuOpen">
              <!-- Burger icon when the menu is closed -->
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
            <div v-else>
              <!-- X icon when the menu is open -->
              <svg
  class="w-10 h-10 text-red-500" 
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M6 18L18 6M6 6l12 12"
  />
</svg>
            </div>
          </button>

          <!-- Mobile menu items -->
          <div
            v-if="isMobileMenuOpen"
            class="w-full md:hidden"
            id="navbar-default"
          >
            <ul
              class="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg"
            >
              <li>
                <a
                  href="#"
                  class="block tetsuya py-2 px-3 text-white bg-blue-700 rounded dark:text-white"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 tetsuya px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 tetsuya text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 tetsuya text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent"
                  >Pricing</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 tetsuya text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:text-blue-500 dark:hover:bg-transparent"
                  >Contact</a
                >
              </li>
            </ul>
          </div>

          <!-- Desktop menu items -->
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 tetsuya text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 tetsuya text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 tetsuya text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 tetsuya text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Pricing</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 tetsuya text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Output Content -->
    <div>
      <slot />
    </div>
  </div>
</template>