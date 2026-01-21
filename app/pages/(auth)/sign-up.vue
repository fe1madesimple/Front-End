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

    <!-- Sign up form -->
    <form @submit="onSubmit" class="flex flex-col gap-6">
      <!-- Full name field -->
      <div class="flex flex-col gap-2">
        <label for="full-name" class="input_label">Full Name</label>
        <input
          id="full-name"
          v-model="fullName"
          type="text"
          placeholder=""
          class="input_field"
          :class="{ input_error: fullNameError }"
        />
        <p v-if="fullNameError" class="error_text">
          {{ fullNameError }}
        </p>
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
          :class="{ input_error: emailError }"
        />
        <p v-if="emailError" class="error_text">
          {{ emailError }}
        </p>
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
              :class="{ input_error: passwordError }"
          />
          <p v-if="passwordError" class="error_text">
            {{ passwordError }}
          </p>
          <p v-else class="input_label">Between 8 and 72 characters</p>
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="password_toggle_button"
          >
            <UIcon
              class="text-xl mt-2"
              :name="
                !showPassword ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'
              "
            />
          </button>
        </div>
      </div>

      <!-- Sign up button -->
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
        <img class="w-4" src="~/assets/icons/google.svg" alt="" />
        <span>Sign up with Google</span>
      </button>

      <!-- Apple login -->
      <button
        type="button"
        @click="handleAppleLogin"
        class="social_auth_button"
      >
        <img class="w-4" src="~/assets/icons/apple.svg" alt="" />
        <span>Sign up with Apple</span>
      </button>
    </div>

    <!-- Log in link -->
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
import { useForm, useField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { signUpSchema } from "~/schemas/auth";

definePageMeta({
  layout: "auth",
});

useHead({
  title: "Sign Up - FE-1-Simple",
});

const showPassword = ref(false);

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(signUpSchema),
});

const { value: fullName, errorMessage: fullNameError } = useField("fullName");
const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");

const onSubmit = handleSubmit((formValues) => {
  // TODO: Implement sign up logic
  console.log("Sign up with:", formValues);
  navigateTo("/personalize");
});

const handleGoogleLogin = () => {
  // TODO: Implement Google OAuth
  console.log("Google login");
};

const handleAppleLogin = () => {
  // TODO: Implement Apple OAuth
  console.log("Apple login");
};
</script>
