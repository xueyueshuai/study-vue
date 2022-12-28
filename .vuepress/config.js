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
                title: '笔记',
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
        ]
    }
}