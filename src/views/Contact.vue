<script setup>
import { useToast } from 'vue-toastification';


const toast = useToast();   

const submitform = () => {
    toast.success('Your inquiry has been submitted successfully');
}


</script>
<template>
<section class="bg-[#F7F7EA] ">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-[300px] ">
<img src="@/assets/img/contactUs.png" alt="contact us image" class="w-[500px] h-[400px] object-cover flex items-center justify-center ">
<div class=" flex flex-col items-center justify-center font-playfair text-[45px] font-meduim">Have a Question?<br>Call us at: <br>
    <a href="tel:+855123456789" class="hover:underline">+855-123-456-789</a></div>
</div>
</section>
<section class="bg-[#E0E0C4] py-10">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-[80px] ">
    <div>
        <div class="font-raleway text-[32px] flex flex-col items-center ">
            Find us at:
        </div>
        <iframe class="w-[600px] h-[500px] mt-1 mx-10 pb-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.84971671619!2d104.8828671!3d11.55455115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951b1db4b170d%3A0x749634ed2a6c4d94!2sMidtown%20Mall!5e0!3m2!1sen!2skh!4v1737273911196!5m2!1sen!2skh"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="flex align-middle justify-center md:justify-start mx-[80px]">
            <i class="pi pi-map-marker text-orange-700 text-xl py-1"></i>
            <div class="font-raleway text-[20px] flex flex-col items-left mx-1 ">
            St.123 Sen Sok, Phnom Penh, Cambodia.
            </div>
        </div>
    </div>
    <div class="bg-[#FFFFF0] flex flex-col items-center rounded-lg">
        <form @submit.prevent="submitform" class="pt-16"><p class="font-playfair text-2xl mx-[145px] "> Email us</p> <br>
            <label for="name" class="text-[24px] font-raleway">Name:</label>
            <input type="name" class="bg-[#E0E0C4] rounded-lg mx-4 px-4 py-3 "><br>
            <label for="email" class="text-[24px] font-raleway">Email:</label>
            <input type="email" class="bg-[#E0E0C4] rounded-lg mx-4 px-4 py-3 mt-8"><br>
            <label for="date" class="text-[24px] font-raleway">Date:</label>
            <input type="date" class="bg-[#E0E0C4] rounded-lg mx-7 px-10 py-3 mt-8 mb-2"><br>
            <label for="message" class="text-[24px] font-raleway ">Message:</label><br>
            <textarea type="message" class="bg-[#E0E0C4] rounded-lg p-20 mt-2"></textarea><br>
            <button type="submit" class="font-raleway text-white text-[22px] bg-[#800020] rounded-lg p-2 my-4 mx-[70px]">Submit Your Inquiry</button>

        </form>
    </div>
</div>
</section>
</template>
