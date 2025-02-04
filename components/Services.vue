<template>
  <div class="relative w-full min-h-screen">
    <!-- MOBILE layout (v-if) -->
    <div v-if="isMobile" class="flex flex-col w-full min-h-screen">
      <!-- Full-width image at the top -->
      <img
        src="/img/services_img.png"
        alt="Services"
        class="w-full h-64 object-cover rounded-b-xl"
      />

      <!-- Big heading "USLUGE" -->
      <div
        class="
          bg-emerald-400 bg-opacity-70
          text-white font-black text-center
          py-6 px-4
        "
      >
        <h1 class="text-4xl">USLUGE (Mobile)</h1>
      </div>

      <!-- Bullet points (violet backgrounds) -->
      <div class="flex flex-col text-white font-medium uppercase text-center bg-transparent py-4 space-y-3">
        <h2 class="bg-violet-400 py-3 px-3 rounded-r-full mx-2">
          Projektiranje vrtova i okućnica
        </h2>
        <h2 class="bg-violet-400 py-3 px-3 rounded-r-full mx-2">
          Košnja i održavanje travnjaka
        </h2>
        <h2 class="bg-violet-400 py-3 px-3 rounded-r-full mx-2">
          Postavljanje travnatih tepiha
        </h2>
        <h2 class="bg-violet-400 py-3 px-3 rounded-r-full mx-2">
          Sadnja biljaka i stabala
        </h2>
        <h2 class="bg-violet-400 py-3 px-3 rounded-r-full mx-2">
          Rad u maslinicima
        </h2>
        <h2 class="bg-violet-400 py-3 px-3 rounded-r-full mx-2">
          Vađenje stabala i čišćenje terena
        </h2>
      </div>

      <!-- Long text block -->
      <div class="flex flex-col text-slate-800 bg-white p-4 text-justify space-y-4">
        <h2 class="uppercase font-semibold">
          Naša stručnost i iskustvo omogućuju nam pružanje vrhunskih usluga uređenja zelenih površina...
        </h2>
        <h2 class="uppercase font-light">
          Izrađujemo detaljne planove uređenja vrtova i okućnica prilagođene vašim potrebama...
        </h2>
        <h2 class="uppercase font-extralight">
          Redovito održavanje travnjaka ključ je zdravog i lijepog vrta...
        </h2>
        <h2 class="uppercase font-light">
          Brzo i učinkovito postavljamo travnate tepihe vrhunske kvalitete...
        </h2>
        <h2 class="uppercase font-extralight">
          Bilo da želite zasaditi cvjetne gredice, grmlje, voćke ili ukrasna stabla...
        </h2>
        <h2 class="uppercase font-light">
          Pružamo cjelovite usluge za maslinike, uključujući obrezivanje, gnojidbu...
        </h2>
        <h2 class="uppercase font-light">
          Uklanjamo stabla, grmlje i neželjenu vegetaciju...
        </h2>
      </div>
    </div>

    <!-- MEDIUM+ layout (v-else) -->
    <div v-else class="relative w-full min-h-screen flex">
      <!-- Image on the left (medium & up) -->
      <img
        src="/img/services_img.png"
        alt="Services"
        class="
          w-full
          md:w-9/12
          lg:w-8/12
          object-cover
          rounded-r-full
          z-0
        "
      />

      <!-- Overlay container (positioned absolutely over the image) -->
      <div
        class="
          absolute inset-0
          bg-black bg-opacity-70
          flex flex-col
          md:flex-row-reverse
          items-center
          justify-between
          p-4
        "
      >
        <!-- Big heading block -->
        <div
          class="
            bg-emerald-400
            text-white
            font-black
            text-end
            py-10
            px-8
            md:px-12
            lg:px-14
            rounded-l-full
            md:rounded-l-full
          "
        >
          <h1 class="text-5xl md:text-6xl lg:text-7xl">USLUGE</h1>
        </div>

        <!-- Violet bullet points, centered horizontally for larger screens -->
        <div
          class="
            flex flex-col
            text-white
            uppercase
            font-medium
            text-center
            lg:text-2xl
            space-y-3
            my-6
            md:my-0
          "
        >
          <h2 class="bg-violet-400 py-3 px-3 rounded-r-full">
            Projektiranje vrtova i okućnica
          </h2>
          <h2 class="bg-violet-400 py-3 px-3 rounded-r-full">
            Košnja i održavanje travnjaka
          </h2>
          <h2 class="bg-violet-400 py-3 px-3 rounded-r-full">
            Postavljanje travnatih tepiha
          </h2>
          <h2 class="bg-violet-400 py-3 px-3 rounded-r-full">
            Sadnja biljaka i stabala
          </h2>
          <h2 class="bg-violet-400 py-3 px-3 rounded-r-full">
            Rad u maslinicima
          </h2>
          <h2 class="bg-violet-400 py-3 px-3 rounded-r-full">
            Vađenje stabala i čišćenje terena
          </h2>
        </div>

        <!-- Long text block on the left or right (depends on row-reverse) -->
        <div
          class="
            w-full
            md:w-[40%]
            bg-white/90
            text-slate-800
            text-justify
            p-4
            md:p-6
            lg:p-10
            flex flex-col
            space-y-4
          "
        >
          <h2 class="uppercase font-semibold">
            Naša stručnost i iskustvo omogućuju nam pružanje vrhunskih usluga...
          </h2>
          <h2 class="uppercase font-light">
            Izrađujemo detaljne planove uređenja vrtova i okućnica...
          </h2>
          <h2 class="uppercase font-extralight">
            Redovito održavanje travnjaka ključ je zdravog i lijepog vrta...
          </h2>
          <h2 class="uppercase font-light">
            Brzo i učinkovito postavljamo travnate tepihe...
          </h2>
          <h2 class="uppercase font-extralight">
            Bilo da želite zasaditi cvjetne gredice, grmlje, voćke...
          </h2>
          <h2 class="uppercase font-light">
            Pružamo cjelovite usluge za maslinike...
          </h2>
          <h2 class="uppercase font-light">
            Uklanjamo stabla, grmlje i neželjenu vegetaciju...
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Simple ref to track if screen < 768px (Tailwind "md" breakpoint)
const isMobile = ref(false)

function checkScreenSize() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>
