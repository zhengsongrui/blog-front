<script setup lang="ts">
import useLeftMenu from '@/hooks/useLeftMenu'
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
let { changeAsideWidth, asideBtnText, asideWidth, initAsideWidth } = useLeftMenu()
let { editModel } = storeToRefs(useUserStore()) 
let showEditBtn = !!localStorage.getItem('token')
</script>

<template>
  <div class="checkBtn" @click="changeAsideWidth()">{{ asideBtnText }}</div>
  <div class="leftMenu" :style="`width:${asideWidth}px;`">
    <div class="content" :style="`width:${initAsideWidth}px;`">
      <div class="flexItem" v-if="showEditBtn">
        <div class="title">编辑模式：</div>
        <el-switch v-model="editModel" inline-prompt size="large" active-text="开启" inactive-text="关闭" />
      </div>
      <div>侧边辅助栏(开发中...)</div>
      <div>1.浏览记录</div>
      <div>2.搜索</div>
      <div>3.token过期</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.checkBtn {
  width: 30px;
  height: 60px;
  line-height: 30px;
  top: calc(50% - 30px);
  background-color: #999;
  color: white;
  text-align: center;
  position: absolute;
  right: -30px;
  z-index: 99;
  cursor: pointer;
}

.leftMenu {
  height: 100%;
  transition: all .2s ease-out;
  overflow: hidden;

  .content {
    padding: 10px;
    .flexItem{
      display: flex;
      align-items: center;
      .title{
        font-weight: 700;
      }
    }
  }
}
</style>