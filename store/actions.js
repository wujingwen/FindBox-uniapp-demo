
import * as types from './mutation-types'

export const setUserInfo = function ({commit, state}, userInfo) {
	commit(types.SET_USERINFO, userInfo)
}
