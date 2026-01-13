<template>
  <div class="h-1.5 w-full rounded-full bg-gray-200 overflow-hidden">
    <div
      class="h-full rounded-full transition-all duration-300"
      :style="{
        width: `${progress}%`,
        backgroundColor: color,
      }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: "primary",
  },
});
</script>
