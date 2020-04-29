module.exports = [
  { text: '主页', link: '/'},
  { text: 'about', link: '/about/' },
  {
    text: '后端',
    items: [
      { text: 'java', link: '/views/java/object-oriented-and-process-oriented' },
      { text: 'C语言', link: '/views/c/' }
    ]
  },
  {
    text: '前端', link: '/views/foo',
    items: [
      { text: 'a', link: '/views/foo/one' }
    ]
  },
  { text: 'google', link: 'https://google.com', target: '_blank', rel: 'noopener noreferrer' },
  {
    text: 'Languages',
    ariaLabel: 'Language Menu',
    items: [
      { text: 'Chinese', link: '/language/chinese/' },
      { text: 'Japanese', link: '/language/japanese/' }
    ]
  }
]
