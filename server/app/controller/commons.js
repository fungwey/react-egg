const Controller = require("egg").Controller;
const BaseContronller = require("./base");

class CommonsController extends BaseContronller {
  async citys() {
    // const { ctx, app } = this;
    // try {
    //   const result = await app.httpclient.request(
    //     "https://apis.imooc.com/?icode=89773B5DA84CA283",
    //     {
    //       dataType: "json",
    //     }
    //   );

    //   console.log(result);
    //   if (result.status === 300) {
    //     this.success(result.data);
    //   } else {
    //     this.error("获取失败");
    //   }
    // } catch (error) {
    //   this.error("异常");
    // }
    this.success([
      [
        {
          label: "杭州",
          value: "10001",
        },
        {
          label: "北京",
          value: "10002",
        },
        {
          label: "上海",
          value: "10003",
        },
        {
          label: "苏州",
          value: "10004",
        },
      ],
    ]);
  }
}

module.exports = CommonsController;
