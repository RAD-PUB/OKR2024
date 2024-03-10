const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: ``
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@styles': path.join(__dirname, '/src/assets/scss')
      }
    }
  }
})
