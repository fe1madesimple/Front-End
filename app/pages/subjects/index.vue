<template>
  <div class="space-y-10">
    <!-- Focus Subjects Banner -->
    <div
      class="bg-white rounded-xl border-stroke p-5 flex items-center justify-between"
    >
      <p class="text-lg text-black-500">
        Your Focus Subjects are
        <NuxtLink to="/subjects/equity" class="text-primary font-semibold"
          >Equity</NuxtLink
        >
        /
        <NuxtLink
          to="/subjects/constitutional-law"
          class="text-primary font-semibold"
          >Constitutional Law</NuxtLink
        >
      </p>
      <button class="text-primary font-semibold cursor-pointer">
        Edit Subject
      </button>
    </div>

    <!-- Header -->
    <div>
      <h1 class="text-2xl font-bold text-black-primary">
        Your Subjects, Your Strategy.
      </h1>
      <p class="text-black-500 mt-1">
        Welcome back, Priscilia! You're making solid progress on your core
        papers.
      </p>
    </div>

    <!-- Subject Cards Grid -->
    <div class="w-full grid grid-cols-4 gap-6">
      <div
        v-for="(subject, index) in subjects"
        :key="index"
        class="bg-white h-75 rounded-xl border border-stroke overflow-hidden"
      >
        <!-- Colored Header with Subject Name -->
        <div
          class="h-1/2 flex items-center justify-center relative rounded-t-xl"
          :style="{ backgroundColor: subject.color }"
        >
          <!-- Status Badge -->
          <span
            class="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold"
            :class="getStatusBadgeClass(subject.status)"
          >
            {{ subject.status }}
          </span>
          <div
            class="text-2xl w-full text-center font-bold text-white px-6 py-3"
            :style="{
              background: `radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,255,255,0.25) 0%, transparent 60%), ${subject.color}`,
              boxShadow:
                'inset 0 2px 4px rgba(0,0,0,0.05), inset 0 -2px 4px rgba(0,0,0,0.05)',
            }"
          >
            <h2>{{ subject.name }}</h2>
          </div>
        </div>

        <!-- Progress Section -->
        <div class="p-5 space-y-5">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-black-500">Progress</span>
              <span class="text-black-primary font-semibold"
                >{{ subject.progress }}%</span
              >
            </div>
            <!-- Progress Bar -->
            <AppProgressBar
              :progress="subject.progress"
              :color="subject.progressColor"
            />
          </div>

          <!-- Action Button -->
          <NuxtLink :to="`subjects/${subject.id}`">
            <button class="app_outline_button w-full!">
              {{ getButtonText(subject.status) }}
            </button>
          </NuxtLink>
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
  title: "Subjects - FE-1 Simple",
});

const getStatusBadgeClass = (status) => {
  switch (status) {
    case "Completed":
      return "bg-white text-success-600";
    case "In Progress":
      return "bg-white text-primary";
    case "Not Started":
      return "bg-white text-black-500";
    default:
      return "bg-gray-200 text-black-500";
  }
};

const getButtonText = (status) => {
  switch (status) {
    case "Completed":
      return "Review";
    case "In Progress":
      return "Continue";
    case "Not Started":
      return "Start Learning";
    default:
      return "Start Learning";
  }
};

const subjects = ref([
  {
    id: 1,
    name: "Equity",
    status: "Completed",
    progress: 60,
    color: "#07BFFB",
    progressColor: "#07BFFB",
  },
  {
    id: 2,
    name: "Contract Law",
    status: "Not Started",
    progress: 0,
    color: "#FFC700",
    progressColor: "#FFC700",
  },
  {
    id: 3,
    name: "EU Law",
    status: "Not Started",
    progress: 0,
    color: "#00BCD4",
    progressColor: "#00BCD4",
  },
  {
    id: 4,
    name: "Tort Law",
    status: "Not Started",
    progress: 0,
    color: "#C9A227",
    progressColor: "#C9A227",
  },
  {
    id: 5,
    name: "Land Law",
    status: "In Progress",
    progress: 34,
    color: "#E6027D",
    progressColor: "#E6027D",
  },
  {
    id: 6,
    name: "Criminal Law",
    status: "In Progress",
    progress: 56,
    color: "#FF1493",
    progressColor: "#FF1493",
  },
  {
    id: 7,
    name: "Constitutional Law",
    status: "Not Started",
    progress: 0,
    color: "#1E3A8A",
    progressColor: "#1E3A8A",
  },
  {
    id: 8,
    name: "Company Law",
    status: "Not Started",
    progress: 0,
    color: "#7C3AED",
    progressColor: "#7C3AED",
  },
]);
</script>
