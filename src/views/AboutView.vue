<template>
  <div class="relative py-16 overflow-hidden">
    <!-- Background decorative elements -->

    <div class="container mx-auto mb-10 relative">
      <div class="max-w-6xl mx-auto px-6">
        <!-- Enhanced title with better typography -->
        <div class="text-center lg:text-left mb-16">
          <h2
          class="text-2xl lg:text-4xl animate-fade-right font-thin my-5 lg:flex lg:justify-start bg-gradient-to-b from-indigo-400 to-green-600 bg-clip-text text-transparent tracking-tight animate-fade-in-down"
        >  {{ t('about.title') }}.
          </h2>
          <p class="text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-light tracking-wide animate-fade-in-up delay-100">
            <span class="text-indigo-600 dark:text-indigo-400">// Zylo</span> - Crafting digital experiences with passion
          </p>
        </div>

        <!-- Enhanced description with better spacing -->
        <div class="prose dark:prose-invert max-w-none text-justify mb-20 px-6 md:px-0">
          <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg animate-fade-in-up delay-200">
            <p class="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300 italic">
              <span class=" space-y-4" v-html="t('about.longDescription')"></span>
            </p>
          </div>
        </div>

        <!-- Enhanced stats grid with better animations -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <StatCard
            :value="t('about.sections.workedYears.description')"
            :label="t('about.sections.workedYears.title')"
            icon="👨‍💻"
            class="animate-fade-in-up delay-300"
          />
          <StatCard
            value="50+"
            :label="t('about.sections.workedProjects.title')"
            icon="🚀"
            class="animate-fade-in-up delay-400"
          />
          <StatCard
            :value="t('about.sections.certifications.description')"
            :label="t('about.sections.certifications.title')"
            icon="🏆"
            class="animate-fade-in-up delay-500"
          />
          <StatCard
            :value="t('about.sections.happyClients.description')"
            :label="t('about.sections.happyClients.title')"
            icon="❤️"
            class="animate-fade-in-up delay-600"
          />
        </div>

        <!-- Enhanced main content grid -->
        <div class="grid lg:grid-cols-2 gap-16 items-start">
          <!-- Left column - Experience timeline -->
          <div class="animate-fade-in-left delay-700">
            <div class="mb-12">
              <h3 class="text-2xl font-semibold mb-8 text-indigo-600 dark:text-indigo-400 flex items-center">
                <div class="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-3">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                {{ t('resume.experience.title') }}
              </h3>

              <Timeline :items="t('resume.experience.items')" />
            </div>

            <!-- Enhanced CTA button -->
            <div class="flex flex-col sm:flex-row gap-4">
              <RouterLink
                to="/resume"
                class="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-medium rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
              >
                <span>{{ t('about.myResume') }}</span>
                <svg class="ml-3 group-hover:translate-x-2 transition-transform duration-300" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </RouterLink>

              <button class="group inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 text-lg font-medium rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                <span>Get In Touch</span>
                <svg class="ml-3 group-hover:scale-110 transition-transform duration-300" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 8L12 13L3 8M21 8V16C21 16.5523 20.5523 17 20 17H4C3.44772 17 3 16.5523 3 16V8M21 8L20.1154 7.25792C19.8467 7.06902 19.5272 6.96967 19.2 6.96967H4.8C4.47279 6.96967 4.15332 7.06902 3.88462 7.25792L3 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Right column - Enhanced profile image -->
          <div class="relative flex justify-center animate-fade-in-right delay-800">
            <div class="relative group">
              <!-- Floating elements around image -->
              <div class="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500 rounded-full opacity-80 animate-bounce delay-1000"></div>
              <div class="absolute -bottom-6 -right-6 w-6 h-6 bg-green-500 rounded-full opacity-80 animate-bounce delay-1500"></div>
              <div class="absolute top-1/2 -left-8 w-4 h-4 bg-purple-500 rounded-full opacity-80 animate-pulse delay-2000"></div>

              <!-- Main image container -->
              <div class="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  class="w-full max-w-md transform transition-all duration-700 group-hover:scale-105"
                  src="/assets/images/chrislain.jpg"
                  alt="Chrislain AVOCEGAN Photo"
                >
                <!-- Gradient overlay -->
                <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <!-- Interactive highlight border -->
                <div class="absolute inset-0 rounded-2xl ring-2 ring-indigo-500/0 group-hover:ring-indigo-500/50 transition-all duration-700"></div>
              </div>

              <!-- Background glow effect -->
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-green-500 opacity-20 blur-xl transform scale-110 group-hover:opacity-30 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import { RouterLink } from 'vue-router'
import StatCard from '@/components/elements/StatCard.vue'
import Timeline from '@/components/elements/TimeLine.vue'

const { t } = useI18n()

useHead({
  title: t('about.title') + ' - Zylo',
  meta: [
    {
      name: 'description',
      content: t('about.description')
    },
    {
      property: 'og:title',
      content: t('about.title') + ' - Zylo'
    },
    {
      property: 'og:description',
      content: t('about.description')
    }
  ]
})
</script>

<style scoped>
/* Enhanced animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
}

/* Delay classes for staggered animations */
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
.delay-600 { animation-delay: 0.6s; }
.delay-700 { animation-delay: 0.7s; }
.delay-800 { animation-delay: 0.8s; }
.delay-1000 { animation-delay: 1s; }
.delay-1500 { animation-delay: 1.5s; }
.delay-2000 { animation-delay: 2s; }

/* Enhanced prose styling */
.prose :deep(a) {
  @apply text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300;
}

/* Smooth scrolling for better UX */
html {
  scroll-behavior: smooth;
}
</style>
