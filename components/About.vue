<template>
  <div class="w-full h-full flex flex-col items-center justify-start mt-28 lg:px-0 gap-5">
      <div class="flex flex-col-reverse lg:w-1/2 h-max items-center justify-center gap-5">
          <h1 class="flex h-full w-full text-3xl lg:text-6xl font-bold tracking-[1.5rem] items-center">O nama</h1>
          <img class="w-40 lg:w-60" src="/public/img/digger.svg" alt="digger">
      </div>
      <p class="h-full lg:w-1/2 text-md lg:text-lg tracking-[0.25rem] leading-[1.5rem] lg:leading-[2.2rem] font-light uppercase px-15">{{ text_about_long_1  }}</p>
      <div class="bg-gray-100 lg:w-1/2 w-full h-80 lg:h-150 flex items-center justify-center bg-center bg-cover bg-no-repeat bg-[url(/img/about_1.jpg)]"></div>
      <h1 class="bg-green-500 w-full lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5">{{ text_about_short_1 }}</h1>
      <h1 class="bg-green-500 w-full lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5">{{ text_about_short_2 }}</h1>
      <p class="h-full lg:w-1/2 text-md lg:text-lg tracking-[0.2rem] leading-[1.8rem] lg:leading-[2.2rem] font-light uppercase">{{ text_about_long_2  }}</p>
      <h1 class="bg-green-500 w-full lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5">{{ text_about_short_3 }}</h1>
      <h1 class="bg-green-500 w-full lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5">{{ text_about_short_4 }}</h1> 
      <p class="h-full lg:w-1/2 text-md lg:text-lg tracking-[0.2rem] leading-[1.8rem] lg:leading-[2.2rem] font-light uppercase">{{ text_about_long_3  }}</p>
      <img class="flex items-center justify-center lg:w-1/2" src="/public/img/plants_2.svg" alt="plants2">
      
  </div>
    <div class="bg-green-600 h-1 w-full mt-10"></div>
    <div class="bg-green-600 h-1 w-full mt-5"></div>
    <div class="bg-green-600 h-1 w-full mt-5"></div>
</template>

<script lang="ts" setup>
const text_about_long_1 = "Rast je tvrtka specijalizirana za uređenje okućnica, vrtova i zelenih površina. Naš tim stručnjaka, opremljen modernim alatima i tehnikama, posvećen je stvaranju zelenih oaza koje odišu ljepotom i funkcionalnošću. Bilo da se radi o malom vrtu ili velikom masliniku, svaki projekt tretiramo s istom pažnjom i predanošću.";
const text_about_long_2 = "S dugogodišnjim iskustvom u različitim vrstama projekata, nudimo širok spektar usluga, uključujući projektiranje, košnju, postavljanje travnatih tepiha, navodnjavanje, sadnju biljaka i rad u maslinicima. Bez obzira na to je li teren zahtjevan i nepristupačan, naš tim uvijek pronalazi optimalno rješenje kako bi klijentima pružio najbolje rezultate.";
const text_about_long_3 = "Putujemo širom Hrvatske i susjednih zemalja kako bismo svoje usluge učinili dostupnima svima kojima je potrebno stručno uređenje zelenih površina. Naša fleksibilnost i pouzdanost čine nas idealnim partnerom za projekte svih veličina."

const text_about_short_1 = "Visoka razina stručnosti i pažnja prema detaljima";
const text_about_short_2 = "Brza i učinkovita izvedba radova";
const text_about_short_3 = "Korištenje moderne opreme koja omogućuje optimalne rezultate";
const text_about_short_4 = "Stručni tim koji razumije potrebe svakog projekta";




</script>