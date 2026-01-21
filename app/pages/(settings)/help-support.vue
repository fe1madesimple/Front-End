<template>
  <div class="flex flex-col gap-8">
    <!-- Header -->
    <div>
      <h1 class="text-2xl font-bold text-black-500">Need Help?</h1>
      <p class="text-black-500 mt-1">We're here to support your journey.</p>
    </div>

    <!-- Help Cards -->
    <div class="white_card bg-white p-6! space-y-4">
      <!-- Email -->
      <div class="border border-stroke rounded-lg p-4">
        <h3 class="font-bold text-black-primary">Email</h3>
        <a href="mailto:support@fe1madesimple.com" class="text-primary">
          support@fe1madesimple.com
        </a>
      </div>

      <!-- Help Centre -->
      <button
        class="w-full border border-stroke rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <div>
          <h3 class="font-bold text-black-primary text-left">Help centre</h3>
          <p class="text-dark-200">Visit FAQs and Tutorials</p>
        </div>
        <img src="@/assets/icons/curved_arrow_right.svg" alt="" />
      </button>

      <!-- Book a Session -->
      <div
        class="border border-stroke rounded-lg p-4 flex items-center justify-between"
      >
        <div>
          <h3 class="font-bold text-black-primary">Book a Session</h3>
          <p class="text-dark-200">
            Schedule a 15-min onboarding call with our support team.
          </p>
        </div>
        <button class="app_filled_button px-6! w-fit!">Schedule</button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Help & Support - FE-1 Simple",
});
</script>
