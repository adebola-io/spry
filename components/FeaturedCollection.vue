<script setup lang="ts">
defineProps<{
   large?: boolean;
   data: CollectionSummary;
}>();
</script>

<template>
   <NuxtLink
      :to="`/featured/${data.id}`"
      :style="{ backgroundImage: `url(${data.banner})` }"
      class="featured-collection relative duration-500 animate-[feature-expand_900ms] cursor-pointer [--arrow-opacity:0] hover:[--arrow-opacity:1] h-full w-full bg-center bg-cover border-dark-purple border-[4px] bg-fandago flex items-end justify-between rounded-[15px]"
   >
      <div
         class="w-full h-full text-white flex flex-col justify-end pl-half-distance pr-[20%] pb-distance"
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
         <p
            class="overflow-hidden text-ellipsis w-[85%] summary-text max-sm:mb-distance"
         >
            {{ data.description }}
         </p>
      </div>
      <div
         class="absolute right-distance bottom-distance border-candy-pink border-[5px] opacity-[var(--arrow-opacity)] duration-300 flex items-center justify-center rounded-[50%] aspect-square w-[10%]"
      >
         <img class="scale-[.8]" src="~~/assets/svg/Arrow.svg" alt="->" />
      </div>
   </NuxtLink>
</template>

<style scoped>
p {
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
}

.featured-collection:hover {
   @apply text-dark-purple;
   box-shadow: -4px 4px 3px 0;
   transform: translate(4px, -4px);
}
@media (max-width: 600px) {
   .featured-collection {
      @apply w-[100vw] min-w-[100vw] rounded-none border-none;
   }
   .featured-collection:hover {
      --arrow-opacity: 0;
      box-shadow: none;
      transform: none;
   }
   .featured-collection > div:nth-child(1) {
      @apply pb-[var(--twice-distance)];
   }
}
</style>
