<template>
<div class="logos">
  <div class="logo_items space-x-4">
    <img class="mx-8" src="https://laravel.com/img/logomark.min.svg" alt="Laravel Logo">
    <img class="mx-8" src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML5 Logo">
    <img class="mx-8" src="https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg" alt="WordPress Logo">
    <img class="mx-8" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma Logo">
    <img class="mx-8" src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" alt="MySQL Logo">
    <img class="mx-8" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="Git Logo">
    <img class="mx-8" src="https://vuejs.org/logo.svg" alt="Vue.js Logo">
    <img class="mx-8" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="Tailwind CSS Logo">
    <img class="mx-8" src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg" alt="Canva Logo" >
    <img class="mx-8" src="https://laravel.com/img/logomark.min.svg" alt="Laravel Logo">
    <img class="mx-8" src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML5 Logo">
    <img class="mx-8" src="https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg" alt="WordPress Logo">
    <img class="mx-8" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma Logo">
    <img class="mx-8" src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" alt="MySQL Logo">
    <img class="mx-8" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="Git Logo">
    <img class="mx-8" src="https://vuejs.org/logo.svg" alt="Vue.js Logo">
    <img class="mx-8" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="Tailwind CSS Logo">
    <img class="mx-8" src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg" alt="Canva Logo" >
  </div>
</div>
</template>



<style scoped>
.logos {
  display: flex;
  overflow: hidden;
  padding: 30px 0;
  white-space: nowrap;
  position: relative;
  content: "";
  z-index: 2;
}

.logo_items {
  display: flex;
  animation: slides 20s infinite linear;
}

.logo_items img {
  max-height: 60px;
  padding-right: 100px; /* espace entre les images */
}
.logos:hover .logo_items {
  animation-play-state: paused;
}

@keyframes slides {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

</style>
