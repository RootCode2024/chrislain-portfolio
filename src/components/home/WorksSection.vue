<template>
  <section class="py-12 animate-fade-up animate-duration-[1500ms]">
    <div class="container mx-auto px-6 text-center">
      <!-- Titre principal -->
      <div class="w-full mb-4">
        <h1 class="text-2xl lg:text-4xl font-light text-gray-900 dark:text-white lg:text-left">
          {{ $t('home.projects.title') }}.
        </h1>
        <div class="w-24 h-1 bg-indigo-600 mt-3 lg:mt-5 lg:ml-0 mx-auto lg:mx-0"></div>
      </div>
      <hr>

      <!-- Section Projets en Vedette -->
      <div class="mb-16">
        <h2 class="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          Projets Principaux
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="(project, index) in featuredProjects"
            :key="index"
            :project="project"
          />
        </div>
      </div>

      <!-- Voir plus -->
      <div class="mt-10">
        <RouterLink
          to="/works"
          class="bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg transition-all hover:bg-indigo-700 hover:shadow-md inline-flex items-center"
        >
          {{ $t('home.projects.seeMore') }}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </RouterLink>
      </div>
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
