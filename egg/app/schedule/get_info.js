"use strict";

const Subscription = require('egg').Subscription;

class getInfo extends Subscription {
  static get schedule() {
    return {
      // interval: 3000, // 每隔3秒执行
      cron: '0 */1 * * * *', // 秒 分 小时 月某一天  月 一周内的某一天
      // */3 * * * * *  每隔3秒
      // 0 1 * * * *  每隔一分钟
      type: 'worker', // 类型 all 每个都会执行，worker 单个
    };
  }

  async subscribe() {
    const info = this.ctx.info;
    console.log(new Date(Date.now()), info);
  }
}

module.exports = getInfo;
