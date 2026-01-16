<template>
  <nav class="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-360 mx-auto px-4 sm:px-6 lg:px-14">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/dashboard" class="flex flex-col">
          <img class="w-16" src="~/assets/icons/logo.svg" alt="Logo" />
        </NuxtLink>

        <!-- Navigation Links -->
        <div class="flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="relative py-5 font-medium transition-colors"
            :class="[
              isActive(link.to)
                ? 'text-primary'
                : 'text-black-500 hover:text-primary',
            ]"
          >
            {{ link.label }}
            <span
              v-if="isActive(link.to)"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
            />
          </NuxtLink>
        </div>

        <!-- User Avatar Dropdown -->
        <UDropdownMenu
          :items="userMenuItems"
          :ui="{ content: 'min-w-40 mr-24' }"
        >
          <button
            class="flex cursor-pointer items-center gap-2 focus:outline-none"
          >
            <div
              class="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm"
            >
              {{ userInitial }}
            </div>
            <UIcon
              name="i-heroicons-chevron-down"
              class="text-grey-200 text-sm"
            />
          </button>
        </UDropdownMenu>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();

const navLinks = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Subjects", to: "/subjects" },
  { label: "Practice", to: "/practice" },
  { label: "Library", to: "/library" },
];

// TODO: Get user data from auth store
const userName = ref("Priscilia");
const userInitial = computed(() => userName.value.charAt(0).toUpperCase());

const isActive = (path: string) => {
  return route.path === path || route.path.startsWith(path + "/");
};

const userMenuItems = [
  [
    { label: "View Profile", icon: "i-heroicons-user", to: "/profile" },
    { label: "My Saved Cases", icon: "i-heroicons-user", to: "/profile" },
    {
      label: "Subscription & Billing",
      icon: "i-heroicons-user",
      to: "/subscription-billing",
    },
    {
      label: "Achievements",
      icon: "i-heroicons-cog-6-tooth",
      to: "/achievements",
    },
    {
      label: "Preferences",
      icon: "i-heroicons-cog-6-tooth",
      to: "/preferences",
    },
    {
      label: "Privacy & Security",
      icon: "i-heroicons-cog-6-tooth",
      to: "/privacy-security",
    },
    {
      label: "Help & Support",
      icon: "i-heroicons-cog-6-tooth",
      to: "/help-support",
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-heroicons-arrow-right-on-rectangle",
      onSelect: () => {
        // TODO: Implement logout
        navigateTo("/login");
        console.log("User logged out");
      },
    },
  ],
];
</script>
