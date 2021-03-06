const pkg = require('./package')

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//   router: {
//     base: '/cj20170805/'
//   }
// } : {};

module.exports = {
  // ...routerBase
  mode: 'universal',

  router: {
    //base: '/nuxxt/',
    base: '/'
  },
  // mode: 'spa',

  // router: {
  //   base: './'
  // },

  /*
  ** Headers of the page
  */
  head: {
    title: '荣德海越官方网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: 'http://api.map.baidu.com/api?key=&v=1.1&services=true'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {   color: '#242f3b',
  height: '5px'},

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'~/plugins/element-ui.js', ssr: true}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8001',
      pathRewrite: {
        '^/api' : '/'
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  // vendor:['axios', 'qs'],        // 防止多次打包
    extend(config, ctx) {
      // config.output.publicPath = '../_nuxttt/'
      // console.log('CONFIG：：：',config);
    }
  }
}
