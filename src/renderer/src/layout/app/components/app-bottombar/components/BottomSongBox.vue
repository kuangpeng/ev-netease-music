<template>
  <div class="song-box">
    <n-carousel
      class="carousel-wrap"
      ref="Carousel"
      direction="vertical"
      :loop="false"
      :show-dots="false"
      :touchable="false"
    >
      <song-box-card @toggleSlider="setCarousel" />
      <song-box-favor @toggleSlider="setCarousel" />
    </n-carousel>
  </div>
</template>

<script setup lang="ts">
import type { CarouselInst } from 'naive-ui'
import SongBoxCard from './SongBoxCard.vue'
import SongBoxFavor from './SongBoxFavor.vue'

const Carousel = ref<CarouselInst | null>(null)

const setCarousel = (status: boolean): void => {
  if (status) {
    Carousel.value && Carousel.value.to(1)
  } else {
    Carousel.value && Carousel.value.to(0)
  }
}

</script>

<style lang="less" scoped>
.song-box{
  position: relative;
  flex: 1;
}
.carousel-wrap{
  height: var(--app-bottombar-height);
}
</style>
