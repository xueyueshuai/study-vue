## 在已有项目中安装
 
如果你想要在一个已有项目中维护文档，就应该将 VuePress 安装为本地依赖。此设置还允许你使用 CI 或 Netlify 服务，在推送时自动部署。


``` sh
# 安装为本地依赖项
npm install -D vuepress

# 创建一个 docs 目录
mkdir docs
# 创建一个 markdown 文件
echo '# Hello VuePress' > docs/README.md

# 开始编写文档
npx vuepress dev docs
```

或者，给 package.json 添加一些 scripts 脚本：

``` sh
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

然后你就可以开始编写文档了：

``` sh
npm run docs:dev
```

要生成静态资源，请运行：

``` sh
npm run docs:build
```

默认情况下，构建的文件会位于 .vuepress/dist 中，该文件可以通过 .vuepress/config.js 中的 dest 字段进行配置。构建的文件可以部署到任何静态文件服务器。关于如何部署到一些常用服务，请参考 部署指南。