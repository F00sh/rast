<template>
  <div class="fixed top-0 left-0 z-50 w-full flex justify-between items-center">
    <transition>
        <div v-if="mobileOpen" class="absolute flex w-screen h-screen inset-0 bg-opacity-0 backdrop-blur-sm z-40"
          @click.self="mobileOpen = false">
        </div>
    </transition>
    <transition enter-active-class="transform transition-transform duration-300 ease-in-out"
        enter-from-class="-translate-y-full" enter-to-class="translate-y-0"
        leave-active-class="transform transition-transform duration-300 ease-in-out" leave-from-class="translate-x-0"
        leave-to-class="-translate-y-full">
    <div v-if="!mobileOpen" class="flex items-center justify-center w-full h-20 md:h-40">
      
      <!--Mobile Menu Hidden in Desktop-->
      <button @click="mobileOpen = true" class="md:hidden focus:outline-none">
        <!-- Hamburger icon -->
        <svg class="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </transition>
    <div>
      
    
      <transition enter-active-class="transform transition-transform duration-300 ease-in-out"
        enter-from-class="-translate-x-full" enter-to-class="translate-x-0"
        leave-active-class="transform transition-transform duration-300 ease-in-out" leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full">
        <!-- This dark overlay spans the full screen behind the menu -->
        <div v-if="mobileOpen" class="fixed inset-0 z-40 bg-gray-800 bg-opacity-0"
          @click.self="mobileOpen = false">
          <!-- The side drawer itself -->
          <div
            class="fixed top-0 left-0 h-full w-64 bg-emerald-500 text-white p-4 transform transition-transform duration-300 ease-in-out"
            :class="{
              'translate-x-0': mobileOpen,
              '-translate-x-full': !mobileOpen,
            }">
            <!-- Close button for mobile menu -->
            <button @click="mobileOpen = false" class="mb-4 focus:outline-none">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Toggle Switch -->
            <div class="mb-6">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" />
                <div
                  class="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer-checked:bg-green-500 peer-checked:after:translate-x-full transition-all relative after:content-[''] after:absolute after:top-1/2 after:left-0.5 after:-translate-y-1/2 after:bg-white after:h-4 after:w-4 after:rounded-full after:shadow-md">
                </div>
                <span class="ml-2 text-sm">Toggle</span>
              </label>
            </div>

            <!-- Menu Links -->
            <NuxtLink to="/page1" class="block py-2 border-b border-gray-300">Button1</NuxtLink>
            <NuxtLink to="/page2" class="block py-2 border-b border-gray-300">Button2</NuxtLink>
            <NuxtLink to="/page3" class="block py-2">Button3</NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const mobileOpen = ref(false);
</script>
