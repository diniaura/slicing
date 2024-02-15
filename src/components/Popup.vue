<template>
    <!-- font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap" rel="stylesheet">

    <div class="border rounded-xl shadow-xl" @click="openModal('modelConfirm')">
        <div class="w-14 h-14 items-center justify-center bg-indigo-950 rounded-full flex fixed bottom-24 right-10 cursor-pointer">
             <arrowdown class="rotate-180 w-8 h-8"/>
        </div>
    </div>
 
    <div id="modelConfirm" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto">
        <div class="relative top-20 mx-auto max-w-md bg-gray-300 sm:w-full p-8"> 
            <div class="p-2 pt-0 text-center">
                <div class="flex items-center justify-between">
                    <img src="@/assets/img/logo2.png" class="h-24 w-16 mr-4" alt="Lenscape Logo">
                    <div class="font-custom text-right text-2xl text-indigo-950 font-bold">
                        <p class="mb-1">Welcome to</p>
                        <p class="mb-0">Lenscape</p>
                        <p class="mt-1">How can we help?</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative flex flex-col top-20 mx-auto max-w-md sm:w-full bg-white py-16 px-6 space-y-1 justify-start">
            <div class="flex w-fit py-2 px-3 bg-indigo-400 rounded-xl shadow-xl -translate-y-12">
                <p class="font-custom text-white">Hello 😄</p>
            </div>

            <div class="flex max-w-44 p-2 px-3 bg-indigo-400 rounded-t-xl rounded-br-xl shadow-xl -translate-y-12">
                <p class="font-custom text-white">We'll help you find the right choice</p>
            </div>

            <div class="flex w-full translate-y-12 h-14 mx-auto p-2 px-4 bg-gray-300 rounded-full justify-center">
                <input type="text" class="font-custom bg-transparent focus:outline-none w-full h-full" placeholder="Type message...">
                <send class="w-8 h-10 cursor-pointer" @click="closeModal('modelConfirm')"/>
            </div>
        </div>
        
        <div class="relative flex flex-col top-20 mx-auto max-w-md sm:w-full shadow-xl rounded-b-md bg-indigo-400 p-4 justify-start"> 
            <p class="font-custom text-center text-white font-medium text-xl">Message</p>
        </div>
    </div> 
</template>

<!-- style font -->
<style>
.font-custom {
  font-family: 'Poppins', sans-serif;
}
</style>
 
<script setup>
import arrowdown from '@/assets/icons/arrowdown.vue'
import send from '@/assets/icons/send.vue'

const openModal = (modalId) => {
    document.getElementById(modalId).classList.remove('hidden');
    document.body.classList.add('overflow-y-hidden');
};

const closeModal = (modalId) => {
    document.getElementById(modalId).classList.add('hidden');
    document.body.classList.remove('overflow-y-hidden');
};

// Close all modals when pressing ESC
document.onkeydown = function(event) {
    event = event || window.event;
    if (event.keyCode === 27) {
        document.body.classList.remove('overflow-y-hidden');
        const modals = document.getElementsByClassName('modal');
        Array.from(modals).forEach(modal => {
            modal.classList.add('hidden');
        });
    }
};
</script>

