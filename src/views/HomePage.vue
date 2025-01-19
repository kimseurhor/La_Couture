<script setup>
import { RouterLink, useRoute } from 'vue-router';
</script>
<template>
  <section class="bg-[#F5F5DC]">
<div class=" xl:mx-[120px] lg:mx-[60px] md:mx-[40] sm:mx-0">
    <div class="bg-[url('@/assets/img/banner.png')] bg-no-repeat bg-cover bg-bottom w-full h-[800px] flex items-center justify-center ">
  <div class="text-center text-[#800020]">
    <h1 class="text-5xl font-lobster font-semibold bg-[#F5F5DC] bg-opacity-35">LA COUTURE ALWAYS BRINGS YOU THE <br/>NEXT LEVEL WEDDING</h1>
  </div>
    </div>

</div>
</section>
<section class="bg-[#EBB9C0] py-16">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl text-white font-bold font-raleway mb-8">Discover Our Creations & Begin Your Dream Wedding <br> Planning</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-[300px]">
      <div class="bg-[#C99DA3] shadow-md rounded-lg p-8 text-center flex flex-col items-center">
        <img src="@/assets/img/consul.png" alt="Consultation Icon" class="mb-4">
        <h3 class="text-2xl text-white font-bold mb-3 font-raleway">Book a Consultation <br> Now!</h3>
        <RouterLink to="/contact" class="bg-[#800020] hover:bg-red-700 text-white font-bold py-2 px-8 rounded-lg font-playfair">Contact</RouterLink>
      </div>

      <div class="bg-[#C99DA3] shadow-md rounded-lg p-8 text-center flex flex-col items-center">
        <img src="@/assets/img/img.png" alt="Gallery Icon" class="mb-4">
        <h3 class="text-2xl font-bold mb-3 font-raleway text-white">View Our Wedding <br> Gallery!</h3>
        <RouterLink to="/gallery" class="bg-[#800020] hover:bg-red-700 text-white font-bold py-2 px-8 rounded-lg font-playfair">Gallery</RouterLink>
      </div>
    </div>
  </div>
</section>
<section class="bg-[#FFFFF0] py-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-12">Hear From Our Happy Clients</h2>

      <div class="bg-[#FFFFDD] shadow-md rounded-lg p-6 mx-8 py-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-[250px]">
        <div class="relative w-[400px] h-[300px]"> 
            <img src="@/assets/img/client1.png" alt="Testimonial Image" class="absolute top-0 left-0 w-full h-full object-cover">
          </div>
        <div class="p-4 flex flex-col items-center mt-4 mx-4 ">
          <p class="font-raleway text-[22px]">"La Couture made our wedding day unforgettable. The gown and suit they designed were masterpieces, blending tradition with modern elegance. We're so grateful for their expertise..."</p>
          <div class="flex items-center mt-4 font-raleway">
            <h4 class="text-lg font-meduim  font-raleway mr-2">Vitou & Phanin, Phnom Penh, Cambodia
</h4>
          </div>
        </div>
        </div>
      </div>

      <div class="text-center mt-8">
        
        <RouterLink to="/testi" class="bg-[#800020] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg font-playfair">Testimonial</RouterLink>
      </div> 
    </div>
  </section>

</template>