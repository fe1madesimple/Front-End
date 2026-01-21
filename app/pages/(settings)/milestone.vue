<template>
  <div class="flex flex-col gap-8">
    <!-- Header -->
    <div>
      <h1 class="text-2xl font-bold text-black-500">Milestones Unlocked</h1>
      <p class="text-black-500 mt-1">
        You've earned {{ unlockedCount }} achievements so far — your dedication
        is showing.
      </p>
    </div>

    <!-- Achievements List -->
    <div class="white_card bg-white p-6! space-y-4">
      <div
        v-for="achievement in achievements"
        :key="achievement.id"
        class="rounded-xl p-4 flex items-center justify-between"
        :class="
          achievement.unlocked
            ? 'warning_banner'
            : 'bg-gray-200 border border-stroke'
        "
      >
        <div class="flex items-center gap-3">
          <span
            class="text-2xl"
            :class="achievement.unlocked ? '' : 'grayscale'"
          >
            🏆
          </span>
          <div>
            <h3 class="font-bold">
              {{ achievement.title }}
            </h3>
            <p class="text-dark-200">
              {{ achievement.description }}
            </p>
          </div>
        </div>
        <span
          class="px-3 py-1 rounded-lg text-sm font-medium bg-white"
          :class="achievement.unlocked ? 'text-success-600 ' : 'text-gray-400'"
        >
          {{ achievement.unlocked ? "Unlocked" : "Locked" }}
        </span>
      </div>

      <!-- View All Link -->
      <NuxtLink
        to="/achievement"
        class="text-primary font-semibold flex items-center gap-1 mt-4"
      >
        View All Achievements
        <UIcon name="i-heroicons-arrow-right-20-solid" class="text-lg" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Milestone - FE-1 Simple",
});

const achievements = ref([
  {
    id: 1,
    title: "First Lesson Completed",
    description: "Started your learning journey.",
    unlocked: true,
  },
  {
    id: 2,
    title: "3-Day Streak",
    description: "Consistency begins.",
    unlocked: true,
  },
  {
    id: 3,
    title: "50% Subject Mastery",
    description: "Halfway through your core subject.",
    unlocked: true,
  },
  {
    id: 4,
    title: "Exam Simulation Completed",
    description: "You practised under real exam conditions.",
    unlocked: true,
  },
  {
    id: 5,
    title: "7-Day Streak",
    description: "One week of dedication!",
    unlocked: false,
  },
  {
    id: 6,
    title: "90% Quiz Accuracy",
    description: "Excellence in testing.",
    unlocked: false,
  },
]);

const unlockedCount = computed(() => {
  return achievements.value.filter((a) => a.unlocked).length;
});
</script>
