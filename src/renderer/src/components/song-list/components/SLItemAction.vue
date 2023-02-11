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

defineProps<{
  id: number
}>()

const songLike = (id: number) => {
  console.log('like ', id)
}

const songDownLoad = (id: number) => {
  console.log('down ', id)
}

</script>

<style scoped>

</style>
