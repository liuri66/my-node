<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { savatoken, gettoken, removetoken } from "../api/indextwo.js";
 
// 参考的视频：https://www.bilibili.com/video/BV1wr4y1K7tq?p=9&vd_source=34ea19cc02f99246c02310c83cb2fc11

// 局部调用axios
import axios from "axios";
//  get请求
const login = () => {
 
  axios({
    // 请求类型 get和GET都可以
    method:'GET',
    //接口网址
    url:'https://artemis.gxzrzyjc.com/milestone-admin/sys/region/region',
    headers: {'token1': '666666'},

    // axios返回promise对象，所以用then方法指定它成功的一个回调
  }).then((res) => {
    // 获取结果res 接口内容
    console.log(res);
    console.log('get成功');  
    // 弹出框
    ElMessage({
      message: 'get请求成功',
      type: 'success',
    });
  })
}
 // post请求
const login2 = () => {
 
  axios({
    // 请求类型 
    method:'post',
    responseType:'text',

    //接口网址 有token
    url:'https://mock.apifox.com/m1/4467073-4113341-default/login',
    headers:{
    'token1': '8888888'
  }
    // axios.post('https://mock.apifox.com/m1/4467073-4113341-default/login',
    // {
    //   headers:{
    //   'token':localStorage.getItem("token")
    // }

    // axios返回promise对象，所以用then方法指定它成功的一个回调
  }).then((res) => {
    // 获取结果res 接口内容
    console.log(res);
  // const token = res.data.data;
  // console.log(token);
    console.log('post请求成功');  
   
    // 弹出框
    ElMessage({
      message: 'post请求成功',
      type: 'success',
    });
  })
}
//创建示例对象：login3方法 实际用的比较多 
//把接口存贮的token赋值给token2 从本地通过localstorage获取存储的token值
const token2 = localStorage.getItem('token');
const axi=axios.create({
  // baseURL:'https://artemis.gxzrzyjc.com/milestone-admin',
  baseURL:'https://mock.apifox.com/m1/4467073-4113341-default',
  timeout:5000,
  headers: {
    // 'token2': '99999'
    //请求头放入token
    'token': `${token2}`  
  }
});

// axi与 axios 对象的功能几近是一样的
console.log(axi);
// 发起请求 调用函数1写法
//axi({
//  url:'/sys/region/region',
//   
//}).then(res=>{
//  console.log(res);
//})
// 发起请求 调用函数2写法

const login3 = () => {

  // axi.get('/sys/region/region').then(res=>{
  // console.log(res.data.data);
  axi.post('/login').then(res=>{
  console.log(res.data.data);
  savatoken(res.data.data);
   
})
}





// 拦截器 use=then
// 设置请求拦截器 添加请求拦截器,这个是对所有请求之前都要处理的事情
axios.interceptors.request.use(function (config) {
  console.log('请求拦截器成功 成功');
  //我们每次请求的headers头部都添加一个token参数，参数值是本地存储的token https://www.bilibili.com/video/BV1Sc411f7bU/?spm_id_from=333.788&vd_source=34ea19cc02f99246c02310c83cb2fc11
  //如果本地存在了token说明你登录成功了，如果没有tokep空，说明你没有登录
  console.log(config);
  // 目的就是让每一次请求都在header里面携带token
  config.headers.token=localStorage.getItem('token')
  //在发送请求之前做什么
  return config;
  // throw '参数出现错误'
},function(error) {
  console.log('请求拦截器 失败');
  return Promise.reject(error)
});
// 设置响应拦截器
// axios.interceptors.response.use(function (response) {
//   console.log('响应拦截器 成功22');
//   return response;
  
// },function(error) {
//   console.log('响应拦截器 失败');
//   return Promise.reject(error)
// })

axios.interceptors.response.use(response=> {
  console.log(response.data.code === 100);
  // console.log('响应拦截器 成功22');
  //做请求的状态码的判断 200表示 请求成功了，返回data
  if (response.data.code === 100) {
    console.log("下面是拦截数据，响应拦截器 成功5.23");
    return response.data.data;
    
  } else {

    console.log("发生错误啦");
    return Promise.reject(response.data.msg) //seccess
  }
  
  
},function(error) {
  console.log('响应拦截器 失败');
  return Promise.reject(error)
})



// 发送请求
axios({
    // 请求类型 get和GET都可以
    method:'GET',
    //接口网址
    url:'https://artemis.gxzrzyjc.com/milestone-admin/sys/region/region'
    // axios返回promise对象，所以用then方法指定它成功的一个回调
  }).then((res) => {
    // 获取结果res 接口内容
    // data数据
    console.log(res);
    console.log('自定义回调处理成功的结果');
    
  }).catch(res=>
    {
      console.log(res); 
      console.log('自定义回调处理失败的结果');
    }
  )

</script>

<template>
  <div class="div1">
    <el-button type="success" class="btn" @click="login" >get请求</el-button>
    <el-button type="success" class="btn" @click="login2" >post请求</el-button>
    <el-button type="success" class="btn" @click="login3" >请求-加请求头</el-button>
    
  </div>
</template>

<style >
.div1{
  height: 200px;
  width:600px;
  background-color: beige;
  text-align:center;
  display:flex;
  justify-content:center;
  align-items: center;
}

</style>
