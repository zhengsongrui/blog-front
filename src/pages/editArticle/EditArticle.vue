<script setup lang="ts" name="EditArticle">
import { useCategoryStore } from "@/stores/categoryStore";
import useEditArticle from "./hooks/useEditArticle";
import { storeToRefs } from "pinia";
import request from "@/utils/request";
import { ref } from "vue";
const { articleData, goback, addArticle, deleteArticle, updateArticle } =
  useEditArticle();
const { categoryList } = storeToRefs(useCategoryStore());

const toolbars = {
  bold: true,
  italic: true,
  header: true,
  underline: true,
  strikethrough: true,
  mark: true,
  superscript: true,
  subscript: true,
  quote: true,
  ol: true,
  ul: true,
  link: true,
  imagelink: true,
  code: true,
  table: true,
  fullscreen: true,
  readmodel: true,
  htmlcode: true,
  help: true,
  subfield: true, // 单双栏模式
  preview: true, // 预览
};

const mdref = ref<any>(null);

function $imgAdd(pos: any, $file: any) {
  // 将图片上传到服务器.
  var formdata = new FormData();
  formdata.append("image", $file);
  request
    .post("/api/upload/singleFile", formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((result:any) => {
      mdref.value.$img2Url(pos, result.url);
    });
}
</script>

<template>
  <div class="editArticle">
    <div class="actionView">
      <el-button
        type="primary"
        @click="addArticle()"
        v-if="articleData.id === 0"
        >新增</el-button
      >
      <el-button
        type="primary"
        @click="updateArticle()"
        v-if="articleData.id > 0"
        >保存</el-button
      >
      <el-button
        type="danger"
        @click="deleteArticle()"
        v-if="articleData.id > 0"
        >删除</el-button
      >
      <el-button type="danger" @click="goback()" plain>返回</el-button>
    </div>
    <div class="inputView">
      <el-collapse :model-value="'1'">
        <el-collapse-item title="基础信息（可折叠）" name="1">
          <div class="flex">
            <div class="label">标题</div>
            <el-input v-model="articleData.title"></el-input>
          </div>
          <div class="flex">
            <div class="label">类别</div>
            <el-select
              v-model="articleData.categoryId"
              placeholder="请选择类型"
              style="width: 240px"
            >
              <el-option
                v-for="item in categoryList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </div>
          <div class="flex">
            <div class="label">描述</div>
            <el-input
              v-model="articleData.description"
              type="textarea"
            ></el-input>
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="title">内容（推荐使用工具栏的全屏编辑）</div>
      <mavon-editor
        ref="mdref"
        @imgAdd="$imgAdd"
        v-model="articleData.content"
        :toolbars="toolbars"
      ></mavon-editor>
    </div>
  </div>
</template>

<style lang="less" scoped>
.editArticle {
  .actionView {
    margin: 15px 0 15px;
  }
  .inputView {
    padding: 0 10px 10px;
    border-radius: 4px;
    background-color: white;
    .flex {
      display: flex;
      align-items: center;
      padding: 10px;
      .label {
        width: 60px;
        margin-right: 20px;
        font-size: 18px;
        flex: none;
      }
      .el-input {
        width: 300px;
      }
    }
    .title {
      font-size: 18px;
      padding: 10px;
    }
  }
}
</style>

<style lang="less">
.editArticle {
  .el-collapse {
    .el-collapse-item__title {
      font-size: 18px;
    }
    .el-collapse-item__wrap {
      border-bottom: none;
    }
  }
}
</style>
