const navConf = require('./config/navConf.js')
const headConf = require('./config/headConf.js')
const pluginConf = require('./config/pluginConf.js')
const sidebar = require('./config/sidebar/')
module.exports = {
  title: 'Hello VuePress',
  base: '/docs/',
  description: 'Hello, my friend!',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    logo: '/logo.ico',
    // sidebar: 'auto',
    displayAllHeaders: true,
    sidebar: sidebar,
    nav: navConf,
    lastUpdated: true,
    lastUpdated: '上次更新', // string | boolean
  }

  // dest: './docs/.vuepress/dist',
  // ga: '',
  // evergreen: true,

}
