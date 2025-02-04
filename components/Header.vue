<template>
  <div  class="w-full h-screen flex flex-col items-center justify-start">
    
    <div v-if="isMobile" class="flex flex-col items-center justify-between w-full h-screen">
     <div class="absolute bg-emerald-400 w-11/12 lg:w-4/12 lg:h-2/5 pb-20 flex flex-col items-center justify-center rounded-b-full">
      <h1 class="text-white text-6xl lg:text-9xl text-center font-black mt-24 lg:mt-0">RAST</h1>
      <h2 class="text-white text-lg lg:text-2xl text-center font-medium uppercase mt-3 lg:mt-5 mx-20">uređenje zelenih površina</h2>
     </div> 
     <div class="absolute bg-emerald-400 bottom-0 h-2/3 mt-96 w-6/12 flex items-start justify-center rounded-t-full">
      <h1 class="text-white text-3xl font-medium uppercase pt-20">kontakt</h1>
     </div>
      
      <img src="/img/header_img.svg" alt="Header" 
           class="-z-40 top-0 w-full md:w-9/12 lg:w-8/12 h-2/3 object-cover rounded-b-full">
      
    </div>
    <div v-else  class="flex flex-col items-center w-full h-full">
     <div  class="absolute bg-emerald-400 w-4/12 pb-24 pt-28 flex flex-col items-center justify-center rounded-b-full">
      <h1 class="text-white text-6xl lg:text-9xl text-center font-black mt-24 lg:mt-0">RAST</h1>
      <h2 class="text-white text-lg lg:text-2xl text-center font-medium uppercase mt-3 lg:mt-5 mx-20">uređenje zelenih površina</h2>
     </div> 
      
      
      <img src="/img/header_img.svg" alt="Header" 
           class="-z-40 top-0 w-full md:w-9/12 lg:w-8/12 h-2/3 object-cover rounded-b-full">
      <ul class="flex flex-row items-start justify-center w-full pt-20 lg:pt-28 md:px-[115px] lg:px-[420px] pb-24 text-white text-2xl font-bold">
        <li class="flex items-center justify-center bg-emerald-400 w-full h-[70px] lg:h-[120px] md:mr-2 lg:mr-6 shadow-lg">O NAMA</li>
        <li class="flex items-center justify-center bg-emerald-400 w-full h-[70px] lg:h-[120px] md:mx-2 lg:mx-6 shadow-lg">USLUGE</li>
        <li class="flex items-center justify-center bg-emerald-400 w-full h-[70px] lg:h-[120px] md:ml-2 lg:ml-6 shadow-lg">KONTAKT</li>
      </ul>
    </div>

   
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Tracks if the window is less than 768px (the Tailwind "md" breakpoint)
const isMobile = ref(false)

function checkScreenSize() {
  // Compare with 768px
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>