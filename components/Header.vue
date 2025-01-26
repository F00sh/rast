<template>
    <!-- 
      Key classes:
      - `min-h-screen` : Occupies full viewport height
      - `flex items-center justify-center` : Centers content (vertically & horizontally)
      - `bg-[url('~/assets/vrt_portrait.jpg')] md:bg-[url('~/assets/vrt_landscape.jpg')]` :
        uses portrait image on mobile, switches to landscape on desktop
      - `text-6xl md:text-8xl` : Even larger headline on mobile (6xl) and desktop (8xl)
      - `text-3xl md:text-5xl` : Bigger subheading on mobile (3xl) and desktop (5xl)
    -->
    <header
      class="
        relative
        w-full
        min-h-screen
        text-white
        bg-cover bg-center
        px-8 py-12
        flex flex-col
        items-center
        justify-center
        bg-[url('~/assets/vrt_portrait.jpg')]
        md:bg-[url('~/assets/vrt_landscape.jpg')]
      "
    >
      <h1 class="mb-6 text-6xl font-bold md:text-8xl">
        Rast.
      </h1>
      <p class="text-3xl md:text-5xl">
        custom garden solutions
      </p>
    </header>
  </template>
  
  <script setup lang="ts">
  // No extra logic needed here for a static header
  </script>
  
  <style scoped>
  /* Tailwind handles most styling; add overrides here if needed. */
  </style>
  