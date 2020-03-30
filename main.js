import Vue from 'vue'
import App from './App'
import filter from './filter'
import store from './store'

Vue.config.productionTip = false

// 注册过滤器
Object.keys(filter).forEach(k => Vue.filter(k, filter[k]))

App.mpType = 'app'

const app = new Vue({
	...App,
	filter,
	store
})
app.$mount()
