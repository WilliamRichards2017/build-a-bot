module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://williamrichards2017.github.io/build-a-bot-server/',
        changeOrigin: true,
      }
    }
  },
  publicPath: '/build-a-bot',
}
