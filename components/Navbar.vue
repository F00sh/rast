<template>
  <nav class="absolute top-0 left-0 w-full z-50 flex items-center justify-between bg-transparent p-4">
    <!-- Left Section: Logo (Double Size) -->
    <div>
      <img src="~/assets/logo_img.svg" alt="Logo" class="h-28 w-auto" />
      <!-- 
        If needed, invert the SVG color by replacing 
        `class="h-20 w-auto"` with:
        class="h-20 w-auto filter invert brightness-0"
      -->
    </div>

    <!-- Right Section: Desktop Buttons -->
    <div class="hidden md:flex gap-4">
      <button
        class="bg-transparent border border-white rounded-md text-white px-4 py-2 transition-colors hover:bg-white/50">
        About
      </button>
      <button
        class="bg-transparent border border-white rounded-md text-white px-4 py-2 transition-colors hover:bg-white/50">
        Work
      </button>
      <button
        class="bg-transparent border border-white rounded-md text-white px-4 py-2 transition-colors hover:bg-white/50">
        Contact
      </button>
    </div>

    <!-- Hamburger Button (Mobile Only) -->
    <button
      class="md:hidden bg-transparent border border-white rounded-md text-white px-4 py-2 transition-colors hover:bg-white/50"
      @click="toggleMenu">
      Rast.
    </button>
  </nav>

  <!-- Mobile Slide-in Menu -->
  <div class="fixed top-0 left-0 h-screen w-64 bg-black/80 backdrop-blur-sm p-4
           transform transition-transform duration-300 z-[999]"
    :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'">
    <!-- Close Button -->
    <button class="text-white text-2xl float-right mb-4 cursor-pointer bg-transparent border-none" @click="toggleMenu">
      ×
    </button>

    <ul class="list-none mt-8 space-y-4">
      <li>
        <button
          class="w-full text-left bg-transparent border border-white rounded-md text-white px-4 py-2 transition-colors hover:bg-white/50"
          @click="toggleMenu">
          About
        </button>
      </li>
      <li>
        <button
          class="w-full text-left bg-transparent border border-white rounded-md text-white px-4 py-2 transition-colors hover:bg-white/50"
          @click="toggleMenu">
          Work
        </button>
      </li>
      <li>
        <button
          class="w-full text-left bg-transparent border border-white rounded-md text-white px-4 py-2 transition-colors hover:bg-white/50"
          @click="toggleMenu">
          Contact
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
