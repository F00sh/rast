<template>
    <!-- Container with background image -->
    <div
      class="flex min-h-screen items-center justify-center p-4
             bg-cover bg-center bg-no-repeat"
      :style="backgroundStyle"
    >
      <!-- Contact Card -->
      <div
        class="w-full max-w-sm md:max-w-lg
               bg-white/20 rounded-lg
               p-6 md:p-8 m-2
               backdrop-blur-sm"
      >
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-6">
          Contact Us
        </h2>
  
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Name -->
          <div>
            <label
              for="name"
              class="block mb-1 font-medium text-gray-800"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              class="w-full p-2 border border-gray-300 rounded"
              v-model="form.name"
              required
            />
          </div>
  
          <!-- Email -->
          <div>
            <label
              for="email"
              class="block mb-1 font-medium text-gray-800"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              class="w-full p-2 border border-gray-300 rounded"
              v-model="form.email"
              required
            />
          </div>
  
          <!-- Message -->
          <div>
            <label
              for="message"
              class="block mb-1 font-medium text-gray-800"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              class="w-full p-2 border border-gray-300 rounded"
              v-model="form.message"
              required
            ></textarea>
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white
                   font-bold py-2 px-4 rounded transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Reactive form state
  import { reactive } from 'vue'
  
  const form = reactive({
    name: '',
    email: '',
    message: ''
  })
  
  // Inline style for background image
  const backgroundStyle = {
    backgroundImage: `url('~/assets/mail_img.jpg')`
  }
  
  // Example submit handler
  function handleSubmit() {
    alert(`Form submitted\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`)
    // You can handle actual email sending here or via server route
  }
  </script>
  
  <style scoped>
  /* You can add any additional styles here if needed */
  </style>
  