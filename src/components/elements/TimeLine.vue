<template>
  <div class="space-y-12">
    <div v-for="(item, index) in items" :key="index" class="timeline-item relative group">
      <!-- Dot -->
      <div
        class="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600 group-hover:bg-indigo-600 group-hover:scale-125 transition-all duration-300">
      </div>

      <div
        class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700/50">
        <div class="flex flex-wrap justify-between items-start gap-4 mb-4">
          <div>
            <h3
              class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ item.role }}
            </h3>
            <p class="text-slate-500 dark:text-slate-400 font-medium">{{ item.company }}</p>
          </div>
          <span
            class="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase rounded-full tracking-wide">
            {{ item.period }}
          </span>
        </div>

        <ul class="space-y-2">
          <li v-for="(detail, i) in item.details" :key="i"
            class="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
            <svg class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array
})
</script>
