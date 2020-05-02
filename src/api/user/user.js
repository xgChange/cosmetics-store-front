/**
 * @description user的相关api
 */

import axios from '../index'

const register = (data) => {
  return axios.request({
    url: `/api/user/register`,
    method: 'post',
    data,
  })
}

const login = (data) => {
  return axios.request({
    url: `/api/user/login`,
    method: 'post',
    data,
  })
}

const getUserInfo = () => {
  return axios.request({
    url: '/api/user/auth',
    method: 'get',
  })
}

const updateUserInfo = (data) => {
  return axios.request({
    url: '/api/user/changeInfo',
    method: 'patch',
    data,
  })
}

const updateAddressInfo = (data) => {
  return axios.request({
    url: '/api/user/address/update',
    method: 'patch',
    data,
  })
}

const createAddressInfo = (data) => {
  return axios.request({
    url: '/api/user/address/create',
    method: 'post',
    data,
  })
}

const uploadePicture = (data) => {
  return axios.request({
    url: '/api/utils/upload',
    method: 'post',
    data,
  })
}

export {
  register,
  login,
  getUserInfo,
  updateUserInfo,
  updateAddressInfo,
  createAddressInfo,
  uploadePicture,
}
