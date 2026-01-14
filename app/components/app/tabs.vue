<template>
  <div>
    <!-- Tab Headers -->
    <div class="flex gap-4 border-b border-gray-200">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="setActiveTab(tab.name)"
        class="p-2 font-bold cursor-pointer transition-colors"
        :class="
          activeTab === tab.name.toLowerCase()
            ? 'text-black-500 border-b-2 border-primary'
            : 'text-disabled-text hover:text-gray-700'
        "
      >
        {{ tab.name }}
      </button>
    </div>
    <!-- Tab Content -->
    <div class="py-8">
      <component v-if="activeComponent" :is="activeComponent" />
      <slot v-else :activeTab="activeTab" />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  defaultTab: {
    type: String,
    default: "",
  },
  queryKey: {
    type: String,
    default: "tab",
  },
});

const route = useRoute();
const router = useRouter();

// Get initial tab from URL or default
const getInitialTab = () => {
  const urlTab = route.query[props.queryKey]?.toLowerCase();
  const validTab = props.tabs.find((t) => t.name.toLowerCase() === urlTab);
  return validTab
    ? validTab.name.toLowerCase()
    : props.defaultTab?.toLowerCase() || props.tabs[0]?.name.toLowerCase();
};

const activeTab = ref(getInitialTab());

// Update URL when tab changes
const setActiveTab = (tabName) => {
  activeTab.value = tabName.toLowerCase();
  router.push({
    query: { ...route.query, [props.queryKey]: tabName.toLowerCase() },
  });
};

// Watch for URL changes (browser back/forward)
watch(
  () => route.query[props.queryKey],
  (newTab) => {
    if (newTab && props.tabs.find((t) => t.name === newTab)) {
      activeTab.value = newTab;
    }
  }
);

const activeComponent = computed(() => {
  const tab = props.tabs.find((t) => t.name.toLowerCase() === activeTab.value);
  return tab?.component || null;
});
</script>
