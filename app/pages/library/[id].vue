<template>
  <div>
    <!-- Back Button -->
    <NuxtLink
      to="/practice"
      class="text-primary flex items-center gap-1 font-semibold"
    >
      <UIcon name="i-heroicons-chevron-left-20-solid" class="text-xl" />
      Back
    </NuxtLink>

    <div class="flex items-center my-6 justify-between">
      <div>
        <h1 class="text-2xl font-bold text-black-primary">
          Case Summary: Carlill v Carbolic Smoke Ball Co
        </h1>
        <p class="text-black-500 mt-1">[1893] 1 QB 256</p>
      </div>

      <button
        @click="saved = !saved"
        :class="[
          saved
            ? 'rounded-xl font-bold flex items-center gap-2 bg-white text-primary py-3 px-4 w-fit'
            : 'app_filled_button w-fit! px-6!',
        ]"
      >
        <UIcon
          :name="saved ? 'i-heroicons-check' : 'i-heroicons-star'"
          class="text-lg"
          :class="{ 'text-primary': saved }"
        />
        {{ saved ? "Saved" : "Save for Revision" }}
      </button>
    </div>

    <div class="border rounded-xl mb-6 grid grid-cols-5 border-stroke p-6">
      <div v-for="(value, key) in details" :key="key">
        <h1 class="text-disabled-text font-semibold capitalize">
          {{ key.replace("_", " ") }}
        </h1>
        <p class="text-primary text-lg font-semibold">{{ value }}</p>
      </div>
    </div>

    <AppTabs :tabs="tabs" />

    <!-- Footer -->
    <div class="p-6 rounded-xl border space-y-5 border-primary bg-sky-blue">
      <h1 class="text-black-500 font-bold text-2xl">Test Your Knowledge</h1>
      <p class="text-disabled-text mt-1">
        Think you've mastered this case? Try a 2-minute quiz to check your
        recall.
      </p>

      <div class="my-4 flex items-center w-fit gap-5">
        <button class="app_filled_button w-fit!">Take Quick Quiz</button>
        <button
          class="border-2 border-stroke cursor-pointer py-2.5 font-bold px-4 rounded-xl"
        >
          View Related Question
        </button>
      </div>

      <p class="text-disabled-text">
        Get instant feedback and examiner-style tips.
      </p>
    </div>
  </div>
</template>

<script setup>
import Summary from "~/components/app/library/summary.vue";
import PrincipleApplication from "~/components/app/library/principle.vue";
import ExamRelevance from "~/components/app/library/exam-relevance.vue";
import RelatedCases from "~/components/app/library/related-cases.vue";

definePageMeta({
  layout: "app",
});

useHead({
  title: "Subject Summary - FE-1 Simple",
});

const saved = ref(false);

const details = {
  subject: "Contract Law",
  jurisdiction: "UK (Persuasive)",
  topic: "Offer & Acceptance",
  year: "1893",
  exam_relevance: "High",
};

const tabs = [
  {
    name: "Summary",
    component: Summary,
  },
  {
    name: "Principle & Application",
    component: PrincipleApplication,
  },
  {
    name: "Exam  Relevance",
    component: ExamRelevance,
  },
  {
    name: "Related Cases",
    component: RelatedCases,
  },
];
</script>
