<template>
  <!-- Overall container -->
  <div class="relative w-full min-h-screen">
    
    <!-- MOBILE layout (v-if) -->
    <div v-if="isMobile" class="h-screen relative flex flex-col items-center">
      <img
        src="/img/about_img.jpg"
        alt="About"
        class="absolute -z-10 w-full h-1/2 object-cover rounded-r-full"
      />
      <div class="absolute shadow-xl bg-emerald-400 h-1/6 w-6/12 flex flex-col items-center justify-center rounded-b-full">
        <h1 class="text-white text-4xl uppercase font-bold">o nama</h1>
      </div>
    </div>

    <!-- MEDIUM and larger layout (v-else) -->
    <div v-else class="relative flex h-full w-full">
      <!-- Medium/Large: Image on the left (or partially), overlay text on top -->
      <img
        src="/img/about_img.jpg"
        alt="About"
        class="
          absolute
          -z-20
          w-2/3
          h-full
          object-cover
          rounded-r-full"/>
      <div class="absolute z-auto h-screen w-screen flex items-center justify-start">
      <div class="bg-emerald-400 flex items-center justify-end w-1/3 h-1/6 rounded-r-full">
        <h1 class="text-white text-7xl font-bold pr-20">O NAMA</h1>
      </div>
      <div>
        <h2>radimo to i to</h2>
      </div>
    </div>
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
