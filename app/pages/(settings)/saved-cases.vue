<template>
  <div class="flex flex-col gap-8">
    <!-- Header -->
    <div>
      <h1 class="text-2xl font-bold text-black-500">My Saved Cases</h1>
      <p class="text-black-500 mt-1">
        You've saved 3 cases so far. Reviewing them weekly improves recall by
        30%
      </p>
    </div>

    <!-- Cases Grid -->
    <div class="white_card bg-white p-6! grid grid-cols-3 gap-6">
      <div
        v-for="i in 3"
        :key="i"
        class="white_card bg-white p-6! space-y-3 relative"
      >
        <!-- Header Row -->
        <div class="flex items-start justify-between">
          <span class="text-primary text-sm font-inter font-semibold">
            Rare
          </span>
          <UIcon
            name="i-heroicons-star-20-solid"
            class="text-xl text-yellow-500"
          />
        </div>

        <!-- Case Title -->
        <div>
          <h3 class="font-bold text-black-primary text-lg">
            {{ getCaseTitle(i) }}
          </h3>
          <p class="text-dark-200">[1932] AC 562</p>
        </div>

        <!-- Tags -->
        <p class="text-primary text-sm">
          Tort . Negligence - Duty of Care . Irish
        </p>

        <!-- Last Reviewed -->
        <p class="text-dark-200">
          Last reviewed:
          <span class="text-black-primary font-medium">{{
            getReviewDate(i)
          }}</span>
        </p>

        <!-- Action Buttons -->
        <div class="flex gap-3 pt-2">
          <button class="app_filled_button py-3.5! px-6!">
            Mark As Reviewed
          </button>
          <button class="app_outline_button px-6!">View Full Summary</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Saved Cases - FE-1 Simple",
});

const getCaseTitle = (i) => {
  const titles = ["R v Cunningham", "Donoghue v Stevenson", "R v Cunningham"];
  return titles[i - 1] || "Case Title";
};

const getReviewDate = (i) => {
  const dates = ["18 Nov 2025", "16 Nov 2025", "18 Nov 2025"];
  return dates[i - 1] || "18 Nov 2025";
};
</script>
