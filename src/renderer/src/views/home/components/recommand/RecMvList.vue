<template>
  <section-list title="最新MV" link="/v/mv">
    <n-el>
      <n-grid :x-gap="18" :cols="4">
        <n-gi v-for="(item, index) in recMvList" :key="index" class="mv-gi-item">
          <n-space type="flex" :vertical="true" align="start" :size="[0, 10]">
            <div class="mv-cover" @click="handleClick(item.id)">
              <img :src="item.picUrl + '?param=260y145'" alt="" />
              <div class="top-num">
                <n-space type="flex" justify="end">
                  <n-space type="flex" align="center" :size="[1, 0]" :wrap-item="false">
                    <n-icon size="14" :component="Play16Regular" />
                    <span>{{ text_playcount(item.playCount) }}</span>
                  </n-space>
                </n-space>
              </div>
              <div class="top-intro">
                {{ item.copywriter }}
              </div>
            </div>
            <div class="mv-info">
              <div class="name">
                <router-link to="/">
                  <n-ellipsis :line-clamp="1">{{ item.name }}</n-ellipsis>
                </router-link>
              </div>
              <div class="artists">
                <template v-for="(art, index) in item.artists" :key="index">
                  <span v-if="index != 0">&nbsp;/&nbsp;</span>
                  <router-link to="/artist" class="text-author">{{ art.name }}</router-link>
                </template>
              </div>
            </div>
          </n-space>
        </n-gi>
      </n-grid>
    </n-el>
  </section-list>
</template>

<script setup lang="ts">
import SectionList from './SectionList.vue'
import Play16Regular from '@vicons/fluent/Play16Regular'
import { numberFormat } from '@renderer/utils/utils'
import type { RecNewMV } from '@renderer/types/home'

defineProps<{
  recMvList: RecNewMV[]
}>()

const text_playcount = (val: number) => {
  return numberFormat(val)
}
const handleClick = (id: number) => {
  // TODO: click to play
  console.log(id)
}
</script>

<style lang="less" scoped>
.mv-cover {
  cursor: pointer;
  position: relative;
  z-index: 2;
  width: 260px;
  height: 145px;
  border-radius: 5px;
  overflow: hidden;
  font-size: 12px;
  color: #fff;

  .top-num {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 5px;
    font-size: 0.8em;
    opacity: 1;

    transition: opacity 0.1s 0.3s;
  }

  .top-intro {
    position: absolute;
    z-index: 2;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 0;
    color: #fff;
    padding: 10px 5px;
    font-size: 0.8em;
    line-height: 1;
    transform: translateY(-110%);

    transition: all 0.5s 0.3s;

    span {
      font-size: 0.8em;
    }
  }
}
.mv-info {
  font-size: 14px;

  .name {
    a {
      display: block;
      font-size: 1em;
      color: #333;
      line-height: 1;

      &:hover {
        color: #000;
      }
    }
  }
  .artists {
    font-size: 0.8em;
    color: #666;
  }
}

.mv-cover:hover {
  .top-num {
    opacity: 0;
  }
  .top-intro {
    transform: translateY(0);
  }
}
</style>
