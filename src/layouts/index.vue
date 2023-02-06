<!--
 * @Author: HHG
 * @Date: 2023-01-22 17:28:03
 * @LastEditTime: 2023-01-29 22:15:02
 * @LastEditors: 韩宏广
 * @FilePath: /showreel/src/layouts/index.vue
 * @文件说明: 
-->
<script setup>
import { defineComponent, ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter, isNavigationFailure } from 'vue-router';
import { basicRoutes } from '@/router/routers.js'
import LayoutHeader from './component/LayoutHeader.vue'
import LayoutBreadcrumb from './component/LayoutBreadcrumb.vue'

onMounted(() => {
  // console.log(route.meta.ChName);
  //用于检测路由变化后更改面包屑，不够优雅，暂时这样
  router.afterEach((to, from, failure) => {
    breadcrumbList.value = [{ name: to.meta.ChName }]
  })
  //面包屑的缓冲，取值和菜单名称相同，以后需要修改
  if (sessionStorage.getItem("selectedKeys")) {
    // 恢复文本输入框的内容
    breadcrumbList.value = [{ name: sessionStorage.getItem("selectedKeys") }]
  }

  //这里应该通过后端传回来路由表生成页面导航
  let rou = []
  let excludeRoute = ['/login', '/']
  basicRoutes.behindRoutes.forEach(element => {
    if (element.children) {
      element.children.forEach((children) => {
        rou.push({
          path: element.redirect,
          name: children.name,
          meta: {
            ChName: children.meta.ChName
          }
        })
      })
    } else {
      if (!(excludeRoute.indexOf(element.path) > -1)) {
        rou.push({
          path: element.path,
          name: element.name,
          meta: {
            ChName: element.meta.ChName
          }
        })
      }
    }
  });
  menuList.value = rou
})
let menuList = ref([
  // {
  //   path: '/home',
  //   name: 'homes',
  //   meta: {
  //     ChName: '首页'
  //   },
  // },
]
)
let breadcrumbList = ref([
  {
    name: '后台首页'
  }
])
const Layoutheader = ref(null)
// const test = () => {
//   Layoutheader.value.emitMethod({
//     content: "hah"
//   })
// }
const route = useRoute()
const router = useRouter()
//子传父的方法
const fatherMethod = (params) => {
  console.log(params);
}
</script>
<template>
  <a-layout class="layout main">
    <LayoutHeader ref="Layoutheader" :menuList="menuList" @childMethod="fatherMethod" />
    <a-layout-content style="padding: 0 50px">
      <LayoutBreadcrumb :breadcrumbList="breadcrumbList" />
      <!-- // :style="{ background: '#fff', padding: '24px', minHeight: '280px' }" -->
      <div class="layout-content">
        <RouterView />
        <!-- <button @click="test()">触发子组件方法</button> -->
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
 

<style scoped lang="less">
.layout {
  width: 100%;
  height: 100%;
}

& .layout-content {
  background: #fff;
  padding: 24px;
  min-height: calc(100%);
}
</style>
