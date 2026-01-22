<template>
  <div class="flex flex-col gap-8">
    <!-- Header -->
    <div>
      <h1 class="text-2xl font-bold text-black-500">Your Study Overview</h1>
      <p class="text-black-500 mt-1">
        You've studied {{ studyHours }} hours this week and completed
        {{ modulesCompleted }} modules across {{ subjectsCount }} subjects.
      </p>
    </div>

    <!-- Main Content Card -->
    <div class="white_card bg-white p-6! space-y-8">
      <!-- Focus Subjects -->
      <div
        class="border border-stroke rounded-xl p-4 flex items-center justify-between"
      >
        <p class="text-black-500">
          Your Focus Subjects are
          <span class="font-bold text-black-primary">{{ focusSubjects }}</span>
        </p>
        <button class="text-primary font-semibold cursor-pointer">
          Edit Subject
        </button>
      </div>

      <!-- Motivation Banner -->
      <div class="warning_banner p-4! flex items-center gap-3">
        <span class="text-2xl">💡</span>
        <p class="text-black-primary">
          Consistency pays off — stay on your streak to unlock your next
          achievement badge.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-5 gap-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="border border-stroke rounded-xl p-4 relative"
        >
          <div class="flex items-center justify-between">
            <p class="text-2xl font-semibold text-black-primary">
              {{ stat.value }}
            </p>
            <div
              class="bg-white border flex items-center justify-center border-stroke rounded-md p-2 w-fit shadow-xl"
            >
              <UIcon :name="stat.icon" class="text-primary font-bold text-xl" />
            </div>
          </div>
          <p class="text-dark-200 font-inter mt-4">{{ stat.label }}</p>
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
  title: "All Achievements - FE-1 Simple",
});

const studyHours = ref(18);
const modulesCompleted = ref(22);
const subjectsCount = ref(6);
const focusSubjects = ref("Equity / Constitutional Law");

const stats = [
  {
    value: "6",
    label: "Subjects Enrolled",
    icon: "i-heroicons-calendar",
  },
  {
    value: "22",
    label: "Lessons Completed",
    icon: "i-heroicons-check-circle",
  },
  {
    value: "78%",
    label: "Quiz Accuracy",
    icon: "i-heroicons-arrow-trending-up",
  },
  {
    value: "5",
    label: "Practice Attempts",
    icon: "i-heroicons-calendar",
  },
  {
    value: "7 days",
    label: "Current Streak",
    icon: "i-heroicons-trophy",
  },
];
</script>
