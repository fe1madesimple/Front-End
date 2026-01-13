<template>
  <div class="bg-white relative rounded-xl border border-stroke p-4">
    <div class="flex items-start gap-3">
      <!-- Icon -->
      <div class="w-14 h-14 border border-stroke rounded-xl">
        <img :src="`/icons/${icon}.svg`" alt="" />
      </div>

      <!-- Content -->
      <div class="flex-1">
        <p class="text-2xl font-bold text-black-primary">{{ value }}</p>
        <p class="text-grey-200 text-sm">{{ label }}</p>
      </div>
    </div>

    <!-- Sub stats with colored divider -->
    <div v-if="$slots.default" class="mt-4 pt-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  iconColor: string;
  iconBgColor: string;
  value: string;
  label: string;
}>();
</script>
