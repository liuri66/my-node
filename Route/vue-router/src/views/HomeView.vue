<script setup>
import TheWelcome from '../components/TheWelcome.vue'


import { RouterLink, RouterView,useRouter, useRoute } from 'vue-router'
const route = useRoute()
console.log(route.query.id);


</script>

<template>
  <h1>这是homeview页面</h1>
  
</template>
