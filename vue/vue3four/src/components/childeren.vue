<template>
    <h1>我是测试异步的子组件</h1>


</template>
<script setup>
import { onMounted} from 'vue'


onMounted(() => {
    console.log('children')
})

</script>
