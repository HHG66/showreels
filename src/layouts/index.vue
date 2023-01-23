<!--
 * @Author: HHG
 * @Date: 2023-01-22 17:28:03
 * @LastEditTime: 2023-01-23 14:17:15
 * @LastEditors: 韩宏广
 * @FilePath: /showreel/src/layouts/index.vue
 * @文件说明: 
-->
<script setup>
import { defineComponent, ref,reactive } from 'vue';
import LayoutHeader from './component/LayoutHeader.vue'
import LayoutBreadcrumb from './component/LayoutBreadcrumb.vue'
let selectedKeys = ref(['2'])
let menuList=reactive({
  path:'/nav1',
  name:'菜单1',
})
const Layoutheader = ref(null)
const test = () => {
  Layoutheader.value.emitMethod({
    content:"hah"
  })
}
const fatherMethod = (params) => {
  console.log(params);  
}
</script>

<template>
  <a-layout class="layout main">
    <LayoutHeader ref="Layoutheader" :menuList="menuList" @childMethod="fatherMethod" />
    <a-layout-content style="padding: 0 50px">
      <LayoutBreadcrumb />
      <!-- // :style="{ background: '#fff', padding: '24px', minHeight: '280px' }" -->
      <div class="layout-content">
        <RouterView />
        <button @click="test()">触发子组件方法</button>
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
