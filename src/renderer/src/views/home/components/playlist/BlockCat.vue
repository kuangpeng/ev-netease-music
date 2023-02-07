<template>
  <div class="cat-btn">
    <n-popover ref="catPopRef"
      trigger="click"
      placement="bottom-start"
      :show-arrow="false"
      display-directive="show"
      :width="740"
      style="padding: 0"
      :z-index="10"
      :to="false"
    >
      <template #trigger>
        <n-button round icon-placement="right">
          <template #icon>
            <n-icon :component="KeyboardArrowRightFilled" />
          </template>
          {{ selectedCat }}
        </n-button>
      </template>
      <div class="catlist-content">
        <n-el>
          <div class="all c-sec">
            <span class="cat-link" :class="{active: selectedCat == catList.all?.name}" @click="handleChooseCat(catList.all?.name || '')">{{ catList.all?.name }}</span>
          </div>

          <!-- <n-grid v-for="(item, index) in catList.cats" :key="index"
            class="list-item"
          >
            <n-grid-item :span="3">
              <div class="cat-tit">
              <n-icon size="23">
                <svg-icon :name="item.icon" />
              </n-icon>
              <span>{{ item.name }}</span>
            </div>
            </n-grid-item>
            <n-grid-item :span="21">
              <div class="c-sec">
              <n-grid :x-gap="0" :y-gap="10" :cols="6">
                <n-grid-item v-for="c in item.cats" :key="c.name">
                  <span class="cat-link" @click="handleChooseCat(c.name)">
                    {{ c.name }}
                    <i v-if="c.hot">HOT</i>
                  </span>
                </n-grid-item>
              </n-grid>
            </div>
            </n-grid-item>
          </n-grid> -->

          <div class="catlist-ul">
            <div v-for="(item, index) in catList.cats" :key="index" class="list-item">
              <div class="ul-h">
                <div class="cat-tit">
                  <n-icon size="23">
                    <svg-icon :name="item.icon" />
                  </n-icon>
                  <span>{{ item.name }}</span>
                </div>
              </div>
              <div class="ul-b">
                <div class="c-sec">
                  <div class="g-i" v-for="c in item.cats" :key="c.name">
                    <span class="cat-link" :class="{active: selectedCat == c.name}" @click="handleChooseCat(c.name)">
                      {{ c.name }}
                      <i v-if="c.hot">HOT</i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </n-el>
      </div>

    </n-popover>
  </div>
</template>

<script setup lang="ts">
import KeyboardArrowRightFilled from '@vicons/material/KeyboardArrowRightFilled'
import usePlaylistStore from '@renderer/store/modules/playlist'
import { Cat } from '@renderer/types/playlist'
import { Categories } from '@renderer/setting/app'
import { PopoverInst } from 'naive-ui'

type CatList = {
  name: string;
  category: string;
  icon: string;
  cats: Cat[]
}

const emit = defineEmits<{
  (e: 'choose:cat-name', name: string) :void
}>()

const playlistStore = usePlaylistStore()

const selectedCat = ref('')

const catPopRef = ref<PopoverInst | null>(null)

const catList = computed(() => {
  const cats = [] as CatList[]
  for (const k in playlistStore.catList.categories) {
    const c = Categories[k]
    cats.push({
      name: playlistStore.catList.categories[k],
      icon: c.icon,
      category: k,
      cats: playlistStore.catList.sub.filter(item => (item.category + '') == k)
    })
  }
  return {
    all: playlistStore.catList.all,
    cats
  }
})

const handleChooseCat = (name: string) => {
  if (!name) return;
  catPopRef.value?.setShow(false)
  selectedCat.value = name
  emit('choose:cat-name', name)
}

onMounted(() => {
  selectedCat.value = catList.value.all?.name || ''
  handleChooseCat(selectedCat.value)
})
</script>

<style lang="less" scoped>
.catlist-content{
  padding-bottom: 70px;

  .all{
    padding-top: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border-color);
  }
  .catlist-ul{

  }
  .list-item{
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 25px;

    .ul-h{
      width: 15%;
    }
    .ul-b{
      width: 85%;
      margin-top: -20px;
    }
  }
  .c-sec{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 22px;
    padding-right: 22px;
    font-size: 0;
  }
  .g-i{
    width: 16.66%;
    text-align: left;
    margin-top: 20px;
  }
  .cat-tit{
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 110px;
    color: #999;
    white-space: nowrap;

    span{
      line-height: 1;
      margin-left: 7px;
      margin-top: 3px;
    }
  }
  .cat-link{
    display: inline-block;
    position: relative;
    z-index: 1;
    line-height: 1;
    font-size: 14px;
    padding: 7px 12px;
    border-radius: 10px;
    color: #555;
    background-color: transparent;
    cursor: pointer;

    i{
      position: absolute;
      right: -10px;
      top: 5px;
      font-size: 10px;
      font-style: normal;
      color: var(--primary-color);
      transform: scale(0.6);
    }
    &:hover{
      color: var(--primary-color);
    }

    &.active{
      // TODO: background opacity
      // background-color: var(--primary-color);
      color: var(--primary-color)
    }
  }
}
</style>
