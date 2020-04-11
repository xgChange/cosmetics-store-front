module.exports = {
  publicPath: '/',
  assetsDir: 'assets',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/style/global.scss";`
      }
    }
  }
}
