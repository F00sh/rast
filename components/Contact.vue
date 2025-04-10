<template>
    <section id="kontakt" class="w-full my-1">
      <div class="mx-auto px-4 lg:w-1/2 bg-gray-100 pb-20">
        <!-- Heading -->
        <h2 class="flex h-full font-montserrat text-[var(--teal-dark)] text-4xl lg:text-6xl font-black tracking-[0.8rem] lg:tracking-[1.5rem] uppercase ml-10 lg:ml-20 pt-28">
          Kontakt
        </h2>
        <div class="bg-[var(--orange-dark)] h-1 w-1/3 ml-10 lg:ml-20 mt-5 mb-20"></div>
        <div class="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 lg:mx-10">
          <!-- Call and WhatsApp Buttons -->
          <div class="flex-1 flex flex-col space-y-4">
            <button
              class="border-[var(--green-dark)] hover:border-[var(--green-light)] bg-[var(--green-light)] border-2 text-gray-200 py-2 px-4 shadow-lg 
                     hover:bg-[var(--green-dark)] hover:text-[var(--green-light)] transition duration-200 uppercase font-medium tracking-[0.25rem] mx-10"
              @click="callPhone"
            >
              Poziv
            </button>
            
            <button
              class="border-[var(--green-dark)] hover:border-[var(--green-light)] bg-[var(--green-light)] border-2 text-gray-200 py-2 px-4 shadow-lg 
                     hover:bg-[var(--green-dark)] hover:text-[var(--green-light)] transition duration-200 uppercase font-medium tracking-[0.25rem] mx-10"
              @click="callWhatsApp"
            >
              WhatsApp
            </button>
          </div>
          
          <!-- Contact Form -->
          <div class="flex-1 mx-10">
            <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-4">
              <!-- Name -->
              <div>
                <label for="name" class="block mb-1 font-medium text-gray-700">
                  Ime i prezime
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="name"
                  required
                  class="w-full border border-[var(--green-light)] rounded p-2
                         focus:outline-none focus:ring-2 
                         focus:ring-[var(--green-light)]"
                />
              </div>
              
              <!-- Email -->
              <div>
                <label for="email" class="block mb-1 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  required
                  class="w-full border border-[var(--green-light)] rounded p-2
                         focus:outline-none focus:ring-2
                         focus:ring-[var(--green-light)]"
                />
              </div>
              
              <!-- Message -->
              <div>
                <label for="message" class="block mb-1 font-medium text-gray-700">
                  Poruka
                </label>
                <textarea
                  id="message"
                  v-model="message"
                  required
                  rows="4"
                  class="w-full border border-[var(--green-light)] rounded p-2
                         focus:outline-none focus:ring-2
                         focus:ring-[var(--green-light)]"
                ></textarea>
              </div>
  
              <!-- Multiple File Upload -->
              <div>
                <label for="attachments" class="block mb-1 font-medium text-gray-700">
                  Dodaj slike (više datoteka)
                </label>
                <input
                  id="attachments"
                  type="file"
                  accept="image/*"
                  multiple
                  @change="onFileChange"
                  class="w-full text-sm text-gray-700
                         file:mr-4 file:py-2 file:px-4
                         file:rounded file:border-0
                         file:bg-[var(--green-light)] file:text-white
                         hover:file:bg-[var(--green-dark)]
                         transition duration-200"
                />
              </div>
              
              <!-- Submit -->
              <button
                type="submit"
                class="w-full border-[var(--green-dark)] bg-[var(--green-light)] border-2 text-gray-200 py-2 px-4 shadow-lg 
                     hover:bg-[var(--green-dark)] hover:text-[var(--green-light)] transition duration-200 uppercase font-medium tracking-[0.25rem]"
              >
                Pošalji
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // Form data
  const name = ref('')
  const email = ref('')
  const message = ref('')
  const attachments = ref<File[]>([])
  
  // Replace with your actual phone number
  function callPhone() {
    window.location.href = 'tel:+123456789'
  }
  
  // Replace with your actual WhatsApp link (include country code, etc.)
  function callWhatsApp() {
    window.open('https://wa.me/123456789', '_blank')
  }
  
  function onFileChange(e: Event) {
    const target = e.target as HTMLInputElement
    if (target.files && target.files.length > 0) {
      attachments.value = Array.from(target.files)
    } else {
      attachments.value = []
    }
  }
  
  function handleSubmit() {
    // Primjer logike - prilagodite po potrebi
    console.log({
      name: name.value,
      email: email.value,
      message: message.value,
      files: attachments.value
    })
  
    // Ovdje možete dodati vlastiti kod za slanje datoteka i drugih podataka na server
    // ili putem API poziva (npr. mail service).
  
    // Reset polja
    name.value = ''
    email.value = ''
    message.value = ''
    attachments.value = []
  }
  </script>
  
  <!-- 
    Optionally, place your Tailwind color variables in a global CSS file, or
    define them in your Tailwind config. For quick usage, you can add them here 
    or in a dedicated CSS file.
  -->
  <style scoped>
  :root {
    --gray-light: #E8E8E8;
    --green-light: #69BE5C;
    --green-dark: #478957;
    --orange-dark: #D35E29;
    --teal-dark: #25544A;
  }
  </style>
  