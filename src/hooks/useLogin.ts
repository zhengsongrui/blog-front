import { ref } from "vue"
import { ElMessage } from "element-plus"
import request from '@/utils/request'
import { useUserStore } from "@/stores/userStore"
import { ElLoading } from 'element-plus'
import md5 from "md5"


export default function () {
    const initUsername = "testUser"
    const initPassword = "123456"
    let username = ref(initUsername)
    let password = ref(initPassword)
    const { setUserInfo, checkLoginView } = useUserStore()

    // 登录
    const loginFunc = async () => {
        if (!username.value || !password.value) {
            ElMessage({
                message: '请输入用户名和密码',
                type: 'warning',
            })
            return false
        }
        const loading = ElLoading.service({
            lock: true,
            text: '登录中...',
            background: 'rgba(0, 0, 0, 0.7)',
        })
       
        try {
            const res = await request.post('/api/user/login', {
                username: username.value,
                password: md5(password.value)  ,
            })
            loading.close()
            if (res.data) {
                ElMessage({
                    message: `欢迎您！${res.data.user.nickname}`,
                    type: 'success',
                })
                localStorage.setItem("token", res.data.token)
                setUserInfo(res.data.user)
                clearInput()
                checkLoginView(false)
                location.reload()
            } else {
                ElMessage({
                    message: res.message,
                    type: 'error',
                })
            }
        } catch (error) {
            loading.close()
            console.error('请求失败:', error)
        }
    }

    // 清空输入框
    function clearInput() {
        username.value = initUsername
        password.value = initPassword
    }

    return {
        username,
        password,
        loginFunc,
        clearInput,
    }
}