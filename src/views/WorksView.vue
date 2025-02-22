<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold text-center dark:text-white mb-10">Mes Réalisations</h1>

    <!-- FILTRES -->
    <div class="flex justify-center gap-4 mb-8">
      <button
        v-for="technology in technologies"
        :key="technology"
        @click="selectedTechnology = technology"
        class="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
        :class="{
          'bg-blue-600 text-white': selectedTechnology === technology,
          'bg-gray-300 text-gray-700 hover:bg-gray-200': selectedTechnology !== technology
        }"
      >
        {{ technology }}
      </button>
    </div>

    <!-- LISTE DES PROJETS -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(project, index) in filteredProjects"
        :key="index"
        class="bg-gray-200 dark:bg-gray-700 p-6 rounded-2xl shadow-lg transition-transform hover:scale-105"
      >
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover rounded-lg mb-4">

        <h2 class="text-2xl font-semibold text-gray-700 dark:text-white">{{ project.title }}</h2>
        <p class="dark:text-gray-300 text-gray-700 text-sm italic">{{ project.siteName }}</p>

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
          <a :href="project.website" target="_blank"
            v-if="project.website"
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

const projects = ref([
  {
    title: "Portfolio",
    siteName: "Mon Portfolio",
    description: "Mon portfolio interactif est conçu pour mettre en valeur mes projets et compétences. Développé avec Vue.js et Supabase, il offre une interface moderne et réactive, permettant aux visiteurs de découvrir mes réalisations de manière fluide et engageante.",
    image: "/assets/images/portfolio.png",
    tags: ["Portfolio", "Web"],
    technologies: ["Vue.js", "Supabase", "Tailwind CSS"],
    website: "https://chrislainavocegan.site",
    detailsLink: "/work/1"
  },
  {
    title: "Dashboard Amazone Tchad",
    siteName: "Amazone Tchad",
    description: "Amazone Tchad Admin est une plateforme d'administration conçue pour faciliter la gestion des réservations de vols, hôtels et locations de voitures. Grâce à une interface moderne et intuitive, les administrateurs peuvent suivre et gérer efficacement les demandes des clients en temps réel.",
    image: "/assets/images/amazone.png",
    tags: ["Dashboard", "Admin"],
    technologies: ["Vue.js", "Laravel", "MySQL"],
    detailsLink: "/work/2"
  },
  {
    title: "GIE HOLDING GROUP DIAMA",
    siteName: "Site Institutionnel",
    description: "Le site GIE HOLDING GROUP DIAMA est conçu pour présenter l'entreprise et ses services. Développé avec WordPress, il inclut des formulaires de demande de devis, permettant aux clients potentiels de solliciter des informations détaillées sur les services proposés.",
    image: "/assets/images/giehgd.png",
    tags: ["Site Institutionnel", "Entreprise"],
    technologies: ["WordPress"],
    website: "https://holdinggroupdiama.com",
    detailsLink: "/work/3"
  },
  {
    title: "Future Transport Expo",
    siteName: "Future Transport Expo",
    description: "Le site Future Transport Expo est dédié à la présentation de l'événement, offrant des informations sur les exposants, les conférences et les programmes. Conçu avec WordPress, il permet également l'inscription des participants, facilitant ainsi la gestion des inscriptions en ligne.",
    image: "/assets/images/fte.png",
    tags: ["Site Événementiel", "Événement"],
    technologies: ["WordPress"],
    website: "https://futuretransportexpo.com",
    detailsLink: "/work/4"
  },
  {
    title: "Flex Interim",
    siteName: "Flex Interim",
    description: "Le site Flex Interim est dédié à la présentation de l'agence, spécialisée dans le recrutement et le placement de personnel qualifié dans divers secteurs tels que le bâtiment, l’hôtellerie, l’industrie et la médecine. Il offre une interface utilisateur intuitive pour les candidats et les employeurs.",
    image: "/assets/images/flexinterim.png",
    tags: ["Site Institutionnel", "Recrutement"],
    technologies: ["WordPress"],
    website: "https://flex-interim.com",
    detailsLink: "/work/5"
  }
]);

const truncateWords = (value, numWords) => {
  if (!value) return '';
  const words = value.split(/\s+/);
  if (words.length <= numWords) return value;
  return words.slice(0, numWords).join(' ') + '...';
};

// Extraire les technologies uniques
const technologies = ref(["Tous", ...new Set(projects.value.flatMap(p => p.technologies))]);
const selectedTechnology = ref("Tous");

// Filtrer les projets par technologie
const filteredProjects = computed(() => {
  return selectedTechnology.value === "Tous"
    ? projects.value
    : projects.value.filter(project => project.technologies.includes(selectedTechnology.value));
});
</script>

<style scoped>
/* Dégradé de fond */
body {
  background: #1e293b;
  color: white;
}

/* Animation au survol */
.hover\:scale-105 {
  transition: transform 0.3s ease-in-out;
}
</style>
