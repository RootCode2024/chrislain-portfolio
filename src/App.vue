<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'

const theme = ref('light')

onMounted(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    theme.value = storedTheme;
  }
  document.body.classList.add(theme.value);
});



</script>

<template>
  <NavBar />
  <div class="h-screen lg:mt-48 mt-24">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
