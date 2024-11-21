<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/partials/NavBarComponent.vue';
import Footer from './components/partials/FooterComponent.vue';
import useTheme from './components/useTheme';
import { inject } from "@vercel/analytics"

const { toggleTheme } = useTheme();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar v-show="$route.name !== 'NotFound'" :toggleTheme="toggleTheme" />
    <div class="flex-grow lg:mt-36 mt-24">
      <RouterView />
    </div>
    <Footer v-show="$route.name !== 'NotFound'" />
  </div>
</template>

<style scoped>

</style>
