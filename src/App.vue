<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/FooterComponent.vue'

const theme = ref('light')

// Changer le thème entre 'light' et 'dark'
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.body.classList.remove('light', 'dark'); // Retirer les anciennes classes
  document.body.classList.add(theme.value); // Ajouter la nouvelle classe
  localStorage.setItem('theme', theme.value); // Sauvegarder dans le localStorage
}

onMounted(() => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    theme.value = storedTheme;
  }
  document.body.classList.add(theme.value); // Appliquer la classe 'light' ou 'dark'
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar :toggleTheme="toggleTheme" />
    <div class="flex-grow lg:mt-48 mt-24">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
  /* Cette règle garantit que l'ensemble du contenu occupe toute la hauteur de l'écran */
  .min-h-screen {
    min-height: 100vh;
  }

  /* Le .flex-grow permet au contenu de se développer pour remplir l'espace restant */
  .flex-grow {
    flex-grow: 1;
  }

  /* Ajouter des styles pour garantir que le footer s'affiche correctement */
  footer {
    margin-top: auto; /* Cela pousse le footer vers le bas */
  }
</style>

