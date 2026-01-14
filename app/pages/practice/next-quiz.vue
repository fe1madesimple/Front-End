<template>
  <div class="space-y-6">
    <!-- Back Button -->
    <NuxtLink
      to="/practice"
      class="text-primary flex items-center gap-1 font-semibold"
    >
      <UIcon name="i-heroicons-chevron-left-20-solid" class="text-xl" />
      Back
    </NuxtLink>

    <div class="rounded-xl border border-stroke p-4 space-y-4">
      <div
        v-for="i in 10"
        :key="i"
        class="p-4 rounded-xl flex items-center justify-between border border-stroke"
      >
        <div class="flex items-center gap-4">
          <div class="h-20 w-20 rounded-lg bg-accent-pink"></div>
          <div>
            <h1 class="font-bold text-xl mb-1">Constitutional Law</h1>
            <p class="text-dark-200">10 questions from this subject</p>
          </div>
        </div>

        <NuxtLink :to="`/practice/quiz/${2}`">
          <UIcon
            name="i-heroicons-arrow-right-20-solid"
            class="text-xl text-black-500"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Next Quiz - FE-1 Simple",
});
</script>
