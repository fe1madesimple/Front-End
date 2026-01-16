<template>
  <div class="flex flex-col gap-8">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-black-500">Account Details</h1>
      <div v-if="!isEditing">
        <button
          @click="isEditing = true"
          class="text-primary font-inter font-semibold cursor-pointer bg-white rounded-xl py-3 px-6"
        >
          Edit
        </button>
      </div>
      <div v-else class="flex gap-4">
        <button @click="saveChanges" class="app_filled_button px-6!">
          Save Changes
        </button>
        <button
          @click="cancelEdit"
          class="text-primary font-semibold font-inter cursor-pointer bg-white rounded-xl py-3 px-6"
        >
          Cancel
        </button>
      </div>
    </div>

    <!-- Account Details Card -->
    <div class="white_card p-6!">
      <!-- Form Fields -->
      <div class="grid grid-cols-3 gap-6">
        <!-- Full Name -->
        <div class="space-y-2">
          <label class="input_label">Full Name</label>
          <input
            v-model="form.fullName"
            type="text"
            :disabled="!isEditing"
            class="input_field"
            placeholder="Your full name"
          />
          <p class="text-sm text-disabled-text">
            Make sure this matches your exam registration name.
          </p>
        </div>

        <!-- Email -->
        <div class="space-y-2">
          <label class="input_label">Email</label>
          <input
            v-model="form.email"
            type="email"
            :disabled="!isEditing"
            class="input_field"
            placeholder="your@email.com"
          />
          <p class="text-sm text-disabled-text">
            Used for login and notifications.
          </p>
        </div>

        <!-- Profile Colour -->
        <div class="space-y-2">
          <label class="input_label">Profile Colour</label>
          <div class="flex gap-2">
            <button
              v-for="color in profileColors"
              :key="color"
              @click="isEditing && (form.profileColor = color)"
              class="w-8 h-8 rounded-xl transition-all flex items-center justify-center"
              :class="[!isEditing && 'cursor-pointer opacity-50']"
              :style="{ backgroundColor: color }"
            >
              <UIcon
                v-if="form.profileColor === color"
                name="i-heroicons-check-20-solid"
                class="text-white text-xl"
              />
            </button>
          </div>
          <p class="text-sm text-disabled-text">
            Select a colour that keeps you motivated.
          </p>
        </div>

        <!-- Target Sitting -->
        <div class="space-y-2">
          <label class="input_label">Target Sitting</label>
          <USelectMenu
            v-model="form.targetSitting"
            :options="targetSittings"
            :disabled="!isEditing"
            class="w-full rounded-xl"
            size="xl"
          />
          <p class="text-sm text-disabled-text">
            Change this to update your countdown.
          </p>
        </div>

        <!-- Daily Study Goal -->
        <div class="space-y-2">
          <label class="input_label">Daily Study Goal</label>
          <USelectMenu
            v-model="form.dailyStudyGoal"
            :options="studyGoals"
            :disabled="!isEditing"
            class="w-full rounded-xl"
            size="xl"
          />
          <p class="text-sm text-disabled-text">
            Stay consistent by setting achievable daily goals.
          </p>
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
  title: "Profile - FE-1 Simple",
});

const isEditing = ref(false);

const profileColors = [
  "#07BFFB",
  "#FFC700",
  "#00BCD4",
  "#9C27B0",
  "#3F51B5",
  "#009688",
  "#E91E63",
  "#673AB7",
];

const targetSittings = [
  "April 2025",
  "October 2025",
  "April 2026",
  "October 2026",
];

const studyGoals = ["30 minutes", "1 hour", "2 hours", "3 hours", "4 hours"];

const form = reactive({
  fullName: "Ighodaro Pricilla",
  email: "pricilla@email.com",
  profileColor: "#07BFFB",
  targetSitting: "April 2025",
  dailyStudyGoal: "2 hours",
});

const originalForm = ref({ ...form });

const saveChanges = () => {
  originalForm.value = { ...form };
  isEditing.value = false;
};

const cancelEdit = () => {
  Object.assign(form, originalForm.value);
  isEditing.value = false;
};
</script>
