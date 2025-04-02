<template>
<DIV class="flex flex-col font-montserrat w-full h-screen lg:h-max items-center justify-between">
  <div class="w-full lg:w-1/2 lg:px-0 lg:pl-0 flex flex-col justify-between">
    <img class="w-1/2 mt-20" src="/public/img/logo_round.svg" alt="">
    <div class="w-max flex mx-auto lg:mx-0 items-center justify-center lg:justify-start border-5 border-[#1D713D] rounded-full lg:rounded-l-none lg:rounded-r-full">
      <button class="bg-[#38BA45] flex flex-col items-center text-xl lg:text-2xl font-light text-white text-center uppercase m-2 px-10 py-5 tracking-[0.6rem] lg:tracking-[1rem] rounded-full lg:rounded-l-none lg:rounded-r-full shadow-lg">kontakt</button>
    </div>   
  </div>
  <div class="w-full lg:w-1/2">
    <img class="mx-0 mt-auto" src="/public/img/AI_header_1.png" alt="">

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
