<template>
  <div class="flex items-start gap-10 justify-between">
    <!-- Left Column -->
    <div class="lg:w-[75%]">
      <!-- Welcome Banner -->
      <div
        class="bg-linear-to-r from-primary to-blue-500 rounded-2xl px-6 py-11 text-white relative overflow-hidden"
      >
        <div class="relative z-10">
          <h1 class="text-2xl md:text-3xl font-bold mb-2">
            Welcome to Fe-1, {{ userName }}
          </h1>
          <p class="text-white text-lg">
            Ready to start your FE-1 journey? Let's build your path to success.
          </p>
        </div>
        <!-- Decorative illustration -->
        <div class="absolute right-0 bottom-0">
          <img src="~/assets/images/welcome.svg" alt="Illustration" />
        </div>
      </div>

      <div v-if="!user" class="w-full mt-6 space-y-6">
        <!--New User Quick Start Section -->
        <div class="bg-white rounded-2xl border border-stroke p-6">
          <h2 class="text-lg font-bold text-black-500 mb-4">Quick Start</h2>
          <div class="space-y-3">
            <AppDashboardQuickStartCard
              title="Continue Learning"
              description="Pick up where you left off in Contract Law"
              bg-color="#FFC70033"
              @click="user = !user"
            />
            <AppDashboardQuickStartCard
              title="Practice Past Questions"
              description="Simulate a real FE-1 essay and get AI feedback"
              bg-color="#E6027D33"
              @click="navigateTo('/practice')"
            />
            <AppDashboardQuickStartCard
              title="Take a Quiz"
              description="Test your recall with 5-minute case challenges"
              bg-color="#07BFFB33"
              @click="navigateTo('/practice/quiz')"
            />
            <AppDashboardQuickStartCard
              title="Listen to a Podcast"
              description="Catch up on today's topic while you commute"
              bg-color="#7569F833"
              @click="navigateTo('/library')"
            />
          </div>
        </div>

        <!-- Today's Recommended Episode for New User -->
        <div class="bg-white rounded-2xl border border-stroke p-6">
          <h2 class="text-lg font-bold text-black-500 mb-4">
            Today's Recommended Episode
          </h2>
          <div class="flex">
            <div>
              <img src="@/assets/images/contract.svg" alt="Contract" />
            </div>

            <div
              class="flex-1 flex flex-col justify-between border-r border-y border-stroke rounded-r-xl px-6 py-5"
            >
              <h3 class="font-bold text-black-500 w-[70%] text-lg">
                Contract Formation Essentials
              </h3>
              <p class="text-disabled-text mt-1">Contract Law • 45 mins</p>
              <div class="flex gap-3 mt-4">
                <button class="app_filled_button w-1/2!">
                  <UIcon name="i-heroicons-play" class="text-2xl" />
                  Play Now
                </button>
                <button class="app_outline_button w-1/2!">
                  Add To Playlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Returning User -->
      <div v-else class="space-y-14 mt-14">
        <div class="space-y-6">
          <h1 class="text-xl font-bold text-black-500">Resume Learning</h1>

          <div class="border space-y-5 border-stroke rounded-xl p-6">
            <div>
              <h1 class="text-xl font-bold text-black-500">Resulting Trusts</h1>
              <p class="text-disabled-text mt-1">
                Equity • 15 minutes remaining • 62%
              </p>
            </div>

            <div class="flex items-center justify-between">
              <p class="font-inter text-base text-black-500">
                Continue with trust law fundamentals and practical applications.
              </p>
              <button class="app_filled_button w-fit! px-6!">
                Resume study
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <h1 class="text-black-500 text-xl font-bold">
            Latest Podcast Episodes
          </h1>
          <a href="#" class="text-primary">See all</a>
        </div>

        <div class="flex items-start mt-8 justify-between">
          <div
            v-for="i in 3"
            :key="i"
            class="w-[32%] h-82.5 rounded-xl border border-stroke overflow-hidden"
          >
            <div class="h-37.5 rounded-t-xl">
              <img
                class="w-full h-full object-cover"
                src="~/assets/images/contract.svg"
                alt="Podcast Episode"
              />
            </div>

            <div class="p-6 flex flex-col justify-between h-45">
              <h1 class="text-xl font-bold text-black-500">
                Contract Formation Essentials
              </h1>

              <p class="text-disabled-text">Contract Law • 45 mins</p>

              <a href="#" class="text-primary font-inter">Listen</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column - Stats Sidebar -->
    <div class="space-y-4 w-[25%]">
      <!-- Countdown Card -->
      <div
        class="bg-white border-t-primary border-x-primary/80 rounded-xl border-2 border-blue-400 py-10 p-4"
      >
        <div class="flex items-center gap-4">
          <!-- Circular Progress -->
          <AppCircularProgress :progress="daysProgress" />
          <div>
            <p class="text-2xl font-bold text-black-primary">
              {{ daysUntilExam }} Days
            </p>
            <p class="text-black-primary text-base font-inter">
              until your next FE-1 sitting
            </p>
          </div>
        </div>
      </div>

      <!-- Time Spent Today -->
      <AppDashboardStatsCard
        icon="gavel"
        icon-color="#F59E0B"
        icon-bg-color="#FEF3C7"
        :value="`${hoursToday} Hours`"
        label="Time spent Today"
      >
        <AppProgressBar :progress="targetProgress" color="#7569F8" />
        <div class="flex mt-2 items-center justify-between mb-2">
          <span class="text-grey-200">Today's target</span>
          <span class="font-semibold text-black-primary"
            >{{ targetHours }} hours</span
          >
        </div>
      </AppDashboardStatsCard>

      <!-- Weekly Streak -->
      <AppDashboardStatsCard
        icon="flash"
        icon-color="#8B5CF6"
        icon-bg-color="#EDE9FE"
        :value="`${weeklyStreak} day`"
        label="Weekly streak"
      >
        <!-- Day bubbles -->
        <div class="flex justify-between mb-3">
          <div
            v-for="(day, index) in weekDaysData"
            :key="index"
            class="flex flex-col items-center gap-1"
          >
            <div
              class="w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium"
              :class="
                day.active
                  ? 'bg-primary text-white'
                  : 'bg-white border-2 border-stroke '
              "
            >
              {{ day.active ? "✓" : "" }}
            </div>
            <span class="text-xs font-inter text-black">{{ day.label }}</span>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-grey-200">Longest streak</span>
            <span class="font-semibold text-black-primary"
              >{{ longestStreak }} day</span
            >
          </div>
        </div>
      </AppDashboardStatsCard>

      <!-- Average Quiz Score -->
      <AppDashboardStatsCard
        icon="cert_badge"
        icon-color="#EC4899"
        icon-bg-color="#FCE7F3"
        :value="`${averageScore}%`"
        label="Average Quiz score"
      >
        <div class="space-y-6">
          <div>
            <AppProgressBar :progress="highestScore" color="#07bffb" />
            <div class="flex mt-2 items-center justify-between mb-2">
              <span class="text-grey-200">Highest score</span>
              <span class="font-semibold text-black-primary"
                >{{ highestScore }}%</span
              >
            </div>
          </div>
          <div>
            <AppProgressBar :progress="lowestScore" color="#e6027d" />
            <div class="flex mt-2 items-center justify-between mb-2">
              <span class="text-grey-200">Lowest score</span>
              <span class="font-semibold text-black-primary"
                >{{ lowestScore }}%</span
              >
            </div>
          </div>
        </div>
      </AppDashboardStatsCard>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "app",
});

useHead({
  title: "Dashboard - FE-1 Simple",
});

// TODO: Get data from API/store
const user = ref(false);
const userName = ref("Priscilia");
const daysUntilExam = ref(42);
const hoursToday = ref(2);
const targetHours = ref(3);
const weeklyStreak = ref(3);
const longestStreak = ref(0);
const averageScore = ref(56);
const highestScore = ref(67);
const lowestScore = ref(34);

// Calculate progress (assuming 90 days total study period)
const daysProgress = computed(() =>
  Math.max(0, 100 - (daysUntilExam.value / 90) * 100)
);

const targetProgress = computed(() =>
  Math.max((hoursToday.value / targetHours.value) * 100)
);

// Week days with active state (which days user studied)
const weekDaysData = ref([
  { label: "S", active: false },
  { label: "M", active: true },
  { label: "T", active: false },
  { label: "W", active: true },
  { label: "T", active: true },
  { label: "F", active: false },
  { label: "S", active: false },
]);
</script>
