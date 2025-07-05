<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-indigo-500">
    <div class="text-4xl mb-2">{{ icon }}</div>
    <div class="text-3xl font-bold text-gray-900 dark:text-white">{{ value }}</div>
    <div class="text-gray-600 dark:text-gray-300">{{ label }}</div>
  </div>
</template>

<script setup>
defineProps({
  value: String,
  label: String,
  icon: String
})
</script>
