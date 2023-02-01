<template>
  <div class="hq-section">
    <div class="bg" :style="{backgroundImage: coverImgUrl + '?param=140y140'}"></div>
    <n-space type="flex" justify="center" align="start" :size="[10, 0]">
      <div class="cover">
        <img :src="coverImgUrl" :alt="name">
      </div>
      <div class="info">
        <div class="tag">
          <svg-icon name="crown" />
          <span>精品歌单</span>
        </div>
        <div class="name">{{ name }}</div>
      </div>
    </n-space>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id?: number;
  name?: string;
  coverImgUrl?: string;
}>()
</script>

<style lang="less" scoped>
.hq-section{
  position: relative;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  overflow: hidden;

  .bg{
    position: absolute;
    z-index:0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    filter: blur(5px);
  }

  .cover{
    width: 140px;
    height: 140px;
    border-radius: 5px;
    overflow: hidden;
  }
  .info{
    padding-top: 10px;

    .tag{
      display: inline-flex;
      justify-content: space-around;
      align-items: center;
      padding: 7px 14px;
      border: 1px solid #e7aa5a;
      border-radius: 20px;
      font-size: 14px;
      color: #e7aa5a;
      line-height: 1;

      span{
        margin-left: 5px;
      }
    }
    .name{
      margin-top: 25px;
      color: #fff;
    }
  }
}
</style>
