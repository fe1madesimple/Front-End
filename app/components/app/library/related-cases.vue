<template>
  <div class="white_card p-4 space-y-4">
    <h1 class="text-black-500 font-semibold text-xl">
      You May Also Want to Review
    </h1>

    <div class="space-y-5">
      <div v-for="i in 3" :key="i" class="white_card p-4 space-y-1">
        <h1 class="text-lg font-semibold">
          Pharmaceutical Society v Boots [1953]
        </h1>
        <p class="text-disabled-text text-lg">
          Display of goods as invitation to treat
        </p>
      </div>
    </div>

    <a
      href="#"
      class="flex items-center gap-2 font-semibold text-primary font-inter"
      >View All in "Offer & Acceptance"
      <UIcon name="i-heroicons-arrow-right-20-solid" class="text-xl" />
    </a>
  </div>
</template>
