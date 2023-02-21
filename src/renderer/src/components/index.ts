import { App } from 'vue'
import { toHump } from '../utils/utils'

function adapterNaiveCss(): void {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
}

function getComponentName(key: string): string {
  const paths = key.split('/')
  const name = paths
    .filter((it) => !!it && it !== '.')
    .reverse()
    .find(
      (it) =>
        it !== 'index.vue' &&
        it !== 'index.ts' &&
        it !== 'index.tsx' &&
        it !== 'index.js' &&
        it !== 'index.jsx'
    )
    ?.replace('.vue', '')
  return name || ''
}

export function registerComponents(app: App): void {
  const components = import.meta.glob('./**/index.vue', { eager: true })
  Object.keys(components).forEach((it: string) => {
    // @ts-ignore (define in dts)
    const cname = components[it].default.name || toHump(getComponentName(it))
    // @ts-ignore (define in dts)
    app.component(cname, components[it].default)
  })
}

function useGlobalComponents(app: App): void {
  adapterNaiveCss()
  registerComponents(app)
}

export default useGlobalComponents
