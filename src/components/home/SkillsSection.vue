<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>


<template>
  <section class="py-12">
    <div class="container mx-auto px-4 text-center">
      <div class="w-full">
        <!-- Liste des Compétences -->
        <div class="mt-10 lg:mt-30 mb-10 lg:mb-30 p-2 lg:p-0">
          <h2 class="text-2xl lg:text-4xl font-thin lg:flex lg:justify-start">
            {{ t('home.skills.title') }}.
          </h2>
          <hr />
          <div class="logos">
            <div class="logo_items">
              <img src="https://laravel.com/img/logomark.min.svg" alt="Laravel Logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML5 Logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg" alt="WordPress Logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma Logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" alt="MySQL Logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="Git Logo">
              <img src="https://vuejs.org/logo.svg" alt="Vue.js Logo">
              <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="Tailwind CSS Logo">
              <img src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg" alt="Canva Logo">

              <!-- Duplication pour le défilement infini -->
              <img src="https://laravel.com/img/logomark.min.svg" alt="Laravel Logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML5 Logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg" alt="WordPress Logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma Logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" alt="MySQL Logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="Git Logo">
              <img src="https://vuejs.org/logo.svg" alt="Vue.js Logo">
              <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="Tailwind CSS Logo">
              <img src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg" alt="Canva Logo">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logos {
  display: flex;
  overflow: hidden;
  position: relative;
  padding: 30px 0;
}

.logo_items {
  display: flex;
  animation: slides 20s linear infinite;
  will-change: transform;
}

.logo_items img {
  max-height: 60px;
  padding-right: 100px; /* espace entre les logos */
}

.logos:hover .logo_items {
  animation-play-state: paused;
}

@keyframes slides {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
