<template>
  <div v-show="isShow" class="hq-section" @click="handleToHQ">
    <div
      class="bg"
      :style="{ backgroundImage: `url(${hqsheetItem?.coverImgUrl}?param=1000)` }"
    ></div>
    <div class="hq-main">
      <n-space type="flex" justify="start" align="start" :size="[20, 0]">
        <div class="cover">
          <img :src="hqsheetItem?.coverImgUrl + '?param=140y140'" :alt="hqsheetItem?.name" />
        </div>
        <div class="info">
          <div class="tag">
            <svg-icon name="crown" />
            <span>精品歌单</span>
          </div>
          <div class="name">{{ hqsheetItem?.name }}</div>
        </div>
      </n-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import usePlaylistStore from '@renderer/store/modules/playlist'
import playlist from '@renderer/api/modules/playlist'
import type { PlayListItem } from '@renderer/types/playlist'

const router = useRouter()

const playlistStore = usePlaylistStore()

const props = defineProps<{
  name: string
}>()

const hqsheetItem = ref<PlayListItem | null>(null)

const hqTag = computed(() => {
  if (props.name == '全部歌单') return playlistStore.highQualityTags[0]
  const s = playlistStore.highQualityTags.filter((t) => t.name === props.name)
  return s ? s[0] : null
})

const isShow = computed<boolean>(() => {
  return !!hqTag.value
})

const handleToHQ = () => {
  router.push('/playlist/top/' + hqTag.value?.id)
}

watchEffect(() => {
  if (hqTag.value) {
    playlist
      .getHighqualityList({
        cat: hqTag.value.name,
        limit: 1
      })
      .then((res) => {
        hqsheetItem.value = res.playlists[0] ? res.playlists[0] : null
      })
  }
})
</script>

<style lang="less" scoped>
.hq-section {
  position: relative;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  .bg {
    position: absolute;
    top: -15%;
    left: -15%;
    z-index: 0;
    width: 130%;
    height: 130%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(50px);
  }

  .hq-main {
    position: relative;
    z-index: 1;
    padding: 15px;
  }
  .cover {
    width: 140px;
    height: 140px;
    border-radius: 5px;
    overflow: hidden;
  }
  .info {
    padding-top: 20px;

    .tag {
      display: inline-flex;
      justify-content: space-around;
      align-items: center;
      padding: 7px 14px;
      border: 1px solid #e7aa5a;
      border-radius: 20px;
      font-size: 14px;
      color: #e7aa5a;
      line-height: 1;

      span {
        margin-left: 5px;
      }
    }
    .name {
      margin-top: 25px;
      color: #fff;
    }
  }
}
</style>
