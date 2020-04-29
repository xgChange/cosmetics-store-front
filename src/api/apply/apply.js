/**
 * @description 支付相关接口
 */
import axios from '../index'

const createOrder = (data) => {
  return axios.request({
    url: `/api/order/create`,
    method: 'post',
    data,
  })
}

const cancelOrder = (data) => {
  return axios.request({
    url: '/api/order/cancel',
    method: 'post',
    data,
  })
}

const findOrder = (params) => {
  return axios.request({
    url: `/api/order/select/${params}`,
    method: 'get',
  })
}

// 修改状态
const updateOrder = (data) => {
  return axios.request({
    url: `/api/order/update/order`,
    method: 'patch',
    data,
  })
}

export { createOrder, cancelOrder, findOrder, updateOrder }
