/**
 * @description 一些工具方法
 */

const { format } = require('date-fns')

/**
 * 格式化时间 如
 * @param {String} str
 */
function timeFormat(str) {
  return format(new Date(str), 'yyyy-MM-dd HH:mm')
}

/**
 * @description 去重
 */
const unique = function(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

/**
 * @description 去除字符串中所有空格
 */

function strTrim(str) {
  return (str = str.replace(/\s+/g, ''))
}

// 防抖函数
let debounce = function(fn, delay, immediate = false) {
  let timer = null

  const later = function() {
    return setTimeout(() => {
      if (!immediate) {
        fn.apply(this)
      }
    }, delay)
  }

  return function() {
    if (!timer) {
      timer = later()
      if (immediate) {
        fn.apply(this)
      }
    } else {
      clearTimeout(timer)
      timer = later.apply(this)
    }
  }
}

export { unique, strTrim, debounce, timeFormat }
