# uni-app-demo

>uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。

###运行环境
```
 hbuilderX
```

###技术栈
```
 vue/vuex/uni-ui/小程序
```

###目录结构
```

├─assets        # 存放相关资源，图片、js文件以及样式文件
│  ├─images
│  ├─js
│  └─styles
├─eventBus      # 事件中转站，集中处理监听事件，一般用以处理跨页面跨组件的事件通知
├─filter        # 过滤器相关
├─pages         # 页面存放
│  ├─demo
│  └─index
├─static        # 存放静态资源
├─store         # vuex相关             
└─utils         # 存放公用方法
│ App.vue 
│ main.js       # 入口文件
│ manifest.json # 配置文件
│ pages.json    # 页面配置文件
│ README.md
│ uni.scss      # uni-ui样式，可通过修改样式变量更换ui组件风格

```
###vuex调用
```javascript
// 详见demo页

import { mapGetters, mapMutations } from 'vuex';

methods: {
    ...mapMutations(['SET_USERINFO']),
},

onLoad() {
    this['SET_USERINFO']({
    name: '张三',
    sex: '男'
});
}
```

###事件中转调用
```javascript
// 详见demo页

import eventListener from '@/eventBus';

onLoad() {
    eventListener['TEST_ON'](() => {
        console.log('事件中转触发');
    });
},

methods: {
    handleClick() {
        eventListener['TEST_EMIT']();
    }
},
	
```