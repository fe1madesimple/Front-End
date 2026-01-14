<template>
  <div class="relative" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg class="w-full h-full -rotate-90" :viewBox="`0 0 ${size} ${size}`">
      <!-- Background circle (grey) -->
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        stroke="#E5E7EB"
        :stroke-width="strokeWidth"
        fill="none"
      />
      <!-- Progress circle (yellow) -->
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        stroke="#ebbb4a"
        :stroke-width="strokeWidth"
        fill="none"
        stroke-linecap="round"
        :stroke-dasharray="`${
          (progress / 100) * circumference
        } ${circumference}`"
        class="transition-all duration-300"
      />
    </svg>
    <!-- Optional center content slot -->
    <div
      v-if="$slots.default"
      class="absolute flex items-center justify-center inset-0"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
  size: {
    type: Number,
    default: 70,
  },
  strokeWidth: {
    type: Number,
    default: 6,
  },
});

const radius = computed(() => props.size / 2 - props.strokeWidth / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
</script>
