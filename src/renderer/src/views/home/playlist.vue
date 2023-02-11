<template>
  <div class="playlist-wrap">
    <section-high-quality :name="selectedCat" />
    <n-space type="flex" justify="space-between" align="center" class="mt-4">
      <block-cat @choose:cat="handleSetCat" />
      <div class="cats">
        <span
          v-for="(item, index) in hotCatList"
          :key="index"
          @click="handleSetCat(item.name)"
          :class="{active: item.name == selectedCat}"
        >
          {{ item.name }}
        </span>
      </div>
    </n-space>

    <div class="mt-4">
      <div class="min-h-100 flex justify-center items-center" v-show="isLoading" >
          <n-spin />
      </div>

      <block-list v-show="!isLoading" :list="list" />
    </div>

    <n-space class="mt-10" justify="center">
      <n-pagination
        v-model:page="pagination.page"
        :page-sizes="[pagination.limit]"
        :item-count="pagination.total"
        :on-update:page="handlePage"
      />
    </n-space>
  </div>
</template>

<script setup lang="ts">
import SectionHighQuality from './components/playlist/SectionHighQuality.vue'
import BlockCat from './components/playlist/BlockCat.vue'
import BlockList from './components/playlist/BlockList.vue'

import usePlaylistStore from '@renderer/store/modules/playlist'
import type { Pagination } from '@renderer/types/basetype'
import type { PlayListItem } from '@renderer/types/playlist'
import playlist from '@renderer/api/modules/playlist'
import { useFetchList } from '@renderer/hooks/useFetchList'

const playlistStore = usePlaylistStore()

const selectedCat = ref('')

const list = ref<PlayListItem[]>([])

const hotCatList = computed(() => {
  return playlistStore.catList.sub.sort((c1, c2) => c1.category - c2.category).filter(c => c.hot)
})

const handleSetCat = (name: string) => {
  selectedCat.value = name

  pagination.page = 1

  getList()
}

const pagination = reactive<Pagination>({
  page: 1,
  limit: 30,
  total: 0
})

const handlePage = (page) => {
  pagination.page = page
  getList()
}

const offset = computed(() => (pagination.page - 1) * pagination.limit)
const params = reactive({
  cat: selectedCat.value,
  limit: pagination.limit,
  offset
})

const fetchList = useFetchList<typeof playlist.getPlayList>(playlist.getPlayList)

const isLoading = ref(false)

function getList() {
  isLoading.value = true

  const { onResult, onError, onEnd } = fetchList(params)

  onResult(res => {
    list.value = res.playlist
    pagination.total = res.total
  })

  onError(err => {
    console.log(err)
  })

  onEnd(() => {
    isLoading.value = false
  })
}

getList()
</script>

<style lang="less" scoped>
.cats{
  font-size: 0;
  text-align: right;

  span{
    font-size: 12px;
    margin-left: 15px;
    color: #999;
    line-height: 1;
    cursor: pointer;

    &.active{
      color: var(--primary-color);
    }
  }
}
</style>
