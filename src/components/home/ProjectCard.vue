<template>
  <div
    class="group overflow-hidden rounded-xl shadow-md bg-white dark:bg-gray-800 p-4 transition-transform transform hover:-translate-y-2 hover:shadow-lg"
  >
    <a :href="project.link" target="_blank" class="block">
      <div class="relative h-64 overflow-hidden rounded-lg">
        <img
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          :src="project.image"
          :alt="project.title"
        />
      </div>
      <h2 class="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
        {{ project.title }}
      </h2>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
        {{ project.description }}
      </p>
      <div class="mt-3">
        <span class="inline-block text-white text-xs font-medium px-3 py-1 rounded-lg" :class="project.tagColor">
          {{ project.tag }}
        </span>
      </div>
    </a>
  </div>
</template>

<script setup>
defineProps({
  project: Object
});
</script>
