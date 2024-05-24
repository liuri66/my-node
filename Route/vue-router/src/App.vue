<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <!-- 使用组件 RouterLink 来创建链接。这使得 Vue Router 
      能够在不重新加载页面的情况下改变 URL，处理 URL 的生成、编码和其他功能。 -->
      <nav>
        <!-- // 注意：router-link中链接如果是'/'开始就是从根路由开始，如果开始不带'/'，则从当前路由开始。 -->
        <!-- 不带参数 -->
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <!-- 带参数 -->
        <!-- 直接写路径或者根据vue-router的配置文件(index.js)，构建一个对象使用name属性或者path属性都行, 建议用name。 -->
        <!-- <RouterLink :to="{name:'/one',params: {id:1}}"></RouterLink> -->
        <RouterLink :to="{name:'home', params: {id:1}}">333</RouterLink>
          <RouterLink :to="{name:'home', query: {id:1}}">444</RouterLink>  
          <!-- <RouterLink :to="/home/:id"/>   -->
        
      </nav>
      <div>
        <!-- https://www.jianshu.com/p/ea0e39a8401b -->
      <!-- 编程式导航 this.$router.push() -->
      <button @click="this.$router.push('/home2') ">home2 </button>
      <!-- query传参 -->
      <button @click="this.$router.push({name:'home3',query: {id:'6'}})">home3 </button>
      <button @click="this.$router.push({path:'/home',query: {id:'66'}}) " style="margin-bottom: 20px;">home4 </button><br>
      <!-- 3.获取参数 -->
      <h2>html取参数:参数是{{$route.query.id}}</h2>
      <h2>script取参数:参数是{{$route.query.id}}</h2>
    </div>
    <div>
          <!-- params传参 注意：
            // 只能用 name匹配路由不能用path
            // params传参数(类似post)  路由配置 path: "/home/:id" 或者 path: "/home:id"否则刷新参数消失-->
       <button @click="this.$router.push({name:'homefive',params: {id:'5'}})" style="margin-bottom: 20px;">home5 </button>
        <h2>html取参数:参数是{{$route.params.id}}</h2>
        <h2>script取参数:参数是{{this.$route.params.id}}</h2>
    </div>
    <div>
      <!-- 直接通过path传参 -->
      <button @click="this.$router.push({path:'/homesix/123'})" style="margin-bottom: 20px;">home6 </button>
      <!-- 获取参数 -->
        <h2>参数是{{this.$route.params.id}}</h2>
        


    </div>
    <!-- .this.$router.replace() 路由-->
    <div>
      <button @click="this.$router.replace('/replace') " style="margin-top: 20px;">replace路由</button>



    </div>

   
    </div>
  </header>
  <!-- RouterView 组件可以使 Vue Router 知道你想要在哪里渲染当前 URL 路径
  对应的路由组件。它不一定要在 App.vue 中，你可以把它放在任何地方，
  但它需要在某处被导入，否则 Vue Router 就不会渲染任何东西。 -->
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
