/*
 * @Author: HHG
 * @Date: 2023-02-10 12:07:23
 * @LastEditTime: 2023-02-12 02:09:50
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/src/router/index.js
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
  // static readDir = (entry) => {
  //   let routers = []
  //   let router = require.context('../router', true, /\.js$/);
  //   router.keys().map(rou => {
  //     routers.push(router(rou))
  //     if (router(rou) instanceof Router) {
  //       InitController.app.use(router(rou).routes())
  //       InitController.app.use(router(rou).allowedMethods())
  //     }
  //   })
  // }
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

  static deepClone(target) {
    const map = new WeakMap()

    function isObject(target) {
      return (typeof target === 'object' && target) || typeof target === 'function'
    }

    function clone(data) {
      if (!isObject(data)) {
        return data
      }
      if ([Date, RegExp].includes(data.constructor)) {
        return new data.constructor(data)
      }
      if (typeof data === 'function') {
        return new Function('return ' + data.toString())()
      }
      const exist = map.get(data)
      if (exist) {
        return exist
      }
      if (data instanceof Map) {
        const result = new Map()
        map.set(data, result)
        data.forEach((val, key) => {
          if (isObject(val)) {
            result.set(key, clone(val))
          } else {
            result.set(key, val)
          }
        })
        return result
      }
      if (data instanceof Set) {
        const result = new Set()
        map.set(data, result)
        data.forEach(val => {
          if (isObject(val)) {
            result.add(clone(val))
          } else {
            result.add(val)
          }
        })
        return result
      }
      const keys = Reflect.ownKeys(data)
      const allDesc = Object.getOwnPropertyDescriptors(data)
      const result = Object.create(Object.getPrototypeOf(data), allDesc)
      map.set(data, result)
      keys.forEach(key => {
        const val = data[key]
        if (isObject(val)) {
          result[key] = clone(val)
        } else {
          result[key] = val
        }
      })
      return result
    }

    return clone(target)
  }

}
module.exports = InitController