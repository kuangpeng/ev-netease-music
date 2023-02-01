<template>
  <div class="cat-btn">
    <n-popover trigger="click" placement="bottom-start" :show-arrow="false" :raw="true" :to="false" display-directive="show">
      <template #trigger>
        <n-button round icon-placement="right">
          <template #icon>
            <n-icon :component="KeyboardArrowRightFilled" />
          </template>
          {{ selectedCat?.name }}
        </n-button>
      </template>
      <div class="catlist-content">
        <n-el>
        <n-list :bordered="false">
          <template #header>
            <div class="all c-sec">
              <span class="cat-link">{{ catList.all?.name }}</span>
            </div>
          </template>
          <n-list-item v-for="(item, index) in catList.cats" :key="index">
            <template #prefix>
              {{ item.name }}
            </template>
            <div class="c-sec">
              <n-grid :x-gap="0" :y-gap="10" :cols="6">
                <n-grid-item v-for="c in item.cats" :key="c.name">
                  <span class="cat-link">
                    {{ c.name }}
                    <i v-if="c.hot">HOT</i>
                  </span>
                </n-grid-item>
              </n-grid>
            </div>
          </n-list-item>
        </n-list>
      </n-el>
      </div>

    </n-popover>
  </div>
</template>

<script setup lang="ts">
import KeyboardArrowRightFilled from '@vicons/material/KeyboardArrowRightFilled'
import usePlaylistStore from '@renderer/store/modules/playlist'
import { Cat } from '@renderer/types/playlist'

type CatList = {
  name: string;
  category: string;
  cats: Cat[]
}

const playlistStore = usePlaylistStore()

const selectedCat = computed(() => {
  return playlistStore.catList.all || null
})
const catList = computed(() => {
  const cats = [] as CatList[]
  for (const k in playlistStore.catList.categories) {
    cats.push({
      name: playlistStore.catList.categories[k],
      category: k,
      cats: playlistStore.catList.sub.filter(item => (item.category + '') == k)
    })
  }
  return {
    all: playlistStore.catList.all,
    cats
  }
})

</script>

<style lang="less" scoped>
.catlist-content{
  .c-sec{
    padding: 0 22px;
    font-size: 0;
  }
  .cat-link{
    display: inline-block;
    position: relative;
    line-height: 1;
    font-size: 14px;
    padding: 7px 12px;
    border-radius: 10px;
    color: #333;
    background-color: transparent;
    cursor: pointer;


    &:hover{
      color: var(--primary-color);
    }
  }
}
</style>
