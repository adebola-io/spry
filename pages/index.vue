<template>
   <main class="animated w-full min-h-[80vh] pt-distance">
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
      <HomeBanner />
      <template v-if="homesections">
         <!-- First Half of Home Sections -->
         <HomeSection
            v-for="homesection in firstSectionList"
            v-bind="homesection"
         />
         <DealsOfTheDay />
         <HomeSection v-bind="homesections[2]" />
         <HomeSection
            v-if="categories"
            heading="Categories"
            :categories="categories"
            sub-heading=""
         />
         <HomeSection v-bind="homesections[3]" />
         <HomeSection v-bind="homesections[4]" />
      </template>
   </main>
</template>

<script lang="ts" setup>
useHead({
   title: "Spry Clothing Store | Comfort and Style for Affordable Prices",
});
const { data: featureddata } = await useFetch("/api/collections/featured"),
   { data: homesections } = await useFetch("/api/homesections"),
   { data: categories } = await useFetch("/api/categories");

const firstSectionList = computed(() => homesections.value?.slice(0, 2));

// useLazyProductLoading();
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
      @apply flex justify-start overflow-x-scroll w-full mx-0 gap-0 mb-0;
   }
   .featured-section::-webkit-scrollbar {
      display: none;
   }
   .featured-grid-sub-container {
      @apply flex gap-0;
   }
}
</style>
