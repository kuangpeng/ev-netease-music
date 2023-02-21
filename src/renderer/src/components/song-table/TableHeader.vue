<template>
  <div class="data-table_header">
    <table class="data-table">
      <colgroup>
        <col
          v-for="(item, index) in columns"
          :key="index"
          :style="colStyleFn(item)"
          :align="item.align"
        />
      </colgroup>
      <thead>
        <tr>
          <th v-for="(item, index) in columns" :key="index">
            <template v-if="item.type">
              {{ index + 1 }}
            </template>
            <template v-else>
              <div v-if="item.render" class="cell cell_render">
                {{ renderFn(item, index) }}
              </div>
              <div v-else class="cell">{{ item.title }}</div>
            </template>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from './table-types'

export interface Props {
  columns: Array<TableColumn>
  data: Array<unknown>
}

const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  data: () => []
})

const colStyleFn = (col: TableColumn) => {
  const style = {}
  if (col.width) {
    style['width'] = col.width
  }
  if (col.maxWidth) {
    style['max-width'] = col.maxWidth
  }
  if (col.minWidth) {
    style['min-width'] = col.minWidth
  }

  return style
}

const renderFn = (row, index) => {
  return h(row.render(props.data[index], index))
}
</script>

<style scoped></style>
