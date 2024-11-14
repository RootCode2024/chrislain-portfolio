<template>
  <div class=" flex items-center justify-center">
    <div class="text-center text-white">
      <h2 class="text-4xl font-bold mb-8">MY SKILLS</h2>

      <!-- Diagram Tree -->
      <div class="relative mx-auto max-w-5xl">
        <!-- Connectors -->
        <div class="absolute left-1/2 top-0 w-0.5 h-8 bg-gray-600"></div>
        <div class="absolute left-1/2 bottom-0 w-0.5 h-8 bg-gray-600"></div>
        <div class="absolute w-full h-px top-1/2 bg-gray-600"></div>

        <!-- Skill Categories -->
        <div class="flex justify-around mt-8">
          <div class="flex flex-col items-center space-y-4">
            <SkillCategory title="Frontend" :skills="frontendSkills" />
          </div>
          <div class="flex flex-col items-center space-y-4">
            <SkillCategory title="Backend" :skills="backendSkills" />
          </div>
          <div class="flex flex-col items-center space-y-4">
            <SkillCategory title="Other" :skills="otherSkills" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SkillCategory from './SkillCategory.vue'

const frontendSkills = [
  "HTML", "CSS", "JavaScript", "Vue.js", "Tailwind CSS", "Nuxt.js", "SSR", "Performance Optimization"
]
const backendSkills = [
  "PHP", "Laravel", "Node.js", "Express", "REST API", "SQL", "MySQL", "JWT/OAuth"
]
const otherSkills = [
  "Git", "GitHub", "Linux", "WordPress", "Figma", "Adobe XD", "UI/UX Design"
]
</script>

<style scoped>
.diagram {
  position: relative;
}
</style>
