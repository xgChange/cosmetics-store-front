/**
 * @description 博客相关
 */

import axios from '../index'

const getAllBlogsByIndex = (params) => {
  return axios.request({
    url: `/api/blogs/loadMore/${params}`,
    method: 'get',
  })
}

const getComment = (params) => {
  return axios.request({
    url: `/api/comment/findComment/${params}`,
    method: 'get',
  })
}

// 回复
const createReply = (data) => {
  return axios.request({
    url: `/api/comment/reply/create`,
    method: 'post',
    data,
  })
}

// 评论
const createComment = (data) => {
  return axios.request({
    url: `/api/comment/publish`,
    method: 'post',
    data,
  })
}

export { getAllBlogsByIndex, getComment, createReply, createComment }
