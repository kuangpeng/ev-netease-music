<template>
  <n-space class="song-card" align=center :wrap-item="false" :size="[12, 0]">
    <div class="cover" @click="handleClickShow">
      <n-image
        width="48"
        src="https://www.runoob.com/try/demo_source/pineapple.jpg"
      />
      <div class="toggler flex-middle">
        <n-icon size="22" :component="ChevronUp48Regular" color="#fff" depth="1" />
      </div>
    </div>
    <div class="detail">
      <div class="detail-up flex-middle">
        <div class="song-name" @click="handleClickShow">它有不同的它有不同的它有不同的</div>
        <span class="tag_VIP">VIP</span>
        <span class="tag_ST">试听</span>
        <n-button text>
          <n-icon size="23" :component="IosHeartEmpty" depth="3" />
        </n-button>
      </div>
      <div class="detail-bottom">
        它有不同的
      </div>
    </div>
  </n-space>

</template>

<script setup lang="ts">
import IosHeartEmpty from '@vicons/ionicons4/IosHeartEmpty'
import ChevronUp48Regular from '@vicons/fluent/ChevronUp48Regular'

const emit = defineEmits<{
  (e: 'toggleSlider', status: boolean): void
}>()

const handleClickShow = (): void => {
  emit('toggleSlider', true)
}
</script>

<style lang="less" scoped>
.song-card{
  height: var(--app-bottombar-height);
  padding-left: 12px;

  .cover{
    position: relative;
    cursor: pointer;
    z-index: 1;
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 4px;
    .toggler{
      display: none;
      position: absolute;
      z-index: 2;
      // background-color: rgba(0, 0, 0, .5);
      background-size: 100% 100%;
      -webkit-backdrop-filter: blur(2px) brightness(80%);
      backdrop-filter: blur(2px) brightness(70%);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: center;
      justify-content: center;
    }

    &:hover{
      .toggler{
        display: flex;
      }
    }
  }
  .detail{
    .detail-up{
      padding-top: 3px;
      height: 20px;
      margin-bottom: 5px;
    }
    .song-name{
      display: inline-block;
      max-width: 150px;
      height: 20px;
      overflow: hidden;
      white-space: nowrap;
    }
    .tag_VIP{
      font-size: 10px;
      padding: 1px 2px;
      line-height: 1;
      border: 1px solid var(--warning-color);
      border-radius: 3px;
      color: var(--warning-color);
      margin: 0 3px;
    }
    .tag_ST{
      font-size: 10px;
      padding: 1px 2px;
      line-height: 1;
      border: 1px solid var(--error-color);
      border-radius: 3px;
      color: var(--error-color);
      margin: 0 3px;
    }
    .detail-bottom{
      font-size: 0.85em;
    }
  }
}
</style>
