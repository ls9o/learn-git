const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    historyApiFallback: true
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~bootstrap/scss/bootstrap";`
      }
    }
  }
});
