module.exports = {
  lintOnSave: false,
  publicPath: './',
  devServer: {
    port: 9999,
    host: 'localhost',
    https: false,
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_URL]: {
        'target': 'http://localhost:8080',
        'changeOrigin': true,
        'pathRewrite': {
          ['^' + process.env.VUE_APP_BASE_URL]: ''
        }
      }
    }
  }
}
