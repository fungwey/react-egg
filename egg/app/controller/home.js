"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.user.detail(10);
    console.log(res);
    ctx.body = "hi, egg";
  }

  async demo() {
    const { ctx } = this;
    ctx.body = "demo page";
  }
}

module.exports = HomeController;
