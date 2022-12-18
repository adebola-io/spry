<script setup lang="ts">
defineProps<{
   heading: string;
   items: Item.Unit[];
   subHeading: string;
}>();
</script>

<template>
   <section class="home-section h-fit w-full pt-[2vw] pb-[2vw] my-distance">
      <h1
         class="text-4xl max-md:text-2xl ml-[2vw] mb-half-distance font-bold font-oceanwide text-dark-purple"
      >
         {{ heading }}
      </h1>
      <div class="product-carousel overflow-x-scroll w-full">
         <div class="flex w-fit gap-half-distance mr-double-distance">
            <ProductItem
               v-for="(item, index) in items.slice(0, 8)"
               :class="[{ 'ml-[2vw]': index === 0 }]"
               :item="item"
            />
         </div>
      </div>
   </section>
</template>

<style scoped>
.product-carousel::-webkit-scrollbar {
   display: none;
}
</style>
