<template>
  <nav
    class="fixed top-0 left-0 font-inter right-0 z-50 border w-full bg-white backdrop-blur-sm shadow border-b border-gray-100"
  >
    <div
      class="xl:w-360 w-full flex items-center justify-between py-3 xl:px-20 px-5 mx-auto"
    >
      <NuxtLink to="/">
        <img class="w-16" src="~/assets/icons/logo.svg" alt="" />
      </NuxtLink>

      <div class="space-x-10 hidden md:inline-flex">
        <NuxtLink to="/" class="text-black hover:text-gray-900 font-medium"
          >Home</NuxtLink
        >
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          class="text-black hover:text-gray-900 font-medium"
        >
          {{ link.name }}
        </a>
      </div>

      <div class="md:flex hidden items-center space-x-4">
        <NuxtLink to="/login" class="px-4 font-medium py-2 text-black">
          Login
        </NuxtLink>
        <NuxtLink to="/sign-up" class="blue_button_outline">
          Start free trial
        </NuxtLink>
      </div>

      <button class="md:hidden">
        <img src="@/assets/icons/menu.svg" alt="" />
      </button>
    </div>
  </nav>
</template>

<script setup>
const links = [
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];
</script>
