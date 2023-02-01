<template>
  <section-block-item
    intro="根据您的音乐口味生成每日更新"
    title="每日推荐"
    link="/today"
    :show-top="false"
    :show-author="false"
  >
    <template #cover>
      <div class="cover">
        <div class="date">
          <n-icon size="80" :component="CalendarClearOutline" />
          <span>31</span>
        </div>
      </div>
    </template>
  </section-block-item>
</template>

<script setup lang="ts">
import CalendarClearOutline from '@vicons/ionicons5/CalendarClearOutline'
</script>

<style lang="less" scoped>
.cover{
  position: relative;
  width: 100%;
  height: 100%;
  background: url("@renderer/assets/images/cover-today.jpg") no-repeat center;
  background-size: 100% 100%;

  .date{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #fff;
    -webkit-backdrop-filter: blur(3px) brightness(70%);
    backdrop-filter: blur(3px) brightness(70%);

    span{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -25%);
      font-size: 26px;
      font-weight: bold;
      line-height: 1;
    }
  }
}
</style>
