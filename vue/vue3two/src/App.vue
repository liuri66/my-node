<script setup>
import Welcome from "./components/Welcome.vue";
import Children from './components/Children.vue'
import { ref } from "vue";
const msg2 =ref('hello!')

import props from "./components/Props.vue";
import Child from "./components/child.vue";
const x= ref()
const isOk= (value) =>{
  x.value=value
  console.log(x.value);
}
</script>

<template>
  <!-- <h1>3333</h1>
  <HelloWorld/> -->
  <!-- <Welcome/> -->
  <!-- https://www.misterma.com/archives/921/ -->
  <!-- props -->
  <!-- <props  message="helloProps" :num="123456"></props> -->
  <!-- emit https://juejin.cn/post/7234020992145326140#heading-6-->
  <h1>我是父组件</h1>
  <Child @child-click="isOk" /> 
    <p> {{ x }}</p>


  <!-- <h1>{{msg2}}</h1>
  <Children v-model="msg2"></Children> -->
</template>


