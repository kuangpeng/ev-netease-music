<template>
  <n-el class="block-item-wrap">
    <div class="item-cover-wrap" @click="handleDetail">
      <slot name="cover">
        <div class="item-cover">
          <img :src="cover" alt="" />
        </div>
      </slot>
      <div v-if="intro" class="top-intro">{{ intro }}</div>
      <div v-if="showTop" class="pos-top">
        <slot name="top">
          <n-space type="flex" justify="end">
            <n-space type="flex" align="center" :size="[1, 0]" :wrap-item="false">
              <n-icon size="14" :component="Play16Regular" />
              <span>{{ text_playcount }}</span>
            </n-space>
          </n-space>
        </slot>
      </div>
      <div v-if="showBottom" class="pos-bottom">
        <slot name="bottom">
          <n-space type="flex" justify="space-between" align="end" :wrap-item="false">
            <div class="author">
              <n-space
                v-if="showAuthor"
                type="flex"
                justify="start"
                align="center"
                :size="[2, 0]"
                :wrap-item="false"
              >
                <n-icon size="14" :component="MdContact" />
                <span>{{ creator?.nickname }}</span>
                <!-- <n-icon size="14" :component="MdContact" /> -->
              </n-space>
            </div>
            <div class="btn-play" @click.stop="handlePlay(id)">
              <n-icon size="16" :component="Play16Filled" />
            </div>
          </n-space>
        </slot>
      </div>
    </div>
    <div class="item-title">
      <slot name="title">
        <router-link :to="link">
          <n-ellipsis :line-clamp="2">{{ title }}</n-ellipsis>
        </router-link>
      </slot>
    </div>
  </n-el>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Play16Regular from '@vicons/fluent/Play16Regular'
import Play16Filled from '@vicons/fluent/Play16Filled'
import MdContact from '@vicons/ionicons4/MdContact'
import { numberFormat } from '@renderer/utils/utils'
import type { Creator } from '@renderer/types/playlist'

export interface Props {
  showTop?: boolean
  showBottom?: boolean
  showAuthor?: boolean
  intro?: string
  cover?: string
  title: string
  link: string
  id?: number
  playCount?: number
  creator?: Creator
}

const router = useRouter()

const props = withDefaults(defineProps<Props>(), {
  showTop: true,
  showBottom: true,
  showAuthor: false,
  intro: '',
  cover: '',
  title: '',
  link: '',
  id: 0,
  playCount: 0
})

const text_playcount = computed(() => {
  if (!props.playCount) return ''
  return numberFormat(props.playCount)
})

const handleDetail = () => {
  router.push(props.link)
}

const handlePlay = (id: number) => {
  console.log(id)
  // TODO: click to play whole feet
}
</script>

<style lang="less" scoped>
.block-item-wrap {
  font-size: 14px;
}
.item-cover-wrap {
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 206px;
  height: 206px;
  border-radius: 6px;

  .item-cover {
    img {
      width: 206px;
      height: 206px;
    }
  }

  .top-intro {
    position: absolute;
    z-index: 2;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 0.8em;
    color: #fff;
    padding: 8px 5px;
    line-height: 1;
    transform: translateY(-110%);

    transition: all 0.5s 0.3s;
  }

  .pos-top {
    position: absolute;
    z-index: 1;
    // width: 100%;
    top: 5px;
    left: 7px;
    right: 7px;
    color: #fff;
    font-size: 0.8em;
    line-height: 1;
  }
  .pos-bottom {
    position: absolute;
    z-index: 1;
    width: 100%;
    padding: 8px;
    left: 0;
    bottom: 0;
    color: #fff;
    font-size: 0.8em;
  }
}
.item-title {
  margin-top: 8px;
  height: 40px;
  font-size: 1em;
  line-height: 1.5;

  a {
    color: #666;

    &:hover {
      color: #333;
    }
  }
}

.btn-play {
  // display: none;
  cursor: pointer;
  padding: 7px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 0;
  color: var(--primary-color);
  line-height: 1;
  overflow: hidden;
  transition: opacity 0.35s;
  opacity: 0;
}

.item-cover-wrap:hover {
  .top-intro {
    transform: translateY(0);
  }

  .btn-play {
    // display: block;
    opacity: 1;
  }
}
</style>
