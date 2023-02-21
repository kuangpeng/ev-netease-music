<template>
  <n-space type="flex" justify="space-between">
    <div class="title" @click="handleClick">
      <router-link v-if="link" :to="link">
        <div class="link-wrap">
          <span>{{ title }}</span>
          <n-icon :component="ArrowForwardIosFilled" />
        </div>
      </router-link>
      <span v-else>{{ title }}</span>
    </div>
    <div>
      <slot name="right" />
    </div>
  </n-space>
</template>

<script setup lang="ts">
import ArrowForwardIosFilled from '@vicons/material/ArrowForwardIosFilled'

export interface BlockTitle {
  title: string
  link?: string
  'on-click': () => void
}

const props = defineProps<BlockTitle>()

const handleClick = (): void => {
  if (props.link) return
  if (props['on-click']) {
    props['on-click']()
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: 20px;
  font-weight: bold;

  .link-wrap {
    display: inline-flex;
    align-items: center;
    height: 30px;
    padding: 5px 0;
    line-height: 1;
    white-space: nowrap;
  }
  a {
    display: inline-block;
    line-height: 1.5;
    color: #333;

    &:hover {
      color: #000;
    }
  }
  .n-icon {
    margin-top: -3px;
  }
}
</style>
