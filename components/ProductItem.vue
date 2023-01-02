<template>
   <NuxtLink
      target="__blank"
      :to="`/products/${item.id}`"
      :style="{
         backgroundColor: `rgb(${item.theme.join(' ')})`,
         '--hoverColor': lightenColor(item.theme),
      }"
      class="product-item duration-300 relative border-[3.74088px] max-sm:border-[2.3px] border-solid overflow-hidden aspect-[calc(392/481)] isolate border-dark-purple h-[350px] max-md:h-[265px] max-sm:h-[215px] max-xs:h-[205px]"
   >
      <!-- Pic -->
      <div
         class="w-full relative border-b-[3.74088px] max-sm:border-b-[2.3px] border-dark-purple h-[60%] flex items-center justify-center"
      >
         <AppLoader
            v-if="!imageLoaded && !imageError"
            class="absolute max-md:scale-90 max-sm:scale-75 max-xs:scale-50"
            :size="25"
            :color="lightenColor(item.theme)"
         />
         <img
            ref="productImage"
            @load="imageLoaded = true"
            :class="[
               { 'opacity-0': !imageLoaded },
               'h-[80%] duration-300 animate-[item-photo-fade-in_300ms] product-item-image',
            ]"
            :lazy-src="image"
            :alt="item.name"
         />
      </div>
      <div
         class="relative justify-center p-quarter-distance text-dark-purple font-oceanwide bg-white h-[40%]"
      >
         <!-- Name -->
         <h3
            :title="item.name"
            class="product-item-heading font-bold text-[15pt] max-md:text-[11pt] max-sm:text-[10pt] max-xs:text-[9pt] text-ellipsis overflow-hidden w-[83%]"
         >
            {{ item.name }}
         </h3>
         <!-- Rating -->
         <div class="flex justify-start w-fit">
            <ProductRating :value="itemRating" />
         </div>
         <!-- Pricing -->
         <div
            class="flex items-center gap-quarter-distance my-quarter-distance max-md:my-0"
         >
            <span
               class="text-[20pt] max-md:text-[14pt] max-sm:text-[11pt] max-xs:text-[9.5pt]"
            >
               {{ calculatePrice(item.price) }}
            </span>
            <span
               v-if="item.price.discount"
               class="text-[12pt] max-md:text-[9.5pt] line-through text-candy-pink opacity-75"
            >
               {{ item.price.value }}
            </span>
         </div>
         <!-- Add to Wishlist -->
         <Heart
            @select="toggleWishList(item)"
            :selected="addedToWishList"
            class="absolute h-[23px] max-md:scale-[.5] text-flickr-pink top-[40%] right-half-distance"
         />
      </div>
      <div
         v-if="isNewItem || isHotItem"
         :class="[
            {
               'bg-salmon-pink': isNewItem,
               'bg-flickr-pink': isHotItem && !isNewItem,
            },
            'top-[3%] font-oceanwide left-[5%] absolute text-pale-pink  text-[8pt] max-sm:text-[6pt] px-3 py-1',
         ]"
      >
         {{ isNewItem ? "NEW" : "HOT" }}
      </div>
   </NuxtLink>
</template>

<script setup lang="ts">
const { item, wishlist, waitForLazyLoad } = defineProps<{
   item: Item.Unit;
   wishlist?: boolean;
   waitForLazyLoad?: boolean;
}>();
const productImage = ref<HTMLInputElement | null>(null);
const imageLoaded = ref(false);
const imageError = ref(false);
const image = (
   await import(`~~/assets/images/items/item-${item.imageId}.png`).catch(() => {
      imageError.value = true;
      return { default: "" };
   })
).default;
const addedToWishList = ref(wishlist ?? false);

function toggleWishList(item: Item.Unit) {
   addedToWishList.value = !addedToWishList.value;
}

const itemRating = computed(() => {
   return 5;
});
const isNewItem = new Date(item.added).getMonth() > 9;
const isHotItem = item.sales > 20 && item.price.discount;

watchEffect(() => {
   if (!waitForLazyLoad)
      productImage.value &&
         (productImage.value.src =
            productImage.value.getAttribute("lazy-src") ?? "");
});
</script>

<style scoped>
@media (min-width: 600px) {
   .product-item:hover {
      @apply scale-[.97] text-dark-purple;
      box-shadow: 3px 5px 0px 0;
      background-color: var(--hoverColor) !important;
   }
}

.product-item-heading {
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
}
</style>
