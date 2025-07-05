<template>
  <section class="py-12 animate-fade-up animate-duration-[2000ms] animate-alternate">
    <div class="container mx-auto px-4">
      <div class="w-full">
        <!-- Titre -->
        <div class="p-2 lg:p-0">
          <h2 class="text-2xl lg:text-4xl font-thin lg:flex lg:justify-start">
            {{ t('home.skills.title') }}.
          </h2>
          <div class="w-24 h-1 bg-indigo-600 mt-3 lg:mt-5 lg:ml-0 mx-auto lg:mx-0"></div>
          <hr class="my-4 border-gray-300 dark:border-gray-600" />
          <p class="text-gray-600 dark:text-gray-400 mb-8">
            {{ t('home.skills.description') }}
          </p>
        </div>

        <!-- Grille des compétences -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          <!-- Compétences dynamiques -->
          <div v-for="skill in skills" :key="skill.name" class="skill-card group">
            <div class="skill-icon bg-white">
              <img :src="skill.icon" :alt="skill.name" class="h-10 w-10">
            </div>
            <h3 class="skill-name">{{ skill.name }}</h3>
            <div class="w-full mt-3">
              <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                <span>{{ t(`home.skills.levels.${skill.levelKey}`) }}</span>
                <span>{{ skill.percentage }}%</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div class="h-2 rounded-full"
                     :style="{ width: skill.percentage + '%', backgroundColor: skill.color }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const skills = [
  {
    name: 'Laravel',
    icon: 'https://laravel.com/img/logomark.min.svg',
    color: '#FF2D20',
    levelKey: 'advanced',
    percentage: 90
  },
  {
    name: 'Vue.js',
    icon: 'https://vuejs.org/logo.svg',
    color: '#4FC08D',
    levelKey: 'advanced',
    percentage: 85
  },
  {
    name: 'Angular',
    icon: 'https://angular.io/assets/images/logos/angular/angular.svg',
    color: '#DD0031',
    levelKey: 'intermediate',
    percentage: 70
  },
  {
    name: 'Express.js',
    icon: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000',
    color: '#000000',
    levelKey: 'intermediate',
    percentage: 75
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000',
    color: '#06B6D4',
    levelKey: 'advanced',
    percentage: 95
  },
  {
    name: 'WordPress',
    icon: 'https://img.icons8.com/?size=100&id=13664&format=png&color=000000',
    color: '#21759B',
    levelKey: 'advanced',
    percentage: 85
  },
  {
    name: 'Git/GitHub',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
    color: '#F05032',
    levelKey: 'advanced',
    percentage: 90
  },
  {
    name: 'Figma',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    color: '#F24E1E',
    levelKey: 'advanced',
    percentage: 80
  }
]
</script>

<style scoped>
.skill-card {
  @apply p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300;
  @apply hover:shadow-lg hover:border-transparent dark:hover:shadow-gray-800/50;
  @apply hover:transform hover:-translate-y-1;
  @apply flex flex-col items-center text-center;
}

.skill-icon {
  @apply w-16 h-16 rounded-xl flex items-center justify-center mb-4;
  @apply transition-all duration-300 group-hover:rotate-6 group-hover:scale-110;
}

.skill-name {
  @apply text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3;
}

.dark .skill-card {
  @apply bg-gray-800/30;
}
</style>
