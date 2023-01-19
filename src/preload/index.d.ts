import { ElectronAPI } from '@electron-toolkit/preload'
import { AppSets } from './index'

export {}

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown,
    appSets: AppSets
  }
}
