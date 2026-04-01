<template>
  <div class="bg-slate-900 text-white h-screen">
    <div class="w-300 mx-auto py-2 px-2 space-y-4">
      <header>menu</header>
      <main>
        <slot />
      </main>
      <footer>
        <p class="text-sm text-gray-400">Copyright 2026</p>
      </footer>
    </div>
  </div>
</template>