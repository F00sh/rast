<template>
  <div class="w-full h-full flex flex-col items-center justify-start my-15">
             <div class=" w-1/2 h-max grid grid-cols-2 gap-5 items-center justify-center mb-5">
               <h1 class="bg-[#1AE873] flex h-full text-5xl text-white font-black tracking-[3rem] items-center justify-center text-center rounded-r-full">USLUGE</h1>
               <p class="h-full text-xl tracking-[0.2rem] leading-[2.2rem] font-light uppercase text-justify">{{ usluge_mali_1  }}</p>
             </div>
             <div class="bg-gray-100 w-1/2 h-150 mb-5 flex items-center justify-center bg-center bg-cover bg-no-repeat bg-[url(/img/about_1.jpg)]">
             </div>
             <div class=" w-1/2 h-max grid grid-cols-2 gap-5 items-center justify-center mb-5">
               <div class="order-2 grid gap-5">
                <div class=" bg-[#1AE873] uppercase text-3xl text-white font-medium tracking-[0.6rem] p-5 flex items-center justify-center text-right rounded-l-full">{{ text_about_short_1 }}</div>
                <div class=" bg-[#1AE873] uppercase text-3xl text-white font-medium tracking-[0.6rem] p-5 flex items-center justify-center text-right rounded-l-full">{{ text_about_short_2 }}</div>

              </div>
               <p class="order-1 flex items-center h-full text-xl tracking-[0.2rem] leading-[2.2rem] font-light uppercase text-justify">{{usluge_mali_2 }}</p>
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

  const usluge_podnaslov_1 = "Projektiranje vrtova i okućnica";
  const usluge_podnaslov_2 = "Košnja i održavanje travnjaka";
  const usluge_podnaslov_3 = "Postavljanje travnatih tepiha";
  const usluge_podnaslov_4 = "Navodnjavanje i sustavi za zalijevanje";
  const usluge_podnaslov_5 = "Sadnja biljaka i stabala";
  const usluge_podnaslov_6 = "Rad u maslinicima";
  const usluge_podnaslov_7 = "vađenje stabala i čišćenje terena";

  const usluge_mali_1 = "U tvrtki Rast ponosimo se pružanjem širokog spektra usluga za uređenje i održavanje vaših zelenih površina. Naš tim stručnjaka koristi modernu opremu i tehnike kako bi svaki projekt ispunio vaša očekivanja i stvorio prostor koji odiše ljepotom i funkcionalnošću.";
  const usluge_mali_2 = "S našim stručnim timom i prilagođenim rješenjima, vaš vanjski prostor može postati oaza opuštanja i ljepote. Javite nam se kako bismo zajedno stvorili zelenu površinu iz vaših snova!";

</script>