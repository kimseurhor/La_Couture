<script setup>

import gallery1 from '@/assets/img/gallery11.png'


</script>
<template>
  <div class="bg-[#A9A99D] bg-opacity-20">
<div class="xl:mx-[120px] lg:mx-[60px] md:mx-[40] sm:mx-0 ">
    <div class="bg-[url('@/assets/img/banner2.png')] bg-no-repeat bg-cover bg-bottom w-full h-[800px] flex items-center justify-center ">
  <div class="text-center text-[#800020] bg-[#F5F5DC] bg-opacity-35 px-4 py-2">
    <h1 class="text-5xl font-playfair font-semibold pd-2">La Couture`s </h1>
    <p class="text-2xl font-playfair font-semibold ">Explore our collection of elegant designs and enchanting decors, crafted for <br/>unforgettable moments.</p>
  </div>
    </div>
  </div>
</div>
<div class="bg-[#A9A99D] bg-opacity-20">
  <div class=" lg:py-14 lg:mx-14 md:py-12 md:mx-12 sm:py-8 sm:mx-8">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-12 font-playfair">Our Gallery</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-[#FFFFF0] shadow-md rounded-lg overflow-hidden"> 
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2 font-playfair">Golden Blossom Elegance.</h3>
          </div>
          <div class="grid grid-cols-3 gap-[1px] mx-4 mb-4"> 
            <img src="@/assets/img/gallery11.png" alt="Image 1-1" class="w-full h-full object-cover">
            <img src="@/assets/img/gallery12.png" alt="Image 1-2" class="w-full h-full object-cover">
            <img src="@/assets/img/gallery13.png" alt="Image 1-3" class="w-full h-full object-cover">
          </div>

        </div>

        <div class="bg-[#FFFFF0] shadow-md rounded-lg overflow-hidden">
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2 font-playfair">Graceful Pink Pearl.</h3>
          </div>
          <div class="grid grid-cols-3 gap-[1px] mx-4 mb-4"> 
            <img src="@/assets/img/gallery21.png" alt="Image 1-1" class="w-full h-[140px] object-cover">
            <img src="@/assets/img/gallery22.png" alt="Image 1-2" class="w-full h-[140px] object-cover">
            <img src="@/assets/img/gallery23.png" alt="Image 1-3" class="w-full h-[140px] object-cover">
          </div>

        </div>

        <div class="bg-[#FFFFF0] shadow-md rounded-lg overflow-hidden">
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2 font-playfair">The Garden Of Love.</h3>
          </div>

          <div class="grid grid-cols-3 gap-[1px] mx-4 mb-4"> 
            <img src="@/assets/img/gallery31.png" alt="Image 1-1" class="w-full h-full object-cover">
            <img src="@/assets/img/gallery32.png" alt="Image 1-2" class="w-full h-full object-cover">
            <img src="@/assets/img/gallery33.png" alt="Image 1-3" class="w-full h-full object-cover">
          </div>

        </div>

        <div class="bg-[#FFFFF0] shadow-md rounded-lg overflow-hidden">
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2 font-playfair">Long And Magical Night.</h3>
          </div>
          <div>
            <div class="grid grid-cols-3 gap-[1px] mx-4 mb-4"> 
            <img src="@/assets/img/gallery41.png" alt="Image 1-1" class="w-full h-full object-cover">
            <img src="@/assets/img/gallery42.png" alt="Image 1-2" class="w-full h-full object-cover">
            <img src="@/assets/img/gallery43.png" alt="Image 1-3" class="w-full h-[140px] object-cover">
          </div>

          </div>
        </div>
      </div>
      <div class="text-center mt-8">
        <a href="https://www.pinterest.com/lacouturewedding/" 
           class="bg-[#D4AF37] hover:bg-[#C2A136] text-white font-bold py-2 px-4 rounded text-playfair" target="_blank">
          See More
        </a>
      </div> 
    </div>
  </div>
  </div>


</template>