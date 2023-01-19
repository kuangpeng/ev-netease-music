<template>
  <div>
    <n-button text @click="songLike(id)">
      <template #icon>
        <n-icon size="18" :component="IosHeartEmpty" />
      </template>
    </n-button>
    <n-button text @click="songDownLoad(id)">
      <template #icon>
        <n-icon size="18" :component="ArrowDownload20Regular" />
      </template>
    </n-button>
  </div>
</template>

<script setup lang="ts">
import IosHeartEmpty from '@vicons/ionicons4/IosHeartEmpty'
import ArrowDownload20Regular from '@vicons/fluent/ArrowDownload20Regular'

import { songLike, songDownLoad } from '@renderer/modules/song'

defineProps<{
  id: number
}>()

</script>

<style scoped>

</style>
