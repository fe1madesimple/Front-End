<template>
  <div class="space-y-6">
    <!-- Badge Unlocked Banner -->
    <div
      v-if="showBadge"
      class="p-4 rounded-xl border border-warning-main/40 bg-warning-main/30 flex items-center justify-between"
    >
      <div class="flex items-center gap-3">
        <span class="text-2xl">🏆</span>
        <div>
          <p class="font-bold text-black-primary">Badge Unlocked!</p>
          <p class="text-black-500">
            Perfect Score! You answered all questions correctly. Keep this
            momentum going!
          </p>
        </div>
      </div>
      <button @click="showBadge = false" class="cursor-pointer">
        <UIcon
          name="i-heroicons-x-mark-20-solid"
          class="text-xl text-black-500"
        />
      </button>
    </div>

    <!-- Results Card -->
    <div class="bg-primary rounded-2xl p-8 text-white">
      <div class="flex items-center gap-8">
        <!-- Circular Score -->
        <AppCircularProgress
          :size="120"
          :progress="percentage"
          :strokeWidth="8"
        >
          <div
            class="flex-col! flex! items-center justify-center text-center gap-1"
          >
            <p class="text-3xl font-bold">
              {{ correctAnswers }}/{{ totalQuestions }}
            </p>
            <p class="text-sm">your score</p>
          </div>
        </AppCircularProgress>

        <!-- Congratulation Text -->
        <div class="">
          <h1 class="text-2xl font-bold">
            <span class="text-yellow-400">Congratulation!</span>
            You have passed the test with {{ percentage }}%
          </h1>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex justify-end gap-4 mt-6">
      <NuxtLink to="/practice">
        <button
          class="app_outline_button px-12! cursor-pointer hover:bg-white/10 transition-colors"
        >
          Try Again
        </button>
      </NuxtLink>
      <NuxtLink to="/practice/next-quiz">
        <button class="app_filled_button px-6!">Next Quiz In This Topic</button>
      </NuxtLink>
    </div>

    <!-- Performance Summary -->
    <div
      class="bg-white text-black-500 rounded-xl border border-stroke p-6 space-y-6"
    >
      <h2 class="text-xl font-bold">Performance Summary</h2>

      <div class="grid grid-cols-3 gap-6">
        <!-- Accuracy Rate -->
        <div class="p-6 rounded-xl bg-success-200 text-center space-y-2">
          <p class="text-black-500">Accuracy Rate</p>
          <p class="text-3xl font-bold text-success-600">{{ percentage }}%</p>
        </div>

        <!-- Avg Time per Question -->
        <div class="p-6 bg-accent-200 rounded-xl text-center space-y-2">
          <p class="text-black-500">Avg Time per Question</p>
          <p class="text-3xl font-bold text-primary">{{ avgTime }}s</p>
        </div>

        <!-- Quiz Streak -->
        <div class="p-6 rounded-xl bg-pink-100 text-center space-y-2">
          <p class="text-black-500">Quiz Streak</p>
          <p class="text-3xl font-bold text-pink-500">{{ streak }} days</p>
        </div>
      </div>

      <!-- Tip -->
      <p class="text-black-500 p-4 bg-accent-200 rounded-xl">
        Keep revising this topic to push your accuracy above 90%. You're nearly
        there.
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Quiz Results - FE-1 Simple",
});

const showBadge = ref(true);

// Mock result data - in real app, get from query params or state
const correctAnswers = ref(4);
const totalQuestions = ref(5);
const avgTime = ref(18);
const streak = ref(3);

const percentage = computed(() => {
  return Math.round((correctAnswers.value / totalQuestions.value) * 100);
});
</script>
