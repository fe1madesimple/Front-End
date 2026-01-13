<template>
  <AuthCard>
    <div class="w-full relative h-100 mt-8 flex flex-col items-center">
      <div>
        <img src="@/assets/icons/done.svg" alt="" />
      </div>

      <div class="absolute text-center bottom-10">
        <h1 class="login_heading">Password successfully changed</h1>

        <p class="text-black-primary mt-4">
          Your password has successfully been changed, proceed to the dashboard
          to explore now
        </p>

        <!-- Reset Password button -->
        <button @click="login()" class="gradient_button mt-14">
          Procceed to Login
        </button>
      </div>
    </div>
  </AuthCard>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

useHead({
  title: "Password Reset Success - FE-1-Simple",
});

const login = () => {
  navigateTo({
    path: "/login",
  });
};
</script>
