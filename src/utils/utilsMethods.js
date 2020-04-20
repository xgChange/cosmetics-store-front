/**
 * @description 一些工具方法
 */

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

export { unique }
