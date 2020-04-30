module.exports = [
  { text: '主页', link: '/' },
  { text: '关于', link: '/about/' },
  {
    text: '后端',
    items: [
      { text: 'Java', link: '/views/java/object-oriented-and-process-oriented' },

    ]
  },
  {
    text: '前端', link: '/views/foo',
    items: [
      { text: 'NodeJS', link: '/views/nodejs/introduction' }
    ]
  },
  // {
  //   text: 'Languages',
  //   ariaLabel: 'Language Menu',
  //   items: [
  //     { text: 'Chinese', link: '/language/chinese/' },
  //     { text: 'Japanese', link: '/language/japanese/' }
  //   ]
  // },
  {
    text: '其它', icon: 'reco-document',
    items: [{
      text: 'Common sites🎈',
      items: [{
        text: 'Java SE API Documentation',
        link: 'https://docs.oracle.com/javase/8/docs/api/index.html',
      }, {
        text: 'Program Creek',
        link: 'https://www.programcreek.com/',
      }, {
        text: 'Spring',
        link: 'https://spring.io/',
      }, {
        text: 'Stackoverflow',
        link: 'https://stackoverflow.com/',
      }, {
        text: 'LeetCode',
        link: 'https://leetcode-cn.com/',
      },

      {
        text: 'VuePress',
        link: 'https://www.vuepress.cn/',
      },
      {
        text: 'Vue.js',
        link: 'https://cn.vuejs.org/v2/guide/',
      }, {
        text: 'BootCDN',
        link: 'https://www.bootcdn.cn/',
      }, {
        text: 'Linux命令大全',
        link: 'https://www.linuxcool.com/',
      }, {
        text: '编程语言排行榜',
        link: 'https://www.tiobe.com/tiobe-index/',
      }]
    }, {
      text: 'Spring官方文档',
      items: [{
        text: 'SpringBoot Documentation',
        link: 'https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/',
      }, {
        text: 'Spring Documentation',
        link: 'https://docs.spring.io/spring/docs/5.0.8.RELEASE/spring-framework-reference/',
      }, {
        text: 'Spring Security Documentation',
        link: 'https://docs.spring.io/spring-security/site/docs/current/reference/html5/',
      },]
    }]
  }
]
