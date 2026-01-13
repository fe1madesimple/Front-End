<template>
  <div class="space-y-6">
    <!-- Back Button -->
    <NuxtLink
      to="/practice"
      class="text-primary flex items-center gap-1 font-semibold"
    >
      <UIcon name="i-heroicons-chevron-left-20-solid" class="text-xl" />
      Back
    </NuxtLink>

    <!-- Breadcrumb -->
    <p class="text-black-500 font-semibold">
      Past question /
      <span>{{ question.subject }}</span>
    </p>

    <!-- Header Row -->
    <div class="flex items-center justify-between">
      <div class="flex text-2xl items-center gap-4">
        <h1 class="font-bold text-black-500">
          {{ question.subject }}
        </h1>
        <span class="text-black-500 font-semibold">{{ question.year }}</span>
        <span class="px-3 py-1 text-primary font-semibold">
          {{ question.type }}
        </span>
      </div>

      <div class="flex w-fit items-center gap-4">
        <p class="text-disabled-text font-bold text-nowrap">
          Avg. time for this question: 15 min
        </p>
        <button
          v-if="!isTimerRunning"
          @click="startTimer"
          class="app_filled_button px-6!"
        >
          START TIMER
        </button>
        <div
          v-else
          class="px-4 py-2 rounded-xl bg-sky-blue text-black-primary font-semibold"
        >
          Time taken:
          <span class="ml-2">{{ formattedTime }} / 15:00</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div>
      <div class="flex gap-8">
        <!-- Question Section -->
        <div
          class="bg-white rounded-xl border border-stroke p-6 space-y-4"
          :class="showAnswer ? 'w-[35%]' : 'w-full'"
        >
          <p class="text-black-500 font-bold">Question 1/5</p>

          <div class="space-y-4">
            <h3 class="font-bold text-black-primary">Question:</h3>
            <p class="text-black-500 leading-relaxed">
              {{ question.scenario }}
            </p>

            <div>
              <h3 class="font-bold text-black-primary">Discuss:</h3>
              <ol
                class="list-decimal list-inside text-black-500 space-y-1 mt-2"
              >
                <li
                  v-for="(point, index) in question.discussPoints"
                  :key="index"
                >
                  {{ point }}
                </li>
              </ol>
            </div>

            <p class="font-bold text-black-primary mt-4">
              {{ question.instruction }}
            </p>
          </div>
        </div>

        <!-- Answer Section -->
        <div v-if="showAnswer" class="w-[65%] h-auto">
          <textarea
            v-model="userAnswer"
            placeholder="Type your answer here... Consider using the IRAC method (Issue, Rule, Application, Conclusion) to structure your response."
            class="flex-1 w-full h-full p-4 border border-stroke rounded-xl resize-none focus:outline-none focus:border-primary text-black-500"
            rows="20"
          ></textarea>
        </div>
      </div>

      <div class="flex justify-end mt-4">
        <button
          @click="!showAnswer ? showAnswerSection() : submitAnswer()"
          class="app_filled_button w-fit! px-8!"
        >
          {{ !showAnswer ? "Answer" : "Submit Answer" }}
        </button>
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
  title: "Practice Question - FE-1 Simple",
});

const showAnswer = ref(false);
const userAnswer = ref("");
const isTimerRunning = ref(false);
const elapsedSeconds = ref(0);
let timerInterval = null;

const formattedTime = computed(() => {
  const minutes = Math.floor(elapsedSeconds.value / 60);
  const seconds = elapsedSeconds.value % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
});

const startTimer = () => {
  isTimerRunning.value = true;
  timerInterval = setInterval(() => {
    elapsedSeconds.value++;
  }, 1000);
};

const showAnswerSection = () => {
  showAnswer.value = true;
  if (!isTimerRunning.value) {
    startTimer();
  }
};

const submitAnswer = () => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  // Navigate to results or show feedback
  navigateTo("/practice");
};

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});

// Mock question data
const question = ref({
  id: route.params.id,
  subject: "Contract Law",
  year: "2023",
  type: "Essay",
  scenario: `Sarah owns a small bakery and regularly orders flour from Tom's Wholesale Supplies. On Monday, Sarah calls Tom and says, "I need 50 bags of flour by Friday for a large wedding order. Can you deliver?" Tom replies, "I can deliver 50 bags by Friday for €500." Sarah responds, "That seems high, but I'm desperate. I'll think about it and let you know by Wednesday."

On Tuesday, Tom calls Sarah and says, "I've reconsidered. Given your loyalty as a customer, I can do the 50 bags for €450." Sarah immediately accepts.

On Wednesday morning, before Tom can arrange delivery, his warehouse burns down, destroying all his flour stock. Tom calls Sarah to explain he cannot fulfill the order due to the fire.`,
  discussPoints: [
    "Whether a valid contract was formed between Sarah and Tom",
    "The legal implications of Tom's warehouse fire",
    "What remedies, if any, Sarah might have against Tom",
  ],
  instruction:
    "In your answer, consider relevant case law and statutory provisions relating to contract formation, consideration, and frustration of contract.",
});
</script>
