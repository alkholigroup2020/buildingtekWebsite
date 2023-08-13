// import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    // titleTemplate: '%s - alkholiWebsite',
    title: 'BuildingTek',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // body font
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500&display=swap',
      },
      {
        // arabic headings font
        // font-family: 'Almarai', sans-serif
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap',
      },
      {
        // english headings font
        // font-family: 'Montserrat', sans-serif
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: './plugins/svgIconSystem/svgIcons.js' },
    { src: '~/plugins/vue-agile.js' },
    { src: '~/plugins/vuelidate-plugin.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-i18n'],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
      alwaysRedirect: true,
    },
    lazy: true,
    langDir: '~locales/',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'ar',
        name: 'العربية',
        file: 'ar.json',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    // theme: {
    //   dark: true,
    //   themes: {
    //     dark: {
    //       primary: colors.blue.darken2,
    //       accent: colors.grey.darken3,
    //       secondary: colors.amber.darken3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3
    //     }
    //   }
    // }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: { transpile: ['vue-agile', 'gsap'] },
  loading: '~/components/spinners/LoadingSpinner.vue',
}
