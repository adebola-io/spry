<script setup lang="ts">
defineProps<{
   review: Item.Review;
}>();
</script>

<template>
   <div
      class="md:border-4 max-md:border-b-2 h-max w-full max-md:text-dark-purple border-fandago md:bg-cream-pink md:mb-distance max-md:mb-triple-distance max-sm:mb-double-distance"
   >
      <div
         class="flex items-center md:ml-half-distance gap-quarter-distance my-half-distance"
      >
         <div
            class="bg-fandago h-[35.67px] max-sm:h-[25px] aspect-square"
         ></div>
         <div
            class="font-bold ml-half-distance max-sm:ml-quarter-distance max-sm:text-[11pt]"
         >
            John Doe
         </div>
      </div>
      <div class="flex md:px-half-distance">
         <img src="~~/assets/svg/Star.svg" v-for="_ in 5" alt="*" />
         <div
            class="ml-quarter-distance max-md:ml-half-distance [opacity:50%] text-[rgba(54_17_52_0.5)] [font-weight:700] font-nunito text-[14px]"
         >
            {{ new Date(review.date).toDateString() }}
         </div>
      </div>
      <p
         class="p-half-distance max-md:px-0 max-md:mb-distance max-sm:mb-half-distance max-sm:text-[10pt]"
      >
         {{ review.content }}
      </p>
   </div>
</template>
