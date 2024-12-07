<template>
  <div class="container mx-auto py-8">
    <!-- Page Header -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-slate-100">Tableau de Bord</h1>
      <RouterLink
        to="/"
        class="text-blue-500 hover:text-blue-600 underline text-sm"
      >
        Retour à l'accueil
      </RouterLink>
    </div>

    <!-- Tabs Navigation -->
    <div class="flex border-b border-gray-300 dark:border-slate-700 mb-6">
      <button
        class="px-4 py-2 -mb-px text-gray-700 dark:text-slate-100 border-b-2 font-medium focus:outline-none"
        :class="activeTab === 'posts' ? 'border-blue-500' : 'border-transparent'"
        @click="activeTab = 'posts'"
      >
        Posts
      </button>
      <button
        class="px-4 py-2 -mb-px text-gray-700 dark:text-slate-100 border-b-2 font-medium focus:outline-none"
        :class="activeTab === 'tags' ? 'border-blue-500' : 'border-transparent'"
        @click="activeTab = 'tags'"
      >
        Tags
      </button>
    </div>

    <!-- Content of the Active Tab -->
    <div v-if="activeTab === 'posts'">
      <!-- Posts Section -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-slate-100 mb-4">Liste des Posts</h2>
        <div class="mb-4 flex justify-end">
          <button
            @click="showAddPostModal = true"
            class="flex items-center justify-center text-white bg-slate-950 hover:bg-slate-800 py-2 px-4 rounded-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
        <div v-if="loadingPosts" class="text-center text-gray-500">
          Chargement des posts...
        </div>
        <div v-else-if="errorPosts" class="text-center text-red-500">
          {{ errorPosts }}
        </div>
        <div v-else>
          <table class="table-auto w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-200 dark:bg-slate-800">
                <th class="p-2 border-b">Titre</th>
                <th class="p-2 border-b">Statut</th>
                <th class="p-2 border-b">Créé le</th>
                <th class="p-2 border-b text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="post in posts"
                :key="post.id"
                class="transition"
              >
                <td class="p-2 border-b">{{ post.title }}</td>
                <td class="p-2 border-b">
                  <span
                    class="py-1 px-3"
                    :class="post.is_active
                      ? 'text-green-700'
                      : 'text-red-700'"
                  >
                    <span v-html="post.is_active ? actif : inactif"></span>
                  </span>
                </td>
                <td class="p-2 border-b">
                  {{ new Date(post.created_at).toLocaleDateString() }}
                </td>
                <td class="p-2 border-b text-right">
                  <button
                    @click="editPost(post.id)"
                    class="text-blue-500 hover:text-blue-600 mx-2"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>

                  </button>
                  <button
                    @click="deletePost(post.id)"
                    class="text-red-500 hover:text-red-600 mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                  <button
                    @click="toggleStatus(post.id)"
                    class="text-gray-500 hover:text-gray-600 mx-2 w-5"
                  >
                  <span v-html="post.is_active ? hideEye : eye"></span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'tags'">
      <!-- Tags Section -->
      <div class="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-slate-100 mb-4">Liste des Tags</h2>
        <div class="mb-4 flex justify-end">
          <button
            @click="showAddTagModal = true"
            class="flex items-center justify-center text-white bg-slate-950 hover:bg-slate-800 py-2 px-4 rounded-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
        <div v-if="loadingTags" class="text-center text-gray-500">
          Chargement des tags...
        </div>
        <div v-else-if="errorTags" class="text-center text-red-500">
          {{ errorTags }}
        </div>
        <div v-else>
          <ul>
            <li
              v-for="tag in tags"
              :key="tag.id"
              class="p-2 border-b border-gray-300 dark:border-slate-700"
            >
              {{ tag.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Modale -->
    <div
      v-if="showAddTagModal"
      class="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50"
    >
      <div class="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 class="text-lg font-bold text-gray-800 dark:text-slate-100 mb-4">
          Ajouter un Tag
        </h2>

        <form @submit.prevent="addTag">
          <div class="mb-4">
            <label
              for="tag"
              class="block text-sm font-medium text-gray-700 dark:text-slate-300"
            >
              Nom du Tag
            </label>
            <input
              type="text"
              id="tag"
              v-model="tagName"
              required
              class="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-slate-100"
            />
          </div>

          <div class="flex justify-end space-x-2">
            <button
              type="button"
              @click="closeModalTag"
              class="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600"
            >
              Annuler
            </button>
            <button
              type="submit"
              class="bg-slate-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-900"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>

    <div
  v-if="showAddPostModal"
  class="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 overflow-y-auto transition-opacity duration-300"
>
  <div class="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8 max-w-lg w-full animate__animated animate__zoomIn">
    <h2 class="text-lg font-bold text-gray-800 dark:text-slate-100 mb-4">
      Ajouter un Post
    </h2>

    <form @submit.prevent="addPost">
      <!-- Champ Titre -->
      <div class="mb-4">
        <label
          for="title"
          class="block text-sm font-medium text-gray-700 dark:text-slate-300"
        >
          Titre
        </label>
        <input
          type="text"
          id="title"
          v-model="postTitle"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-slate-100 transition duration-300 ease-in-out"
        />
      </div>

      <!-- Champ Description -->
      <div class="mb-4">
        <label
          for="description"
          class="block text-sm font-medium text-gray-700 dark:text-slate-300"
        >
          Description
        </label>
        <textarea
          id="description"
          v-model="postDescription"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-slate-100 transition duration-300 ease-in-out"
        ></textarea>
      </div>

      <!-- Champ Image -->
      <div class="mb-4">
        <label
          for="image"
          class="block text-sm font-medium text-gray-700 dark:text-slate-300"
        >
          Image
        </label>
        <input
          type="file"
          id="image"
          v-on:change="postImage"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-slate-100 transition duration-300 ease-in-out"
        />
      </div>

      <!-- Champ Tags -->
      <div class="mb-4">
        <label
          for="tags"
          class="block text-sm font-medium text-gray-700 dark:text-slate-300"
        >
          Tags
        </label>
        <multiselect
  v-model="postTags"
  :options="tags"
  track-by="id"
  label="name"
  multiple
  placeholder="Sélectionnez des tags"
  class="rounded-md shadow-sm"
/>

      </div>

      <div class="mb-4 flex items-center space-x-2">
        <label
          for="status"
          class="block text-sm font-medium text-gray-700 dark:text-slate-300"
        >
          Statut
        </label>
        <input
          type="checkbox"
          id="status"
          v-model="postIsActive"
          class="h-4 w-4 border-gray-300 dark:border-slate-700 rounded transition duration-300 ease-in-out"
        />
        <span class="text-gray-900 dark:text-slate-100">{{ postIsActive ? 'Actif' : 'Inactif' }}</span>
      </div>

      <!-- Boutons d'actions -->
      <div class="flex justify-end space-x-2 mt-6">
        <button
          type="button"
          @click="closeModalPost"
          class="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700 transition duration-300 ease-in-out"
        >
          Annuler
        </button>
        <button
          type="submit"
          class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        >
          Ajouter
        </button>
      </div>
    </form>
  </div>
</div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';
import multiselect from 'vue-multiselect';

// Active tab
const activeTab = ref('posts');

// Data for posts
const posts = ref([]);
const loadingPosts = ref(true);
const errorPosts = ref(null);

// Data for tags
const tags = ref([]);
const loadingTags = ref(true);
const errorTags = ref(null);

const actif = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
`;

const inactif = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

`;

const eye = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
`;

const hideEye = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>
`;

// Fetch posts
async function fetchPosts() {
  try {
    const { data, error: fetchError } = await supabase
      .from('posts')
      .select('id, title, description, is_active, created_at');

    if (fetchError) throw fetchError;

    posts.value = data;
  } catch (err) {
    errorPosts.value = 'Impossible de charger les posts : ' + err.message;
  } finally {
    loadingPosts.value = false;
  }
}

// Fetch tags
async function fetchTags() {
  try {
    const { data, error: fetchError } = await supabase
      .from('tags')
      .select('id, name');
    if (fetchError) throw fetchError;

    tags.value = data;
  } catch (err) {
    errorTags.value = 'Impossible de charger les tags : ' + err.message;
  } finally {
    loadingTags.value = false;
  }
}

  // Open modals
  const showAddTagModal = ref(false);
  const tagName = ref('');

  const showAddPostModal = ref(false);
  const postTitle = ref('');
  const postDescription = ref('');
  const postImage = ref('');
  const postTags = ref([]);
  const postIsActive = ref(false);

function closeModalTag() {
  showAddTagModal.value = false;
  tagName.value = '';
}

function closeModalPost() {
  showAddPostModal.value = false;
  postTitle.value = '';
  postDescription.value = '';
  postImage.value = '';
  postTags.value = null;
  postIsActive.value = false;
}

async function addTag() {
  try {
    const { error } = await supabase.from('tags').insert({ name: tagName.value });
    if (error) throw error;
    alert('Tag ajouté avec succès !');
    closeModalTag();
  } catch (err) {
    alert('Erreur : ' + err.message);
  }
}

async function addPost() {
  try {
    const { error } = await supabase.from('posts').insert(
      { title: postTitle.value,
        description: postDescription.value,
        image: postImage.value,
        is_active: postIsActive.value
       }
    );
    if (error) throw error;
    alert('Post ajouté avec succès !');
    closeModalPost();
  } catch (err) {
    alert('Erreur : ' + err.message);
  }
}

function toggleStatus(postId) {
  const post = posts.value.find((p) => p.id === postId);
  post.is_active = !post.is_active;
  alert(
    `Le post ${postId} est maintenant ${
      post.is_active ? 'actif' : 'désactivé'
    }.`
  );
}

// Fetch data on mount
onMounted(() => {
  fetchPosts();
  fetchTags();
});
</script>

<style scoped>
.container {
  max-width: 1000px;
}
</style>
