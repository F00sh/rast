<template>
  <div id="about" class="relative
                
                mb-32 lg:mb-60
                text-white
                top-0
                w-full h-full
                flex flex-col
                items-start
                justify-start">

    <div class="absolute
                  -z-10
                  bg-green-300
                  w-full lg:w-3/4 h-full
                  rounded-br-full
                  shadow-2xl
                  bg-center bg-cover bg-no-repeat bg-[url(/img/about_1.jpg)]">
    </div>

    <div class="w-full h-full
                  px-5 lg:pr-60
                  flex flex-col
                  items-center
                  justify-center">

      <div class="w-full h-2/3
                    flex flex-col
                    items-end
                    justify-start">

        <div class="bg-emerald-400
                      w-8/12 lg:w-4/12
                      text-center
                      py-10 px-10 mb-2
                      rounded-tr-full rounded-bl-full
                      shadow-lg">

          <h1 class="text-5xl 
                       uppercase 
                       font-black">
            više o nama
          </h1>
        </div>
        <div class="bg-green-500
                      w-10/12 lg:w-4/12
                      text-center
                      py-5 px-10 mb-2
                      rounded-tl-full rounded-br-full
                      shadow-lg">

          <h2 class="text-lg uppercase font-semibold">
            Visoka razina stručnosti i pažnja prema detaljima
          </h2>
        </div>
        <div class="bg-green-500
                      w-10/12 lg:w-4/12
                      text-center
                      py-5 px-10 mb-2
                      rounded-bl-full rounded-tr-full
                      shadow-lg">

          <h2 class="text-lg uppercase font-semibold">
            Brza i učinkovita izvedba radova
          </h2>
        </div>
        <div class="bg-green-500
                      w-10/12 lg:w-4/12
                      text-center
                      py-5 px-10 mb-2
                      rounded-tl-full rounded-br-full
                      shadow-lg">

          <h2 class="text-lg uppercase font-semibold">
            Korištenje moderne opreme koja omogućuje optimalne rezultate
          </h2>
        </div>
        <div class="bg-green-500
                      w-10/12 lg:w-4/12
                      text-center
                      py-5 px-10 mb-5
                      rounded-bl-full rounded-tr-full
                      shadow-lg">

          <h2 class="text-lg uppercase font-semibold">
            Stručni tim koji razumije potrebe svakog projekta
          </h2>
        </div>
        <div class="relative flex w-full lg:w-4/12 text-left py-14 px-14 shadow-lg">
          <!-- Glass effect sloj -->
          <div class="absolute inset-0 z-0 bg-emerald-700/30 backdrop-blur-xs rounded-lg"></div>

          <!-- Tekst s višim z-index-om da ne bude zahvaćen blur efektom -->
          <div class="relative z-10">
            <h3 class="text-md text-slate-200 uppercase font-normal">
              {{ text_about_long_1 }}
              <br /><br /><br />
              {{ text_about_long_2 }}
              <br /><br /><br />
              Putujemo širom Hrvatske i susjednih zemalja kako bismo svoje usluge učinili dostupnima svima kojima je
              potrebno stručno uređenje zelenih površina. Naša fleksibilnost i pouzdanost čine nas idealnim partnerom za
              projekte svih veličina.
            </h3>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
const text_about_long_1 = "Rast je tvrtka specijalizirana za uređenje okućnica, vrtova i zelenih površina. Naš tim stručnjaka, opremljen modernim alatima i tehnikama, posvećen je stvaranju zelenih oaza koje odišu ljepotom i funkcionalnošću. Bilo da se radi o malom vrtu ili velikom masliniku, svaki projekt tretiramo s istom pažnjom i predanošću.";
const text_about_long_2 = "S dugogodišnjim iskustvom u različitim vrstama projekata, nudimo širok spektar usluga, uključujući projektiranje, košnju, postavljanje travnatih tepiha, navodnjavanje, sadnju biljaka i rad u maslinicima. Bez obzira na to je li teren zahtjevan i nepristupačan, naš tim uvijek pronalazi optimalno rješenje kako bi klijentima pružio najbolje rezultate.";
</script>