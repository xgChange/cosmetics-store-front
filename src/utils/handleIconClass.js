/**
 * @description 处理icon的类名
 */

const tabName = [
  {
    path: '/index',
    name: '首页',
    alias: 'index'
  },
  {
    path: '/category/tabs',
    query: { title: 0 },
    name: '分类',
    alias: 'category'
  },
  {
    path: '/blogs',
    name: '博客',
    alias: 'blogs'
  },
  {
    path: '/cart',
    name: '购物车',
    alias: 'cart'
  },
  {
    path: '/me',
    name: '我的',
    alias: 'me'
  }
]

const cosIconName = [
  {
    name: 'huobao',
    text: '火爆抢购',
    color: '#f72524'
  },
  {
    name: 'xinpin',
    text: '新品上架',
    color: '#ff1b1b'
  },
  {
    name: 'hufupin',
    text: '护肤品',
    color: '#f1cacb'
  },
  {
    name: 'mianmo',
    text: '精致面膜',
    color: '#f7b239'
  },
  {
    name: 'ximiannai',
    text: '洗面奶',
    color: '#3cb3a0'
  },
  {
    name: 'kouhong',
    text: '宫廷口红',
    color: '#fa5592'
  },
  {
    name: 'xiangshui',
    text: '网红香水',
    color: '#69bdee'
  },
  {
    name: 'caizhuang',
    text: '彩盒套装',
    color: '#f63d76'
  }
]

export { tabName, cosIconName }
