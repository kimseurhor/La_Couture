<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
<section class="bg-[#E7E7CB]  py-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-12v font-playfair">What Our Clients Say</h2>
      <p class="text-lg mb-8 font-playfair">Every story is unique, and everyone deserves perfection.</p>

      <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 mx-20">
        <div class="bg-[#FFFFF0] shadow-md rounded-lg p-6 flex flex-col items-center mx-2">
          <div class="flex items-center mb-4 ">
            <img src="@/assets/img/client1.png" alt="Client 1" class="w-[350px] h-full rounded-lg  mr-4">
            <div class="font-fairplay ">
              <h4 class="text-lg font-bold ">Vitou & Phanin</h4>
              <p class="text-sm text-gray-500">Golden Blossom Elegance.</p>
            </div>
          </div>
          <p class="font-raleway mx-4 text-center leading-[32px] text-[20px]">”La Couture made our wedding day unforgettable. The gown and suit they designed were masterpieces, blending tradition with modern elegance. Their dedication to detail and exceptional craftsmanship truly made us feel special. We’re so grateful for their expertise and passion”</p>
        </div>

        <div class="bg-[#FFFFF0] shadow-md rounded-lg p-6 flex flex-col items-center mx-2">
          <div class="flex items-center mb-4">
            <img src="@/assets/img/client2.png" alt="Client 2" class="w-[350px] h-full rounded-lg  mr-4">
            <div class="font-fairplay">
              <h4 class="text-lg font-bold ">Kimson & Julie</h4>
              <p class="text-sm text-gray-500 ">Graceful Pink Pearl.</p>
            </div>
          </div>
          <p class="font-raleway mx-4 text-center leading-[32px] text-[20px]">”Our wedding attire was beyond perfect! La Couture truly brought our vision to life, blending tradition with modern elegance. The quality and craftsmanship were unmatched, and the entire process was seamless and enjoyable. We couldn’t have asked for a better experience.”</p>
        </div>

        <div class="bg-[#FFFFF0] shadow-md rounded-lg p-6 flex flex-col items-center mx-2">
          <div class="flex items-center mb-4">
            <img src="@/assets/img/client3.png" alt="Client 3" class="w-[350px] h-full rounded-lg mr-10">
            <div class="font-fairplay">
              <h4 class="text-lg font-bold">Eav & Pich</h4>
              <p class="text-sm text-gray-500">The Garden of Love.</p>
            </div>
          </div>
          <p class="font-raleway text-center mx-4 leading-[32px] text-[20px]">"La Couture exceeded our expectations! The details, the fit, and the elegance of their work made our day extra special. Their dedication to creating unique designs and making us feel like their top priority was truly remarkable. The entire experience was seamless, and we couldn’t have asked for a better outcome."</p>
        </div>

        <div class="bg-[#FFFFF0] shadow-md rounded-lg p-6 flex flex-col items-center mx-2">
          <div class="flex items-center mb-4">
            <img src="@/assets/img/client4.png" alt="Client 4" class="w-[350px] h-full rounded-lg  mr-4">
            <div class="font-fairplay">
              <h4 class="text-lg font-bold">Ty & Pin</h4>
              <p class="text-sm text-gray-500">Long And Magical Night.</p>
            </div>
          </div>
          <p class="font-raleway text-center mx-4 leading-[32px] text-[20px]">"Working with La Couture was effortless. Their designs were stunning, and the final pieces left us and our guests in awe. From our first consultation to the final fitting, the entire process was smooth and enjoyable. They made us feel confident, special, and cared for every step of the way."</p>
        </div>
 
      </div>       <div class="text-center mt-8">
        <a href="https://web.facebook.com/lacouturephnompenh/photos_albums?_rdc=1&_rdr" 
           class="bg-[#D4AF37] hover:bg-[#C2A136] text-white font-bold py-2 px-4 rounded text-playfair" target="_blank">
          See More
        </a>
        </div>
    </div></section>
    <div class="bg-[#FFFFF0] py-16 mt-6">
  <div class="container  px-4 lg:mx-32 md:mx-auto ">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="text-center lg:ml-[150px] md:ml-[50px] md:text-left font-playfair">
        <h1 class="text-5xl font-meduim mb-4">Your Journey To <br/> Elegance Begins <br> Here</h1>
        <p class="text-xl mb-6 font-black">"Book Your Experience Today"</p>
        <RouterLink to="/contact" class="bg-[#800020] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg m-6">Contact</RouterLink>
      </div>
      <div> 
        <img src="@/assets/img/talking.png" alt="Two women talking" class="lg:mr-[300px] md:mr-0 md:mt-8 mt-4"> 
      </div>
    </div>
  </div>
</div>
  

</template>