<template>
<DIV class="flex flex-col font-montserrat w-full h-full items-center justify-center">
  <div class="w-full lg:w-1/2 lg:px-0 pt-10 lg:pt-20 lg:pl-0 flex flex-col justify-between">
    <div class="flex flex-col mx-10 lg:flex-row items-start justify-between">
      <img class="
                w-30 lg:w-50 h-30 lg:h-50 
                mb-10 
                drop-shadow-xl" 
                src="/public/img/logo_img.svg" alt="logo">
      <div class="desktop-only gap-5">
        <button class="bg-green-600 text-white p-5 ">o nama</button>
        <button class="bg-green-600 text-white p-5 ">usluge</button>
        <button class="bg-green-600 text-white p-5 ">galerija</button>

      </div>          
    </div>

    <h1 class="font-montserrat tracking-[1.5rem] font-bold text-7xl lg:text-[18rem] text-center lg:text-start mx-10">Rast</h1>
    <div class="bg-green-600 h-2 lg:h-4 my-5 lg:my-15 mx-15 rounded-full shadow-lg"></div>
    <h2 class="font-montserrat uppercase font-light tracking-[0.8rem] leading-[2rem] lg:leading-[7rem] text-lg lg:text-7xl pb-5 lg:pb-15 text-center lg:text-start mx-10">vaš partner <br> u uređenju <br> okućnice</h2>
    <div class="flex items-center justify-center lg:justify-start mt-2 mb-5">
      <button class="bg-green-600 flex flex-col items-center text-xl lg:text-5xl font-light text-white text-center uppercase px-10 lg:px-24 py-5 lg:py-12 tracking-[1rem] lg:tracking-[2rem] mx-10 rounded-l-full rounded-r-full lg:rounded-l-none shadow-xl">kontakt</button>
    </div>   
    <img class="mx-5 lg:mx-10" src="/public/img/plants_1.svg" alt="">
    <div class="bg-green-600 h-1 mx-10 mt-5"></div>
    <div class="bg-green-600 h-1 mx-15 mt-5"></div>
    <div class="bg-green-600 h-1 mx-20 mt-5"></div>
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
