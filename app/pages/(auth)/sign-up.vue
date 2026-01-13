<template>
  <!-- Main content -->
  <AuthCard>
    <!-- Back link -->
    <NuxtLink
      to="/"
      class="flex items-center gap-1 text-primary font-medium mb-10 hover:opacity-80 transition-opacity"
    >
      <UIcon name="i-heroicons-arrow-left" />
      Back
    </NuxtLink>

    <!-- Welcome heading -->
    <h1 class="login_heading">Sign Up</h1>

    <!-- Login form -->
    <form @submit.prevent="handleLogin" class="flex flex-col gap-6">
      <!-- Full name field -->
      <div class="flex flex-col gap-2">
        <label for="full-name" class="input_label">Full Name</label>
        <input
          id="full-name"
          v-model="email"
          type="text"
          placeholder=""
          class="input_field"
        />
      </div>
      <!-- Email field -->
      <div class="flex flex-col gap-2">
        <label for="email" class="input_label">Email Address</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder=""
          class="input_field"
        />
      </div>

      <!-- Password field -->
      <div class="flex flex-col gap-2">
        <label for="password" class="text-sm font-medium text-black"
          >Password</label
        >
        <div class="relative">
          <input
            id="password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder=""
            class="password_input_field"
          />
          <p class="input_label">Between 8 and 72 characters</p>
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="password_toggle_button"
          >
            <!-- Eye icon -->
            <UIcon
              class="text-xl mt-2"
              :name="
                !showPassword ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'
              "
            />
            <!-- Eye off icon -->
          </button>
        </div>
      </div>

      <!-- Login button -->
      <button type="submit" class="gradient_button mt-4">
        Start Free Trial
      </button>
    </form>

    <!-- Social login divider and buttons -->
    <div class="flex flex-col gap-4 mt-6">
      <!-- Google login -->
      <button
        type="button"
        @click="handleGoogleLogin"
        class="social_auth_button"
      >
        <!-- Google icon -->
        <img class="w-4" src="~/assets/icons/google.svg" alt="" />
        <span>Sign up with Google</span>
      </button>

      <!-- Apple login -->
      <button
        type="button"
        @click="handleAppleLogin"
        class="social_auth_button"
      >
        <!-- Apple icon -->
        <img class="w-4" src="~/assets/icons/apple.svg" alt="" />
        <span>Sign up with Apple</span>
      </button>
    </div>

    <!-- Sign up link -->
    <p class="text-center text-sm text-grey-200 mt-8">
      Already registered?
      <NuxtLink
        to="/login"
        class="text-primary font-semibold hover:opacity-80 transition-opacity"
      >
        Log in
      </NuxtLink>
    </p>
  </AuthCard>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

useHead({
  title: "Sign Up - FE-1-Simple",
});

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const handleLogin = () => {
  // TODO: Implement login logic
  navigateTo("/personalize");
};

const handleGoogleLogin = () => {
  // TODO: Implement Google OAuth
  console.log("Google login");
};

const handleAppleLogin = () => {
  // TODO: Implement Apple OAuth
  console.log("Apple login");
};
</script>
