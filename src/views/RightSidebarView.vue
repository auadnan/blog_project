<template>
  <aside class="w-[250px] bg-gray-200 shadow-inner p-6">
    <h2 class="text-xl font-semibold mb-4 border-b pb-2 text-gray-800">Tags</h2>
    <ul class="space-y-3">
      <li>
        <RouterLink
          :to="{ name: 'tag', params: { tag: 'shoes' } }"
          class="inline-block bg-black text-white px-3 py-1 rounded-full text-sm hover:bg-gray-800 transition"
        >
          #shoes
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :to="{ name: 'tag', params: { tag: 'tech' } }"
          class="inline-block bg-black text-white px-3 py-1 rounded-full text-sm hover:bg-gray-800 transition"
        >
          #tech
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :to="{ name: 'tag', params: { tag: 'lifestyle' } }"
          class="inline-block bg-black text-white px-3 py-1 rounded-full text-sm hover:bg-gray-800 transition"
        >
          #lifestyle
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.router-link-active {
  color: green;
}
.router-link-exact-active {
  color: red;
}
</style>
