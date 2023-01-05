<template>
   <main>
      <div class="flex items-center justify-center h-[100vh]" v-if="pending">
         <AppLoader text="Loading Item..." />
      </div>
      <div
         class="flex h-[90vh] justify-center items-center font-bold text-[15pt]"
         v-else-if="error"
      >
         Something went wrong. Please check the URL and try again.
      </div>
      <template v-else-if="item">
         <!-- Breadcrumb -->
         <div
            id="breadcrumb"
            class="bg-forgotten-pink flex items-center px-[2vw] h-[50px] max-md:text-[10pt] border-b-[3px] max-sm:hidden border-fandago mb-distance"
         >
            {{ `Home > Store > ${capitalize(item.category)} > ` }}
            <span class="font-bold inline-block ml-1 text-ellipsis">
               {{ item.name }}
            </span>
         </div>
         <!-- Product -->
         <div
            class="grid [grid:auto/30%_auto_20%] max-xl:[grid:auto/28%_auto_23%] max-lg:[grid:auto/30%_auto] max-xl:gap-fifth-distance max-sm:block gap-quarter-distance px-[2vw] max-sm:px-0 mb-distance"
         >
            <!-- Image -->
            <div
               id="product-image-container"
               :style="{
                  backgroundColor: lightenColor(item.theme, 50),
                  color: darkenColor(item.theme, 60),
                  borderColor: darkenColor(item.theme, 65),
               }"
               class="aspect-[calc(543/626)] max-sm:aspect-auto max-sm:w-full border-4 max-sm:border-0 max-sm:border-b-4 max-sm:h-[30vh] max-sm:min-h-[200px] flex justify-center items-center"
            >
               <ProductImage
                  @load="imageLoading = false"
                  @error="imageLoading = false"
                  :id="item.imageId"
                  :alt="item.name"
                  :class="[
                     { 'opacity-0': imageLoading },
                     'duration-300 h-[65%] max-sm:h-[80%]',
                  ]"
                  use-loader
                  :loader-color="darkenColor(item.theme, 20)"
               />
            </div>
            <!-- Info -->
            <div
               class="px-distance max-sm:px-[3vw] max-sm:mt-distance max-lg:pr-0 h-max w-full overflow-hidden"
            >
               <!-- Name (and Price for mobile.) -->
               <div
                  class="mb-quarter-distance max-sm:flex max-sm:justify-between max-sm:gap-half-distance font-oceanwide"
               >
                  <h1
                     class="text-[24pt] w-[80%] max-2xl:w-[90%] max-lg:w-full max-xl:text-[17pt] max-sm:text-[14pt] max-xs:text-[11pt]"
                  >
                     {{ item.name }}
                  </h1>
                  <span
                     class="block sm:hidden mt-distance text-[24pt] max-xs:text-[18pt]"
                  >
                     {{ calculatePrice(item.price) }}
                  </span>
               </div>
               <!-- Rating -->
               <div class="flex max-sm:mb-distance">
                  <img
                     src="~~/assets/svg/Star.svg"
                     class="h-[30px] max-xl:h-[25px] max-sm:h-[20px] max-xs:h-[15px] max-sm:mr-1 max-xl:mr-2 mr-3"
                     v-for="_ in 5"
                     alt="*"
                  />
                  <div
                     class="sm:hidden max-xs:text-[9pt] ml-quarter-distance text-candy-pink font-bold"
                  >
                     5.0 ({{ item.reviews.length }} ratings)
                  </div>
               </div>
               <!-- Price -->
               <div
                  class="max-sm:hidden my-half-distance max-xl:my-quarter-distance font-oceanwide flex items-center"
               >
                  <span
                     class="text-[37pt] max-xl:text-[30pt] max-lg:text-[27pt]"
                  >
                     {{ calculatePrice(item.price) }}
                  </span>
                  <div
                     v-if="item.price.discount"
                     class="text-[16pt] max-xl:text-[14pt] inline-block ml-2 max-md:text-[9.5pt] line-through text-candy-pink opacity-75"
                  >
                     {{ item.price.value }}
                     <span class="inline-block ml-1">
                        (-{{ item.price.discount.percent }}%)
                     </span>
                  </div>
               </div>
               <!-- Controls -->
               <div class="flex max-sm:block gap-[8.82px] my-quarter-distance">
                  <div class="flex gap-[8.82px] max-sm:gap-half-distance">
                     <input
                        id="quantity"
                        type="number"
                        placeholder="Quantity"
                        class="h-[60px] w-[116px] max-xl:h-[45px] max-sm:h-[60px] max-xs:h-[40px] max-xl:w-[100px] pl-[10px] border-fandago border-4 max-xl:border-[3px] placeholder:text-fandago max-sm:placeholder:text-[10pt] max-sm:border-2 bg-pale-pink"
                     />
                     <button
                        id="addtocartbtn"
                        type="button"
                        class="bg-fandago font-oceanwide flex items-center justify-center px-[40px] max-xl:px-[20px] max-xl:h-[45px] gap-[9px] max-xl:gap-[5px] max-xl:text-[11pt] max-sm:w-full max-sm:text-[12pt] max-sm:h-[60px] max-xs:text-[9pt] max-xs:h-[40px]"
                     >
                        <svg
                           class="max-xl:scale-90 max-xs:scale-75"
                           width="26"
                           height="28"
                           viewBox="0 0 26 28"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M4.28223 6.21057C17.6381 4.4827 20.9295 4.69476 23.0051 6.94664C25.0807 9.19852 24.5946 16.6222 22.1685 18.6883C19.7437 20.7544 9.21321 20.9508 5.87707 18.6883C2.35243 16.2965 4.39751 8.93921 4.28223 4.4827C4.3514 1.98891 1.51025 1.58447 1.51025 1.58447"
                              fill="#B0228C"
                           />
                           <path
                              d="M4.28223 6.21057C17.6381 4.4827 20.9295 4.69476 23.0051 6.94664C25.0807 9.19852 24.5946 16.6222 22.1685 18.6883C19.7437 20.7544 9.21321 20.9508 5.87707 18.6883C2.35243 16.2965 4.39751 8.93921 4.28223 4.4827C4.3514 1.98891 1.51025 1.58447 1.51025 1.58447"
                              stroke="#F7F2FD"
                              stroke-width="2.8"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                           <path
                              d="M15.9141 9.80664H19.6747H15.9141Z"
                              fill="#B0228C"
                           />
                           <path
                              d="M15.9141 9.80664H19.6747"
                              stroke="#F7F2FD"
                              stroke-width="2.8"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M6.41122 23.9087C6.81807 23.9087 7.14897 24.224 7.14897 24.6116C7.14897 25.0005 6.81807 25.3158 6.41122 25.3158C6.00302 25.3158 5.67212 25.0005 5.67212 24.6116C5.67212 24.224 6.00302 23.9087 6.41122 23.9087Z"
                              fill="#F7F2FD"
                              stroke="#F7F2FD"
                              stroke-width="3.8"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M20.4221 23.9087C20.8303 23.9087 21.1612 24.224 21.1612 24.6116C21.1612 25.0005 20.8303 25.3158 20.4221 25.3158C20.0152 25.3158 19.6843 25.0005 19.6843 24.6116C19.6843 24.224 20.0152 23.9087 20.4221 23.9087Z"
                              fill="#F7F2FD"
                              stroke="#F7F2FD"
                              stroke-width="3.8"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           />
                        </svg>
                        <span class="text-pale-pink"> Add to Cart</span>
                     </button>
                  </div>

                  <button
                     id="wishlist-box"
                     type="button"
                     class="border-4 border-fandago max-xl:border-[3px] flex items-center justify-center h-[60px] w-[60px] max-xl:h-[45px] max-xl:w-[45px] max-sm:w-full max-sm:mt-half-distance max-sm:h-[60px] max-xs:h-[40px] max-sm:border-2 max-xs:text-[9pt]"
                  >
                     <svg
                        class="max-xl:scale-75 max-xs:scale-[.6]"
                        width="29"
                        height="26"
                        viewBox="0 0 29 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M3.11221 13.9589C1.75662 9.80251 3.34214 4.63498 7.78536 3.2305C10.1226 2.4898 13.0068 3.10767 14.6454 5.32729C16.1905 3.02578 19.1581 2.49476 21.4928 3.2305C25.9348 4.63498 27.5291 9.80251 26.1748 13.9589C24.065 20.547 16.7034 23.9788 14.6454 23.9788C12.5887 23.9788 5.29276 20.6239 3.11221 13.9589Z"
                           stroke="#B0228C"
                           stroke-width="3.948"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                        />
                     </svg>
                     <span class="sm:hidden font-bold">Add to Wishlist</span>
                  </button>
               </div>
               <!-- Description -->
               <div
                  class="max-h-[350px] max-sm:max-h-max mb-half-distance max-lg:mt-distance overflow-hidden"
               >
                  <p
                     v-for="paragraph in item.description.split(/\n/g)"
                     class="paragraph text-justify text-ellipsis text-dark-purple text-[13pt] mb-distance max-xl:text-[10pt] max-xs:text-[9pt]"
                  >
                     {{ paragraph }}
                  </p>
               </div>
               <!-- Tags -->
               <div
                  class="overflow-x-scroll scroll-hidden h-max w-full max-sm:hidden"
               >
                  <div class="flex w-fit gap-half-distance">
                     <div
                        class="py-fifth-distance px-distance max-xl:text-[8pt] max-xl:px-half-distance border-candy-pink text-candy-pink text-[9pt] font-bold border-[3px] max-xl:border-[2px] uppercase whitespace-nowrap"
                        v-for="(tag, index) in item.tags"
                        :key="index"
                     >
                        {{ tag }}
                     </div>
                  </div>
               </div>
            </div>
            <!-- Aside -->
            <aside
               class="border-[3px] border-fandago h-max p-half-distance max-xl:p-third-distance max-xl:border-2 max-lg:hidden"
            >
               <h3 class="aside-heading">Shop with confidence.</h3>
               <div class="aside-box">
                  <div class="aside-box-image-container">
                     <img src="~~/assets/svg/Star.svg" alt="*" />
                  </div>
                  <div class="w-full">
                     <h4 class="aside-box-heading">Top Rated.</h4>
                     <p class="aside-box-text">
                        This is a highly rated item from the store.
                     </p>
                  </div>
               </div>
               <div class="aside-box">
                  <div class="aside-box-image-container">
                     <img src="~~/assets/svg/Dollar.svg" alt="*" />
                  </div>

                  <div class="w-full">
                     <h4 class="aside-box-heading">Money Back Guarantee.</h4>
                     <p class="aside-box-text">
                        Get the item you ordered without faults or get your
                        money back.
                     </p>
                  </div>
               </div>
               <h3 class="aside-heading mt-half-distance">Delivery Details.</h3>
               <span id="delivery-note" class="text-[7pt] block text-[#765870]">
                  International shipment of items may be subject to customs
                  processing and additional charges.
               </span>
               <div class="aside-box">
                  <div class="aside-box-image-container">
                     <img src="~~/assets/svg/Car.svg" alt="*" />
                  </div>

                  <div class="w-full">
                     <h4 class="aside-box-heading">Regular Shipping.</h4>
                     <p class="aside-box-text">
                        Estimated between <b>{{ regularDelivery[0] }}</b> and
                        <b>{{ regularDelivery[1] }}</b
                        >.
                     </p>
                  </div>
               </div>
               <div class="aside-box">
                  <div class="aside-box-image-container">
                     <img src="~~/assets/svg/Bolt.svg" alt="*" />
                  </div>

                  <div class="w-full">
                     <h4 class="aside-box-heading">Express Shipping.</h4>
                     <p class="aside-box-text">
                        Estimated between <b>{{ expressDelivery[0] }}</b> and
                        <b>{{ expressDelivery[1] }}</b
                        >.
                     </p>
                  </div>
               </div>
               <div class="w-full mt-half-distance">
                  <h3 class="aside-heading">Security & Feedback</h3>
                  <div class="flex items-center h-distance">
                     <span class="security-link">Report this Item</span>
                     <span class="security-link">Contact Original Seller</span>
                  </div>
               </div>
            </aside>
         </div>
         <HomeSection
            product
            product
            v-if="relatedItems"
            heading="Related Items"
            :items="relatedItems"
         />
         <HomeSection
            product
            v-if="associatedItems && associatedItems.length > 3"
            heading="People Also Bought"
            :items="associatedItems"
         />
         <div v-if="item.reviews.length > 0">
            <h1
               class="text-4xl max-md:text-xl ml-[2vw] max-sm:ml-[3vw] mb-half-distance max-sm:mb-quarter-distance font-bold font-oceanwide text-fandago"
            >
               Product Rating
            </h1>
            <div class="flex">
               <RatingCircle
                  :value="4.5"
                  :no-of-ratings="item.reviews.length"
               />
            </div>
         </div>
         <HomeSection
            product
            v-if="associatedItems && associatedItems.length > 3"
            heading="People Also Bought"
            :items="associatedItems"
         />
      </template>
   </main>
</template>

<script setup lang="ts">
const { id } = useRoute().params as { id: string },
   { data: item, error, pending } = await useFetch(`/api/items/${id}`);

const { data: relatedItems } = await useFetch(`/api/items/${id}/related`),
   { data: associatedItems } = await useFetch(`/api/items/${id}/associated`);
const { data: relatedItems } = await useFetch(`/api/items/${id}/related`),
   { data: associatedItems } = await useFetch(`/api/items/${id}/associated`);

const imageLoading = ref(true);

useHead({
   title: item.value
      ? `${item.value.name} - Spry Clothing Store`
      : pending
      ? "Loading Item..."
      : "Error - Spry Clothing Store",
});

const regularDelivery = useDateFromNow(9, 15);
const expressDelivery = useDateFromNow(3, 4);
</script>

<style scoped>
#product-image-container {
   box-shadow: 5px 5px 0 0;
   @apply max-sm:[box-shadow:none];
}
.paragraph {
   line-height: 30px;
   @apply max-xl:[line-height:24px] max-sm:[line-height:22px];
}
#quantity,
#addtocartbtn,
#wishlist-box,
aside {
   box-shadow: 2px 2px 0 0;
   @apply max-xl:[box-shadow:1.5px_1.5px_0_0];
}
.aside-heading {
   @apply font-oceanwide text-[13pt] max-xl:text-[10pt];
}
.aside-box {
   @apply flex items-center text-dark-purple gap-quarter-distance border-b-flickr-pink border-b-2 py-half-distance max-xl:py-third-distance pr-quarter-distance;
}
.aside-box-heading {
   @apply font-bold text-[12pt] max-xl:text-[9.5pt];
}
.aside-box-text {
   @apply text-[9pt] max-xl:text-[8pt];
   line-height: 17px;
}
.aside-box-image-container {
   @apply flex items-center justify-center w-[40px] max-xl:w-[30px];
}
.aside-box-image-container > img {
   @apply h-[40px] max-xl:h-[30px];
}
#delivery-note {
   @apply max-xl:text-[7pt];
   line-height: 13px;
}
.security-link {
   @apply underline text-[9pt] max-xl:text-[7pt] mr-half-distance text-dark-purple;
}
</style>
