<template>
  <div class="container mx-auto p-4 w-full">
    <h2
      class="text-2xl lg:text-4xl animate-fade-right font-thin my-5 lg:flex lg:justify-start bg-gradient-to-b from-indigo-400 to-green-600 bg-clip-text text-transparent tracking-tight animate-fade-in-down"
    >
      Blog.
    </h2>
    <div class="flex">
      <div class="w-1/3 p-5">
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
              class="bg-blue-500 text-white text-xs px-2 py-1 rounded-md text-center bottom-0"
            >
              <router-link :to="`/tag/${tag.id}`">{{ tag.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-2/3 p-5">
        <div class="mb-2">
          <select name="filters" class="outline-none text-lg rounded-lg p-2 font-semibold" id="">
            <option value="">Les Plus anciens</option>
            <option value="">Les Plus récent</option>
          </select>
        </div>
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
                class="w-full h-auto rounded-lg mb-4"
                :src="post.image"
                :alt="post.title"
              />
              <p class="text-white mb-2">{{ post.description }}</p>
              <p class="text-gray-400 text-sm mb-4">
                {{ new Date(post.created_at).toLocaleDateString(undefined, {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }) }}
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { supabase } from '../../lib/supabaseClient';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const posts = ref([]);
const loading = ref(true);
const error = ref(false);

const tags = ref([]);
const loadingTag = ref(true);
const errorTag = ref(false);

const route = useRoute();

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
      `)
      .where('post_tags.id = ' + route.params.id);

    if (fetchError) throw fetchError;

    // Transform the data to include tags at the root level for each post
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
    const { dataTag, errorTag: fetchError } = await supabase
      .from('tags')
      .select(`
        id,
        name,
      `);

    if (fetchError) throw fetchError;
        // Transform the data to include tags at the root level for each post
        tags.value = dataTag.value;
  } catch (err) {
    errorTag.value = true
    console.log(err.message)
  } finally {
    loadingTag.value = false;
  }
}

onMounted(() => {
  getPosts();
  getTags();
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

