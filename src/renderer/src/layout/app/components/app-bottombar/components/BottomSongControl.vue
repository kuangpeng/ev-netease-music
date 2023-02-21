<template>
  <div class="song-control">
    <n-space class="song-play-control" justify="center" :wrap-item="false" :size="[32, 0]">
      <n-button text>
        <template #icon>
          <n-icon size="17">
            <svg-icon v-show="playMode == PlayMode.LIST" name="playorder" title="顺序播放" />
            <svg-icon v-show="playMode == PlayMode.LOOP" name="playlooplist" title="列表循环" />
            <svg-icon v-show="playMode == PlayMode.LOOPONE" name="playloopone" title="单曲循环" />
            <svg-icon v-show="playMode == PlayMode.RANDOM" name="playrandom" title="随机播放" />
          </n-icon>
        </template>
      </n-button>
      <n-button text>
        <template #icon>
          <n-icon size="25" :component="SkipPreviousFilled" />
        </template>
      </n-button>
      <n-button circle secondary size="large">
        <template #icon>
          <span v-show="playStatus == PlayStatus.PLAY"
            >&nbsp;<n-icon size="27" :component="MdPlay" title="播放"
          /></span>
          <span v-show="playStatus == PlayStatus.PAUSE"
            ><n-icon size="27" :component="IosPause" title="暂停"
          /></span>
        </template>
      </n-button>
      <n-button text>
        <template #icon>
          <n-icon size="25" :component="SkipNextFilled" />
        </template>
      </n-button>
      <n-button text>
        <template #icon>
          <n-icon size="15">
            <svg-icon name="playword" />
          </n-icon>
        </template>
      </n-button>
    </n-space>
    <n-space class="song-play-progress" justify="center" :wrap-item="false" :size="[8, 0]">
      <n-text class="time-num" depth="3">00:11</n-text>
      <div class="progress-bar">
        <n-slider
          v-model:value="songProgress"
          :step="1"
          :max="songProgressMax"
          :tooltip="false"
          :theme-overrides="appOverride.appControl.Slider"
        />
      </div>
      <n-text class="time-num">04:11</n-text>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import MdPlay from '@vicons/ionicons4/MdPlay'
import IosPause from '@vicons/ionicons4/IosPause'
import SkipPreviousFilled from '@vicons/material/SkipPreviousFilled'
import SkipNextFilled from '@vicons/material/SkipNextFilled'
import { PlayMode, PlayStatus } from '@renderer/types/play'
import { appOverride } from '@renderer/setting/theme-overrides'

const playMode = ref<PlayMode>(PlayMode.LIST)
const playStatus = ref<PlayStatus>(PlayStatus.PLAY)

const songProgress = ref(0)
const songProgressMax = computed(() => {
  return 100
})
</script>

<style lang="less" scoped>
.song-control {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.song-play-control {
  width: 100%;
}
.progress-bar {
  width: 370px;
}
.time-num {
  font-size: 10px;
}
</style>
