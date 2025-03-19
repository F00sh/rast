<template>
  <div class="w-full h-full flex flex-col items-center justify-start mt-28 lg:px-0 gap-5">
      <div class="flex flex-col-reverse lg:w-1/2 h-max items-center justify-center gap-5">
          <h1 class="flex h-full w-full text-3xl lg:text-6xl font-bold tracking-[1.5rem] items-center">Usluge</h1>
          <img class="w-40 lg:w-60" src="/public/img/digger.svg" alt="">
      </div>
      <p class="h-full lg:w-1/2 text-md lg:text-lg tracking-[0.2rem] leading-[1.8rem] lg:leading-[2.2rem] font-light uppercase">{{ usluge_mali_1  }}</p>
      <div class="bg-gray-100 lg:w-1/2 w-full h-80 lg:h-150 flex items-center justify-center bg-center bg-cover bg-no-repeat bg-[url(/img/about_1.jpg)]"></div>
      <h1 class="bg-green-500 w-full lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 rounded-l-full">{{ usluge_podnaslov_1 }}</h1>
      <h1 class="bg-green-500 w-full lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 rounded-r-full">{{ usluge_podnaslov_2 }}</h1>

      <h1 class="bg-green-500 w-full lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 rounded-l-full">{{ usluge_podnaslov_3 }}</h1>
      <h1 class="bg-green-500 w-full lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 rounded-r-full">{{ usluge_podnaslov_4 }}</h1> 
      <h1 class="bg-green-500 w-full lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 rounded-l-full">{{ usluge_podnaslov_5 }}</h1>
      <h1 class="bg-green-500 w-full lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 rounded-r-full">{{ usluge_podnaslov_6 }}</h1>
      <h1 class="bg-green-500 w-full lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 rounded-l-full">{{ usluge_podnaslov_7 }}</h1>   
      <p class="h-full lg:w-1/2 text-md lg:text-lg tracking-[0.2rem] leading-[1.8rem] lg:leading-[2.2rem] font-light uppercase">{{ usluge_mali_2 }}</p>     

  </div>
  <div class="lg:flex lg:flex-col items-center justify-center">
    <div class="bg-green-600 h-1  mt-10 mx-10 lg:mx-0 lg:w-1/2"></div>
    <div class="bg-green-600 h-1  mt-5 mx-10 lg:mx-0 lg:w-1/2"></div>
    <div class="bg-green-600 h-1  mt-5 mx-10 lg:mx-0 lg:w-1/2"></div>
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