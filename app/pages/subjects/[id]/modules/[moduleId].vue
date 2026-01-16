<template>
  <div class="space-y-6">
    <!-- Back Button -->
    <NuxtLink
      :to="`/subjects/${route.params.id}/modules`"
      class="back_accordion"
    >
      <UIcon name="i-heroicons-chevron-left-20-solid" class="text-xl" />
      Back
    </NuxtLink>

    <!-- Main Content -->
    <div class="flex gap-6">
      <!-- Left Column - Video & Transcript -->
      <div
        class="flex-1 bg-white rounded-xl border border-stroke p-6 space-y-6"
      >
        <!-- Module & Lesson Title -->
        <div>
          <h1 class="text-2xl font-bold text-black-500">
            Module {{ currentModule }}
          </h1>
          <p class="text-primary font-semibold text-lg">
            Lesson {{ currentLesson }}: {{ currentLessonTitle }}
          </p>
        </div>

        <!-- Video Player (iframe) -->
        <div class="rounded-xl overflow-hidden bg-black">
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Lesson Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <!-- Transcript Section -->
        <div class="space-y-4">
          <h2 class="text-xl font-bold text-black-500">Transcript</h2>
          <hr class="border-stroke" />

          <div class="space-y-4">
            <div v-for="i in 4" :key="i">
              <p class="text-primary font-semibold">{{ getTimestamp(i) }}</p>
              <p class="text-black-500">{{ getTranscriptText(i) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column - Subject Modules Sidebar -->
      <div class="w-80 bg-white rounded-xl border border-stroke p-6 h-fit">
        <h2 class="text-xl font-bold text-black-500 mb-4">Subject Modules</h2>

        <div class="space-y-2">
          <div
            v-for="i in 8"
            :key="i"
            class="border-b border-stroke last:border-b-0"
          >
            <!-- Module Header -->
            <div
              class="py-3 flex items-center justify-between cursor-pointer"
              @click="toggleModule(i)"
            >
              <div>
                <p class="text-sm text-black-500 font-medium">Module {{ i }}</p>
                <p class="font-semibold text-black-primary">
                  {{ getModuleTitle(i) }}
                </p>
              </div>
              <UIcon
                :name="
                  expandedModule === i
                    ? 'i-heroicons-chevron-up-20-solid'
                    : 'i-heroicons-chevron-down-20-solid'
                "
                class="text-lg text-black-500"
              />
            </div>

            <!-- Expanded Lessons -->
            <div v-if="expandedModule === i" class="pb-3 space-y-1">
              <NuxtLink
                v-for="j in 5"
                :key="j"
                :to="`/subjects/${route.params.id}/modules/${i}?lesson=${j}`"
                class="block text-sm py-0.5"
                :class="
                  isCurrentLesson(i, j)
                    ? 'text-primary font-semibold'
                    : 'text-black-500 hover:text-primary'
                "
              >
                Lesson {{ j }}: {{ getLessonTitle(i, j) }}
              </NuxtLink>
            </div>
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
  title: "Module Lesson - FE-1 Simple",
});

const expandedModule = ref(Number(route.params.moduleId) || 1);

const currentModule = computed(() => Number(route.params.moduleId) || 1);
const currentLesson = computed(() => Number(route.query.lesson) || 1);
const currentLessonTitle = computed(() =>
  getLessonTitle(currentModule.value, currentLesson.value)
);

const isCurrentLesson = (moduleIndex, lessonIndex) => {
  return (
    currentModule.value === moduleIndex && currentLesson.value === lessonIndex
  );
};

const toggleModule = (moduleIndex) => {
  expandedModule.value =
    expandedModule.value === moduleIndex ? null : moduleIndex;
};

const getModuleTitle = (i) => {
  const titles = [
    "Foundations of Criminal Law",
    "Offences Against the Person",
    "Property and Economic",
    "Public Order & State Security",
    "Inchoate & Ancillary Offences",
    "Special Offences",
    "Defences",
    "Criminal Procedure",
  ];
  return titles[i - 1] || `Module ${i}`;
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
    3: ["Theft", "Robbery", "Burglary", "Fraud Offences", "Criminal Damage"],
    4: [
      "Public Order Act",
      "Riot and Violent Disorder",
      "Affray",
      "Fear or Provocation",
      "Harassment",
    ],
    5: [
      "Attempt",
      "Conspiracy",
      "Encouraging Crime",
      "Aiding and Abetting",
      "Joint Enterprise",
    ],
    6: [
      "Sexual Offences",
      "Drug Offences",
      "Weapons Offences",
      "Cybercrime",
      "Terrorism",
    ],
    7: ["Self-Defence", "Duress", "Necessity", "Insanity", "Intoxication"],
    8: [
      "Arrest and Detention",
      "Bail",
      "Trial Process",
      "Sentencing",
      "Appeals",
    ],
  };
  return lessons[moduleIndex]?.[lessonIndex - 1] || `Lesson ${lessonIndex}`;
};

const getTimestamp = (i) => {
  const timestamps = ["0:00", "0:15", "1:30", "3:45"];
  return timestamps[i - 1] || "0:00";
};

const getTranscriptText = (i) => {
  const texts = [
    "Welcome to FE-1 Contract Law essentials. Today we're diving deep into contract formation - the absolute foundation you need to master.",
    "Let's start with the four essential elements. First, we need an offer. This isn't just any statement - it must be clear, definite, and show intention to be bound.",
    "The classic case here is Carlill v Carbolic Smoke Ball. The company made a unilateral offer to the world, and Mrs. Carlill accepted by performing the required act.",
    "Next comes acceptance. It must be unconditional and communicated. Remember - silence cannot usually constitute acceptance, though there are exceptions...",
  ];
  return texts[i - 1] || "";
};
</script>
