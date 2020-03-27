/*
 * @Author: Ivan.Wu
 * @LastEditors: Ivan.Wu
 * @Date: 2019-10-09 16:53:08
 * @LastEditTime: 2019-10-09 17:02:28
 */
export default {
  /**
   * 字符转换成大写
   * @param {*} value 
   */
  upperCase (value = '') {
    let val = value && typeof value === 'stirng'? value.toUpperCase(): value.toString().toUpperCase();
    return val;
  },

  /**
   * 字符转换成小写
   * @param {*} value 
   */
  lowerCase (value = '') {
    let val = value && typeof value === 'stirng'? value.toLowerCase(): value.toString().toLowerCase();
    return val;
  },

  /**
   * 字符串省略
   * @param {*} value 
   * @param {*} max 最大字符数 
   */
  sliceToEllips (value, max) {
    if (value.length < max) return value
    return `${value.slice(0, max)}....`
  }
}