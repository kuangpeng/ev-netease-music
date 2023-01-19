import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

export interface AppSets {
  darkMode: 'system' | 'dark' | 'light'
}

// Custom APIs for renderer
const api = {}

const appSets: AppSets = {
  darkMode: 'system'
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('appSets', appSets)
    contextBridge.exposeInMainWorld('darkMode', {
      toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
      system: () => ipcRenderer.invoke('dark-mode:system')
    })
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
  // @ts-ignore (define in dts)
  window.appSets = appSets
  // @ts-ignore (define in dts)
  window.darkMode = {
    toggle: (): void => { ipcRenderer.invoke('dark-mode:toggle') },
    system: (): void => { ipcRenderer.invoke('dark-mode:system') }
  }
}
