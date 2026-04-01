<template>
  <div class="bg-slate-900 text-white min-h-screen">
    <div class="w-300 mx-auto py-2 px-2 space-y-4">
      <Header />
      <main class="px-4 mx-auto">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>