<script setup lang="ts" name="EditCategory">
import { useCategoryStore } from "@/stores/categoryStore";
import { storeToRefs } from "pinia";
import useEditCategory from "./hooks/useEditCategory";
import { useRouter } from 'vue-router'
const router = useRouter() 

const { categoryList } = storeToRefs(useCategoryStore());
const { createCategory, deleteCategory, updateCategory } = useCategoryStore();
const {
  nowSelectCategory,
  clickTag,
  showInput,
  inputValue,
  InputRef,
  showInputfunc,
} = useEditCategory();

// 提交新增输入框
function submitInput() {
  createCategory(inputValue.value);
  showInput.value = false;
  inputValue.value = "";
}
</script>

<template>
  <div class="editCategory">
    <div class="title">所有分类</div>
    <!-- 分类列表 -->
    <div class="list">
      <el-tag
        :effect="nowSelectCategory.id === item.id ? 'dark' : 'light'"
        v-for="item in categoryList"
        :key="item.id"
        closable
        :disable-transitions="false"
        @click="clickTag(item)"
        @close="deleteCategory(item.id)"
        size="large"
      >
       {{ item.sort }} . {{ item.name }}
      </el-tag>
      <!-- 新增输入框 -->
      <el-input
        class="checkInput"
        v-show="showInput"
        ref="InputRef"
        v-model="inputValue"
        width="80px"
        @keyup.enter="submitInput()"
        @blur="submitInput()"
      />
      <!-- 新增按钮 -->
      <el-button v-show="!showInput" @click="showInputfunc">
        + 新增分类
      </el-button>
    </div>
    <div class="title">当前选中分类详细信息</div>
    <!-- 当前选中分类详细信息 -->
    <div class="nowSelectForm">
      <div class="flexItem">
        <div class="label">类别名称</div>
        <el-input
          v-model="nowSelectCategory.name"
          :disabled="!nowSelectCategory.id"
        ></el-input>
      </div>
      <div class="flexItem">
        <div class="label">类别排序</div>
        <el-input
          v-model="nowSelectCategory.sort"
          :disabled="!nowSelectCategory.id"
        ></el-input>
      </div>
      <!-- 按钮 -->
      <div class="flexItem">
        <el-button
          @click="updateCategory(nowSelectCategory)"
          type="primary"
          size="large"
          v-if="nowSelectCategory.id"
          >保存</el-button
        >
        <el-button @click="router.back()" type="danger" size="large">返回</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.editCategory {
  // padding-top: 40px;
  .title {
    font-size: 24px;
    font-weight: 700;
    margin: 50px 0 10px;
    color: #333;
  }
  .el-tag {
    margin: 6px;
    margin-right: 10px;
    cursor: pointer;
  }
  .checkInput {
    width: 100px;
    flex: none;
  }
  .nowSelectForm {
    margin-top: 30px;
    padding-left: 10px;
    .flexItem {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .label {
        margin-right: 20px;
      }
      .el-input {
        width: 300px;
      }
    }
  }
}
</style>
