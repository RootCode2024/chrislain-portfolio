<template>
  <div class="relative">
    <div class="container mx-auto mb-10">
      <div class="max-w-6xl mx-auto p-6">
        <h2 class="text-2xl animate-fade-right lg:text-4xl font-thin my-5 lg:flex lg:justify-start bg-gradient-to-b from-indigo-400 to-green-600 bg-clip-text text-transparent tracking-tight">
          {{ t('about.title') }}.
        </h2>
        <p class="text-slate-700 animate-fade-up dark:text-slate-100 text-base font-normal leading-relaxed text-justify py-12">
          {{ t('about.longDescription') }}t
        </p>
        <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div class="w-full flex-col justify-center items-start gap-6 flex">
                <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                        class="w-full h-full animate-fade-up p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 class="text-slate-700 dark:text-slate-100 text-2xl font-bold font-manrope leading-9">+5 {{ t('about.sections.workedYears.title') }}</h4>
                        <p class="text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed">{{ t('about.sections.workedYears.description') }}</p>
                    </div>
                    <div
                        class="w-full h-full animate-fade-up p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 class="text-graslate-700 dark:text-slate-100 text-2xl font-bold font-manrope leading-9">+20 {{ t('about.sections.workedProjects.title') }}</h4>

                        <p class="text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed">{{ t('about.sections.workedProjects.description') }}</p>
                    </div>
                </div>
                <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                        class="w-full animate-fade-up p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 class="text-slate-700 dark:text-slate-100 text-2xl font-bold font-manrope leading-9">{{ t('about.sections.certifications.title') }}</h4>
                        <p class="text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed">{{ t('about.sections.certifications.description') }}</p>
                    </div>
                    <div
                        class="w-full animate-fade-up h-full  p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 class="text-graslate-700 dark:text-slate-100 text-2xl font-bold font-manrope leading-9">99% {{ t('about.sections.happyClients.title') }}</h4>
                        <p class="text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed">{{ t('about.sections.happyClients.description') }}</p>
                    </div>
                </div>
            </div>
            <button
                class="sm:w-fit w-full group px-3.5 py-2 animate-fade-left animate-once animate-alternate bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                <span
                    class="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">{{ t('about.myResume') }}</span>
                <svg class="group-hover:translate-x-0.5 bounce-x transition-all duration-700 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" stroke-width="1.6"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
          </div>
          <div class="w-2/3 h-2/3 sm:border rounded-lg bg-slate-700 dark:bg-slate-100 border-gray-200 relative">
            <img class="sm:mt-2 sm:ml-2 animate-fade-up w-full h-full object-cover rounded-lg" src="/src/assets/images/chrislain.jpg" alt="Chrislain AVOCEGAN Photo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

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
