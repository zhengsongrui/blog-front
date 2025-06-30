<script setup lang="ts" name="MyHeader">
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import { ElMessageBox } from 'element-plus'
import {useRouter} from 'vue-router'

const router = useRouter()
let { checkLoginView  } = useUserStore() 
let { userInfo } = storeToRefs(useUserStore())

// 登出
function loginOut(){
    ElMessageBox.confirm('确定要退出登录吗？', '提示',{
        cancelButtonText:'取消',
        confirmButtonText:'确定'
    }).then(()=>{
        localStorage.clear()
        location.reload()
    })
}


</script>

<template>
    <!-- logo -->
    <div class="logo" @click="router.push('/')">
        BACK
    </div>
    <div class="remark">
        开发中...
    </div>
    <!-- 右侧管理栏 -->
    <div v-show="userInfo.nickname" class="headerRight" @click="loginOut">
       {{ `欢迎！${userInfo.nickname}`}}
    </div>
    <div  v-show="!userInfo.nickname" class="headerRight" @click="checkLoginView(true)">
       请登录
    </div>
</template>

<style lang="less" scoped>
.logo {
    font-size: 24px;
    cursor: pointer;
    user-select: none;
}
.remark{
    font-size: 24px;
    color: rgb(192, 64, 64);
}
.headerRight {
    cursor: pointer;
}
</style>