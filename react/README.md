# 项目说明

## 2-1 REACT 组件生命周期

### 路由

路由跳转

import { Link } from 'umi'; 继承 react-dom

### 生命周期

https://juejin.cn/post/6844903741674651661

#### 旧生命周期

react/src/pages/class/component-old.js

#### 新生命周期

react/src/pages/class/component-new.js

## 2-2 REACT 组件之间的通信方式

安装类型校验

```bash
yarn add  prop-types --save
```

1. 父组件向子组件传值 `props`
2. 子组件向父组件传值 `函数`
3. 兄弟组件传值 `兄通过函数传父 父再通过props传子`

## 2-3 DVA 数据处理及数据 mock

[DVA 官网链接](https://dvajs.com/guide/introduce-class.html#model-%E5%AF%B9%E8%B1%A1%E7%9A%84%E4%BE%8B%E5%AD%90)

Model 对象
react/src/models/search.js

```javascript
{
  namespace: 'count', // 命名空间
  state: 0,
  reducers: {
    add(state) { return state + 1 },
  },
  effects: {
    *addAfter1Second(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'add' });
    },
  },
}
```
