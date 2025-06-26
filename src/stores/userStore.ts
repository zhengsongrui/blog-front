import { defineStore } from "pinia"
import { ref } from "vue"
import { type UserDataInter } from "@/types/userApi.types"
// import request from '@/utils/request'

export const useUserStore = defineStore('user', () => {
  const showLoginView = ref(false)
  const userInfo = ref<{nickname?:string}>({})
  if(localStorage.getItem("userInfo")){
    userInfo.value = JSON.parse(localStorage.getItem("userInfo") || "{}")
  }


  function checkLoginView(status: boolean) {
    showLoginView.value = status
  }

  function setUserInfo(userdata: UserDataInter | {}) {
    userInfo.value = userdata
    localStorage.setItem("userInfo",JSON.stringify(userdata))
  }

  

  // async function getUserInfo() {
  //   try {
  //     const res = await request.get('/api/user/findUser')
  //     if (res.data) {
  //       userInfo.value = res.data
  //     }
  //   } catch {
  //   }
  // }

  return { showLoginView, userInfo, checkLoginView, setUserInfo  }
})