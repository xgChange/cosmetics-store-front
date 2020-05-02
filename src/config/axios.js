const axios = require('axios')
const baseURL = process.env.NODE_ENV === 'production' ? '/' : '/api'
import { Toast } from 'vant'

class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseURL = baseUrl
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      headers: {},
    }
    return config
  }
  //  拦截器
  interceptors(instance, url) {
    //  请求拦截
    instance.interceptors.request.use(
      (config) => {
        // console.log('请求拦截：', config)
        Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '加载中',
        })
        // 将Token设置到headers中
        if (localStorage.getItem('myToken'))
          config.headers.Authorization =
            'Bearer ' + localStorage.getItem('myToken')
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    // 响应拦截
    instance.interceptors.response.use(
      (res) => {
        Toast.clear()
        // console.log('响应拦截', res)
        if (res.status === 200) {
          const { data, errCode, message } = res.data
          return {
            data,
            errCode,
            message,
          }
        }
        return res
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  }
  request(options, url) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, url)
    return instance(options)
  }
}

export default HttpRequest
