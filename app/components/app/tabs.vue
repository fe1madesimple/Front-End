<template>
  <div>
    <!-- Tab Headers -->
    <div class="flex border-b border-gray-200">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = tab.name"
        class="p-2 font-bold cursor-pointer transition-colors"
        :class="
          activeTab === tab.name
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
});

const activeTab = ref(props.defaultTab || props.tabs[0]?.name);

const activeComponent = computed(() => {
  const tab = props.tabs.find((t) => t.name === activeTab.value);
  return tab?.component || null;
});
</script>
