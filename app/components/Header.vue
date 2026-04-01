<template>
  <header class="text-white h-12 border-b border-gray-700 pb-4 px-4">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">John Everton</h1>
      <nav class="flex gap-4 items-center">
        <NuxtLink to="/" class="text-gray-500 hover:text-gray-300 hover:transition-colors">
          Home
        </NuxtLink>
        <NuxtLink to="/post" class="text-gray-500 hover:text-gray-300 hover:transition-colors">
          Posts
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>