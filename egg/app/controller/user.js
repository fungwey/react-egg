"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  encode(str = '') {
    return new Buffer(str).toString("base64");
  }
  decode(str = '') {
    return new Buffer(str, "base64").toString();
  }
  async index() {
    const { ctx } = this;
    // ctx.body = "user index";
    // 获取session
    const session = ctx.session.user;
    const zhSession = ctx.session.zh;
    console.log(session);
    console.log(zhSession);

    /**
     * 不能设置中文
     * 如果需要设置中文cookie需要加密
     */
    ctx.cookies.set("zh", "测试", {
      encrypt: true,
    });
    // 获取中文的需要解密
    const zh = ctx.cookies.get("zh", {
      encrypt: true,
    });
    // console.log(zh)

    ctx.cookies.set("base64", this.encode("中文base64"));
    const base64 = this.decode(ctx.cookies.get("base64"));

    // ctx.body = 'user index';
    const user = ctx.cookies.get("user");
    await ctx.render('user.html', {
      id: 100,
      name: 'admin',
      lists: [
        'java', 'php', 'ts',
      ],
      user: user ? JSON.parse(user) : null,
      zh,
      base64,
    }, {
      delimiter: '%',
    });
  }

  async lists() {
    const { ctx } = this;
    // console.log(app.mysql);
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 1500);
    // });
    const res = await ctx.service.user.lists();

    ctx.body = res;
  }


  async detail() {
    const { ctx } = this;
    const res = await ctx.service.user.detail(10);
    console.log(res);
    ctx.body = ctx.query.id;
  }

  async detail2() {
    const { ctx } = this;
    const res = await ctx.service.user.detail2(ctx.params.id);
    ctx.body = res;
  }

  async add() {
    const { ctx } = this;
    console.log(ctx.request.body);

    // const rule = {
    //   name: { type: 'string' },
    //   age: { type: 'number' },
    // };
    // ctx.validate(rule);
    const res = await ctx.service.user.add(ctx.request.body);
    ctx.body = {
      status: 200,
      data: res,
    };
  }

  async edit() {
    const { ctx } = this;

    const res = await ctx.service.user.edit(ctx.request.body);
    ctx.body = res;
  }

  async del() {
    const { ctx } = this;

    const res = await ctx.service.user.delete(ctx.request.body.id);
    ctx.body = res;
  }


  async login() {
    const { ctx } = this;
    const body = ctx.request.body;
    ctx.cookies.set("user", JSON.stringify(body), {
      maxAge: 1000 * 60 * 10,
      httpOnly: false, // 是否允许浏览器修改
    });

    // 保存session
    ctx.session.user = body;
    ctx.session.zh = "中文测试";
    ctx.session.test = "test";

    ctx.body = {
      status: 200,
      data: body,
    };
  }

  async logout() {
    const { ctx } = this;
    ctx.cookies.set("user", null);

    // 清除session
    ctx.session.user = null;

    ctx.body = {
      status: 200,
    };
  }
}

module.exports = UserController;
