<template>
  <!-- Main content -->
  <AuthCard class="pt-16">
    <!-- Welcome heading -->
    <h1 class="login_heading">Welcome Back</h1>

    <!-- Login form -->
    <form @submit="onSubmit" class="flex flex-col gap-6 mt-8">
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

        <!-- Forgot password link -->
        <div class="flex justify-end">
          <NuxtLink
            to="/forgot-password"
            class="text-sm text-primary hover:opacity-80 transition-opacity"
          >
            Forgot Password?
          </NuxtLink>
        </div>
      </div>

      <!-- Login button -->
      <button type="submit" class="gradient_button mt-4">Log In</button>
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
        <span>Log in with Google</span>
      </button>

      <!-- Apple login -->
      <button
        type="button"
        @click="handleAppleLogin"
        class="social_auth_button"
      >
        <img class="w-4" src="~/assets/icons/apple.svg" alt="" />
        <span>Log in with Apple</span>
      </button>
    </div>

    <!-- Sign up link -->
    <p class="text-center text-sm text-grey-200 mt-8">
      New to Fe-1 Made simple?
      <NuxtLink
        to="/sign-up"
        class="text-primary font-semibold hover:opacity-80 transition-opacity"
      >
        Sign Up
      </NuxtLink>
    </p>
  </AuthCard>
</template>

<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { loginSchema } from "~/schemas/auth";

definePageMeta({
  layout: "auth",
});

useHead({
  title: "Login - FE-1-Simple",
});

const showPassword = ref(false);

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(loginSchema),
});

const { value: email, errorMessage: emailError } = useField("email");
const { value: password, errorMessage: passwordError } = useField("password");

const onSubmit = handleSubmit((formValues) => {
  // TODO: Implement login logic
  console.log("Login with:", formValues);
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
