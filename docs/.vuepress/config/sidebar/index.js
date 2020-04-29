//侧边栏
module.exports = {
    '/veiws/': [
        '',
        {
            title: 'Java基础',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            children: [
                'java/'
            ]
        },
        {
            title: 'C语言基础',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            children: [
                'c/'
            ]
        }

    ]
}	