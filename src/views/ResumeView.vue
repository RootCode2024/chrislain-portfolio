<template>
  <div>

    <!-- Bouton de téléchargement -->
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 flex justify-end md:fixed fixed">
      <button
        class="print-button bg-slate-700 dark:bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-600"
        @click="showDialog = true"
      >
        {{ t('resume.downloadButton') }}
      </button>
    </div>

    <!-- CV -->
    <section class="cv-container bg-slate-200 dark:bg-slate-800">
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
            <li v-for="(interest, interestIndex) in interests" :key="interestIndex">
              {{ interest }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Dialog pour choisir la langue -->
    <div v-show="showDialog" class="dialog-overlay">
      <div class="dialog bg-slate-100 dark:bg-slate-700">
        <h2>{{ t('resume.dialog.title') }}</h2>
        <form @submit.prevent="downloadResume">
          <label for="lang">{{ t('resume.dialog.languageLabel') }}</label>
          <select v-model="selectedLanguage" class="text-black" id="lang">
            <option value="fr" class="text-black">{{ t('resume.dialog.french') }}</option>
            <option value="en" class="text-black">{{ t('resume.dialog.english') }}</option>
          </select>
          <button type="submit" class="bg-green-400 hover:bg-green-600">{{ t('resume.dialog.submitButton') }}</button>
        </form>
        <button class="close-button bg-red-800 hover:bg-red-950 mt-3" @click="showDialog = false">{{ t('resume.dialog.closeButton') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t, locale } = useI18n(); // Récupère la locale courante et les fonctions de traduction

  const showDialog = ref(false);
  const selectedLanguage = ref(locale.value); // Définit la langue par défaut

  const downloadResume = () => {
    const lang = selectedLanguage.value;
    const link = document.createElement('a');
    link.href = `/assets/doc/chrislain_avocegan_cv_${lang}.pdf`;
    link.download = `chrislain_avocegan_cv_${lang}.pdf`;
    link.click();
    showDialog.value = false; // Ferme la boîte de dialogue après téléchargement
  };

  // Initialisation des éducations
  const educations = ref([]);
  const experiences = ref([]);
  const skills = ref([]);
  const interests = ref([]);

  const updateEducations = () => {
    if (locale.value === 'en') {
      educations.value = [
        {
          degree: "Bachelor's in Software Engineering",
          institution: "IPG-ISTI, Dakar",
          year: "2018 - 2021"
        },
        {
          degree: "Scientific High School Diploma",
          institution: "Porto-Novo, Benin",
          year: "2016 - 2017"
        }
      ];

      experiences.value = [
        {
          role: "Project Manager Laravel/Flutter",
          company: "Nahema-Heaven Co.",
          period: "Since February 2023",
          details: [
            "Project planning and schedule management",
            "Resource and budget management",
            "Risk management (identification and mitigation)"
          ]
        },
        {
          role: "WordPress Developer",
          company: "Rohaya Holding, Rufisque",
          period: "September 2022 - January 2023",
          details: [
            "Designing mockups with Figma",
            "Building responsive websites with WordPress",
            "Participating in project follow-up meetings"
          ]
        },
        {
          role: "Project Assistant Intern",
          company: "PMD Developer, Dakar",
          period: "February 2020 - June 2022",
          details: [
            "Backend development with PHP",
            "Contributing to project plans development"
          ]
        }
      ];

      skills.value = [
        "Languages and Frameworks: Laravel, Vue.js, WordPress",
        "Design: Figma, Canvas",
        "CSS Framework: Tailwind CSS"
      ];

      interests.value = [
        "Reading",
        "Roller-blading",
        "Photography",
        "Sports"
      ];
    } else {
      educations.value = [
        {
          degree: "Licence en Génie Logiciel",
          institution: "IPG-ISTI, Dakar",
          year: "2018 - 2021"
        },
        {
          degree: "Baccalauréat Série Scientifique",
          institution: "Porto-Novo, Bénin",
          year: "2016 - 2017"
        }
      ];

      experiences.value = [
        {
          role: "Gestionnaire de projet Laravel/Flutter",
          company: "Nahema-Heaven Co.",
          period: "Depuis Février 2023",
          details: [
            "Élaboration du plan de projet et gestion des calendriers",
            "Gestion des ressources et du budget",
            "Gestion des risques (identification et réactions aux imprévus)"
          ]
        },
        {
          role: "Développeur WordPress",
          company: "Rohaya Holding, Rufisque",
          period: "Septembre 2022 - Janvier 2023",
          details: [
            "Élaboration de maquettes avec Figma",
            "Création de sites web responsive avec WordPress",
            "Participation aux réunions et suivi des projets"
          ]
        },
        {
          role: "Stagiaire Chargé de Projet",
          company: "PMD Developer, Dakar",
          period: "Février 2020 - Juin 2022",
          details: [
            "Développement backend avec PHP",
            "Participation à l'élaboration des plans de projet"
          ]
        }
      ];

      skills.value = [
        "Langages et Frameworks : Laravel, Vue.js, WordPress",
        "Design : Figma, Canvas",
        "CSS Framework : Tailwind CSS"
      ];

      interests.value = [
        "Lecture",
        "Roller-blade",
        "Photographie",
        "Sport"
      ];
    }
  };

  // Met à jour les éducations au chargement initial
  updateEducations();

  // Surveille les changements de langue et met à jour les éducations
  watch(locale, () => {
    updateEducations();
  });
</script>


<style scoped>
  /* Styles principaux */
    .cv-container {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
      font-family: Arial, sans-serif;
      line-height: 1.6;
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
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .dialog {
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.9);
  }

  .dialog h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
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
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }

</style>
