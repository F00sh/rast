<template>
  <div id="home" class="text-white
              relative
              top-0
              mb-0 lg:mb-0
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
                    rounded-bl-full
                    shadow-lg">

          <h2 class="text-slate-100 text-xl lg:text-2xl uppercase font-semibold">
            Vaš partner za uređenje vrtova i okućnica
          </h2>
          <div class="absolute top-0 -z-10
                      w-80 lg:w-120
                      h-20 lg:h-24
                      bg-green-500/60
                      rounded-bl-full 
                      backdrop-blur-xs">
          </div>
        </div>
        <div class="relative -z-10
                    flex flex-col
                    items-center justify-start
                    w-80 lg:w-120
                    h-20 lg:h-24
                    text-center
                    shadow-lg">

          <h2 class="text-slate-800
        
                       text-left
                       p-6 lg:p-10
                       text-sm lg:text-sm
                       w-80 lg:w-120
                       h-40 lg:h-44 
                        
                       font-light">
            {{text_header_long}}
          </h2>
          <button class="bg-emerald-500
                           w-48 lg:w-60 py-3 lg:py-3
                           left-0
                           mr-auto
                           ml-5 lg:ml-10
                           text-lg shadow-md
                           ">
                           
                           kontaktirajte nas
          </button>
          <div class="absolute bg-emerald-300 w-60 lg:w-90 h-40 lg:h-60 mt-58 lg:mt-60 left-0 ml-5 lg:ml-10 shadow-md
                      bg-center bg-cover bg-no-repeat bg-[url(/img/mail_img.jpg)]">
            
          </div>
          <div class="absolute top-0 -z-10
                      w-80 lg:w-120
                      h-80 lg:h-100
                      bg-slate-100/70 
                      backdrop-blur-xs">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>

  const text_header_long = "S dugogodišnjim iskustvom, stručnim timom i modernom opremom, osiguravamo visokokvalitetne usluge od projektiranja vrtova do održavanja maslinika. Vaša okućnica u našim rukama postaje mjesto opuštanja i prirodne ljepote.";

</script>