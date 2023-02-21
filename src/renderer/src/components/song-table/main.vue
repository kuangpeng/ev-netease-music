<template>
  <div class="song-table">
    <n-spin v-if="loading" />
    <div class="table-header-wrap">
      <table-header :columns="columns" :data="data" />
    </div>
    <div class="table-body-wrap">
      <table-body :data="data" />
    </div>
    <div class="table-footer-wrap">
      <table-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import TableHeader from './TableHeader.vue'
import TableBody from './TableBody.vue'
import TableFooter from './TableFooter.vue'
import type { TableColumn, TableInjectKey } from './table-types'

export interface Props {
  data: Array<unknown>
  columns: TableColumn[]
  loading: boolean
  striped: boolean
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  columns: () => [],
  loading: false,
  striped: false
})

provide<TableInjectKey>('song-table', {
  rows: props.data,
  cols: props.columns
})
</script>

<style lang="less" scoped>
.song-table {
  min-height: 100px;
}
</style>
