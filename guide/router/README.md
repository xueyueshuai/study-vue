# router


## `/src/router/index.js`文件

路由白名单直接访问

需要登录才能访问的路由 要保证登录状态 且 获取过菜单 才能访问

``` js
import Vue from 'vue'
import VueRouter from "vue-router"
import NProgress from 'nprogress' // progress bar
import config from '@/config/index'
import store from '@/store'
import staticRoutes from "@/router/staticRoutes";
import {firstGetSecondGo} from "@/router/firstGetAndGo";
import {getToken} from "@/utils/func";

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
let {tokenWhiteList, loginPath} = config

const router = new VueRouter({
  routes: staticRoutes
})

router.beforeEach((to, from, next) => {

  // 进度条
  NProgress.start()
  // web标题
  to.meta && to.meta.title && (window.document.title = to.meta.title)

  if (tokenWhiteList.includes(to.name)) {
    // 去的是token白名单

    next()
  } else {
    // 去的不是token白名单

    if (getToken()) {
      if (store.state.user.info) {
        // 登录状态下 - 并且已加载过个人菜单
        next()
      } else {
        // 登录状态下 - 并且未加载过个人菜单
        firstGetSecondGo(to, from, next)
      }
    } else {
      // 未登录状态-去的是需要登录才能访问的页面
      next({path: loginPath, query: {redirect: to.fullPath}})
    }
  }
})

router.afterEach(() => {
  // 进度条
  NProgress.done()
})

export function resetRouter() {
  router.matcher = new VueRouter({
    routes: staticRoutes
  }).matcher
}


export default router

```



## `/src/router/firstGetAndGo.js`文件

根据当前登录者权限 获取路由菜单 动态add到router中

``` js
import  store from '@/store'
import {logoutSuccess, showErrorMsg} from "@/utils/func";
import router from "@/router/index";
import i18n from '@/components/lang'

export function firstGetSecondGo(to, from, next){
  store.dispatch('user/getLoginUserInfo').then(({routes})=> {
    router.addRoute(routes)
    router.addRoute({path: '*', name: 'Page404', component: () => import('@/views/common/Page404.vue')})

    // 请求带有 redirect 重定向时，登录自动重定向到该地址
    const redirect = decodeURIComponent(from.query.redirect || to.path)
    if (to.path === redirect) {
      next({ ...to, replace: true })
    } else {
      // 跳转到目的路由
      next({ path: redirect })
    }
  }).catch(err => {
    showErrorMsg(i18n.t('message.title'), i18n.t('message.getLoginUserInfoFail'))
    logoutSuccess()
  })
}
```

## `/src/store/module/user.js`文件

获取用户的权限 并整合成 routers 树

``` js
import {getLoginUserInfo} from "@/api/common";
import BaseLayout from "@/layout/BaseLayout";
import EmptyLayout from "@/layout/EmptyLayout";
import Page404 from "@/views/common/Page404";
import markMap from "@/router/markMap";
import {listToTree} from "@/utils/func";

const user = {
  namespaced: true,
  state: {
    info: null,
    tree: null,

    routes: [],
    menu: [],
    marks: [],
    homePath: '',
  },
  mutations: {
    SET(state, [k, v]) {
      state[k] = v;
    },
  },
  actions: {
    getLoginUserInfo(context) {
      return getLoginUserInfo({}).then((res) => {

        let { myResourceList } = res.data

        let tree = listToTree(myResourceList, 0);

        context.commit('SET', ['info', res.data.info || {} ])
        context.commit('SET', ['myResourceList', myResourceList])
        context.commit('SET', ['tree', tree])

        let {routes, menu, marks, homePath} = getInfoFromTree(tree)


        context.commit('SET', ['routes', routes])
        context.commit('SET', ['menu', menu])
        context.commit('SET', ['marks', marks])
        context.commit('SET', ['homePath', homePath])
        return {routes, menu, marks}
      })
    },

    logout({commit}) {
      return new Promise(resolve => {
        commit('SET', ['info', null])
        commit('SET', ['myResourceList', []])
        commit('SET', ['tree', null])
        commit('SET', ['routes', []])
        commit('SET', ['menu', []])
        commit('SET', ['marks', []])
        commit('SET', ['homePath', ''])
        resolve()
      })
    },
  },

  // return this.$store.getters['user/getLoginUserInfo']
  // getters: {
  //   getLoginUserInfo(state) {
  //     let v = state.loginUserInfo
  //     if (v === null) {
  //       vuex.dispatch('user/getLoginUserInfo');
  //     }
  //     return v;
  //   },
  // }
}


function getInfoFromTree(tree) {
  let someObj = {}
  someObj.getRoutesFromTree = (list) => {
    let newList = [];
    list.forEach(v => {
      if (['dir'].includes(v.type)) {
        newList.push({
          path: v.mark,
          name: v.mark,
          component: EmptyLayout,
          children: someObj.getRoutesFromTree(v.children || []),
          meta: {title: v.name, enTitle:v.enName},
        })
      }

      if (['menu'].includes(v.type)) {
        newList.push({
          path: v.mark,
          name: v.mark,
          component: markMap[v.mark] || Page404,
          meta: {title: v.name, enTitle:v.enName},

        })
      }
    })
    return newList
  }

  someObj.homePath = ''
  someObj.getMenuFromTree = (list, fatherPath = '') => {
    let newList = [];
    list.forEach(v => {
      if (['dir'].includes(v.type)) {
        newList.push({
          path: fatherPath + '/' + v.mark,
          name: v.name,
          enName: v.enName,
          icon: '',
          children: someObj.getMenuFromTree(v.children || [], fatherPath + '/' + v.mark),
        })
      }

      if (['menu'].includes(v.type)) {
        newList.push({
          path: fatherPath + '/' + v.mark,
          name: v.name,
          enName: v.enName,
          icon: '',
        })

        if (someObj.homePath === '') {
          someObj.homePath = fatherPath + '/' + v.mark
        }
      }

    })
    return newList
  }

  someObj.marks = []
  someObj.getMarksFromTree = (list) => {
    list.forEach(v => {
      someObj.marks.push(v.mark)
      if (v.children) {
        someObj.getMarksFromTree(v.children)
      }
    })
  }
  someObj.getMarksFromTree(tree)


  let menu = someObj.getMenuFromTree(tree)

  return {
    menu: menu,
    marks: someObj.marks,
    homePath: someObj.homePath,

    routes: {
      path: '/',
      name: 'index',
      component: BaseLayout,
      children: someObj.getRoutesFromTree(tree),
      redirect: someObj.homePath,
    },
  }
}

export default user

```