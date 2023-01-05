<script setup lang="ts">
defineProps<{
   value: number;
   noOfRatings: number;
}>();
</script>

<template>
   <div
      class="rounded-[50%] h-[313px] aspect-square ml-[2vw] max-sm:ml-[3vw] border-[25px] border-fandago bg-transparent flex items-center justify-center flex-col"
   >
      <span class="text-5xl font-bold">
         {{ value.toPrecision(2) }} <span v-if="value < 5"> / 5 </span>
      </span>
      <div class="flex">
         <ProductRating :value="value" />
      </div>
      <span>{{ noOfRatings }} verified ratings</span>
   </div>
</template>
