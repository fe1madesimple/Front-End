<template>
  <footer class="border-3 mb-2 w-full border-stroke">
    <div class="xl:w-360 w-full flex xl:flex-row flex-col xl:items-center items-start  gap-8 xl:justify-between mx-auto py-8 xl:px-20 px-5">
      <div>
        <div class="w-fit">
          <img class="w-20" src="~/assets/icons/logo.svg" alt="" />
        </div>
        <p class="text-sm text-grey-200 mt-2">FE-1 Made Simple © 2025</p>
      </div>

      <div>
        <div class="flex items-center space-x-6">
          <div v-for="social in socials" :key="social.link">
            <img class="w-8" :src="social.icon" :alt="social.link" />
          </div>
        </div>

        <div class="xl:mt-3 mt-5">
          <ul class="text-grey-200 inline-flex space-x-2">
            <li>
              <a href="#" class="hover:text-black">Terms</a>
            </li>
            <span>•</span>
            <li>
              <a href="#" class="hover:text-black">Privacy</a>
            </li>
            <span>•</span>
            <li>
              <a href="#" class="hover:text-black">Contact</a>
            </li>
            <span>•</span>
            <li>
              <a href="#" class="hover:text-black">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import youtube from "~/assets/icons/youtube.svg";
import facebook from "~/assets/icons/facebook.svg";
import instagram from "~/assets/icons/instagram.svg";

const socials = [
  {
    icon: youtube,
    link: "https://www.youtube.com/",
  },
  {
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    icon: instagram,
    link: "https://www.instagram.com/",
  },
];
</script>
