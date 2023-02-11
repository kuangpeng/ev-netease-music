<template>
  <div class="sider-menus">
    <div class="main-menu menu-section">
      <sider-menu-item v-for="(m, index) in AppNavs.global"
        :key="index"
        v-bind="m"
      ></sider-menu-item>
    </div>
    <div class="my-menu menu-section">
      <sider-menu-title title="我的音乐" />
      <sider-menu-item v-for="(m, index) in AppNavs.my"
        :key="index"
        v-bind="m"
      ></sider-menu-item>
    </div>
    <div class="playlist-menu menu-section">
      <sider-menu-title>
        创建的歌单
      </sider-menu-title>

    </div>
  </div>
</template>

<script setup lang="ts">
import { AppNavs } from '@renderer/setting/app'
import SiderMenuItem from './components/SiderMenuItem.vue'
import SiderMenuTitle from './components/SiderMenuTitle.vue'


</script>

<style lang="less" scoped>
.sider-menus{
  padding: 10px 3px 3px 20px;
  font-size: 1em;
}
.menu-section{
  margin-bottom: 18px;
}
.main-menu>div{
  margin-bottom: 3px;

  &:last-child{
    margin-bottom: 0;
  }
}
</style>
