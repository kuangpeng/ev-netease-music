<template>
  <div>
    <div class="warn-tip">
      <div class="text-2 color-gray-600 mx-8">含1首VIP专享歌曲&nbsp;&nbsp;<router-link class="link" to="/">立即开通&gt;</router-link></div>
    </div>

    <!-- <song-table-list :list="songList" /> -->
    <song-table :columns="columns" :data="songList" />
  </div>
</template>

<script setup lang="ts">
import { playlist } from '@api/index'
import { useFetchList } from '@renderer/hooks/useFetchList'

import type { TableColumn } from '@components/song-table/table-types'
import type { Track } from '@renderer/types/playlist'

import SongTable from '@components/song-table'

const props = defineProps<{
  id: string
}>()

const columns: TableColumn[] = [
  {
    key: 'name',
    title: '歌曲',
    width: 200,
    minWidth: 100
  },
  {
    key: 'al.name',
    title: '专辑',
    width: 200,
    minWidth: 100
  },
  {
    key: 'dt',
    title: '时长',
    width: 100,
    minWidth: 100,
    maxWidth: 200
  }
]

const params = {
  id: parseInt(props.id)
}

const songList = ref<Track[]>([])

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
.warn-tip{
  padding: 7px 0;
  background-color: #ffe3d6;
}
</style>
