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


    <!-- AUTRES PROJETS -->
    <h2 class="text-2xl font-bold text-gray-700 dark:text-white mt-12 mb-6">Autres projets</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
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
          <a :href="project.website"
          v-if="project.website !== '#'"
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

// Données de projets
const featuredProjects = ref([
  {
    id: 1,
    title: "FSPII - Application de Gestion Scolaire",
    siteName: "FSPII",
    description: "J'ai pris en charge le développement du frontend de l'application FSPII en utilisant Angular. Cette application vise à faciliter la gestion des informations scolaires, offrant une interface conviviale pour les administrateurs, les enseignants et les étudiants.",
    image: "/assets/images/fsppi.PNG",
    tags: ["Gestion Scolaire", "Angular", "Frontend"],
    technologies: ["Angular", "TypeScript"],
    category: "Application Web",
    website: "#",
    detailsLink: "/work/fsppi"
  },
  {
    id: 2,
    title: "School Management - API de Gestion Scolaire",
    siteName: "School Management API",
    description: "Pour le projet School Management, j'ai conçu et développé une API robuste avec Laravel. Cette API gère efficacement les données scolaires, permettant une intégration fluide avec diverses interfaces frontend et garantissant une gestion sécurisée des informations sensibles.",
    image: "/assets/images/work_image.png",
    tags: ["API", "Laravel", "Backend"],
    technologies: ["Laravel", "PHP", "PostGreSql", "RESTful APIs"],
    category: "API Backend",
    website: "#",
    detailsLink: "/work/school_management"
  },
  {
    id: 3,
    title: "Amazone Tchad - Plateforme de Réservation",
    siteName: "Amazone Tchad",
    description: "Pour Amazone Tchad, j'ai développé à la fois le frontend et l'API backend en utilisant Vue.js 3 et Laravel. La plateforme facilite les réservations de vols, d'hôtels et de locations de voitures, offrant une expérience utilisateur fluide et un système de gestion efficace pour les administrateurs.",
    image: "/assets/images/amazone.png",
    tags: ["Vue.js 3", "Laravel", "Full Stack"],
    technologies: ["Vue.js 3", "Laravel", "MySQL", "API RESTful"],
    category: "Application Web",
    website: "#",
    detailsLink: "/work/amazone_tchad"
  },
  {
    id: 4,
    title: "Future Transport Expo - Site Événementiel",
    siteName: "Future Transport Expo",
    description: "J'ai conçu et développé le site événementiel Future Transport Expo avec WordPress. Le site fournit des informations détaillées sur l'événement, y compris les exposants, les conférences et les programmes, tout en permettant aux participants de s'inscrire en ligne.",
    image: "/assets/images/fte.png",
    tags: ["Événementiel", "WordPress", "Site Web"],
    technologies: ["WordPress"],
    category: "Site Événementiel",
    website: "https://futuretransportexpo.com",
    detailsLink: "/work/future_transport_expo"
  },
  {
    id: 5,
    title: "GIE Holding Group Diama - Site Institutionnel",
    siteName: "GIE Holding Group Diama",
    description: "Pour GIE Holding Group Diama, j'ai développé un site institutionnel avec WordPress. Le site présente l'entreprise, ses services et inclut des formulaires de contact pour faciliter les interactions avec les clients potentiels.",
    image: "/assets/images/giehgd.png",
    tags: ["Institutionnel", "WordPress", "Site Web"],
    technologies: ["WordPress"],
    category: "Site Institutionnel",
    website: "https://gieholdinggroupdiama.com",
    detailsLink: "/work/gie_holding_group_diama"
  },
  {
    id: 6,
    title: "Mon Portfolio - Portfolio Personnel",
    siteName: "Mon Portfolio",
    description: "J'ai créé mon portfolio personnel en utilisant Vue.js pour le frontend et Express.js pour le backend. Le site présente mes projets, mes compétences et mon parcours professionnel, offrant une interface moderne et réactive.",
    image: "/assets/images/portfolio.png",
    tags: ["Portfolio", "Vue.js 3", "Express.js"],
    technologies: ["Vue.js 3", "Express.js", "Node.js", "PostGreSql"],
    category: "Portfolio Personnel",
    website: "https://chrislainavocegan.site",
    detailsLink: "/work/mon_portfolio"
  }
]);

const technologies = ref([
  "Tous",
  ...new Set(featuredProjects.value.flatMap(p => p.technologies))
]);
const selectedTechnology = ref("Tous");

const filteredProjects = computed(() => {
  return selectedTechnology.value === "Tous"
    ? featuredProjects.value
    : featuredProjects.value.filter(project =>
        project.technologies.includes(selectedTechnology.value)
      );
});

const truncateWords = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) {
    return text;
  } else {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
};
</script>

<style scoped>
/* Ajouter vos styles ici si nécessaire */
</style>
