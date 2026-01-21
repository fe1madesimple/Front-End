<template>
  <AuthCard>
    <!-- Back link -->
    <NuxtLink
      to="/login"
      class="flex items-center gap-1 text-primary font-medium mb-10 hover:opacity-80 transition-opacity"
    >
      <UIcon name="i-heroicons-arrow-left" />
      Back
    </NuxtLink>

    <!-- Forgot Password heading -->
    <h1 class="login_heading">Forgot Password?</h1>
    <p class="text-grey-200 mb-8">
      No worries, we'll send you reset instructions.
    </p>

    <!-- Forgot Password form -->
    <form @submit="onSubmit" class="flex flex-col gap-6">
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

      <!-- Reset Password button -->
      <button type="submit" class="gradient_button mt-20">
        Reset Password
      </button>
    </form>
  </AuthCard>
</template>

<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { forgotPasswordSchema } from "~/schemas/auth";

definePageMeta({
  layout: "auth",
});

useHead({
  title: "Forgot Password - FE-1-Simple",
});

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(forgotPasswordSchema),
});

const { value: email, errorMessage: emailError } = useField("email");

const onSubmit = handleSubmit((formValues) => {
  navigateTo({
    path: "/password-reset",
    query: { email: formValues.email },
  });
});
</script>
