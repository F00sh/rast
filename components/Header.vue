<template>
<div class="flex flex-col flex-1 items-center justify-center w-screen h-screen my-auto">
<div class="flex w-full h-[750px] mb-auto overflow-hidden">
  <img src="/img/header_img.svg" alt="header" class="w-full my-auto object-cover md:px-40 lg:px-64"/>
</div>
<div class="absolute flex justify-center w-full h-96 mt-10 md:mt-20 lg:mt-40">
  <div class="bg-emerald-400 lg:h-[265px] mr-3 md:px-3 lg:px-5 flex items-center justify-center">
    <img src="/img/logo_img.svg" alt="Rast logo" class="h-[170px] md:h-[200px] lg:h-[290px]">
  </div>  
  <ul class="flex flex-col items-center justify-center h-96 text-white">
    <h1 class="bg-emerald-400 mb-3 text-9xl md:text-[130px] lg:text-[200px] font-black  md:px-[22px] lg:px-[19px]">RAST</h1>
    <h2 class="bg-emerald-400 text-[20px] md:text-2xl lg:text-4xl px-[19px] md:px-[14px] md:py-[6px] font-bold">UREĐENJE ZELENIH POVRŠINA</h2>
    </ul>
</div>
<div class="flex items-center justify-center w-full h-auto bg-emerald-400">
  <button id="button">o nama</button>
  <button>usluge</button>
  <button>kontakt</button>
</div>
</div>
</template>
<style scoped>
  .button
  {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
</style>