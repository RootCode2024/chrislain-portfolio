<script setup>
import { formatDistanceToNow } from 'date-fns'
import { fr } from 'date-fns/locale'
import { supabase } from '../../lib/supabaseClient'
import { RouterLink } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const posts = ref([])
const loading = ref(true)
const error = ref(false)

const tags = ref([])
const loadingTag = ref(true)
const errorTag = ref(false)



async function getPosts() {
  try {
    const { data, error: fetchError } = await supabase
      .from('posts')
      .select(`
        id,
        title,
        description,
        image,
        created_at,
        post_tags (
          tags (id, name)
        )
      `);

    if (fetchError) throw fetchError;

    posts.value = data.map(post => ({
      ...post,
      tags: post.post_tags.map(pt => pt.tags),
    }));
  } catch (err) {
    error.value = true
    console.log(err.message)
  } finally {
    loading.value = false;
  }
}

async function getTags() {
  try {
    const { data: dataTag, error: fetchError } = await supabase
      .from('tags')
      .select('id, name');

    if (fetchError) throw fetchError;

    tags.value = dataTag;
  } catch (error) {
    errorTag.value = true;
    console.error(error.message);
  } finally {
    loadingTag.value = false;
  }
}

const formattedDate = computed(() => {
  return (date) => {
    if (date) {
      return formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: fr, // Pour le français
      });
    }
    return 'Date inconnue';
  }
})


function handleFilterChange(value) {
  const filteredPosts = posts.value.slice().sort((a, b) => {
    if (value === '') {
      return 0
    } else if (value === 'Les Plus anciens') {
      return a.created_at > b.created_at ? 1 : -1
    } else if (value === 'Les Plus récent') {
      return a.created_at < b.created_at ? 1 : -1
    }
  })

  posts.value = filteredPosts
}

onMounted(() => {
  getPosts();
  getTags();
});

</script>

<template>
  <div class="container mx-auto p-4 w-full">
    <h2
      class="text-2xl lg:text-4xl animate-fade-right font-thin my-5 lg:flex lg:justify-start bg-gradient-to-b from-indigo-400 to-green-600 bg-clip-text text-transparent tracking-tight animate-fade-in-down"
    >
      Blog.
    </h2>
    <div class="flex">
      <div class="w-3/4 p-5">
        <div v-if="loading" class="text-center dark:text-white text-slate-700">
          <p>{{ t('blog.loading') }}...</p>
        </div>
        <div v-else-if="error" class="text-center text-red-500">
          <p v-html="t('blog.post.error')"></p>
        </div>
        <div v-else>
          <select name="filters" class="outline-none text-lg rounded-lg p-2 font-semibold" id="" @change="handleFilterChange($event.target.value)">
            <option value="">Trier par</option>
            <option value="Les Plus anciens">Les Plus anciens</option>
            <option value="Les Plus récent">Les Plus récent</option>
          </select>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div
              v-for="post in posts"
              :key="post.id"
              class="bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <RouterLink :to="`/post/${post.id}`" class="block">
                <!-- Post Content -->
                <h3 class="text-xl font-semibold text-white mb-2">{{ post.title }}</h3>
                <img
                  v-if="post.image"
                  class="w-full h-48 rounded-lg mb-4"
                  :src="'https://uejplumqagbzkycguuyp.supabase.co/storage/v1/object/FileStorage/' + post.image"
                  :alt="post.title"
                />
                <p class="text-white mb-2">{{ post.description }}</p>
                <p class="text-gray-400 text-sm mb-4">
                  Publié {{ formattedDate(post.created_at) }}
                </p>
              </RouterLink>

              <!-- Tags -->
              <div class="grid grid-cols-3 gap-2 bottom-0">
                <span
                  v-for="tag in post.tags"
                  :key="tag.id"
                  class="bg-blue-500 text-white text-xs px-2 py-1 rounded-md text-center bottom-0"
                >
                  {{ tag.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4 p-5">
        <h3 class="text-lg text-right font-semibold">Filtrer Par Catégories</h3>
        <div v-if="loadingTag" class="text-center dark:text-white text-slate-700">
          <p>{{ t('blog.loading') }}...</p>
        </div>
        <div v-else-if="errorTag" class="text-center text-red-500">
          <p v-html="t('blog.tag.error')"></p>
        </div>
        <div v-else>
          <ul>
          <li
            v-for="tag in tags"
            :key="tag.id"
            class="bg-blue-500 text-white text-xs px-2 py-2 my-2 rounded-md text-center"
          >
            <router-link :to="`/tag/${tag.id}`">{{ tag.name }}</router-link>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.container {
  max-width: 1200px;
}
</style>


