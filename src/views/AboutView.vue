<template>
  <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <h2 class="text-2xl lg:text-4xl font-thin my-5 lg:flex lg:justify-start">
            {{ t('about.title') }}.
          </h2>
          <p class="text-gray-500 text-base font-normal leading-relaxed">
          {{ t('about.longDescription') }}t
          </p>
            <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div class="w-full flex-col justify-center items-start gap-8 flex">
                        <div class="flex-col justify-start lg:items-start items-center gap-4 flex">

                            <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <p
                                    class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                    {{ t('about.description') }}</p>
                            </div>
                        </div>
                        <div class="w-full flex-col justify-center items-start gap-6 flex">
                            <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                <div
                                    class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 class="text-slate-700 dark:text-slate-100 text-2xl font-bold font-manrope leading-9">+5 {{ t('about.sections.workedYears.title') }}</h4>
                                    <p class="text-gray-500 text-base font-normal leading-relaxed">{{ t('about.sections.workedYears.description') }}</p>
                                </div>
                                <div
                                    class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 class="text-graslate-700 dark:text-slate-100 text-2xl font-bold font-manrope leading-9">+20 {{ t('about.sections.workedProjects.title') }}</h4>

                                    <p class="text-gray-500 text-base font-normal leading-relaxed">{{ t('about.sections.workedProjects.description') }}</p>
                                </div>
                            </div>
                            <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                <div
                                    class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 class="text-slate-700 dark:text-slate-100 text-2xl font-bold font-manrope leading-9">{{ t('about.sections.certifications.title') }}</h4>
                                    <p class="text-gray-500 text-base font-normal leading-relaxed">{{ t('about.sections.certifications.description') }}</p>
                                </div>
                                <div
                                    class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 class="text-graslate-700 dark:text-slate-100 text-2xl font-bold font-manrope leading-9">99% {{ t('about.sections.happyClients.title') }}</h4>
                                    <p class="text-gray-500 text-base font-normal leading-relaxed">{{ t('about.sections.happyClients.description') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                        <span
                            class="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">{{ t('about.myResume') }}</span>
                        <svg class="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" stroke-width="1.6"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="w-full lg:justify-start justify-center items-start flex">
                    <div
                        class="w-full h-full sm:border rounded-full bg-slate-700 dark:bg-slate-100 border-gray-200 relative">
                        <img class="sm:mt-5 sm:ml-5 w-full h-full object-cover rounded-full"
                            src="/src/assets/images/profile.png" alt="Chrislain AVOCEGAN Photo" />
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* Ajoutez vos styles CSS ici */
.page-wrapper {
  margin-bottom: 20px;
}
.timeline {
  list-style: none;
  padding: 0;
}
.float-right {
  float: right;
}
</style>
