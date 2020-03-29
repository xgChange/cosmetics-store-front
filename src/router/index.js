import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

// 解决重复引用同一个路由的问题， 重写路由的Push
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  routerPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
