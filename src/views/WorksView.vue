<template>
  <section class="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-indigo-950 min-h-screen transition-colors duration-500">
    <div class="max-w-7xl mx-auto">
      <!-- Titre et introduction -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 font-sans tracking-tight">Mes Projets</h1>
        <div class="flex justify-center mb-4">
          <span class="inline-block w-24 h-1 rounded bg-indigo-500"></span>
        </div>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
          Découvrez l'ensemble de mes réalisations à travers différents domaines et technologies.
        </p>
      </div>

      <!-- Filtres -->
      <div class="mb-12 bg-white/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 sticky top-4 z-10 backdrop-blur-md transition-all duration-300">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <!-- Filtre par catégorie -->
          <div class="w-full sm:w-auto">
            <label for="category-filter" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Catégorie</label>
            <select
              id="category-filter"
              v-model="selectedCategory"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 bg-white dark:bg-gray-700 transition"
            >
              <option value="all">Toutes les catégories</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>

          <!-- Filtre par technologie -->
          <div class="w-full sm:w-auto">
            <label for="tech-filter" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Technologie</label>
            <select
              id="tech-filter"
              v-model="selectedTechnology"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 bg-white dark:bg-gray-700 transition"
            >
              <option value="all">Toutes les technologies</option>
              <option v-for="tech in technologies" :key="tech" :value="tech">
                {{ tech }}
              </option>
            </select>
          </div>

          <!-- Barre de recherche -->
          <div class="w-full sm:w-auto flex-grow">
            <label for="search" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Recherche</label>
            <div class="relative">
              <input
                id="search"
                v-model="searchQuery"
                type="text"
                placeholder="Rechercher un projet..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 bg-white dark:bg-gray-700 transition"
              >
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Bouton reset -->
          <button
            @click="resetFilters"
            class="mt-6 sm:mt-0 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 border border-gray-200 dark:border-gray-600 shadow transition"
          >
            Réinitialiser
          </button>
        </div>
      </div>

      <!-- Liste des projets -->
      <transition-group name="fade" tag="div" v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          @viewDetails="viewProjectDetails"
          class="transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl rounded-2xl"
        />
      </transition-group>

      <!-- Aucun résultat -->
      <div v-else class="text-center py-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="mt-4 text-lg font-medium text-gray-900 dark:text-white">Aucun projet trouvé</h3>
        <p class="mt-2 text-gray-500 dark:text-gray-400">
          Essayez d'ajuster vos critères de recherche ou de filtrage.
        </p>
        <button
          @click="resetFilters"
          class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Réinitialiser les filtres
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import ProjectCard from '../components/home/ProjectCard.vue';

const router = useRouter();

const allProjects = ref([
  {
    id: 1,
    slug: "amazone_tchad",
    title: "Amazone Tchad - Dashboard Admin",
    siteName: "Amazone Tchad",
    description: "Développement du dashboard administrateur avec Laravel 10 et Vue.js 3, incluant la gestion des utilisateurs, statistiques et reporting.",
    image: "/assets/images/amazone.png",
    tag: "Laravel & Vue.js",
    tags: ["Dashboard", "Backoffice", "Administration"],
    technologies: ["Laravel", "Vue.js", "Tailwind CSS"],
    category: "Application Web",
    link: "#",
    detailsLink: "/work/amazone_tchad",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>`
  },
  {
    id: 2,
    slug: "school_management",
    title: "API School Management",
    siteName: "School Management API",
    description: "API complète pour la gestion scolaire avec Laravel, incluant la gestion des élèves, professeurs, emplois du temps et notes.",
    image: "https://placehold.co/600x400?text=School+Managment+API",
    tag: "API Laravel",
    tags: ["Education", "Backend", "REST API"],
    technologies: ["Laravel", "MySQL", "JWT"],
    category: "API",
    link: "#",
    detailsLink: "/work/school_management",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>`
  },
  {
    id: 3,
    slug: "fsppi",
    title: "Site FSPPI",
    siteName: "FSPPI",
    description: "Refonte du frontend avec Angular pour la Fédération des Sociétés Philatéliques de la Côte d'Ivoire.",
    image: "/assets/images/fsppi.PNG",
    tag: "Angular",
    tags: ["Association", "Frontend"],
    technologies: ["Angular", "TypeScript", "SCSS"],
    category: "Site Web",
    link: "#",
    detailsLink: "/work/fsppi",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>`
  },
  {
    id: 4,
    slug: "future_transport_expo",
    title: "Future Transport Expo",
    siteName: "Future Transport Expo",
    description: "Site événementiel WordPress pour un salon international des transports du futur, avec billetterie en ligne et gestion des exposants.",
    image: "/assets/images/fte.png",
    tag: "WordPress",
    tags: ["Événementiel", "Billetterie"],
    technologies: ["WordPress", "WooCommerce", "Elementor"],
    category: "Site Événementiel",
    link: "https://futuretransportexpo.com",
    detailsLink: "/work/future_transport_expo",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>`
  },
  {
    id: 5,
    slug: "gie_holding_group",
    title: "GIE Holding Group Diama",
    siteName: "GIE Holding Group",
    description: "Site institutionnel WordPress présentant les activités du groupe et ses différentes filiales.",
    image: "/assets/images/giehgd.png",
    tag: "WordPress",
    tags: ["Corporate", "Vitrine"],
    technologies: ["WordPress", "ACF", "Divi"],
    category: "Site Institutionnel",
    link: "https://gieholdinggroupdiama.com",
    detailsLink: "/work/gie_holding_group",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>`
  },
  {
    id: 6,
    slug: "fiesta_restaurant",
    title: "Restaurant Fiesta - Dakar",
    siteName: "Fiesta Restaurant",
    description: "Site vitrine WordPress pour un restaurant gastronomique à Dakar avec galerie photos et réservation en ligne.",
    image: "https://placehold.co/600x400?text=Restaurant+Fiesta",
    tag: "WordPress",
    tags: ["Restaurant", "Gastronomie"],
    technologies: ["WordPress", "Reservation Plugin"],
    category: "Site Vitrine",
    link: "#",
    detailsLink: "/work/fiesta_restaurant",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>`
  },
  {
    id: 7,
    slug: "ovaticket",
    title: "OvaTicket - API",
    siteName: "OvaTicket",
    description: "API pour plateforme de billetterie événementielle avec gestion des paiements et QR codes.",
    image: "https://placehold.co/600x400?text=Ova+Ticket",
    tag: "Node.js API",
    tags: ["Billetterie", "Backend"],
    technologies: ["Node.js", "Express", "MongoDB"],
    category: "API",
    link: "#",
    detailsLink: "/work/ovaticket",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
          </svg>`
  },
  {
    id: 8,
    slug: "lassissi_itech",
    title: "LASSISSI iTech",
    siteName: "LASSISSI iTech",
    description: "Plateforme e-commerce complète pour la vente de smartphones et accessoires avec paiements sécurisés.",
    image: "/assets/images/lassissi-itech.PNG",
    tag: "E-commerce",
    tags: ["Mobile", "Vente en ligne"],
    technologies: ["Laravel", "Vue.js", "Mobile Money"],
    category: "E-commerce",
    link: "#",
    detailsLink: "/work/lassissi_itech",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
          </svg>`
  },
  {
    id: 9,
    slug: "byl_in",
    title: "Byl In - Mode Africaine",
    siteName: "Byl In",
    description: "Marketplace de vêtements artisanaux africains avec système de panier et paiements multiples (Mobile Money, Carte Bancaire).",
    image: "/assets/images/byl-in.PNG",
    tag: "E-commerce",
    tags: ["Mode", "Artisanat"],
    technologies: ["Laravel", "Vue.js", "Stripe"],
    category: "E-commerce",
    link: "#",
    detailsLink: "/work/byl_in",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>`
  },
  {
    id: 10,
    slug: "glory_spa",
    title: "Glory Spa & Beauté",
    siteName: "Glory Spa",
    description: "Site vitrine pour un institut de beauté à Abidjan avec prise de rendez-vous en ligne.",
    image: "/assets/images/glory-spa.PNG",
    tag: "WordPress",
    tags: ["Beauté", "Wellness"],
    technologies: ["WordPress", "Booking Plugin"],
    category: "Site Vitrine",
    link: "#",
    detailsLink: "/work/glory_spa",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>`
  }
]);

// Filtres
const selectedCategory = ref('all');
const selectedTechnology = ref('all');
const searchQuery = ref('');

// Extraire les catégories et technologies uniques
const categories = computed(() => {
  const cats = new Set();
  allProjects.value.forEach(project => cats.add(project.category));
  return Array.from(cats).sort();
});

const technologies = computed(() => {
  const techs = new Set();
  allProjects.value.forEach(project => {
    project.technologies.forEach(tech => techs.add(tech));
  });
  return Array.from(techs).sort();
});

// Projets filtrés
const filteredProjects = computed(() => {
  return allProjects.value.filter(project => {
    const categoryMatch = selectedCategory.value === 'all' || project.category === selectedCategory.value;
    const techMatch = selectedTechnology.value === 'all' || project.technologies.includes(selectedTechnology.value);
    const searchMatch = searchQuery.value === '' ||
                       project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                       project.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                       project.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()));

    return categoryMatch && techMatch && searchMatch;
  });
});

const resetFilters = () => {
  selectedCategory.value = 'all';
  selectedTechnology.value = 'all';
  searchQuery.value = '';
};

const viewProjectDetails = (detailsLink) => {
  router.push(detailsLink);
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.4s cubic-bezier(.4,0,.2,1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}
</style>
