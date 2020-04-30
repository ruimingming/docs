const navConf = require('./config/navConf.js')
const headConf = require('./config/headConf.js')
const pluginConf = require('./config/pluginConf.js')
const sidebar = require('./config/sidebar/')
module.exports = {
  title: '我的精神病好多了',
  // base: '/docs/',
  // description: 'Hello, my friend!',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    repo: 'ruimingming/docs',
    editLinks: true,
    editLinkText: '查看源码',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // logo: '/logo.ico',
    // sidebar: 'auto',
    smoothScroll: true,
    editLinks: true,
    sidebarDepth: 2,
    searchMaxSuggestions: 10,
    // displayAllHeaders: true,
    sidebar: sidebar,
    nav: navConf,
    lastUpdated: true,
    lastUpdated: '上次更新', // string | boolean
  },
  markdown: {
    lineNumbers: true
  },

  // dest: './docs/.vuepress/dist',
  // ga: '',
  // evergreen: true,

}
