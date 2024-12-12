<script setup>
  import { RouterView, useRouter } from 'vue-router'
  import NavBar from './components/partials/NavBarComponent.vue'
  import Footer from './components/partials/FooterComponent.vue'
  import useTheme from './components/services/useTheme'
  import { inject } from "@vercel/analytics"
  import { SpeedInsights } from '@vercel/speed-insights/vue'

  inject()

  const { toggleTheme } = useTheme()
  const router = useRouter()
  const isDevelopment = import.meta.env.VITE_APP_ENV === 'development'

  const navigateToSettings = () => router.push('/settings')
</script>

<template>
  <SpeedInsights />
  <div>
    <div class="flex flex-col min-h-screen">
      <NavBar v-show="$route.name !== 'NotFound'" :toggleTheme="toggleTheme" />
      <div class="flex-grow lg:mt-36 mt-24">
        <RouterView />
      </div>
      <Footer v-show="$route.name !== 'NotFound'" />
    </div>

    <div
      v-if="isDevelopment"
      class="fixed bottom-8 right-8 bg-gray-900 dark:bg-gray-800 text-white p-2 rounded-md shadow-xl hover:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
      @click="navigateToSettings"
    >
      Dev Mode
    </div>
  </div>
</template>

