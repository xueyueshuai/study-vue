module.exports = {
    base: '/study-vue/',
    title: 'study vue',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            // { text: '淘宝', link: 'https://www.taobao.com' },
        ],
        sidebar: [
            {
                title: 'vue笔记',
                collapsable: false,
                children: [
                    ['/guide/createProject/', '创建一个项目'],
                    ['/guide/vueConfig/', '配置vue.config.js'],
                    ['/guide/router/', '路由相关'],
                    ['/guide/request/', '网络请求'],
                ]
            },
            {
                title: '小案例',
                collapsable: false,
                children: [
                    ['/case/choujiang/', '抽奖'],

                ]
            },
            {
                title: '其他好用工具',
                collapsable: false,
                children: [
                    ['/guide/ChineseLayout/', 'Chinese Layout'],

                ]
            },
            {
                title: '网格布局',
                collapsable: false,
                children: [
                    ['/guide/displayGrid/', '一张图'],
                ]
            },
            {
                title: '2023年法定假日',
                collapsable: false,
                children: [
                    ['/guide/holiday/', '2023年法定假日'],
                ]
            },
            // {
            //     title: '测试',
            //     collapsable: false,
            //     children: [
            //         ['/guide/test/', 'test'],

            //     ]
            // },
        ]
    }
}