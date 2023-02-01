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
  }
]
export default index
