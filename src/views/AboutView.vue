<template>
  <div class="relative py-16">
    <div class="container mx-auto mb-10">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Titre principal -->
        <h2 class="text-2xl animate-fade-right lg:text-4xl font-thin my-5 lg:flex lg:justify-start bg-gradient-to-b from-indigo-400 to-green-600 bg-clip-text text-transparent tracking-tight">
          {{ t('about.title') }}.
        </h2>
        <!-- Description -->
        <p class="text-lg text-justify text-gray-700 dark:text-gray-100 leading-relaxed mb-12 px-6 md:px-0">
          <span v-html="t('about.longDescription')"></span>
        </p>
        <!-- Sections principales -->
        <div class="grid lg:grid-cols-2 gap-10">
          <div class="flex flex-col items-center lg:items-start space-y-8">
            <div class="grid md:grid-cols-2 gap-8">
              <!-- Section "Work Experience" -->
              <div class="transition-transform transform hover:scale-105 bg-white shadow-xl rounded-xl p-6">
                <h4 class="text-xl font-semibold text-indigo-600">{{ t('about.sections.workedYears.title') }}</h4>
                <p class="text-gray-600">{{ t('about.sections.workedYears.description') }}</p>
              </div>
              <!-- Section "Worked Projects" -->
              <div class="transition-transform transform hover:scale-105 bg-white shadow-xl rounded-xl p-6">
                <h4 class="text-xl font-semibold text-indigo-600">{{ t('about.sections.workedProjects.title') }}</h4>
                <p class="text-gray-600">{{ t('about.sections.workedProjects.description') }}</p>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
              <!-- Section "Certifications" -->
              <div class="transition-transform transform hover:scale-105 bg-white shadow-xl rounded-xl p-6">
                <h4 class="text-xl font-semibold text-indigo-600">{{ t('about.sections.certifications.title') }}</h4>
                <p class="text-gray-600">{{ t('about.sections.certifications.description') }}</p>
              </div>
              <!-- Section "Happy Clients" -->
              <div class="transition-transform transform hover:scale-105 bg-white shadow-xl rounded-xl p-6">
                <h4 class="text-xl font-semibold text-indigo-600">{{ t('about.sections.happyClients.title') }}</h4>
                <p class="text-gray-600">{{ t('about.sections.happyClients.description') }}</p>
              </div>
            </div>
            <!-- Bouton "Voir mon CV" -->
            <RouterLink
              to="/resume"
              class="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex justify-center items-center"
            >
              <span>{{ t('about.myResume') }}</span>
              <svg class="ml-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </RouterLink>
          </div>
          <!-- Image de profil -->
          <div class="relative flex justify-center items-center">
            <img class="w-full h-full object-cover rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out" src="/assets/images/chrislain.jpg" alt="Chrislain AVOCEGAN Photo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  import { useHead } from '@vueuse/head'
  import { RouterLink } from 'vue-router';
  const { t } = useI18n()

  useHead({
    title: 'About - Code With Chris',
    meta: [
      {
        name: 'description',
        content: 'En savoir plus sur Chrislain AVOCEGAN, développeur web full stack passionné, spécialisé en Laravel, Vue.js, et Tailwind CSS. Découvrez son parcours, ses compétences et ses valeurs.'
      },
      {
        name: 'keywords',
        content: 'À propos, Code With Chris, Chrislain AVOCEGAN, Laravel, Vue.js, Tailwind CSS, Développeur Full Stack, Parcours, Compétences'
      },
      {
        property: 'og:title',
        content: 'À propos - Code With Chris'
      },
      {
        property: 'og:description',
        content: 'Découvrez l’histoire, les compétences, et les projets de Chrislain AVOCEGAN, développeur web full stack spécialisé en Laravel et Vue.js.'
      },
      {
        property: 'og:image',
        content: 'https://chrislainavocegan.site/preview-image.png'
      },
      {
        property: 'og:url',
        content: 'https://chrislainavocegan.site/about'
      },
      {
        property: 'og:type',
        content: 'profile'
      },
      {
        name: 'author',
        content: 'Chrislain AVOCEGAN'
      },
      {
        name: 'robots',
        content: 'index, follow'
      }
    ]
  });
</script>

<style scoped>
  /* Animation de déplacement des éléments */
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-up {
    animation: fadeIn 1s ease-out;
  }

  /* Animation de rebond pour le bouton */
  @keyframes bounceX {
    0%, 100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(12px);
    }
  }

  .bounce-x {
    animation: bounceX 1.5s infinite;
  }
</style>
