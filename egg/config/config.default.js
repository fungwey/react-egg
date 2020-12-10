/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607309848543_9939';

  // add your middleware config here
  config.middleware = [ 'httpLog' ];

  config.httpLog = {
    type: 'all',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping: {
      ".html": "ejs",
    },
    root: [ path.join(appInfo.baseDir, 'app/view'), path.join(appInfo.baseDir, 'app/html') ].join(','), // 支持数组多目录配置
  };

  config.ejs = {
    delimiter: '%',
  };

  config.static = {
    prefix: "/assets/",
    dir: path.join(appInfo.baseDir, "app/assets"),
  };

  config.session = {
    key: "FW_SESS",
    httpOnly: true,
    maxAge: 1000 * 50,
    renew: true, // 过期时间少于一半的时候自动刷新
  };

  config.auth = {
    exclude: [ '/home', '/user', '/login', '/logout' ],
  };

  config.mysql = {
    app: true,
    agent: false,
    client: {
      host: 'localhost',
      port: '3306',
      user: 'fengwei',
      password: 'fengwei',
      database: 'egg',
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    user: 'fengwei',
    password: 'fengwei',
    database: 'egg',
    define: {
      timestamps: false, // 不需要sequelize 添加时间
      freezeTableName: true, // 冻结表名称
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
