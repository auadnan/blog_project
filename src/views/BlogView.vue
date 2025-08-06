<script setup>
import { ref, watch} from 'vue';
import { useRoute } from 'vue-router';
import { data } from '../data/data.js';
const route = useRoute();

const tag = ref("");

watch(
  () => route.params.tag,
  (newTag) => (tag.value = newTag)
);

const blogs = data;
</script>
<template>
  <h1 class="text-4xl">{{ tag }}</h1>
  <!-- <h1 class="text-4xl">{{ $route.params.tag }}</h1> -->
  <article
    v-for="blog in blogs"
    :key="blog.id"
    class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
  >
    <h1 class="text-2xl font-semibold mb-4 text-gray-800">{{ blog.title }}</h1>
    <!-- <img :src="blog.image" alt="Post Image" class="rounded-lg mb-4 w-full" /> -->
    <p class="text-gray-700 text-justify leading-relaxed">
      {{ blog.content }}
    </p>
    <RouterLink
      :to="{ name: 'single-blog-view', params: { id: blog.id } }"
      class="inline-block mt-4 text-blue-500 bg-blue-100 px-4 py-2 rounded-full hover:bg-blue-200 transition duration-300"
      >Read More</RouterLink
    >
  </article>
</template>