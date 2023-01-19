<template>
  <n-space type="flex" justify="space-between">
    <div class="title" @click="handleClick">
      <n-button text v-if="title.link">
        {{ title.title }}
        <template #icon>
          <n-icon :component="ArrowForwardIosFilled" />
        </template>
      </n-button>
      <span v-else>{{ title.title }}</span>
    </div>
    <div>
      <slot name="right" />
    </div>
  </n-space>

</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import ArrowForwardIosFilled from '@vicons/material/ArrowForwardIosFilled'

export interface BlockTitle {
  title: string;
  link?: string;
  'on-click': (event) => void
}

const props = defineProps({
  title: {
    type: Object as PropType<BlockTitle>,
    required: true
  }
})

const handleClick = () => {
  if (props['on-click']) {
    props['on-click']()
  }
}
</script>

<style lang="less" scoped>
.title{
  font-size: 18px;
  font-weight: bold;
  color: var(--text-color-1);
}
</style>
