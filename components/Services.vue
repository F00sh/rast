<template>
  <div class="w-full flex flex-col items-center justify-start lg:mt-20 lg:px-0">
    <div class="bg-[#25544A] flex flex-col lg:flex-row w-full lg:w-1/2 items-center justify-center">
        <div>
          <h1 class="bg-[#25544A] flex h-full font-montserrat text-white text-4xl lg:text-6xl font-black tracking-[0.8rem] lg:tracking-[1.5rem] uppercase ml-10 lg:ml-20 mt-20">usluge</h1>
          <div class="bg-gray-100 h-1 w-1/3 ml-20 mt-5"></div>
          <p class="bg-[#25544A] text-white h-full w-full p-20 text-md lg:text-lg tracking-[0.25rem] leading-[1.5rem] lg:leading-[2.2rem] font-light uppercase">{{ usluge_mali_1 }}</p>  
        </div>
        <img class="lg:w-1/2 mb-20 lg:mb-0" src="/public/img/items_grid_1.png" alt="">
    </div>

    <div class="desktop-only grid grid-cols-3 gap-1 lg:w-1/2 items-center justify-center text-center uppercase mt-1 mb-20">
        <h1 class="bg-[#69BE5C] hover:bg-[#D35E29] flex h-full lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center items-center text-lg lg:text-2xl p-10">{{ usluge_podnaslov_1 }}</h1>
        <h1 class="bg-[#69BE5C] hover:bg-[#D35E29] flex h-full lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center items-center text-lg lg:text-2xl p-10">{{ usluge_podnaslov_2 }}</h1>
        <h1 class="bg-[#69BE5C] hover:bg-[#D35E29] flex h-full lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center items-center text-lg lg:text-2xl p-10">{{ usluge_podnaslov_3 }}</h1>
      
        <h1 class="bg-[#69BE5C] hover:bg-[#D35E29] flex h-full lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center items-center text-lg lg:text-2xl p-10">{{ usluge_podnaslov_5 }}</h1>
        <h1 class="bg-[#69BE5C] hover:bg-[#D35E29] flex h-full lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center items-center text-lg lg:text-2xl p-10">{{ usluge_podnaslov_6 }}</h1>
        <h1 class="bg-[#69BE5C] hover:bg-[#D35E29] flex h-full lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center items-center text-lg lg:text-2xl p-10">{{ usluge_podnaslov_7 }}</h1> 
      </div>
      <div class="mobile-only flex-col gap-1 lg:w-1/2 items-center justify-center text-center uppercase mt-1 lg:mb-20">
        <h1 class="bg-[#69BE5C] hover:bg-[#D35E29] flex h-full lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center items-center text-lg lg:text-2xl p-10">{{ usluge_podnaslov_1 }}</h1>
        <h1 class="bg-[#69BE5C] hover:bg-[#D35E29] flex h-full lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center items-center text-lg lg:text-2xl p-10">{{ usluge_podnaslov_2 }}</h1>
        <h1 class="bg-[#69BE5C] hover:bg-[#D35E29] flex h-full lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center items-center text-lg lg:text-2xl p-10">{{ usluge_podnaslov_3 }}</h1>
      
        <h1 class="bg-[#69BE5C] hover:bg-[#D35E29] flex h-full lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center items-center text-lg lg:text-2xl p-10">{{ usluge_podnaslov_5 }}</h1>
        <h1 class="bg-[#69BE5C] hover:bg-[#D35E29] flex h-full lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center items-center text-lg lg:text-2xl p-10">{{ usluge_podnaslov_6 }}</h1>
        <h1 class="bg-[#69BE5C] hover:bg-[#D35E29] flex h-full lg:leading-[2.2rem] tracking-[0.2rem] text-white text-center items-center text-lg lg:text-2xl p-10">{{ usluge_podnaslov_7 }}</h1> 
      </div>    
      <div class="bg-[#E8E8E8] lg:w-1/2 lg:rounded-4xl">
        <p class="text-md lg:text-xl tracking-[0.2rem] leading-[1.8rem] lg:leading-[2.2rem] font-light uppercase p-10 lg:p-20">{{ usluge_mali_2 }}</p>     
      </div>
  </div>

</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const navigateTo = (path: string) => {
  router.push(path)
}

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

<style scoped>
.desktop-only {
  display: none;
}

@media screen and (min-width: 1024px) {
  .desktop-only {
    display: grid;
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
