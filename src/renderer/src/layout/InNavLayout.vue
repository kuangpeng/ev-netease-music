<template>
  <div class="inner-nav-layout">
    <div class="inner-nav">
      <slot name="nav"></slot>
    </div>
    <div class="responsive-main">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.inner-nav-layout{
  position: relative;
  padding: 60px 30px 0;

  .inner-nav{
    position: fixed;
    top: var(--app-topbar-height);
    left: var(--app-siderbar-width);
    right: 0;
    z-index: 20;
    height: 60px;
    padding: 0 30px;
    background-color: #fff;
  }
}
</style>
