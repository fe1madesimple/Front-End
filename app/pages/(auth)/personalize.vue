<template>
  <AuthCard>
    <!-- Skip link -->
    <NuxtLink
      to="/dashboard"
      class="flex items-center gap-1 text-primary font-medium mb-8 hover:opacity-80 transition-opacity"
    >
      Skip For Now
    </NuxtLink>

    <!-- Welcome heading -->
    <h1 class="login_heading">Welcome {{ userName }}!</h1>
    <p class="text-grey-200 mb-8">Let's personalize your experience</p>

    <!-- Personalization form -->
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
      <!-- Subject selection -->
      <div class="flex flex-col gap-4">
        <label class="text-base font-semibold text-black"
          >Which subjects need the most focus?</label
        >
        <div class="grid grid-cols-2 gap-3">
          <label
            v-for="subject in subjects"
            :key="subject.value"
            class="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              :value="subject.value"
              v-model="selectedSubjects"
              class="custom_checkbox"
            />
            <span class="text-sm text-black-500">{{ subject.label }}</span>
          </label>
        </div>
      </div>

      <!-- Target exam date -->
      <div class="flex flex-col gap-2">
        <label class="input_label">When is your target exam date?</label>
        <USelectMenu
          v-model="targetExamDate"
          :items="examDates"
          value-key="value"
          label-key="label"
          class="w-full"
          :ui="{
            base: 'select_field cursor-pointer',
            trailing: 'text-grey-200',
          }"
        />
      </div>

      <!-- Daily study goal -->
      <div class="flex flex-col gap-2">
        <label class="input_label">Daily Study Goal</label>
        <USelectMenu
          v-model="dailyStudyGoal"
          :items="studyGoals"
          value-key="value"
          label-key="label"
          class="w-full"
          :ui="{
            base: 'select_field cursor-pointer',
            trailing: 'text-grey-200',
          }"
        />
      </div>

      <!-- Start Learning button -->
      <button type="submit" class="gradient_button mt-2">Start Learning</button>
    </form>
  </AuthCard>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

useHead({
  title: "Personalize Experience - FE-1-Simple",
});

// TODO: Get user name from auth store
const userName = ref("Priscilia");

const subjects = [
  { label: "Contract Law", value: "contract-law" },
  { label: "Company Law", value: "company-law" },
  { label: "Criminal Law", value: "criminal-law" },
  { label: "Equity", value: "equity" },
  { label: "Tort Law", value: "tort-law" },
  { label: "EU Law", value: "eu-law" },
  { label: "Constitutional Law", value: "constitutional-law" },
  { label: "Property Law", value: "property-law" },
];

const examDates = [
  { label: "April 2025", value: "april-2025" },
  { label: "October 2025", value: "october-2025" },
  { label: "April 2026", value: "april-2026" },
  { label: "October 2026", value: "october-2026" },
];

const studyGoals = [
  { label: "30 minutes", value: "30-mins" },
  { label: "1 hour", value: "1-hour" },
  { label: "2 hours", value: "2-hours" },
  { label: "3 hours", value: "3-hours" },
  { label: "4+ hours", value: "4-plus-hours" },
];

const selectedSubjects = ref([]);
const targetExamDate = ref(examDates[0]);
const dailyStudyGoal = ref(studyGoals[2]);

const handleSubmit = () => {
  console.log("Personalization:", {
    subjects: selectedSubjects.value,
    examDate: targetExamDate.value,
    studyGoal: dailyStudyGoal.value,
  });
  // TODO: Save preferences and navigate to dashboard
  navigateTo("/dashboard");
};
</script>
