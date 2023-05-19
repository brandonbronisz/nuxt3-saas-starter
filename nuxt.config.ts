// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  imports: {
    dirs: ['./composables', './utils', 'stores'],
  },
  extends: [
    './ui',
    './sites/auth',
    './sites/landing',
    './sites/dashboard',
  ],
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
  ],
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  },
  runtimeConfig: {
    public: {
      gaId: '',
      baseURL: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
})
