const Index = () => import('@/views/Index.vue')
const Category = () => import('@/views/category/category.vue')
const Me = () => import('@/views/me/me.vue')
const Cart = () => import('@/views/cart/cart.vue')
const Blogs = () => import('@/views/blogs/blogs.vue')

export default [
  {
    path: '/',
    name: '首页',
    component: Index,
    alias: '/index'
  },
  {
    path: '/category',
    name: '分类',
    component: Category
  },
  {
    path: '/blogs',
    name: '博客',
    component: Blogs
  },
  {
    path: '/cart',
    name: '购物车',
    component: Cart
  },
  {
    path: '/me',
    name: '我的',
    component: Me
  }
]
