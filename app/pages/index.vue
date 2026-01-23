<template>
  <div class="flex flex-col items-center xl:space-y-30 space-y-20 justify-center">
    <!-- Hero section -->
    <div
      class="w-full xl:w-[80%] xl:bg-[url('/images/hero_bg.svg')] flex items-center justify-center xl:h-85"
    >
      <div class="text-center flex flex-col items-center space-y-10 xl:w-[60%]">
        <div>
          <h1 class="xl:text-[56px] text-4xl font-bold">Study Smarter.</h1>
          <h1 class="xl:text-[56px] text-4xl mt-1 xl:mt-0 leading-none font-bold">
            Pass <span class="text-primary">Confidently</span>.
          </h1>
        </div>

        <p class="text-lg">
          The all-in-one FE-1 learning and practice platform built to simplify
          your exam prep with lessons, quizzes, past questions, and AI-powered
          feedback.
        </p>

        <div class="flex flex-col xl:flex-row items-center gap-6">
          <button
            @click="startFree()"
            class="gradient_button font-inter font-semibold w-fit! px-12"
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
      <img class="xl:block hidden" src="~/assets/images/dashboard_img.png" alt="" />
      <img class="xl:hidden block" src="~/assets/images/dashboard_img_m.png" alt="" />
    </div>

    <!-- About -->
    <div class="space-y-28 w-full">
      <div class="space-y-16">
        <div class="xl:w-[45%] w-full text-center space-y-4 mx-auto">
          <h1 class="xl:text-4xl text-2xl font-bold">
            Built for how
            <span class="text-primary font-normal">FE-1 students</span> actually
            study.
          </h1>
          <p class="text-[20px]">
            Learn, practise, and master each subject with structure, precision,
            and feedback that saves you time.
          </p>
        </div>

        <div class="flex flex-col xl:flex-row items-center gap-6">
          <div
            class="flex border-2 xl:w-[33%] h-62.5 rounded-xl border-stroke flex-col p-4 justify-between"
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
          class="xl:p-12 p-4 w-full bg-primary/90 rounded-xl text-white flex items-center flex-col xl:flex-row justify-between gap-10 bg-[url('/images/f_background.svg')] bg-no-repeat bg-cover"
        >
          <div class="xl:w-[45%] w-full xl:space-y-10">
            <h1 class="xl:text-4xl text-xl font-bold">
              Comprehensive Preparation, Proven Methods
            </h1>

            <button
              @click="startFree()"
              class="xl:flex hidden rounded-xl py-3 px-6 w-fit bg-white items-center text-black font-semibold cursor-pointer font-inter justify-center gap-3"
            >
              Start Free Trial
              <UIcon name="i-heroicons-arrow-right-20-solid" class="text-xl" />
            </button>
          </div>

          <div class="xl:w-[40%] space-y-8">
            <div class="flex items-center gap-5 xl:gap-0 justify-between">
              <div>
                <h1 class="xl:text-[56px] text-2xl font-bold">200+</h1>
                <p class="font-inter text-sm xl:text-base">Hours of Expert Content</p>
              </div>
              <div>
                <h1 class="xl:text-[56px] text-2xl font-bold">1,000+</h1>
                <p class="font-inter text-sm xl:text-base">Practice Questions</p>
              </div>
            </div>
            <!-- 2nd stats -->
            <div class="flex items-center gap-5 xl:gap-0 justify-between">
              <div>
                <h1 class="xl:text-[56px] text-2xl font-bold">8</h1>
                <p class="font-inter text-sm xl:text-base">Complete FE-1 Subjects</p>
              </div>
              <div>
                <h1 class="xl:text-[56px] text-2xl font-bold">10+</h1>
                <p class="font-inter text-sm xl:text-base">Years of Past Papers</p>
              </div>
            </div>

            <button
              @click="startFree()"
              class="xl:hidden flex rounded-xl py-3 px-6 w-fit bg-white items-center text-black font-semibold cursor-pointer font-inter justify-center gap-3"
            >
              Start Free Trial
              <UIcon name="i-heroicons-arrow-right-20-solid" class="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <!-- Steps -->
      <div
        class="xl:p-10 p-4 flex flex-col xl:flex-row rounded-xl items-center justify-between xl:gap-20 gap-10 bg-sky-blue"
      >
        <div class="xl:w-[40%] w-full">
          <h1 class="xl:text-4xl text-center xl:text-left text-2xl font-bold">
            Your FE-1 Journey, Simplified in
            <span class="text-primary font-semibold">5 Steps</span>
          </h1>
        </div>

        <div class="xl:w-[50%] w-full space-y-4">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="border-stroke bg-white flex items-center gap-5 border-2 rounded-xl p-4"
          >
            <div
              class="w-10 h-10 shrink-0 rounded-full border bg-accent-200 border-blue-50 flex items-center justify-center xl:text-xl text-lg font-bold text-primary shadow-2xl"
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
      <div class="space-y-10 xl:overflow-hidden overflow-x-auto">
        <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-6 xl:gap-0">
          <h1 class="xl:text-4xl text-2xl font-bold xl:w-1/2">
            Trusted by FE-1 candidates preparing in
            <span class="text-primary font-medium">Ireland</span> and abroad.
          </h1>

          <div class="flex items-center self-end xl:self-auto gap-3">
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
          class="w-full xl:max-w-360 max-w-screen flex items-center xl:gap-5 gap-3 xl:overflow-hidden overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style="scrollbar-width: none; -ms-overflow-style: none"
          @scroll="updateScrollState"
        >
          <div
            v-for="i in 6"
            :key="i"
            class="p-5 xl:w-[40%] w-[calc(100vw-60px)] shrink-0 space-y-6 bg-sky-blue rounded-xl snap-center"
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
    <div class=" xl:px-12 flex flex-col-reverse xl:flex-row w-full items-center justify-center xl:gap-20 gap-10">
      <div class="p-8 border-2 w-full xl:w-[40%] border-stroke rounded-xl">
        <h1 class="text-black-primary xl:text-3xl text-2xl font-bold">Premium Access</h1>
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

      <h1 class="xl:w-[40%] text-center xl:text-left w-full font-bold xl:text-4xl text-2xl">
        Simple. Transparent.
        <span class="text-primary font-medium">No hidden fees</span>.
      </h1>
    </div>

    <!-- FAQs -->
    <div class="w-full flex xl:flex-row flex-col justify-between xl:gap-20 gap-10">
      <h1 class="xl:w-[35%] w-full font-bold text-center xl:text-left xl:text-4xl text-2xl">
        Frequently Asked
        <span class="text-primary font-medium">Questions</span>
      </h1>
      <div class="xl:w-[65%] w-full space-y-3">
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
      class="xl:pl-12 pl-5 relative flex xl:flex-row flex-col w-full rounded-xl justify-between items-end gap-10"
      style="
        background: radial-gradient(
            ellipse 60% 50% at 50% 0%,
            rgba(255, 255, 255, 0.6) 0%,
            transparent 70%
          ),
          var(--color-warning-main);
      "
    >
      <div class="xl:w-1/2 w-full xl:pt-12 xl:pb-8 pr-5 xl:pr-0 pt-5 pb-5 xl:space-y-10 space-y-5">
        <div>
          <h1 class="xl:text-4xl text-2xl text-black-primary font-bold">
            Start today. Master your FE-1 journey.
          </h1>
          <p class="xl:text-xl mt-3">
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

      <div class="xl:w-[50%] absolute xl:relative right-0 bottom-0 w-1/2 flex items-center xl:h-full!">
        <img
          class="xl:h-65 xl:-ml-20 object-cover"
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
  
  const scrollAmount = 800;

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
