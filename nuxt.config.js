export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
    
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PrasanthSasikumar.com',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/style-resources',
    '@nuxtjs/color-mode',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/feed'
  ],

  feed: [
    {
      path: '/feed.xml', // The route to your feed.
      async create(feed) {
        feed.options = {
          title: 'Prasanth Sasikumar',
          link: 'https://prasanthsasikumar.com',
          description: 'This is my personal feed!'
        }
      
        const $content = require('@nuxt/content').$content
        const posts = await $content({deep: true}).sortBy('date', 'desc').fetch()
        posts.forEach(post => {
          feed.addItem({
            title: post.title,
            id: post.slug,
            link: 'https://www.prasanthsasikumar.com/post/'+post.slug,
            description: post.abstract,
            content: post.abstract
          })
        })
      
        feed.addCategory('Nuxt.js')
      
        feed.addContributor({
          name: 'Prasanth Sasikumar',
          email: 'psas598@aucklanduni.ac.nz',
          link: 'https://prasanthsasikumar.com/'
        })
      },
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
      data: ['Some additional data'] // Will be passed as 2nd argument to `create` function
    }
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },  
  styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss'
    ]
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  env: {
    baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://prasanthsasikumar.com',
    functions: process.env.NODE_ENV === 'production' ? `https://prasanthsasikumar.com/.netlify/functions` : 'http://localhost:9000',
  }
  
}
