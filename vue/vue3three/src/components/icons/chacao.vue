<template>
    <div>
        <p>子组件</p>
        
        <!-- <slot text="我是子组件" :count="1"></slot> -->
        <slot name="header" text="我是子组件" :count="2"></slot>


        <!-- <header>
          
          <slot name="header"></slot> 
        </header> -->
        <!-- <main> -->
            <!-- 这个插槽我们没有添加 name 属性，
            这个时候 Vue 会隐式的将这个插槽命名为“default -->
            <!-- <slot></slot>
          </main> -->
          
          <!-- <footer>
            <slot name="footer"></slot>
          </footer> -->
        
    </div>

</template>
<script setup>

</script>