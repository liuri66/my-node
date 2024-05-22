<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

// 局部调用axios
import axios from "axios";
//  get请求
const login = () => {
 
  axios({
    // 请求类型 get和GET都可以
    method:'GET',
    //接口网址
    url:'https://artemis.gxzrzyjc.com/milestone-admin/sys/region/region'
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
    //接口网址
    url:'https://mock.apifox.com/m1/4467073-4113341-default/login',
    
    // axios返回promise对象，所以用then方法指定它成功的一个回调
  }).then((res) => {
    // 获取结果res 接口内容
    console.log(res);
    console.log('post请求成功');  
    // 弹出框
    ElMessage({
      message: 'post请求成功',
      type: 'success',
    });
  })
}
//创建示例对象
const axi=axios.create({
  baseURL:'https://artemis.gxzrzyjc.com/milestone-admin/sys/region/region',
  timeout:5000
});
// axi与 axios 对象的功能几近是一样的
console.log(axi);
// 发起请求 调用函数1写法
axi({
  url:'https://artemis.gxzrzyjc.com/milestone-admin/sys/region/region'
}).then(res=>{
  console.log(res);
})
// 发起请求 调用函数2写法
axi.get('https://artemis.gxzrzyjc.com/milestone-admin/sys/region/region').then(res=>{
  console.log(res.data.data);
})

// 拦截器 use=then
// 设置请求拦截器
axios.interceptors.request.use(function (config) {
  console.log('请求拦截器成功 成功');
  // return config;
  throw '参数出现错误'
},function(error) {
  console.log('请求拦截器 失败');
  return Promise.reject(error)
});
// 设置响应拦截器
axios.interceptors.response.use(function (response) {
  console.log('响应拦截器 成功');
  return response;
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
    console.log(res);
    console.log('自定义回调处理成功的结果');
    
  }).catch(res=>
    {
      console.log('自定义回调处理失败的结果');
    }
  )

</script>

<template>
  <div class="div1">
    <el-button type="success" class="btn" @click="login" >get请求</el-button>
    <el-button type="success" class="btn" @click="login2" >post请求</el-button>
    <el-button type="success" class="btn" @click="" >请求</el-button>
    
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
