<template>
  <div class="flex min-h-screen flex-col md:flex-row">
    <!-- LEFT SIDE: Headline & small text about gallery -->
    <div
      class="
        w-full
        md:w-1/3
        bg-emerald-400
        text-white
        p-8
        flex
        flex-col
        justify-center
        items-start
      "
    >
      <!-- Main headline -->
      <h1 class="text-4xl md:text-5xl font-black mb-4 uppercase">
        Galerija
      </h1>

      <!-- Small text about gallery -->
      <p class="text-base md:text-lg bg-violet-400 bg-opacity-80 rounded-r-full p-3">
        Ovdje možete pogledati našu kolekciju fotografija s raznih projekata i
        pronaći inspiraciju za svoje ideje.
      </p>
    </div>

    <!-- RIGHT SIDE: Carousel -->
    <div class="flex-1 p-8 flex flex-col items-center justify-center">
      <!-- Carousel Container (closed canvas) -->
      <div
        class="relative w-full max-w-2xl overflow-hidden border border-slate-300 shadow-lg rounded-md"
      >
        <!-- Slide track -->
        <div
          class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <!-- Each image in the array -->
          <div
            v-for="(img, i) in images"
            :key="img"
            class="flex-shrink-0 w-full"
          >
            <img
              :src="img"
              alt="Gallery Image"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>

        <!-- Prev Button -->
        <button
          class="absolute top-1/2 left-4 -translate-y-1/2 bg-violet-400 text-white px-4 py-2 rounded-full"
          @click="prevSlide"
        >
          Prev
        </button>

        <!-- Next Button -->
        <button
          class="absolute top-1/2 right-4 -translate-y-1/2 bg-violet-400 text-white px-4 py-2 rounded-full"
          @click="nextSlide"
        >
          Next
        </button>
      </div>

      <!-- Text below the carousel (fade transition) -->
      <transition name="fade">
        <h2
          v-if="displayName"
          :key="displayName"
          class="mt-4 text-lg md:text-xl uppercase font-semibold text-slate-700"
        >
          {{ displayName }}
        </h2>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 1) Image array from /public/img/blog
//    Make sure these files exist: berba_1.jpg, berba_2.jpg, etc.
const images = [
  '/img/blog/berba_1.jpg',
  '/img/blog/berba_2.jpg',
  '/img/blog/berba_3.jpg',
  '/img/blog/berba_4.jpg',
  '/img/blog/berba_5.jpg'
]

// 2) Track which image is currently displayed
const currentIndex = ref(0)

// 3) For displaying text below the image, ignoring digits & underscores
const displayName = computed(() => {
  if (!images.length) return ''
  const fullPath = images[currentIndex.value]
  // Extract filename (e.g. "berba_1" from "/img/blog/berba_1.jpg")
  const fileName = fullPath.substring(
    fullPath.lastIndexOf('/') + 1,
    fullPath.lastIndexOf('.')
  )
  // Remove digits (0-9) and underscores (_)
  return fileName.replace(/[0-9_]/g, '')
})

// 4) Next/Prev slide functions
function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}
</script>

<style scoped>
/* Fade transition for the text below the carousel */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
