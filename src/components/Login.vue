<script setup>
import google from '@/assets/icons/google.vue';
import facebook from '@/assets/icons/facebook.vue';
import apple from '@/assets/icons/apple.vue';
</script>

<template>
  <!-- font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap" rel="stylesheet">

  <!-- kotak keseluruhan -->
    <div class="flex items-center justify-center min-h-screen bg-gray-100 py-20">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-sm">

        <!-- logo -->
        <div class="flex justify-center">
          <img src="@/assets/img/logo3.png" class="h-16 w-30" alt="Lenscape Logo">
        </div>

        <!-- h-login -->
        <div class="text-center py-8">
          <h3 class="font-custom  text-xl font-bold text-indigo-950">Log In</h3>
        </div>

       <!-- from input -->
       <div class="mb-4">
        <div class="bg-gray-100 rounded-full px-3 py-2 w-full shadow-lg flex items-center">
          <google class="mr-2 h-8 cursor-pointer"/>
          <p class="font-custom font-semibold text-indigo-950 cursor-pointer">Continue with Google</p>
        </div>
      </div>

      <div class="mb-4">
        <div class="bg-gray-100 rounded-full px-3 py-2 w-full shadow-lg flex items-center">
          <facebook class="mr-2 h-8 cursor-pointer"/>
          <p class="font-custom font-semibold text-indigo-950 cursor-pointer">Continue with Facebook</p>
        </div>
      </div>

      <div class="mb-4">
        <div class="bg-gray-100 rounded-full px-3 py-2 w-full shadow-lg flex items-center">
          <apple class="mr-2 h-8 cursor-pointer"/>
          <p class="font-custom font-semibold text-indigo-950 cursor-pointer">Continue with Apple</p>
        </div>
      </div>

      <!-- h-or sign -->
      <div class="text-center py-8">
        <h3 class="font-custom text-sm font-medium text-indigo-950">Or Sign In with email </h3>
      </div> 

      <!-- from input email & pw -->
      <div class="relative">
        <div class="absolute top-0 left-0 w-full text-center">
        </div>
        <input type="text" class="font-custom bg-transparent focus:outline-none w-full h-full" placeholder="Email Address">
        <div class="border-t-2 border-black"></div>
      </div>

      <div class="relative py-6">
        <div class="absolute top-0 left-0 w-full text-center">
        </div>
        <input type="text" class="font-custom bg-transparent focus:outline-none w-full h-full" placeholder="Password">
        <div class="border-t-2 border-black"></div>
      </div>

      <!-- forgot pw -->
      <p class="mt-0 text-right text-gray-500"> <!-- geser ke kanan -->
        <a href="#" class="font-custom underline">Forgot password?</a> <!-- tambah garis di bawah teks -->
      </p>

      <!-- button -->
      <div class="flex flex-col items-center justify-center py-8">
        <div class="mb-4  w-full">
          <button class="font-custom bg-indigo-400 hover:bg-indigo-700 text-black font-medium py-2 px-4 w-full shadow-lg rounded-full focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
        </div>
        <div class="text-center mb-4"> 
          <h3 class="font-custom text-sm font-medium text-indigo-950">Or</h3>
        </div>
        <div class="mb-4  w-full">
          <button class="font-custom bg-gray-300 hover:bg-gray-700 text-black font-medium py-2 px-4 w-full shadow-lg rounded-full focus:outline-none focus:shadow-outline" type="submit">
            Create Account
          </button>
        </div>
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
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async login() {
        // Implement your login logic here
      }
    }
  }
  </script>