<template>
  <div class="w-full h-full flex flex-col items-center">
    <div class="w-full h-full flex flex-col items-center justify-start mt-28 lg:px-0">
      <div class="flex flex-col w-full lg:w-1/2 items-start justify-center text-center">
          <img class="" src="/public/img/camera_1.svg" alt="">
          <h1 class="bg-[#1D713D] flex h-full w-full font-montserrat text-white text-4xl lg:text-6xl font-black tracking-[0.8rem] lg:tracking-[1.5rem] uppercase pl-10 lg:pl-20 py-5 lg:py-10">Galerija</h1>
      </div>

      <div name="image_slider" class="relative w-full lg:w-4/12 overflow-hidden bg-white rounded-lg shadow-lg">
      <div class="flex transition-transform duration-500 ease-in-out w-full flex-nowrap"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
          <img :src="image.url" alt="Carousel Image" class="w-full h-80 object-cover" />
        </div>
      </div>

      <button @click="prevSlide"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-8 h-8 rounded-full shadow-md hover:bg-gray-600 transition z-10 pointer-events-auto">
        ⬅
      </button>
      <button @click="nextSlide"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white w-8 h-8 rounded-full shadow-md hover:bg-gray-600 transition z-10 pointer-events-auto">
        ➡
      </button>
    </div>

    <div name="description" class="bg-teal-300 flex items-center justify-center w-full lg:w-4/12 py-5">
      <h3 class="text-center text-white text-xl uppercase font-medium">
        {{ images[currentIndex].description }}
      </h3>
    </div>
  </div>  
  </div>


</template>

<script setup lang="ts">
import { ref } from "vue";

type ImageSlide = {
  url: string;
  description: string;
};

const images = ref<ImageSlide[]>([
  { url: "/img/services_1.jpg", description: "Opis slike 1: Usluge" },
  { url: "/img/about_1.jpg", description: "Opis slike 2: O nama" },
  { url: "/img/header_1.jpg", description: "Opis slike 3: Header" },
]);

const currentIndex = ref<number>(0);

const nextSlide = (): void => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevSlide = (): void => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};
</script>
