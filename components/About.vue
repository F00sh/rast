<template>
  <div class="w-full h-full flex flex-col items-center justify-start my-15">
             <div class=" w-1/2 h-max grid grid-cols-2 gap-5 items-center justify-center mb-5">
               <h1 class="bg-[#1AE873] flex h-full text-5xl text-white font-black tracking-[3rem] items-center justify-center text-center rounded-r-full">O NAMA</h1>
               <p class="h-full text-xl tracking-[0.2rem] leading-[2.2rem] font-light uppercase text-justify">{{ text_about_long_1  }}</p>
             </div>
             <div class="bg-gray-100 w-1/2 h-150 mb-5 flex items-center justify-center bg-center bg-cover bg-no-repeat bg-[url(/img/about_1.jpg)]">
             </div>
             <div class=" w-1/2 h-max grid grid-cols-2 gap-5 items-center justify-center mb-5">
               <div class="order-2 grid gap-5">
                <div class=" bg-[#1AE873] uppercase text-3xl text-white font-medium tracking-[0.6rem] p-5 flex items-center justify-center text-right rounded-l-full">{{ text_about_short_1 }}</div>
                <div class=" bg-[#1AE873] uppercase text-3xl text-white font-medium tracking-[0.6rem] p-5 flex items-center justify-center text-right rounded-l-full">{{ text_about_short_2 }}</div>

              </div>
               <p class="order-1 flex items-center h-full text-xl tracking-[0.2rem] leading-[2.2rem] font-light uppercase text-justify">{{ text_about_long_2 }}</p>
             </div>
 
            <div class=" w-1/2 h-max grid grid-cols-2 gap-5 items-center justify-center mb-5">
               <div class="order-2 grid gap-5">
                <div class=" bg-[#1AE873] uppercase text-3xl text-white font-medium tracking-[0.6rem] p-5 flex items-center justify-center text-right rounded-l-full">{{ text_about_short_3 }}</div>
                <div class=" bg-[#1AE873] uppercase text-3xl text-white font-medium tracking-[0.6rem] p-5 flex items-center justify-center text-right rounded-l-full">{{ text_about_short_4 }}</div>

              </div>
               <p class="order-1 flex items-center h-full text-xl tracking-[0.2rem] leading-[2.2rem] font-light uppercase text-justify">{{ text_about_long_3 }}</p>
             </div>
  </div>
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