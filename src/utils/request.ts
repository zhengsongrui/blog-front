import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios'
import { ElMessage } from "element-plus"
import { useUserStore } from "@/stores/userStore"


// 定义接口返回数据的通用结构（根据实际 API 结构调整）
interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
}

class Request {
  private instance: AxiosInstance
  private baseConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_BASE as string, // 从环境变量获取
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
  
  constructor() {
    this.instance = axios.create(this.baseConfig)
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 添加认证 token（示例）
        const token = localStorage.getItem('token')
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 处理通用响应逻辑
        const res = response.data

        // 根据业务状态码处理（示例）
        if (res.code !== 200) {
          // 处理错误（如 token 过期）
          if (res.code === 401) {
            console.error('登录过期，请重新登录')
            // 跳转到登录页
            useUserStore().setUserInfo({})
          }
          ElMessage({
            message: res.message,
            type: 'error',
          })
          return Promise.reject(res)
        }
        return res
      },
      (error: any) => {
        // 处理 HTTP 错误状态码
        console.log(error)
        let message = ''
        switch (error.response?.status) {
          case 400:
            message = '请求错误'
            break
          case 401:
            useUserStore().setUserInfo({})
            message = '未授权，请登录'
            break
          case 404:
            message = '请求地址不存在'
            break
          case 500:
            message = '服务器内部错误'
            break
          default:
            message = '网络连接异常'
        }
        ElMessage({
          message: message,
          type: 'error',
        })
        return Promise.reject(error)
      }
    )
  }

  // 封装请求方法
  public request<T = any>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return this.instance.request(config)
  }

  public get<T = any>(
    url: string,
    params?: object,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request({ url, params, method: 'GET', ...config })
  }

  public post<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request({ url, data, method: 'POST', ...config })
  }

  public put<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request({ url, data, method: 'PUT', ...config })
  }

  public delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request({ url, method: 'DELETE', ...config })
  }
}

// 导出单例实例
export default new Request()