<template>
  <n-space type="flex" justify="start" :size="[20, 0]">
    <div class="detail-cover b-rd-1 overflow-hidden text-0">
      <n-image
        width="184"
        :src="detail?.coverImgUrl"
        :fallback-src="defaultCover"
      />
    </div>
    <div class="detail-info">
      <div class="info-name text-5 font-bold">{{ detail?.name }}</div>
      <div class="info-author mt-1">
        <n-space type="flex" align="center" :wrap-item="false" :size="[8, 0]">
          <n-avatar
            round
            :size="24"
            :src="detail?.creator?.avatarUrl"
          >
            <template #fallback>
              <n-icon size="30" :component="MdContact" />
            </template>
          </n-avatar>
          <router-link class="link text-1" :to="'/user/' + detail?.creator?.userId  || '0'">{{ detail?.creator?.nickname }}</router-link>
          <span class="text-1 color-gray-500">{{ dateCreate }}创建</span>
        </n-space>
      </div>
      <div class="action mt-2">
        <n-space type="flex" align="center" :size="[10, 0]">
          <n-button-group>
            <n-button round type="primary">
              <template #icon>
                <n-icon :component="MdPlay" />
              </template>
              播放全部
            </n-button>
            <n-button circle type="primary" title="添加全部到播放列表">
              <template #icon>
                <n-icon size="18" :component="Add20Regular" />
              </template>
            </n-button>
          </n-button-group>
          <n-button round>
            <template #icon>
              <n-icon :component="ChannelAdd48Regular" />
            </template>
            收藏(123)
          </n-button>
          <n-button round>
            <template #icon>
              <n-icon :component="ShareOutlined" />
            </template>
            分享(123)
          </n-button>
          <n-button round>
            <template #icon>
              <n-icon>
                <svg-icon name="download" />
              </n-icon>
            </template>
            下载全部
          </n-button>
        </n-space>
      </div>
      <div class="mt-2 color-gray-600">
        标签 :
        <template v-for="t in detail?.tags" :key="t">
          <router-link class="link" :to="'/home/playlist?cat=' + t">{{ t }}</router-link>/
        </template>
      </div>
      <div class="mt-1 color-gray-600">
        歌曲 : <span class="color-gray-500">{{ detail?.trackCount }}</span>&nbsp;&nbsp;&nbsp;&nbsp;播放 : <span class="color-gray-500">{{ text_playcount }}</span>
      </div>
      <div class="mt-1 color-gray-600">
        简介 : <span class="color-gray-500">{{ detail?.description }}</span>
      </div>
    </div>

  </n-space>


</template>

<script setup lang="ts">
import type { PlayListItem } from '@renderer/types/playlist'
import { parseTime } from '@renderer/utils/time'
import { getAssetsImg, numberFormat } from '@renderer/utils/utils'
import { AppSetting } from '@renderer/setting/app'
import MdContact from '@vicons/ionicons4/MdContact'
import MdPlay from '@vicons/ionicons4/MdPlay'
import Add20Regular from '@vicons/fluent/Add20Regular'
import ChannelAdd48Regular from '@vicons/fluent/ChannelAdd48Regular'
import ShareOutlined from '@vicons/material/ShareOutlined'

export interface Props {
  detail: PlayListItem;
}

const props = defineProps<Props>()

const defaultCover = getAssetsImg(AppSetting.playlist.defaultCover)


const text_playcount = computed(() => {
  if (!props.detail?.playCount) return ''
  return numberFormat(props.detail?.playCount)
})

const dateCreate = computed(() => {
  return parseTime(props.detail?.createTime, '{y}-{m}-{d}')
})
</script>

<style lang="less" scoped>

</style>
