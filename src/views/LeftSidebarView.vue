<template>
  <aside class="w-[250px] bg-gray-900 text-white shadow-lg">
    <section class="mt-10 p-6">
      <h2 class="text-xl font-semibold mb-6 border-b pb-2 border-gray-700">
        Navigation
      </h2>
      <ul class="space-y-4 text-lg">
        <RouterLink :to="{ name: 'home' }"
          ><li class="hover:text-yellow-400 cursor-pointer">
            🏠 Home
          </li></RouterLink
        >
        <RouterLink :to="{ name: 'about' }"
          ><li class="hover:text-yellow-400 cursor-pointer">
            📖 About
          </li></RouterLink
        >
        <RouterLink :to="{ name: 'contact' }"
          ><li class="hover:text-yellow-400 cursor-pointer">
            ✉️ Contact
          </li></RouterLink
        >
        <RouterLink :to="{ name: 'blog' }"
          ><li class="hover:text-yellow-400 cursor-pointer">
            📝 Blog
          </li></RouterLink
        >
      </ul>
    </section>
  </aside>
</template>

<style scoped>
.router-link-active {
  color: red;
}
.router-link-exact-active {
  color: green;
}
</style>
