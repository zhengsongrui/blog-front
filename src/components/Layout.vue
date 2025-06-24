<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import MyHeader from './MyHeader.vue';
import LeftMenu from './LeftMenu.vue';
import Breadcrumb from './Breadcrumb.vue';



</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <el-container>
    <el-header class="myHeader">
      <MyHeader></MyHeader>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <LeftMenu/>
      </el-aside>
      <el-main>
        <Breadcrumb></Breadcrumb>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>

.el-container {
  height: 100%;
}


.el-container {
  .myHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: red;
  }

  .el-aside {
    background-color: blue;
    overflow: visible;
   
  }

  .el-main {
    padding: 10px;
    // background-color: #333;
  }
}
</style>
