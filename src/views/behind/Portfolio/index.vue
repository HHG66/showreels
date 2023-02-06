<!--
 * @Author: HHG
 * @Date: 2023-01-23 21:25:46
 * @LastEditTime: 2023-01-24 13:10:35
 * @LastEditors: 韩宏广
 * @FilePath: /showreel/src/views/behind/Portfolio/index.vue
 * @文件说明: 
-->
<script setup>
import { defineComponent, reactive, ref } from 'vue';
import { InboxOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
const formState = reactive({
  name: '',
  type: '',
  remark: '',
});
const fileList = ref([])
const onFinish = values => {
  console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
const handleChange = info => {
  const status = info.file.status;
  if (status !== 'uploading') {
    console.log(info.file, info.fileList);
  }
  if (status === 'done') {
    message.success(`${info.file.name} file uploaded successfully.`);
  } else if (status === 'error') {
    message.error(`${info.file.name} file upload failed.`);
  }
};
const beforeUpload = file => {
  console.log(file);
  fileList.value = [...fileList.value, file];
  return false;
};
const handleDrop = e => {
  console.log(e);
}
</script>
<template>
  作品集管理
  <a-row>
    <a-col :span="12">
      <a-form :model="formState" name="basic" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }" autocomplete="off"
        @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item label="项目集名称" name="username" :rules="[{ required: true, message: '请输入项目名称!' }]">
          <a-input v-model:value="formState.name" />
        </a-form-item>

        <a-form-item label="类型" name="remark">
          <a-select v-model:value="formState.type">
            <!-- demo类型展示，只是展示demo -->
            <a-select-option value="demo">demo</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item label="备注" name="remark">
          <a-textarea v-model:value="formState.remark" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">确定</a-button>
        </a-form-item>
      </a-form>
    </a-col>
    <a-col :span="12">
      <a-upload-dragger v-model:fileList="fileList" :before-upload="beforeUpload" directory name="file" :multiple="true"
        action="xxxx" @change="handleChange" @drop="handleDrop">
        <p class="ant-upload-drag-icon">
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
        <p class="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </a-upload-dragger>

    </a-col>
  </a-row>


</template>
<style lang="less" scoped>

</style>