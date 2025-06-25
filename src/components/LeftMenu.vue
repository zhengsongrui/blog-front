<script setup lang="ts">
import useLeftMenu from '@/hooks/useLeftMenu'
let { changeAsideWidth, asideBtnText, asideWidth,initAsideWidth } = useLeftMenu()
</script>

<template>
  <div class="checkBtn" @click="changeAsideWidth()">{{ asideBtnText }}</div>
  <div class="leftMenu" :style="`width:${asideWidth}px;`">
    <div class="content" :style="`width:${initAsideWidth}px;`">
      <div>侧边辅助栏</div>
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
  .content{
    padding: 10px;
  }
}
</style>