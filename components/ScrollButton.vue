<template>
    <!-- Only show the button if not at bottom -->
    <button
      v-if="!isAtBottom"
      class="fixed bottom-8 right-8 
             w-12 h-12
             md:w-16 md:h-16
             lg:w-20 lg:h-20 
             rounded-full 
             bg-blue-500 text-white 
             shadow-md 
             flex items-center justify-center 
             transition-opacity"
    >
      <!-- Simple downward triangle icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 16l-8-8h16l-8 8z" />
      </svg>
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const isAtBottom = ref(false)
  
  function checkIfAtBottom() {
    // window.scrollY: current vertical scroll position
    // window.innerHeight: viewport height
    // document.documentElement.scrollHeight: total height of the document
    const scrolled = window.scrollY + window.innerHeight
    const total = document.documentElement.scrollHeight
    // If we've reached (or very near) the bottom, hide the button
    isAtBottom.value = scrolled >= total - 2
  }
  
  onMounted(() => {
    window.addEventListener('scroll', checkIfAtBottom)
    checkIfAtBottom() // in case page is already short or loaded at bottom
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', checkIfAtBottom)
  })
  </script>
  