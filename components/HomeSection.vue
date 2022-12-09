<script setup lang="ts">
defineProps<{
   heading: string;
   items: Item.Unit[];
   subHeading: string;
}>();
</script>

<template>
   <section class="home-section h-[400px] w-full pl-[2vw]">
      <h1 class="text-4xl font-bold font-oceanwide text-dark-purple">
         {{ heading }}
      </h1>
      <div class="overflow-x-scroll w-full">
         <div class="flex w-fit">
            <ProductItem v-for="item in items" v-bind="item" />
         </div>
      </div>
   </section>
</template>
