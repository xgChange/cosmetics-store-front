const BASE_URL = process.env.NODE_ENV === 'production' ? '/front' : '/'

module.exports = {
  publicPath: BASE_URL,
  assetsDir: 'assets',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/style/global.scss";`,
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
