<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :loading="loading"
    :bordered="false"
    :bottom-bordered="false"
    :single-column="true"
    size="small"
    :striped="true"
    :theme-overrides="appOverride.playList.DataTable"
  >
    <!-- loading style -->
  </n-data-table>
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import type { Song, SongListItem } from '@renderer/types/song'
import { appOverride } from '@renderer/setting/theme-overrides'
import SLItemAction from './components/SLItemAction.vue'

const createColumns = (): DataTableColumns<Song> => {
  return [
    {
      title: 'index',
      key: 'index'
    },
    {
      title: '操作',
      key: '',
      render: (row) => h(SLItemAction, { id: row.id })
    },
    {
      title: '',
      key: 'id',
      resizable: true,
      width: 100,
      ellipsis: true, // 省略
    },
    {
      title: '',
      key: 'title',
      resizable: true
    }
  ]
}



const loading = ref(false)
const columns = createColumns()
const data = ref<SongListItem[]>([
  {
    index: 1,
    id: 1001,
    name: 'jay',
    publishTime: 1000000,
    al: {
      id: 10,
      name: 'jay',
      picUrl: ''
    }
  }
])
</script>

<style scoped>

</style>
