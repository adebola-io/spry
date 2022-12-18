<template>
   <NuxtLink
      :to="`/products/${item.id}`"
      :style="{
         backgroundColor: `rgb(${item.theme.join(' ')})`,
         color: `rgb(${item.theme.join(' ')})`,
      }"
      class="product-item duration-300 relative border-[2.74088px] border-solid rounded-[15px] overflow-hidden aspect-[calc(392/481)] isolate border-dark-purple h-[325px] max-md:h-[240px]"
   >
      <!-- Pic -->
      <div
         class="w-full border-b-[2.74088px] border-dark-purple h-[67%] flex items-center justify-center"
      >
         <img class="h-[75%]" :src="image" :alt="item.name" />
      </div>
      <div
         class="relative max-md:flex max-md:flex-col max-md:justify-center p-quarter-distance max-md:pt-half-distance text-dark-purple font-oceanwide bg-white h-[33%]"
      >
         <!-- Name -->
         <h3
            :title="item.name"
            class="font-bold text-[15pt] max-md:text-[11pt] whitespace-nowrap text-ellipsis overflow-hidden w-[83%]"
         >
            {{ item.name }}
         </h3>
         <!-- Rating -->
         <div class="flex">
            <img
               v-for="_ in itemRating"
               class="w-[14px] mr-[2px] max-md:h-[11px] max-sm:h-[9px] max-md:mr-0"
               src="~~/assets/svg/Star.svg"
               alt="*"
            />
         </div>
         <!-- Pricing -->
         <div
            class="flex items-center gap-quarter-distance my-quarter-distance"
         >
            <span class="text-[20pt] max-md:text-[14pt]">
               {{ itemPrice }}
            </span>
            <span
               v-if="item.price.discount"
               class="text-[12pt] max-md:text-[9.5pt] line-through text-salmon-pink opacity-75"
            >
               {{ item.price.value }}
            </span>
         </div>
         <!-- Add to Wishlist -->
         <Heart
            @select="toggleWishList(item)"
            :selected="addedToWishList"
            class="absolute h-[23px] max-md:scale-[.6] text-flickr-pink top-[40%] right-half-distance"
         />
      </div>
   </NuxtLink>
</template>

<script setup lang="ts">
const { item } = defineProps<{
   item: Item.Unit;
}>();
const image = (
   await import(`~~/assets/images/items/item-${item.imageId}.png`).catch(
      () => ({ default: "" })
   )
).default;
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
   @apply scale-95;
   box-shadow: 0 0 15px 0;
}
</style>
