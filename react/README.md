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
