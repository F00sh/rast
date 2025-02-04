<template>
  <!-- Overall container -->
  <div class="relative w-full min-h-screen">
    <!-- MOBILE layout (v-if) -->
    <div v-if="isMobile" class="relative flex flex-col">
      <!-- Mobile: Full-width image, then text below -->
      <img
        src="/img/about_img.jpg"
        alt="About"
        class="w-full h-64 object-cover rounded-b-xl"
      />

      <!-- Mobile overlay / short highlights -->
      <div class="flex flex-col bg-emerald-400 bg-opacity-70 p-4 text-white">
        <h1 class="text-4xl font-black my-2">O NAMA (Mobile)</h1>
        <p class="text-sm my-2">Visoka razina stručnosti i pažnja prema detaljima</p>
        <p class="text-sm my-2">Brza i učinkovita izvedba radova</p>
        <p class="text-sm my-2">Moderna oprema koja omogućuje optimalne rezultate</p>
        <p class="text-sm my-2">Stručni tim koji razumije potrebe svakog projekta</p>
      </div>

      <!-- Mobile long text -->
      <div class="bg-white text-slate-800 p-4 text-justify flex flex-col space-y-4">
        <h2 class="uppercase font-semibold">
          S Rastom, vaš vrt ili okućnica postaje prostor u kojem možete uživati tijekom cijele godine.
        </h2>
        <h2 class="uppercase font-light">
          Rast je tvrtka specijalizirana za uređenje okućnica, vrtova i zelenih površina...
        </h2>
        <!-- ...continue your text... -->
      </div>
    </div>

    <!-- MEDIUM and larger layout (v-else) -->
    <div v-else class="relative flex min-h-screen">
      <!-- Medium/Large: Image on the left (or partially), overlay text on top -->
      <img
        src="/img/about_img.jpg"
        alt="About"
        class="
          w-full
          md:w-9/12
          lg:w-8/12
          object-cover
          rounded-r-full
        "
      />
      <div class="absolute inset-0 bg-black bg-opacity-70 flex flex-col md:flex-col-reverse">
        <!-- Big "O NAMA" heading block -->
        <div
          class="
            bg-emerald-400
            text-white
            font-black
            p-10
            rounded-r-full
            md:text-end
          "
        >
          <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">O NAMA</h1>
        </div>

        <!-- Short highlights -->
        <div class="flex flex-col text-white text-center mb-4 md:ml-10 lg:py-8 space-y-3">
          <h2 class="text-lg md:text-xl lg:text-2xl font-bold uppercase bg-transparent py-2 px-3">
            Visoka razina stručnosti i pažnja prema detaljima
          </h2>
          <h2 class="text-lg md:text-xl lg:text-2xl font-bold uppercase bg-emerald-400 py-2 px-3 rounded-l-full">
            Brza i učinkovita izvedba radova
          </h2>
          <h2 class="text-lg md:text-xl lg:text-2xl font-bold uppercase bg-emerald-400 py-2 px-3 rounded-l-full">
            Moderna oprema koja omogućuje optimalne rezultate
          </h2>
          <h2 class="text-lg md:text-xl lg:text-2xl font-bold uppercase bg-emerald-400 py-2 px-3 rounded-l-full">
            Stručni tim koji razumije potrebe svakog projekta
          </h2>
        </div>

        <!-- Long text -->
        <div class="w-full text-slate-800 p-4 md:px-10 lg:px-24 text-justify flex flex-col space-y-4 bg-white/90">
          <h2 class="uppercase font-semibold">
            S Rastom, vaš vrt ili okućnica postaje prostor u kojem možete uživati tijekom cijele godine.
          </h2>
          <h2 class="uppercase font-light">
            Rast je tvrtka specijalizirana za uređenje okućnica, vrtova i zelenih površina...
          </h2>
          <!-- ...continue your text... -->
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
