import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_PUBLIC_API_URL || 'https://jsonplaceholder.typicode.com'
    }
  },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  devtools: { enabled: true },
  modules: ['radix-vue/nuxt'],
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})
