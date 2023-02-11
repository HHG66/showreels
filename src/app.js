/*
 * @Author: HHG
 * @Date: 2023-02-08 22:13:49
 * @LastEditTime: 2023-02-12 02:11:06
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/src/app.js
 * @文件说明: 
 */
const Koa = require('koa')
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');

const InitController = require('./router/index.js')

const app = new Koa();

//写入全局变量
let router = new Router();
global.router = router

// let pathContext = require.context('../src', false, /\app.js$/)
// console.log(pathContext);
// pathContext.keys().map(item => {
//   console.log(item);
//   console.log(pathContext[item]);
// })
// require('app-module-path').addPath(pathContext.id);
require('app-module-path').addPath(__dirname);
// console.log(__dirname);

app.use(bodyParser())
InitController.InitCore(app)

//开启一个web服务器 
app.listen(3000, () => {
  console.log('启动服务 端口3000...');
});

global.app = app

module.exports = app
 