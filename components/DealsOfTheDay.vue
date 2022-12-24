<script setup lang="ts">
const { data: deals } = await useFetch("/api/homesections/deals");
const time = useTimeLeftInDay();
</script>

<template>
   <section
      id="deals-of-the-day"
      class="relative bg-cover ml-[2vw] max-sm:ml-0 max-sm:rounded-none bg-center h-[500px] max-md:h-[400px] max-sm:h-[250px] rounded-l-[15px] overflow-hidden mb-distance"
   >
      <div class="absolute h-full w-full bg-black opacity-50"></div>
      <div
         class="relative h-full grid [grid:100%/25%_auto] max-sm:[grid:100%/40%_auto] gap-distance overflow-scroll scroll-hidden"
      >
         <div
            class="flex flex-col justify-center text-white h-full pl-distance font-oceanwide"
         >
            <h1 class="text-6xl max-md:text-4xl max-sm:text-2xl">
               Deals of the Day
            </h1>
            <span class="text-4xl max-md:text-2xl max-sm:text-xl mt-distance">
               {{ time }}
            </span>
         </div>
         <div
            class="h-full flex items-center gap-distance pr-distance w-max"
            v-if="deals"
         >
            <ProductItem v-for="deal in deals.items" :item="deal" />
         </div>
      </div>
   </section>
</template>
