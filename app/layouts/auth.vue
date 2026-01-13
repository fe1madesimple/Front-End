<template>
  <div class="min-h-screen bg-blue-100 flex flex-col">
    <AuthNavbar />
    <main
      class="xl:w-360 xl:px-20 overflow-hidden flex items-center justify-center w-full px-5 pb-10 mx-auto pt-32"
    >
      <slot />
    </main>
  </div>
</template>
