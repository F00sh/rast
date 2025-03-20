<template>
  <div class="w-full h-full flex flex-col items-center justify-start mt-28 lg:px-0">
     <img class="w-full lg:w-1/2" src="/public/img/digger.svg" alt="">
      <div class="bg-[#154E3C] w-full lg:w-1/2 h-max items-center justify-center">
        <h1 class="bg-[#154E3C] flex h-full font-montserrat text-white text-4xl lg:text-6xl font-black tracking-[0.8rem] lg:tracking-[1.5rem] uppercase ml-10 lg:ml-20 mt-20">Usluge</h1>
      </div>
      <p class="bg-[#154E3C] text-white  h-full lg:w-1/2 text-md lg:text-lg tracking-[0.2rem] leading-[1.8rem] lg:leading-[2.2rem] font-light uppercase p-10 lg:p-20">{{ usluge_mali_1  }}</p>
      <div class="bg-gray-100 lg:w-1/2 w-full h-80 lg:h-150 flex items-center justify-center bg-center bg-cover bg-no-repeat bg-[url(/img/about_1.jpg)]"></div>
      <div class="flex flex-col w-full">
        <h1 class="bg-green-500 lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 mt-10 mx-10">{{ usluge_podnaslov_1 }}</h1>
        <h1 class="bg-green-500 lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 mt-1 mx-10">{{ usluge_podnaslov_2 }}</h1>
        <h1 class="bg-green-500 lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 mt-1 mx-10">{{ usluge_podnaslov_3 }}</h1>
        <h1 class="bg-green-500 lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 mt-1 mx-10">{{ usluge_podnaslov_4 }}</h1> 
        <h1 class="bg-green-500 lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 mt-1 mx-10">{{ usluge_podnaslov_5 }}</h1>
        <h1 class="bg-green-500 lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 mt-1 mx-10">{{ usluge_podnaslov_6 }}</h1>
        <h1 class="bg-green-500 lg:w-1/2 text-white text-center text-xl lg:text-2xl py-5 mt-1 mx-10">{{ usluge_podnaslov_7 }}</h1> 
      </div>  
      <p class="h-full lg:w-1/2 text-md lg:text-lg tracking-[0.2rem] leading-[1.8rem] lg:leading-[2.2rem] font-light uppercase p-10 lg:p-20">{{ usluge_mali_2 }}</p>     

  </div>
  <div class="lg:flex lg:flex-col items-center justify-center">
    <div class="bg-green-600 h-1  mx-10 lg:mx-0 lg:w-1/2"></div>
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