<script setup>
import NavBar from './components/NavBar.vue';
import Footerr from './components/Footer.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <NavBar/>
  <RouterView/>
  <Footerr/>
</template>