<script setup>
import { useRoute } from "vue-router";
import { data } from "../data/data.js";
const route = useRoute();
const id = parseInt(route.params.id);

const post = data.find((post) => post.id === id);
</script>

<template>
  <!-- {{ $route.params.id }} -->
  <!-- {{ post }} -->
  <article
    class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
  >
    <h1 class="text-2xl font-semibold mb-4 text-gray-800">{{ post.title }}</h1>
    <img :src="post.image" alt="Post Image" class="rounded-lg mb-4 w-full" />
    <p class="text-gray-700 text-justify leading-relaxed">{{ post.content }}</p>
  </article>
</template>
