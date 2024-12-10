<template>
  <div v-if="isDevelopment">
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
    <div class="container mx-auto px-4 py-6">
      <template v-if="loading">
        <p>{{ t('blog.loading') }}</p>
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
            :src="'https://uejplumqagbzkycguuyp.supabase.co/storage/v1/object/FileStorage/' + post.image"
            :alt="post.title"
            class="w-full h-96 rounded-lg shadow-md"
          />
        </div>

        <!-- Post Metadata -->
        <p class="text-sm text-gray-600 mb-4">
          Publié {{ formattedDate }}
        </p>
        <hr class="my-4" />

        <!-- Post Content -->
        <div
          class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto"
          v-html="contentOutput"
        ></div>

        <!-- Related Posts -->
        <section class="mt-12">
          <h2 class="text-2xl font-semibold mb-6">Articles similaires</h2>
          <template v-if="relatedPosts.length === 0">
            <p class="text-gray-600">Aucun article similaire trouvé.</p>
          </template>
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="related in relatedPosts"
              :key="related.id"
              class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
            >
              <RouterLink :to="`/post/${related.id}`">
                <img
                  :src="'https://uejplumqagbzkycguuyp.supabase.co/storage/v1/object/FileStorage/' + related.image"
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
          <template v-if="loadingComments">
            <p>Chargement des commentaires...</p>
          </template>
          <template v-else-if="comments.length === 0">
            <p class="text-gray-600">Aucun commentaire pour l'instant.</p>
          </template>
          <div v-else class="space-y-4">
            <div
              v-for="comment in comments"
              :key="comment.id"
              class="bg-gray-100 p-4 rounded-md"
            >
              <p class="text-sm font-semibold">{{ comment.author }}</p>
              <p class="text-sm text-gray-600">
                {{ new Date(comment.created_at).toLocaleDateString('fr-FR') }}
              </p>
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
              class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
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
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import { supabase } from '../../lib/supabaseClient'
import { ref, onMounted, computed, watch } from 'vue'
import { marked } from 'marked'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
})

const isDevelopment = import.meta.env.VITE_APP_ENV !== 'production'

const post = ref(null)
const loading = ref(true)
const error = ref(null)

const relatedPosts = ref([])

const comments = ref([])
const newComment = ref('')
const loadingComments = ref(true)

const contentOutput = computed(() => {
  if (post.value?.content) {
    try {
      return marked(post.value.content)
    } catch (error) {
      console.error('Erreur lors de la conversion du contenu Markdown :', error)
      return '<p>Erreur de rendu du contenu.</p>'
    }
  }
  return '<p>Contenu indisponible.</p>'
})

const fetchPost = async () => {
  try {
    const { data, error: fetchError } = await supabase
      .from('posts')
      .select()
      .eq('id', props.id)
      .single()

    if (fetchError) throw fetchError
    post.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

const fetchRelatedPosts = async () => {
  try {
    const { data } = await supabase
      .from('posts')
      .select()
      .neq('id', props.id)
      .limit(3)
    relatedPosts.value = data
  } catch (err) {
    console.error(err)
  }
}

const fetchComments = async () => {
  try {
    loadingComments.value = true;
    const { data } = await supabase
      .from('comments')
      .select()
      .eq('post_id', props.id)
    comments.value = data
  } catch (err) {
    console.error(err)
  } finally {
    loadingComments.value = false
  }
}

const submitComment = async () => {
  if (!newComment.value.trim()) {
    return alert('Le commentaire ne peut pas être vide.')
  }
  try {
    const { error: submitError } = await supabase
      .from('comments')
      .insert([{ content: newComment.value, post_id: props.id }]);
    if (submitError) throw submitError
    newComment.value = ''
    fetchComments()
  } catch (err) {
    console.error(err)
  }
}

const formattedDate = computed(() => {
  if (post.value?.created_at) {
    return formatDistanceToNow(new Date(post.value.created_at), {
      addSuffix: true,
      locale: fr,
    });
  }
  return 'Date inconnue';
})

// Recharger les données lors du changement de l'ID
watch(() => props.id, () => {
  loading.value = true;
  error.value = null;
  post.value = null;
  relatedPosts.value = [];
  comments.value = [];

  fetchPost();
  fetchRelatedPosts();
  fetchComments();
})

onMounted(() => {
  fetchPost()
  fetchRelatedPosts()
  fetchComments()
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
