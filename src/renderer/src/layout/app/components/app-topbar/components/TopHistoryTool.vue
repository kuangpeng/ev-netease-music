<template>
  <n-space class="history-tool no-drag" :size="[8, 0]" align="center">
    <n-button text>
      <n-icon-wrapper :size="24" :border-radius="15" color="rgba(0, 0, 0, .1)">
        <n-icon size="15" color="#fff" depth="2">
          <ios-arrow-back />
        </n-icon>
      </n-icon-wrapper>
    </n-button>
    <n-button text>
      <n-icon-wrapper :size="24" :border-radius="15" color="rgba(0, 0, 0, .1)">
        <n-icon size="15" color="#fff" depth="2">
          <ios-arrow-forward />
        </n-icon>
      </n-icon-wrapper>
    </n-button>
  </n-space>
</template>

<script setup lang="ts">
import IosArrowBack from '@vicons/ionicons4/IosArrowBack'
import IosArrowForward from '@vicons/ionicons4/IosArrowForward'
</script>

<style scoped>

</style>
