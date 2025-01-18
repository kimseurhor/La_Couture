import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutUs from '@/views/AboutUs.vue'
import Contact from '@/views/Contact.vue'
import Gallery from '@/views/Gallery.vue'
import Testi from '@/views/Testi.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,

    },
    {
      path: '/testi',
      name: 'testi',
      component: Testi,
    },
    
  ],
})

export default router
