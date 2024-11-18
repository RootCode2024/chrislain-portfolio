<script setup>
  // import { AcademicCapIcon, HomeIcon as HomeIconSolid } from '@heroicons/vue/24/outline'
  // import { HomeIcon,  UserIcon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/vue/24/solid'
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { RouterLink } from 'vue-router'

  const { locale } = useI18n();

  const theme = ref(localStorage.getItem('theme') || 'light');

  const dropdownOpen = ref(false);
  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
  }


  const locales = ref('en');
  const changeLanguage = (selectedLang) => {
  locale.value = selectedLang;

  locales.value = selectedLang;
};


  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme.value);
    localStorage.setItem('theme', theme.value);
  };
</script>

<template>
  <header class="navbar">
    <nav>
      <ul>

        <RouterLink to="/" class="mr-36 hover:bg-transparent">
          <div v-if="theme === 'dark'">
            <img src="./../assets/images/chrislain-dark-logo.png" class="w-8 h-8">
          </div>
          <div v-if="theme === 'light'">
            <img src="./../assets/images/chrislain-light-logo.png" class="w-8 h-8">
          </div>
        </RouterLink>

        <RouterLink to="/" class="flex space-x-2 hover:rounded-lg hover:border-transparent hover:underline" :class="{ 'active-link': $route.path === '/' }">
          <span>{{ $t('home') }}</span>
        </RouterLink>

        <RouterLink to="/about" class="flex space-x-2 hover:rounded-lg hover:border-transparent hover:underline" :class="{ 'active-link': $route.path === '/about' }">
          <span>{{ $t('about') }}</span>
        </RouterLink>

        <RouterLink to="/resume" class="flex space-x-2 hover:rounded-lg hover:border-transparent hover:underline" :class="{ 'active-link': $route.path === '/resume' }">
          <span>{{ $t('resume') }}</span>
        </RouterLink>

        <RouterLink to="/contact" class="flex space-x-2 hover:rounded-lg hover:border-transparent hover:underline" :class="{ 'active-link': $route.path === '/contact' }">
          <span>{{ $t('contact') }}</span>
        </RouterLink>

        <div @click="toggleDropdown" class="relative ml-12">
          <div class="selected-option flex items-center cursor-pointer mt-2" style="transition: transform 0.3s ease;">
            <div v-if="locales === 'en'">
              <img src="./../assets/images/flag-usa.svg" alt="Current Language" class="w-5 h-5 mr-2" />
            </div>
            <div v-else-if="locales === 'fr'">
              <img src="./../assets/images/flag-france.svg" alt="Current Language" class="w-5 h-5 mr-2" />
            </div>
          </div>
          <div v-if="dropdownOpen" class="absolute shadow-lg z-10">
            <div @click="changeLanguage('en')" v-if="locales === 'fr'" class="flex items-center bg-transparent cursor-pointer hover:bg-transparent">
              <img src="./../assets/images/flag-usa.svg" alt="USA Flag" class="w-5 h-5" />
            </div>
            <div @click="changeLanguage('fr')" v-if="locales === 'en'" class="flex items-center bg-transparent cursor-pointer hover:bg-transparent">
              <img src="./../assets/images/flag-france.svg" alt="France Flag" class="w-5 h-5" />
            </div>
          </div>
        </div>


        <button @click="toggleTheme" class="theme-toggle-btn">
            <!-- Icône pour le mode sombre -->
            <span v-if="theme === 'dark'" class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
            </span>

            <!-- Icône pour le mode clair -->
            <span v-else class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
            </span>
        </button>
      </ul>
    </nav>
  </header>
</template>


<style>
.active-link {
  /* styles for active link */
  background-color: #01161E;
  border-radius: 4px;
  padding: 1px 8px;
  text-decoration: none;

  color: #fff;
}
  .theme-toggle-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: transform 0.3s ease;
  }

  .theme-toggle-btn:hover {
    transform: scale(1.1);
  }

  .icon {
    display: inline-block;
    transition: opacity 0.3s ease;
  }

  .size-6 {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }


  /* Style des éléments en mode sombre et clair */
  a {
    color: inherit;  /* Les liens auront la même couleur que le texte */
  }

  body.dark .navbar {
    --navbar-bg: #0C3647; /* Navbar en mode sombre */
  }

  .navbar {
    position: fixed;
    top: 30px; /* Espace de 30px du bord supérieur */
    left: 0;
    right: 0;
    max-width: 700px;
    margin: 0 auto 0 auto;
    border-radius: 20px;
    margin-bottom: 100px;
    background-color: var(--navbar-bg, #fff);
    padding: 10px 20px;
    z-index: 1000;
  }

  .navbar nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }
</style>

