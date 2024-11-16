<template>
  <section id="works" class="py-12">
    <div class="container mx-auto px-4 text-center">
      <div class="w-full">
        <!-- Titre et description traduits -->
        <div class="relative">
          <h2 class="text-3xl font-bold text-gray-800 dark:text-slate-200 mb-6">
            {{ $t('title') }}
          </h2>
          <p class="text-gray-600 dark:text-slate-400 mb-8">
            {{ $t('description') }}
          </p>

          <!-- Liste des projets traduits -->
          <div v-for="(project, index) in translatedProjects" :key="index" class="sticky top-56 rounded-lg bottom-10 min-h-96 flex flex-col items-center justify-center">
            <a :href="project.link" target="_blank">
            <div class="flex w-full gap-4 rounded-lg" :class="project.className">
              <div class="w-1/3 p-1">
              <img :src="project.image" :alt="project.title" class="rounded" />
            </div>
            <div class="w-2/3 p-1">
              <h2 class="text-lg font-bold flex justify-start lg:text-2xl">{{ project.title }}</h2>
              <div class="flex gap-2">
                <span class="bg-slate-900 text-white text-sm px-2 py-1 rounded-md">{{ project.tag }}</span>
              </div>
              <p class="flex justify-start text-left text-lg italic mb-5">{{ project.description }}</p>
              <!-- <a :href="project.link" target="_blank" class="bg-slate-900 hover:bg-slate-800 Active text-white text-sm py-2.5 px-5 mr-2 mb-2 rounded-lg mt-5 shadow-md hover:scale-105 transition duration-300">{{ $t('viewSite') }}</a> -->
            </div>
            </div></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n(); // Accès à la fonction de traduction

// Définir les données des projets
const projectsData = [
  {
    key: 'gie',
    image: '/src/assets/images/giehgd.png',
    link: 'https://www.holdinggroupdiama.com',
    className: 'bg-green-500 mb-8',
  },
  {
    key: 'future',
    image: '/src/assets/images/fte.png',
    link: 'https://www.futuretransportexpo.com',
    className: 'bg-indigo-500 mb-4',
  },
  {
    key: 'portfolio',
    image: '/src/assets/images/portfolio.png',
    link: 'https://www.chrislainavocegan.site',
    className: 'bg-gray-500',
  },
];

// Traduire les projets dynamiquement
const translatedProjects = computed(() =>
  projectsData.map((project) => ({
    ...project,
    title: t(`projects.${project.key}.title`), // Appel direct à la fonction t()
    description: t(`projects.${project.key}.description`), // Appel direct à la fonction t()
    tag: t(`projects.${project.key}.tag`, { defaultValue: ["website"] }),
  }))
);
</script>
