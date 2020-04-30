const moment = require('moment')

moment.locale("zh-cn")

module.exports = {
  '@vuepress/back-to-top': true,
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format('LLLL')
  },
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'ruimingming',
    repo: 'docs',
    clientId: '975c34f55f7ab442cf95',
    clientSecret: 'ac98aa996ccf97136d48f1323bdd6a2805ffe5dd',
    locale: 'zh'
  },
  '@vuepress/active-header-links': {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
  },
  'vuepress-plugin-zooming':
  {

    delay: 1000,
    options: {
      bgColor: 'black',
      zIndex: 10000,
    },
  },
  "vuepress-plugin-nuggets-style-copy": {
    copyText: "复制代码",
    tip: {
      content: "复制成功!"
    }
  }, '@vuepress/nprogress': {}, 'reading-progress': {},
  'vuepress-plugin-copyright':
  {
    noCopy: true, // 选中的文字将无法被复制
    minLength: 100, // 如果长度超过 100 个字符
    // clipboardComponent: 'ClipboardComponent',
    authorName: '著作权归 我的精神病好多了 所有。',
  }


}