<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import CustomCursor from './components/CustomCursor.vue'

const theme = ref('light')

onMounted(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    theme.value = storedTheme;
  }
  document.body.classList.add(theme.value);
});

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(theme.value);
  localStorage.setItem('theme', theme.value);
};

</script>

<template>
  <NavBar />
  <div class="h-screen lg:mt-48 mt-24">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
