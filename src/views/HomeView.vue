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
  import { useHead } from '@vueuse/head'
  import { ref, onMounted } from 'vue'

  const theme = ref('light')

  onMounted(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      theme.value = storedTheme;
    }
    document.body.classList.add(theme.value);
  });

  
  useHead({
    title: 'Code With Chris',
    meta: [
      {
        name: 'description',
        content: 'Portfolio de Chrislain AVOCEGAN, développeur web full stack spécialisé en Laravel, Vue.js, et Tailwind CSS.'
      },
      {
        name: 'keywords',
        content: 'Portfolio, Vue.js, Laravel, Tailwind CSS, Développeur Full Stack'
      },
      {
        property: 'og:title',
        content: 'Portfolio - Code With Chris'
      },
      {
        property: 'og:description',
        content: 'Découvrez les projets et les compétences de Chris, développeur web full stack.'
      },
      {
        property: 'og:image',
        content: 'https://chrislainavocegan.site/preview-image.png'
      },
      {
        property: 'og:url',
        content: 'https://chrislainavocegan.site'
      }
    ]
  });
</script>
