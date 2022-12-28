<template>
   <main>
      <template v-if="collection">
         <div
            id="collection-banner"
            class="relative animate-[fade-in_700ms] font-oceanwide h-[80vh] overflow-hidden min-h-[400px] max-h-[700px] max-md:h-[50vh] max-md:max-h-[500px] max-sm:max-h-[300px] max-sm:min-h-0 text-white bg-dark-purple bg-cover bg-center flex flex-col justify-center items-center"
         >
            <AppLoader v-if="!imageLoaded" />
            <img
               ref="bannerImage"
               @load="imageLoaded = true"
               :lazy-src="collection.banner"
               :alt="collection.name"
               :class="[
                  { 'opacity-0': !imageLoaded },
                  'duration-300 w-full h-full object-cover absolute',
               ]"
            />
            <div class="overlay absolute banner-overlay w-full h-full"></div>
            <h1
               class="relative font-bold text-[50pt] max-md:text-[30pt] max-sm:text-[20pt] w-[45%] max-md:w-[100%] text-center"
            >
               {{ collection.name }}.
            </h1>
            <span
               class="w-[60%] max-md:w-[85%] max-nml:w-[80%] font-thin relative text-center text-[16pt] max-md:text-[13pt] max-sm:text-[8pt]"
            >
               {{ collection.description }}
            </span>
         </div>
         <div
            id="product-grid"
            class="grid place-items-center [grid:auto/auto_auto_auto_auto_auto] px-[4vw] pb-double-distance gap-y-distance gap-x-0 bg-black"
         >
            <ProductItem
               v-for="item in collection.items"
               class="product-item"
               :item="item"
            />
         </div>
      </template>
      <div
         v-else-if="pending"
         class="w-full h-[80vh] min-h-[400px] max-h-[1000px] flex items-center justify-center"
      >
         <AppLoader text="Loading Collection..." />
      </div>
      <div
         v-else
         class="w-full h-[calc(100vh-88px)] flex items-center justify-center"
      >
         Something went wrong. Please try again later.
         <span>{{ error }}</span>
      </div>
   </main>
</template>

<script setup lang="ts">
import { Ref } from "vue";

const { id } = useRoute().params as { id: string },
   fetch = useFetch(`/api/collections/${id}`),
   { pending, error } = fetch,
   collection = fetch.data as Ref<Collection | null>,
   imageLoaded = ref(false),
   bannerImage = ref<HTMLImageElement | null>(null);
useHead({
   title: `${collection.value?.name ?? "Collection"} - Spry Clothing`,
});
watchEffect(() => {
   bannerImage.value &&
      (bannerImage.value.src =
         bannerImage.value?.getAttribute("lazy-src") ?? "");
});
</script>

<style scoped>
.overlay {
   background-image: linear-gradient(transparent, #00000085, black);
}
@media (max-width: 1500px) {
   #product-grid {
      grid: auto/ auto auto auto auto;
   }
}
@media (max-width: 1200px) {
   #product-grid {
      grid: auto/ auto auto auto;
      @apply max-sm:[grid:auto/auto_auto];
   }
}
@media (max-height: 700px) {
   #collection-banner h1 {
      @apply text-[30pt];
   }
   #collection-banner span {
      @apply text-[12pt] w-[80%];
   }
}
</style>
