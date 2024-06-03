<template>
    <h1>动态路由</h1>
    <h2>此路由的参数是{{route.params.id}}</h2>
</template>
<script setup>
import { useRoute } from "vue-router";
//如果想要获取动态路由传递的数据：获取当前页面的路由对象
const route =useRoute() //相当于this.$route
// console.log(route);
//获取动态路由上的id
console.log(route.params.id);




</script>

<style>

</style>