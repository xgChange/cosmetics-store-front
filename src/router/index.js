import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { Dialog } from 'vant'
Vue.use(VueRouter)

// 解决重复引用同一个路由的问题， 重写路由的Push
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  routerPush.call(this, location).catch((err) => err)
}

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
})

const unlessPath = [
  /^\/login/,
  /^\/register/,
  /^\/category/,
  /^\/goods/,
  /^\/index/,
]

const unless = function(path, unlessPath) {
  return unlessPath.some((item) => item.test(path))
}

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem('myToken') ? true : false
  if (unless(to.path, unlessPath) || to.path === '/') {
    next()
  } else {
    if (isLogin) {
      next()
    } else {
      Dialog.alert({
        message: '请登录后查看',
      }).then(() => {
        next('/login')
      })
    }
  }
})

export default router
