const path = require('path')
const webpack = require('webpack')
const mix = require('laravel-mix')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix
  .js('resources/assets/js/app.js', 'public/js')
  .stylus('resources/assets/stylus/app.styl', 'public/css')
  .sourceMaps()
  .disableNotifications()
  .copyDirectory('resources/assets/img', 'public/img')

if (mix.inProduction()) {
  mix.version()

  mix.extract([
    'vue',
    'vform',
    'axios',
    'vuex',
    'vue-i18n',
    'vue-meta',
    'js-cookie',
    'vue-router',
    'vuetify',
    'vee-validate',
    'vuex-router-sync'
  ])
}

mix.webpackConfig({
  plugins: [
  ],
  resolve: {
    alias: {
      '~': path.join(__dirname, './resources/assets/js')
    }
  }
})
