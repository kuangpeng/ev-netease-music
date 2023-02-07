<template>
  <div class="relative z-100">
    <n-space id="app-topbar" justify="space-between" align="center" :wrap-item="false">
      <n-space class="top-left" align="center" :size="[10, 0]" :wrap-item="false">
        <top-logo style="margin-right: 30px;" />
        <top-history-tool />
        <top-search />
      </n-space>
      <top-control />
    </n-space>
  </div>
</template>

<script setup lang="ts">
import TopLogo from './components/TopLogo.vue'
import TopHistoryTool from './components/TopHistoryTool.vue'
import TopSearch from './components/TopSearch.vue'
import TopControl from './components/TopControl.vue'
</script>

<style lang="less" scoped>
#app-topbar{
  background-color: #ed4141;
  width: 100%;
  height: var(--app-topbar-height);
  -webkit-app-region: drag;
}
</style>
