<template>
   <div class="app-loader-container flex flex-col items-center">
      <div :style="{ height: size, width: size }" class="app-loader">
         <div class="app-loader-inner w-full relative h-full">
            <div class="app-loader-circle top-[20%] left-[20%]"></div>
         </div>
         <div class="app-loader-circle right-0 bottom-[-30%]"></div>
      </div>
      <div
         class="mt-[25px] text-fandago font-oceanwide"
         v-if="text !== undefined"
      >
         {{ text }}
      </div>
   </div>
</template>

<script lang="ts" setup>
defineProps<{
   size?: number;
   text?: string;
}>();
</script>

<style scoped>
.app-loader-container {
   animation-name: loader-expand, loader-fade;
   animation-timing-function: ease, linear;
   animation-duration: 700ms, 1s;
   animation-iteration-count: 1, infinite;
   animation-fill-mode: forwards;
}
.app-loader {
   @apply relative w-[50px] h-[50px] flex items-center justify-center rounded-[50%] border-[4px] border-fandago;

   animation: loader-spin var(--animation-props);
   --animation-props: 0.9s linear infinite;
}
.app-loader-inner {
   animation: loader-spin-reverse var(--animation-props);
}
.app-loader-circle {
   @apply absolute border-fandago w-[25%] h-[25%] rounded-[50%] border-[4px];
}
@keyframes loader-expand {
   from {
      transform: scale(0.5);
      opacity: 0;
   }
   50% {
      transform: scale(1.2);
   }
}
@keyframes loader-fade {
   50%,
   70% {
      opacity: 0.3;
   }
}
@keyframes loader-spin {
   to {
      transform: rotate(360deg);
   }
}
@keyframes loader-spin-reverse {
   to {
      transform: rotate(-720deg);
   }
}
</style>
