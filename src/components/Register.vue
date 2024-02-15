<script setup>
import arrowleft from '@/assets/icons/arrowleft.vue';
import x from '@/assets/icons/x.vue';
</script>

<template>
  <!-- font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap" rel="stylesheet">

  <!-- kotak keseluruhan -->
    <div class="flex items-center justify-center min-h-screen bg-gray-100 py-20">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">

        <!-- logo -->
        <div class="flex justify-center">
          <img src="@/assets/img/logo3.png" class="h-16 w-30" alt="Lenscape Logo">
        </div>

        <!-- h-create -->
        <div class="text-center py-8">
          <h3 class="font-custom text-xl font-bold text-indigo-950">Create new account</h3>
        </div>

        <!-- from input -->
        <div class="mb-4">
          <div class="bg-gray-100 rounded-full px-3 py-2 w-full shadow-lg flex items-center justify-center">
            <arrowleft class="w-11 px-2 cursor-pointer"/><p class="font-custom font-semibold text-sm text-indigo-950">Continue with Google, Facebook, or Apple</p>
          </div>
        </div>
        
        <!-- h-or create -->
        <div class="text-center py-6">
          <h3 class="font-custom text-sm font-semibold text-indigo-950 ">Or Create an account with email </h3>
        </div>

        <div class="flex flex-col space-y-7">
          <div class="flex flex-row justify-between space-x-8">
            <!-- first name -->
            <div class="flex flex-col space-y-1">
              <input type="text" class="font-custom bg-transparent focus:outline-none w-full h-full" placeholder="First Name">
              <div class="border-t-2 border-black"></div>
            </div>

            <!-- last name -->
            <div class="flex flex-col space-y-1">
              <input type="text" class="font-custom bg-transparent focus:outline-none w-full h-full" placeholder="Last Name">
              <div class="border-t-2 border-black"></div>
            </div>
          </div>

          <!-- email -->
          <div class="relative space-y-1">
            <input type="text" class="font-custom bg-transparent focus:outline-none w-full h-full" placeholder="Email Address">
            <div class="border-t-2 border-black"></div>
          </div>

          <!-- password -->
          <div class="relative space-y-1">
            <input type="text" class="font-custom bg-transparent focus:outline-none w-full h-full" placeholder="Password">
            <div class="border-t-2 border-black"></div>
          </div>
        

          <!-- x -->
          <div class="grid grid-cols-2 justify-between">
            <div class="grid">
              <p class="font-custom text-xs text-red-500">x 8 characters minimum</p>
              <p class="font-custom text-xs text-red-500">x 1 lowercase letter</p>
            </div>

            <div class="grid">
              <p class="font-custom text-xs text-red-500">x 1 uppercase letter</p>
              <p class="font-custom text-xs text-red-500">x 1 number</p>
            </div>
          </div>
        </div>

        <!-- button -->
        <div class="flex flex-col items-center justify-center py-8">
          <div class="mb-0 w-full">
            <button class="font-custom bg-indigo-400 hover:bg-indigo-700 text-black font-medium py-2 px-4 w-full shadow-lg rounded-full focus:outline-none focus:shadow-outline" type="submit">
              Create an account
            </button>
          </div>
        </div>

        <!-- h-already -->
        <div class="text-center">
          <h3 class="font-custom text-sm font-semibold text-indigo-950 mt-0">Already have an account? <span style="text-decoration: underline; cursor: pointer;">Sign In</span></h3>
        </div>
      </div>
    </div>
</template>

<!-- style font -->
<style>
.font-custom {
  font-family: 'Poppins', sans-serif;
}
</style>