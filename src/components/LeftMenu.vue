<script setup lang="ts" name="LeftMenu">
import useLeftMenu from "@/hooks/useLeftMenu";
import { Search } from "@element-plus/icons-vue";

let {
  changeAsideWidth,
  getArticleByPage,
  goAndRefresh,
  asideBtnText,
  asideWidth,
  initAsideWidth,
  activeMenu,
  searchValue,
  dataTotalNum,
  searchListData,
  browsingHistory,
} = useLeftMenu();
</script>

<template>
  <div class="checkBtn" @click="changeAsideWidth()">{{ asideBtnText }}</div>
  <div class="leftMenu" :style="`width:${asideWidth}px;`">
    <div class="content" :style="`width:${initAsideWidth}px;`">
      <!-- <div class="flexItem" >
        <div class="title">编辑模式：</div>
        <div class="tip" v-if="!showEditBtn">（登录后解锁）</div>
      </div> -->

      <el-tabs v-model="activeMenu" type="card">
        <el-tab-pane label="搜索" name="1">
          <div class="paneView">
            <el-input
              v-model="searchValue"
              placeholder="按名称搜索文章"
              @keydown.enter="getArticleByPage()"
            >
              <template #append>
                <el-button :icon="Search" @click="getArticleByPage()" />
              </template>
            </el-input>
            <div class="searchList">
              <div class="tips">
                仅展示前10条数据（搜索到{{ dataTotalNum }}条数据）
              </div>
              <div
                class="searchItem"
                v-for="(item, index) in searchListData"
                :key="item.id"
              >
                <span class="itemNum">{{ index + 1 }}. </span>
                <el-link type="success" @click="goAndRefresh(item.id)">{{
                  item.title
                }}</el-link>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="浏览记录" name="2">
          <div class="historyList">
            <div
              class="searchItem"
              v-for="(item, index) in browsingHistory"
              :key="item.id"
            >
              <span class="itemNum">{{ index + 1 }}. </span>
              <el-link type="success" @click="goAndRefresh(item.id)">{{
                item.title
              }}</el-link>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <a class="github" href="https://github.com/zhengsongrui" target="_blank"
        >前往项目GitHub地址</a
      >
    </div>
  </div>
</template>

<style scoped lang="less">
.checkBtn {
  font-size: 24px;
  width: 18px;
  height: 30px;
  line-height: 30px;
  border-radius: 0 18px 18px 0;
  top: calc(50% - 50px);
  background-color: rgba(0, 0, 0, 0.4);
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
  transition: all 0.2s ease-out;
  overflow: hidden;
  position: relative;
  .content {
    // padding: 10px;

    .flexItem {
      display: flex;
      align-items: center;
      .title {
        font-weight: 700;
      }
      .tip {
        font-weight: 700;
        font-size: 14px;
        color: rgb(202, 0, 0);
      }
    }
    .paneView {
      padding: 0 10px;
    }
    .searchList {
      .tips {
        text-align: center;
        margin: 10px 0;
        font-size: 16px;
      }
      .searchItem {
        border-bottom: 1px solid #eee;
        padding: 4px 10px;
      }
    }
    .historyList {
      padding:0 20px;
    }
    .itemNum {
      font-size: 14px;
    }
  }
  .github {
    position: absolute;
    bottom: 0;
    color: yellowgreen;
    text-decoration: none;
    background-color: white;
    padding: 10px;
  }
}
</style>

<style lang="less">
.leftMenu {
  .el-tabs__item {
    border-left: 1px solid #e4e7ed !important;
    border-right: 1px solid #e4e7ed !important;
    margin-left: -1px;
    border-top: 1px solid #e4e7ed !important;
  }
  .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: none;
  }
}
</style>
