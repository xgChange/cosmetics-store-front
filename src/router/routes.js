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
const Evaluation = () => import('@/views/me/evaluation.vue')
const Login = () => import('@/views/me/login/login.vue')
const Register = () => import('@/views/me/register/register.vue')
const OrderSubmit = () => import('@/views/order/order-submit.vue')
const OrderList = () => import('@/views/order/order-list.vue')

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
        title: 1,
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
  // {
  //   path: '/cart',
  //   name: '购物车',
  //   component: Cart,
  // },
  {
    path: '/me',
    name: '我的',
    component: Me,
  },
  {
    path: '/register',
    name: '注册',
    component: Register,
    meta: {
      noShowNav: true,
    },
  },
  {
    path: '/login',
    name: '登录',
    component: Login,
    meta: {
      noShowNav: true,
    },
  },
  {
    path: '/ordersubmit',
    name: '订单提交',
    component: OrderSubmit,
    meta: {
      noShowNav: true,
    },
  },
  {
    path: '/orderlist',
    name: '订单列表',
    component: OrderList,
    meta: {
      noShowNav: true,
    },
  },
  {
    path: '/publish',
    name: '发表评论',
    component: Evaluation,
    meta: {
      noShowNav: true,
    },
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
