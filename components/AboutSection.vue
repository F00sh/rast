<template>
  <section
    class="relative w-full min-h-screen text-white p-8 flex flex-col items-center justify-center bg-cover bg-center bg-[url('/about_img.jpg')] md:bg-none md:bg-white md:text-emerald-600 md:flex-row md:items-start md:justify-start md:gap-16 md:pl-20"
  >
    <!-- MOBILE OVERLAY (emerald at 30% opacity, hidden on desktop) -->
    <div class="absolute inset-0 bg-emerald-500/30 md:hidden"></div>

    <!-- TEXT BLOCK -->
    <div class="relative md:w-1/2 text-center md:text-left">
      <!-- Larger Heading -->
      <h2 class="text-4xl md:text-6xl font-bold mb-4 md:mt-48">About us</h2>

      <!-- Larger Paragraph -->
      <p class="text-2xl md:text-3xl leading-relaxed">
        We specialize in custom garden solutions, transforming any outdoor space
        into a lush, vibrant, and functional oasis. From modern rooftop gardens
        to traditional backyard landscapes, our team of experts tailors each
        project to your unique vision.
      </p>
    </div>

    <!-- DESKTOP IMAGE (hidden on mobile, no margins) -->
    <div class="hidden md:block md:w-1/2">
      <img :src="about" alt="About Image" class="w-full h-auto object-cover" />
    </div>
  </section>
</template>

<script setup lang="ts">
import about from "~/assets/about_img.jpg";
// Static layout; no special logic is needed here.
</script>

<style scoped>
/* Tailwind handles most styling; add any custom overrides here if desired. */
</style>
