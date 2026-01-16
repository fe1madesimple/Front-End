<template>
  <div class="space-y-6">
    <!-- Back Button -->
    <NuxtLink to="/practice" class="back_accordion">
      <UIcon name="i-heroicons-chevron-left-20-solid" class="text-xl" />
      Back
    </NuxtLink>

    <!-- Header with Timer -->
    <div class="flex items-center justify-between">
      <p class="text-black-500">
        {{ currentQuestion.subject }} -
        <span class="font-semibold">{{ currentQuestion.topic }}</span>
      </p>
      <div
        class="px-4 py-2 rounded-xl bg-sky-blue text-black-primary font-semibold"
      >
        Time: {{ formattedTime }} / 05:00
      </div>
    </div>

    <!-- Question Card -->
    <div class="bg-white rounded-xl border border-stroke p-6 space-y-6">
      <p class="text-black-500 font-medium">
        Question {{ currentQuestionIndex + 1 }} / {{ questions.length }}
      </p>

      <p class="text-black-500 text-lg">{{ currentQuestion.question }}</p>

      <!-- Options -->
      <div class="space-y-6">
        <div
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          @click="!hasAnswered && selectOption(index)"
          class="cursor-pointer transition-all flex items-center gap-3"
          :class="getOptionClass(index)"
        >
          <div
            class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
            :class="getRadioClass(index)"
          >
            <div
              v-if="
                selectedOption === index ||
                (hasAnswered && index === currentQuestion.correctAnswer)
              "
              class="w-2.5 h-2.5 rounded-full"
              :class="getRadioDotClass(index)"
            ></div>
          </div>
          <span>{{ option }}</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center justify-between">
        <button
          v-if="!hasAnswered"
          @click="skipQuestion"
          class="text-primary font-semibold cursor-pointer hover:text-primary"
        >
          Skip Question
        </button>
        <div v-else></div>

        <button
          v-if="!hasAnswered"
          @click="submitAnswer"
          :disabled="selectedOption === null"
          :class="[
            selectedOption === null
              ? 'opacity-50 text-dark-100 font-semibold bg-grey-100 rounded-xl py-3 px-8 w-fit cursor-not-allowed'
              : 'app_filled_button w-fit! px-8!',
          ]"
        >
          Submit
        </button>
      </div>

      <!-- Feedback -->
      <div
        v-if="hasAnswered"
        class="p-4 rounded-xl"
        :class="isCorrect ? 'bg-success-600/20' : 'bg-error-500/20'"
      >
        <p
          class="font-bold"
          :class="isCorrect ? 'text-success-600' : 'text-error-500'"
        >
          {{ isCorrect ? "Correct!" : "Wrong Answer" }}
        </p>
        <p class="text-black-500 mt-1">
          {{ currentQuestion.explanation }}
        </p>
      </div>

      <!-- Next Button -->
      <div v-if="hasAnswered" class="flex justify-end">
        <button @click="nextQuestion" class="app_filled_button w-fit! px-6!">
          {{
            currentQuestionIndex < questions.length - 1
              ? "Continue To The Next Question"
              : "Finish Quiz"
          }}
          <UIcon
            v-if="currentQuestionIndex < questions.length - 1"
            name="i-heroicons-arrow-right-20-solid"
            class="text-2xl text-white"
          />
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
  title: "Quiz - FE-1 Simple",
});

const currentQuestionIndex = ref(0);
const selectedOption = ref(null);
const hasAnswered = ref(false);
const isCorrect = ref(false);
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

// Start timer on mount
onMounted(() => {
  timerInterval = setInterval(() => {
    elapsedSeconds.value++;
  }, 1000);
});

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});

const questions = ref([
  {
    subject: "Criminal Law",
    topic: "Mens Rea",
    question:
      "Which of the following best describes recklessness as defined in Irish Criminal Law?",
    options: [
      "A. Reckless — whether false words were sufficient to buy.",
      "B. Reliance — whether it does actually need or shall statement.",
      "C. Reckless — whether it is risk someone qualifies as the moral balance.",
      "D. Unconscionability — whether it would be transferred at door or refund.",
    ],
    correctAnswer: 2,
    explanation:
      "Recklessness involves conscious disregard for a known risk — see R v Cunningham (1957).",
  },
  {
    subject: "Contract Law",
    topic: "Consideration",
    question: "What is the legal definition of consideration in contract law?",
    options: [
      "A. A promise made out of love and affection.",
      "B. Something of value exchanged between parties to a contract.",
      "C. A written agreement signed by both parties.",
      "D. The intention to create legal relations.",
    ],
    correctAnswer: 1,
    explanation:
      "Consideration is 'something of value' exchanged - see Currie v Misa (1875).",
  },
  {
    subject: "Equity",
    topic: "Trusts",
    question:
      "Which of the following is NOT a requirement for a valid express trust?",
    options: [
      "A. Certainty of intention.",
      "B. Certainty of subject matter.",
      "C. Written documentation.",
      "D. Certainty of objects.",
    ],
    correctAnswer: 2,
    explanation:
      "The three certainties are intention, subject matter, and objects. Written form is not always required.",
  },
  {
    subject: "Constitutional Law",
    topic: "Separation of Powers",
    question:
      "Under the Irish Constitution, which body has the exclusive power to make laws?",
    options: [
      "A. The President.",
      "B. The Oireachtas.",
      "C. The Supreme Court.",
      "D. The Government.",
    ],
    correctAnswer: 1,
    explanation:
      "Article 15.2.1 of the Constitution vests legislative power exclusively in the Oireachtas.",
  },
  {
    subject: "EU Law",
    topic: "Direct Effect",
    question:
      "Which case established the principle of direct effect in EU law?",
    options: [
      "A. Costa v ENEL.",
      "B. Van Gend en Loos.",
      "C. Francovich v Italy.",
      "D. Factortame.",
    ],
    correctAnswer: 1,
    explanation:
      "Van Gend en Loos (1963) established that EU law can create rights directly enforceable by individuals.",
  },
]);

const currentQuestion = computed(
  () => questions.value[currentQuestionIndex.value]
);

const selectOption = (index) => {
  selectedOption.value = index;
};

const getOptionClass = (index) => {
  if (!hasAnswered.value) {
    return "text-black-500";
  }
  if (index === currentQuestion.value.correctAnswer) {
    return "text-success-600";
  }
  if (index === selectedOption.value && !isCorrect.value) {
    return "text-error-500";
  }
  return "text-black-primary";
};

const getRadioClass = (index) => {
  if (!hasAnswered.value) {
    return selectedOption.value === index
      ? "border-primary text-primary"
      : "border-primary text-black-500";
  }
  if (index === currentQuestion.value.correctAnswer) {
    return "border-success-600 text-success-600";
  }
  if (index === selectedOption.value && !isCorrect.value) {
    return "border-error-500 text-error-500 ";
  }
  return "border-primary text-black-500";
};

const getRadioDotClass = (index) => {
  if (!hasAnswered.value) {
    return "bg-primary";
  }
  if (index === currentQuestion.value.correctAnswer) {
    return "bg-success-600";
  }
  if (index === selectedOption.value && !isCorrect.value) {
    return "bg-error-500";
  }
  return "bg-primary";
};

const submitAnswer = () => {
  if (selectedOption.value === null) return;
  hasAnswered.value = true;
  isCorrect.value =
    selectedOption.value === currentQuestion.value.correctAnswer;
};

const skipQuestion = () => {
  nextQuestion();
};

const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
    selectedOption.value = null;
    hasAnswered.value = false;
    isCorrect.value = false;
  } else {
    // Quiz finished - stop timer
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    navigateTo("/practice/result");
  }
};
</script>
