<template>
<DIV class="flex flex-col w-full h-full items-center justify-center">
  <div class="w-full lg:w-1/2 lg:px-0 pt-20 lg:pt-40 lg:pl-0 flex flex-col justify-between">
    <div class="flex flex-col lg:flex-row items-center justify-between">
      <img class="bg-green-600 rounded-full 
                w-50 lg:w-70 h-50 lg:h-70 
                p-8 lg:p-12 mb-10 
                drop-shadow-xl" 
                src="/public/img/logo_img.svg" alt="logo">
      <div class="desktop-only gap-5">
        <button class="bg-green-600 text-white p-5 ">o nama</button>
        <button class="bg-green-600 text-white p-5 ">usluge</button>
        <button class="bg-green-600 text-white p-5 ">galerija</button>

      </div>          
    </div>

    <h1 class="font-montserrat tracking-[1.5rem] font-bold text-7xl lg:text-9xl text-center lg:text-start">Rast.</h1>
    <div class="bg-green-600 h-1 w-full my-10"></div>
    <h2 class="font-montserrat uppercase font-light tracking-[0.8rem] leading-[3rem] lg:leading-[4rem] text-2xl lg:text-3xl pb-5 text-center lg:text-start">vaš partner <br> u uređenju <br> okućnice</h2>
    <div class="items-center justify-center lg:justify-start flex pb-5">
      <button class="bg-green-600 text-white p-5 w-50 rounded-full">kontakt</button>
    </div>   
    <img class="w-full" src="/public/img/plants_1.svg" alt="">
    <div class="bg-green-600 h-1 w-full mt-10"></div>
    <div class="bg-green-600 h-1 w-full mt-5"></div>
    <div class="bg-green-600 h-1 w-full mt-5"></div>
  </div>

</DIV>
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
