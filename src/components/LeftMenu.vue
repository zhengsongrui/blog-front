<script setup lang="ts" name="LeftMenu">
import useLeftMenu from '@/hooks/useLeftMenu'

let { changeAsideWidth, asideBtnText, asideWidth, initAsideWidth } = useLeftMenu()

</script>

<template>
  <div class="checkBtn" @click="changeAsideWidth()">{{ asideBtnText }}</div>
  <div class="leftMenu" :style="`width:${asideWidth}px;`">
    <div class="content" :style="`width:${initAsideWidth}px;`">
      <!-- <div class="flexItem" >
        <div class="title">编辑模式：</div>
        <div class="tip" v-if="!showEditBtn">（登录后解锁）</div>
      </div> -->
      <a href="https://github.com/zhengsongrui" target="_blank">前往项目GitHub地址</a>
      <div style="margin-top: 20px;">待开发功能：</div>
      <div>1.浏览记录</div>
      <div>2.搜索</div>
      <div>3.优化阅读视窗和页面宽度</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.checkBtn {
  font-size: 24px;
  width: 18px;
  height: 30px;
  line-height: 30px;
  border-radius: 0  18px  18px 0 ;
  top: calc(50% - 50px);
  background-color: rgba(0, 0, 0, .4);
  color: #fff;
  text-align: center;
  position: absolute;
  right: -22px;
  z-index: 99;
  cursor: pointer;
  padding: 4px 2px 4px 2px;
  box-sizing: content-box;
}

.leftMenu {
  height: 100%;
  transition: all .2s ease-out;
  overflow: hidden;

  .content {
    padding: 10px;
    a{
      color:yellowgreen;
      text-decoration: none;
    }
    .flexItem{
      display: flex;
      align-items: center;
      .title{
        font-weight: 700;
      }
      .tip{
        font-weight: 700;
        font-size: 14px;
        color: rgb(202, 0, 0);
      }
    }
  }
}
</style>