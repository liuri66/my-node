<script setup>
import Children from './components/icons/Children.vue'
import chacao from './components/icons/chacao.vue'
import Children2 from './components/icons/Children2.vue'

import { ref , provide} from "vue";
const message = ref("啦啦啦");
provide ('message',message)
</script>

<template>
    <!-- 具名插槽作用域传值时子组件去掉v-slot="soltProps" ,但是默认插槽获取子组件的数据需要写<child v-slot="slotProps"> -->
   <chacao >
    <!-- <h1>这个是加入插槽的东西</h1>
    <div>{{message}}</div> -->
        <!-- <template v-slot:header>
            <div>我是header:{{ message }}</div>
        </template>
        <div>我没有名字的slot{{message}}</div>
        <template v-slot:footer>
            <div>我是 footer:{{ message }}</div>
          </template> -->
          <!-- 默认插槽获取子组件的数据 -->
          <!-- <div>{{soltProps.text}}-----{{soltProps.count}}</div> -->
          <template #header="{ text, count }">
            <div>{{ text }}---{{ count }}</div>
          </template>
        


   </chacao>
    



</template>

<style scoped>

</style>