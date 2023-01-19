import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import home from './routes/home'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...home
  ]
})

export function useAppRouter(app: App): void {
  app.use(router)
}

export default router
