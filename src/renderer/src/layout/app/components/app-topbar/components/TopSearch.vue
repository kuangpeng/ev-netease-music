<template>
  <n-el>
    <div class="search-wrap no-drag">
      <div class="search-input flex-middle">
        <n-icon color="#f9d8d8" size="20" :component="IosSearch" />
        <input type="text" class="inputer" placeholder="搜索" />
      </div>
    </div>
  </n-el>
</template>

<script setup lang="ts">
import IosSearch from '@vicons/ionicons4/IosSearch'
</script>

<style lang="less" scoped>
.search-input {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
  overflow: hidden;
}
.inputer {
  width: 125px;
  height: 32px;
  line-height: 33px;
  background-color: transparent;
  border: none;
  color: var(--input-color);
  font-size: 13px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
  }
}
</style>
