module.exports = {
  transpileDependencies: [
    'chartjs-plugin-zoom'
  ],
  devServer: {
    host: '0.0.0.0',
    public: 'localhost:8080'
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compiler = require('vue-template-babel-compiler')
        return options
      })
  }
}
