<template>
  <div class="p-6 rounded-2xl flex flex-col items-center justify-center text-center group cursor-default">
    <div class="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{{ icon }}</div>
    <div
      class="text-3xl font-bold text-slate-900 dark:text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
      {{ value }}
    </div>
    <div class="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
      {{ label }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  value: String,
  label: String,
  icon: String
})
</script>
