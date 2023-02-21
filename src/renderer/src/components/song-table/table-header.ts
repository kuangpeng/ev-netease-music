import type { TableInjectKey } from './table-types'

export default defineComponent({
  name: 'SongTableHeader',
  setup() {
    const tableInject = inject<TableInjectKey>('song-table', {
      rows: [],
      cols: []
    })

    return {
      cols: tableInject.cols
    }
  },
  render() {
    const { cols } = this

    const theadVNode = h(
      'thead',
      { class: 's-table-head' },
      h(
        'th',
        cols.map((col, index) => {
          let td
          if (col.type) {
            td = h('div', { class: 'cell' }, index + 1)
          } else {
            td =
              typeof col.title == 'function'
                ? col.title(col, index)
                : h('div', { class: 'cell' }, col.title)
          }
          return h('td', null, td)
        })
      )
    )

    return theadVNode
  }
})
