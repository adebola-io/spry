<script setup lang="ts">
defineProps<{
   large?: boolean;
   data: CollectionSummary;
}>();
</script>

<template>
   <div
      :style="{ backgroundImage: `url(${data.banner})` }"
      class="relative animate-[feature-expand_900ms] text-white cursor-pointer [--arrow-opacity:0] hover:[--arrow-opacity:1] h-full w-full bg-center bg-cover border-dark-purple border-[4px] bg-fandago flex items-end justify-between rounded-[15px]"
   >
      <div
         class="w-full h-full flex flex-col justify-end pl-[var(--half-distance)] pr-[20%] pb-[var(--distance)]"
         :style="{
            backgroundImage:
               'linear-gradient(180deg, rgba(21, 21, 21, 0) 0%, rgba(21, 21, 21, 0.6) 69.48%, #151515 100%)',
         }"
      >
         <h2
            class="mb-[var(--quarter-distance)] w-[85%] heading-text font-oceanwide"
         >
            {{ data.name }}
         </h2>
         <p class="overflow-hidden text-ellipsis w-[85%] summary-text">
            {{ data.description }}
         </p>
      </div>
      <div
         class="absolute right-[var(--distance)] bottom-[var(--half-distance)] border-candy-pink border-[5px] opacity-[var(--arrow-opacity)] duration-300 flex items-center justify-center rounded-[50%] aspect-square w-[10%]"
      >
         <img class="scale-[.8]" src="~~/assets/svg/Arrow.svg" alt="->" />
      </div>
   </div>
</template>

<style scoped>
p {
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
}
</style>
