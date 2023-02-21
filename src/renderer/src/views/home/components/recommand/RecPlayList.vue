<template>
  <section-list title="推荐歌单" link="/home/playlist">
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
  </section-list>
</template>

<script setup lang="ts">
import SectionList from './SectionList.vue'
import RecTodayItem from './RecTodayItem.vue'
import type { RecListItem } from '@renderer/types/home'

defineProps<{
  recPlaylist: RecListItem[]
}>()
</script>

<style lang="less" scoped></style>
