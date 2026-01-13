<template>
  <!-- Main content -->
  <AuthCard>
    <!-- Back link -->
    <NuxtLink
      to="/forgot-password"
      class="flex items-center gap-1 text-primary font-medium mb-10 hover:opacity-80 transition-opacity"
    >
      <UIcon name="i-heroicons-arrow-left" />
      Back
    </NuxtLink>

    <!-- Password Reset heading -->
    <h1 class="login_heading">Password Reset</h1>
    <p class="text-grey-200 mb-10">
      We sent a code to
      <span class="font-semibold text-black">{{ email }}</span>
    </p>

    <!-- OTP form -->
    <form @submit.prevent="handleVerify" class="flex flex-col gap-8">
      <!-- OTP input boxes -->
      <div class="flex gap-3 justify-start">
        <input
          v-for="(digit, index) in otpDigits"
          :key="index"
          ref="otpInputs"
          v-model="otpDigits[index]"
          type="text"
          maxlength="1"
          inputmode="numeric"
          pattern="[0-9]*"
          class="w-12 h-12 text-center text-lg font-semibold border-2 border-stroke rounded-xl focus:outline-none focus:bg-accent-200 focus:border-primary focus:border-2 transition-colors"
          @input="handleOtpInput(index, $event)"
          @keydown="handleOtpKeydown(index, $event)"
          @paste="handlePaste"
        />
      </div>

      <!-- Continue button -->
      <button type="submit" class="gradient_button">Reset Password</button>
    </form>

    <!-- Resend link -->
    <p class="text-center text-sm text-grey-200 mt-8">
      Didn't receive the email?
      <button
        type="button"
        @click="handleResend"
        class="text-primary font-semibold hover:opacity-80 transition-opacity"
      >
        Click to resend
      </button>
    </p>
  </AuthCard>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

useHead({
  title: "Password Reset - FE-1-Simple",
});

// Get email from route query or use placeholder
const route = useRoute();
const email = computed(
  () => (route.query.email as string) || "user@example.com"
);

const otpDigits = ref(["", "", "", ""]);
const otpInputs = ref<HTMLInputElement[]>([]);

const handleOtpInput = (index: number, event: Event) => {
  const input = event.target as HTMLInputElement;
  const value = input.value;

  // Only allow numbers
  if (!/^\d*$/.test(value)) {
    otpDigits.value[index] = "";
    return;
  }

  // Move to next input if value entered
  if (value && index < 3) {
    nextTick(() => {
      otpInputs.value[index + 1]?.focus();
    });
  }
};

const handleOtpKeydown = (index: number, event: KeyboardEvent) => {
  // Move to previous input on backspace if current is empty
  if (event.key === "Backspace" && !otpDigits.value[index] && index > 0) {
    otpInputs.value[index - 1]?.focus();
  }
};

const handlePaste = (event: ClipboardEvent) => {
  event.preventDefault();
  const pastedData = event.clipboardData?.getData("text") || "";
  const digits = pastedData.replace(/\D/g, "").slice(0, 4).split("");

  digits.forEach((digit, index) => {
    if (index < 4) {
      otpDigits.value[index] = digit;
    }
  });

  // Focus the last filled input or the next empty one
  const nextEmptyIndex = otpDigits.value.findIndex((d) => !d);
  const focusIndex = nextEmptyIndex === -1 ? 3 : Math.min(nextEmptyIndex, 3);
  nextTick(() => {
    otpInputs.value[focusIndex]?.focus();
  });
};

const handleVerify = () => {
  navigateTo({
    path: "/new-password",
  });
};

const handleResend = () => {
  // TODO: Implement resend logic
  console.log("Resending code to:", email.value);
};
</script>
