<script setup lang="ts">
defineProps<{
   review: Item.Review;
}>();
</script>

<template>
   <div
      class="border-[4px] h-max w-full border-fandago bg-cream-pink mb-distance"
   >
      <div
         class="flex items-center ml-half-distance gap-quarter-distance my-half-distance"
      >
         <div class="bg-fandago h-[35.67px] aspect-square"></div>
         <div class="font-bold">John Doe</div>
      </div>
      <div class="flex px-half-distance">
         <img src="~~/assets/svg/Star.svg" v-for="_ in 5" alt="*" />
         <div
            class="ml-quarter-distance [opacity:50%] text-[rgba(54_17_52_0.5)] [font-weight:700] font-nunito text-[14px]"
         >
            {{ new Date(review.date).toDateString() }}
         </div>
      </div>
      <p class="p-half-distance">
         {{ review.content }}
      </p>
   </div>
</template>
