<template>
  <section-list title="最新音乐" link="/home/new">
    <n-el>
      <n-grid :x-gap="18" :y-gap="16" :cols="3">
        <n-gi v-for="(item, index) in newSongList" :key="index" class="song-gi-item">
          <n-space type="flex" align="start">
            <div
              class="cover"
              :style="{ backgroundImage: `url(${item.picUrl}?param=50y50)` }"
              @click="handleClick(item.id)"
            >
              <div class="icon">
                <n-icon size="12" :component="Play16Filled" />
              </div>
            </div>
            <div class="song-info">
              <div class="tit">
                <n-ellipsis :line-clamp="1">{{ item.name }}</n-ellipsis>
              </div>
              <n-space type="flex" align="center" :wrap-item="false">
                <div class="artists">
                  <template v-for="(art, index) in item.song.artists" :key="index">
                    <span v-if="index != 0">&nbsp;/&nbsp;</span>
                    <router-link to="/artist" class="text-author">{{ art.name }}</router-link>
                  </template>
                </div>
              </n-space>
            </div>
          </n-space>
        </n-gi>
      </n-grid>
    </n-el>
  </section-list>
</template>

<script setup lang="ts">
import SectionList from './SectionList.vue'
import type { RecNewSong } from '@renderer/types/home'
import Play16Filled from '@vicons/fluent/Play16Filled'

defineProps<{
  newSongList: RecNewSong[]
}>()

const handleClick = (id: number) => {
  // TODO: click to play
  console.log(id)
}
</script>

<style lang="less" scoped>
.song-gi-item {
  border-radius: 5px;
  overflow: hidden;

  &:hover {
    background-color: var(--hover-color);
  }
}
.cover {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 5px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .icon {
    display: inline-block;
    font-size: 0;
    padding: 5px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    color: var(--primary-color);
  }
}
.song-info {
  font-size: 14px;
  line-height: 1;
  .tit {
    padding-top: 5px;
    margin-bottom: 8px;
  }
}
</style>
