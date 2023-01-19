<template>
  <div class="menu-section-title">
    <n-text depth="3">
      <slot>
        <span>{{ title }}</span>
      </slot>
    </n-text>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String
})
</script>

<style lang="less" scoped>
.menu-section-title{
  font-size: 0.9em;
  margin-bottom: 8px;
}
</style>
