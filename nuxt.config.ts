// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@formkit/nuxt'],
    vite: {
        define: {
          __VUE_PROD_DEVTOOLS__: true
        }
      }
})
