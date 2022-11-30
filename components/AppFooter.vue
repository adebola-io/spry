<template>
   <footer class="w-full md:pt-[76.88px] px-[2vw] bg-ballet-pink">
      <div
         id="footer-tagline"
         class="w-full font-oceanwide flex items-center flex-col max-md:hidden"
      >
         <h1 class="[font-weight:600] text-[42px] text-center mb-[20px]">
            Choose style. Choose comfort.
            <div>Choose Spry.</div>
         </h1>
         <p class="text-[18px] text-center w-[30%] min-w-[200px] mb-[20px]">
            Get the most affordable clothing articles without sacrificing style
            or comfort, when you sign up and shop on Spry.
         </p>
         <button
            class="bg-fandago text-ballet-pink text-[26.1px] px-[59px] py-[16.12px] rounded-[13.3733px]"
            type="button"
         >
            Get Started
         </button>
      </div>

      <div
         class="flex py-[60px] mb-[30px] items-center justify-center relative max-md:flex-col"
      >
         <img
            src="~~/static/logo.svg"
            class="h-[57.72px] md:absolute md:left-0 max-md:mb-[20px]"
            alt="Spry"
         />
         <ul
            class="flex max-w-[45vw] font-nunito list-inside list-none max-md:mb-[20px] max-md:justify-center"
         >
            <li
               class="footer-links ml-[2vw] text-[20px] max-md:whitespace-nowrap"
               v-for="link in footerLinks"
            >
               {{ link }}
            </li>
         </ul>
         <div
            id="socials"
            class="flex items-center gap-[18.66px] md:absolute md:right-0"
         >
            <img src="~~/assets/svg/Facebook.svg" alt="Facebook" />
            <img src="~~/assets/svg/Instagram.svg" alt="Instagram" />
            <img src="~~/assets/svg/Linkedin.svg" alt="LinkedIn" />
            <img src="~~/assets/svg/Twitter.svg" alt="Twitter" />
         </div>
      </div>
   </footer>
</template>

<script lang="ts" setup>
const footerLinks = ["What We Do", "About Us", "Privacy Policy", "Blog"];
</script>

<style scoped>
#socials img {
   @apply w-[3vw] max-w-[45px] max-md:w-fit cursor-pointer;
}
#socials img:hover {
   filter: contrast(0.5);
}
</style>
