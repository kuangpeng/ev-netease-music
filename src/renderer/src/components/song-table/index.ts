import type { PropType } from 'vue'
import { NSpin } from 'naive-ui'
import TableHeader from './table-header'
import TableBody from './table-body'
import type { TableColumn, TableInjectKey } from './table-types'

export interface Props {
  data: Array<unknown>;
  columns: TableColumn[];
  striped: boolean;
}

export default defineComponent({
  name: 'SongTable',
  props: {
    data: {
      type: Array as PropType<Array<unknown>>,
      default: () => []
    },
    columns: {
      type: Array as PropType<TableColumn[]>,
      default: () => []
    }
  },
  setup(props) {
    const loading = ref(false)

    const dataList = ref<unknown[]>([])

    watch(() => props.data, (val) => {
      dataList.value = val as unknown[]
    })

    provide<TableInjectKey>('song-table', {
      rows: dataList.value,
      cols: props.columns
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
      if (col.align) {
        style['align'] = col.align
      }

      return style
    }

    return {
      loading,
      colStyleFn
    }
  },
  render() {
    const { loading, columns, colStyleFn } = this

    const colVNode = h('colgroup', columns.map(c => h('col', { style: colStyleFn(c)})))

    const tableVnode = h('div', {class: 'data-table'},
      loading ? h(NSpin) : h('table', {class: 's-data-table'}, [colVNode, h(TableHeader), h(TableBody)])
    )

    return tableVnode
  }
})
