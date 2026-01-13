<template>
  <div class="space-y-10">
    <!-- Tip Banner -->
    <div class="p-4 rounded-xl bg-warning-main/30 flex items-center gap-3">
      <span class="text-2xl">💡</span>
      <p class="text-black-primary font-medium">
        <span class="font-bold">Tip:</span> Earn streak points by completing one
        quiz daily!
      </p>
    </div>

    <!-- Header -->
    <div class="text-black-500">
      <h1 class="text-2xl font-bold">
        Test Your Knowledge — One Concept at a Time
      </h1>
      <p class="mt-2">
        Short, focused quizzes designed to help you understand, not memorise.
        Each question teaches you something new.
      </p>
    </div>

    <!-- Quiz Cards -->
    <div class="grid grid-cols-3 gap-6">
      <div
        v-for="(quiz, index) in quizTypes"
        :key="index"
        class="p-5 rounded-xl h-[250px] border border-stroke bg-white flex flex-col justify-between"
      >
        <!-- Title -->
        <h3 class="font-bold text-black-primary text-xl">{{ quiz.title }}</h3>

        <!-- Description -->
        <p class="text-disabled-text">{{ quiz.description }}</p>

        <!-- Stats Row -->
        <div
          class="flex items-center justify-between text-black-primary font-medium font-inter"
        >
          <span>{{ quiz.questions }} Questions</span>
          <span>{{ quiz.minutes }} Minutes</span>
        </div>

        <!-- Button -->
        <NuxtLink :to="`/practice/quiz/${quiz.id}`">
          <button class="app_outline_button w-full!">
            {{ quiz.buttonText }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const quizTypes = ref([
  {
    id: 1,
    title: "Quick Quiz",
    description: "Perfect for quick refreshers between study sessions.",
    questions: 5,
    minutes: 5,
    buttonText: "Start 5-Minute Quiz",
  },
  {
    id: 2,
    title: "Topic Challenge",
    description:
      "Focus on a specific subject area (e.g. Contract or Criminal Law).",
    questions: 10,
    minutes: 10,
    buttonText: "Choose Topic",
  },
  {
    id: 3,
    title: "Mixed Practice",
    description: "Randomized questions across all subjects for general prep.",
    questions: 15,
    minutes: 15,
    buttonText: "Start Challenge",
  },
]);
</script>
