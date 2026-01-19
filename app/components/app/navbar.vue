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
          :ui="{ content: 'min-w-52 mr-24' }"
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

          <template #item-leading="{ item }">
            <UIcon
              v-if="item.icon"
              :name="item.icon"
              :class="item.color === 'error' ? 'text-error-500' : ''"
            />
          </template>

          <template #item="{ item }">
            <template v-if="item.type === 'header'">
              <div
                class="py-2 text-base font-inter w-full flex flex-col items-start"
              >
                <p class="font-semibold text-black-primary">{{ userName }}</p>
                <p class="text-disabled-text text-sm">{{ userEmail }}</p>
                <p
                  class="inline-flex w-full items-center text-sm gap-1 mt-2 px-3 py-2 bg-[#EBBB4A42] text-black-primary font-medium rounded-full"
                >
                  👑 Premium Member
                </p>
              </div>
            </template>
            <template v-else>
              <p
                class="text-base flex items-center gap-2"
                :class="item.color === 'error' ? 'text-error-500' : ''"
              >
                <UIcon :name="item.icon" class="text-xl" />
                {{ item.label }}
              </p>
            </template>
          </template>
        </UDropdownMenu>
      </div>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute();

const navLinks = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Subjects", to: "/subjects" },
  { label: "Practice", to: "/practice" },
  { label: "Library", to: "/library" },
];

// TODO: Get user data from auth store
const userName = ref("Priscilia");
const userEmail = ref("priscilia@email.com");
const userInitial = computed(() => userName.value.charAt(0).toUpperCase());

const isActive = (path) => {
  return route.path === path || route.path.startsWith(path + "/");
};

const userMenuItems = [
  [
    {
      type: "header",
      label: "",
      disabled: true,
    },
  ],
  [
    {
      label: "View Profile",
      icon: "i-heroicons-user",
      to: "/profile",
    },
    {
      label: "My Saved Cases",
      icon: "i-heroicons-star",
      to: "/saved-cases",
    },
    {
      label: "Subscription & Billing",
      icon: "i-heroicons-credit-card",
      to: "/subscription-billing",
    },
    {
      label: "Achievement",
      icon: "i-heroicons-trophy",
      to: "/achievement",
    },
    {
      label: "Preferences",
      icon: "i-heroicons-bell",
      to: "/preferences",
    },
    {
      label: "Privacy & Security",
      icon: "i-heroicons-shield-check",
      to: "/privacy-security",
    },
    {
      label: "Help & Support",
      icon: "i-heroicons-question-mark-circle",
      to: "/help-support",
    },
  ],
  [
    {
      label: "Log Out",
      icon: "i-heroicons-arrow-right-start-on-rectangle",
      color: "error",
      onSelect: () => {
        // TODO: Implement logout
        navigateTo("/login");
      },
    },
  ],
];
</script>
