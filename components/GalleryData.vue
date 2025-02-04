<!-- /components/GalleryData.vue -->
<template>
    <!-- 
      This component can simply export an array of objects,
      but for demonstration, we return it in 'setup' and
      have a minimal template or none at all.
      We won't render anything here directly.
    -->
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // Example data array of images & their texts
  // Replace the placeholder 'src' and 'text' with your actual data
  const galleryItems = ref([
    {
      src: '/img/gallery1.jpg',  // <-- replace with your actual image path
      text: 'Opis slike broj 1'   // short or long text for the image
    },
    {
      src: '/img/gallery2.jpg',
      text: 'Opis slike broj 2'
    },
    {
      src: '/img/gallery3.jpg',
      text: 'Opis slike broj 3'
    }
    // Add more images as needed
  ])
  
  // We "export" this array so we can import from other components
  export function useGalleryData() {
    return { galleryItems }
  }
  </script>
  