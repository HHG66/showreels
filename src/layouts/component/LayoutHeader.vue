<!--
 * @Author: HHG
 * @Date: 2023-01-22 18:56:06
 * @LastEditTime: 2023-01-23 15:01:56
 * @LastEditors: 韩宏广
 * @FilePath: /showreel/src/layouts/component/LayoutHeader.vue
 * @文件说明: 
-->
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { behindBasePath } from '@/router/roter.config.js'

const menuListProps = defineProps(['menuList'])
let childData = reactive({})
const router = useRouter()
const skipRoute = (data) => {
  // router.push('/'+data+'/index')
  router.push(behindBasePath + data + '/index')
}
const emit = defineEmits(['childMethod'])
const emitMethod = (data) => {
  // console.log(data);
  childData = {
    ...data,
    ss: '88'
  }
  // console.log(childData);
  console.log('子组件处理父组件传递的参数。');
  emit('childMethod', childData)
}

//将组建的setup下注册的方法暴露出去，这样父组件就可以通过这个暴露的方法调用
defineExpose({
  emitMethod
})

</script>
<template>
  <a-layout-header>
    <div class="logo" />
    <!-- <button @click="childMethod1()">123</button> -->
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }"
      v-for="item in menuListProps">
      <a-menu-item :key="item.path" @click="skipRoute(item.path)">{{ item.name }}</a-menu-item>
      <!-- <a-menu-item key="2" @click="skipRoute('nav2')">nav 2</a-menu-item>
      <a-menu-item key="3" @click="skipRoute('nav3')">nav 3</a-menu-item> -->
    </a-menu>
  </a-layout-header>
</template>
<style>

</style>