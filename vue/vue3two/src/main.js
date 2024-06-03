// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
const app = createApp(App)
app.mount('#app')


app.component('HelloWorld', HelloWorld)