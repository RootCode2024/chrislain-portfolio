<template>
  <div class="container mx-auto px-6 py-12">
    <!-- Titre principal -->
    <h1 class="text-4xl font-bold text-center dark:text-white text-gray-900 mb-10">{{ project.title }}</h1>

    <!-- Conteneur principal -->
    <div class="bg-gray-800 p-6 rounded-2xl shadow-lg">
      <!-- Image du projet -->
      <img :src="project.image" :alt="project.title" class="w-full h-full object-cover rounded-lg mb-4">

      <!-- Nom du site -->
      <h2 class="text-2xl font-semibold text-white">{{ project.siteName }}</h2>
      <p class="text-gray-300 text-sm">{{ project.siteName }}</p>

      <!-- Description -->
      <p class="text-gray-400 mt-2">{{ project.description }}</p>

      <!-- Tags -->
      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" class="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {{ tag }}
        </span>
      </div>

      <!-- Technologies -->
      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="tech in project.technologies" :key="tech" class="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
          {{ tech }}
        </span>
      </div>

      <!-- Liens -->
      <div class="mt-6 flex justify-between">
        <a :href="project.website" target="_blank" class="text-green-400 hover:text-green-300 text-sm">
          🔗 Voir le site
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const projects = ref([
  {
    id: 1,
    title: "FSPII - Application de Gestion Scolaire",
    siteName: "FSPII",
    description: "En tant que développeur frontend, j'ai dirigé la conception et le développement de l'application FSPII (Système de Gestion des Informations Scolaires) en utilisant Angular. Cette application a pour objectif de centraliser et de gérer efficacement les informations scolaires, en offrant une interface conviviale et intuitive pour les administrateurs, les enseignants et les étudiants.\n\nL'application permet aux administrateurs de superviser et de gérer les données institutionnelles, aux enseignants de suivre les performances académiques des étudiants et de communiquer avec eux, et aux étudiants d'accéder à leurs résultats, emplois du temps et autres informations pertinentes. Grâce à l'utilisation d'Angular, l'application offre une expérience utilisateur fluide et réactive, avec des temps de réponse rapides et une navigation intuitive.\n\nMon rôle a impliqué la conception de l'architecture frontend, le développement de composants réutilisables, l'intégration d'API pour la gestion des données et l'assurance de la compatibilité avec divers appareils et navigateurs. J'ai également collaboré étroitement avec les équipes backend et design pour garantir l'harmonisation des fonctionnalités et de l'interface utilisateur, tout en veillant à la sécurité et à la confidentialité des données traitées.",
    image: "/assets/images/fsppi.PNG",
    tags: ["Gestion Scolaire", "Angular", "Frontend"],
    technologies: ["Angular", "TypeScript"],
    category: "Application Web",
    website: "#",
    detailsLink: "fsppi"
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
    detailsLink: "school_management"
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
    detailsLink: "amazone_tchad"
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
    detailsLink: "future_transport_expo"
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
    detailsLink: "gie_holding_group_diama"
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
    detailsLink: "mon_portfolio"
  }
]);

const projectName = route.params.projectName;
console.log(route.params);
const project = projects.value.find(p => p.detailsLink === projectName);
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
