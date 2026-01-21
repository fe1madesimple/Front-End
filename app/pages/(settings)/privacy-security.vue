<template>
  <div class="flex flex-col gap-8">
    <!-- Header -->
    <div>
      <h1 class="text-2xl font-bold text-black-500">Data & Security</h1>
      <p class="text-black-500 mt-1">
        We take your privacy seriously. Your data is encrypted and never shared.
      </p>
    </div>

    <!-- Actions Card -->
    <div class="white_card bg-white p-6! space-y-4">
      <!-- View Private Policy -->
      <button
        class="w-full border border-stroke rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span class="font-medium text-black-primary">View Private Policy</span>
        <img src="@/assets/icons/curved_arrow_right.svg" alt="" />
      </button>

      <!-- Download My Data -->
      <button
        class="w-full border border-stroke rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span class="font-medium text-black-primary">Download My Data</span>
        <UIcon
          name="i-heroicons-arrow-down-tray"
          class="text-xl text-black-500"
        />
      </button>

      <!-- Delete My Account -->
      <button
        class="w-full border border-error-500 bg-error-500/10 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-error-500/20 transition-colors"
      >
        <span class="font-medium">Delete My Account</span>
        <UIcon name="i-heroicons-trash" class="text-xl text-error-500" />
      </button>

      <!-- Warning Text -->
      <p class="text-disabled-text">
        Deleting your account will permanently remove your study history, AI
        feedback, and subscription data.
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Data & Security - FE-1 Simple",
});
</script>
