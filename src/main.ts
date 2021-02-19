import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import {router} from "./router"
import locale from 'element-plus/lib/locale/lang/zh-cn'

import 'dayjs/locale/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/main.scss'

const app = createApp(App)
app.use(ElementPlus, {locale})
app.use(router)
app.mount('#app')
