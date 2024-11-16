<script setup>
import HeroeSection from '../components/HeroeSection.vue'
import WorksSection from '../components/WorksSection.vue'
import SkillsSection from '../components/SkillsSection.vue'

import { ref, onMounted } from 'vue'

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
  <HeroeSection />
  <SkillsSection />
  <worksSection />
</template>
