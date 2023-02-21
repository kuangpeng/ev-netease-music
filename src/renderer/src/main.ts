import 'virtual:svg-icons-register'
import 'modern-css-reset'
import 'vfonts/Lato.css'
import 'uno.css'
import './assets/css/styles.less'
import App from './App.vue'
import useGlobalComponents from './components/index'
import useAppPinia from './store'
import { useAppRouter } from './router'
import bootstrap from './core/bootstrap'

const app = createApp({
  created: bootstrap,
  render: () => h(App)
})

useGlobalComponents(app)

useAppRouter(app)
useAppPinia(app)

app.mount('#app')
