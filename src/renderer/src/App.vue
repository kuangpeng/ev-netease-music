<script setup lang="ts">
import type { GlobalTheme } from 'naive-ui'
import AppLayout from './layout/app/AppLayout.vue'
import { lightThemeOverrides, darkThemeOverrides } from './setting/theme-overrides'

// TODO: theme setting
const theme = ref<GlobalTheme | null>(null)
</script>

<template>
  <n-config-provider
    abstract
    :theme="theme"
    :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"
  >
    <app-layout />
  </n-config-provider>
</template>

<style lang="less"></style>
