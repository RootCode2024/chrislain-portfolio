<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Footer from './components/FooterComponent.vue';
import useTheme from './components/useTheme';

const { toggleTheme } = useTheme();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar :toggleTheme="toggleTheme" />
    <div class="flex-grow lg:mt-36 mt-24">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
/* Structure de mise en page */
.min-h-screen {
  min-height: 100vh;
}

.flex-grow {
  flex-grow: 1;
}

footer {
  margin-top: auto;
}
</style>
