<template>
  <div class="space-y-10">
    <div class="p-3 rounded-xl border border-stroke bg-sky-blue">
      <h1 class="text-black-500 font-bold text-2xl">
        Simulate Full Exam (5 Questions, 3 Hours)
      </h1>
      <p class="text-disabled-text mt-1">
        Experience the real FE-1 environment. Five randomised questions from our
        database will appear once you start.
      </p>

      <p class="text-error-500 flex items-center gap-1 my-4">
        <UIcon name="i-heroicons-information-circle" />
        This mode locks the timer for 3 hours. You cannot pause, navigate away,
        or access notes — exactly like the live exam.
      </p>

      <button class="app_filled_button">Start full simulation test</button>

      <p class="text-disabled-text mt-2">
        You'll receive AI feedback for all five answers once you finish.
      </p>
    </div>

    <div>
      <div class="space-y-5">
        <input
          type="text"
          placeholder="Search questions by keyword e.g. Carlill, Mens Rea"
          class="input_field"
        />

        <div class="grid grid-cols-2 gap-5 w-1/2">
          <div class="flex flex-col gap-2">
            <label class="input_label font-semibold!">SUBJECT</label>
            <USelectMenu
              value-key="value"
              label-key="label"
              placeholder="All Subjects"
              class="w-full"
              :ui="{
                base: 'select_field cursor-pointer',
                trailing: 'text-grey-200',
              }"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="input_label font-semibold">MONTH/YEAR</label>
            <USelectMenu
              value-key="value"
              label-key="label"
              placeholder="All Month/Year"
              class="w-full"
              :ui="{
                base: 'select_field cursor-pointer',
                trailing: 'text-grey-200',
              }"
            />
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold text-black-500">
          Available Past Questions
        </h1>

        <p class="font-medium text-primary">Showing 5 questions</p>
      </div>

      <div class="grid grid-cols-3 gap-5 mt-6">
        <div
          v-for="(question, index) in questions"
          :key="index"
          class="p-4 rounded-xl border border-stroke bg-white space-y-3"
        >
          <!-- Top row: Year and Type -->
          <div class="flex items-center justify-between">
            <span class="text-primary font-inter font-bold">{{
              question.year
            }}</span>
            <span class="text-primary font-inter font-medium">{{
              question.type
            }}</span>
          </div>

          <!-- Subject -->
          <h3 class="font-bold text-black-primary text-lg">
            {{ question.subject }}
          </h3>

          <!-- Description -->
          <p class="text-disabled-text line-clamp-3">
            {{ question.description }}
          </p>

          <!-- Button -->
          <NuxtLink :to="`/practice/past-questions/${question.id}`">
            <button class="app_outline_button w-full! mt-2">
              Start Practice
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const questions = ref([
  {
    id: 1,
    year: "2024",
    type: "Essay",
    subject: "Equity",
    description:
      "John enters into a contract to sell his car to Mary for €15,000. Before delivery, the car is damaged in a storm. Discuss the legal principles that would...",
  },
  {
    id: 2,
    year: "2024",
    type: "Essay",
    subject: "Contract Law",
    description:
      "Analyse the doctrine of consideration in contract law with reference to relevant case law and statutory provisions...",
  },
  {
    id: 3,
    year: "2023",
    type: "Essay",
    subject: "Criminal Law",
    description:
      "Discuss the elements of murder under Irish law and the available defences. Reference relevant cases in your answer...",
  },
  {
    id: 4,
    year: "2023",
    type: "Essay",
    subject: "Constitutional Law",
    description:
      "Examine the separation of powers doctrine as it applies in the Irish constitutional framework...",
  },
  {
    id: 5,
    year: "2022",
    type: "Essay",
    subject: "EU Law",
    description:
      "Discuss the principle of direct effect in EU law and its significance for the Irish legal system...",
  },
]);
</script>
