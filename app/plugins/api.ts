import { createApi } from "~/services";

export default defineNuxtPlugin(() => {
  const fetcher = $fetch.create({
    baseURL: useRuntimeConfig().public.API_URL,
    async onRequest({ request, options }) {

    },
    async onResponseError({ response }) {
      console.error('API Error:', response);
    }
  })

  const api = createApi(fetcher);

  return {
    provide: {
      api
    }
  }

})