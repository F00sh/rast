<template>
  <div id="home" class="text-white relative w-full h-screen items-center flex flex-col">
    <div class="w-1/2 h-full grid-rows-2 grid gap-5 mt-5 mb-15">
      <div class="bg-[#2BCC74] flex items-center justify-between pl-28">
        <div>
          <h1 class="text-9xl font-black tracking-[5rem] pb-5">RAST</h1>
          <div class="bg-white h-1 w-140"></div>
          <h2 class="text-5xl font-medium tracking-[1.5rem] leading-[4rem] pt-5">Vaš partner <br> u uređenju <br> okućnice</h2>
        </div>
        <div>
          <img src="/public/img/logo_img.svg" alt="logo" class="h-110 pr-28"/>
        </div>
      </div>
      <div class="desktop-only bg-center bg-cover bg-no-repeat bg-[url(/img/about_1.jpg)] grid-2 gap-5 items-center justify-between text-center">
        <div class="flex flex-col h-full bg-[#2BCC74] justify-center items-center">
          <img src="/public/img/qr-code.jpg" alt="qrcode" class="h-65 w-65 m-14"/>
          <button
                @click="navigateTo('/About')"
                class="bg-[#4AE86E] text-white text-2xl tracking-[0.5rem] font-bold w-80 h-20 mb-10 rounded-r-full"
              >
                KONTAKT
              </button>
        </div>
        <div class="flex flex-col items-center justify-center">
          <button
                @click="navigateTo('/About')"
                class="bg-[#4AE86E] text-white text-2xl tracking-[0.5rem] font-bold w-80 h-20 rounded-l-full  mb-10"
              >
                O NAMA
              </button>
              <button
                @click="navigateTo('/services')"
                class="bg-[#4AE86E] text-WHITE  text-2xl tracking-[0.5rem] font-bold w-80 h-20 rounded-l-full  mb-10"
              >
                USLUGE
              </button>
              <button
                @click="navigateTo('/gallery')"
                class="bg-[#4AE86E] text-white text-2xl tracking-[0.5rem] font-bold w-80 h-20 rounded-l-full "
              >
                GALERIJA
              </button>
        </div>
      </div>
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
