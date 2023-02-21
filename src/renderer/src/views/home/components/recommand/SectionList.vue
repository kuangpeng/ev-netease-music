<template>
  <div class="section-list">
    <div class="section-list-header">
      <slot name="header">
        <section-block-title :title="title" :link="link" />
      </slot>
    </div>
    <div class="section-list-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  title?: string
  link?: string
}
defineProps<Props>()
</script>

<style lang="less" scoped>
.section-list {
  display: grid;
  grid-template: auto / auto;
  gap: 10px;
}
</style>
