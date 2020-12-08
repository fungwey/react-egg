# egg

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org

### egg

#### 4-1 Egg.js 初体验

#### 4-2 Egg.js 中 Controller 的使用和单元测试

#### 4-3 Egg.js 路由中 get 请求的处理方式

#### 4-4 Egg.js 路由中 post.put.delete等请求的处理及参数校验

#### 4-6 Egg.js 中 Service 服务和单元测试

#### 4-7 Ejs 模版引擎中静态资源的使用和配置

#### 4-8 Egg.js 中 Cookie 的配置和使用以及如何设置中文cookie

#### 4-9 Egg.js 中 Session 的配置和使用

#### 4-10 Egg.js 中使用 HttpClient 请求其他接口 

### 第5章 Egg.js 高阶--插件中间件扩展等

#### 5-1 中间件，绕不开的洋葱圈模型【实现日志中间件httpLog】

#### 5-2 丰富的扩展方式，项目开发得心应手

Application,Context,Request,Response,Helper
提取公共逻辑，提升开发效率
[地址](https://eggjs.org/zh-cn/basics/extend.html)


#### 5-3 插件机制， Egg.js 灵活应用【实现用户登录验证插件egg-auth】