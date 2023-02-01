<template>
  <div class="section-list">
    <div class="section-list-header">
      <slot name="header" />
    </div>
    <div class="section-list-body">
      <n-grid :x-gap="18" :y-gap="18" :cols="5">
        <n-gi>
          <rec-today-item />
        </n-gi>
        <n-gi v-for="(item, index) in recPlaylist" :key="index">
          <section-block-item
            :id="item.id"
            :cover="item.picUrl"
            :title="item.name"
            :link="'/playlist/' + item.id"
            :play-count="item.playCount"
          />

        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import RecTodayItem from './RecTodayItem.vue'
import { RecListItem } from '@renderer/types/home'

defineProps<{
  recPlaylist: RecListItem[]
}>()
</script>

<style lang="less" scoped>
.section-list{
  margin-top: 30px;
  .section-list-body{
    margin-top: 10px;
  }
}
</style>
