<template>
<DIV class="flex flex-col font-montserrat w-full h-screen lg:h-max items-center justify-between">
  <div class="w-full lg:w-1/2 lg:px-0 lg:pl-0 flex flex-col justify-between">
    <div class="flex flex-col mx-10 lg:flex-row items-start justify-between">
     
    </div>

    <div class="flex flex-col items-start justify-start w-full">
      <img class="mx-20 lg:mx-0 lg:w-1/3 mt-20" src="/public/img/logo_img.svg" alt="RAST">
    </div>
    <div class="desktop-only bg-[#25992B] h-2 lg:h-2 my-5  rounded-full shadow-lg"></div>
    <div class="mobile-only bg-[#25992B] h-2 lg:h-4 mt-10 mb-5 mx-20 rounded-full shadow-lg"></div>
    <h2 class="mobile-only flex flex-col font-montserrat uppercase font-light tracking-[0.8rem] leading-[2rem] ] text-lg pb-5 text-center">vaš partner <br> u uređenju <br> okućnice</h2>
    <div class="desktop-only flex lg:justify-between items-center">
      <h2 class="font-montserrat uppercase font-light tracking-[0.8rem] leading-[3rem]  text-lg lg:text-3xl text-start">vaš partner <br> u uređenju <br> okućnice</h2>
      <div class="desktop-only flex flex-col items-center justify-center gap-2.5 mb-10">
        <button class="bg-[#60EF54] text-white py-3 w-60 rounded-l-full">O NAMA</button>
        <button class="bg-[#38BA45] text-white py-3 w-60 rounded-l-full">USLUGE</button>
        <button class="bg-[#25992B] text-white py-3 w-60 rounded-l-full">GALERIJA</button>
      </div>
    </div>
    <div class="w-max flex mx-auto lg:mx-0 items-center justify-center lg:justify-start border-5 border-[#1D713D] rounded-full lg:rounded-l-none lg:rounded-r-full">
      <button class="bg-[#38BA45] flex flex-col items-center text-xl lg:text-2xl font-light text-white text-center uppercase m-2 px-10 py-5 tracking-[0.6rem] lg:tracking-[1rem] rounded-full lg:rounded-l-none lg:rounded-r-full shadow-lg">kontakt</button>
    </div>   
    </div>
<div class="w-full lg:w-1/2">
  <img class="mx-0 mt-auto" src="/public/img/brda_2.svg" alt="">
    <div class="h-5 bg-[#25992B]"></div>
    <div class="h-10 bg-[#38BA45]"></div>
    <div class="h-15 bg-[#60EF54]"></div>
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

.mobile-only {
  display: none;
}

@media screen and (max-width: 1024px) {
  .mobile-only {
    display: flex;
  }
}
</style>
