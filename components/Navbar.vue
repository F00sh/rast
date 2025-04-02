<template>
  <div class="sticky">
    <!-- Navbar Container (Sticky) -->
    <div class="relative top-0 z-50">
      <div class="absolute top-0 w-full h-24 flex justify-between items-center px-4">
        <!-- Logo -->
        <div class="h-28 w-28 flex items-center justify-center p-5">
          <a href="#home">
            <img src="/img/logo_img.svg" alt="Logo" />
          </a>
        </div>
        <!-- Desktop Horizontal Menu (Large screens and above) -->
        <div class="hidden lg:block text-white text-xl font-semibold">
          <ul class="flex pr-5 space-x-5">
            <li class="bg-green-300 py-2 px-4 shadow-md">
              <a href="#about">about</a>
            </li>
            <li class="bg-green-300 py-2 px-4 shadow-md">
              <a href="#services">services</a>
            </li>
            <li class="bg-green-300 py-2 px-4 shadow-md">
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
        <!-- Mobile Menu Button (Small & Medium screens) -->
        <div class="lg:hidden">
          <button
            @click="toggleMenu"
            :class="[
              'bg-green-300 py-2 px-4 shadow-md text-white text-xl font-semibold transition-transform duration-300 transform',
              menuOpen ? '-translate-y-[500px]' : 'translate-y-0'
            ]"
          >
            Menu
          </button>
        </div>
      </div>
    </div>

    <!-- Backdrop with Blur Animation (behind the pop-out) -->
    <transition name="fade-blur">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-30 bg-opacity-30 backdrop-blur-sm"
      ></div>
    </transition>

    <!-- Mobile Pop-out Menu -->
    <transition name="slide">
      <div
        v-if="menuOpen"
        class="fixed top-0 right-0 w-2/3 h-full bg-green-300 shadow-lg flex flex-col items-center justify-center z-40"
      >
        <ul class="flex flex-col space-y-5 text-white text-xl font-semibold">
          <li class="py-2 px-4">
            <a href="#about" @click="toggleMenu">about</a>
          </li>
          <li class="py-2 px-4">
            <a href="#services" @click="toggleMenu">services</a>
          </li>
          <li class="py-2 px-4">
            <a href="#contact" @click="toggleMenu">contact</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Transition for the pop-out menu sliding in/out from the right */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

/* Transition for the backdrop blur effect */
.fade-blur-enter-active,
.fade-blur-leave-active {
  transition: backdrop-filter 0.3s ease, background-color 0.3s ease;
}
.fade-blur-enter-from,
.fade-blur-leave-to {
  backdrop-filter: blur(0px);
  
}
.fade-blur-enter-to,
.fade-blur-leave-from {
  backdrop-filter: blur(5px);
 
}
</style>
