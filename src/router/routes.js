const Index = () => import('@/views/Index.vue')
const Category = () => import('@/views/category/category.vue')
const Me = () => import('@/views/me/me.vue')
const Cart = () => import('@/views/cart/cart.vue')
const Blogs = () => import('@/views/blogs/blogs.vue')
const CategoryContent = () => import('@/components/slide-content/ISlideContent')
const NotFound = () => import('@/views/404/404.vue')
const GoodsList = () => import('@/views/goods-list/goodsList.vue')
const GoodDetail = () => import('@/views/goods-detail/goodsDetail.vue')
const Setting = () => import('@/views/setting/setting.vue')
const SettingInfo = () => import('@/views/setting/setting-info.vue')

export default [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: '首页',
    component: Index,
  },
  {
    path: '/category',
    name: '分类',
    component: Category,
    redirect: {
      path: '/category/tabs',
      query: {
        title: 0,
      },
    },
    children: [
      {
        path: 'tabs',
        component: CategoryContent,
      },
    ],
  },
  {
    path: '/blogs',
    name: '博客',
    component: Blogs,
  },
  {
    path: '/cart',
    name: '购物车',
    component: Cart,
  },
  {
    path: '/me',
    name: '我的',
    component: Me,
  },
  {
    path: '/goods/search',
    name: '商品列表',
    meta: {
      noShowNav: true,
    },
    component: GoodsList,
  },
  {
    path: '/goods/detail/:id',
    name: '商品详情',
    meta: {
      noShowNav: true,
    },
    component: GoodDetail,
  },
  {
    path: '/setting',
    component: Setting,
    meta: {
      noShowNav: true,
    },
  },
  {
    path: '/setting/my/:info',
    component: SettingInfo,
    name: 'settingInfo',
    meta: {
      noShowNav: true,
    },
  },
  {
    path: '/404',
    name: 'notFound',
    component: NotFound,
  },
  {
    path: '*',
    redirect: '/404',
  },
]
