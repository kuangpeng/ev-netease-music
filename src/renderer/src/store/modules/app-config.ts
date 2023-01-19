import { defineStore } from 'pinia'
import * as defaultState from '../../setting'

const useAppConfigStore = defineStore('app-config', {
  state: () => {
    return defaultState
  },
  getters: {

  },
  actions: {

  },
  presist: {
    enable: true,
    resetToState: true,
  },
})

export default useAppConfigStore
