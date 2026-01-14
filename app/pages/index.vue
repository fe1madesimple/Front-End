<template>
  <div class="flex flex-col items-center space-y-30 justify-center">
    <!-- Hero section -->
    <div
      class="w-[80%] bg-[url('/images/hero_bg.svg')] flex items-center justify-center h-85"
    >
      <div class="text-center flex flex-col items-center space-y-10 w-[60%]">
        <div>
          <h1 class="text-[56px] font-bold">Study Smarter.</h1>
          <h1 class="text-[56px] leading-none font-bold">
            Pass <span class="text-primary">Confidently</span>.
          </h1>
        </div>

        <p class="text-lg">
          The all-in-one FE-1 learning and practice platform built to simplify
          your exam prep with lessons, quizzes, past questions, and AI-powered
          feedback.
        </p>

        <div class="flex items-center gap-6">
          <button
            @click="startFree()"
            class="gradient_button font-inter font-semibold w-fit! px-6"
          >
            Start Free Trial
            <UIcon name="i-heroicons-arrow-right-20-solid" class="text-xl" />
          </button>
          <button
            class="blue_button_outline font-inter font-semibold w-fit! text-base! px-6"
          >
            Watch How It Works
            <UIcon name="i-heroicons-play-20-solid" class="text-xl" />
          </button>
        </div>
      </div>
    </div>

    <!-- Dashboard image -->
    <div class="mt-6">
      <img src="~/assets/images/dashboard_img.png" alt="" />
    </div>

    <!-- About -->
    <div class="space-y-28">
      <div class="w-full space-y-16">
        <div class="w-[45%] text-center space-y-4 mx-auto">
          <h1 class="text-4xl font-bold">
            Built for how
            <span class="text-primary font-normal">FE-1 students</span> actually
            study.
          </h1>
          <p class="text-[20px]">
            Learn, practise, and master each subject with structure, precision,
            and feedback that saves you time.
          </p>
        </div>

        <div class="flex items-center gap-6">
          <div
            class="flex border-2 w-[33%] h-62.5 rounded-xl border-stroke flex-col p-4 justify-between"
            v-for="(feature, index) in features"
            :key="index"
          >
            <div
              class="w-14 h-14 border border-primary rounded-full flex shadow-xl items-center justify-center"
            >
              <img class="w-7" :src="feature.icon" alt="" />
            </div>

            <h2 class="text-xl text-black-primary font-bold">
              {{ feature.title }}
            </h2>
            <p class="text-lg text-black-500">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Comprehensive Preparation -->
      <div class="p-1 rounded-2xl bg-linear-to-b from-primary to-[#63C0F2]">
        <div
          class="p-12 w-full bg-primary/90 rounded-xl text-white flex items-center justify-between gap-10 bg-[url('/images/f_background.svg')] bg-no-repeat bg-cover"
        >
          <div class="w-[45%] space-y-10">
            <h1 class="text-4xl font-bold">
              Comprehensive Preparation, Proven Methods
            </h1>

            <button
              @click="startFree()"
              class="flex rounded-xl py-3 px-6 w-fit bg-white items-center text-black font-semibold cursor-pointer font-inter justify-center gap-3"
            >
              Start Free Trial
              <UIcon name="i-heroicons-arrow-right-20-solid" class="text-xl" />
            </button>
          </div>

          <div class="w-[40%] space-y-8">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="text-[56px] font-bold">200+</h1>
                <p class="font-inter">Hours of Expert Content</p>
              </div>
              <div>
                <h1 class="text-[56px] font-bold">1,000+</h1>
                <p class="font-inter text-lg">Practice Questions</p>
              </div>
            </div>
            <!-- 2nd stats -->
            <div class="flex items-center justify-between">
              <div>
                <h1 class="text-[56px] font-bold">8</h1>
                <p class="font-inter text-lg">Complete FE-1 Subjects</p>
              </div>
              <div>
                <h1 class="text-[56px] font-bold">10+</h1>
                <p class="font-inter text-lg">Years of Past Papers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Steps -->
      <div
        class="p-10 rounded-xl flex items-center justify-between gap-20 bg-sky-blue"
      >
        <div class="w-[40%]">
          <h1 class="text-4xl font-bold">
            Your FE-1 Journey, Simplified in
            <span class="text-primary font-semibold">5 Steps</span>
          </h1>
        </div>

        <div class="w-[50%] space-y-4">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="border-stroke bg-white flex items-center gap-5 border-2 rounded-xl p-4"
          >
            <div
              class="w-10 h-10 rounded-full border border-blue-50 flex items-center justify-center text-xl font-bold text-primary shadow-2xl"
            >
              {{ index + 1 }}
            </div>

            <div>
              <h1 class="font-bold mb-2">{{ step.title }}</h1>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="space-y-10 overflow-hidden">
        <div class="flex items-center justify-between">
          <h1 class="text-4xl font-bold w-1/2">
            Trusted by FE-1 candidates preparing in
            <span class="text-primary font-medium">Ireland</span> and abroad.
          </h1>

          <div class="flex items-center gap-3">
            <button
              @click="scrollTestimonials('left')"
              :disabled="cannotScrollLeft"
              :class="[
                'border-2 rounded-xl w-11 h-11 flex items-center justify-center transition-all',
                cannotScrollLeft
                  ? 'border-stroke cursor-not-allowed'
                  : 'border-primary cursor-pointer',
              ]"
            >
              <UIcon
                name="i-heroicons-arrow-left-20-solid"
                :class="[
                  'text-2xl',
                  cannotScrollLeft ? 'text-black-500' : 'text-primary',
                ]"
              />
            </button>
            <button
              @click="scrollTestimonials('right')"
              :disabled="cannotScrollRight"
              :class="[
                'border-2 rounded-xl w-11 h-11 flex items-center justify-center transition-all',
                cannotScrollRight
                  ? 'border-stroke cursor-not-allowed'
                  : 'border-primary cursor-pointer',
              ]"
            >
              <UIcon
                name="i-heroicons-arrow-right-20-solid"
                :class="[
                  'text-2xl',
                  cannotScrollRight ? 'text-black-500' : 'text-primary',
                ]"
              />
            </button>
          </div>
        </div>

        <div
          ref="testimonialsContainer"
          class="w-full max-w-360 flex items-center gap-5 overflow-hidden scroll-smooth"
          style="scrollbar-width: none; -ms-overflow-style: none"
          @scroll="updateScrollState"
        >
          <div
            v-for="i in 6"
            :key="i"
            class="p-5 w-[40%] shrink-0 space-y-6 bg-sky-blue rounded-xl"
          >
            <img src="@/assets/icons/quotes.svg" alt="" />
            <p>
              “FE-1 Made Simple kept me accountable. The daily goals and
              feedback felt like having a personal tutor.”
            </p>

            <div class="flex items-center gap-2">
              <img class="w-11" src="@/assets/images/chinwe.png" alt="Avatar" />
              <div>
                <p class="font-semibold">Name,</p>
                <p class="text-black-500 text-sm">Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing -->
    <div class="px-12 w-full flex items-center justify-center gap-20">
      <div class="p-8 border-2 w-[40%] border-stroke rounded-xl">
        <h1 class="text-black-primary text-3xl font-bold">Premium Access</h1>
        <h1 class="text-primary mt-2 text-xl font-bold">€9.99/month</h1>

        <ul class="space-y-2 mt-12">
          <li
            class="text-black-500 flex items-center gap-2"
            v-for="feature in pricingFeatures"
            :key="feature"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-black-500"></div>
            {{ feature }}
          </li>
        </ul>

        <button
          @click="startFree()"
          class="app_filled_button mt-10 text-lg! font-semibold"
        >
          Start Free For 7 Days
        </button>
      </div>

      <h1 class="w-[40%] font-bold text-4xl">
        Simple. Transparent.
        <span class="text-primary font-medium">No hidden fees</span>.
      </h1>
    </div>

    <!-- FAQs -->
    <div class="w-full flex justify-between gap-20">
      <h1 class="w-[35%] font-bold text-4xl">
        Frequently Asked
        <span class="text-primary font-medium">Questions</span>
      </h1>
      <div class="w-[65%] space-y-3">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="p-3 border-b-3 border-stroke"
        >
          <div
            class="flex items-center text-black-primary justify-between cursor-pointer"
            @click="toggleFaq(index)"
          >
            <h1 class="font-bold text-xl">{{ faq.question }}</h1>

            <button class="cursor-pointer">
              <UIcon
                name="i-heroicons-chevron-down-20-solid"
                class="text-2xl transition-transform duration-300"
                :class="{ 'rotate-180': activeFaqIndex === index }"
              />
            </button>
          </div>
          <!-- Answer -->
          <p
            v-show="activeFaqIndex === index"
            class="text-black-500 text-lg mt-4"
          >
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>

    <!-- Start Today -->
    <div
      class="pl-12 w-full rounded-xl flex justify-between items-end gap-10"
      style="
        background: radial-gradient(
            ellipse 60% 50% at 50% 0%,
            rgba(255, 255, 255, 0.6) 0%,
            transparent 70%
          ),
          var(--color-warning-main);
      "
    >
      <div class="w-1/2 pt-12 pb-8 space-y-10">
        <div>
          <h1 class="text-4xl text-black-primary font-bold">
            Start today. Master your FE-1 journey.
          </h1>
          <p class="text-xl mt-3">
            Join hundreds of learners simplifying their preparation with
            structured lessons and AI-powered insights.
          </p>
        </div>

        <button
          @click="startFree()"
          class="flex rounded-xl py-3 px-6 w-fit bg-white items-center cursor-pointer text-black font-semibold font-inter justify-center gap-3"
        >
          Start Free Trial
          <UIcon name="i-heroicons-arrow-right-20-solid" class="text-xl" />
        </button>
      </div>

      <div class="w-[50%] flex items-center h-full!">
        <img
          class="h-65 -ml-20 object-cover"
          src="@/assets/images/grouped_images.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import brain from "~/assets/icons/brain.svg";
import book from "~/assets/icons/book.svg";
import earphone from "~/assets/icons/earphone.svg";
import clock from "~/assets/icons/clock.svg";

definePageMeta({
  layout: "guest",
});

// FAQ accordion state
const activeFaqIndex = ref(0); // First item open by default

const toggleFaq = (index) => {
  activeFaqIndex.value = activeFaqIndex.value === index ? null : index;
};

const testimonialsContainer = ref(null);
const scrollLeft = ref(0);
const maxScroll = ref(0);

const cannotScrollLeft = computed(() => scrollLeft.value <= 0);
const cannotScrollRight = computed(() => scrollLeft.value >= maxScroll.value);

const updateScrollState = () => {
  if (!testimonialsContainer.value) return;
  scrollLeft.value = testimonialsContainer.value.scrollLeft;
  maxScroll.value =
    testimonialsContainer.value.scrollWidth -
    testimonialsContainer.value.clientWidth;
};

onMounted(() => {
  updateScrollState();
});

const scrollTestimonials = (direction) => {
  if (!testimonialsContainer.value) return;
  const scrollAmount = 800; // card width + gap
  const newScrollLeft =
    direction === "left"
      ? testimonialsContainer.value.scrollLeft - scrollAmount
      : testimonialsContainer.value.scrollLeft + scrollAmount;
  testimonialsContainer.value.scrollTo({
    left: newScrollLeft,
    behavior: "smooth",
  });
};

const features = [
  {
    title: "Learn with ease",
    description:
      "Access bite-sized lessons and podcast explanations for every topic — no jargon, just clarity.",
    icon: earphone,
  },
  {
    title: "Practice Like the Real Exam",
    description:
      "Attempt past questions and full simulations in timed or relaxed mode",
    icon: book,
  },
  {
    title: "Get Instant AI Feedback.",
    description:
      "Receive automatic analysis comparing your answer to official exam reports and model scripts.",
    icon: clock,
  },
  {
    title: "Search Cases Fast ",
    description:
      "Find and understand Irish and EU case law in seconds, with concise facts and applications.",
    icon: brain,
  },
];

const steps = [
  {
    title: "Create your profile",
    description:
      "Choose subjects, set your exam sitting, and daily study goal.",
  },
  {
    title: "Start learning",
    description: "Watch or read topic lessons built from real exam patterns.",
  },
  {
    title: "Practice questions",
    description: "Attempt single questions or simulate a full 3-hour paper.",
  },
  {
    title: "Get feedback",
    description: "AI shows what you did well and what to improve.",
  },
  {
    title: "Track your growth",
    description:
      "Stay consistent with streaks, progress charts, and weekly insights.",
  },
];

const pricingFeatures = [
  "Unlimited subjects",
  "All past questions & quizzes",
  "Full exam simulations",
  "AI feedback & performance analytics",
  "Case law search",
  "Cancel anytime",
];

const faqs = [
  {
    question: "Can I cancel during the trial?",
    answer: "Yes. You won't be charged if you cancel before the trial ends.",
  },
  {
    question: "Is this officially affiliated with the Law Society of Ireland?",
    answer: "Yes. You won't be charged if you cancel before the trial ends.",
  },
  {
    question: "Can I use this on mobile?",
    answer: "Yes. You won't be charged if you cancel before the trial ends.",
  },
  {
    question: "Will the AI mark my answers like the real exam?",
    answer: "Yes. You won't be charged if you cancel before the trial ends.",
  },
];

const startFree = () => {
  navigateTo("/sign-up");
};
</script>
