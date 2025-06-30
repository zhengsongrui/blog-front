<script setup lang="ts" name="Login">
import useLogin from "@/hooks/useLogin";
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";
let { username, password, loginFunc, clearInput } = useLogin();
let { showLoginView } = storeToRefs(useUserStore());
let { checkLoginView } = useUserStore();
</script>

<template>
  <div class="loginModal" v-show="showLoginView">
    <div class="loginView">
      <div class="title">登录</div>
      <div class="inputView">
        <el-input
          v-model="username"
          style="width: 300px"
          placeholder="用户名"
          size="large"
        />
      </div>
      <div class="inputView">
        <el-input
          v-model="password"
          style="width: 300px"
          placeholder="密码"
          size="large"
          type="password"
        />
      </div>
      <div class="actionView">
        <el-button type="primary" size="large" @click="loginFunc()"
          >登录</el-button
        >
        <el-button
          @click="
            checkLoginView(false);
            clearInput();
          "
          type="danger"
          size="large"
          >取消</el-button
        >
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.loginModal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  .loginView {
    width: 375px;
    height: 260px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 6px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 30px;
    }
    .inputView {
      margin-bottom: 20px;
    }
    .actionView {
      padding-top: 10px;
      font-size: 18px;
    }
  }
}
</style>
