<template>
  <div class="w-full h-screen flex-1 flex-col">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
    <NuxtPage />
    </NuxtLayout>
    <ScrollButton />
  </div>
</template>
<script>
import ScrollButton from './components/ScrollButton.vue';

</script>
