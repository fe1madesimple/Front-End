<template>
  <div class="min-h-screen flex flex-col">
    <HomeNavbar />
    <main
      class="xl:w-360 w-full xl:min-h-screen pb-20 xl:px-20 px-5 mx-auto pt-44"
    >
      <slot />
    </main>
    <HomeFooter />
  </div>
</template>

<script setup lang="ts"></script>
