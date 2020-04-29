const navConf = require('./config/navConf.js')
const headConf = require('./config/headConf.js')
const sidebar = require('./config/sidebar/')
module.exports = {
    themeConfig: {
      logo: '/logo.ico',
      // sidebar: 'auto',
      displayAllHeaders: true,
      sidebar: sidebar,
      nav: navConf,
    },
    title: 'Hello VuePress',
    description: 'Hello, my friend!',
    head: headConf,
    // dest: './docs/.vuepress/dist',
    // ga: '',
    // evergreen: true,
  
  }
  