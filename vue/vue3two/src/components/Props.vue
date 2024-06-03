<!-- <template>
    <p>{{msg}},num={{num}}</p>
</template>
<script setup>
const props =defineProps({
    msg :{
        type: String,
        require:true,
        default:"默认值"
    },
    num:Number,
})
</script> -->
<template>
    <h1>{{ message }},num={{ num }}</h1>
  </template>
  
  <script setup>
  const props = defineProps({
    message: {
      type: String,
      require: true,
      default: "默认值"
    },
    num: Number,
  });
  </script>
  