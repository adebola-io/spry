<template>
   <main class="w-full min-h-[80vh] px-[2vw] pt-[32px]">
      <div
         v-if="pending"
         class="w-full h-full min-h-[inherit] flex items-center justify-center"
      >
         <AppLoader text="Preparing Store..." />
      </div>
      <div
         v-if="false"
         class="grid [grid:_auto_/_auto_auto] gap-[32px] h-[90px]"
      ></div>
   </main>
</template>

<script lang="ts" setup>
useHead({
   title: "Spry Clothing Store | Comfort and Style for Affordable Prices",
});

const { data, pending, error, refresh } = await useFetch(
   "/api/collections/featured"
);
</script>
