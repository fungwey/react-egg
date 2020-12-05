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

### 2 REACT 组件

#### 2-2 REACT 组件之间的通信方式

安装类型校验

```bash
yarn add  prop-types --save
```

1. 父组件向子组件传值 `props`
2. 子组件向父组件传值 `函数`
3. 兄弟组件传值 `兄通过函数传父 父再通过props传子`

#### 2-3 DVA 数据处理及数据 mock

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

#### 2-4 基于 react context api 实现数据流管理

[react content 官方文档](https://zh-hans.reactjs.org/docs/context.html#gatsby-focus-wrapper)

注意 Provider 和 Consumer

#### 2-5 LazyLoad 组件开发【基于 lazy 与 suspense 实现的懒加载组件】

[代码分割 懒加载 react 官方文档](https://zh-hans.reactjs.org/docs/code-splitting.html)

开启 .umirc.js dynamicImport: true 页面级的按需加载

lazy, Suspense

#### 2-6 ErrorBoundary 组件开发【基于 React 错误边界技术实现的组件】

错误边界是一种 React 组件，这种组件可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI，而不是渲染那些崩溃了的子组件树。错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误。

react/src/components/ErrorBoundary/index.js

```javascript

static getDerivedStateFromError(error) {
  console.log(error);
  // 更新 state 使下一次渲染能够显示降级后的 UI
  return {
    flag: true,
  };
}

/**
 *
 * @param {*} error 抛出的错误
 * @param {*} info 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息
 *
 * 做日志的相关操作
 */
componentDidCatch(error, info) {
  // 你同样可以将错误日志上报给服务器
  console.log('上报错误异常', error, info);
}
```

[错误边界（Error Boundaries）](https://zh-hans.reactjs.org/docs/error-boundaries.html)

#### 2-7 Modal 组件开发【基于 createPortal 创建自定义弹窗组件】

react/src/pages/class/modal/index.js
[官网文档](https://zh-hans.reactjs.org/docs/portals.html)

生成 protal
react/src/components/CreateProtal/index.js

封装 protal 弹窗
react/src/components/Modal/index.js

#### 2-7 使用 ref api 来操作 dom 和组件 (10.03)

数据流之外操作组件 或者 强制操作组件内的 dom 节点 使用 ref 操作 dom 节点和子组件

react ref api
forwardRef ref 值得引用 传递

### 3 REACT HOOK

#### 3-1 react hook api-新的组件开发模式

useState, useEffect, useLayoutEffect, useMemo, useCallback
的使用

#### 3-2 useContext 和 useReducer 实现数据流管理

useContext 和 useReducer 的使用

#### 3-3 useTitleHook【根据 url 修改页面 title 的自定义 hook】
