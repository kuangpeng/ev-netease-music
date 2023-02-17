import { get } from 'lodash-es'
import { TableInjectKey } from "./table-types"

export default defineComponent({
  name: 'SongTableBody',
  props: {},
  setup() {
    const tableInject = inject<TableInjectKey>('song-table', {
      rows: [],
      cols: []
    })

    return {
      rows: tableInject.rows,
      cols: tableInject.cols
    }
  },
  render() {
    const { rows, cols } = this

    const tdsVNode =  rows.map((r, index) => {
      return h('tr', {class: 's-table-tr'}, cols.map((c) => {
        let n
        if (c.render && typeof c.render == 'function') {
          n = c.render(get(r, c.key), index)
        } else {
          n = h('div', {class: 'td-cell'}, get(r, c.key))
        }

        return h('td', {class: 's-table-td'}, n)
      }))
    })

    console.log(tdsVNode)

    return h('tbody', tdsVNode)
  }
})
