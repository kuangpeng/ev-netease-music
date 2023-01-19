<template>
  <div class="block-item-wrap">
    <div class="item-cover-wrap">
      <div class="item-cover">
        <img src="http://p2.music.126.net/UfqMAxfXYiKYU-Eue3M7gg==/109951168219623624.jpg?param=190y190" alt="">
      </div>
      <div class="top-intro">sdsdsdsds</div>
      <div class="pos-top">
        <slot name="top">
          <n-space type="flex" justify="end">
            <n-space type="flex" :size="[1, 0]" :wrap-item="false">
              <n-icon size="10" :component="Play16Regular" />
              <n-text>200万</n-text>
            </n-space>
          </n-space>
        </slot>
      </div>
      <div class="pos-bottom">
        <slot name="bottom">
          <n-space type="flex" justify="space-between">
            <n-space>
              <n-icon size="10" :component="MdContact" />
              <n-text>200万</n-text>
              <n-icon size="10" :component="MdContact" />
            </n-space>
            <n-button text class="btn-play">
              <template #icon>
                <n-icon size="20" :component="PlayCircle20Regular" />
              </template>
            </n-button>
          </n-space>
        </slot>
      </div>
    </div>
    <div class="item-title">
      <slot name="title">
        <router-link to="/">
          sdsdsdsdsd
        </router-link>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import Play16Regular from '@vicons/fluent/Play16Regular'
import PlayCircle20Regular from '@vicons/fluent/PlayCircle20Regular'
import MdContact from '@vicons/ionicons4/MdContact'
</script>

<style lang="less" scoped>

</style>
