<template>
  <div class="container mx-auto px-6 py-12">
    <!-- Titre principal -->
    <h1 class="text-4xl font-bold text-center text-white mb-10">{{ project.title }}</h1>

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
        <a :href="project.detailsLink" target="_blank" class="text-gray-400 hover:text-gray-300 text-sm">
          🔍 Détails
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
    title: "Portfolio",
    siteName: "Mon Portfolio",
    description: "Mon portfolio interactif est conçu pour mettre en valeur mes projets et compétences. Développé avec Vue.js et Supabase, il offre une interface moderne et réactive, permettant aux visiteurs de découvrir mes réalisations de manière fluide et engageante.",
    image: "/assets/images/portfolio.png",
    tags: ["Portfolio", "Web"],
    technologies: ["Vue.js", "Supabase", "Tailwind CSS"],
    category: "Web",
    website: "https://chrislainavocegan.site",
    detailsLink: "/projets/portfolio"
  },
  {
    id: 2,
    title: "Dashboard Amazone Tchad",
    siteName: "Amazone Tchad",
    description: "Amazone Tchad Admin est une plateforme d'administration conçue pour faciliter la gestion des réservations de vols, hôtels et locations de voitures. Grâce à une interface moderne et intuitive, les administrateurs peuvent suivre et gérer efficacement les demandes des clients en temps réel.",
    image: "/assets/images/amazone.png",
    tags: ["Dashboard", "Admin"],
    technologies: ["Vue.js", "Laravel", "MySQL"],
    category: "Dashboard",
    website: "#",
    detailsLink: "/works/1"
  },
  {
    id: 3,
    title: "GIE HOLDING GROUP DIAMA",
    siteName: "Site Institutionnel",
    description: "Le site GIE HOLDING GROUP DIAMA est conçu pour présenter l'entreprise et ses services. Développé avec WordPress, il inclut des formulaires de demande de devis, permettant aux clients potentiels de solliciter des informations détaillées sur les services proposés.",
    image: "/assets/images/giehgd.png",
    tags: ["Site Institutionnel", "Entreprise"],
    technologies: ["WordPress"],
    category: "Site Institutionnel",
    website: "https://holdinggroupdiama.com",
    detailsLink: "/projets/holdinggroupdiama"
  },
  {
    id: 4,
    title: "Future Transport Expo",
    siteName: "Future Transport Expo",
    description: "Le site Future Transport Expo est dédié à la présentation de l'événement, offrant des informations sur les exposants, les conférences et les programmes. Conçu avec WordPress, il permet également l'inscription des participants, facilitant ainsi la gestion des inscriptions en ligne.",
    image: "/assets/images/fte.png",
    tags: ["Site Événementiel", "Événement"],
    technologies: ["WordPress"],
    category: "Site Événementiel",
    website: "https://futuretransportexpo.com",
    detailsLink: "/projets/future_transport_expo"
  },
  {
    id: 5,
    title: "Flex Interim",
    siteName: "Flex Interim",
    description: "Le site Flex Interim est dédié à la présentation de l'agence, spécialisée dans le recrutement et le placement de personnel qualifié dans divers secteurs tels que le bâtiment, l’hôtellerie, l’industrie et la médecine. Il offre une interface utilisateur intuitive pour les candidats et les employeurs.",
    image: "/assets/images/flexinterim.png",
    tags: ["Site Institutionnel", "Recrutement"],
    technologies: ["WordPress"],
    category: "Site Institutionnel",
    website: "https://flex-interim.com",
    detailsLink: "/projets/flex_interim"
  }
]);

const projectId = parseInt(route.params.id);
const project = projects.value.find(p => p.id === projectId);
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
