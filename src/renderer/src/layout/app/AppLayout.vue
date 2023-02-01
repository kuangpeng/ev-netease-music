<template>
  <div id="app-layout">
    <n-layout position="absolute">
      <n-layout-header class="layout-header">
        <app-topbar />
      </n-layout-header>
      <n-layout has-sider position="absolute" class="layout-main">
        <n-layout-sider bordered width="var(--app-siderbar-width)">
          <app-siderbar />
        </n-layout-sider>
        <n-layout id="scrollContainer" :native-scrollbar="false" :scrollbar-props="mainContentScrollbarProps">
          <div class="main-content">
            <router-view />
          </div>
        </n-layout>
      </n-layout>
      <n-layout-footer
        bordered
        position="absolute"
        class="layout-footer"
      >
        <app-bottombar />
      </n-layout-footer>
    </n-layout>
    <app-playlist-drawer />
  </div>
</template>

<script setup lang="ts">
import { ScrollbarProps } from 'naive-ui'
import AppTopbar from './components/app-topbar/index.vue'
import AppSiderbar from './components/app-siderbar/index.vue'
import AppBottombar from './components/app-bottombar/index.vue'
import AppPlaylistDrawer from './components/app-playlist-drawer/index.vue'

const mainContentScrollbarProps: ScrollbarProps = {
  trigger: 'none'
}
</script>

<style lang="less" scoped>
#app-layout{
  position: relative;
  width: 100vw;
  height: 100vh;
}
.layout-header{
  height: var(--app-topbar-height);
}
.layout-footer{
  height: var(--app-bottombar-height);
  background: none;
}
.layout-main{
  top: var(--app-topbar-height)!important;
  bottom: var(--app-bottombar-height)!important;
}
.main-content{
  padding-bottom: 50px;
}
</style>
