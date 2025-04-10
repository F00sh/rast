<template>
  <!-- Dialog Overlay (now placed at the very top of the template) -->
  <div
    v-if="dialogImage"
    class="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75"
  >
    <div class="relative max-w-3xl mx-auto w-auto p-4">
      <!-- Close Button -->
      <button
        @click="closeDialog"
        class="absolute top-2 right-2 rounded-full bg-white p-2 shadow-md"
      >
        X
      </button>

      <!-- The clicked image -->
      <img
        :src="dialogImage.src"
        :alt="dialogImage.alt"
        class="max-w-full h-auto mx-auto"
      />
    </div>
  </div>

  <!-- Title & Section -->
  <div id="galerija" class="bg-[#478957] lg:w-1/2 mx-auto pt-28">
    <h1 class="flex h-full font-montserrat text-white text-4xl lg:text-6xl font-black tracking-[0.8rem] lg:tracking-[1.5rem] uppercase ml-10 lg:ml-20">
      galerija
    </h1>
    <div class="bg-[var(--orange-dark)] h-1 w-1/3 mt-5 ml-10 lg:ml-20 mb-20"></div>

    <!-- CAROUSEL (shown on mobile) -->
    <div
      v-if="isMobile"
      class="relative overflow-hidden w-full"
    >
      <!-- Slide Track -->
      <div
        class="flex transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <!-- Each image -->
        <div
          v-for="(img, index) in images"
          :key="index"
          class="w-full shrink-0 cursor-pointer"
          @click.stop="openDialog(img)" 
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full object-cover aspect-square"
          />
        </div>
      </div>

      <!-- Left Arrow -->
      <button
        class="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full shadow-md"
        @click="prevSlide"
      >
        <img src="/img/arrow.svg" alt="Left Arrow" class="w-9 h-9"/>
      </button>
      <!-- Right Arrow -->
      <button
        class="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full shadow-md"
        @click="nextSlide"
      >
        <img src="/img/arrow.svg" alt="Right Arrow" class="w-9 h-9 rotate-180"/>
      </button>
    </div>

    <!-- GRID (shown on desktop) -->
    <div
      v-else
      class="grid grid-cols-3 gap-1 p-1 lg:p-20 lg:pt-10"
    >
      <div
        v-for="(img, index) in images"
        :key="index"
        class="cursor-pointer"
        @click="openDialog(img)"
      >
        <img
          :src="img.src"
          :alt="img.alt"
          class="w-full h-auto aspect-square object-cover transition-transform duration-300 hover:scale-110 rounded"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

// Types
interface ImageType {
  src: string
  alt: string
}

// Images array
const images = ref<ImageType[]>([
  { src: '/img/blog/berba_1.jpg', alt: 'Image 1' },
  { src: '/img/blog/berba_2.jpg', alt: 'Image 2' },
  { src: '/img/blog/berba_3.jpg', alt: 'Image 3' },
  { src: '/img/blog/berba_4.jpg', alt: 'Image 4' },
  { src: '/img/blog/berba_5.jpg', alt: 'Image 5' },
  { src: '/img/blog/bukovac.jpg', alt: 'Image 6' },
  // ... etc.
])

// Dialog logic
const dialogImage = ref<ImageType | null>(null)
function openDialog(image: ImageType) {
  dialogImage.value = image
}
function closeDialog() {
  dialogImage.value = null
}

// Responsive detection
const isMobile = ref(false)
onMounted(() => {
  // Check initial size
  isMobile.value = window.innerWidth < 768
  // Listen to resize
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
})

// Carousel logic
const currentSlide = ref(0)

function nextSlide() {
  currentSlide.value =
    currentSlide.value === images.value.length - 1
      ? 0
      : currentSlide.value + 1
}

function prevSlide() {
  currentSlide.value =
    currentSlide.value === 0
      ? images.value.length - 1
      : currentSlide.value - 1
}
</script>

<style scoped>
/* Additional styling as desired */
</style>
