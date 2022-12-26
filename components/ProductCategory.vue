<template>
   <NuxtLink
      class="product-category"
      :to="`/categories/${category.name.toLowerCase()}`"
   >
      <div
         class="product-category-banner-container border-[3px] duration-300 overflow-hidden border-dark-purple h-[300px] max-md:h-[200px] max-sm:h-[150px] aspect-[1.5]"
      >
         <div
            :style="{ backgroundImage: `url(${category.banner})` }"
            class="product-category-banner duration-300 w-full h-full bg-center bg-cover"
         ></div>
      </div>
      <h1
         class="text-dark-purple text-2xl max-md:text-xl max-sm:text-[12pt] mt-half-distance font-bold"
      >
         {{ category.name }}
      </h1>
   </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
   category: Category;
}>();
</script>

<style scoped>
.product-category:hover .product-category-banner-container {
   box-shadow: -3px 5px 2px 0;
   @apply text-dark-purple scale-[.97] max-md:[box-shadow:-2px_3px_2px_0];
}
.product-category:hover
   .product-category-banner-container
   .product-category-banner {
   transform: scale(1.1);
}
</style>
