<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

const { locale } = useI18n();

const theme = ref(localStorage.getItem('theme') || 'light');
const dropdownOpen = ref(false);
const mobileMenuOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

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
      <!-- Logo -->
      <RouterLink to="/" class="">
        <img :src="`/src/assets/images/chrislain-${theme}-logo.png`" class="w-8 h-8">
      </RouterLink>

      <!-- Hamburger menu for mobile -->
      <button @click="toggleMobileMenu" class="mobile-menu-btn md:hidden">
        <span v-if="!mobileMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <!-- Navigation links -->
      <ul :class="['flex justify-between mx-auto px-auto text-center space-x-6', mobileMenuOpen ? 'open' : '']">
        <li>
          <RouterLink to="/" class="hover:bg-slate-200 dark:hover:text-slate-800 rounded-md py-1 px-4" :class="{ 'dark:bg-slate-700 bg-slate-100 rounded-md py-1 px-4 dark:text-white text-slate-700': $route.path === '/' }">
            {{ $t('home.navBar.home') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="hover:bg-slate-200 dark:hover:text-slate-800 rounded-md py-1 px-4" :class="{ 'dark:bg-slate-700 bg-slate-100 rounded-md py-1 px-4 dark:text-white text-slate-700': $route.path === '/about' }">
            {{ $t('home.navBar.about') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/resume" class="hover:bg-slate-200 dark:hover:text-slate-800 rounded-md py-1 px-4" :class="{ 'dark:bg-slate-700 bg-slate-100 rounded-md py-1 px-4 dark:text-white text-slate-700': $route.path === '/resume' }">
            {{ $t('home.navBar.resume') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" class="hover:bg-slate-200 dark:hover:text-slate-800 rounded-md py-1 px-4" :class="{ 'dark:bg-slate-700 bg-slate-100 rounded-md py-1 px-4 dark:text-white text-slate-700': $route.path === '/contact' }">
            {{ $t('home.navBar.contact') }}
          </RouterLink>
        </li>
        
        <li>
          <!-- Language Dropdown -->
          <div @click="toggleDropdown" class="relative">
            <div class="flex items-center cursor-pointer">
              <img :src="locales === 'en' ? '/src/assets/images/flag-usa.svg' : '/src/assets/images/flag-france.svg'"
                   alt="Current Language" class="w-5 h-5 mr-2" />
            </div>
            <div v-if="dropdownOpen" class="absolute shadow-lg z-10">
              <div @click="changeLanguage('en')" class="cursor-pointer" v-if="locales === 'fr'">
                <img src="./../assets/images/flag-usa.svg" alt="USA Flag" class="w-5 h-5" />
              </div>
              <div @click="changeLanguage('fr')" class="cursor-pointer" v-else>
                <img src="./../assets/images/flag-france.svg" alt="France Flag" class="w-5 h-5" />
              </div>
            </div>
          </div>
        </li>

        <li>
          <!-- Theme Toggle -->
          <button @click="toggleTheme" class="theme-toggle-btn">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="theme === 'dark' ? 'size-6' : 'size-5'" stroke-width="1.5" stroke="currentColor" fill="none">
                <path stroke-linecap="round" stroke-linejoin="round" :d="theme === 'dark' ? 'M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' : 'M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'" />
              </svg>
            </span>
          </button>
        </li>

      </ul>
    </nav>
  </header>
</template>

<style scoped>

  .navbar {
    position: fixed;
    top: 30px;
    left: 0;
    right: 0;
    max-width: 700px;
    margin: 0 auto;
    border-radius: 20px;
    background-color: var(--navbar-bg, #fff);
    @apply dark:bg-slate-600;
    @apply dark:opacity-90;
    padding: 10px 20px;
    z-index: 1000;
  }

  .navbar nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Mobile-specific styles */
  .mobile-menu-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .nav-links.open {
    display: block;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      gap: 10px;
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      @apply bg-slate-300 dark:bg-slate-700 text-center;
      border-radius: 0 0 10px 10px;
      padding: 10px;
    }

    .navbar {
      max-width: 100%;
      border-radius: 0;
      top: 0;
      margin: auto;
    }

    .mobile-menu-btn {
      display: block;
    }
  }
</style>
