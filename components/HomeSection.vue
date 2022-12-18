<script setup lang="ts">
defineProps<{
   heading: string;
   items: Item.Unit[];
   subHeading: string;
}>();
</script>

<template>
   <section class="home-section h-fit w-full p-[2vw] my-distance">
      <h1
         class="text-4xl max-md:text-2xl mb-half-distance font-bold font-oceanwide text-dark-purple"
      >
         {{ heading }}
      </h1>
      <div class="product-carousel overflow-x-scroll w-full">
         <div class="flex w-fit gap-half-distance">
            <ProductItem v-for="item in items.slice(0, 8)" :item="item" />
         </div>
      </div>
   </section>
</template>

<style scoped>
.product-carousel::-webkit-scrollbar {
   display: none;
}
</style>
