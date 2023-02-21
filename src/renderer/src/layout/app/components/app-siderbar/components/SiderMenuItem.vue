<template>
  <div v-if="open === null || open === true" class="menu-item" :class="menuItemSizeClass">
    <router-link v-if="link" :to="link">
      <n-icon v-if="icon" size="15">
        <svg-icon :name="icon" />
      </n-icon>
      {{ title }}
    </router-link>
    <span v-else>
      <n-icon v-if="icon" size="15">
        <svg-icon :name="icon" />
      </n-icon>
      {{ title }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon?: string
    title: string
    link?: string
    size?: 'normal' | 'small' | 'large'
    open?: boolean
  }>(),
  {
    title: '',
    size: 'normal'
  }
)

const menuItemSizeClass = computed(() => ({
  'menu-item-small': props.size == 'small',
  'menu-item-normal': props.size == 'normal',
  'menu-item-large': props.size == 'large'
}))
</script>

<style lang="less" scoped>
.menu-item {
  margin-left: -8px;
  a,
  span {
    display: block;
    color: #333;
    padding: 8px;

    .n-icon {
      vertical-align: text-bottom;
    }

    &:hover {
      background-color: #f6f6f8;
    }

    &.router-link-active {
      font-size: 1.2em;
      font-weight: bold;
      background-color: #f6f6f8;
    }
  }
}
.menu-item-normal {
  font-size: 1em;

  a,
  span {
    &.router-link-active {
      font-size: 1.2em;
    }
  }
}
.menu-item-small {
  font-size: 0.8em;

  a,
  span {
    &.router-link-active {
      font-size: 1.2em;
    }
  }
}
.menu-item-large {
  font-size: 1.2em;

  a,
  span {
    &.router-link-active {
      font-size: 1.2em;
    }
  }
}
</style>
