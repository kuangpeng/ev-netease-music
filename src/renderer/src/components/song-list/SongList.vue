<template>
  <div class="song-list-simple">
    <n-table striped :single-column="true" :bordered="false" :bottom-bordered="false" size="small">
      <thead>
        <tr>
          <th width="20px"></th>
          <th width=""></th>
          <th width=""></th>
          <th width="40px"></th>
          <th width="60px"></th>
          <th width="20px"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 100" :key="i">
          <td>
            <n-icon size="10" color="var(--primary-color)" :component="IosPlay" />
          </td>
          <td title="树的树的第一树的第一树的第一树的第一第一">
            <n-ellipsis :tooltip="false" style="max-width: 160px">
              <n-text>树的树一第一</n-text>&nbsp;
              <n-text depth="3">test</n-text>
            </n-ellipsis>
          </td>
          <td>
            <router-link to="/">
              <n-text color="var(--text-color-3)" depth="3">jay</n-text>
            </router-link>
          </td>
          <td class="text-center lh1">
            <router-link to="/">
              <n-icon size="15" color="var(--text-color-3)" depth="2" :component="IosLink" />
            </router-link>
          </td>
          <td class="text-center">
            <span class="text-gray-300">15:23</span>
          </td>
          <td></td>
        </tr>
      </tbody>
    </n-table>
  </div>
</template>

<script setup lang="ts">
// import type { PropType } from 'vue'
// import type { Song }  from '@renderer/types/song'
import IosLink from '@vicons/ionicons4/IosLink'
import IosPlay from '@vicons/ionicons4/IosPlay'

// defineProps({
//   song: {
//     type: Object as PropType<Song>,
//     required: true
//   }
// })
</script>

<style lang="less" scoped>
.song-list-simple {
  & > div:nth-child(2n + 1) {
    background-color: #fafafa;
  }

  table {
    thead {
      th {
        padding: 0;
        background: none;
        border: none;
      }
    }
    tbody {
      tr:hover {
        td {
          background-color: var(--hover-color);
        }
      }
    }
  }
}
</style>
