<template>
  <div class="space-y-6">
    <div v-for="(item, index) in items" :key="index" class="relative pl-8 border-l-2 border-indigo-200 dark:border-indigo-800">
      <div class="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 top-1"></div>
      <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.role }} @ {{ item.company }}</h4>
      <p class="text-indigo-600 dark:text-indigo-400 text-sm mb-2">{{ item.period }}</p>
      <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
        <li v-for="(detail, i) in item.details" :key="i">{{ detail }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array
})
</script>
