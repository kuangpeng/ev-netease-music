<template>
  <div class="playlist-wrap">
    <n-grid :x-gap="18" :y-gap="18" :cols="5">
      <n-gi v-for="item in list" :key="item.id">
        <section-block-item
          :id="item.id"
          :cover="item.coverImgUrl"
          :title="item.name"
          :link="'/playlist/' + item.id"
          :play-count="item.commentCount"
          :creator="item.creator"
          :show-author="true"
        />
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import type { PlayListItem } from '@renderer/types/playlist'

defineProps<{
  list: PlayListItem[]
}>()
</script>

<style scoped></style>
