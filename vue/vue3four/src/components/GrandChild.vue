<template>
    <p>
        到孙组件信息: {{ message }}
      </p>
</template>


<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>
<style scoped>

</style>