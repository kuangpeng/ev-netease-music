<template>
  <n-drawer
    v-model:show="showPlaylist"
    :trap-focus="false"
    :block-scroll="false"
    :show-mask="false"
    :width="420"
    :z-index="100"
    :close-on-esc="false"
    :mask-closable="false"
    :style="playlistStyle"
    :theme-overrides="appOverride.playList.Drawer"
  >
    <n-drawer-content :header-style="playlistHeaderStyle" :native-scrollbar="false" :scrollbar-props="{trigger: 'none'}">
      <template #header>
        <div class="playlist-header">
          <div class="text-xl font-700">当前播放</div>
          <n-space type="flex" justify="space-between" align="center">
            <div class="text-sm color-gray-400">共223首</div>
            <n-space type="flex" align="center" :wrap-item="false">
              <n-button text>
                <template #icon>
                  <n-icon :size="20" :component="ChannelAdd48Regular" />
                </template>
                收藏全部
              </n-button>
              <n-button text type="info">清空列表</n-button>
            </n-space>
          </n-space>
        </div>
      </template>
      <n-el>
        <div class="playlist-body">
          <song-list />
        </div>
      </n-el>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import ChannelAdd48Regular from '@vicons/fluent/ChannelAdd48Regular'
import { SongList } from '@components/song-list'
import { appOverride } from '@renderer/setting/theme-overrides'

const showPlaylist = ref(false)
const playlistStyle = {
  top: 'var(--app-topbar-height)',
  bottom: 'var(--app-bottombar-height)'
}
const playlistHeaderStyle = {
  display: 'block',
  padding: '16px 0 5px 0',
  margin: '0 20px'
}
</script>

<style lang="less" scoped>
.playlist-header{
  // padding-top: 16px;
  // padding-bottom: 5px;
  // border-bottom: 1px solid var(--border-color);
}
.playlist-body{
  margin-left: -20px;
  margin-right: -20px;
}
</style>
