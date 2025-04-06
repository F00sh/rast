<template>
  <div class="relative w-full h-screen flex flex-col items-center justify-center">
    <div class="desktop-only flex flex-col z-10 top-0 right-0 w-1/2 h-1/2 items-end justify-center bg-[#25544A]">
      <button class="z-10 text-center bg-[#25544A] border border-[#478957] text-[#69BE5C] text-xl tracking-[0.7rem] lg:ml-10 mt-10 w-60 py-4 uppercase shadow-xl"><a href="Footer">o nama</a></button>
      <button class="z-10 text-center bg-[#25544A] border border-[#478957] text-[#69BE5C] text-xl tracking-[0.7rem] lg:ml-10 mt-10 w-60 py-4 uppercase shadow-xl"><a href="Footer">usluge</a></button>
      <button class="z-10 text-center bg-[#25544A] border border-[#478957] text-[#69BE5C] text-xl tracking-[0.7rem] lg:ml-10 mt-10 w-60 py-4 uppercase shadow-xl"><a href="Footer">galerija</a></button>      
    </div>
    <div class="bg-[#25544A] w-full lg:w-1/2 h-screen flex flex-col items-center lg:items-start justify-end">
      <div class="absolute z-20 flex flex-col w-2/3 lg:w-1/4 top-0 mt-20 justify-center items-center lg:items-start">
        <img class="ml-5 lg:ml-0" src="/public/img/logo_new_img.svg" alt="">
        <a href="Footer" class="z-10 text-center flex items-center justify-between border-4 border-[#478957] text-[#69BE5C] font-bold text-xl tracking-[0.7rem] mt-10 px-4 pl-7 py-4 uppercase shadow-xl rounded-r-full"><h1>kontakt</h1><img class="desktop-only w-16 ml-4 drop-shadow-lg" src="/public/img/logo_round_light.svg" alt=""></a>
      </div>
      <img src="/public/img/header_new_image.png" alt="">
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

.mobile-only {
  display: none;
}

@media screen and (max-width: 1024px) {
  .mobile-only {
    display: flex;
  }
}
</style>
