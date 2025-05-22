
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    config: {
      content: [
        './components//*.{js,vue,ts}',
        './layouts//.vue',
        './pages/**/.vue',
        './plugins/*/.{js,ts}',
        './app.vue',
        './nuxt.config.{js,ts}'
      ]
    }
  },

})
