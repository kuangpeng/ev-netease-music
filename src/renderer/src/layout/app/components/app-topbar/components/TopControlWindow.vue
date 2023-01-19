<template>
  <n-space class="window-action no-drag" :wrap-item="false" :size="[13, 0]">
    <n-button text color="#fff">
      <n-icon size="22" :component="Crop75Filled" title="mini模式" />
    </n-button>
    <n-button text color="#fff">
      <n-icon size="22" :component="HorizontalRuleRound" title="最小化" />
    </n-button>
    <n-button text color="#fff">
      <n-icon size="22" :component="IosSquareOutline" title="最大化" />
    </n-button>
    <n-button text color="#fff">
      <n-icon size="22" :component="MdClose" title="关闭" />
    </n-button>
  </n-space>
</template>

<script setup lang="ts">
import IosSquareOutline from '@vicons/ionicons4/IosSquareOutline'
import MdClose from '@vicons/ionicons4/MdClose'
import HorizontalRuleRound from '@vicons/material/HorizontalRuleRound'
import Crop75Filled from '@vicons/material/Crop75Filled'
</script>

<style lang="less" scoped>
.window-action{
  color: #fff;
  padding-right: 25px;
}
</style>
