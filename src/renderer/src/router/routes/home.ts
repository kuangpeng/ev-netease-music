import { RouteRecordRaw } from 'vue-router'

import HomeLayout from '@renderer/layout/home/HomeLayout.vue'

const home: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomeLayout,
    redirect: { name: 'Recommand' },
    children: [
      {
        path: 'recommand',
        name: 'Recommand',
        component: () => import('@renderer/views/home/recommand.vue')
      },
      {
        path: 'customized',
        name: 'Customized',
        component: () => import('@renderer/views/home/customized.vue')
      },
      {
        path: 'playlist',
        name: 'PlayList',
        component: () => import('@renderer/views/home/playlist.vue')
      },
      {
        path: 'rank',
        name: 'Rank',
        component: () => import('@renderer/views/home/rank.vue')
      },
      {
        path: 'singer',
        name: 'Singer',
        component: () => import('@renderer/views/home/singer.vue')
      },
      {
        path: 'newest',
        name: 'Newest',
        component: () => import('@renderer/views/home/newest.vue')
      }
    ]
  }
]
export default home
