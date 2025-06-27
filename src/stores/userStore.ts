import { defineStore } from "pinia"
import { ref } from "vue"
import { type UserDataInter } from "@/types/userApi.types"
// import request from '@/utils/request'

export const useUserStore = defineStore('user', () => {
  // 显示登录
  let showLoginView = ref(false)
  function checkLoginView(status: boolean) {
    showLoginView.value = status
  }

  // 用户信息
  const userInfo = ref<{nickname?:string}>({})
  if(localStorage.getItem("userInfo")){
    userInfo.value = JSON.parse(localStorage.getItem("userInfo") || "{}")
  }
  function setUserInfo(userdata: UserDataInter | {}) {
    userInfo.value = userdata
    localStorage.setItem("userInfo",JSON.stringify(userdata))
  }

  // 打开/关闭编辑模式
  let editModel = ref(false)

  // async function getUserInfo() {
  //   try {
  //     const res = await request.get('/api/user/findUser')
  //     if (res.data) {
  //       userInfo.value = res.data
  //     }
  //   } catch {
  //   }
  // }

  return { showLoginView, userInfo, checkLoginView, setUserInfo  , editModel}
})