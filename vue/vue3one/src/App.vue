<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref,reactive,watch } from "vue";
// 变量a
const a =ref(6)
console.log(a);
console.log(a.value);
//自增
a.value++
console.log(a.value);

// reactive()

const state = reactive({ count: 0 })

const activeColor = ref('red')
const fontSize = ref(30)
const awesome =ref(false)
const items=ref([{msg:'a'},{msg:'b'}])
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
//监听事件
const count = ref(0)

const name = ref('Vue.js')
// 方法事件处理器
// 方法事件处理器会自动接收原生 DOM 事件并触发执行。在上面的例子中，我们能够通过被触发事件的 event.target 访问到该 DOM 元素。
function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` 是 DOM 原生事件
  if (event) {
    alert(event.target.tagName)
  }
}
function say(message) {
  alert(message)
}
// 表单输入绑定
const message = ref('')
//复选框
const  checked =ref(true)
//单选按钮
const picked = ref('One')
//选择器
const selected = ref('')
//watch
let sum=ref(0)
function changsum() {
  sum.value+=1
}
// watch(sum,(newValue,oldValue)=>{
//   console.log('sum变化了',newValue,oldValue);
// })
const stopWatch=watch(sum,(newValue,oldValue)=>{
  console.log('sum变化了',newValue,oldValue);
  if (newValue>=10) {
    stopWatch()
  }
})

let person =ref({
  name:'张三',
  age:18
})
//修改名字年龄的方法
function changeAge() {
  person.value.age +=1
}
function changeName() {
  person.value.name += '三'
}
function changePerson() {
  person.value={name:'李四',age:16}
}
// <!-- 监视 :监视【ref】定义的【对象类型】数据 若想监视对象内部属性的变化，需要手动开启深度监视-->
        watch(person,(newValue,oldValue)=>{
          console.log('person变化了',newValue,oldValue);
        },{deep:true,immediate:true})
        // <!-- // watch的第一个参数是:被监视的数据
        // // watch的第二个参数是:监视的回调
        // // watch的第三个参数是:配置对象(deep、immediate等等..) -->
</script>

<template >
  <!-- <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1> -->
  <!-- <h1 v-for="item in items">{{item.msg}}</h1> -->
  <!-- <li v-for="value in myObject">
    {{ value }}
  </li> -->
  <!-- <button @click="count++">add 1</button>
  <p>count is {{count}}</p> -->
  <!-- `greet` 是上面定义过的方法名 -->
    <!-- <button @click="greet">Greet</button>   

    <button @click="say('hello5.26')">Say hello</button>
    <button @click="say('bye5.26')">Say bye</button> -->
<!--  
    <p>Message is: {{ message }}</p>
	  <input v-model="message" placeholder="edit me" /> -->
    <!-- 获取表单多行文本 -->
    <!-- <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea> -->
      <!-- 复选框 -->
    <!-- <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{checked}}</label> -->
    <!-- 单选按钮 -->
    <!-- <div>Picked:{{picked}}</div>
    <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one" >One</label>
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <div>Selecrted:{{selected}}</div>
      <select name="" id="" v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>


      </select> -->
      <!-- watch -->
      <!-- <h1>情况一:监视ref定义的基本类型数据</h1>
      <h2>当前求和：{{sum}}</h2>
      <button @click="changsum">点我sum+1</button> -->
      <h2>姓名：{{person.name}}</h2><br>
      <h2>年龄：{{person.age}}</h2><br><br>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changePerson">修改整个信息</button>
       


  <!-- <button @click="state.count++">
    {{ state.count }}
  </button> -->

  <!-- <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">44444</div> -->



  
</template>

<style scoped>

</style>
