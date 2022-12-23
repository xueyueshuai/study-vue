# 部署
以下指南假设你将文档放置在项目的 docs 目录中，并使用默认的编译输出位置。

## GitHub 页面

1. 将`.vuepress/config.js`中的`base`设置为你的仓库名称。

例如，如果你的仓库是`https://github.com/foo/bar`，

则已部署的页面将在`https://foo.github.io/bar`上可用。

在这种情况下，你应该将base设置为`"/bar/"`。

2. 在你的项目中，运行：
```sh
# 构建
vuepress build docs

# 导航到构建输出目录
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push -f git@github.com:<USERNAME>/<REPO>.git <本地分支名称>:<远程分支名称>
# 例如  git push -f git@github.com:xueyueshuai/docs.git main:main
```

