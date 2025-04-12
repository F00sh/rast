<template>
  <div class=" flex w-full items-center justify-center text-center p-10">
    <div class="bg-[var(--teal-dark)] lg:w-1/2 w-full flex justify-between items-center">
      
        <NuxtLink to="/#Header" class="h-1/4 w-1/4 flex items-center justify-center text-[#E8E8E8]"><img class="h-full" src="/public/img/logo_round_light.svg" alt=""></NuxtLink>
    
      
      <div class="font-montserrat w-1/2 flex flex-col items-center justify-center text-center text-[#E8E8E8] tracking-[0.2rem] font-light px-5"> 
        <h1 class="pb-1 text-sm lg:text-3xl text-[var(--green-light)]">+385 90 555 555</h1>
        <h1 class="pt-1 text-md lg:text-4xl text-[var(--orange-dark)]">info@rast.hr</h1>
      </div>
      <div class="h-1/4 w-1/4 flex items-center justify-center text-[#E8E8E8]">
        <img class="h-full" src="/public/img/logo_new_img.svg" alt="">
      </div>
    </div>
  </div>
</template>
<style></style>
<script lang="ts" setup>
  import { NuxtLink } from '#components'
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const navigateTo = (path: string) => {
    router.push(path)
  }

</script>
