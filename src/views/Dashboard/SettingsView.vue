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
                <th class="p-2 border-b">Tags</th>
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
                    <span v-if="post.is_active === true">
                      <IconActif />
                    </span>
                    <span v-else>
                      <IconInactif />
                    </span>
                  </span>
                </td>
                <td class="p-2 border-b">
                  tags
                </td>

                  <td class="p-2 border-b">
                    {{ new Date(post.created_at).toLocaleDateString() }}
                  </td>
                <td class="p-2 border-b text-right">
                  <button
                    @click="editPost(post.id)"
                    class="text-blue-500 hover:text-blue-600 mx-2"
                  >
                    <IconEdit />
                  </button>
                  <button
                    @click="deletePost(post.id)"
                    class="text-red-500 hover:text-red-600 mx-2">
                    <IconCorbeille />
                  </button>
                  <button
                    @click="toggleStatus(post.id)"
                    class="text-gray-500 hover:text-gray-600 mx-2 w-5"
                  >
                  <span v-if="post.is_active === true">
                    <IconHideEye />
                  </span>
                  <span v-else>
                    <IconEye />
                  </span>
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
              class="p-2 border-b border-gray-300 dark:border-slate-700 flex justify-between items-center"
            >
          <span>{{ tag.name }}</span>
        <div class="flex items-center space-x-2">
          <button @click="editTag(tag.id)" class="text-blue-500 hover:text-blue-600">
            <IconEdit />
          </button>
          <button @click="deleteTag(tag.id)" class="text-red-500 hover:text-red-600">
            <IconCorbeille />
          </button>
        </div>
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

        <form @submit.prevent="uploadAndAddPost">
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
              @change="onFileSelected"
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

  <!-- Modal de modification de tag -->
  <div v-if="showEditTagModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
    <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg w-full max-w-md">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">Modifier le tag</h2>
      <form @submit.prevent="updateTag">
        <div class="mb-4">
          <label for="editTagName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nom du tag
          </label>
          <input
            id="editTagName"
            type="text"
            v-model="tagEditing"
            class="mt-1 block w-full rounded-md border-gray-300 dark:border-slate-700 dark:bg-slate-900 placeholder:bg-slate-800 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div class="flex justify-end space-x-2">
          <button
            type="button"
            @click="showEditTagModal = false"
            class="px-4 py-2 bg-gray-300 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-400 dark:hover:bg-slate-600"
          >
            Annuler
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// Imports
import { ref, onMounted } from 'vue';
import { supabase } from '../../lib/supabaseClient';
import multiselect from 'vue-multiselect';
import IconActif from '@/components/icons/IconActif.vue';
import IconInactif from '@/components/icons/IconInactif.vue';
import IconEye from '@/components/icons/IconEye.vue';
import IconHideEye from '@/components/icons/IconHideEye.vue';
import IconCorbeille from '@/components/icons/IconCorbeille.vue';
import IconEdit from '@/components/icons/IconEdit.vue';

// Reactive state variables
// Active tab
const activeTab = ref('posts');

// Posts data
const posts = ref([]);
const loadingPosts = ref(true);
const errorPosts = ref(null);

// Tags data
const tags = ref([]);
const loadingTags = ref(true);
const errorTags = ref(null);

// Modals and form data
const showAddTagModal = ref(false);
const tagName = ref('');
const showAddPostModal = ref(false);
const postTitle = ref('');
const postDescription = ref('');
const postImage = ref(null); // For image file input
const postTags = ref([]);
const postIsActive = ref(false);
const selectedFile = ref(null);

// Edit Tag Modal
const showEditTagModal = ref(false);
const editTagId = ref(null);
const editTagName = ref('');

// Fetch functions
async function fetchPosts() {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select(`
        id,
        title,
        description,
        is_active,
        created_at
      `);

    if (error) throw error;

    // Transform the tags structure for easier access
    posts.value = data.map(post => ({
      ...post,
      // tags: post.post_tags.map(tag => tag.tag.name),
    }));

  } catch (err) {
    errorPosts.value = 'Impossible de charger les posts : ' + err.message;
  } finally {
    loadingPosts.value = false;
  }
}


async function fetchTags() {
  try {
    const { data, error } = await supabase
      .from('tags')
      .select('id, name');
    if (error) throw error;
    tags.value = data;
  } catch (err) {
    errorTags.value = 'Impossible de charger les tags : ' + err.message;
  } finally {
    loadingTags.value = false;
  }
}

// Modal management functions
function closeModalTag() {
  showAddTagModal.value = false;
  tagName.value = '';
}

function closeModalPost() {
  showAddPostModal.value = false;
  postTitle.value = '';
  postDescription.value = '';
  postImage.value = null;
  postTags.value = [];
  postIsActive.value = false;
}

// Tag management functions
async function addTag() {
  try {
    const { error } = await supabase.from('tags').insert({ name: tagName.value });
    if (error) throw error;
    alert('Tag ajouté avec succès !');
    closeModalTag();
    await fetchTags();
  } catch (err) {
    alert('Erreur : ' + err.message);
  }
}

async function deleteTag(tagId) {
  try {
    const { error } = await supabase.from('tags').delete().eq('id', tagId);
    if (error) throw error;
    alert('Tag supprimé avec succès !');
    await fetchTags();
  } catch (err) {
    alert('Erreur : ' + err.message);
  }
}

const tagEditing = ref(null);
async function editTag(tagId) {
  const tag = tags.value.find(t => t.id === tagId);
  if (tag) {
    tagEditing.value = tag.name;
  }
  showEditTagModal.value = true;
  editTagId.value = tagId;
}

async function updateTag() {
  try {
    const { error } = await supabase
      .from('tags')
      .update({ name: tagEditing.value })
      .eq('id', editTagId.value);
    if (error) throw error;
    alert('Tag mis à jour avec succès !');
    showEditTagModal.value = false;
    editTagId.value = null;
    editTagName.value = '';
    await fetchTags();
  } catch (err) {
    alert('Erreur : ' + err.message);
  }
}

// Post management functions
async function deletePost(postId) {
  try {
    const { error } = await supabase.from('posts').delete().eq('id', postId);
    if (error) throw error;
    alert('Post supprimé avec succès !');
    await fetchPosts();
  } catch (err) {
    alert('Erreur : ' + err.message);
  }
}

function onFileSelected(event) {
  selectedFile.value = event.target.files[0];
}

async function uploadAndAddPost() {
  try {
    // Upload image to Supabase Storage
    const { data, error } = await supabase.storage
      .from('FileStorage')
      .upload(`images/blog/${selectedFile.value.name}`, selectedFile.value);

    if (error) throw error;

    // Insert post details into the `posts` table
    const { data: postData, error: postError } = await supabase
      .from('posts')
      .insert({
        title: postTitle.value,
        description: postDescription.value,
        content: '',
        image: data.path,
        is_active: postIsActive.value,
      })
      .select('id');

    if (postError) throw postError;

    const postId = postData[0]?.id;

    // Insert post/tag relationships into `post_tags`
    if (postTags.value.length > 0) {
      const tagIds = postTags.value.map(tag => tag.id);
      const tagsData = tagIds.map(tagId => ({ post_id: postId, tag_id: tagId }));

      const { error: tagsInsertError } = await supabase
        .from('post_tags')
        .insert(tagsData);

      if (tagsInsertError) throw tagsInsertError;
    }

    alert('Post ajouté avec succès !');
    closeModalPost();
    await fetchPosts();
  } catch (err) {
    console.error(err);
    alert('Erreur : ' + err.message);
  }
}

function toggleStatus(postId) {
  const post = posts.value.find(p => p.id === postId);
  if (post) {
    post.is_active = !post.is_active;
    alert(
      `Le post ${postId} est maintenant ${post.is_active ? 'actif' : 'désactivé'}.`
    );
  }
}
console.log(posts.value)
// Lifecycle hooks
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
