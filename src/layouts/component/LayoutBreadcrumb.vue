<!--
 * @Author: HHG
 * @Date: 2023-01-22 18:58:23
 * @LastEditTime: 2023-01-23 19:45:28
 * @LastEditors: 韩宏广
 * @FilePath: /showreel/src/layouts/component/LayoutBreadcrumb.vue
 * @文件说明: 
-->
<script setup>
import { onMounted} from 'vue'
const breadcrumbList = defineProps(['breadcrumbList'])
onMounted(()=>{
  console.log(breadcrumbList.breadcrumbList);
})
</script>
<template>
  <a-breadcrumb v-for="item in breadcrumbList.breadcrumbList" :key="item.name" style="margin: 16px 0">
    <!-- {{ breadcrumbList.breadcrumbList }} -->

    <a-breadcrumb-item>{{ item.name }}</a-breadcrumb-item>

  </a-breadcrumb>
</template>

<style>

</style>