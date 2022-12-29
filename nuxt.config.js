export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target:'static',
  head: {
    title: 'POS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/css/nucleo-icons.css' },
      { rel: 'stylesheet', href: '/assets/css/nucleo-svg.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },
      { rel: 'stylesheet', href: '/assets/css/soft-ui-dashboard.min.css' },
    ],
    script: [
      { src: "https://kit.fontawesome.com/42d5adcbca.js" },
      { src: "/assets/js/core/popper.min.js" },
      { src: "/assets/js/core/bootstrap.min.js" },
      { src: "/assets/js/plugins/perfect-scrollbar.min.js" },
      { src: "/assets/js/plugins/smooth-scrollbar.min.js" },

      { src: "/assets/js/plugins/dragula/dragula.min.js" },
      { src: "/assets/js/plugins/jkanban/jkanban.js" },
      { src: "/assets/js/plugins/chartjs.min.js" },
      { src: "/assets/js/plugins/choices.min.js" },
      { src: "/assets/js/plugins/fullcalendar.min.js" },
      { src: "/assets/js/plugins/tilt.min.js" },
      { src: "/assets/js/soft-ui-dashboard.min.js" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api',
    '~/plugins/printer',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios','vue-sweetalert2/nuxt'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
