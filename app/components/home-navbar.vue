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

      <div class="space-x-10 hidden xl:inline-flex">
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

      <div class="xl:flex hidden items-center space-x-4">
        <NuxtLink to="/login" class="px-4 font-medium py-2 text-black">
          Login
        </NuxtLink>
        <NuxtLink to="/sign-up" class="blue_button_outline">
          Start free trial
        </NuxtLink>
      </div>

      <button class="xl:hidden" @click="isMenuOpen = true">
        <img src="@/assets/icons/menu.svg" alt="Open menu" />
      </button>
    </div>
  </nav>

  <!-- Mobile Menu Overlay -->
  <Transition name="slide-fade">
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-100 bg-white flex flex-col xl:hidden"
    >
      <!-- Header -->
      <div class="flex items-center justify-between py-3 px-5 border-b border-gray-100">
        <NuxtLink to="/" @click="isMenuOpen = false">
          <img class="w-16" src="~/assets/icons/logo.svg" alt="" />
        </NuxtLink>
        <button @click="isMenuOpen = false">
          <UIcon name="i-heroicons-x-mark-20-solid" class="text-4xl text-black" />
        </button>
      </div>

      <!-- Navigation Links -->
      <div class="flex-1 flex flex-col px-5 py-8 space-y-6">
        <NuxtLink
          to="/"
          @click="isMenuOpen = false"
          class="text-xl font-medium text-black hover:text-primary transition-colors"
        >
          Home
        </NuxtLink>
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.href"
          @click="isMenuOpen = false"
          class="text-xl font-medium text-black hover:text-primary transition-colors"
        >
          {{ link.name }}
        </a>
      </div>

      <!-- Auth Buttons -->
      <div class="px-5 pb-8 space-y-4">
        <NuxtLink
          to="/login"
          @click="isMenuOpen = false"
          class="block w-full py-3 text-center font-medium text-black border-2 border-stroke rounded-xl hover:bg-gray-50 transition-colors"
        >
          Login
        </NuxtLink>
        <NuxtLink
          to="/sign-up"
          @click="isMenuOpen = false"
          class="block w-full py-3 text-center font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-colors"
        >
          Start free trial
        </NuxtLink>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const isMenuOpen = ref(false);

const links = [
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

// Prevent body scroll when menu is open
watch(isMenuOpen, (open) => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
