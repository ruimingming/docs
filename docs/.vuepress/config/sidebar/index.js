//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: 'Java基础',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            children: [
                'java/object-oriented-and-process-oriented',
                'java/only-call-value-in-java',
                'java/enum',
                'java/auto-boxing',
            ]
        },
        {
            title: 'NodeJS',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            children: [
                'nodejs/introduction',
                'nodejs/why-node',
                'nodejs/global',
                'nodejs/common-js'
            ]
        }

    ]
}
