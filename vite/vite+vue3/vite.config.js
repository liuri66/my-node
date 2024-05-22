import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { rewriteDefault } from 'vue/compiler-sfc'
// ...


//抛出
// https://vitejs.dev/config/
export default defineConfig({
  //设置端口 请注意，如果使用了非相对的 基础路径 base，则必须在每个 key 值前加上该 base。
  base:'/',
  server:{
    port:8080,
    host: true,
  port: 4000, // 设置服务启动端口号，如果端口已经被使用，Vite 会自动尝试下一个可用的端口
  open: true, // boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名
  cors: true, // 为开发服务器配置 CORS，配置为允许跨域
  https: false,
    // 设置代理
    "/api":{
      //项目接口地址
      target:"http://localhost:8080/....",
      //允许跨域
      changeOrigin:true,
      //重写api 为空
      rewrite:path =>replace(/^\/api/,'')

    }
  },
//预览设置
  preview: {
    port: 3030,
  },
  // 开启热更新
  // 设置别名
  resolve:{
    // 根路径的别名
    alias:{
      // 路径写法就变成："@/assets/xx.jpg" @代替了src  设置 `@` 指向 `src` 目录
      "@":path.resolve(__dirname,"src")
      
    }
  },

  plugins: [vue()],
})
