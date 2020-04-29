//侧边栏
module.exports = {
    '/veiws/': [
        '',
        {
            title: '美丽的css',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            children: [
                'css/css-a/',
                'css/css-b/',
                'css/css-c/',
            ]
        },
        {
            title: 'foo',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            children: [
                'foo/one'
            ]
        }

    ]
}	