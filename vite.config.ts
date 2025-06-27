import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // 使用 0.0.0.0 可以让服务器监听所有网络接口的 IP 地址
    // port: 3000, // 你希望使用的端口号
  },
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
    '@': resolve(__dirname, './src'),
    },
    },
})
