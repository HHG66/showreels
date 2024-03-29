/*
 * @Author: HHG
 * @Date: 2023-01-22 13:15:34
 * @LastEditTime: 2023-03-02 19:48:09
 * @LastEditors: 韩宏广
 * @FilePath: \showreels\web\src\router\index.js
 * @文件说明: 
 */
import * as VueRouter from 'vue-router';
import { basicRoutes } from './routers'

const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  // history: VueRouter.createWebHistory(),
  history: VueRouter.createWebHashHistory(),
  routes: [...basicRoutes.behindRoutes, ...basicRoutes.frontRoutes], // `routes: routes` 的缩写
  //禁用尾部/
  // strict: true,
})


export default router