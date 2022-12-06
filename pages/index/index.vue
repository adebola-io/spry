<template>
   <main class="w-full min-h-[80vh] pt-[var(--distance)]">
      <div
         v-if="data"
         class="featured-grid-container grid mx-[2vw] h-[60vw] max-h-[80vh] [grid:_auto_/_repeat(2,_calc(50%-var(--half-distance)))] justify-center gap-[var(--distance)] mb-[var(--distance)]"
      >
         <FeaturedCollection large :data="data[0]" />
         <div
            class="featured-grid-sub-container grid [grid:auto_auto/auto] gap-[var(--distance)]"
         >
            <FeaturedCollection
               v-for="(item, index) in data.slice(1, 3)"
               :key="index"
               :data="item"
            />
         </div>
      </div>
   </main>
</template>

<script lang="ts" setup>
useHead({
   title: "Spry Clothing Store | Comfort and Style for Affordable Prices",
});

const { data } = await useFetch("/api/collections/featured");
</script>

<style scoped>
@media (max-width: 600px) {
   main {
      padding-top: 0;
   }
   .featured-grid-container {
      @apply bg-black block overflow-x-scroll w-full mx-0;
   }
   .featured-grid-sub-container {
      @apply flex;
   }
}
</style>
