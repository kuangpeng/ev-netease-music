<template>
  <n-data-table
    :columns="columns"
    :data="list"
    :loading="loading"
    :bordered="false"
    :bottom-bordered="false"
    :single-column="true"
    size="small"
    :striped="true"
    :theme-overrides="appOverride.playList.DataTable"
    @update:sorter="handleSorterChange"
  >
    <!-- loading style -->
  </n-data-table>
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { appOverride } from '@renderer/setting/theme-overrides'
import SLItemAction from './components/SLItemAction.vue'
import { RouterLink } from 'vue-router'
import type { Track } from '@renderer/types/playlist'
import { VNode } from 'vue'

export interface Props {
  list: Track[]
}

const props = defineProps<Props>()

const createColumns = (): DataTableColumns<Track> => {
  return [
    {
      key: 'id',
      width: 50,
      align: 'right',
      render: (row, index) => index + 1
    },
    {
      title: '操作',
      key: '',
      width: '120px',
      render: (row) => h(SLItemAction, { id: row.id })
    },
    {
      title: '标题',
      key: 'name',
      resizable: true,
      width: '30%',
      ellipsis: true, // 省略
      sortOrder: false,
      sorter: 'default',
      minWidth: 150,
      maxWidth: 300
    },
    {
      title: '歌手',
      width: '15%',
      key: 'ar',
      resizable: true,
      render: (_) => {
        const childs = _.ar.map((a) => {
          return h(
            RouterLink,
            { to: { path: '/singer', params: { id: a.id } }, class: 'text-author' },
            a.name
          )
        })
        const html: VNode[] = []
        for (let i = 0; i < childs.length; i++) {
          if (i > 0) {
            html.push(h('span', '/'))
          }
          html.push(childs[i])
        }
        return h('div', null, html)
      },
      sortOrder: false,
      sorter: 'default'
    },
    {
      title: '专辑',
      width: '20%',
      key: 'al.name',
      resizable: true,
      sortOrder: false,
      sorter: 'default'
    },
    {
      title: '时间',
      width: '10%',
      key: 'dt',
      resizable: true,
      sortOrder: false,
      sorter(rowA, rowB) {
        return rowA.dt - rowB.dt
      }
    }
  ]
}

const loading = ref(true)

const columns = createColumns()

watch(
  () => props.list,
  (nv) => {
    if (nv && nv.length > 0) {
      loading.value = false
    }
  }
)

const handleSorterChange = (sorter) => {
  console.log(sorter)
}
</script>

<style scoped></style>
