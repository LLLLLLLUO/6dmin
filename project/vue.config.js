module.exports = {
  lintOnSave: false,
  publicPath: './',
  devServer: {
    port: 9999,
    host: 'localhost',
    https: false,
    open: false,
    proxy: {
      [process.env.VUE_APP_BASE_URL]: {
        'target': process.env.VUE_APP_AXIOS_URL,
        'changeOrigin': true,
        'pathRewrite': {
          ['^' + process.env.VUE_APP_BASE_URL]: ''
        }
      }
    }
  }
}
