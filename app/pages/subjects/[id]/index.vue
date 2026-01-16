<template>
  <div class="space-y-8">
    <!-- Back Button -->
    <NuxtLink
      to="/subjects"
      class="text-primary flex items-center gap-1 font-semibold"
    >
      <UIcon name="i-heroicons-chevron-left-20-solid" class="text-xl" />
      Back
    </NuxtLink>

    <!-- Progress Banner -->
    <div
      v-if="showBanner"
      class="bg-sky-blue border border-stroke-100 rounded-xl p-4 flex items-center justify-between"
    >
      <p class="text-black font-bold">
        Steady progress! You're {{ subject.progress }}% through this subject.
      </p>
      <button @click="showBanner = false" class="cursor-pointer">
        <UIcon
          name="i-heroicons-x-mark-20-solid"
          class="text-xl text-black-500"
        />
      </button>
    </div>

    <!-- Focus Zone -->
    <div class="space-y-4">
      <div>
        <h1 class="text-2xl font-bold text-black-500">Focus Zone</h1>
        <p class="text-black-500 mt-1">
          Everything you need for this subject — from lessons to quizzes to past
          papers — in one place.
        </p>
      </div>

      <!-- Subject Card -->
      <div
        class="bg-white rounded-xl border border-stroke p-4 flex items-center gap-8"
      >
        <!-- Subject Image -->
        <div
          class="w-40 h-42 rounded-xl flex items-center justify-center"
          :style="{
            background: `radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,255,255,0.25) 0%, transparent 60%), ${subject.color}`,
          }"
        >
          <div
            class="w-20 h-20 rounded-lg opacity-60"
            :style="{ backgroundColor: subject.color }"
          ></div>
        </div>

        <!-- Subject Info -->
        <div class="flex-1 space-y-4">
          <h2 class="text-xl font-semibold text-black-primary">
            {{ subject.name }}
          </h2>

          <!-- Stats Row -->
          <div class="flex items-center gap-28">
            <div>
              <p class="text-disabled-text">Avg. Quiz Score</p>
              <p class="text-primary font-semibold text-xl">
                {{ subject.avgScore }}%
              </p>
            </div>
            <div>
              <p class="text-disabled-text">Last Studied</p>
              <p class="text-primary font-semibold text-xl">
                {{ subject.lastStudied }}
              </p>
            </div>
            <div>
              <p class="text-disabled-text">Total Hours</p>
              <p class="text-primary font-semibold text-xl">
                {{ subject.totalHours }}
              </p>
            </div>
            <div>
              <p class="text-disabled-text">Modules</p>
              <p class="text-primary font-semibold text-xl">
                {{ subject.modulesCompleted }} of {{ subject.totalModules }}
              </p>
            </div>
          </div>

          <!-- Progress Row -->
          <div class="flex mt-6 items-center gap-6">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-black-500 text-sm">Progress:</span>
                <span class="text-black-primary font-semibold"
                  >{{ subject.progress }}%</span
                >
              </div>
              <AppProgressBar
                :progress="subject.progress"
                :color="subject.color"
              />
            </div>
            <NuxtLink :to="`/subjects/${route.params.id}/modules`">
              <button class="app_filled_button px-6! w-fit!">
                Continue Learning
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Two Column Section -->
    <div class="flex gap-12">
      <!-- Test Your Knowledge -->
      <div class="w-1/2 space-y-4">
        <div
          class="w-full space-y-4 border bg-white border-stroke-100 p-4 rounded-xl"
        >
          <div>
            <h2 class="text-xl font-bold text-black-500">
              Test Your Knowledge
            </h2>
            <p class="text-disabled-text mt-1">
              Check your understanding of key principles through short quizzes
              and realistic exam questions.
            </p>
          </div>

          <div class="space-y-3">
            <div
              class="bg-white rounded-xl border border-stroke p-4 flex items-center justify-between cursor-pointer transition-colors"
            >
              <div>
                <h3 class="font-bold text-black-500">Quick Quizzes</h3>
                <p class="text-dark-200 text-sm">
                  Multiple-choice and scenario-based recall exercises.
                </p>
              </div>
              <UIcon
                name="i-heroicons-arrow-right-20-solid"
                class="text-xl text-black-500"
              />
            </div>

            <div
              class="bg-white rounded-xl border border-stroke p-4 flex items-center justify-between cursor-pointer transition-colors"
            >
              <div>
                <h3 class="font-bold text-black-500">Essay Practice</h3>
                <p class="text-dark-200 text-sm">
                  Timed written exercises benchmarked against real FE-1 examiner
                  reports.
                </p>
              </div>
              <UIcon
                name="i-heroicons-arrow-right-20-solid"
                class="text-xl text-black-500"
              />
            </div>
          </div>
        </div>

        <!-- Case Law Library -->
        <div class="bg-white rounded-xl border border-stroke p-4 space-y-4">
          <div>
            <h2 class="text-xl font-bold text-black-500">Case Law Library</h2>
            <p class="text-disabled-text mt-1">
              Browse all cases related to {{ subject.name }} with examiner
              insights and summaries.
            </p>
          </div>
          <button class="app_outline_button w-full!">Browse</button>
        </div>
      </div>

      <!-- Need a Boost? -->
      <div
        class="w-1/2 border bg-white h-fit border-stroke-100 p-4 rounded-xl space-y-4"
      >
        <div>
          <h2 class="text-xl font-bold text-black-500">Need a Boost?</h2>
          <p class="text-disabled-text mt-1">
            Explore curated podcasts, case summaries, and flashcards related to
            this subject.
          </p>
        </div>

        <div class="space-y-3">
          <div
            class="bg-pink-50 rounded-xl border border-pink-100 p-4 flex items-center justify-between cursor-pointer transition-colors"
          >
            <div>
              <h3 class="font-bold text-blac">Podcast:</h3>
              <p class="text-dark-200 text-sm">
                The Doctrine of Consideration Explained
              </p>
            </div>
            <UIcon
              name="i-heroicons-arrow-right-20-solid"
              class="text-xl text-black-500"
            />
          </div>

          <div
            class="bg-pink-50 rounded-xl border border-pink-100 p-4 flex items-center justify-between cursor-pointer transition-colors"
          >
            <div>
              <h3 class="font-bold text-black">Flashcard Set:</h3>
              <p class="text-dark-200 text-sm">Key Contract Cases</p>
            </div>
            <UIcon
              name="i-heroicons-arrow-right-20-solid"
              class="text-xl text-black-500"
            />
          </div>

          <div
            class="bg-pink-50 rounded-xl border border-pink-100 p-4 flex items-center justify-between cursor-pointer transition-colors"
          >
            <div>
              <h3 class="font-bold text-black">Case Note:</h3>
              <p class="text-dark-200 text-sm">Dunlop v Selfridge (1915)</p>
            </div>
            <UIcon
              name="i-heroicons-arrow-right-20-solid"
              class="text-xl text-black-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

definePageMeta({
  layout: "app",
});

useHead({
  title: "Subject Details - FE-1 Simple",
});

const showBanner = ref(true);

// Mock subject data - in real app, fetch based on route.params.id
const subjectsData = {
  1: {
    id: 1,
    name: "Equity",
    color: "#07BFFB",
    progress: 60,
    avgScore: 72,
    lastStudied: "2d ago",
    totalHours: "8h 15m",
    modulesCompleted: 4,
    totalModules: 12,
  },
  2: {
    id: 2,
    name: "Contract Law",
    color: "#FFC700",
    progress: 0,
    avgScore: 0,
    lastStudied: "Never",
    totalHours: "0h 0m",
    modulesCompleted: 0,
    totalModules: 10,
  },
  3: {
    id: 3,
    name: "EU Law",
    color: "#00BCD4",
    progress: 0,
    avgScore: 0,
    lastStudied: "Never",
    totalHours: "0h 0m",
    modulesCompleted: 0,
    totalModules: 8,
  },
  4: {
    id: 4,
    name: "Tort Law",
    color: "#C9A227",
    progress: 0,
    avgScore: 0,
    lastStudied: "Never",
    totalHours: "0h 0m",
    modulesCompleted: 0,
    totalModules: 14,
  },
  5: {
    id: 5,
    name: "Land Law",
    color: "#E6027D",
    progress: 34,
    avgScore: 65,
    lastStudied: "1d ago",
    totalHours: "5h 30m",
    modulesCompleted: 3,
    totalModules: 11,
  },
  6: {
    id: 6,
    name: "Criminal Law",
    color: "#FF1493",
    progress: 56,
    avgScore: 72,
    lastStudied: "2d ago",
    totalHours: "8h 15m",
    modulesCompleted: 4,
    totalModules: 12,
  },
  7: {
    id: 7,
    name: "Constitutional Law",
    color: "#1E3A8A",
    progress: 0,
    avgScore: 0,
    lastStudied: "Never",
    totalHours: "0h 0m",
    modulesCompleted: 0,
    totalModules: 9,
  },
  8: {
    id: 8,
    name: "Company Law",
    color: "#7C3AED",
    progress: 0,
    avgScore: 0,
    lastStudied: "Never",
    totalHours: "0h 0m",
    modulesCompleted: 0,
    totalModules: 13,
  },
};

const subject = computed(() => {
  const id = route.params.id;
  return subjectsData[id] || subjectsData[1];
});
</script>
