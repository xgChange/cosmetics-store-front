const Index = () => import('@/views/Index.vue')
const Category = () => import('@/views/category/category.vue')
const Me = () => import('@/views/me/me.vue')
const Cart = () => import('@/views/cart/cart.vue')
const Blogs = () => import('@/views/blogs/blogs.vue')
const CategoryContent = () => import('@/components/slide-content/ISlideContent')
const NotFound = () => import('@/views/404/404.vue')

export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: '首页',
    component: Index
  },
  {
    path: '/category',
    name: '分类',
    component: Category,
    redirect: {
      path: '/category/tabs',
      query: {
        title: 0
      }
    },
    children: [
      {
        path: 'tabs',
        component: CategoryContent
      }
    ]
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
  },
  {
    path: '/404',
    name: 'notFound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]
