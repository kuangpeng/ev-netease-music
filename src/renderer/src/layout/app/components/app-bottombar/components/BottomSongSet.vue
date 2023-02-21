<template>
  <div class="song-set">
    <n-space :wrap-item="false" :size="[20, 0]" justify="end">
      <n-button type="error" ghost size="tiny"> 标准 </n-button>
      <n-popover trigger="hover" style="padding: var(--app-pop-pad-small)">
        <template #trigger>
          <n-button text>
            <template #icon>
              <n-icon size="20">
                <svg-icon name="sound" />
              </n-icon>
            </template>
          </n-button>
        </template>
        <div>
          <n-slider
            v-model:value="volume"
            :max="100"
            :tooltip="false"
            vertical
            :theme-overrides="appOverride.appControl.Slider"
            style="height: 80px"
          >
          </n-slider>
        </div>
      </n-popover>
      <n-button text title="打开播放列表">
        <template #icon>
          <n-icon size="27" :component="PlaylistPlayFilled" />
        </template>
      </n-button>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import PlaylistPlayFilled from '@vicons/material/PlaylistPlayFilled'
import { appOverride } from '@renderer/setting/theme-overrides'

const volume = ref(50)
</script>

<style lang="less" scoped>
.song-set {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding-right: 23px;
}
</style>
