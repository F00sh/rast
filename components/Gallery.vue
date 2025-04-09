<template>
  <!-- Gallery Container -->
  <div id="galerija" class="bg-[#478957] lg:w-1/2 mx-auto pt-28">
    <h1 class="flex h-full font-montserrat text-white text-4xl lg:text-6xl font-black tracking-[0.8rem] lg:tracking-[1.5rem] uppercase ml-10 lg:ml-20">galerija</h1>
    <div class="bg-[var(--orange-dark)] h-1 w-1/3 mt-5 ml-10 lg:ml-20 mb-20"></div>
    <!-- Gallery Grid -->
    <div class="grid grid-cols-3 gap-1 p-1 lg:p-20 lg:pt-10">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="cursor-pointer"
        @click="openDialog(img)"
      >
        <img
          :src="img.src"
          :alt="img.alt"
          class="w-full h-auto square-image object-cover"
        />
      </div>
    </div>
  </div>

  <!-- Dialog Overlay (shows when dialogImage is set) -->
  <div
    v-if="dialogImage"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
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
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ImageType {
  src: string
  alt: string
}

const images = ref<ImageType[]>([
  { src: '/img/blog/berba_1.jpg', alt: 'Image 1' },
  { src: '/img/blog/berba_2.jpg', alt: 'Image 2' },
  { src: '/img/blog/berba_3.jpg', alt: 'Image 3' },
  { src: '/img/blog/berba_4.jpg', alt: 'Image 4' },
  { src: '/img/blog/berba_5.jpg', alt: 'Image 5' },
  { src: '/img/blog/bukovac.jpg', alt: 'Image 5' },
  { src: '/img/blog/bukovac_2.jpg', alt: 'Image 5' },
  { src: '/img/blog/bukovac_3.jpg', alt: 'Image 5' },
  { src: '/img/blog/bukovac_4.jpg', alt: 'Image 5' },
  { src: '/img/blog/bukovac_5.jpg', alt: 'Image 5' },
  { src: '/img/blog/bukovac_7.jpg', alt: 'Image 5' },
  { src: '/img/blog/bukovac_8.jpg', alt: 'Image 5' },
  { src: '/img/blog/bukovac_9.jpg', alt: 'Image 5' },
  { src: '/img/blog/bukovac_10.jpg', alt: 'Image 5' },
  { src: '/img/blog/bukovac_11.jpg', alt: 'Image 5' },
])

const dialogImage = ref<ImageType | null>(null)

function openDialog(image: ImageType) {
  dialogImage.value = image
}

function closeDialog() {
  dialogImage.value = null
}
</script>

<style scoped>
/* Ensure images are uniform in size */
img {
  border-radius: 4px;
  transition: transform 0.3s ease-in-out;
}

/* Make images square */
.square-image {
  aspect-ratio: 1 / 1;
}

/* Zoom effect on hover */
.square-image:hover {
  transform: scale(1.1);
}
</style>
