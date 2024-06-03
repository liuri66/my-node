<template>
  <input v-model="message">
  <Child />
</template>


<script setup>
import { ref, provide } from 'vue'
import Child from '@/components/Child.vue'

// 通过提供ref数据，孙组件可以对输入框发生的变化做出反应。
const message = ref('hello')
provide('message', message)
</script>



<style scoped>

</style>
