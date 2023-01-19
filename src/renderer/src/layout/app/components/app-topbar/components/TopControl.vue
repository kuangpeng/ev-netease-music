<template>
  <n-el>
    <n-space class="control-wrap" align="center" :size="[16, 0]" :wrap-item="false">
      <top-control-login />
      <span>|</span>
      <top-control-window />
    </n-space>
  </n-el>
</template>

<script setup lang="ts">
import TopControlLogin from './TopControlLogin.vue'
import TopControlWindow from './TopControlWindow.vue'
</script>

<style lang="less" scoped>
.control-wrap{
  color: var(--base-color);
}
</style>
