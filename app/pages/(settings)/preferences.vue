<template>
  <div class="flex flex-col gap-8">
    <!-- Header -->
    <h1 class="text-2xl font-bold text-black-500">
      Notifications & Preferences
    </h1>

    <!-- Preferences Card -->
    <div class="white_card bg-white p-6! space-y-4">
      <!-- Preference Items -->
      <div
        v-for="pref in preferencesList"
        :key="pref.key"
        class="white_card p-4 flex items-center justify-between"
      >
        <div>
          <h3 class="font-bold text-black-primary">{{ pref.title }}</h3>
          <p class="text-dark-200">{{ pref.description }}</p>
        </div>
        <USwitch v-model="preferences[pref.key]" size="lg" />
      </div>

      <!-- Save Button -->
      <div class="flex justify-end pt-4">
        <button @click="savePreferences" class="app_filled_button w-fit! px-6!">
          Save Preferences
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Notifications & Preferences - FE-1 Simple",
});

const preferencesList = [
  {
    key: "emailReminders",
    title: "Email Reminders",
    description: "Send weekly progress updates",
  },
  {
    key: "studyStreakAlerts",
    title: "Study Streak Alerts",
    description: "Notify me if I miss a day",
  },
  {
    key: "podcastRecommendations",
    title: "Podcast Recommendations",
    description: "Show relevant episodes",
  },
  {
    key: "aiProgressTrends",
    title: "Show relevant episodes",
    description: "Show AI progress trends",
  },
];

const preferences = reactive({
  emailReminders: true,
  studyStreakAlerts: true,
  podcastRecommendations: true,
  aiProgressTrends: true,
});

const savePreferences = () => {
  console.log("Preferences saved:", preferences);
};
</script>
