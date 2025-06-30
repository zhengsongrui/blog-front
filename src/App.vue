<script setup lang="ts">
import Layout from './components/Layout.vue';
import { useCategoryStore } from "@/stores/categoryStore";
useCategoryStore().getCategoryList()

</script>

<template>
  <Layout />
</template>

<style lang="less">
html,
body,
#app {
  height: 100%;
}


* {
  margin: 0;
  padding: 0;
}

#app{
  background-image: url('@/assets/images/bg/bg1.webp');
  background-size:  auto 100%;
  background-repeat: no-repeat;
  background-position: center;
}
@media(min-width:600px) and (max-width:800px) {
  .el-main{
    >.marginView{
      width: 540px !important;
    }
  }
}
@media(min-width:380px)  and (max-width:600px) {
  .el-main{
    >.marginView{
      width: 360px !important;
    }
  }
}
@media (max-width:380px){
  .el-main{
    >.marginView{
      width: 340px !important;
    }
  }
}
</style>
