<template>
  <!-- The navbar container (fixed). 
       We'll animate it off-screen when scrolling. -->
  <nav
    class="mobile-only fixed top-0 right-0 w-full h-[60px] flex items-center justify-end px-4 transition-transform duration-300 z-50"
    :class="{ '-translate-y-full': hideNavbar }"
  >
    <!-- The toggle button (top-right). -->
    <button class="text-white text-lg" @click="toggleNavbar">
      {{ navbarOpen ? 'Close' : 'Menu' }}
    </button>

    <!-- The overlay with blur, appears only if navbarOpen is true. -->
    <transition name="fade">
      <div
        v-if="navbarOpen"
        class="fixed inset-0 backdrop-blur-sm bg-black/50 flex flex-col items-center justify-center"
      >
        <!-- 3 NuxtLink items -->
        <NuxtLink
          to="/#about"
          class="text-xl text-white mt-4"
          @click="toggleNavbar"
        >
          O nama
        </NuxtLink>
        <NuxtLink
          to="/#usluge"
          class="text-xl text-white mt-4"
          @click="toggleNavbar"
        >
          Usluge
        </NuxtLink>
        <NuxtLink
          to="/#galerija"
          class="text-xl text-white mt-4"
          @click="toggleNavbar"
        >
          Galerija
        </NuxtLink>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { NuxtLink } from '#components'

// Whether the navbar is open (showing the overlay)
const navbarOpen = ref(false)
// Whether we hide the navbar (slide up off-screen)
const hideNavbar = ref(false)

// Toggle the navbar
function toggleNavbar() {
  navbarOpen.value = !navbarOpen.value
}

// If user scrolls down, hide the navbar
function onScroll() {
  // If the user has scrolled at all, hide the navbar
  hideNavbar.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.desktop-only {
  display: none;
}

@media screen and (min-width: 1024px) {
  .desktop-only {
    display: flex;
  }
}

.mobile-only {
  display: none;
}

@media screen and (max-width: 1024px) {
  .mobile-only {
    display: flex;
  }
}
/* Fade transition for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide-up class (we apply -translate-y-full if hideNavbar) */
.-translate-y-full {
  transform: translateY(-100%);
}
</style>
