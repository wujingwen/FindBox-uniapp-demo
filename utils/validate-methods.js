/**
 * 
 * @desc   判断是否为手机号
 * @param  {String|Number} str 
 * @return {Boolean} 
 */
export function isPhoneNum(str) {
  return /[1][3-8]\d{9}$|([6|9])\d{7}$|[0][9]\d{8}$|6\d{5}$/.test(str)
}

/**
 * 
 * @desc   判断是否为固定电话
 * @param  {String|Number} str 
 * @return {Boolean} 
 */
export function isTel(str) {
  return /^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(str)
}