<template>
  <div class="recommand">
    <rec-carousel :carousel-list="bannerList" />

    <div class="sections">
      <rec-play-list :rec-playlist="recList"> </rec-play-list>

      <!-- TODO: 热门博客 -->
      <!-- TODO: 听见好书 -->
      <!-- TODO: 独家放送 -->

      <rec-new-song-list :new-song-list="newSongList"> </rec-new-song-list>

      <!-- TODO: 主题博客 -->

      <rec-mv-list :rec-mv-list="newMvList"> </rec-mv-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import RecCarousel from './components/recommand/RecCarousel.vue'
import RecPlayList from './components/recommand/RecPlayList.vue'
import RecNewSongList from './components/recommand/RecNewSongList.vue'
import RecMvList from './components/recommand/RecMvList.vue'

import recommand from '@api/modules/recommand'
import type { Banner, RecListItem, RecNewSong, RecNewMV } from '@renderer/types/home'

const bannerList = ref<Banner[]>([])
recommand.getBanner().then((res) => {
  bannerList.value = res.banners
})

const recList = ref<RecListItem[]>([])
recommand.getRecListToday().then((res) => {
  recList.value = res.result
})

const newSongList = ref<RecNewSong[]>([])
recommand.getNewSong().then((res) => {
  newSongList.value = res.result
})

const newMvList = ref<RecNewMV[]>([])
recommand.getNewMV().then((res) => {
  newMvList.value = res.result
})
</script>

<style lang="less" scoped>
.recommand {
  display: grid;
  grid-template: auto / auto;
  gap: 20px;
}
.sections {
  display: grid;
  grid-template: auto / auto;
  gap: 30px;
}
</style>
