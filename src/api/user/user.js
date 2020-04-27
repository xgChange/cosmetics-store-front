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

export { register, login }
