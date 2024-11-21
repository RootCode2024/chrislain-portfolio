<template>
  <section class="py-6 animate-fade-up animate-duration-[2000ms] animate-alternate">
    <div class="container mx-auto px-4 text-center">
      <div class="w-full">


        <!-- Liste des projets -->
        <div class="mt-10 lg:mt-10 mb-10 lg:mb-30 p-2 lg:p-0">
            <h1 class="text-2xl lg:text-4xl font-thin lg:flex lg:justify-start">{{ $t('home.projects.title') }}.</h1>
            <hr />
            <div class="mt-5 lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                class="overflow-hidden rounded-lg p-2 lg:p-4 first:ml-0 link shadow-sm"
                v-for="(project, index) in translatedProjects"
                  :key="index"
              >
                <div
                  class="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-64 mob:h-auto"
                >
                  <img
                  class="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
                    :src="project.image"
                    :alt="project.imageAlt"
                  />
                </div>
                <h2 class="flex justify-start md:text-3xl text-2xl my-2">
                  {{ project.title }}
                </h2>
                <h3 class="flex justify-start text-md opacity-50">
                  <span class="bg-slate-700 dark:bg-slate-100 text-slate-100 dark:text-slate-700 p-1 rounded-xl">{{ project.tag }}</span>
                </h3>
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
    imageAlt: 'Projet Gie holding group diama par Chris'
  },
  {
    key: 'future',
    image: '/src/assets/images/fte.png',
    link: 'https://www.futuretransportexpo.com',
    className: 'bg-indigo-500',
    imageAlt: 'Projet Future Transport Expo par Chris'
  },
  {
    key: 'portfolio',
    image: '/src/assets/images/portfolio.png',
    link: 'https://www.chrislainavocegan.site',
    className: 'bg-gray-500',
    imageAlt: 'Projet Portfolio par Chris'
  },
  {
    key: 'flex-interim',
    image: '/src/assets/images/flexinterim.png',
    link: 'https://www.flex-interim.com',
    className: 'bg-gray-500',
    imageAlt: 'Projet SEO Flex Interim par Chris'
  },
];

// Traduire les projets
const translatedProjects = computed(() =>
  projectsData.map((project) => ({
    ...project,
    title: t(`home.projects.${project.key}.title`),
    description: t(`home.projects.${project.key}.description`),
    tag: t(`home.projects.${project.key}.tag`, { defaultValue: 'Website' }),
  }))
);
</script>
