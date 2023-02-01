<template>
  <div class="playlist-wrap">
    <section-high-quality :id="hqData?.id" :cover-img-url="hqData?.coverImgUrl" :name="hqData?.name" />
    <n-space type="flex" justify="space-between">
      <block-cat />
      <div class="cats"></div>
    </n-space>

  </div>
</template>

<script setup lang="ts">
import SectionHighQuality from './components/playlist/SectionHighQuality.vue'
import BlockCat from './components/playlist/BlockCat.vue'
import { PlayListItem } from '@renderer/types/playlist'


const hqData = ref<PlayListItem | null>(null)

</script>

<style scoped>

</style>
