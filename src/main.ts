import { createApp } from 'vue'
import 'reset.css'
import App from './App.vue'
// 配置国际化
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 引入自定义插件对象：注册整个项目的全局组件
import globalComponents from '@/components'

createApp(App)
    .use(ElementPlus, { locale: zhCn }) // 配置中文国际化
    .use(globalComponents) // 安装全局路由组件
    .mount('#app')
