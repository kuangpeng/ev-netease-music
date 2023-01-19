<template>
  <div class="home-layout">
    <home-nav />
    <div class="home-main responsive-main">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeNav from './components/home-nav/index.vue'
</script>

<style lang="less" scoped>
.home-layout{
  padding: 0 30px;
}
</style>
