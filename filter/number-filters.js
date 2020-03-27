/**
 * 数字格式化操作相关的过滤器
 */

import { floatFormat } from '@/utils/format-methods';

export default {
  /**
   * 相关浮点数的处理
   * @param {*} value 
   * @param {*} n 
   * @param {*} type 
   */
  floatFormat (value = 0, n = 2, type = 'cut') {
    let val = floatFormat(value, n, type);
    return val;
  },
  
  /**
   * 涨幅比例的处理
   * @param {*} value 
   */
  chgFormat (value = 0) {
    if (value === '--') return '--';

    let val = floatFormat(Number(value), 2);
    let chg = Number(val) >= 0? `+${val}%`: `${val}%`;
    return chg;
  },

  /**
   * 百分比的处理
   * @param {*} value 
   * @param {*} n 
   * @param {*} withSign 
   */
  percentFormat (value = 0, n = 2, withSign = true) {
    if (value === '--') return '--';
    value = value - 0;
    let str = value >= 0 && withSign? `${(value).toFixed(n)}%`:`${(value).toFixed(n)}%`
    return str;
  },

  /**
   * 保留几位小数
   * @param {*} value 
   * @param {*} n 
   */
  toFixed (value, n) {
    if (!value || !parseFloat(value)) return (0).toFixed(n)
    let parseNum = parseFloat(value)
    return parseNum.toFixed(n)
  }
}