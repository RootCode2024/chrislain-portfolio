<template>
  <div>
    <!-- Breadcrumb Navigation -->
    <nav class="container mx-auto p-4" aria-label="Breadcrumb">
      <ol class="flex items-center space-x-4">
        <li>
          <RouterLink to="/" class="text-gray-600 hover:text-gray-900">
            Accueil
          </RouterLink>
        </li>
        <li>
          <span class="text-gray-600">/</span>
        </li>
        <li>
          <RouterLink to="/posts" class="text-gray-600 hover:text-gray-900">
            Blog
          </RouterLink>
        </li>
        <li>
          <span class="text-gray-600">/</span>
        </li>
        <li class="text-gray-900 font-semibold">
          {{ post?.title }}
        </li>
      </ol>
    </nav>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-6">
      <template v-if="loading">
        <p>Chargement...</p>
      </template>
      <template v-else-if="error">
        <p class="text-red-500">{{ error }}</p>
      </template>
      <template v-else>
        <!-- Post Title -->
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ post.title }}</h1>

        <!-- Post Image -->
        <div class="mb-6">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full rounded-lg shadow-md"
          />
        </div>

        <!-- Post Metadata -->
        <p class="text-sm text-gray-600 mb-4">
          Publié le {{ new Date(post.created_at).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}
        </p>
        <hr class="my-4" />

        <!-- Post Content -->
        <div
          class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto"
          v-html="post.content"
        ></div>

        <!-- Related Posts -->
        <section class="mt-12">
          <h2 class="text-2xl font-semibold mb-6">Articles similaires</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="related in relatedPosts"
              :key="related.id"
              class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
            >
              <RouterLink :to="`/posts/${related.id}`">
                <img
                  :src="related.image"
                  :alt="related.title"
                  class="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 class="text-lg font-bold text-gray-800">{{ related.title }}</h3>
              </RouterLink>
            </div>
          </div>
        </section>

        <!-- Comments Section -->
        <section class="mt-12">
          <h2 class="text-2xl font-semibold mb-6">Commentaires</h2>
          <div v-if="comments.length === 0" class="text-gray-600">Aucun commentaire pour l'instant.</div>
          <div v-else class="space-y-4">
            <div
              v-for="comment in comments"
              :key="comment.id"
              class="bg-gray-100 p-4 rounded-md"
            >
              <p class="text-sm font-semibold">{{ comment.author }}</p>
              <p class="text-sm text-gray-600">{{ comment.created_at }}</p>
              <p class="mt-2">{{ comment.content }}</p>
            </div>
          </div>

          <!-- Add Comment -->
          <div class="mt-6">
            <h3 class="text-lg font-semibold mb-2">Ajouter un commentaire</h3>
            <textarea
              v-model="newComment"
              placeholder="Écrivez votre commentaire ici..."
              class="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-3"
              rows="4"
            ></textarea>
            <button
              @click="submitComment"
              class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Publier
            </button>
          </div>
        </section>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
});

const post = ref(null);
const loading = ref(true);
const error = ref(null);
const relatedPosts = ref([]);
const comments = ref([]);
const newComment = ref('');

const fetchPost = async () => {
  try {
    const { data, error: fetchError } = await supabase
      .from('posts')
      .select()
      .eq('id', props.id)
      .single();

    if (fetchError) throw fetchError;
    post.value = data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const fetchRelatedPosts = async () => {
  try {
    const { data } = await supabase
      .from('posts')
      .select()
      .neq('id', props.id)
      .limit(3);
    relatedPosts.value = data;
  } catch (err) {
    console.error(err);
  }
};

const fetchComments = async () => {
  try {
    const { data } = await supabase
      .from('comments')
      .select()
      .eq('post_id', props.id);
    comments.value = data;
  } catch (err) {
    console.error(err);
  }
};

const submitComment = async () => {
  if (!newComment.value) return;
  try {
    const { error: submitError } = await supabase
      .from('comments')
      .insert([{ content: newComment.value, post_id: props.id }]);
    if (submitError) throw submitError;
    newComment.value = '';
    fetchComments();
  } catch (err) {
    console.error(err);
  }
};

onMounted(() => {
  fetchPost();
  fetchRelatedPosts();
  fetchComments();
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
