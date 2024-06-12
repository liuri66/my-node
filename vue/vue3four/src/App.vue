<template>
  <!-- <input v-model="message">
  <Child /> -->
    <!-- 异步组件 -->
  <!-- <AsyncComp></AsyncComp> -->
  <!-- 错误加载 -->
    <button @click="loader">加载异步组件</button>
  <AsyncComp v-if="isShowAsyncComp"></AsyncComp>
</template>

<script setup>
import { ref, provide,  defineAsyncComponent, onMounted} from 'vue'
import Child from '@/components/Child.vue'
import Loading from '@/components/Loading.vue'
import Error from '@/components/Error.vue'
// 通过提供ref数据，孙组件可以对输入框发生的变化做出反应。
// const message = ref('hello')
// provide('message', message)
// const AsyncComp =defineAsyncComponent(()=>
const AsyncComp =defineAsyncComponent({
  // 加载函数
  // loader: () => import('./components/childeren.vue'),
  loader:()=>(new Promise((resolve,reject)=>reject())),
  // 加载异步组件时使用的组件
  loadingComponent: Loading,
 // 展示加载组件前的延迟时间，默认为 200ms
  delay: 200,
   // 加载失败后展示的组件
  errorComponent: Error,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000
})
onMounted(() => {
    console.log('app')
})
let isShowAsyncComp =ref(false)
const loader =()=>{
  isShowAsyncComp.value=true
}

</script>



<style scoped>

</style>
