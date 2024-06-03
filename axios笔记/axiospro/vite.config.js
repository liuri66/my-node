import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 写路径的配置
// import path from path

// 抛出配置项
// https://vitejs.dev/config/
export default defineConfig({
  //设置端口


  plugins: [vue()],
})
