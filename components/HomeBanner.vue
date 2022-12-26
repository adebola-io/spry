<script setup lang="ts"></script>

<template>
   <section
      id="banner"
      class="aspect-[4] max-md:aspect-[2.7] bg-candy-pink mx-[2vw] border-[3px] border-dark-purple"
   ></section>
</template>

<style>
#banner {
   background-image: url(~~/assets/images/Banner.png);
   background-size: cover;
   background-position: center;
}
@media (max-width: 600px) {
   #banner {
      @apply mx-0 border-x-0 border-t-0 border-b-2;
   }
}
</style>
