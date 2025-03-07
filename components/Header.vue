<template>
  <div
    id="home"
    class="text-white relative top-0 mb-20 lg:mb-40 w-full h-screen flex items-center lg:items-start justify-start"
  >
    <div
      class="absolute -z-10 bg-green-300 w-full h-2/3 lg:h-full shadow-2xl bg-center bg-cover bg-no-repeat opacity-90 bg-[url(/img/header_1.jpg)]"
    ></div>

    <div class="w-full lg:w-2/3 h-full lg:px-0 flex flex-col items-start justify-start">
      <div
        class="w-full h-2/3 bg-rast-light/50 backdrop-blur-lg rounded-br-full flex flex-col p-20 items-start justify-start"
      >
        <div
          class="bg-rast-mid/70 flex items-center justify-center backdrop-blur-xs w-80 lg:w-120 text-center py-10 mb-5 rounded-br-full rounded-tl-full shadow-lg"
        >
          <h1
            class="opacity-100 text-8xl lg:text-9xl font-bodoni text-white font-bold"
          >
            rast
          </h1>
        </div>
        <div
          class="flex p-5 items-center justify-center w-80 lg:w-120 mb-5 text-center bg-rast-light/70 backdrop-blur-xs rounded-br-full shadow-lg"
        >
          <h2
            class="text-rast-dark text-xl lg:text-2xl font-montserrat font-semibold"
          >
            vaš partner za uređenje vrtova i okućnica
          </h2>
        </div>
        <div
          class="relative z-10 flex flex-col items-start justify-start w-80 lg:w-120 h-full text-center bg-rast-cream/70 backdrop-blur-md shadow-lg"
        >
          <h2
            class="text-slate-800 font-montserrat text-left p-7 lg:p-10 text-lg lg:text-md w-80 lg:w-120 mb-10 font-light"
          >
            {{ text_header_long }}
          </h2>
          <!-- Container for contact and nav buttons -->
          <div class="w-full flex flex-col lg:flex-row items-center justify-between">
            <button
              class="bg-rast-dark w-48 lg:w-60 py-3 mr-auto mb-5 ml-5 lg:ml-10 text-lg shadow-md rounded-br-full font-montserrat font-light"
            >
              kontaktirajte nas
            </button>
        
          </div>
          
          <div
            class="bg-emerald-300 w-full h-40 lg:h-60 pl-5 mt-5 lg:mt-10 shadow-md bg-center bg-cover bg-no-repeat bg-[url(/img/mail_img.jpg)]"
          ></div>
        </div>
        
      </div>
      
    </div>
    <div class="desktop-only absolute bg-rast-mid/70 backdrop-blur-lg right-60 bottom-60 flex flex-col items-center justify-center text-center p-20">
              <button
                @click="navigateTo('/about')"
                class="bg-white text-black w-80 h-14 rounded-l-full rounded-br-full mb-10"
              >
                About
              </button>
              <button
                @click="navigateTo('/services')"
                class="bg-white text-black w-80 h-14 rounded-l-full rounded-br-full mb-10"
              >
                Services
              </button>
              <button
                @click="navigateTo('/gallery')"
                class="bg-white text-black w-80 h-14 rounded-l-full rounded-br-full"
              >
                Gallery
              </button>
            </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const navigateTo = (path: string) => {
  router.push(path)
}

const text_header_long =
  "S dugogodišnjim iskustvom, stručnim timom i modernom opremom, osiguravamo visokokvalitetne usluge od projektiranja vrtova do održavanja maslinika. Vaša okućnica u našim rukama postaje mjesto opuštanja i prirodne ljepote."
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
</style>
