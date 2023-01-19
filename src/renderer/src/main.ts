import 'virtual:svg-icons-register'
import 'modern-css-reset'
import 'vfonts/Lato.css'
import 'uno.css'
import './assets/css/styles.less'
import App from './App.vue'
import useGlobalComponents from './components/index'
import useAppPinia from './store'
import { useAppRouter } from './router'

const app = createApp(App)

useGlobalComponents(app)

useAppRouter(app)
useAppPinia(app)

app.mount('#app')
