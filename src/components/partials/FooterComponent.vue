<script setup>
  import CalendlyComponent from '@/components/elements/CalendlyComponent.vue';
  import SocialsSection from '@/components/elements/SocialsSection.vue';
</script>

<template>
  <footer class="relative py-4 px-8">
    <div class="mt-5 lg:mt-20 p-2 lg:p-0">
      <div>
        <h1 class="text-2xl lg:text-4xl">{{ $t('home.navBar.contact') }}.</h1>
        <div class="md:flex md:justify-between">
          <div class="mt-10 lg:w-1/2">
            <h1 class="text-3xl md:text-6xl lg:text-6xl lgl:text-8xl">
              {{ $t('home.footer.letsWork') }}
            </h1>
            <h1 class="text-3xl md:text-6xl lg:text-6xl lgl:text-8xl">
              {{ $t('home.footer.together') }}
            </h1>
            <div class="my-5">
              <CalendlyComponent />
            </div>
            <div class="mt-10">
              <SocialsSection />
            </div>
          </div>
          <div class="my-auto p-2 lg:w-1/2">
            <p class="text-lg italic text-justify">{{ $t('home.footer.description') }}</p>
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-sm text-center font-thin mt-2 lg:mt-10 p-2 lg:p-0">
      <p>&copy; {{ new Date().getFullYear() }} Chrislain AVOCEGAN | {{ $t('home.footer.copyright') }}</p>
    </h1>

    <div class="gradient-circle-bottom"></div>
  </footer>
</template>

<style scoped>
/* Light mode text color */
.text-gray-400 {
  color: #cbd5e1;
}

/* Dark mode text color */
.dark .text-gray-400 {
  color: #e5e7eb;
}

/* Light mode background */
.bg-gray-800 {
  background-color: #2d3748;
}

/* Dark mode background */
.dark .bg-gray-800 {
  background-color: #1a202c;
}

/* Ajout d'une position relative pour que le gradient soit bien placé au bas du footer */
footer {
  position: relative;
}

/* Gradient en bas */
.gradient-circle-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30px; /* Taille du gradient */
  background: radial-gradient(
    circle,
    rgba(112, 255, 176, 0.5) 0%,
    rgba(94, 158, 255, 0.5) 100%
  );
  filter: blur(30px); /* Légèrement plus subtil */
  opacity: 0.4;
}
</style>
