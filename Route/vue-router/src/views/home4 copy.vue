<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useRoute } from "vue-router";
//如果想要获取动态路由传递的数据：获取当前页面的路由对象
const route =useRoute() //相当于this.$route
console.log(route);
//获取动态路由上的id
console.log(route.query.id);

</script>

<template>
  <h1>这是home4页面</h1>
  
</template>
