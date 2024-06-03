<template>
<div>
    <span>输入的内容是：</span>
    <input v-model="msg" placeholder="请输入内容"/>
    
</div>
</template>
<script setup>
const msg=defineModel()

</script>