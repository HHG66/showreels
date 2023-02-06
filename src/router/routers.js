/*
 * @Author: HHG
 * @Date: 2023-01-22 13:26:04
 * @LastEditTime: 2023-01-24 10:10:15
 * @LastEditors: 韩宏广
 * @FilePath: /showreel/src/router/routers.js
 * @文件说明: 
 */

import Login from '@/views/behind/Login.vue'
import Layout from '@/layouts/index.vue'
import Home from '@/views/front/Home/index.vue'
// import Portfolio from '@/views/behind/Portfolio/index.vue'
import { behindBasePath } from './roter.config'
// import About from '@/views/behind/About/index.vue'
// const Nav1 = { template: '<div>Nav1</div>' }
// const Nav2 = { template: '<div>Nav2</div>' }
const behindRoutes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      ChName: '登录'
    },
  },
  {
    path: behindBasePath + '/home',
    name: 'home',
    component: Layout,
    redirect: behindBasePath + '/home/index',
    children: [
      {
        path: 'index',
        name: 'home1',
        // component: () => import('@/views/behind/Home/index.vue'),
        component: () => import('@/views/behind/Home/index.vue'),
        meta: {
          ChName: '后台首页'
        }
      }
    ]
  },
  {
    path: behindBasePath + '/portfolio',
    name: 'portfolio',
    component: Layout,
    redirect: behindBasePath + '/portfolio/manage',
    children: [
      {
        path: behindBasePath + '/portfolio/manage',
        name: 'portfolio/manage',
        component: () => import('@/views/behind/Portfolio/index.vue'),
        // component: Portfolio,
        meta: {
          ChName: '作品集管理'
        }
      }
    ]
  },
  {
    path: behindBasePath + '/about',
    name: 'about',
    component: Layout,
    redirect: behindBasePath + '/about/index',
    children: [
      {
        path: 'index',
        // component: About,
        name: 'about1',
        component: () => import('@/views/behind/About/index.vue'),
        meta: {
          ChName: '关于'
        },
      }
    ]
  },
  // { path: '/index', component: Home },
]
const frontRoutes = [
  // { path: '/', redirect: '/login' },
  {
    path: '/home',
    name: 'homes',
    component: Home,
    meta: {
      ChName: '首页'
    },
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/views/front/Project/index.vue'),
    meta: {
      ChName: '项目集'
    },
  }
]

export const basicRoutes = {
  behindRoutes,
  frontRoutes
}