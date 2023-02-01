<template>
  <svg aria-hidden="true" :class="svgClass">
    <use :href="symbolId" />
  </svg>
</template>

<script lang="ts">
export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    const iconName = computed(() =>  `#icon-${props.name}` )
    const svgClass = computed(() => {
      if (props.name) {
        return 'svg-icon ' + iconName
      } else {
        return 'svg-icon'
      }
    })
    return { symbolId, svgClass }
  },
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
