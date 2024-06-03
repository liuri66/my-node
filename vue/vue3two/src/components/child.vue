<template>
    <h2>我是子组件</h2>
    <button @click="isOk">
        点击我子传父
    </button>
</template>
<script setup>
// aboutExeVisible
const emit =defineEmits(['child-click'])
const isOk =()=>{
    emit('child-click',1)
}
</script>