<template>
  <section id="works" class="py-12">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-gray-800 dark:text-slate-200 mb-6">
        Mes Réalisations
      </h2>
      <p class="text-gray-600 dark:text-slate-400 mb-8">
        Voici quelques-uns des projets sur lesquels j'ai travaillé récemment.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white dark:bg-slate-700 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105"
        >
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-slate-200">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-slate-400 mt-2">{{ project.description }}</p>
            <a
              :href="project.link"
              target="_blank"
              class="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Voir le projet →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Liste des projets
const projects = ref([
  {
    title: 'GIE Holding Group Diama',
    description: 'Site web corporatif réalisé avec WordPress et Elementor pour une interface intuitive.',
    image: 'lien-vers-image-du-projet-1.jpg',
    link: 'https://lien-vers-projet1.com',
  },
  {
    title: 'Future Transport Expo',
    description: 'Site vitrine pour Rohaya Holding, mettant en avant l\'innovation dans les transports.',
    image: 'lien-vers-image-du-projet-2.jpg',
    link: 'https://lien-vers-projet2.com',
  },
  {
    title: 'Portfolio personnel',
    description: 'Portfolio interactif développé en Next.js et enrichi par des personnalisations avancées.',
    image: 'lien-vers-image-du-projet-3.jpg',
    link: 'https://lien-vers-projet3.com',
  },
  // Ajoute plus de projets ici
])
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.transition {
  transition: transform 0.3s ease;
}
</style>
