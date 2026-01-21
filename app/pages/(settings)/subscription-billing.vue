<template>
  <div class="flex flex-col gap-8">
    <!-- Header -->
    <h1 class="text-2xl font-bold text-black-500">Your Subscription</h1>

    <div class="white_card p-6! space-y-6">
      <!-- Subscription Status Card -->
      <div class="warning_banner p-6! flex items-center justify-between">
        <div>
          <h2 class="font-bold text-black-primary text-lg mb-2">
            Premium Plan Active
          </h2>
          <p>
            Your Premium plan renews on {{ renewalDate }}. You'll continue to
            enjoy unlimited access unless cancelled.
          </p>
        </div>
        <div class="text-right">
          <p class="text-3xl font-bold text-black-primary">€9.99/month</p>
          <p class="text-black-500">per month</p>
        </div>
      </div>

      <!-- Plan Details Card -->
      <div class="border border-primary rounded-xl bg-sky-blue p-6">
        <h3 class="font-bold text-black-primary text-lg mb-4">
          Premium Plan – €9.99/month
        </h3>
        <ul class="space-y-2">
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-black"></span>
            Unlimited access to all subjects
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-black"></span>
            AI feedback and case law library
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-black"></span>
            Exam simulations and progress tracking
          </li>
          <li class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-black"></span>
            Cancel anytime
          </li>
        </ul>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-4">
        <button class="app_filled_button flex-1 py-4!">
          Manage Subscription
        </button>
        <button class="app_outline_button flex-1 py-3!">
          View Billing History
        </button>
        <button
          class="flex-1 py-3 border-2 border-error-500 text-error-500 font-semibold rounded-xl cursor-pointer hover:bg-red-50 transition-colors"
        >
          Cancel Plan
        </button>
      </div>

      <!-- Footer Text -->
      <p class="text-disabled-text">
        Payments are securely processed by Stripe. We never store card details.
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  title: "Subscription & Billing - FE-1 Simple",
});

const renewalDate = ref("December 13, 2025");
</script>
