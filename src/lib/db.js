/*
 * @Author: HHG
 * @Date: 2023-02-12 11:37:58
 * @LastEditTime: 2023-02-12 17:30:32
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/src/lib/db.js
 * @文件说明: 
 */
const mongoose = require('mongoose');
module.exports = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect('mongodb://127.0.0.1:27017/test', {
    // mongoose.connect('mongodb://mywebsite:han1314.@118.31.79.83:27017/my_website', {
    //mongodb://mywebsite:han1314.@118.31.79.83:27017/my_website
      //'mongodb://127.0.0.1:27017/my_website'
      // mongodb://admin:12345@localhost:27017/my_website 
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(function () {
      console.log('数据库连接成功');
    })
    .catch(function (err) {
      console.log('数据库连接失败', err);
    })
}