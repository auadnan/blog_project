<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from './views/HeaderView.vue';
import FooterView from './views/FooterView.vue';
import LeftSidebarView from './views/LeftSidebarView.vue';

</script>

<template>
  <HeaderView />

  <section class="flex min-h-screen">
    <LeftSidebarView />

    <main class="flex-1 p-10 grid grid-cols-1 gap-8">
      <RouterView />
    </main>
    <RouterView name= "right-sidebar" />

  </section>

  <FooterView />
</template>
