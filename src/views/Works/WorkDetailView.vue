<template>
  <section class="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <!-- Bouton retour -->
      <button
        @click="router.go(-1)"
        class="mb-8 flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Retour aux projets
      </button>

      <!-- Contenu principal -->
      <div v-if="project" class="space-y-12">
        <!-- En-tête du projet -->
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Image principale -->
          <div class="lg:w-1/2">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-auto object-cover"
              >
            </div>
          </div>

          <!-- Informations du projet -->
          <div class="lg:w-1/2">
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-full">
              <span class="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700 rounded-full mb-4">
                {{ project.category }}
              </span>
              <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{{ project.title }}</h1>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-6" v-html="project.description"></p>

              <div class="mb-8">
                <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-3">Technologies utilisées</h2>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div v-if="project.link && project.link !== '#'" class="mt-auto">
                <a
                  :href="project.link"
                  target="_blank"
                  class="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                >
                  Visiter le site
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Détails supplémentaires -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Section Tags -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Tags</h2>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Section Site Info -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Informations</h2>
            <div class="space-y-3">
              <div>
                <span class="block text-sm text-gray-500 dark:text-gray-400">Nom du site</span>
                <span class="text-gray-800 dark:text-gray-200">{{ project.siteName }}</span>
              </div>
              <div>
                <span class="block text-sm text-gray-500 dark:text-gray-400">Catégorie</span>
                <span class="text-gray-800 dark:text-gray-200">{{ project.category }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Chargement ou erreur -->
      <div v-else class="text-center py-12">
        <div v-if="loading" class="space-y-4">
          <div class="animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700 h-12 w-12 mx-auto"></div>
          <div class="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-6 w-64 mx-auto"></div>
        </div>
        <div v-else class="text-red-500">
          Projet non trouvé
        </div>
      </div>

      <!-- Bouton retour en bas -->
      <div class="text-center mt-12">
        <button
          @click="router.go(-1)"
          class="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour aux projets
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const project = ref(null);
const loading = ref(true);

// Liste de tous les projets (devrait être importée depuis un store ou API)
const projects = ref([
  {
    id: 1,
    slug: "amazone_tchad",
    title: "Amazone Tchad - Dashboard Admin",
    siteName: "Amazone Tchad",
    description: `Développement d'une plateforme de réservation avec Laravel 10 et Vue.js 3 (Inertia.js).
    <br/><br/>
    ✔ Côté client :<br/>
    • Système complet de réservation (vols/véhicules/hôtels)<br/>
    • Formulaires dynamiques avec validation en temps réel<br/>
    • Paiement sécurisé et historique des réservations<br/>
    <br/><br/>
    ✔ Dashboard admin :<br/>
    • Tableau de bord interactif avec filtres avancés<br/>
    • Workflow de gestion des réservations (Kanban)<br/>
    • Notifications automatiques (Email + SMS via Twilio)<br/>
    • Reporting financier et statistiques d'occupation<br/>
    • Gestion fine des utilisateurs (Spatie Laravel-Permission)<br/>
    <br/><br/>
    ⚙ Backend :<br/>
    • API RESTful avec Laravel Sanctum<br/>
    • Files d'attente asynchrones (Laravel Queue)<br/>
    • Monitoring des performances (Telescope/Horizon)`,
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
    description: `API complète pour la gestion scolaire développée avec Laravel.<br><br><b>✔ Modules clés :</b><br>• Gestion des élèves (fiches individuelles, historique scolaire)<br>• Gestion des professeurs (affectation aux classes/matières)<br>• Emplois du temps intelligents (optimisation des ressources)<br>• Système de notation détaillé (compétences, appréciations)<br>• Gestion des absences et sanctions<br><br><b>⚙ Technologie :</b><br>• Laravel 10 + Sanctum pour l'authentification<br>• Système de cache Redis pour les données fréquentes<br>• Génération de documents (PDF/Excel) avec Laravel Excel<br>• Tests automatisés (PHPUnit, Pest)`,
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
    description: `Refonte du frontend pour la Fédération des Sociétés Philatéliques de la Côte d'Ivoire.<br><br><b>✔ Réalisations :</b><br>• Migration de l'ancien système vers Angular (v15+)<br>• Interface responsive et accessible (WCAG 2.1)<br>• Galerie philatélique dynamique avec filtres avancés<br>• Système de gestion des collections utilisateurs<br><br><b>⚙ Technologies :</b><br>• Angular Material pour le design system<br>• NgRx pour la gestion d'état<br>• API REST avec authentification JWT<br>• Optimisation des performances (Lazy Loading, PWA)`,
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
    description: `Site événementiel WordPress pour un salon international des transports du futur.<br><br><b>✔ Fonctionnalités clés :</b><br>• Système de billetterie en ligne intégré (Woocommerce/Event Tickets)<br>• Gestion des exposants (espaces privatifs, catalogues digitaux)<br>• Agenda interactif des conférences et démonstrations<br>• Outil de mise en relation professionnelle<br><br><b>⚙ Solutions techniques :</b><br>• Thème WordPress sur-mesure (Elementor Pro/ACF)<br>• Module d'inscription en temps réel<br>• Synchronisation CRM (HubSpot/Zoho)<br>• Statistiques avancées de fréquentation`,
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
    description: `Site institutionnel WordPress pour la présentation d'un groupe et de ses filiales.<br><br><b>✔ Réalisations :</b><br>• Architecture multi-langues (WPML/Polylang)<br>• Galerie des filiales avec fiche détaillée par entité<br>• Mise en avant des activités clés (secteurs d'intervention)<br>• Espace actualités et publications (rapports annuels)<br><br><b>⚙ Solutions techniques :</b><br>• Thème sur-mesure avec Gutenberg avancé<br>• Module de géolocalisation des implantations<br>• Synchronisation avec les réseaux sociaux<br>• Optimisation SEO et performances (cache, lazy loading)`,
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
    description: `Site vitrine WordPress pour un restaurant gastronomique à Dakar.<br><br><b>✔ Fonctionnalités clés :</b><br>• Galerie photos haute résolution (plats, ambiance, équipe)<br>• Système de réservation en ligne (Resurva/Bookly)<br>• Menu digital interactif avec saisons et produits locaux<br>• Intégration des avis clients (Google/Trustpilot)<br><br><b>⚙ Solutions techniques :</b><br>• Thème culinaire sur-mesure (Divi/Elementor Pro)<br>• Optimisation mobile et chargement ultra-rapide<br>• Géolocalisation et itinéraire Google Maps<br>• Mises à jour à distance par le restaurateur`,
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
    description: `API pour plateforme de billetterie événementielle.<br><br><b>✔ Fonctionnalités principales :</b><br>• Gestion complète des événements et créneaux horaires<br>• Système de paiement sécurisé (Stripe/PayPal)<br>• Génération et validation de QR codes uniques<br>• Gestion des capacités et listes d'attente<br><br><b>⚙ Architecture technique :</b><br>• Développée avec Laravel 10 + Sanctum<br>• Microservices pour la scalabilité<br>• Webhooks pour les notifications en temps réel<br>• Documentation Swagger/Postman complète`,
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
    description: `Plateforme e-commerce complète pour smartphones et accessoires.<br><br><b>✔ Fonctionnalités clés :</b><br>• Catalogue produits avec fiches techniques détaillées<br>• Comparateur de modèles et accessoires compatibles<br>• Paiements sécurisés multi-moyens (carte, mobile money)<br>• Suivi de commande en temps réel avec notifications<br><br><b>⚙ Solutions techniques :</b><br>• Développement sur Shopify/Laravel (selon besoin)<br>• API d'intégration avec fournisseurs et transporteurs<br>• Système anti-fraude et vérification 3D Secure<br>• Backoffice de gestion des stocks et promotions`,
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
    description: `Marketplace spécialisée dans les vêtements artisanaux africains.<br><br><b>✔ Fonctionnalités client :</b><br>• Catalogue des créateurs et artisans par région<br>• Fiches produits détaillées (matières, techniques artisanales)<br>• Panier multi-vendeurs avec calcul automatique des frais<br>• Paiements sécurisés (Mobile Money, Carte, Virement)<br><br><b>✔ Espace vendeur :</b><br>• Tableau de bord de gestion des commandes<br>• Outil de suivi des ventes et statistiques<br>• Système de messagerie intégré avec les acheteurs<br>• Gestion des stocks et collections saisonnières<br><br><b>⚙ Infrastructure :</b><br>• Plateforme Laravel/Magento avec API REST<br>• Module de livraison avec suivi en temps réel<br>• Système de notation et avis vérifiés<br>• Intégration avec les principales solutions Mobile Money africaines`,
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
    description: `Site vitrine premium pour un institut de beauté à Abidjan.<br><br><b>✨ Expérience client :</b><br>• Présentation élégante des soins et prestations<br>• Galerie avant/après avec résultats visibles<br>• Prise de rendez-vous en ligne intuitive (calendrier temps réel)<br>• Conseils beauté personnalisés par algorithme<br><br><b>💅 Fonctionnalités métier :</b><br>• Gestion centralisée des RDV et praticiens<br>• Module de fidélité (carte de recharge virtuelle)<br>• Rappels automatiques (SMS/WhatsApp)<br>• Catalogue des produits cosmétiques en vente<br><br><b>⚙️ Technologie :</b><br>• WordPress avec extension booking premium<br>• Interface mobile-first ultra-rapide<br>• Intégration des réseaux sociaux (Instagram feed)<br>• Tableau de bord analytique des tendances beauté`,
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

onMounted(() => {
  const slug = route.params.slug;
  project.value = projects.value.find(p => p.slug === slug || p.detailsLink === `/work/${slug}`);
  loading.value = false;

  if (!project.value) {
    // Rediriger après un délai pour laisser voir le message d'erreur
    setTimeout(() => router.push('/404'), 2000);
  }
});
</script>
