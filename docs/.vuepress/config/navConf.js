module.exports = [
  { text: '主页', link: '/'},
  { text: 'about', link: '/about/' },
  {
    text: '后端',
    items: [
      { text: 'java', link: '/veiws/java/' },
      { text: 'C语言', link: '/veiws/c/' }
    ]
  },
  {
    text: '前端', link: '/veiws/foo',
    items: [
      { text: 'a', link: '/veiws/foo/one' }
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