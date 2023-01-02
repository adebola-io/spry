<script setup lang="ts">
const { src, alt } = defineProps<{
   src: string;
   alt: string;
   class?: any;
   useLoader?: boolean;
   loaderColor?: string;
   loaderSize?: number;
}>();

const emit = defineEmits<{
   (event: "load"): void;
}>();

const error = ref(false);

const reference = ref<HTMLImageElement | null>(null);
const success = ref(false);

watchEffect(() => {
   if (reference.value) {
      reference.value.src = reference.value?.getAttribute("lazy-src") ?? "";
   }
});
</script>

<template>
   <AppLoader
      v-if="useLoader && !error && !success"
      :color="loaderColor"
      :size="loaderSize"
      class="absolute"
   />
   <img
      ref="reference"
      @load="emit('load'), (success = true)"
      :class="class"
      :lazy-src="src"
      :alt="alt"
   />
</template>
