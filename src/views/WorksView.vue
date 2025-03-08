<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold text-center dark:text-white mb-10">Mes Réalisations</h1>

    <!-- FILTRES -->
    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <button
        v-for="technology in technologies"
        :key="technology"
        @click="selectedTechnology = technology"
        class="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
        :class="{
          'bg-blue-600 text-white shadow-md': selectedTechnology === technology,
          'bg-gray-300 text-gray-700 hover:bg-gray-200': selectedTechnology !== technology
        }"
      >
        {{ technology }}
      </button>
    </div>

    <!-- PROJETS EN VEDETTE -->
    <h2 class="text-2xl font-bold text-gray-700 dark:text-white mb-6">Projets en vedette</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in featuredProjects"
        :key="project.key"
        class="relative bg-gray-800 dark:bg-gray-700 p-6 rounded-2xl shadow-lg transition-transform hover:scale-105"
      >
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover rounded-lg mb-4">
        <span :class="['text-white text-xs px-3 py-1 rounded-full absolute top-3 left-3', project.tagColor]">
          {{ project.tag }}
        </span>

        <h2 class="text-xl font-semibold text-white">{{ project.title }}</h2>
        <p class="text-gray-300 mt-2">{{ project.description }}</p>

        <div class="mt-4">
          <a :href="project.link"
          v-if="project.link != '#'"
          target="_blank"
            class="text-blue-400 hover:text-blue-300 text-sm">
            🔗 Voir le projet
          </a>
        </div>
      </div>
    </div>

    <!-- AUTRES PROJETS -->
    <h2 class="text-2xl font-bold text-gray-700 dark:text-white mt-12 mb-6">Autres projets</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(project, index) in filteredProjects"
        :key="index"
        class="relative bg-gray-200 dark:bg-gray-700 p-6 rounded-2xl shadow-lg transition-transform hover:scale-105"
      >
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover rounded-lg mb-4">

        <h2 class="text-xl font-semibold text-gray-700 dark:text-white">{{ project.title }}</h2>
        <p class="text-gray-500 dark:text-gray-300 text-sm italic">{{ project.siteName }}</p>

        <p class="text-gray-800 dark:text-gray-400 mt-2">{{ truncateWords(project.description, 30) }}</p>

        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="tag in project.tags" :key="tag"
            class="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            {{ tag }}
          </span>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="tech in project.technologies" :key="tech"
            class="bg-gray-700 dark:bg-gray-500 text-gray-300 text-xs px-3 py-1 rounded-full">
            {{ tech }}
          </span>
        </div>

        <div class="mt-6 flex justify-between">
          <a :href="project.link"
          v-if="project.link != '#'"
          target="_blank"
            class="text-green-400 hover:text-green-300 text-sm">
            🔗 Voir le site
          </a>
          <RouterLink :to="project.detailsLink"
            class="text-gray-400 hover:text-gray-300 text-sm">
            🔍 Détails
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

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
    link: 'https://fsppi.org',
    tag: 'Angular',
    tagColor: 'bg-orange-500',
  }
]);

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

const projects = ref([...otherProjects.value]); // Fusionne tous les projets

const truncateWords = (value, numWords) => {
  if (!value) return '';
  const words = value.split(/\s+/);
  if (words.length <= numWords) return value;
  return words.slice(0, numWords).join(' ') + '...';
};

const technologies = ref(["Tous", ...new Set(projects.value.flatMap(p => p.tag))]);
const selectedTechnology = ref("Tous");

const filteredProjects = computed(() => {
  return selectedTechnology.value === "Tous"
    ? projects.value
    : projects.value.filter(project => project.tag === selectedTechnology.value);
});
</script>

<style scoped>
body {
  background: #1e293b;
  color: white;
}

.hover\:scale-105 {
  transition: transform 0.3s ease-in-out;
}
</style>
