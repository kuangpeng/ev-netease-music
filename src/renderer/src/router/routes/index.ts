import { RouteRecordRaw } from 'vue-router'


const index: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/today',
    component: () => import('@renderer/views/detail/todayDetail.vue')
  },
  {
    path: '/playlist/:id',
    component: () => import('@renderer/views/detail/playlistDetail.vue')
  },
  {
    path: '/album/:id',
    component: () => import('@renderer/views/detail/albumDetail.vue')
  },
  {
    path: '/playlist/top/:id',
    component: () => import('@renderer/views/detail/playlistTopDetail.vue')
  },
  {
    path: '/user/:id',
    component: () => import('@renderer/views/detail/userDetail.vue')
  },
  {
    path: '/singer/:id',
    component: () => import('@renderer/views/detail/singerDetail.vue')
  },
]
export default index
