<template>
  <div>
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 flex justify-end">
      <button
        class="print-button bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-600"
        @click="showDialog = true"
      >
        {{ t('resume.downloadButton') }}
      </button>
    </div>
    <section class="cv-container">
      <div class="header">
        <h1>{{ t('resume.header.name') }}</h1>
        <h2>{{ t('resume.header.title') }}</h2>
      </div>
      <div class="content">
        <!-- Coordonnées -->
        <div class="section">
          <h3>{{ t('resume.contact.title') }}</h3>
          <p><strong>{{ t('resume.contact.phone') }} : </strong>+221 77 681 52 08</p>
          <p><strong>{{ t('resume.contact.email') }} : </strong>chrislainavocegan24@gmail.com</p>
          <p><strong>{{ t('resume.contact.address') }} : </strong>Dakar, Sénégal.</p>
        </div>

<!-- Formation -->
<div class="section">
  <h3>{{ t('resume.education.title') }}</h3>
  <ul>
    <li v-for="(education, index) in educations" :key="index">
      <strong>{{ education.degree }} - {{ education.institution }}</strong>
      <br />
      {{ education.year }}
    </li>
  </ul>
</div>

        <!-- Expérience Professionnelle -->
        <div class="section">
          <h3>{{ t('resume.experience.title') }}</h3>
          <ul>
            <li v-for="(item, index) in experiences" :key="index">
              <strong>{{ item.role }} - {{ item.company }}</strong>
              <br />
              <em>{{ item.period }}</em>
              <ul>
                <li v-for="(detail, detailIndex) in item.details" :key="detailIndex">
                  {{ detail }}
                </li>
              </ul>
            </li>
          </ul>
        </div>

      <!-- Compétences -->
        <div class="section">
          <h3>{{ t('resume.skills.title') }}</h3>
          <ul>
            <li v-for="(skill, skillIndex) in skills" :key="skillIndex">
              {{ skill }}
            </li>
          </ul>
        </div>

        <!-- Centres d'intérêt -->
        <div class="section">
          <h3>{{ t('resume.interests.title') }}</h3>
          <ul>
            <li v-for="(interest, interestIndex) in hobbies" :key="interestIndex">
              {{ interest }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Dialog pour choisir la langue -->
    <div v-show="showDialog" class="dialog-overlay">
      <div class="dialog">
        <h2>{{ t('resume.dialog.title') }}</h2>
        <form @submit.prevent="downloadResume">
          <label for="lang">{{ t('resume.dialog.languageLabel') }}</label>
          <select v-model="selectedLanguage" id="lang">
            <option value="fr">{{ t('resume.dialog.french') }}</option>
            <option value="en">{{ t('resume.dialog.english') }}</option>
          </select>
          <button type="submit">{{ t('resume.dialog.submitButton') }}</button>
        </form>
        <button class="close-button" @click="showDialog = false">{{ t('resume.dialog.closeButton') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const showDialog = ref(false);
const selectedLanguage = ref('fr'); // Langue par défaut

const downloadResume = () => {
  const lang = selectedLanguage.value;
  const link = document.createElement('a');
  link.href = `/assets/doc/chrislain_avocegan_cv_${lang}.pdf`;
  link.download = `chrislain_avocegan_cv_${lang}.pdf`;
  link.click();
  showDialog.value = false; // Ferme la boîte de dialogue après téléchargement
};

const educations = computed(() => {
  return t('resume.education.items', { defaultValue: [] });
});
const experiences = computed(() => t('resume.experience.items'));
const skills = computed(() => t('resume.skills.items'));
const hobbies = computed(() => t('resume.interests.items'));

console.log(useI18n().messages);
</script>


<style scoped>
  /* Styles principaux */
    .cv-container {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .header {
      text-align: center;
      margin-bottom: 20px;
    }

    .header h1 {
      font-size: 2rem;
      margin: 0;
      color: #1e40af;
    }

    .header h2 {
      font-size: 1.2rem;
      color: #2563eb;
      font-weight: normal;
    }

    .section {
      margin-bottom: 20px;
    }

    .section h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #1e40af;
    }

    .section ul {
      padding-left: 20px;
    }

    .section ul li {
      margin-bottom: 10px;
    }

    .section ul li ul {
      padding-left: 20px;
    }

    .section ul li ul li {
      list-style-type: circle;
    }

  /* Styles pour la boîte de dialogue */
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .dialog {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .dialog h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: #1e40af;
  }

  .dialog form {
    display: flex;
    flex-direction: column;
  }

  .dialog form label {
    margin-bottom: 5px;
    font-weight: bold;
  }

  .dialog form select {
    margin-bottom: 15px;
    padding: 5px;
    font-size: 1rem;
  }

  .dialog button {
    padding: 10px;
    background: #1e40af;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .dialog button:hover {
    background: #2563eb;
  }

  .close-button {
    background: #e3342f;
    margin-top: 10px;
  }

  .close-button:hover {
    background: #cc1f1a;
  }
</style>
