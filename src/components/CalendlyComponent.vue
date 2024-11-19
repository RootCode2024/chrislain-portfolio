<script setup>
import { onMounted } from 'vue';

const loadCalendly = () => {
  // Créer et ajouter le lien CSS
  const cssLink = document.createElement("link");
  cssLink.rel = "stylesheet";
  cssLink.href = "https://assets.calendly.com/assets/external/widget.css";
  document.head.appendChild(cssLink);

  // Créer et ajouter le script JS
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);
};

onMounted(() => {
  // Charger Calendly une fois que le composant est monté
  loadCalendly();
});

const openCalendlyPopup = () => {
  // Ouvrir le widget Calendly
  window.Calendly.initPopupWidget({
    url: 'https://calendly.com/chrislainavocegan/30min'
  });
};
</script>

<template>
  <button @click="openCalendlyPopup" class="bg-black dark:bg-slate-200 dark:text-black text-white py-2 px-4 rounded hover:bg-gray-700 dark:hover:bg-slate-800 dark:hover:text-white transition duration-300">
    {{ $t('home.footer.makeAnAppointment') }}
  </button>
</template>
