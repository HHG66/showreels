<!--
 * @Author: HHG
 * @Date: 2023-01-23 16:52:49
 * @LastEditTime: 2023-02-07 21:50:42
 * @LastEditors: 韩宏广
 * @FilePath: /showreel/src/views/front/Home/index.vue
 * @文件说明: 
-->
<script setup></script>
<template>
  首页

  <div>
    <p>This is the component content</p>
    <portal to="#modal">
      <p>This content will be rendered in the #modal element</p>
    </portal>
  </div>

  <div>123
    <div id="modal"></div>
  </div>
</template>
 
 
<style lang="less" scoped>

</style>