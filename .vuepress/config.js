module.exports = {
    base:'/study-vue/',
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
                ['/guide/createProject/','创建一个项目'],
                ['/guide/vueConfig/','配置vue.config.js'],
              ]
            },
          ]
      }
  }