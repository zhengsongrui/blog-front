<script setup lang="ts" name="MyHeader">
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
let showEditBtn = !!localStorage.getItem("token");
let { editModel } = storeToRefs(useUserStore());
let { checkLoginView } = useUserStore();
let { userInfo } = storeToRefs(useUserStore());
const router = useRouter();

// 登出
function loginOut() {
  ElMessageBox.confirm("确定要退出登录吗？", "提示", {
    cancelButtonText: "取消",
    confirmButtonText: "确定",
  }).then(() => {
    localStorage.clear();
    location.reload();
  });
}
</script>

<template>
  <!-- logo -->
  <div class="logo" @click="router.push('/')">BACK</div>
  <div class="remark">开发中...</div>
  <!-- 右侧管理栏 -->
  <div v-show="userInfo.nickname" class="headerRight">
    <el-switch
      v-model="editModel"
      :disabled="!showEditBtn"
      inline-prompt
      size="large"
      active-text="编辑模式"
      inactive-text="阅读模式"
      style="--el-switch-on-color: #ff4949; --el-switch-off-color: #13ce66"
    />
    <div class="textView" @click="loginOut">
      {{ `欢迎！${userInfo.nickname}` }}
    </div>
  </div>
  <div v-show="!userInfo.nickname" class="headerRight">
    <el-switch
        @click="ElMessage.warning('请先登录')"
      v-model="editModel"
      :disabled="!showEditBtn"
      inline-prompt
      size="large"
      active-text="编辑模式"
      inactive-text="阅读模式"
      style="--el-switch-on-color: #ff4949; --el-switch-off-color: #13ce66"
    />
    <div class="textView" @click="checkLoginView(true)">点击登录</div>
  </div>
</template>

<style lang="less" scoped>
.logo {
  font-size: 24px;
  cursor: pointer;
  user-select: none;
}
.remark {
  font-size: 24px;
  color: rgb(192, 64, 64);
}
.headerRight {
  display: flex;
  align-items: center;
  .textView {
    cursor: pointer;
    margin-left: 10px;
  }
}
</style>
