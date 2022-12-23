module.exports = {
    // base:'/docs/',

    title: 'Hi Vuepress',
    description: '项目描述',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '百度', link: 'https://www.baidu.com' },
            { text: '淘宝', link: 'https://www.taobao.com' },
        ],
        sidebarDepth:0,

        sidebar: [
            {
              title: '指南',
              collapsable: false,
              children: [
                {
                    title: '安装',
                    collapsable: false,
                    children: [
                        ['/guide/install-a','全局安装'],
                        ['/guide/install-b','在已有项目中安装']
                    ]
                },
                {
                    title: '部署',
                    collapsable: false,
                    children: [ 
                      ['/guide/build-a','部署到GitHub'],
                    ]
                  }
              ]
            },
            
          ]
      }
  }