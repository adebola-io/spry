<template>
   <main class="w-full min-h-[80vh] pt-distance">
      <section
         v-if="featureddata"
         class="featured-section grid mx-[2vw] h-[60vw] max-h-[80vh] [grid:_auto_/_repeat(2,_calc(50%-var(--half-distance)))] justify-center gap-distance mb-distance"
      >
         <FeaturedCollection
            class="featured-item"
            large
            :data="featureddata[0]"
         />
         <div
            class="featured-grid-sub-container grid [grid:auto_auto/auto] gap-distance"
         >
            <FeaturedCollection
               v-for="(item, index) in featureddata.slice(1, 3)"
               class="featured-item"
               :key="index"
               :data="item"
            />
         </div>
      </section>
      <template v-if="homesections">
         <!-- First Half of Home Sections -->
         <HomeSection
            v-for="homesection in homesections.slice(
               0,
               Math.floor(homesections.length / 2)
            )"
            v-bind="homesection"
         />
         <section
            id="deals-of-the-day"
            class="relative bg-cover ml-[2vw] bg-center h-[500px] max-sm:h-[320px] rounded-l-[15px] overflow-hidden mb-distance"
         >
            <div class="absolute h-full w-full bg-black opacity-50"></div>
            <div
               class="relative h-full grid [grid:100%/25%_auto] max-sm:[grid:100%/40%_auto] gap-distance overflow-scroll scroll-hidden"
            >
               <div
                  class="flex flex-col justify-center text-white h-full pl-distance font-oceanwide"
               >
                  <h1 class="text-6xl max-sm:text-3xl">Deals of the Day</h1>
                  <span class="text-4xl max-sm:text-2xl mt-[25px]">
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
         <HomeSection
            v-for="homesection in homesections.slice(
               Math.floor(homesections.length / 2)
            )"
            v-bind="homesection"
         />
      </template>
   </main>
</template>

<script lang="ts" setup>
useHead({
   title: "Spry Clothing Store | Comfort and Style for Affordable Prices",
});
const { data: featureddata } = await useFetch("/api/collections/featured"),
   { data: homesections } = await useFetch("/api/homesections"),
   { data: deals } = useFetch("/api/homesections/deals");
const time = useTimeLeftInDay();
</script>

<style scoped>
#deals-of-the-day {
   background-image: url(~~/assets/images/stock-6.jpg);
}
@media (max-width: 600px) {
   main {
      padding-top: 0;
   }
   .featured-section {
      @apply flex justify-start overflow-x-scroll w-full mx-0 gap-0;
   }
   .featured-section::-webkit-scrollbar {
      display: none;
   }
   .featured-grid-sub-container {
      @apply flex gap-0;
   }
}
</style>
