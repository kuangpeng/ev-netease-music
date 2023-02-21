import { defineStore } from 'pinia'
import type { Cat, HighQualityTag } from '@renderer/types/playlist'
import playlist from '@renderer/api/modules/playlist'

interface Category {
  [key: string]: string
}
interface State {
  catList: {
    all: Cat | null
    sub: Cat[]
    categories: Category | null
  }
  highQualityTags: HighQualityTag[]
}

const usePlaylistStore = defineStore('playlist', {
  state: (): State => {
    return {
      catList: {
        all: null,
        sub: [],
        categories: null
      },
      highQualityTags: []
    }
  },
  getters: {},
  actions: {
    fetchCatList() {
      if (this.catList.sub.length > 0) return
      playlist
        .getCatList()
        .then((res) => {
          this.catList.all = res.all
          this.catList.sub = res.sub
          this.catList.categories = res.categories
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchHighQualityTags() {
      if (this.highQualityTags.length > 0) return
      playlist
        .getHighqualityTags()
        .then((res) => {
          this.highQualityTags = res.tags
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})

export default usePlaylistStore
