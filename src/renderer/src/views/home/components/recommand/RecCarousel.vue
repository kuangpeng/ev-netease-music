<template>
  <div class="carousel">
    <n-carousel
      ref="carousel"
      effect="card"
      style="height: 200px"
      prev-slide-style="opacity:0.8;transform: translateX(-125%) translateZ(-250px);"
      next-slide-style="opacity:0.8;transform: translateX(25%) translateZ(-250px);"
      :transition-props="{ duration: 500 }"
      :show-dots="false"
      :autoplay="true"
      :on-update:current-index="handleSlide"
    >
      <n-carousel-item v-for="(item, index) in carouselList" :key="index" :style="{ width: '50%' }">
        <div class="carousel-item" @click="handleClick(index)">
          <img :src="item.imageUrl + '?param=540y200'" />
          <span class="type" :style="{ backgroundColor: item.titleColor }">{{
            item.typeTitle
          }}</span>
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
        <span
          v-for="index in carouselList.length"
          :key="index"
          :class="{ active: index - 1 == carouselIndex }"
          @click="handleChangeSlide(index - 1)"
        ></span>
      </div>
    </n-el>
  </div>
</template>

<script setup lang="ts">
import { CarouselInst } from 'naive-ui'
import IosArrowBack from '@vicons/ionicons4/IosArrowBack'
import IosArrowForward from '@vicons/ionicons4/IosArrowForward'
import type { Banner } from '@renderer/types/home'
import { TargetType } from '@renderer/types/song'
import { useRouter } from 'vue-router'

const router = useRouter()

const carousel = ref<CarouselInst | null>(null)
const carouselIndex = ref(0)

const props = defineProps<{
  carouselList: Banner[]
}>()

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

const handleClick = (index: number): void => {
  if (index == carouselIndex.value) {
    const target = props.carouselList[index]
    console.log(target.targetType)
    if (target.targetType == TargetType.PLAY) {
      // TODO: click to play
    } else if (target.targetType == TargetType.OPEN_URL) {
      // TODO: open url with browser
      window.open(target.url)
    } else if (target.targetType == TargetType.DETAIL) {
      router.push('/album/' + target.targetId)
    }
  }
}
</script>

<style lang="less" scoped>
.carousel:hover {
  .carousel-arrows {
    display: block;
  }
}
.carousel-item {
  position: relative;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;

  img {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  .type {
    position: absolute;
    right: 0;
    bottom: 0;
    border-top-left-radius: 8px;
    padding: 2px 5px;
    color: #fff;
    font-size: 0.8em;
  }
}
.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 14px;

  span {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--border-color);
    margin: 0 5px;
    cursor: pointer;

    &.active {
      background-color: var(--primary-color);
    }
  }
}
.carousel-arrows {
  display: none;
  position: relative;
  z-index: 3;
  width: 100%;

  .arrow {
    position: absolute;
    top: -115px;

    span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      color: #fff;
      font-size: 18px;
      transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .arrow-left {
    left: 10px;
  }
  .arrow-right {
    right: 10px;
  }
}
.n-carousel__slide--current {
  cursor: pointer;
}
</style>
