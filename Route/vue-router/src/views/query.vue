<template>
    <h1>query传参</h1>
    <h2>此路由的参数是{{route.query.id}}</h2>
</template>
<script setup>
import { useRoute } from "vue-router";
//如果想要获取动态路由传递的数据：获取当前页面的路由对象
const route =useRoute() //相当于this.$route
// console.log(route);
//获取动态路由上的id  http://localhost:5173/q?id=123
console.log(route.query.id);




</script>

<style>

</style>