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

#### 5-4 Egg.js 中的定时任务

### 第6章 Egg.js 操作 Mysql 数据库

#### 6-1 安装 Mysql 数据库

创建 `egg` 数据库
`create database egg;`

#### 6-2 Mysql 入门，基础增删改查操作

```sql
-- 删除数据库
drop database egg;

-- 创建数据库
create database egg;

-- 创建表
use egg;
-- int(10) 类型
-- not null 不允许为空
-- auto_increment 自增
-- default 默认值
-- comment 备注
-- primary key() 设置主键
-- engine=InnoDB 设置引擎
-- charset=utf8 字符集
create table user(
  id int(10) not null auto_increment,
  name varchar(20) not null default 'guest' comment '用户名',
  pwd varchar(50) not null comment '密码',
  primary key(id)
)engine=InnoDB charset=utf8;

-- 查看表
show tables;

-- 查看表结构
desc user;

-- 删除表
drop table user;

-- 插入表数据
insert into user values(1, 'user1', '123');
insert into user(name, pwd) values('user1', '123');

-- 查询表数据
select * from user;
select id, name from user;
select id, name from user where id = 1;

-- 修改表数据
update user set pwd = '123456' where id = 1;

-- 删除表数据
delete from user where id = 2;
```

#### 6-3 使用egg-mysql插件操作数据库

满足中小型项目需求
(CRUD 语句)[https://eggjs.org/zh-cn/tutorials/mysql.html#%E5%A6%82%E4%BD%95%E7%BC%96%E5%86%99-crud-%E8%AF%AD%E5%8F%A5]

#### 6-4 Egg.js 中使用 Sequelize 操作 mysql 数据库

(Sequelize 中文文档)[https://www.sequelize.com.cn/]