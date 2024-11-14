<template>
  <div class="flex flex-col items-center text-center">
    <h3 class="text-lg font-semibold text-indigo-400 mb-4">{{ title }}</h3>
    <div class="flex flex-wrap gap-2 justify-center">
      <SkillCard v-for="skill in skills" :key="skill" :skill="skill" />
    </div>
  </div>
</template>

<script setup>
import SkillCard from './SkillCard.vue'

defineProps({
  title: String,
  skills: Array
})
</script>
