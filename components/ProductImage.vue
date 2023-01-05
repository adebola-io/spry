<script setup lang="ts">
const { id, alt, variant } = defineProps<{
   id: string;
   alt: string;
   class?: any;
   variant: Item.Variant;
   useLoader?: boolean;
   loaderColor?: string;
   loaderSize?: number;
}>();

const emit = defineEmits<{
   (event: "load"): void;
   (event: "error"): void;
}>();

const reference = ref<HTMLImageElement | null>(null);
const success = ref(false);
const error = ref(false);
const src = (
   await import(
      `~~/assets/images/items/${id}/${getVariantName(variant)}.png`
   ).catch(() => {
      error.value = true;
      return { default: "" };
   })
).default;

onMounted(() => {
   const imageElement = reference.value;
   imageElement?.setAttribute("src", imageElement.dataset.src ?? "");
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
      @error="emit('error'), (error = true)"
      :class="class"
      :data-src="src"
      :alt="alt"
   />
</template>
