<template>
  <section class="py-24">
    <div class="container mx-auto px-4 text-center">
      <div class="w-full">
        <!-- Titre et description -->
        <div class="relative mb-12">
          <h2 class="text-4xl font-extrabold text-gray-800 dark:text-slate-200 mb-4">
            {{ $t('title') }}
          </h2>
          <p class="text-lg text-gray-600 dark:text-slate-400">
            {{ $t('description') }}
          </p>
        </div>

        <!-- Liste des projets -->
        <div class="flex flex-col space-y-16">
          <div
            v-for="(project, index) in translatedProjects"
            :key="index"
            class="rounded-lg h-auto flex flex-col lg:flex-row items-center justify-between gap-6 bg-white dark:bg-gray-700 p-6 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <!-- Image -->
            <div class="lg:w-1/3 w-full">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <!-- Texte -->
            <div class="lg:w-2/3 w-full text-left">
              <h2 class="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-3">
                {{ project.title }}
              </h2>
              <div class="mb-4">
                <span
                  class="inline-block bg-gray-900 text-white text-sm px-3 py-1 rounded-md"
                >
                  {{ project.tag }}
                </span>
              </div>
              <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                {{ project.description }}
              </p>
              <a
                :href="project.link"
                target="_blank"
                class="inline-block bg-slate-900 hover:bg-slate-800 text-white text-sm py-2 px-5 rounded-lg mt-2 shadow-md hover:scale-105 transition duration-300"
              >
                {{ $t('viewSite') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n(); // Traductions

// Données des projets
const projectsData = [
  {
    key: 'gie',
    image: '/src/assets/images/giehgd.png',
    link: 'https://www.holdinggroupdiama.com',
    className: 'bg-green-500',
  },
  {
    key: 'future',
    image: '/src/assets/images/fte.png',
    link: 'https://www.futuretransportexpo.com',
    className: 'bg-indigo-500',
  },
  {
    key: 'portfolio',
    image: '/src/assets/images/portfolio.png',
    link: 'https://www.chrislainavocegan.site',
    className: 'bg-gray-500',
  },
];

// Traduire les projets
const translatedProjects = computed(() =>
  projectsData.map((project) => ({
    ...project,
    title: t(`projects.${project.key}.title`),
    description: t(`projects.${project.key}.description`),
    tag: t(`projects.${project.key}.tag`, { defaultValue: 'Website' }),
  }))
);
</script>
