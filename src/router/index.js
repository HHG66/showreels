/*
 * @Author: HHG
 * @Date: 2023-02-10 12:07:23
 * @LastEditTime: 2023-02-12 18:43:00
 * @LastEditors: 韩宏广
 * @FilePath: /showreel/src/router/index.js
 * @文件说明: 
 */
const Router = require('@koa/router');
const fs = require("fs");
const path = require('path');
const requireDirectory = require('require-directory')

class InitController {
  static InitCore(app) {
    InitController.app = app
    InitController.InitLoadRouters()
  }
  static InitLoadRouters() {
    InitController.readDir(__dirname);
  }
  //打包后无法使用，module无法找到
  static readDir = (entry) => {
    // let router = require.context('../router', true, /\.js$/);
    const router = requireDirectory(module, '../router', { visit: ModuleLoad })
    function ModuleLoad(obj) {
      // 如果是路由就进行注册
      if (obj instanceof Router) {
        InitController.app.use(obj.routes())
        InitController.app.use(obj.allowedMethods())
      }
    }
  }

}
module.exports = InitController