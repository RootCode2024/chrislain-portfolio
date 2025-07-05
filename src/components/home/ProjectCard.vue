<template>
  <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col border border-gray-200 dark:border-gray-800">
    <div class="relative h-40 overflow-hidden rounded-t-2xl bg-gray-50 dark:bg-gray-800">
      <img :src="project.image" :alt="project.title" class="w-full h-full object-contain p-3 transition-transform duration-500 hover:scale-105" />
      <span :class="`${project.tagColor || randomTagColor} text-xs font-medium px-2 py-0.5 rounded-full absolute top-3 right-3 shadow-sm`">
        {{ project.tag }}
      </span>
    </div>
    <div class="p-5 flex-grow flex flex-col">
      <div class="flex items-center mb-2">
        <div v-html="project.icon" class="text-indigo-500 dark:text-indigo-400 mr-2 text-lg"></div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white truncate">{{ project.title }}</h3>
      </div>
      <p class="text-gray-500 dark:text-gray-300 mb-3 text-sm flex-grow">{{ project.description }}</p>
      <div class="flex space-x-2 mt-auto">
        <a
          v-if="project.link && project.link !== '#'"
          :href="project.link"
          target="_blank"
          class="flex-1 text-center bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-3 py-1.5 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center gap-1"
        >
          Voir le projet
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <button
          @click="$emit('viewDetails', project.detailsLink)"
          class="flex-1 text-center border border-indigo-400 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-gray-800 font-medium px-3 py-1.5 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center gap-1"
        >
          Détails
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

defineEmits(['viewDetails']);

const tagColors = [
  'bg-indigo-100 text-indigo-700',
  'bg-green-100 text-green-700',
  'bg-pink-100 text-pink-700',
  'bg-yellow-100 text-yellow-700',
  'bg-blue-100 text-blue-700',
  'bg-purple-100 text-purple-700'
];

const randomTagColor = computed(() => {
  if (props.project?.title) {
    let hash = 0;
    for (let i = 0; i < props.project.title.length; i++) {
      hash = props.project.title.charCodeAt(i) + ((hash << 5) - hash);
    }
    return tagColors[Math.abs(hash) % tagColors.length];
  }
  return tagColors[Math.floor(Math.random() * tagColors.length)];
});
</script>
