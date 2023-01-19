<template>
  <div class="carousel">
    <n-carousel
      ref="carousel"
      effect="card"
      prev-slide-style="transform: translateX(-130%) translateZ(-500px);"
      next-slide-style="transform: translateX(70%) translateZ(-500px);"
      style="height: 200px"
      :show-dots="false"
      :autoplay="true"
      :on-update:current-index="handleSlide"
    >
      <n-carousel-item v-for="(item, index) in carouselList" :key="index" :style="{ width: '60%' }">
        <div class="carousel-item">
          <img :src="item.img" />
        </div>
      </n-carousel-item>
    </n-carousel>
    <div class="carousel-arrows">
      <div class="arrow arrow-left" @click="handlePNSlide(-1)">
        <span>
          <n-icon><IosArrowBack /></n-icon>
        </span>
      </div>
      <div class="arrow arrow-right" @click="handlePNSlide(1)">
        <span>
          <n-icon><IosArrowForward /></n-icon>
        </span>
      </div>
    </div>
    <n-el>
      <div class="carousel-dots">
        <span v-for="(i, index) in carouselList" :key="index" :class="{ active: index == carouselIndex }" @click="handleChangeSlide(index)"></span>
      </div>
    </n-el>
  </div>
</template>

<script setup lang="ts">
import { CarouselInst } from 'naive-ui'
import IosArrowBack from '@vicons/ionicons4/IosArrowBack'
import IosArrowForward from '@vicons/ionicons4/IosArrowForward'

const carousel = ref<CarouselInst | null>(null)
const carouselList = ref([
  {
    id: 1,
    img: 'http://p1.music.126.net/xjp_xzlQCn9M56HPVce0QA==/109951168245145586.jpg?imageView&quality=89'
  },
  {
    id: 2,
    img: 'http://p1.music.126.net/xjp_xzlQCn9M56HPVce0QA==/109951168245145586.jpg?imageView&quality=89'
  },
  {
    id: 3,
    img: 'http://p1.music.126.net/xjp_xzlQCn9M56HPVce0QA==/109951168245145586.jpg?imageView&quality=89'
  }
])

const carouselIndex = ref(0)

const handleSlide = (currentIndex: number): void => {
  carouselIndex.value = currentIndex
}
const handleChangeSlide = (index: number): void => {
  carousel.value?.to(index)
}
const handlePNSlide = (flag: -1 | 1): void => {
  if (flag == -1) {
    carousel.value?.prev()
  } else {
    carousel.value?.next()
  }
}
</script>

<style lang="less" scoped>
.carousel:hover{
  .carousel-arrows{
    display: block;
  }
}
.carousel-item{
  height: 100%;
  border-radius: 8px;
  overflow: hidden;

  img{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
}
.carousel-dots{
  display: flex;
  justify-content: center;
  margin-top: 14px;

  span{
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--border-color);
    margin: 0 5px;
    cursor: pointer;

    &.active{
      background-color: var(--primary-color);
    }
  }
}
.carousel-arrows{
  display: none;
  position: relative;
  z-index: 3;
  width: 100%;

  .arrow{
    position: absolute;
    top: -115px;

    span{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      background-color: rgba(0, 0, 0, .2);
      border-radius: 50%;
      color: #fff;
      font-size: 18px;
      transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;

      &:hover{
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .arrow-left{
    left: 10px;
  }
  .arrow-right{
    right: 10px;
  }
}
</style>
