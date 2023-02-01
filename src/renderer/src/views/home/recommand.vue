<template>
  <div class="recommand">
    <rec-carousel :carousel-list="bannerList" style="margin-bottom: 18px;" />

    <div class="sections">
      <rec-play-list :rec-playlist="recList">
        <template #header>
          <section-block-title title="推荐歌单" link="/home/playlist" />
        </template>
      </rec-play-list>

      <!-- 热门博客 -->
      <!-- 听见好书 -->
      <!-- 独家放送 -->

      <rec-new-song-list :new-song-list="newSongList">
        <template #header>
          <section-block-title title="最新音乐" link="/home/new" />
        </template>
      </rec-new-song-list>

      <!-- 主题博客 -->

      <rec-mv-list :rec-mv-list="newMvList">
        <template #header>
          <section-block-title title="最新MV" link="/v/mv" />
        </template>
      </rec-mv-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import RecCarousel from './components/recommand/RecCarousel.vue'
import RecPlayList from './components/recommand/RecPlayList.vue'
import RecNewSongList from './components/recommand/RecNewSongList.vue'
import RecMvList from './components/recommand/RecMvList.vue'

import recommand from '@api/modules/recommand'
import { Banner, RecListItem, RecNewSong, RecNewMV } from '@renderer/types/home'


const bannerList = ref<Banner[]>([])
const recList = ref<RecListItem[]>([])
const newSongList = ref<RecNewSong[]>([])
const newMvList = ref<RecNewMV[]>([])

recommand.getBanner().then(res => {
  bannerList.value = res.banners
})
recommand.getRecListToday().then(res => {
  recList.value = res.result
})
recommand.getNewSong().then(res => {
  newSongList.value = res.result
})

recommand.getNewMV().then(res => {
  newMvList.value = res.result
})
</script>

<style lang="less" scoped>
.recommand{
  .sections{
    .section-list:first-child{
      margin-top: 0;
    }
  }
}
</style>
