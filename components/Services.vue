<template>
  <div id="services" class="relative
              
              mb-20 lg:mb-40
              text-white
              top-0
              w-full h-full
              flex flex-col
              items-start
              justify-start">

    <div class="absolute mt-10
                right-0
                -z-10
                bg-green-300
                w-full lg:w-3/4 h-2/3
                rounded-bl-full
                shadow-2xl
                 bg-center bg-cover bg-no-repeat
                 bg-[url(/img/services_1.jpg)]">
    </div>

    <div class="w-full h-full
                px-5 lg:pl-60
                flex flex-col
                items-center
                justify-center">

      <div class="w-full h-2/3
                  flex flex-col
                  items-start
                  justify-start">

        <div class="bg-rast-mid/70 backdrop-blur-xs
                    w-8/12 lg:w-4/12
                      text-center
                      py-10 px-10 mb-5
                      rounded-tl-full rounded-br-full
                      shadow-lg">

          <h1 class="text-4xl lg:text-5xl
                     font-bodoni
                     text-white
                     font-black">
            što nudimo
          </h1>
        </div>

         
          <div class="font-montserrat font-medium text-xl text-rast-dark text-left">
            <div class="relative
                    flex flex-col text-center
                    items-center justify-center
                    bg-rast-light/70 backdrop-blur-xs
                    p-3 px-8 rounded-br-full
                    mb-3">
          
                    <h2>
                      
                      {{ usluge_podnaslov_1 }}
                    
                    </h2>

        </div>
        <div class="relative
                    flex flex-col text-center
                    items-center justify-center
                    bg-rast-light/70 backdrop-blur-xs
                    p-3 px-8 rounded-br-full
                    mb-3">
          
                    <h2>
                      
                      {{ usluge_podnaslov_2 }}
                    
                    </h2>

        </div>
        <div class="relative
                    flex flex-col text-center
                    items-center justify-center
                    bg-rast-light/70 backdrop-blur-xs
                    p-3 px-8 rounded-br-full
                    mb-3">
          
          
                    <h2>
                      
                      {{ usluge_podnaslov_3 }}
                    
                    </h2>

        </div>
        <div class="relative
                    flex flex-col text-center
                    items-center justify-center
                    bg-rast-light/70 backdrop-blur-xs
                    p-3 px-8 rounded-br-full
                    mb-3">
          
                    <h2>
                      
                      {{ usluge_podnaslov_4 }}
                    
                    </h2>

        </div>
        <div class="relative
                    flex flex-col text-center
                    items-center justify-center
                    bg-rast-light/70 backdrop-blur-xs
                    p-3 px-8 rounded-br-full
                    mb-3">
          
          
                    <h2>
                      
                      {{ usluge_podnaslov_5 }}
                    
                    </h2>

        </div>
        <div class="relative
                    flex flex-col text-center
                    items-center justify-center
                    bg-rast-light/70 backdrop-blur-xs
                    p-3 px-8 rounded-br-full
                    mb-3">
          
          
                    <h2>
                      
                      {{ usluge_podnaslov_6 }}
                    
                    </h2>

        </div>
        <div class="relative
                    flex flex-col text-center
                    items-center justify-center
                    bg-rast-light/70 backdrop-blur-xs
                    p-3 px-8 rounded-br-full
                    mb-3">
          
          
                    <h2>
                      
                      {{ usluge_podnaslov_7 }}
                    
                    </h2>
          </div>

        </div>

        <div class="relative flex flex-col w-full h-full lg:w-1/3 justify-start bg-rast-cream/80 backdrop-blur-md">
          <!-- Glass effect sloj -->
           <div class="top-0 left-0 p-12 lg:p-10 lg:w-full text-lg lg:text-sm text-slate-900 font-light font-montserrat">
            <h3>{{ usluge_mali_1 }}</h3><br>
            <h3>{{ usluge_mali_2 }}</h3><br>
            
           </div>
         

          <!-- Tekst s višim z-index-om da ne bude zahvaćen blur efektom -->
          
        </div>
      </div>
      
    </div>
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