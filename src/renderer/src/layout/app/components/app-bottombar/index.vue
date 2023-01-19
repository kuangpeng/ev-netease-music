<template>
  <n-el>
    <n-space justify="space-between" :wrap-item="false" style="height: 100%;" :size="0">
      <bottom-song-box class="bottombar-left" />
      <bottom-song-control class="bottombar-center" />
      <bottom-song-set class="bottombar-right" />
    </n-space>
  </n-el>
</template>

<script setup lang="ts">
import BottomSongBox from './components/BottomSongBox.vue'
import BottomSongControl from './components/BottomSongControl.vue'
import BottomSongSet from './components/BottomSongSet.vue'
</script>

<style lang="less" scoped>
.bottombar-left{
  width: 28%;
  flex-basis: 28%;
}
.bottombar-center{
  width: 44%;
  flex-basis: 44%;
}
.bottombar-right{
  width: 28%;
  flex-basis: 28%;
}
</style>
