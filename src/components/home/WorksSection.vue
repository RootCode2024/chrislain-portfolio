<template>
  <section class="py-12 animate-fade-up animate-duration-[1500ms]">
    <div class="container mx-auto px-6 text-center">

      <!-- Titre principal -->
      <div class="w-full mb-12">
        <h1 class="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white lg:text-left">
          {{ $t('home.projects.title') }}.
        </h1>
        <div class="w-24 h-1 bg-indigo-600 mt-3 lg:mt-5 lg:ml-0 mx-auto lg:mx-0"></div>
      </div>

      <!-- Section Projets en Vedette -->
      <div class="mb-16">
        <h2 class="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          🚀 Projets en Vedette
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="(project, index) in featuredProjects"
            :key="index"
            :project="project"
          />
        </div>
      </div>

      <!-- Section Autres Projets -->
      <h2 class="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-6">
        📂 Autres Projets
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(project, index) in otherProjects"
          :key="index"
          :project="project"
        />
      </div>

      <!-- Voir plus -->
      <div class="mt-10">
        <RouterLink
          to="/works"
          class="bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg transition-all hover:bg-indigo-700 hover:shadow-md"
        >
          {{ $t('home.projects.seeMore') }}
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import ProjectCard from './ProjectCard.vue'; // Composant pour chaque carte projet

const { t } = useI18n();

// Projets en vedette (Laravel + Vue.js et Angular)
const featuredProjects = computed(() => [
  {
    key: 'amazone-tchad',
    title: 'Amazone Tchad',
    description: 'Développement du dashboard administrateur avec Laravel 10 et Vue.js 3.',
    image: '/assets/images/amazone.png',
    link: '#',
    tag: 'Laravel & Vue.js',
    tagColor: 'bg-red-500',
  },
  {
    key: 'school-management',
    title: 'School Management',
    description: 'Application de gestion scolaire.',
    image: '/assets/images/work_image.png',
    link: '#',
    tag: 'Api Laravel',
    tagColor: 'bg-blue-500',
  },
  {
    key: 'angular-project',
    title: 'Site FSPPI',
    description: 'Intervention sur le frontend d’un projet Angular.',
    image: '/assets/images/fsppi.PNG',
    link: '#',
    tag: 'Angular',
    tagColor: 'bg-orange-500',
  }
]);

// Autres projets
const otherProjects = computed(() => [
  {
    key: 'api-laravel',
    title: 'Projet Privé',
    description: 'Développement d’une API Laravel pour le backend.',
    image: '/assets/images/work_image.png',
    link: '#',
    tag: 'API Laravel',
    tagColor: 'bg-gray-700',
  },
  {
    key: 'future-transport',
    title: 'Future Transport Expo',
    description: 'Développement et SEO pour un site événementiel.',
    image: '/assets/images/fte.png',
    link: 'https://www.futuretransportexpo.com',
    tag: 'SEO & Dev',
    tagColor: 'bg-indigo-500',
  },
  {
    key: 'portfolio',
    title: 'Portfolio',
    description: 'Mon portfolio personnel avec Vue.js et Tailwind CSS.',
    image: '/assets/images/portfolio.png',
    link: 'https://www.chrislainavocegan.site',
    tag: 'Vue.js',
    tagColor: 'bg-green-500',
  }
]);
</script>
