<template>
  <div class="tab-nav">
    <n-el>
      <ul role="list" :style="style">
        <template v-for="(n, index) in navs">
          <li v-if="n.link || n.value" :key="index">
            <router-link v-if="n.link" :to="n.link">
              <span>{{ n.title }}</span>
            </router-link>
            <a v-if="n.value" href="javascript:;" class="tab-link" :class="{active: index == currentTabIndex }" @click="handleClick(n, index)">
              <span>{{ n.title }}</span>
            </a>
          </li>
        </template>
      </ul>
    </n-el>
  </div>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { useRouter } from 'vue-router'

export interface Props {
  navs: Array<{
    title: string;
    link?: RouteLocationRaw;
    value?: string;
  }>;
  size?: number;
}

const router = useRouter()

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'change', value: string, index: number): void
}>()

const currentTabIndex = ref(0)

const handleClick = (n, index) => {
  if (n.link) {
    router.push(n.link)
  } else {
    currentTabIndex.value = index
    emit('change', n, index)
  }
}

const style = computed(() => {
  const style = {
    fontSize: '16px'
  }
  if (props.size) {
    style.fontSize = props.size + 'em'
  }
  return style
})

</script>

<style lang="less" scoped>
.tab-nav{
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #fff;

  ul{
    display: flex;
    // font-size: 16px;
    align-items: top;

    li{
      margin-right: 22px;

      a{
        display: block;
        position: relative;
        color: var(--text-color-1);
        line-height: 1;

        &.router-link-active{
          font-size: 1.2em;
          font-weight: bold;
          padding-bottom: 8px;

          &::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 80%;
            height: 3px;
            background-color: var(--primary-color);
          }
        }
      }

      a.tab-link.active{
        font-size: 1.2em;
        font-weight: bold;
        padding-bottom: 8px;

        &::after{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: 80%;
          height: 3px;
          background-color: var(--primary-color);
        }
      }
    }
  }
}
</style>
