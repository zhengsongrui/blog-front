<script setup lang="ts">
import { computed , ref } from "vue"


// 侧边栏宽度控制
let asideWidth = ref(200)
function changeAsideWidth() {
  if (asideWidth.value > 0) {
    asideWidth.value = 0
  } else {
    asideWidth.value = 200
  }
}

// 控制侧边栏按钮中的文本
let asideBtnText = computed(()=>{
    return asideWidth!.value === 0?'显示':'隐藏'
})

</script>

<template>
    <div class="leftMenu"  :style="`width:${asideWidth}px;`">
        <div class="checkBtn" @click="changeAsideWidth()">{{ asideBtnText }}</div>
    </div>
</template>

<style scoped lang="less">
.leftMenu{
    height: 100%;
    position: relative;
     transition: all .2s ease-out;
    .checkBtn{
        width: 30px;
        height: 60px;
        line-height: 30px;
        top: calc( 50% - 30px );
        background-color: #999;
        color: white;
        text-align: center;
        position: absolute;
        right: -30px;
        z-index: 99;
        cursor: pointer;
    }
}
</style>