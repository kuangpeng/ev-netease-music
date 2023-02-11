<template>
  <in-nav-layout>
    <template #nav>
      <tab-nav :navs="AppNavs.home" />
    </template>
  </in-nav-layout>
</template>

<script setup lang="ts">
import InNavLayout from '../InNavLayout.vue'
import { AppNavs } from '@renderer/setting/app'
</script>

<style lang="less" scoped>
</style>
