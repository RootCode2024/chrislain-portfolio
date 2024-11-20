<template>
  <div class="relative">
    <!-- Page Content -->
    <div class="container mx-auto mb-10">
      <div class="max-w-6xl mx-auto p-6">
        <h1 class="text-3xl font-bold mb-6">{{ t('contact.title') }}</h1>

        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <!-- Formulaire de contact -->
          <form @submit.prevent="handleSubmit" method="POST" class="mb-6 lg:mb-0">
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
                class="bg-black text-white font-bold py-2 px-4 rounded transition duration-300"
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
          <div>
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
import { ref } from "vue";
import { useI18n } from 'vue-i18n';

// Initialisation de `useI18n` pour la traduction
const { t } = useI18n();

// Données du formulaire
const formData = ref({
  name: "",
  email: "",
  message: "",
});

// États pour gérer l'affichage
const isLoading = ref(false);
const success = ref(false);
const error = ref("");

// Fonction pour gérer la soumission du formulaire
const handleSubmit = async () => {
  try {
    isLoading.value = true; // Indique que le formulaire est en cours de traitement
    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      // Réinitialisation du formulaire en cas de succès
      success.value = true;
      formData.value = { name: "", email: "", message: "" };
    } else {
      // Gestion d'une erreur côté serveur
      error.value = t('contact.form.errorMessage');
    }
  } catch (err) {
    // Gestion des erreurs réseau ou côté client
    console.error("Erreur lors de l'envoi du formulaire :", err);
    error.value = t('contact.form.errorMessage');
  } finally {
    isLoading.value = false; // Fin du chargement

    // Réinitialisation des états après un délai
    setTimeout(() => {
      success.value = false;
      error.value = "";
    }, 2000);
  }
};
</script>

<style scoped>
</style>

