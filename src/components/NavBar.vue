<script setup>
import logo from '@/assets/img/logo.png'
import { RouterLink, useRoute } from 'vue-router';
 const isActiveLink= (routePath) => {
    const route = useRoute();
    return route.path === routePath;
  }

</script>

<template>

<nav class="bg-beige border-b border-gold">
      <div class="lg:mx-auto sm:mx-60 mx-30 max-w-7xl px-4 sm:px-6 ">
        <div class="flex h-[120px] items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center " to="/">
              <img class="h-[90px] w-auto" v-bind:src="logo" alt="logo" />

            </RouterLink>
            <div class="md:ml-auto lg:ml-[560px]">
              <div class="flex space-x-2 items-center my-6 justify-center ">
                <RouterLink
                  to="/"
                  :class="[isActiveLink('/')?'bg-[#9B8028] text-white':'hover:bg-[#C2A136] hover:text-white', ' font-playfair text-2xl text-[#D4AF37]', 'px-3', 'py-2', 'rounded-md', ]"
                  >Home</RouterLink
                >
                <RouterLink
                  to="/gallery"
                  :class="[isActiveLink('/gallery')?'bg-[#9B8028] text-white':'hover:bg-[#C2A136] hover:text-white', 'font-playfair text-2xl text-[#D4AF37]', 'px-3', 'py-2', 'rounded-md', ]"
                  >Gallery</RouterLink
                >
                <RouterLink
                  to="/testi"
                  :class="[isActiveLink('/testi')?'bg-[#9B8028] text-white':'hover:bg-[#C2A136] hover:text-white', 'font-playfair text-2xl text-[#D4AF37]', 'px-3', 'py-2', 'rounded-md', ]"
                  >Testimonials</RouterLink
                >
                <RouterLink
                  to="/about"
                  :class="[isActiveLink('/about')?'bg-[#9B8028] text-white':'hover:bg-[#C2A136] hover:text-white', ' font-playfair text-2xl text-[#D4AF37]', 'px-3', 'py-2', 'rounded-md', ]"
                  >About Us</RouterLink
                >
                <RouterLink
                  to="/contact"
                  :class="[isActiveLink('/contact')?'bg-[#9B8028] text-white':'hover:bg-[#C2A136] hover:text-white', 'font-playfair text-2xl text-[#D4AF37]', 'px-3', 'py-2', 'rounded-md', ]"
                  >Contact</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

</template>