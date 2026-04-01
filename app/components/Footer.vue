<script setup lang="ts">
 const year = new Date().getFullYear();
</script>
<template>
  <footer class="flex justify-between items-center px-4 text-gray-500">
    <div class="text-sm">
      &copy; {{ year }} Teste realizado por <span class="font-semibold text-gray-200">John Everton</span> para <span class="font-semibold text-gray-200">Hit Digital</span>.
    </div>
    <div class="flex gap-2 items-center text-sm">
      <a 
        class="hover:text-gray-300 hover:transition-colors"
        href="https://github.com/johneverton01"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a 
        class="hover:text-gray-300 hover:transition-colors"
        href="https://www.linkedin.com/in/john-everton"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </footer>
</template>
