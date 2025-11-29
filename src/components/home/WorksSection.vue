<template>
  <section class="animate-fade-up animate-delay-200">
    <!-- Header -->
    <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
            <Layers :size="24" />
          </div>
          <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
            {{ $t('home.projects.title') }}
          </h2>
        </div>
        <p class="text-slate-600 dark:text-slate-400 max-w-xl">
           Une sélection de mes travaux récents, allant des applications web complexes aux sites vitrines.
        </p>
      </div>

      <RouterLink to="/works" 
        class="hidden md:flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
        {{ $t('home.projects.seeMore') }}
        <ArrowRight :size="16" />
      </RouterLink>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        v-for="(project, index) in featuredProjects"
        :key="index"
        :project="project"
      />
    </div>

    <!-- Mobile 'See More' -->
    <div class="mt-8 md:hidden text-center">
      <RouterLink to="/works" class="btn-primary inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium">
         {{ $t('home.projects.seeMore') }}
         <ArrowRight :size="16" />
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectCard from './ProjectCard.vue';

const { t } = useI18n();

// Projets en vedette
const featuredProjects = computed(() => [
  {
    key: 'amazone-tchad',
    title: 'Amazone Tchad',
    description: 'Dashboard administrateur avec Laravel 10 et Vue.js 3.',
    image: '/assets/images/amazone.png',
    link: 'https://amazone-tchad.com/',
    tag: 'Laravel & Vue.js',
    tagColor: 'bg-red-500',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    `
  },
  {
    key: 'school-management',
    title: 'School Management API',
    description: 'API complète pour la gestion scolaire avec Laravel.',
    image: '/assets/images/work_image.png',
    link: '#',
    tag: 'API Laravel',
    tagColor: 'bg-blue-500',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    `
  },
  {
    key: 'fsppi',
    title: 'Site FSPPI',
    description: 'Développement frontend avec Angular.',
    image: '/assets/images/fsppi.PNG',
    link: 'https://fsppi.org/',
    tag: 'Angular',
    tagColor: 'bg-orange-500',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    `
  },
  {
    key: 'byl-in',
    title: 'Byl In E-commerce',
    description: 'Site e-commerce avec paiement sécurisé (Mobile Money, Carte Bancaire).',
    image: '/assets/images/byl-in.PNG',
    link: '#',
    tag: 'Laravel & Vue.js',
    tagColor: 'bg-purple-500',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    `
  },
  {
    key: 'glory-spa',
    title: 'Glory Spa',
    description: 'Site vitrine pour un institut de beauté.',
    image: '/assets/images/glory-spa.PNG',
    link: '#',
    tag: 'Vue.js',
    tagColor: 'bg-pink-500',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    `
  },
  {
    key: 'lassissi-itech',
    title: 'LASSISSI iTech',
    description: 'Site e-commerce spécialisé en vente de smartphones (iPhone/Android), consoles et échanges d\'appareils.',
    image: '/assets/images/lassissi-itech.PNG',
    link: '#',
    tag: 'Laravel & Inertia',
    tagColor: 'bg-green-500',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    `
  }
]);
</script>
