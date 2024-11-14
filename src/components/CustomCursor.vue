<template>
  <div
    class="custom-cursor"
    :style="{ top: `${position.y}px`, left: `${position.x}px` }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const position = ref({ x: 0, y: 0 })

// Fonction pour mettre à jour la position du curseur
const updatePosition = (e) => {
  position.value = { x: e.clientX, y: e.clientY }
}

// Ajouter et supprimer les écouteurs d'événements
onMounted(() => {
  window.addEventListener('mousemove', updatePosition)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updatePosition)
})
</script>

<style scoped>
/* Styles du curseur personnalisé */
.custom-cursor {
  position: absolute;
  width: 20px; /* Taille du curseur */
  height: 20px;

  background-color: rgba(0, 123, 255, 0.7); /* Couleur et opacité */
  border-radius: 50%;
  pointer-events: none; /* Empêche les interactions avec d'autres éléments */
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease; /* Transition pour adoucir le mouvement */
}
</style>
