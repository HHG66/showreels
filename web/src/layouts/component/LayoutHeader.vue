<!--
 * @Author: HHG
 * @Date: 2023-01-22 18:56:06
 * @LastEditTime: 2023-01-24 12:46:14
 * @LastEditors: 韩宏广
 * @FilePath: /showreel/src/layouts/component/LayoutHeader.vue
 * @文件说明: 
-->
<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { behindBasePath } from '@/router/roter.config.js'

const menuListProps = defineProps(['menuList'])
let childData = reactive({})
let selectedKeys = ref(['后台首页'])
const router = useRouter()
const emit = defineEmits(['childMethod'])

const skipRoute = (data, name) => {
  router.push(data)
  sessionStorage.setItem('selectedKeys', name);
  if (sessionStorage.getItem("selectedKeys")) {
    // 恢复文本输入框的内容
    selectedKeys.value = [sessionStorage.getItem("selectedKeys")]
  }
  // router.push(behindBasePath + data + '/index')
}
onMounted(() => {
  if (sessionStorage.getItem("selectedKeys")) {
    // 恢复文本输入框的内容
    selectedKeys.value = [sessionStorage.getItem("selectedKeys")]
  }
})
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
  <!-- {{ menuListProps.menuList }} -->

  <a-layout-header>
    <!-- <div class="logo" /> -->
    <!-- <button @click="childMethod1()">123</button> -->
    <a-menu theme="dark" mode="horizontal" :selectedKeys="selectedKeys" :style="{ lineHeight: '64px' }">
      <template v-for="item in menuListProps.menuList" :key="item.meta.ChName">
        <a-menu-item @click="skipRoute(item.path, item.meta.ChName)">{{ item.meta.ChName }}</a-menu-item>
      </template>
    </a-menu>
  </a-layout-header>
</template>
<style>

</style>