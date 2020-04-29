module.exports = [
  { text: '主页', link: '/' },
  { text: 'about', link: '/about/' },
  {
    text: 'css', link: '/veiws/css',
    items: [
      { text: 'a', link: '/veiws/css/css-a/' },
      { text: 'b', link: '/veiws/css/css-b/' },
      { text: 'c', link: '/veiws/css/css-c/' }
    ]
  },
  {
    text: 'foo', link: '/veiws/foo',
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
];