<template>
  <div class="relative">
    <div class="container mx-auto mb-10">
      <div class="max-w-6xl mx-auto p-4">
        <HeroeSection />
        <SkillsSection />
        <WorksSection />
      </div>
    </div>
  </div>
</template>

<script setup>
  import HeroeSection from '../components/home/HeroeSection.vue'
  import SkillsSection from '../components/home/SkillsSection.vue'
  import WorksSection from '../components/home/WorksSection.vue'

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
