/*
 * @Author: HHG
 * @Date: 2023-01-22 13:26:04
 * @LastEditTime: 2023-01-23 15:01:24
 * @LastEditors: 韩宏广
 * @FilePath: /showreel/src/router/routers.js
 * @文件说明: 
 */

import Login from '@/views/behind/Login.vue'
import Layout from '@/layouts/index.vue'
import About from '@/views/behind/About/index.vue'
import { behindBasePath } from './roter.config'
const Nav1 = { template: '<div>Nav1</div>' }
const Nav2 = { template: '<div>Nav2</div>' }
const behindRoutes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
    },
  },
  {
    path: behindBasePath + '/about',
    name: 'about',
    component: Layout,
    redirect: behindBasePath + 'about/index',
    children: [
      {
        path: 'index',
        // component: About,
        name: 'about',
        component: () => import('@/views/behind/About/index.vue')
      }
    ]
  },
  {
    path: behindBasePath + '/nav1',
    name: 'nav1',
    component: Layout,
    redirect: behindBasePath + 'nav1/index',
    children: [
      {
        path: 'index',
        name: 'nav/index',
        // component: () => import('@/views/behind/About/index.vue')
        component: Nav1,
        meta: {

        }
      }
    ]
  },
  {
    path: behindBasePath + '/nav2',
    name: 'nav2',
    component: Layout,
    redirect: '/nav2/index',
    children: [
      {
        path: behindBasePath + '/nav2/index',
        name: 'nav2/index',
        // component: () => import('@/views/behind/About/index.vue')
        component: Nav2
      }
    ]
  },
  // { path: '/index', component: Home },
]

export const basicRoutes = {
  behindRoutes
}