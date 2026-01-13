<template>
  <AuthCard>
    <!-- Back link -->
    <NuxtLink
      to="/login"
      class="flex items-center gap-1 text-primary font-medium mb-10 hover:opacity-80 transition-opacity"
    >
      <UIcon name="i-heroicons-arrow-left" />
      Back To Log In
    </NuxtLink>

    <!-- Forgot Password heading -->
    <h1 class="login_heading">Set new password</h1>

    <!-- Forgot Password form -->
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-6 mt-10">
      <!-- Email field -->
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

      <!-- Reset Password button -->
      <button type="submit" class="gradient_button mt-20">
        Reset Password
      </button>
    </form>
  </AuthCard>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

useHead({
  title: "New Password - FE-1-Simple",
});

const password = ref("");
const showPassword = ref(false);

const handleSubmit = () => {
  navigateTo({
    path: "/password-reset-success",
  });
};
</script>
