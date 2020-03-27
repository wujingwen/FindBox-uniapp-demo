/*
 * @Author: Ivan.Wu
 * @LastEditors: Ivan.Wu
 * @Date: 2019-09-23 10:09:08
 * @LastEditTime: 2019-11-05 19:15:29
 */

import * as types from './mutation-types'

// Toast相关
import Vue from 'vue'


const mutaions = {

  /**
   * @description: 设置用户信息
   * @params: {*} userInfo 用户信息
   * @return: 
   */
  [types.SET_USERINFO](state, userInfo) {
    state.userInfo = userInfo;
  },

}

export default mutaions
