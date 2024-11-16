<template>
  <div class="not-found">
    <h1>Page non trouvée</h1>
    <p>La page que vous cherchez n'existe pas.</p>
    <router-link to="/">Retour à la page d'accueil</router-link>
  </div>
</template>

<script setup>
// Vous pouvez ajouter des logiques si nécessaire ici
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}
.not-found h1 {
  font-size: 2rem;
  color: #333;
}
</style>
