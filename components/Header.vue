<template>
  <div id="home" class="text-white
              relative
              top-0
              mb-20 lg:mb-10
              w-full h-screen
              flex flex-col
              items-center
              justify-start">

    <div class="absolute
                -z-10
                bg-green-300
                right-0
                w-3/4 lg:w-3/4 h-2/3 lg:h-3/4
                rounded-bl-full
                shadow-2xl
                bg-center bg-cover bg-no-repeat
                opacity-90
                bg-[url(/img/header_1.jpg)]">
    </div>

    <div class="w-full h-full
                pl-10 lg:pl-60
                flex flex-col
                items-center
                justify-start
                pt-20 lg:pt-24">

      <div class="w-full h-2/3
                  flex flex-col
                  items-start
                  justify-start">

        <div class=" bg-green-400/80
                    backdrop-blur-xs
                    w-80 lg:w-120
                    text-center
                    py-10 mb-5
                    rounded-tr-full rounded-bl-full
                    shadow-lg">

          <h1 class="
                     opacity-100
                     text-6xl lg:text-8xl 
                     uppercase 
                     font-black">
            rast
          </h1>
        </div>
        <div class="relative
                    flex
                    items-center justify-center
                    w-80 lg:w-120
                    h-20 lg:h-24
                    mb-5
                    text-center
                    bg-green-400/70 backdrop-blur-xs
                    rounded-bl-full
                    shadow-lg">

          <h2 class="text-slate-100 text-xl lg:text-2xl uppercase font-semibold">
            Vaš partner za uređenje vrtova i okućnica
          </h2>
        
        </div>
        <div class="relative -z-10
                    flex flex-col
                    items-start justify-start
                    w-80 lg:w-120
                    h-full
                    text-center
                    bg-slate-200/80 
                    backdrop-blur-md
                    shadow-lg">

          <h2 class="text-slate-800
        
                       text-left
                       p-7 lg:p-10
                       text-md lg:text-sm
                       w-80 lg:w-120
                       h-60 lg:h-44 
                       mb-10
                       font-light">
            {{text_header_long}}
          </h2>
          <button class="bg-emerald-500
                           w-48 lg:w-60 py-3 lg:py-3
                           left-0
                           mr-auto
                           mb-5
                           ml-5 lg:ml-10
                           text-lg shadow-md
                           rounding-bl-full
                           ">
                           
                           kontaktirajte nas
          </button>
          <div class=" bg-emerald-300 w-full h-40 lg:h-60 left-0 pl-5 mt-5 lg:mt-10 shadow-md
                      bg-center bg-cover bg-no-repeat bg-[url(/img/mail_img.jpg)]">
            
          </div>
         
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>

  const text_header_long = "S dugogodišnjim iskustvom, stručnim timom i modernom opremom, osiguravamo visokokvalitetne usluge od projektiranja vrtova do održavanja maslinika. Vaša okućnica u našim rukama postaje mjesto opuštanja i prirodne ljepote.";

</script>