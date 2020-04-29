const navConf = require('./config/navConf.js')
const headConf = require('./config/headConf.js')
const pluginConf = require('./config/pluginConf.js')
const sidebar = require('./config/sidebar/')
module.exports = {
  title: '我的精神病好多了',
  base: '/docs/',
  // description: 'Hello, my friend!',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    // logo: '/logo.ico',
    // sidebar: 'auto',
    editLinks: true,
    sidebarDepth: 2,
    searchMaxSuggestions: 10,
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
