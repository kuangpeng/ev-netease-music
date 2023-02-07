<template>
  <svg aria-hidden="true" :class="svgClass">
    <use :href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
export interface Props {
  prefix?: string;
  name: string;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  color: '#333'
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const iconName = computed(() =>  `#icon-${props.name}` )

const svgClass = computed(() => {
  if (props.name) {
    return 'svg-icon ' + iconName
  } else {
    return 'svg-icon'
  }
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover!important;
  display: inline-block;
}
</style>
