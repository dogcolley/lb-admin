export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1', 
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
    },
    //pageTransition: { name: 'page', mode: 'out-in' }
  },
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
        'process.env.DEBUG': 'false',
    }
  },
  buildModules: [
    // pinia plugin
    '@pinia/nuxt',
  ],
})
