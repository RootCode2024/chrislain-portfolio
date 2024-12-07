<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { supabase } from '../lib/supabaseClient';

const posts = ref([]);
const loading = ref(true);
const error = ref(null);

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

    // Transform the data to include tags at the root level for each post
    posts.value = data.map(post => ({
      ...post,
      tags: post.post_tags.map(pt => pt.tags),
    }));
  } catch (err) {
    error.value = 'Failed to load posts. Please try again later: ' + err.message;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  getPosts();
});
</script>


<template>
  <div class="container mx-auto p-4">
    <div v-if="loading" class="text-center text-white">
      <p>Loading posts...</p>
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      <p>{{ error }}</p>
    </div>
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
</template>



<style scoped>
.container {
  max-width: 1200px;
}
</style>
