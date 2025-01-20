import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
console.log(ElementPlus)

app.mount('#app')
function a() {
    const b = {}
    return b
}
a().a = 1;
const c = a();

console.log(c)