/**
 * @description 关于商品的接口
 */

import axios from '../index'

const getGoodsDetailBywords = (params) => {
  return axios.request({
    url: `/api/goods/detail/${params}`,
    method: 'get',
  })
}

const getGoodsCategoryAll = (params) => {
  return axios.request({
    url: '/api/goods/category/all',
    method: 'get',
  })
}

const getGoodsCategoryInfoBywords = (params) => {
  return axios.request({
    url: `/api/goods/category/info/${params}`,
    method: 'get',
  })
}

export {
  getGoodsDetailBywords,
  getGoodsCategoryAll,
  getGoodsCategoryInfoBywords,
}
