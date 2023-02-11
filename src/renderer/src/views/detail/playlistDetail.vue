<template>
  <div class="detail pt-7">
    <detail-info v-if="detail" :detail="detail" class="mx-8" />

    <div class="detail-nav mx-8 mt-5">
      <tab-nav :navs="navs" @change="handleNavChange" />
    </div>

    <div class="detail-content">
      <keep-alive>
        <component :is="activeCmp" />
      </keep-alive>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { playlist } from '@api/index'
import DetailInfo from './components/playlist/DetailInfo.vue'
import DetailSongList from './components/playlist/DetailSongList.vue'
import DetailComment from './components/playlist/DetailComment.vue'
import DetailCollector from './components/playlist/DetailCollector.vue'

import type { PlayListItem, Track } from '@renderer/types/playlist'
import { useFetchList } from '@renderer/hooks/useFetchList'

const route = useRoute()

enum Tab {
  LIST = 'list',
  COMMENT = 'comment',
  COLLECTOR = 'Collector'
}

const navs = ref([
  {
    title: '歌曲列表',
    value: Tab.LIST,
    component: DetailSongList
  },
  {
    title: '评论',
    value: Tab.COMMENT,
    component: DetailComment
  },
  {
    title: '收藏者',
    value: Tab.COLLECTOR,
    component: DetailCollector
  }
])

const activeTabIndex = ref(0)

const activeCmp = computed(() => navs.value[activeTabIndex.value].component)

const handleNavChange = (_tab, index) => {
  activeTabIndex.value = index
}

const playId = route.params.id as string

const params = {
  id: parseInt(playId)
}

const detail = ref<PlayListItem | null>(null)

const songList = ref<Track[]>([])

const fetchList = useFetchList<typeof playlist.getPlayListDetail>(playlist.getPlayListDetail)

const { onResult, onError } = fetchList(params)

onResult(res => {
  detail.value = res.playlist
  songList.value = res.playlist?.tracks || []
  navs.value[1].title += `(${res.playlist.commentCount})`
})

onError(err => {
  console.log(err)
})

const fetchTrackList = useFetchList<typeof playlist.getPlayListTrackAll>(playlist.getPlayListTrackAll)

const { onResult: onTrackResult, onError: onTrackError } = fetchTrackList(params)

onTrackResult(res => {
  songList.value = res.songs
})

onTrackError(err => {
  console.log(err)
})

</script>

<style lang="less" scoped>

</style>
