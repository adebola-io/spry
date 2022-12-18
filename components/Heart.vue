<script setup lang="ts">
const props = defineProps<{
   selected?: boolean;
}>();
const selected = computed(() => props.selected ?? false);
const emit = defineEmits<{
   (event: "select"): void;
}>();

const container = ref<HTMLDivElement | null>();
function selectHeart() {
   container.value?.animate(
      [
         { transform: "scale(1)" },
         { transform: "scale(1.2)" },
         { transform: "scale(0.9)" },
         { transform: "scale(1)" },
      ],
      { duration: 300 }
   );
   emit("select");
}
</script>

<template>
   <div @click.prevent="selectHeart">
      <svg
         ref="container"
         width="33"
         height="31"
         viewBox="0 0 33 31"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            :fill="selected ? 'currentColor' : undefined"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.06604 16.3813C0.363104 10.8361 2.35489 3.94173 7.93664 2.06792C10.8727 1.07971 14.4961 1.90405 16.5545 4.86539C18.4955 1.7948 22.2235 1.08633 25.1565 2.06792C30.7366 3.94173 32.7395 10.8361 31.0382 16.3813C28.3877 25.171 19.1398 29.7496 16.5545 29.7496C13.9707 29.7496 4.80533 25.2736 2.06604 16.3813Z"
            :stroke="selected ? 'currentColor' : '#361134'"
            stroke-width="2.46056"
            stroke-linecap="round"
            stroke-linejoin="round"
         />
      </svg>
   </div>
</template>
