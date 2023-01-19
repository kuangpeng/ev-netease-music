<template>
  <n-el>
    <div class="nav">
      <ul role="list">
        <template v-for="(n, index) in appNavs.home">
          <li v-if="n.link" :key="index">
            <router-link :to="n.link">
              <span>{{ n.title }}</span>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </n-el>
</template>

<script setup lang="ts">
import { appNavs } from '@renderer/setting/app'
</script>

<style lang="less" scoped>
.nav{
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #fff;

  ul{
    display: flex;
    font-size: 16px;
    align-items: top;

    li{
      margin-right: 22px;

      a{
        display: block;
        position: relative;
        color: var(--text-color-1);
        line-height: 1;

        &.router-link-active{
          font-size: 1.2em;
          font-weight: bold;
          padding-bottom: 8px;

          &::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 80%;
            height: 3px;
            background-color: var(--primary-color);
          }
        }
      }
    }
  }
}
</style>
