<script setup lang="ts" name="Layout">
import MyHeader from './MyHeader.vue';
import LeftMenu from './LeftMenu.vue';
// import Breadcrumb from './Breadcrumb.vue';
import Login from './Login.vue';

</script>

<template>
  <el-container class="topContainer">
    <el-header class="myHeader">
      <MyHeader></MyHeader>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <LeftMenu/>
      </el-aside>
      <el-main>
        <div class="marginView">
          <!-- <Breadcrumb></Breadcrumb> -->
          <RouterView></RouterView>
        </div>
      </el-main>
    </el-container>
  </el-container>
  <Login/>
</template>

<style lang="less" scoped>


.topContainer {
  background-color: rgba(255, 255, 255, .9);
  height: 100%;
  
  .myHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .el-aside {
    overflow: visible;
    border-right: 1px solid #eee;
    background-color: rgba(255, 255, 255, 1);
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    z-index: 9999;
  }

 
  .el-main {
    padding: 10px;
    height: calc( 100vh - 60px );
    margin-top: 60px;
    overflow-y: auto;
    // background-color: #333;
     .marginView{
      margin: 0 auto;
      width: 700px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
