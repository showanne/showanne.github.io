// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: titleChunk => {
        return titleChunk
          ? `${titleChunk} | Anne's Portfolio`
          : '詹琇安 Anne — Full Stack Developer 作品集';
      },
      htmlAttrs: {
        lang: 'zh-Hant'
      },
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '詹琇安 Anne 的作品集網站，展示設計、前端與全端開發專案。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '詹琇安 Anne — Full Stack Developer 作品集' },
        { property: 'og:description', content: '探索 Anne 的設計與開發作品，包含前端專案、品牌設計與互動式作品。' },
        { property: 'og:locale', content: 'zh_TW' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
        }
      ]
    }
  },
  runtimeConfig: {
    // The private keys which are only available on server-side
    gmailUser: process.env.GMAIL_USER,
    gmailAppPassword: process.env.GMAIL_APP_PASSWORD,
    // Keys within public, will be also exposed to the client-side
    public: {}
  }
})
