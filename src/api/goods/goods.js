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

const searchGoodsByWords = (query) => {
  return axios.request({
    url: `/api/goods/search?key=${query}`,
    method: 'get',
  })
}

const addGoodsCollect = (data) => {
  return axios.request({
    url: `/api/goods/collect`,
    method: 'post',
    data,
  })
}

const getGoodsCollect = () => {
  return axios.request({
    url: `/api/goods/getcollect`,
    method: 'get',
  })
}

const createReviews = (data) => {
  return axios.request({
    url: `/api/goods/reviews/create`,
    method: 'post',
    data,
  })
}

const findReviews = (params) => {
  return axios.request({
    url: `/api/goods/reviews/find/${params}`,
    method: 'get',
  })
}

export {
  getGoodsDetailBywords,
  getGoodsCategoryAll,
  getGoodsCategoryInfoBywords,
  searchGoodsByWords,
  addGoodsCollect,
  getGoodsCollect,
  createReviews,
  findReviews,
}
