<template>
  <n-space class="logo no-drag" align="center" :wrap-item="false" :size="5">
    <div class="logo-icon">
      <n-icon size="30" color="#fff">
        <svg-icon name="logo" />
      </n-icon>
    </div>
    <div class="logo-text">
      <img :src="logoText" alt="logo" />
    </div>
  </n-space>
</template>

<script setup lang="ts">
import logoText from '@renderer/assets/images/logo_text.png'
</script>

<style lang="less" scoped>
.logo{
  padding: 0 18px;
  cursor: pointer;
}
.logo-icon{
  font-size: 0;
  overflow: hidden;
}
.logo-text img{
  width: 75%;
}
</style>
