<template>
  <div class="space-y-6">
    <!-- Back Button -->
    <NuxtLink :to="`/subjects/${route.params.id}`" class="back_accordion">
      <UIcon name="i-heroicons-chevron-left-20-solid" class="text-xl" />
      Back
    </NuxtLink>

    <!-- Modules Card -->
    <div class="white_card p-6! space-y-4">
      <h1 class="text-2xl font-bold text-black-500">Modules</h1>

      <!-- Module Accordions -->
      <div class="space-y-3">
        <div
          v-for="i in 6"
          :key="i"
          class="border border-stroke rounded-xl overflow-hidden"
        >
          <!-- Module Header -->
          <div
            class="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
            @click="toggleModule(i)"
          >
            <div class="space-y-1">
              <h3 class="font-bold text-black-500">
                Module {{ i }} : {{ getModuleTitle(i) }}
              </h3>
              <span
                :class="getStatusBadgeClass(i)"
                class="text-xs px-2 py-0.5 rounded font-medium"
              >
                {{ getStatus(i) }}
              </span>
            </div>

            <div class="flex items-center gap-4">
              <div class="text-right">
                <p class="text-black-500 text-sm">
                  <span class="text-primary">{{ getCompleted(i) }}</span
                  >/{{ getTotal(i) }} completed
                </p>
                <div class="w-24 mt-1">
                  <AppProgressBar
                    :progress="(getCompleted(i) / getTotal(i)) * 100"
                    color="#0561e8"
                  />
                </div>
              </div>
              <UIcon
                :name="
                  expandedModule === i
                    ? 'i-heroicons-chevron-up-20-solid'
                    : 'i-heroicons-chevron-down-20-solid'
                "
                class="text-xl text-black-500"
              />
            </div>
          </div>

          <!-- Expanded Lessons -->
          <div v-if="expandedModule === i" class="px-4 pb-4">
            <ul class="mt-4 space-y-2 text-black-500">
              <li v-for="j in getTotal(i)" :key="j">
                <NuxtLink
                  :to="{
                    name: 'subjects-id-modules-moduleId',
                    params: {
                      id: route.params.id,
                      moduleId: i,
                    },
                    query: { lesson: j },
                  }"
                  class="flex items-center gap-2 hover:text-primary"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-black-500"></span>
                  Lesson {{ j }}: {{ getLessonTitle(i, j) }}</NuxtLink
                >
              </li>
            </ul>
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
  title: "Modules - FE-1 Simple",
});

const expandedModule = ref(1);

const toggleModule = (moduleIndex) => {
  expandedModule.value =
    expandedModule.value === moduleIndex ? null : moduleIndex;
};

const getModuleTitle = (i) => {
  const titles = [
    "Foundations of Criminal Law",
    "Offences Against the Person",
    "Property and Economic Offences",
    "Public Order & State Security",
    "Inchoate & Ancillary Offences",
    "Defences and Sentencing",
  ];
  return titles[i - 1] || `Module ${i}`;
};

const getStatus = (i) => {
  if (i === 1) return "Completed";
  if (i <= 3) return "In Progress";
  return "Not Started";
};

const getStatusBadgeClass = (i) => {
  if (i === 1) return "bg-success-200 text-success-600";
  if (i <= 3) return "bg-accent-200 text-primary";
  return "bg-gray-100 text-gray-500";
};

const getCompleted = (i) => {
  if (i === 1) return 5;
  if (i === 2) return 3;
  if (i === 3) return 1;
  return 0;
};

const getTotal = (i) => {
  const totals = [5, 5, 6, 7, 7, 6];
  return totals[i - 1] || 5;
};

const getLessonTitle = (moduleIndex, lessonIndex) => {
  const lessons = {
    1: [
      "Characteristics of a Crime",
      "Classifications of Crimes",
      "Actus Reus",
      "Mens Rea",
      "Coincidence of Mens Rea & Actus Reus",
    ],
    2: [
      "Assault and Battery",
      "Assault Occasioning ABH",
      "Grievous Bodily Harm",
      "Wounding with Intent",
      "Consent as Defence",
    ],
    3: [
      "Theft",
      "Robbery",
      "Burglary",
      "Fraud Offences",
      "Criminal Damage",
      "Money Laundering",
    ],
    4: [
      "Public Order Act",
      "Riot and Violent Disorder",
      "Affray",
      "Fear or Provocation of Violence",
      "Harassment",
      "Terrorism Offences",
      "Official Secrets",
    ],
    5: [
      "Attempt",
      "Conspiracy",
      "Encouraging and Assisting Crime",
      "Aiding and Abetting",
      "Joint Enterprise",
      "Withdrawal from Crime",
      "Secondary Liability",
    ],
    6: [
      "Self-Defence",
      "Duress",
      "Necessity",
      "Insanity",
      "Intoxication",
      "Sentencing Guidelines",
    ],
  };
  return lessons[moduleIndex]?.[lessonIndex - 1] || `Lesson ${lessonIndex}`;
};
</script>
