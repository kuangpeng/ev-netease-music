<template>
  <n-space :size="[4, 0]" :wrap-item="false" align="center" class="login-user-box no-drag">
    <n-icon size="30" :component="MdContact" />
    <n-button text icon-placement="right" size="small" text-color="rgba(255, 255, 255, .7)">
      <template #icon>
        <n-icon size="18" color="#f9d8d8" :component="MdArrowDropdown" />
      </template>
      <span>未登录</span>
    </n-button>
  </n-space>
</template>

<script setup lang="ts">
import MdContact from '@vicons/ionicons4/MdContact'
import MdArrowDropdown from '@vicons/ionicons4/MdArrowDropdown'
</script>

<style lang="less" scoped>
.login-user-box{
  cursor: pointer;
}
</style>
