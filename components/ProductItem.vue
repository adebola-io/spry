<template>
   <NuxtLink
      :to="`/products/${item.id}`"
      :style="{
         backgroundColor: `rgb(${item.theme.join(' ')})`,
         '--hoverColor': hoverColor,
      }"
      class="product-item duration-300 relative border-[3.74088px] border-solid overflow-hidden aspect-[calc(392/481)] isolate border-dark-purple h-[350px] max-md:h-[265px] max-sm:h-[215px] max-xs:h-[205px]"
   >
      <!-- Pic -->
      <div
         class="w-full relative border-b-[3.74088px] border-dark-purple h-[60%] flex items-center justify-center"
      >
         <AppLoader
            v-if="!imageLoaded"
            class="absolute max-md:scale-90 max-sm:scale-75 max-xs:scale-50"
            :size="25"
            :color="hoverColor"
         />
         <img
            ref="productImage"
            @load="imageLoaded = true"
            :class="[
               { 'opacity-0': !imageLoaded },
               'h-[75%] duration-300 animate-[item-photo-fade-in_300ms]',
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
            class="absolute h-[23px] max-md:scale-[.5] text-flickr-pink top-[40%] right-half-distance"
         />
      </div>
      <div
         v-if="isNewItem"
         class="top-[3%] font-oceanwide left-[5%] absolute text-pale-pink bg-salmon-pink text-[8pt] max-sm:text-[6pt] px-3 py-1"
      >
         NEW
      </div>
   </NuxtLink>
</template>

<script setup lang="ts">
const { item } = defineProps<{
   item: Item.Unit;
}>();
const productImage = ref<HTMLInputElement | null>(null);
const imageLoaded = ref(false);
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
const isNewItem = new Date(item.added).getMonth() === new Date().getMonth();
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
const hoverColor = `rgb(${item.theme
   .map((unit) => (unit + 20 < 255 ? unit + 20 : 255))
   .join(" ")})`;

watchEffect(() => {
   productImage.value &&
      (productImage.value.src =
         productImage.value.getAttribute("lazy-src") ?? "");
});
</script>

<style scoped>
.product-item:hover {
   @apply scale-[.97] text-dark-purple;
   box-shadow: -3px 5px 0px 0;
   background-color: var(--hoverColor) !important;
}
.product-item-heading {
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
}
</style>
