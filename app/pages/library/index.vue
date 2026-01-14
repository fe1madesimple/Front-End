<template>
  <div class="space-y-10">
    <div>
      <h1 class="text-2xl font-bold text-black-primary">
        Your Complete FE-1 Case Law Library
      </h1>
      <p class="text-black-500 mt-1">
        Search, study, and save the most important Irish and EU cases — each
        summarized with facts, principles, and examiner insights.
      </p>
    </div>

    <div class="space-y-10">
      <div>
        <div class="space-y-5">
          <input
            type="text"
            placeholder="Search by topic, Case name, or citation (e.g. ‘Carlill’, ‘Mens Rea’ , ‘Separation of powers’"
            class="input_field"
          />

          <div class="grid grid-cols-3 gap-5">
            <div class="flex flex-col gap-2">
              <label class="input_label font-semibold!">SUBJECT</label>
              <USelectMenu
                value-key="value"
                label-key="label"
                placeholder="All Subjects"
                class="w-full"
                :ui="{
                  base: 'select_field cursor-pointer',
                  trailing: 'text-grey-200',
                }"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="input_label font-semibold">JURISDICTION</label>
              <USelectMenu
                value-key="value"
                label-key="label"
                class="w-full"
                placeholder="All jurisdiction"
                :ui="{
                  base: 'select_field cursor-pointer',
                  trailing: 'text-grey-200',
                }"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="input_label font-semibold">FREQUENCIES</label>
              <USelectMenu
                value-key="value"
                label-key="label"
                placeholder="All frequencies"
                class="w-full"
                :ui="{
                  base: 'select_field cursor-pointer',
                  trailing: 'text-grey-200',
                }"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-black-500">Available Cases</h1>

          <p class="font-medium text-primary">Showing 5 cases</p>
        </div>

        <div class="grid grid-cols-3 gap-5 mt-6">
          <div
            v-for="(question, index) in 5"
            :key="index"
            class="p-4 rounded-xl border border-stroke bg-white space-y-3"
          >
            <!-- Top row: Year and Type -->
            <div class="flex items-center justify-between">
              <span class="text-primary font-inter font-semibold"
                >High Frequency</span
              >
              <UIcon name="i-heroicons-star" class="text-2xl" />
            </div>

            <div class="space-y-3">
              <h1 class="text-black-500">Carlill v Carbolic Smoke Ball Co</h1>
              <p class="text-black-primary">[1932] AC 562</p>
              <p class="text-primary">
                Contract Law . Offer & Acceptance . UK (Persuasive)
              </p>

              <p class="text-disabled-text">
                Established that a unilateral offer can be accepted by
                performance, creating a binding contract.
              </p>
            </div>

            <!-- Button -->
            <NuxtLink :to="`/library/${3}`">
              <button class="app_outline_button w-full! mt-2">
                View Full Summary
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "app",
});

useHead({
  name: "Library - FE-1 Simple",
});
</script>
