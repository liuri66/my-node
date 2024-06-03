import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { rewriteDefault } from 'vue/compiler-sfc'

// ...


//抛出
// https://vitejs.dev/config/
export default defineConfig({
  //设置端口 请注意，如果使用了非相对的 基础路径 base，则必须在每个 key 值前加上该 base。
  base:'http://localhost:66/', 
  // publicDir: "public1",
  envDir:'/',
  server:{
    port:8080,
    host: true,
    headers:'aa',
    warmup:'',
    watch:'null',
    // 设置服务启动端口号，如果端口已经被使用，Vite 会自动尝试下一个可用的端口
  // port: 4000, 
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
  //打包的东西放在哪个目录
  build: {
    assetsDir:'out',   // 打包文件的输出目录
    
    rollupOptions:{
      // 指定要打包的入口文件
      input: 'src/main.js',
      // 指定打包时应该将哪些模块作为外部模块处理
      // 确保外部化处理那些你不想打包进库的依赖
      external:['vue'],
      // 或者写成：就是把 axios和lodash依赖不打包进来 打包过程中就不会对 lodash 和 axios 这两个模块进行打包，而是直接从外部加载。
      // external: ['lodash', 'axios']
      output:{
         // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals:{
          vue:'Vue'
        }
      }

    }


  },
  // build: {
  //   minify: "terser", // 必须开启：使用terserOptions才有效果
  //   terserOptions: {
  //     compress: {
  //       //生产环境时移除console
  //       drop_console: true,
  //       drop_debugger: true,
  //     },
  //   },
  //   outDir: 'dist', // 指定输出路径,
  //   //生成静态资源的存放路径
  //   assetsDir: "assets",
  // },




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
      "@":path.resolve(__dirname,"src"),
      // 注意一定不要随意命名，a b c这样的，项目的目录也不能为关键字保留字！！
      "comp": path.resolve(__dirname, "src/components"),
      // 配置图片要这样引用
      "/img": "./src/assets",
      
    }
  },

  plugins: [vue()],
})
