<template>
  <div class="space-y-10">
    <div>
      <h1 class="text-2xl font-bold text-black-primary">
        Practice Like It's Exam Day
      </h1>
      <p class="text-black-500 mt-1">
        Build confidence by writing past questions under real FE-1 conditions —
        timed, structured, and AI-assessed.
      </p>
    </div>

    <AppTabs :tabs="tabs" />
  </div>
</template>

<script setup>
import pastQuestionsTab from "~/components/app/practice/past-questions.vue";
import quizTab from "~/components/app/practice/quiz.vue";
definePageMeta({
  layout: "app",
});

useHead({
  name: "Practice - FE-1 Simple",
});

const tabs = [
  {
    name: "Past Question",
    component: pastQuestionsTab,
  },
  {
    name: "Quizzes",
    component: quizTab,
  },
];
</script>
