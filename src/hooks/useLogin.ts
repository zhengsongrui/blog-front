import { ref } from "vue"
import { ElMessage } from "element-plus"
import request from '@/utils/request'
import { useUserStore } from "@/stores/userStore"

export default function () {
    let username = ref("")
    let password = ref("")
    const { setUserInfo , checkLoginView }  = useUserStore()


    // 登录
    const loginFunc = async () => {
        if (!username.value || !password.value) {
            ElMessage({
                message: '请输入用户名和密码',
                type: 'warning',
            })
            return false
        }
        try {
            const res = await request.post('/api/user/login', {
                username: username.value,
                password: password.value,
            })
            if (res.data) {
                ElMessage({
                    message: `欢迎您！${res.data.user.nickname}`,
                    type: 'success',
                })
                localStorage.setItem("token",res.data.token)
                setUserInfo(res.data.user)
                clearInput()
                checkLoginView(false)
            } else {
                ElMessage({
                    message: res.data.message,
                    type: 'error',
                })
            }
        } catch (error) {
            console.error('请求失败:', error)
            ElMessage({
                message: '请求失败:'+ error,
                type: 'error',
            })
        }
    }

    // 清空输入框
    function clearInput() {
        username.value = ""
        password.value = ""
    }

    return {
        username,
        password,
        loginFunc,
        clearInput,
    }
}