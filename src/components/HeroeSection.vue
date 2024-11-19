<script setup>
  import { useI18n } from 'vue-i18n'
  import DotLottie from './DotLottie.vue'
  import NameAnimationComponent from './NameAnimationComponent.vue'

  const { t } = useI18n()
</script>

<template>
  <div class="lg:flex lg:flex-row justify-center items-center max-w-full">
    <div class="mx-auto lg:flex justify-left px-4 sm:px-6 md:px-8">
      <div class="text-left">
        <h1 class="mx-auto text-center lg:text-left text-2xl tracking-tight sm:text-3xl md:text-5xl">
          <span class="block xl:inline">
              <NameAnimationComponent />
          </span>
          <div class="mt-2">
            <span class="text-indigo-400 dark:text-green-600">
              {{ t('home.heroe.myWork') }}
            </span>
          </div>
        </h1>
        <div class="mt-3 max-w-xl text-lg text-slate-800 dark:text-gray-100 sm:mt-5 md:mt-5 text-justify"
        v-html="t('home.heroe.introDescription')"></div>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-left">
          <div class="">
            <a href="" class="flex justify-between space-x-2 text-slate-700 underline underline-offset-4 hover:underline-offset-0 dark:text-slate-100">
              <span>{{ $t('home.heroe.myResume') }}</span>
              <span class="animate bounce-x">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mx-auto">
      <DotLottie />
    </div>
  </div>
</template>

<style scoped>
@keyframes bounceX {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px);
  }
}

.bounce-x {
  animation: bounceX 1.5s infinite;
}

</style>

