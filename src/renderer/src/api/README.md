# API模块

## request.js
axios网络请求工具库

## base.js
可根据不同环境配置生成不同实体

## index.js
实际业务接口导出文件，从modules文件夹中收集不同功能模块请求接口配置，全部导出挂载到vue实例上。

## modules文件夹
业务接口目录

main.js
``` javascript
import apis from '@/api'

Vue.prototype.$api = apis
```

组件中使用
``` javascript
this.$api.test.getTestData()
  .then(res => console.log(res))
  .catch(err => console.log(err))
```