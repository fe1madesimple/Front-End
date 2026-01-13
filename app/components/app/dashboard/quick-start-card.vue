<template>
  <div
    class="rounded-xl p-4 border border-stroke cursor-pointer hover:shadow-md transition-shadow flex items-center justify-between group"
    :style="{ backgroundColor: bgColor }"
  >
    <div>
      <h3 class="font-bold text-black text-base">{{ title }}</h3>
      <p class="text-dark-200 text-sm mt-2">{{ description }}</p>
    </div>
    <UIcon
      name="i-heroicons-arrow-right"
      class="text-black-500 group-hover:text-black-500 transition-colors"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  bgColor: string;
}>();
</script>
