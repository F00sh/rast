<template>
  <div class="w-full h-full flex flex-col items-center justify-start mt-1">
      <div class="bg-[#478957] flex flex-col  w-full lg:w-1/2 h-max items-center justify-center">
        <div class="flex flex-col">
          <h1 class="bg-[#478957] flex h-full font-montserrat text-white text-4xl lg:text-6xl font-black tracking-[0.8rem] lg:tracking-[1.5rem] uppercase ml-10 lg:ml-20 mt-28">O nama</h1>
          <div class="bg-gray-100 h-1 w-1/3 ml-10 lg:ml-20 mt-5"></div>
          <p class="bg-[#478957] text-white h-full w-full pt-20 pb-10 px-10 lg:px-20 text-md lg:text-lg tracking-[0.25rem] leading-[1.5rem] lg:leading-[2.2rem] font-light uppercase">{{ text_about_long_1  }}</p>  
        </div>
        <img class=" w-11/12 mb-20 lg:mb-14" src="/public/img/posada_2.png" alt="">
      </div>


     <img class="lg:w-1/2 mt-1" src="/public/img/rotor.png" alt="">
      <div class="flex flex-col lg:flex-row h-full w-full lg:w-1/2 gap-1 mt-1 items-center justify-center text-center font-light uppercase">
          <h1 class="flex lg:h-60 items-center bg-[#D35E29] lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center text-lg lg:text-2xl py-5 px-5 w-full lg:w-1/2">{{ text_about_short_1 }}</h1>
          <h1 class="flex lg:h-60 items-center bg-[#D35E29] lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center text-lg lg:text-2xl py-5 px-5 w-full lg:w-1/2">{{ text_about_short_2 }}</h1>
          <h1 class="flex lg:h-60 items-center bg-[#D35E29] lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center text-lg lg:text-2xl py-5 px-5 w-full lg:w-1/2">{{ text_about_short_3 }}</h1>
          <h1 class="flex lg:h-60 items-center bg-[#D35E29] lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center text-lg lg:text-2xl py-5 px-5 w-full lg:w-1/2">{{ text_about_short_4 }}</h1>
        
      </div>

      <div class="flex flex-col w-full lg:w-1/2 items-start justify-center uppercase mt-1">
        <p class="bg-[#E8E8E8] text-md lg:text-lg tracking-[0.2rem] leading-[1.8rem] lg:leading-[2.2rem] font-light uppercase py-10 lg:py-20 px-10 lg:px-20">{{ text_about_long_2  }}</p>
        <img class="bg-[#E8E8E8] " src="/public/img/o_nama_1.png" alt="">
      </div>
 <div class="desktop-only flex w-1/2 h-full my-1 gap-1 items-center justify-center">
  <img class="w-1/2" src="/public/img/vozimo.png" alt="">
  <div><p class="text-gray-100 my-0 text-md lg:text-xl tracking-[0.25rem] leading-[1.8rem] lg:leading-[2.2rem] font-light uppercase p-10">{{ text_about_long_3  }}</p></div>
 </div>
 <div class="mobile-only flex flex-col w-full h-full my-1 gap-1 items-center justify-center">
  <div><p class="text-gray-100 my-0 text-md lg:text-xl tracking-[0.25rem] leading-[1.8rem] lg:leading-[2.2rem] font-light uppercase p-10">{{ text_about_long_3  }}</p></div>
  <img class="w-full" src="/public/img/vozimo.png" alt="">
 </div>
      <img class="lg:w-1/2" src="/public/img/bukovac_8.png" alt="">    
  </div>
</template>


<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const navigateTo = (path: string) => {
  router.push(path)
}

const text_about_long_1 = "Rast je tvrtka specijalizirana za uređenje okućnica, vrtova i zelenih površina. Naš tim stručnjaka, opremljen modernim alatima i tehnikama, posvećen je stvaranju zelenih oaza koje odišu ljepotom i funkcionalnošću. Bilo da se radi o malom vrtu ili velikom masliniku, svaki projekt tretiramo s istom pažnjom i predanošću.";
const text_about_long_2 = "S dugogodišnjim iskustvom u različitim vrstama projekata, nudimo širok spektar usluga, uključujući projektiranje, košnju, postavljanje travnatih tepiha, navodnjavanje, sadnju biljaka i rad u maslinicima. Bez obzira na to je li teren zahtjevan i nepristupačan, naš tim uvijek pronalazi optimalno rješenje kako bi klijentima pružio najbolje rezultate.";
const text_about_long_3 = "Putujemo širom Hrvatske i susjednih zemalja kako bismo svoje usluge učinili dostupnima svima kojima je potrebno stručno uređenje zelenih površina. Naša fleksibilnost i pouzdanost čine nas idealnim partnerom za projekte svih veličina."

const text_about_short_1 = "Visoka razina stručnosti i pažnja prema detaljima";
const text_about_short_2 = "Brza i učinkovita izvedba radova";
const text_about_short_3 = "Korištenje moderne opreme koja omogućuje optimalne rezultate";
const text_about_short_4 = "Stručni tim koji razumije potrebe svakog projekta";
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
