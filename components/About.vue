<template>
  <div id="about" class="relative
                
                mb-20 lg:mb-40
                text-white
                top-0
                w-full h-full
                flex flex-col
                items-start
                justify-start">

    <div class="absolute
                  -z-10
                  mt-10
                  bg-green-300
                  w-full lg:w-3/4 h-2/3
                  rounded-br-full
                  shadow-2xl
                  bg-center bg-cover bg-no-repeat bg-[url(/img/about_1.jpg)]">
    </div>

    <div class="w-full h-full
                  lg:pr-60
                  flex flex-col
                  items-center
                  justify-center">

      <div class="w-full h-2/3
                    flex flex-col
                    items-end
                    justify-start">

        <div class="bg-rast-mid/70 backdrop-blur-xs
                      w-8/12 lg:w-4/12
                      text-center
                      py-10 px-10 mb-5
                      rounded-tr-full rounded-bl-full
                      shadow-lg">

          <h1 class="text-4xl lg:text-5xl 
                       text-white
                       font-bodoni 
                       font-black">
            više o nama
          </h1>
        </div>

        <!--podnaslovi-->

<div class="font-montserrat">
  <div class="relative
                    flex flex-col text-center
                    items-center justify-center
                    bg-rast-light/70 backdrop-blur-xs
                    p-3  rounded-bl-full
                    mb-3">
          
                    <h2 class="text-xl font-medium text-rast-dark">
                      
                      {{ text_about_short_1 }}
                    
                    </h2>

        </div>
        
        <div class="relative
                    flex flex-col text-center
                    items-center justify-center
                    bg-rast-light/70 backdrop-blur-xs
                    p-3  rounded-bl-full
                    mb-3">
          
                    <h2 class="text-xl font-medium text-rast-dark">
                      
                      {{ text_about_short_2 }}
                    
                    </h2>

        </div>

        <div class="relative
                    flex flex-col text-center
                    items-center justify-center
                    bg-rast-light/70 backdrop-blur-xs
                    p-3  rounded-bl-full
                    mb-3">
          
                    <h2 class="text-xl font-medium text-rast-dark">
                      
                      {{ text_about_short_3 }}
                    
                    </h2>

        </div>

        <div class="relative
                    flex flex-col text-center
                    items-center justify-center
                    bg-rast-light/70 backdrop-blur-xs
                    p-3  rounded-bl-full
                    mb-3">
          
                    <h2 class="text-xl font-medium text-rast-dark">
                      
                      {{ text_about_short_4 }}
                    
                    </h2>

        </div>
</div>
        
        <div class="relative flex flex-col w-screen h-full lg:w-1/3 justify-center items-center bg-rast-cream/80 backdrop-blur-md">
          <!-- Glass effect sloj -->
           <div class="top-0 pt-12 lg:w-full text-lg lg:text-sm text-slate-900 font-montserrat font-light">
            <h3 class="px-12">{{ text_about_long_1 }}</h3><br>
            <div class="bg-green-300 w-full h-70 bg-center bg-cover bg-no-repeat bg-[url(/img/blog/berba_1.jpg)]"></div><br>
            <h3 class="px-12">{{ text_about_long_2 }}</h3><br>
            <div class="bg-green-300 w-full h-70 bg-center bg-cover bg-no-repeat bg-[url(/img/blog/berba_2.jpg)]"></div><br>
            <h3 class="px-12">{{ text_about_long_3 }}</h3><br>
            <div class="bg-green-300 w-full h-70 bg-center bg-cover bg-no-repeat bg-[url(/img/blog/berba_3.jpg)]"></div>
           </div>
          

          <!-- Tekst s višim z-index-om da ne bude zahvaćen blur efektom -->
          
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
const text_about_long_1 = "Rast je tvrtka specijalizirana za uređenje okućnica, vrtova i zelenih površina. Naš tim stručnjaka, opremljen modernim alatima i tehnikama, posvećen je stvaranju zelenih oaza koje odišu ljepotom i funkcionalnošću. Bilo da se radi o malom vrtu ili velikom masliniku, svaki projekt tretiramo s istom pažnjom i predanošću.";
const text_about_long_2 = "S dugogodišnjim iskustvom u različitim vrstama projekata, nudimo širok spektar usluga, uključujući projektiranje, košnju, postavljanje travnatih tepiha, navodnjavanje, sadnju biljaka i rad u maslinicima. Bez obzira na to je li teren zahtjevan i nepristupačan, naš tim uvijek pronalazi optimalno rješenje kako bi klijentima pružio najbolje rezultate.";
const text_about_long_3 = "Putujemo širom Hrvatske i susjednih zemalja kako bismo svoje usluge učinili dostupnima svima kojima je potrebno stručno uređenje zelenih površina. Naša fleksibilnost i pouzdanost čine nas idealnim partnerom za projekte svih veličina."

const text_about_short_1 = "Visoka razina stručnosti i pažnja prema detaljima";
const text_about_short_2 = "Brza i učinkovita izvedba radova";
const text_about_short_3 = "Korištenje moderne opreme koja omogućuje optimalne rezultate";
const text_about_short_4 = "Stručni tim koji razumije potrebe svakog projekta";




</script>