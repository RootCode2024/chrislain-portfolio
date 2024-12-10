<script setup>
  import { ref, onMounted } from "vue"
  import { useRoute, useRouter } from "vue-router"
  import { useI18n } from "vue-i18n"

  const mounted = ref(false)
  const route = useRoute()
  const router = useRouter()
  const similarLink = "/contact"

  const { t } = useI18n()

  onMounted(() => {
    mounted.value = true
  })
</script>

<template>
  <div v-if="mounted" class="flex flex-col items-center justify-center min-h-screen text-center p-6">

    <h1 class="md:text-4xl text-2xl font-thin text-white mb-4">{{ t('notFound.title') }}</h1>

    <!-- Logo -->
    <div class="w-1/2 flex justify-center">
      <img src="/assets/images/white_logo.png" alt="Your site logo" width="80" height="80" class="mb-6" />
    </div>

    <!-- Contenu principal -->
    <div class="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
      <img src="/assets/images/404.svg" alt="404 Error" class="w-2/3 mx-auto mb-4" />

      <h2 class="text-3xl font-bold text-gray-800 mb-2">{{ t('notFound.not_found') }}</h2>
      <p class="text-lg text-gray-600 mb-4">{{ t('notFound.oops') }}</p>
      <p class="text-sm text-gray-600 mb-6">
        {{ t('notFound.entered') }}<span class="text-red-600 italic">{{ route.path }}</span>
      </p>

      <p class="text-lg text-gray-700 mb-6">
        {{ t('notFound.similar_page') }}
        <router-link :to="similarLink" class="text-blue-600 underline hover:text-blue-800">
          {{ similarLink }}
        </router-link>
      </p>

      <!-- Actions -->
      <div class="flex gap-4 justify-center">
        <button
          @click="router.back"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          {{ t('notFound.go_back') }}
        </button>
        <router-link to="/" class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
          {{ t('notFound.home') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styles de responsivité et de personnalisation */
</style>
