import type { VNodeChild } from 'vue'

export interface RenderTitleFn {
  (col: TableColumn, index: number): VNodeChild
}

export interface TableColumn {
  key: string | number
  title: string | RenderTitleFn
  align?: 'left' | 'center' | 'right'
  width?: number | string
  minWidth?: number | string
  maxWidth?: number | string
  render?: (rowData: object, rowIndex: number) => VNodeChild
  sortOrder?: 'descend' | 'ascend' | false
  sorter?: boolean | (() => void) | 'default'
  type?: 'number'
}

export interface TableInjectKey {
  cols: TableColumn[]
  rows: Array<unknown>
}
