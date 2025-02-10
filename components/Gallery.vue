<template>
  <div class="w-full h-screen flex flex-col items-center justify-start px-14">
    <div name="title" class="w-full flex flex-col items-center pb-14">
      <h1 class="bg-green-400 lg:w-4/12 text-center text-white text-5xl font-black uppercase py-10">
        Slike
      </h1>
    </div>

    <div name="image_slider" class="relative w-full lg:w-4/12 h-80 overflow-hidden bg-white rounded-lg shadow-lg">
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
