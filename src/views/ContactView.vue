<template>
  <div class="relative">
    <div class="container mx-auto mb-10">
      <div class="max-w-6xl mx-auto p-6">
        <h2 class="text-2xl animate-fade-right lg:text-4xl font-thin my-5 lg:flex lg:justify-start bg-gradient-to-b from-indigo-400 to-green-600 bg-clip-text text-transparent tracking-tight">
          {{ t('contact.title') }}.
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <!-- Formulaire de contact -->
          <form @submit.prevent="handleSubmit" class="mb-6 lg:mb-0 animate-fade-left">
            <div class="mb-4">
              <label for="name" class="block text-sm font-bold mb-2">{{ t('contact.form.nameLabel') }}</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="w-full border border-gray-300 rounded p-2 text-slate-700"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-sm font-bold mb-2">{{ t('contact.form.emailLabel') }}</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="w-full border border-gray-300 rounded p-2 text-slate-700"
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-sm font-bold mb-2">{{ t('contact.form.messageLabel') }}</label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                class="w-full border border-gray-300 rounded p-2 h-32 text-slate-700  "
              ></textarea>
            </div>
            <div class="flex space-x-5">
              <button
                type="submit"
                :disabled="isLoading"
                class="bg-black text-white dark:bg-slate-100 dark:text-slate-700 font-bold py-2 px-4 rounded transition duration-300"
                :class="{ 'bg-gray-500 cursor-not-allowed': isLoading, 'hover:bg-gray-800': !isLoading }"
              >
                {{ isLoading ? t('contact.form.sendingButton') : t('contact.form.sendButton') }}
              </button>
              <p
                v-if="success"
                class="max-w-md bg-green-500 text-white font-bold py-2 px-4 rounded"
              >
                {{ t('contact.form.successMessage') }}
              </p>
              <p
                v-if="error"
                class="max-w-md bg-red-500 text-white font-bold py-2 px-4 rounded"
              >
                {{ error }}
              </p>
            </div>
          </form>

          <!-- Informations de contact -->
          <div class="animate-fade animate-duration-[2000ms] animate-alternate">
            <h2 class="text-2xl font-bold mb-8 underline underline-offset-4">
              {{ t('contact.information.title') }}
            </h2>
            <p class="mb-4">
              <strong>{{ t('contact.information.emailLabel') }}: </strong>
              <a href="mailto:chrislainavocegan24@gmail.com" class="text-blue-500">
                chrislainavocegan24@gmail.com
              </a>
            </p>
            <p class="mb-4">
              <strong>{{ t('contact.information.phoneLabel') }}: </strong>
              <span class="text-blue-500">+221 77 681 52 08</span>
            </p>
            <p class="mb-4">
              <strong>{{ t('contact.information.comeUpLabel') }}: </strong>
              <a
                href="https://comeup.com/fr/@chrislain-code"
                class="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://comeup.com/fr/@chrislain-code
              </a>
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-100 font-thin mt-2">
              <em v-html="t('contact.information.securityMessage')"></em>
            </p>
          </div>
        </div>

        <!-- Localisation -->
        <div class="mt-8">
          <h2 class="text-2xl font-bold mb-4">{{ t('contact.location.title') }}</h2>
          <iframe
            class="w-full h-64"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201205.56305904582!2d-17.434477515370712!3d14.703479228719893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe8350a657764dd7%3A0xb6a927b1d3f1782e!2sDakar%20Libert%C3%A9%205!5e0!3m2!1sen!2sne!4v1696827321688!5m2!1sen!2sne"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  import emailjs from "emailjs-com"
  import { useI18n } from "vue-i18n"
  import { useHead } from '@vueuse/head'

  const { t } = useI18n()

  // Données du formulaire
  const formData = ref({
    name: "",
    email: "",
    message: "",
  });

  // États pour gérer le feedback utilisateur
  const isLoading = ref(false);
  const success = ref(false);
  const error = ref(false);

  // Fonction pour envoyer l'email
  const handleSubmit = () => {
    isLoading.value = true;
    success.value = false;
    error.value = false;

    emailjs
      .send(
        "service_s8592se",
        "template_ik22uc1",
        formData.value,
        "L8vifVhyMRH4ZlB9v"
      )
      .then(
        () => {
          success.value = true; // Succès
          formData.value = { name: "", email: "", message: "" };

          // Réinitialiser success après 5 secondes
          setTimeout(() => {
            success.value = false;
          }, 5000);
        },
        (err) => {
          console.error("Erreur :", err);
          error.value = true; // Erreur
        }
      )
      .finally(() => {
        isLoading.value = false; // Fin du chargement
      });
  };

  useHead({
  title: 'Contact - Code With Chris',
  meta: [
    {
      name: 'description',
      content: 'Contactez Chrislain AVOCEGAN, développeur web full stack spécialisé en Laravel, Vue.js, et Tailwind CSS. Posez vos questions ou collaborez sur vos projets web.'
    },
    {
      name: 'keywords',
      content: 'Contact, Code With Chris, Chrislain AVOCEGAN, Laravel, Vue.js, Tailwind CSS, Développeur Full Stack, Collaborer, Projets web'
    },
    {
      property: 'og:title',
      content: 'Contact - Code With Chris'
    },
    {
      property: 'og:description',
      content: 'Prenez contact avec Chrislain AVOCEGAN pour discuter de vos besoins en développement web et découvrir comment il peut vous aider à atteindre vos objectifs.'
    },
    {
      property: 'og:image',
      content: 'https://chrislainavocegan.site/preview-image.png'
    },
    {
      property: 'og:url',
      content: 'https://chrislainavocegan.site/contact'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'author',
      content: 'Chrislain AVOCEGAN'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]
});


</script>

<style scoped>
</style>

