<template>
   <NuxtLink
      :to="`/products/${item.id}`"
      :style="{ backgroundColor: `rgb(${item.theme.join(' ')})` }"
      class="product-item duration-300 relative border-[2.74088px] border-solid rounded-[15px] overflow-hidden aspect-[calc(394/481)] isolate border-dark-purple h-[315px]"
   >
      <!-- Pic -->
      <div
         class="w-full border-b-[2.74088px] border-dark-purple h-[67%] flex items-center justify-center"
      >
         <img class="w-[65%]" :src="image" :alt="item.name" />
      </div>
      <div
         class="relative w-ful p-quarter-distance text-dark-purple font-oceanwide bg-white h-[33%]"
      >
         <!-- Name -->
         <h3
            :title="item.name"
            class="font-bold text-[15pt] whitespace-nowrap text-ellipsis overflow-hidden w-[85%]"
         >
            {{ item.name }}
         </h3>
         <!-- Rating -->
         <div class="flex">
            <img
               v-for="_ in itemRating"
               class="w-[14px] mr-[2px]"
               src="~~/assets/svg/Star.svg"
               alt="*"
            />
         </div>
         <!-- Pricing -->
         <div
            class="flex items-center gap-quarter-distance my-quarter-distance"
         >
            <span class="text-[20pt]">
               {{ itemPrice }}
            </span>
            <span
               v-if="item.price.discount"
               class="text-[12pt] line-through text-salmon-pink opacity-75"
            >
               {{ item.price.value }}
            </span>
         </div>
         <!-- Add to Wishlist -->
         <Heart
            @select="toggleWishList(item)"
            :selected="addedToWishList"
            class="absolute h-[23px] text-flickr-pink top-[40%] right-half-distance"
         />
      </div>
   </NuxtLink>
</template>

<script setup lang="ts">
const { item } = defineProps<{
   item: Item.Unit;
}>();
const image = (await import(`~~/assets/images/items/item-${item.imageId}.png`))
   .default;
const addedToWishList = ref(false);
function toggleWishList(item: Item.Unit) {
   addedToWishList.value = !addedToWishList.value;
}
const itemRating = computed(() => {
   return 5;
});
const itemPrice = computed(() => {
   const currency = item.price.currency === "NGN" ? "N" : "$";
   if (item.price.discount) {
      return (
         currency +
         (
            item.price.value -
            (item.price.value * item.price.discount.percent) / 100
         )
            .toFixed(2)
            .toString()
      );
   } else return currency + item.price.value.toString();
});
</script>

<style scoped>
.product-item:hover {
   @apply text-candy-pink scale-95;
   box-shadow: 0 0 15px 0;
}
</style>
