<template>
  <n-space class="song-favor" align="center" :wrap-item="false" :size="[74, 0]">
    <n-button text @click="handclickHide">
      <n-icon size="22" :component="ChevronDown48Regular" depth="3" />
    </n-button>
    <n-space justify="space-between" :size="[16, 0]">
      <n-button size="large" circle title="喜欢">
        <template #icon>
          <n-icon color="#4d4d4d" :component="IosHeartEmpty" />
        </template>
      </n-button>
      <n-button size="large" circle title="加入收藏">
        <template #icon>
          <n-icon color="#4d4d4d" :component="LibraryAddOutlined" />
        </template>
      </n-button>
      <n-badge value="VIP" type="error">
        <n-button size="large" circle title="下载">
          <template #icon>
            <n-icon color="#4d4d4d">
              <svg-icon name="download" />
            </n-icon>
          </template>
        </n-button>
      </n-badge>
      <n-button size="large" circle title="分享">
        <template #icon>
          <n-icon color="#4d4d4d" :component="ShareOutlined" />
        </template>
      </n-button>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import IosHeartEmpty from '@vicons/ionicons4/IosHeartEmpty'
import LibraryAddOutlined from '@vicons/material/LibraryAddOutlined'
import ShareOutlined from '@vicons/material/ShareOutlined'
import ChevronDown48Regular from '@vicons/fluent/ChevronDown48Regular'

const emit = defineEmits<{
  (e: 'toggleSlider', status: boolean): void
}>()

const handclickHide = (): void => {
  emit('toggleSlider', false)
}
</script>

<style lang="less" scoped>
.song-favor {
  height: var(--app-bottombar-height);
  padding-left: 20px;
}
</style>
