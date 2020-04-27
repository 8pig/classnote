module.exports = {
    title: '8pig前端积累',
    description: '初心易得, 始终难守',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
    ],
    base: '/zhou/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        nav: [{
                text: '前端',
                link: '/web/#个人积累'
            }, // 内部链接 以docs为根目录
            {
                text: 'Java',
                link: '/java/'
            }, // 内部链接 以docs为根目录
            {
                text: '个人网站',
                link: 'http://152.136.92.239/#/'
            }, // 外部链接
            // 下拉列表
            {
                text: 'GitHub',
                items: [{
                    text: 'GitHub地址',
                    link: 'https://github.com/8pig'
                }]
            }
        ],
        sidebar: {
            // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
            '/web/': [
                '/web/', // accumulate文件夹的README.md 不是下拉框形式
                {
                    title: '常用软件设置',
                    children: [

                        '/web/common/1'
                    ]
                },
                {
                    title: 'css'
                },
                {
                    title: 'html'
                },
                {
                    title: '面试题',
                    children: [
                        '/web/ms/'
                    ]
                },
                {
                    title: 'JS',
                    children: [
                        '/web/js/', '/web/js/1'
                    ]
                },
                {
                    title: 'Vue',
                    children: [
                        '/web/vue/', '/web/vue/1'
                    ]
                    // children: [
                    //                     //     '/accumulate/JS/test', // 以docs为根目录来查找文件
                    //                     //     // 上面地址查找的是：docs>accumulate>JS>README.md 文件
                    //                     //     // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
                    //                     // ]
                },
                {
                    title: 'React'
                },
                {
                    title: 'npm-yarn',
                    children: [
                        '/web/npmyarn/'
                    ]
                }
            ],
            '/java/': [
                '/java/',
                {
                    title: 'java基础',
                    children: [
                        '/java/1/', '/java/1/1', '/java/1/2', '/java/1/3', '/java/1/4', '/java/1/5', '/java/1/6', '/java/1/7'
                    ]
                },
                {
                    title: '网络编程',
                    children: [
                        '/java/2/', '/java/2/1',
                    ]
                }, {
                    title: 'MySQL',
                    children: [
                        '/java/3/', '/java/3/1', '/java/3/2', '/java/3/3', '/java/3/4', '/java/3/5', '/java/3/6', '/java/3/7'
                    ]
                },
                {
                    title: 'JDBC',
                    children: [
                        '/java/4/', '/java/4/1', '/java/4/2', '/java/4/3', '/java/4/4'
                    ]
                },
                {
                    title: 'Servlet',
                    children: [
                        '/java/5/', '/java/5/1'
                    ]
                }

            ],
        }
    }
};